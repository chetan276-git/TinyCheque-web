'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
  },
};

const PartnerSection = () => {
  return (
    <section className='bg-[#F3F3F2]'>
      <div className='container'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          {/* Text Section */}
          <motion.div
            className='w-full md:w-[50%] flex flex-col gap-6 md:gap-8 mb-8 md:mb-0'
            initial='hidden'
            animate='visible'
            variants={textVariants}
          >
            <div className='flex flex-col gap-2'>
              <h1 className='text-primary text-3xl md:text-4xl font-extrabold'>
                Partner with TinyCheque
              </h1>
              <span className='font- text-3xl md:text-4xl'>
                Your AI-First Co-Founder for Explosive SaaS Growth
              </span>
            </div>
            <div>
              <h3 className='text-lg md:text-xl font-normal text-[#864A5B]'>
                Unlock the full potential of your AI-driven SaaS with
                TinyCheque. Together, we&lsquo;ll take your early-stage SaaS to
                the next level by combining our marketing, sales, tech, and
                financial expertise with your vision—building a scalable
                business for long-term success.
              </h3>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className='w-full md:w-[50%] p-4 pl-0 sm:pl-6'
            initial='hidden'
            animate='visible'
            variants={imageVariants}
          >
            <div className='relative w-full aspect-[4/3] md:aspect-[3/2]'>
              <Image
                src='/images/partner-with-tinycheque.png'
                fill
                className='object-contain scale-110'
                alt='About Image'
                loading='lazy'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
