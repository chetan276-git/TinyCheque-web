'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface MobileNavItem {
  key: string;
  label: string;
  href?: string;
  links?: { href: string; label: string }[];
}

interface MobileNavLinksProps {
  navItems: MobileNavItem[];
  closeMenu: () => void;
}

const MobileNavLinks: React.FC<MobileNavLinksProps> = ({
  navItems,
  closeMenu,
}) => {
  const [openDropdownKey, setOpenDropdownKey] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    setOpenDropdownKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <div className='lg:hidden mt-4 py-2 w-full bg-white shadow-md rounded-b-md absolute left-0 right-0 z-50'>
      {navItems.map((nav) => (
        <div key={nav.key} className='px-4'>
          {nav.links ? (
            <>
              <button
                onClick={() => toggleDropdown(nav.key)}
                className='w-full text-left text-[#351C24] font-normal text-base py-2 flex justify-between items-center'
              >
                {nav.label}
                <span>
                  {openDropdownKey === nav.key ? (
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6 15L12 9L18 15'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  ) : (
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6 9L12 15L18 9'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  )}
                </span>
              </button>
              {openDropdownKey === nav.key && (
                <div className='ml-4 mt-1 space-y-1'>
                  {nav.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className='block text-sm text-[#351C24] py-1'
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              href={nav.href || '/'}
              className='block text-[#351C24] font-normal text-base py-2'
              onClick={closeMenu}
            >
              {nav.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileNavLinks;
