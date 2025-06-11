'use client';

import React from 'react';
import Link from 'next/link';

interface MobileNavItem {
  key: string;
  label: string;
  href: string;
}

interface MobileNavLinksProps {
  navItems: MobileNavItem[];
}

const MobileNavLinks: React.FC<MobileNavLinksProps> = ({ navItems }) => {
  return (
    <div className='lg:hidden mt-4 py-2 w-full bg-white shadow-md rounded-b-md absolute left-0 right-0 '>
      {navItems.map((nav, index) => (
        <div
          key={nav.key}
          className={`px-4 py-2 ${
            index === navItems.length - 1 ? 'border-b-0' : ''
          }`}
        >
          <Link
            href={nav.href}
            className='block text-[#351C24] font-normal text-base'
          >
            {nav.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MobileNavLinks;
