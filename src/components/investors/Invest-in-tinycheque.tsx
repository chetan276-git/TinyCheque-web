'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/src/components/button';
import VideoBanner from '@/src/components/video-banner';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const InvestInTinycheque = () => {
  return (
    <>
      <section>
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
                <h1 className=' font-bold text-[#351C24] text-3xl md:text-4xl'>
                  Invest in TinyCheque
                </h1>
                <span className='font- text-3xl md:text-4xl'>
                  The Future of AI-Driven SaaS
                </span>
              </motion.div>
              <motion.div className='pr-0 md:pr-20 lg:pr-40' variants={fadeUp}>
                <h3 className='text-lg md:text-xl font-normal text-[#864A5B]'>
                  At TinyCheque, we are not just participating in the AI-SaaS
                  revolution - we are leading it. As India `&lsquo;`s first
                  AI-First SaaS Venture Studio, we are on a mission to build and
                  co-create the next generation of AI-driven software that
                  addresses the most pressing challenges across industries.
                </h3>
              </motion.div>
              <motion.div
                className='flex flex-col sm:flex-row w-full justify-between gap-4 pt-4 pr-2'
                variants={fadeUp}
              >
                <Button
                  variant='primary'
                  href='href="https://forms.tinycheque.com/jv"'
                >
                  Invest Now
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
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 mt-20 mb-4'>
            <div className='bg-white  rounded-3xl shadow-md flex items-start justify-center px-8 py-6'>
              <p className='text-sm font-normal sm:text-base text-[#864A5B]'>
                With a proven track record, a network of elite investors, and an
                innovative approach, TinyCheque is uniquely positioned to
                capitalize on the rapid global growth of AI-powered SaaS
                solutions.
              </p>
            </div>
            <div className='bg-white  rounded-3xl shadow-md flex items-start justify-center px-8 py-6'>
              <p className='text-sm font-normal sm:text-base text-[#864A5B]'>
                For investors seeking high-growth opportunities in the
                world`&lsquo;`s fastest-growing tech sector, TinyCheque offers
                an unparalleled value proposition. This is your chance to join a
                transformative venture at the heart of AI and SaaS innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestInTinycheque;
