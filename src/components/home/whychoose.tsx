'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WhyChoose = () => {
  interface Comparison {
    factor: string;
    tinyCheque: { text: string; positive: boolean };
    competitor: { text: string; positive: boolean };
  }

  const comparisons: Comparison[] = [
    {
      factor: 'AI-First Focus',
      tinyCheque: { text: 'AI is the core of our SaaS', positive: true },
      competitor: { text: 'General startup focus', positive: false },
    },
    {
      factor: 'Joint Ventures',
      tinyCheque: { text: 'Active co-development', positive: true },
      competitor: { text: 'Focus on funding only', positive: false },
    },
    {
      factor: 'End-to-End Product Support',
      tinyCheque: { text: 'Full lifecycle support', positive: true },
      competitor: { text: 'Limited hands‑on involvement', positive: false },
    },
    {
      factor: 'Market Entry & Scaling',
      tinyCheque: { text: 'We help scale globally', positive: true },
      competitor: { text: 'Primarily seed‑stage focus', positive: false },
    },
    {
      factor: 'Industry Expertise',
      tinyCheque: { text: 'Specialization in AI SaaS', positive: true },
      competitor: { text: 'Broad industry focus', positive: false },
    },
  ];

  return (
    <section className='bg-[#fbfbfb]'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex flex-col gap-2 sm:gap-2 items-center text-center'
        >
          <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
            Comparison Section (You vs. Competitors)
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
            Why choose TinyCheque
          </h2>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
            as your venture partner?
          </h2>
          <p className='text-[#864A5B] text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose'>
            Software comparison is the process of deeply analyzing multiple
            similar software based on critical parameters like features,
            pricing, ratings, etc.
          </p>
        </motion.div>

        <div className='bg-white rounded-3xl shadow-lg overflow-hidden p-2 mt-8 mb-2 w-full max-w-full overflow-x-auto'>
          {/* Desktop Table */}
          <div className='hidden sm:block'>
            <div className='grid grid-cols-3 bg-white font-semibold text-base md:text-lg lg:text-xl'>
              <div className='p-3 border-b border-[#e2e7f0] sm:border-r'>
                Factors
              </div>
              <div className='p-3 border-b border-[#e2e7f0] sm:border-r'>
                TinyCheque
              </div>
              <div className='p-3 border-b border-[#e2e7f0]'>
                Incubators/Accelerators
              </div>
            </div>

            {comparisons.map(({ factor, tinyCheque, competitor }, idx) => (
              <motion.div
                key={idx}
                className='grid grid-cols-3 border-b border-[#e2e7f0] [&:last-child]:border-none [&>div:not(:last-child)]:border-r [&>div:not(:last-child)]:border-r-[#e2e7f0]'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className='p-3 text-sm md:text-base'>{factor}</div>
                {[tinyCheque, competitor].map(({ text, positive }, i) => (
                  <div
                    key={i}
                    className='p-3 flex items-center text-sm md:text-base'
                  >
                    {positive ? <CheckIcon /> : <XIcon />}
                    {text}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className='block sm:hidden divide-y divide-[#e2e7f0]'>
            {comparisons.map(({ factor, tinyCheque, competitor }, idx) => (
              <motion.div
                key={idx}
                className='py-4 first:pt-2 last:pb-2'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className='font-semibold text-base mb-3 text-[#351C24]'>
                  {factor}
                </div>
                {[
                  { label: 'TinyCheque', value: tinyCheque },
                  { label: 'Incubators', value: competitor },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className='flex items-center justify-between mb-2'
                  >
                    <span className='font-semibold text-sm text-gray-600'>
                      {label}
                    </span>
                    <div className='flex items-center text-sm'>
                      {value.positive ? <CheckIcon /> : <XIcon />}
                      <span className='text-[#351C24]'>{value.text}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className='flex justify-center items-center mt-4 md:mt-12 md:max-w-2/4 mx-auto'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a href='https://cal.com/team/tinycheque/services'>
            <button className='px-6 py-4 bg-[#2F4085] rounded-md mt-8 mb-4'>
              <h6 className='text-white text-base font-medium'>
                Schedule Your Audit Today
              </h6>
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;

// Icons
const CheckIcon = () => (
  <svg
    className='w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-500 flex-shrink-0'
    fill='currentColor'
    viewBox='0 0 20 20'
  >
    <path
      fillRule='evenodd'
      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
      clipRule='evenodd'
    ></path>
  </svg>
);

const XIcon = () => (
  <svg
    className='w-4 h-4 md:w-5 md:h-5 mr-2 text-red-500 flex-shrink-0'
    fill='currentColor'
    viewBox='0 0 20 20'
  >
    <path
      fillRule='evenodd'
      d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
      clipRule='evenodd'
    ></path>
  </svg>
);
