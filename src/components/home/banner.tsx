'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../button';
import VideoBanner from '../video-banner';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const HomeBanner = () => {
  return (
    <div className='pt-12 md:p-12 md:pt-24 bg-[#F5F5F4]'>
      <div className='container'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          {/* Left Content */}
          <motion.div
            className='w-full md:w-1/2 flex flex-col gap-6 md:gap-8 mb-8 md:mb-0'
            variants={fadeUp}
            initial='hidden'
            animate='visible'
          >
            <motion.div className='flex flex-col gap-2' variants={fadeUp}>
              <h1 className='font-bold text-primary text-4xl md:text-5xl lg:text-6xl'>
                India&#39;s First AI-First SaaS Venture Studio
              </h1>
            </motion.div>
            <motion.div className='pr-0 md:pr-20 lg:pr-40' variants={fadeUp}>
              <h3 className='text-lg md:text-xl font-normal text-secondary'>
                Building the Future of SaaS with AI-Driven Products and
                Strategic Partnerships
              </h3>
            </motion.div>
            <motion.div
              className='flex flex-col sm:flex-row w-full justify-between gap-4 pt-4 pr-2'
              variants={fadeUp}
            >
              <Button variant='primary' href='https://forms.tinycheque.com/jv'>
                Partner with us
              </Button>
              <Button
                variant='secondary'
                href='https://cal.com/team/tinycheque/15'
              >
                Schedule a Consultation
              </Button>
            </motion.div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className='w-full md:w-1/2 pb-4 pl-0 sm:pl-10'
            variants={fadeUp}
            initial='hidden'
            animate='visible'
          >
            <VideoBanner />
          </motion.div>
        </div>
      </div>

      {/* Logos Section */}
      <div className='container'>
        <motion.div
          className='flex flex-col mt-0 md:mt-12 pt-12'
          variants={fadeUp}
          initial='hidden'
          animate='visible'
        >
          <div className='flex flex-col items-center gap-4 md:gap-6'>
            <h2 className='text-secondary text-base sm:text-lg font-normal text-center px-4'>
              TinyCheque is a part of
            </h2>
            <div className='relative h-16 w-full'>
              <Image
                src='/images/logobrand.svg'
                alt='Logos Brand Img'
                fill
                className='object-contain'
                loading='lazy'
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeBanner;
