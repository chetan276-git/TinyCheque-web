import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-[#3B4595] text-white py-8 px-4 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>
          <div className='col-span-1 md:col-span-2'>
            <Link href='/' className='flex-shrink-0'>
              <Image
                src='/images/logo/tinylogowhite.svg'
                alt='Logo'
                width={150}
                height={40}
                priority
              />
            </Link>
            <div className='flex gap-2 mt-3 items-center'>
              <div className='flex items-center mb-2 text-[#EEDDDF]'>
                <svg
                  className='w-4 h-4 mr-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
                <span>hello@tinycheque.com</span>
              </div>
            </div>
            <div className='flex gap-2'>
              <div>
                <h3 className='text-sm text-[#CE9EA6] font-semibold mb-1'>
                  India Address:
                </h3>
                <p className='text-[#EEDDDF] text-xs'>
                  TinyCheque Ventures Private Limited
                  <br />
                  Floor No.: 9 Floor, Tower-B3, Unit No-935, Spaze I Tech Park,
                  Sohna Road, Gurugram, Haryana, 122018
                </p>
              </div>
              <div>
                <h3 className='text-sm text-[#CE9EA6] font-semibold mb-1'>
                  US Address:
                </h3>
                <p className='text-[#EEDDDF] text-xs'>
                  TinyCheque, Inc.
                  <br />
                  131 Continental Dr, Suite 305, Newark, Delaware 19713
                </p>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className='font-base text-sm mb-4 text-[#CE9EA6]'>Services</h3>
            <ul className='space-y-2 text-[#EEDDDF] font-medium text-md'>
              <li>
                <Link href='/services/saas-audit'>Saas Audit</Link>
              </li>
              <li>
                <Link href='/services/saas-cro'>Saas CRO</Link>
              </li>
              <li>
                <Link href='/services/saas-sales'>Sales SPO</Link>
              </li>
              <li>
                <Link href='/services/saas-consultant'>SaaS Consultation</Link>
              </li>
              <li>
                <Link href='/services/performance-marketing'>
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href='/services/ai-agents'>AI Agents</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className='font-base text-sm mb-4 text-[#CE9EA6]'>Company</h3>
            <ul className='space-y-2 text-[#EEDDDF] font-medium text-md'>
              <li>
                <Link href='/company/about'>About</Link>
              </li>
              <li>
                <Link href='/blog'>Blogs</Link>
              </li>
            </ul>
          </div>

          {/* Social Links (external, keep as <a>) */}
          <div>
            <h3 className='font-base text-sm mb-4 text-[#CE9EA6]'>Social</h3>
            <ul className='space-y-2 text-[#EEDDDF] font-medium text-md'>
              <li>
                <a
                  href='https://www.linkedin.com/company/tinycheque/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href='https://x.com/tinychequehq'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href='https://www.youtube.com/@TinyCheque'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className='font-base text-sm mb-4 text-[#CE9EA6]'>Legal</h3>
            <ul className='space-y-2 text-[#EEDDDF] font-medium text-md'>
              <li>
                <a href='mailto:hello@tinycheque.com'>Contact Us</a>
              </li>
              <li>
                <Link href='/terms'>Terms</Link>
              </li>
              <li>
                <Link href='/privacy-policy'>Privacy</Link>
              </li>
              <li>
                <Link href='/cookies'>Cookies</Link>
              </li>
              <li>
                <Link href='/refund'>Refund</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-[#EEDDDF]'>
          <p className='text-sm mb-4 md:mb-0'>
            © 2025 TinyCheque. All rights reserved.
          </p>
          <div className='flex space-x-4'>
            {/* Social icons */}
            <a
              href='https://www.linkedin.com/company/tinycheque/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M20.447 20.452h-3.554v-5.569...' />
              </svg>
            </a>
            <a
              href='https://x.com/tinychequehq'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M23.953 4.57a10 10 0 01-2.825...' />
              </svg>
            </a>
            <a
              href='https://www.youtube.com/@TinyCheque'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M23.498 6.186a3.016 3.016 0...' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
