'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const NiyamHero = () => {
  return (
    <section>
      <div className='container'>
        <motion.div
          className='flex flex-col md:flex-row items-center justify-between py-12'
          initial='hidden'
          animate='visible'
          variants={fadeUp}
        >
          <div className='w-full md:w-1/2 flex flex-col gap-6 md:gap-8 mb-8 md:mb-0'>
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-[#351C24] text-3xl md:text-4xl'>
                Niyam.ai: Revolutionizing Legal Tech with
              </h1>
              <span className='text-3xl md:text-4xl font-light'>
                GenAI-Powered Solutions
              </span>
            </div>
            <div className='pr-0 md:pr-20 lg:pr-40'>
              <h3 className='text-lg md:text-xl font-normal text-[#864A5B]'>
                Harness the power of cutting-edge AI to streamline legal tasks,
                reduce errors, and boost efficiency for legal professionals,
                MSMEs, corporates, and individuals.
              </h3>
            </div>
          </div>

          <motion.div
            className='w-full md:w-1/2 pb-4 pl-0 sm:pl-10'
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Image
              src='/images/products/niyam-banner.png'
              alt='Niyam Hero Illustration'
              width={600}
              height={400}
              className='w-full h-auto'
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NiyamHero;
