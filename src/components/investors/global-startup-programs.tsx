'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LogosWrapper from '../logos-wrapper';
import AdvisorsInfoCards from '../advisors-cards';
import MassiveGlobal from './massive-global';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const GlobalStartupPrograms = () => {
  return (
    <>
      <section>
        <div className='container'>
          <motion.div
            className='text-center max-w-4xl mx-auto'
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6'>
              Elite Investors and Global Startup Programs Back Us
            </h2>
            <p className='text-sm sm:text-base md:text-xl leading-relaxed text-[#864A5B]'>
              <span className='text-[#864A5B]'>TinyCheque</span> is backed by an
              impressive roster of{' '}
              <span className='font-semibold text-[#351C24]'>
                strategic investors
              </span>{' '}
              and is part of{' '}
              <span className='font-semibold text-[#351C24]'>
                prestigious global startup programs
              </span>{' '}
              that provide us with unparalleled access to resources, mentorship,
              and market opportunities.
            </p>
          </motion.div>
          <motion.div
            className='text-center mt-8 sm:mt-10 lg:mt-12'
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <p className='text-base sm:text-lg text-[#864A5B] font-normal mb-6'>
              Our investors include
            </p>
          </motion.div>
          <LogosWrapper />
          <div className='mt-5 md:mt-20'>
            <AdvisorsInfoCards />
          </div>
          <MassiveGlobal />
        </div>
      </section>
    </>
  );
};

export default GlobalStartupPrograms;
