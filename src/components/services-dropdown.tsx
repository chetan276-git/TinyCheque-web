'use client';

import { AngleArrowRight } from './icons/angle-arrow-right';
import { Consultation } from './icons/consultation';
import { Growth01 } from './icons/growth01';
import { Sales01 } from './icons/sales01';
import { Search01 } from './icons/search1';

const services = [
  {
    title: 'SaaS Audit',
    description:
      'Comprehensive SaaS Auditing to Maximize Growth, Optimize Efficiency...',
    icon: <Search01 />,
    link: '#',
  },
  {
    title: 'SaaS CRO',
    description:
      'Comprehensive SaaS Auditing to Maximize Growth, Optimize Efficiency...',
    icon: <Growth01 />,
    link: '/services/saas-cro',
  },
  {
    title: 'Sales SOP',
    description:
      'Comprehensive SaaS Auditing to Maximize Growth, Optimize Efficiency...',
    icon: <Sales01 />,
    link: '/services/sales-sop',
  },
  {
    title: 'SaaS Consultation',
    description:
      'Comprehensive SaaS Auditing to Maximize Growth, Optimize Efficiency...',
    icon: <Consultation />,
    link: '/services/saas-consultation',
  },
  {
    title: 'Performance Marketing',
    description:
      'Comprehensive SaaS Auditing to Maximize Growth, Optimize Efficiency...',
    icon: <Consultation />,
    link: '/services/performance-marketing',
  },
  {
    title: 'AI Agents',
    description:
      'Comprehensive SaaS Auditing to Maximize Growth, Optimize Efficiency...',
    icon: <Sales01 />,
    link: '/services/ai-agents',
  },
];

export default function ServicesDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className='absolute z-20 top-26 left-0 w-full '>
      {/* Close Button */}
      <div
        className='w-full flex justify-end mb-2 px-4 cursor-pointer'
        onClick={onClose}
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z'
            fill='#BC808C'
          ></path>
          <path
            d='M9.17011 15.58C8.98011 15.58 8.79011 15.51 8.64011 15.36C8.35011 15.07 8.35011 14.59 8.64011 14.3L14.3001 8.63999C14.5901 8.34999 15.0701 8.34999 15.3601 8.63999C15.6501 8.92999 15.6501 9.40998 15.3601 9.69998L9.70011 15.36C9.56011 15.51 9.36011 15.58 9.17011 15.58Z'
            fill='#BC808C'
          ></path>
          <path
            d='M14.8301 15.58C14.6401 15.58 14.4501 15.51 14.3001 15.36L8.64011 9.69998C8.35011 9.40998 8.35011 8.92999 8.64011 8.63999C8.93011 8.34999 9.41011 8.34999 9.70011 8.63999L15.3601 14.3C15.6501 14.59 15.6501 15.07 15.3601 15.36C15.2101 15.51 15.0201 15.58 14.8301 15.58Z'
            fill='#BC808C'
          ></path>
        </svg>
      </div>
      <div className='border bg-white shadow-xl z-50 border-[#e2e8f0] flex p-6'>
        {/* Left Sidebar */}
        <div className='w-64 hidden md:block bg-white border-r border-gray-200 p-4'>
          <button className='cursor-pointer w-full text-left px-2 py-2 text-[#864A5B] hover:bg-gray-100 rounded-md flex items-center justify-between text-sm'>
            Services
            <AngleArrowRight />
          </button>
        </div>
        {/* Right Content */}
        <div className='w-3/4 pl-6 relative'>
          {/* Grid of Cards */}
          <div className='grid grid-cols-4 gap-4 mt-6'>
            {services.map((service, index) => (
              <div
                key={index}
                className='border border-[#e2e8f0] rounded-lg p-4 hover:shadow-lg transition flex gap-4 cursor-pointer'
              >
                <div className='w-12 h-12 rounded-sm bg-blue-50 p-2 flex justify-center items-center'>
                  {service.icon}
                </div>
                <div className='w-[calc(100%-40px)]'>
                  <h3 className='font-semibold text-sm text-[#351C24]'>
                    {service.title}
                  </h3>
                  <p className='text-xs font-normal text-[#BC808C] mt-1'>
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className='mt-2 text-[#3E64D2] text-sm font-medium flex items-center gap-1'
                  >
                    Explore More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
