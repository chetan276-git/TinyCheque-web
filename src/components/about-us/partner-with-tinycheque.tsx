'use client';
import React from 'react';
import { motion } from 'framer-motion';

const PartnerWithTinycheque = () => {
  const features = [
    {
      title: 'AI-First Focus',
      description:
        "At TinyCheque, AI is not an afterthought—it's the core of our entire operation. Every solution we build is designed to leverage the power of AI for scalability, efficiency, and intelligence.",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={49}
          height={48}
          viewBox='0 0 49 48'
          fill='none'
        >
          <path
            d='M43 18.2994C38.38 11.0394 31.62 6.85938 24.5 6.85938C20.94 6.85938 17.48 7.89937 14.32 9.83938C11.16 11.7994 8.32 14.6594 6 18.2994C4 21.4394 4 26.5394 6 29.6794C10.62 36.9594 17.38 41.1194 24.5 41.1194C28.06 41.1194 31.52 40.0794 34.68 38.1394C37.84 36.1794 40.68 33.3194 43 29.6794C45 26.5594 45 21.4394 43 18.2994ZM24.5 32.0794C20.02 32.0794 16.42 28.4594 16.42 23.9994C16.42 19.5394 20.02 15.9194 24.5 15.9194C28.98 15.9194 32.58 19.5394 32.58 23.9994C32.58 28.4594 28.98 32.0794 24.5 32.0794Z'
            fill='#351C24'
          />
          <path
            d='M24.4998 18.2793C21.3598 18.2793 18.7998 20.8393 18.7998 23.9993C18.7998 27.1393 21.3598 29.6993 24.4998 29.6993C27.6398 29.6993 30.2198 27.1393 30.2198 23.9993C30.2198 20.8593 27.6398 18.2793 24.4998 18.2793Z'
            fill='#351C24'
          />
        </svg>
      ),
    },
    {
      title: 'Joint Ventures for Shared Success',
      description:
        'Unlike traditional accelerators or incubators that provide funding and guidance, we actively co-develop SaaS products with our partners. This means we share both the risks and rewards of every product we build together.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={49}
          height={48}
          viewBox='0 0 49 48'
          fill='none'
        >
          <path
            d='M32.5 4H16.5C9.5 4 6.5 8 6.5 14V34C6.5 40 9.5 44 16.5 44H32.5C39.5 44 42.5 40 42.5 34V14C42.5 8 39.5 4 32.5 4ZM21.56 32.94C22.14 33.52 22.14 34.48 21.56 35.06C21.26 35.36 20.88 35.5 20.5 35.5C20.12 35.5 19.74 35.36 19.44 35.06L15.44 31.06C14.86 30.48 14.86 29.52 15.44 28.94L19.44 24.94C20.02 24.36 20.98 24.36 21.56 24.94C22.14 25.52 22.14 26.48 21.56 27.06L18.62 30L21.56 32.94ZM33.56 31.06L29.56 35.06C29.26 35.36 28.88 35.5 28.5 35.5C28.12 35.5 27.74 35.36 27.44 35.06C26.86 34.48 26.86 33.52 27.44 32.94L30.38 30L27.44 27.06C26.86 26.48 26.86 25.52 27.44 24.94C28.02 24.36 28.98 24.36 29.56 24.94L33.56 28.94C34.14 29.52 34.14 30.48 33.56 31.06ZM37.5 18.5H33.5C30.46 18.5 28 16.04 28 13V9C28 8.18 28.68 7.5 29.5 7.5C30.32 7.5 31 8.18 31 9V13C31 14.38 32.12 15.5 33.5 15.5H37.5C38.32 15.5 39 16.18 39 17C39 17.82 38.32 18.5 37.5 18.5Z'
            fill='#351C24'
          />
        </svg>
      ),
    },
    {
      title: 'End-to-End Product Support',
      description:
        "From ideation to post-launch scaling, TinyCheque provides comprehensive support at every stage of your SaaS product's lifecycle. We offer continuous optimization, AI integration, and market scaling strategies to ensure sustained success.",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={49}
          height={48}
          viewBox='0 0 49 48'
          fill='none'
        >
          <path
            d='M39.4001 13.8793V18.8993C39.4001 20.3193 37.9601 21.2393 36.6201 20.7393C34.9401 20.1193 33.0801 19.8793 31.1201 20.0793C26.3601 20.5993 21.4801 25.1793 20.6801 29.9193C20.0201 33.8593 21.2801 37.5393 23.7001 40.1393C24.8001 41.3393 24.0601 43.2793 22.4401 43.4593C21.0601 43.6193 19.7001 43.5793 18.9401 43.0193L7.94008 34.7993C6.64008 33.8193 5.58008 31.6993 5.58008 30.0593V13.8793C5.58008 11.6193 7.30008 9.1393 9.40008 8.3393L20.4001 4.2193C21.5401 3.7993 23.4201 3.7993 24.5601 4.2193L35.5601 8.3393C37.6801 9.1393 39.4001 11.6193 39.4001 13.8793Z'
            fill='#351C24'
          />
          <path
            d='M32.5 23.0195C27.54 23.0195 23.5 27.0595 23.5 32.0195C23.5 36.9795 27.54 41.0195 32.5 41.0195C37.46 41.0195 41.5 36.9795 41.5 32.0195C41.5 27.0395 37.46 23.0195 32.5 23.0195Z'
            fill='#351C24'
          />
          <path
            d='M42.5 43.9998C41.96 43.9998 41.46 43.7798 41.08 43.4198C41 43.3198 40.9 43.2198 40.84 43.0998C40.76 42.9998 40.7 42.8798 40.66 42.7598C40.6 42.6398 40.56 42.5198 40.54 42.3998C40.52 42.2598 40.5 42.1398 40.5 41.9998C40.5 41.7398 40.56 41.4798 40.66 41.2398C40.76 40.9798 40.9 40.7798 41.08 40.5798C41.54 40.1198 42.24 39.8998 42.88 40.0398C43.02 40.0598 43.14 40.0998 43.26 40.1598C43.38 40.1998 43.5 40.2598 43.6 40.3398C43.72 40.3998 43.82 40.4998 43.92 40.5798C44.1 40.7798 44.24 40.9798 44.34 41.2398C44.44 41.4798 44.5 41.7398 44.5 41.9998C44.5 42.5198 44.28 43.0398 43.92 43.4198C43.82 43.4998 43.72 43.5798 43.6 43.6598C43.5 43.7398 43.38 43.7998 43.26 43.8398C43.14 43.8998 43.02 43.9398 42.88 43.9598C42.76 43.9798 42.62 43.9998 42.5 43.9998Z'
            fill='#351C24'
          />
        </svg>
      ),
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className='bg-[#FBFBFB]'>
      <div className='container'>
        <div className='w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='flex flex-col gap-2 sm:gap-2 items-center text-center'
          >
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              Partner with TinyCheque
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              Why Choose TinyCheque?
            </h2>
            <h2 className='text-2xl sm:text-3xl md:text-3xl font-light text-[#351C24]'>
              more than a SaaS developer
            </h2>
            <p className='text-[#864A5B] mt-2'>
              When you partner with TinyCheque, you`&lsquo;`re choosing more
              than a SaaS developer — you`&lsquo;`re gaining a long-term
              strategic partner dedicated to your success. Here`&lsquo;`s why
              businesses choose us over competitors:
            </p>
          </motion.div>
        </div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-10'
          initial='hidden'
          whileInView='visible'
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          viewport={{ once: true }}
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='bg-white rounded-3xl shadow-md p-6 flex flex-col h-full'
            >
              <div className='mb-4 w-12 h-12'>{item.icon}</div>
              <h3 className='text-xl font-semibold text-[#351C24] mb-3'>
                {item.title}
              </h3>
              <p className='text-[#864A5B] text-base flex-grow'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerWithTinycheque;
