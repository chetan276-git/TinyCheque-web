'use client';
import React from 'react';
import { motion } from 'framer-motion';

const WhyTinyCheque = () => {
  interface Comparison {
    features: string;
    tinyChequePartnership: { text: string; positive: boolean };
    method: { text: string; positive: boolean };
  }

  const comparisons: Comparison[] = [
    {
      features: '50-50 Co-Founder Commitment',
      tinyChequePartnership: {
        text: 'AI-First Focus',
        positive: true,
      },
      method: { text: 'No', positive: false },
    },
    {
      features: 'End-to-End Support (Marketing, Sales, Tech)',
      tinyChequePartnership: { text: 'Join Ventures', positive: true },
      method: { text: 'Limited to Funding', positive: false },
    },
    {
      features: 'Deep AI Expertise',
      tinyChequePartnership: {
        text: 'End-to-End Product Support',
        positive: true,
      },
      method: { text: 'General Tech Knowledge', positive: false },
    },
    {
      features: 'Full Growth & GTM Strategy',
      tinyChequePartnership: { text: 'Market Entry & Scaling', positive: true },
      method: { text: 'No Strategic Involvement', positive: false },
    },
    {
      features: 'Access to Global Network',
      tinyChequePartnership: {
        text: 'Industry Expertise',
        positive: true,
      },
      method: { text: 'Limited to Investor Circles', positive: false },
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <section className='bg-[#FBFBFB]'>
      <div className='container'>
        <motion.div
          className='flex flex-col gap-2 sm:gap-2 items-center text-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
            (You vs. Competitors)
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
            Why TinyCheque
          </h2>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
            Is Your Best Co-Founder
          </h2>
          <p className='text-[#864A5B] text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose'>
            Software comparison is the process of deeply analyzing multiple
            similar software based on critical parameters like features,
            pricing, ratings, etc
          </p>
        </motion.div>

        <motion.div
          className='bg-white rounded-3xl shadow-lg overflow-hidden p-2 mt-8 mb-2 w-full max-w-full overflow-x-auto'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Desktop */}
          <div className='hidden sm:block'>
            <div className='grid grid-cols-3 bg-white font-semibold text-base md:text-lg lg:text-xl'>
              <div className='p-3 border-b border-[#e2e7f0] sm:border-r'>
                Factors
              </div>
              <div className='p-3 border-b border-[#e2e7f0] sm:border-r'>
                TinyCheque Partnership
              </div>
              <div className='p-3 border-b border-[#e2e7f0]'>
                Traditional Method
              </div>
            </div>
            {comparisons.map(
              ({ features, tinyChequePartnership, method }, idx) => (
                <motion.div
                  key={idx}
                  className='grid grid-cols-3 border-b border-[#e2e7f0] [&:last-child]:border-none [&>div:not(:last-child)]:border-r [&>div:not(:last-child)]:border-r-[#e2e7f0]'
                  custom={idx + 1}
                  variants={fadeUp}
                >
                  <div className='p-3 text-sm md:text-base'>{features}</div>
                  {[tinyChequePartnership, method].map(
                    ({ text, positive }, i) => (
                      <div
                        key={i}
                        className='p-3 flex items-center text-sm md:text-base'
                      >
                        {positive ? <CheckIcon /> : <XIcon />}
                        {text}
                      </div>
                    )
                  )}
                </motion.div>
              )
            )}
          </div>

          {/* Mobile */}
          <div className='block sm:hidden divide-y divide-[#e2e7f0]'>
            {comparisons.map(
              ({ features, tinyChequePartnership, method }, idx) => (
                <motion.div
                  key={idx}
                  className='py-4 first:pt-2 last:pb-2'
                  custom={idx + 1}
                  variants={fadeUp}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                >
                  <div className='font-semibold text-base mb-3 text-[#351C24]'>
                    {features}
                  </div>
                  {[
                    {
                      label: 'TinyCheque Partnership',
                      value: tinyChequePartnership,
                    },
                    { label: 'Incubators', value: method },
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
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTinyCheque;

// Icons remain unchanged
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
    />
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
    />
  </svg>
);
