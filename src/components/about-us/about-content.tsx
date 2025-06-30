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

const AboutContent = () => {
  return (
    <>
      <section>
        <div className='container'>
          <div className='flex flex-col md:flex-row items-center justify-between '>
            <motion.div
              className='w-full md:w-[50%] flex flex-col gap-6 md:gap-8 mb-8 md:mb-0'
              initial='hidden'
              animate='visible'
              variants={textVariants}
            >
              <div className='flex flex-col gap-2'>
                <h1 className=' font-bold text-[#351C24] text-3xl md:text-4xl'>
                  About TinyCheque
                </h1>
                <span className='font- text-3xl md:text-4xl'>
                  Pioneering the Future of AI-First SaaS
                </span>
              </div>
              <div className='pr-0 md:pr-20 lg:pr-40'>
                <h3 className='text-lg md:text-xl font-normal text-[#864A5B]'>
                  At TinyCheque, we are on a mission to revolutionize the world
                  of Software as a Service (SaaS) through AI-driven innovation.
                  As India`&#39;`s first AI-First SaaS Venture Studio,
                  TinyCheque combines cutting-edge technology with deep industry
                  expertise to co-create and scale the next generation of SaaS
                  products. We empower businesses to unlock their full potential
                  by leveraging the transformative power of artificial
                  intelligence, automation, and data-driven strategies.
                </h3>
              </div>
            </motion.div>
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
                  loading='lazy'
                  className='object-contain scale-110'
                  alt='About Image'
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
