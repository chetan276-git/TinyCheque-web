'use client';
import React from 'react';
import { motion } from 'framer-motion';

const OurVision = () => {
  return (
    <section className='bg-[#FBFBFB]'>
      <div className='container'>
        <div className='w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='flex flex-col gap-2 sm:gap-2 items-center text-center'
          >
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              TinyCheque
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              Our Vision
            </h2>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-light text-[#351C24]'>
              Building the Future of SaaS with AI
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='w-full mt-7 md:mt-10'
        >
          <div className='bg-white rounded-3xl shadow-md flex items-start justify-center px-8 py-6'>
            <p className='text-sm font-normal sm:text-base text-[#864A5B]'>
              In an ever-evolving digital landscape, the integration of AI is no
              longer optional—it’s essential. Our vision at TinyCheque is to
              shape the future by building intelligent SaaS solutions that not
              only solve today’s challenges but anticipate tomorrow’s needs.
              Whether it’s through our proprietary AI-powered products or
              strategic partnerships, we are committed to pushing the boundaries
              of what’s possible with AI.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;
