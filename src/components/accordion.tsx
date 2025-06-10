'use client';

import React, { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className='w-full mx-auto md:p-4 sm:p-6 lg:p-8'>
      {items.map((item, index) => (
        <div
          key={index}
          className='border border-gray-200 rounded-lg mb-4 shadow-sm bg-white hover:bg-[#E5E7EB] transition-colors'
        >
          <button
            onClick={() => toggle(index)}
            className='w-full text-left p-4 pl-6 pr-6 focus:outline-none flex justify-between items-center cursor-pointer'
          >
            <span className='font-medium text-gray-800'>{item.question}</span>
            <svg
              className={`w-6 h-6 transition-transform duration-200 ml-2 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className='px-6 pb-4 text-gray-600'>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
