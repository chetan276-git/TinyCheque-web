'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AngleArrowDown } from './icons/angle-arrow-down';
import { SupportIcon } from './icons/support';
import { ContactIcon } from './icons/contact-icon';
import ServicesDropdown from './services-dropdown';
import MobileNavLinks from './mobile-nav-links';

const Header = () => {
  const [showFixedTopBar, setShowFixedTopBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowFixedTopBar(true);
      } else {
        setShowFixedTopBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [dropdowns, setDropdowns] = useState({
    terms: false,
    company: false,
    services: false,
    products: false,
    resources: false,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const termsRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  const stableRefs = {
    terms: termsRef,
    company: companyRef,
    services: servicesRef,
    products: productsRef,
    resources: resourcesRef,
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const updated = { ...dropdowns };
      for (const key in stableRefs) {
        const ref = stableRefs[key as keyof typeof stableRefs];
        if (ref.current && !ref.current.contains(event.target as Node)) {
          updated[key as keyof typeof dropdowns] = false;
        }
      }
      setDropdowns(updated);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdowns({
          terms: false,
          company: false,
          services: false,
          products: false,
          resources: false,
        });
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [dropdowns]);

  const toggleDropdown = (key: keyof typeof dropdowns) => {
    setDropdowns((prev) => {
      const updated = Object.fromEntries(
        Object.keys(prev).map((k) => [k, false])
      ) as typeof prev;
      updated[key] = !prev[key];
      return updated;
    });
  };

  const navItems = [
    {
      key: 'services',
      label: 'Services',
      links: [{ href: '#', label: 'services' }],
    },
    {
      key: 'tools',
      label: 'Tools',
    },
    {
      key: 'products',
      label: 'Products',
      links: [
        { href: '/products/niyam.ai', label: 'Niyam.ai' },
        { href: '/products/autoposting.ai', label: 'Autoposting.ai' },
        { href: '/products/qcall.ai', label: 'Qcall' },
        { href: '/products/fableshorts.com', label: 'Fable Shorts' },
      ],
    },
    {
      key: 'resources',
      label: 'Resources',
      links: [{ href: '#', label: 'Blog' }],
    },
    {
      key: 'schedulecall',
      label: 'Schedule a call',
    },
  ];

  const mobileNavItems = [
    {
      key: 'services',
      label: 'Services',
      href: '/',
    },
    {
      key: 'blog',
      label: 'Blog',
      href: '/',
    },
    {
      key: 'tools',
      label: 'Tools',
      href: '/',
    },
    {
      key: 'products',
      label: 'Products',
      href: '/products',
    },
    {
      key: 'partnership',
      label: 'Partnership',
      href: '/partnership',
    },
    {
      key: 'investors',
      label: 'Investors',
      href: '/investors',
    },
  ];

  return (
    <header className='bg-white shadow-sm relative z-50'>
      <div className='container mx-auto max-w-6xl px-4 py-4'>
        {/* Top Bar */}
        <div
          className={`w-full bg-white transition-all duration-300 z-50  mb-4 ${
            showFixedTopBar
              ? 'fixed top-0 left-0 right-0 w-full flex items-center py-4'
              : ''
          }`}
        >
          <div className='container'>
            <div className='flex justify-between items-center text-sm text-[#864A5B]'>
              <div className='flex space-x-4'>
                <Link
                  href='mailto:hello@company.com'
                  className='font-medium flex items-center gap-2 cursor-pointer'
                >
                  <SupportIcon />
                  Customer Support
                </Link>
                <Link
                  href='mailto:sales@company.com'
                  className='font-medium flex items-center gap-2 cursor-pointer'
                >
                  <ContactIcon />
                  Contact Sales
                </Link>
              </div>

              <div className='hidden md:flex space-x-4'>
                <div className='relative' ref={termsRef}>
                  <button
                    onClick={() => toggleDropdown('terms')}
                    className='font-semibold flex items-center cursor-pointer'
                  >
                    Terms & Policy
                    <span
                      className={`inline-flex transform transition-transform duration-300 origin-center ${
                        dropdowns.terms ? 'rotate-180' : ''
                      }`}
                    >
                      <AngleArrowDown />
                    </span>
                  </button>
                  {dropdowns.terms && (
                    <div className='absolute top-full left-0 mt-2 w-48 bg-white shadow-md rounded-md z-20'>
                      <Link
                        href='/terms'
                        className='block px-6 py-2 text-sm font-semibold text-[#864A5B] hover:bg-gray-100'
                      >
                        Terms of Use
                      </Link>
                      <Link
                        href='/privacy-policy'
                        className='block px-6 py-2 text-sm font-semibold text-[#864A5B] hover:bg-gray-100'
                      >
                        Privacy Policy
                      </Link>
                      <Link
                        href='/cookies'
                        className='block px-6 py-2 text-sm font-semibold text-[#864A5B] hover:bg-gray-100'
                      >
                        Cookies
                      </Link>
                      <Link
                        href='/refund'
                        className='block px-6 py-2 text-sm font-semibold text-[#864A5B] hover:bg-gray-100'
                      >
                        Refund
                      </Link>
                    </div>
                  )}
                </div>

                <div className='relative' ref={companyRef}>
                  <Link
                    href='/partnership'
                    className='font-semibold flex items-center cursor-pointer'
                  >
                    Partnership
                  </Link>
                </div>

                <div className='relative'>
                  <Link
                    href='/investors'
                    className='font-semibold flex items-center cursor-pointer'
                  >
                    Investors
                  </Link>
                </div>

                <div className='relative' ref={companyRef}>
                  <button
                    onClick={() => toggleDropdown('company')}
                    className='font-semibold flex items-center cursor-pointer'
                  >
                    Company
                    <span
                      className={`inline-flex transform transition-transform duration-300 origin-center ${
                        dropdowns.company ? 'rotate-180' : ''
                      }`}
                    >
                      <AngleArrowDown />
                    </span>
                  </button>
                  {dropdowns.company && (
                    <div className='absolute top-full right-0 mt-2 w-48 bg-white shadow-md rounded-md z-20'>
                      <Link
                        href='/company/about-us'
                        className='block px-6 py-2 text-sm text-[#864A5B] font-semibold hover:bg-gray-100'
                      >
                        About Us
                      </Link>
                      <Link
                        href='/company/our-story'
                        className='block px-6 py-2 text-sm text-[#864A5B] font-semibold hover:bg-gray-100'
                      >
                        Our Story
                      </Link>
                      <Link
                        href='/company/why-us'
                        className='block px-6 py-2 text-sm text-[#864A5B] font-semibold hover:bg-gray-100'
                      >
                        Why Choose Us
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Logo and Nav */}
        <div className='flex justify-between md:justify-start gap-10 items-center'>
          <Link href='/' className='flex-shrink-0'>
            <Image
              src='/images/logo/tiny-logo.svg'
              alt='Logo'
              width={150}
              height={40}
              priority
            />
          </Link>

          <nav className='hidden lg:flex items-center space-x-6 text-[#864A5B] font-semibold'>
            {navItems.map((nav) => (
              <div
                key={nav.key}
                ref={stableRefs[nav.key as keyof typeof stableRefs]}
              >
                <button
                  onClick={() =>
                    toggleDropdown(nav.key as keyof typeof dropdowns)
                  }
                  className='flex items-center gap-1 cursor-pointer'
                >
                  <span className='text-[#864A5B] font-semibold flex items-center'>
                    {' '}
                    {nav.label}
                  </span>
                  {nav.links && (
                    <span
                      className={`inline-flex transform transition-transform duration-300 origin-center ${
                        dropdowns[nav.key as keyof typeof dropdowns]
                          ? 'rotate-180'
                          : ''
                      }`}
                    >
                      <AngleArrowDown />
                    </span>
                  )}
                </button>

                {nav.key === 'services' && dropdowns.services && (
                  <div className='hidden lg:block'>
                    <ServicesDropdown
                      onClose={() => toggleDropdown('services')}
                    />
                  </div>
                )}

                <div className='relative'>
                  {nav.key !== 'services' &&
                    dropdowns[nav.key as keyof typeof dropdowns] &&
                    nav.links && (
                      <div className='absolute top-full left-0 mt-2 w-auto bg-white shadow-md rounded-md z-20'>
                        {nav.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className='block px-6 py-2 text-sm text-[#864A5B] hover:bg-gray-100'
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              </div>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className='lg:hidden'>
            <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
              <svg
                className='w-6 h-6 text-[#864A5B]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  d='M4 6h16M4 12h16M4 18h16'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <MobileNavLinks navItems={mobileNavItems} closeMenu={closeMenu} />
        )}
      </div>
    </header>
  );
};

export default Header;
