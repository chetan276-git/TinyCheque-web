'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const OurStoryHowBegan = () => {
  return (
    <section className='bg-[#FBFBFB]'>
      <div className='container'>
        {/* Header Section */}
        <motion.div
          className='w-full mx-auto'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className='flex flex-col gap-2 sm:gap-2 items-center text-center'>
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              Our Story
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              How it all began
            </h2>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-light text-[#351C24]'>
              the spark behind TinyCheque
            </h2>
          </div>
        </motion.div>

        {/* Content Box */}
        <motion.div
          className='w-full bg-white rounded-3xl shadow-md flex items-start justify-center px-8 py-6 mt-6 md:mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className='text-sm font-normal sm:text-base text-[#864A5B] max-w-4xl text-center'>
            The story of TinyCheque begins with a simple but powerful idea: the
            future of software lies in artificial intelligence. In 2021, Udit
            Goenka, a passionate entrepreneur with a track record in SaaS
            development, realized that AI was the missing piece needed to
            revolutionize the way SaaS products are built and scaled. Together
            with his uncle, Sudhir Goenka, an expert in financial strategy and
            operations, they set out to create a company that would not only
            build SaaS products but also make AI accessible to businesses of all
            sizes. The vision was clear—build a company that bridges the gap
            between cutting-edge AI technology and the practical needs of SaaS
            businesses. From that moment, TinyCheque was born, with a singular
            mission: To build the future of SaaS with AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStoryHowBegan;
