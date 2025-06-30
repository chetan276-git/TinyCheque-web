'use client';

import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const WhyInvest = () => {
  const stats = [
    {
      figure: '20x',
      title: 'Indian SaaS market',
      subtitle: 'is set to grow in 2030',
    },
    {
      figure: '$50-70 Billion',
      title: 'Reaching total market size',
      subtitle: 'Driven by AI Powered automation & cloud transformation',
    },
    {
      figure: '$195 Billion',
      title: 'Global SaaS market',
      subtitle: 'valued in 2023',
    },
    {
      figure: '17.94%',
      title: 'Is projected',
      subtitle: 'to grow at a CAGR',
    },
    {
      figure: '$470 Billion',
      title: 'Reaching Over',
      subtitle: 'by 2027',
    },
    {
      figure: '$150 Billion to over $1 Trillion',
      title: 'AI market',
      subtitle: 'expected to grow in 2030',
    },
    {
      figure: '$50 Billion',
      title: 'Generative AI attracted in Venture capital funding in 2022',
      subtitle: '10x in just two years',
    },
  ];

  return (
    <section className='bg-[#FBFBFB]'>
      <div className='container'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
            Why Invest in TinyCheque?
          </h2>
          <p className='text-xl text-gray-600'>
            India`&lsquo;`s first AI-First SaaS Venture Studio
          </p>
        </div>
        <div className='mt-8 max-w-6xl container'>
          <h1 className='text-xl text-[#351C24] font-semibold pl-6'>
            Riding the Wave of Explosive Market Growth
          </h1>
          <h3 className='text-md font-medium text-[#864A5B] flex items-center gap-2 mb-6 mt-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 md:w-6 md:h-6'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z'
                stroke='#864A5B'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12 8V13'
                stroke='#864A5B'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M11.9941 16H12.0031'
                stroke='#864A5B'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            The global SaaS market is growing rapidly, driven by AI integration
            across industries. According to Motilal Oswald India NEXT report
          </h3>

          {/* Cards Grid with animation */}
          <div className='flex flex-col space-y-4 max-w-6xl mx-auto'>
            {stats.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='flex flex-col md:flex-row md:items-center justify-between bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow'
              >
                <div className='text-3xl md:text-3xl font-bold text-gray-900 mb-2 pl-6 md:mb-0 md:w-1/3'>
                  {item.figure}
                </div>
                <div className='text-sm text-gray-600 md:w-2/3 pl-4'>
                  <div className='font-medium text-xl text-[#864A5B]'>
                    {item.title}
                  </div>
                  <div className='text-[#864A5B] text-xl'>{item.subtitle}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
