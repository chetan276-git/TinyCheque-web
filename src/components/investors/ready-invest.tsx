'use client';

import React from 'react';
import Button from '../button';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const ReadyToInvest = () => {
  return (
    <section className='bg-[#F5F5F4] py-20'>
      <div className='container'>
        <div className='w-full space-y-6 md:space-y-8 text-center'>
          <motion.h1
            className='text-3xl sm:text-4xl md:text-4xl font-bold text-[#351C24] leading-tight'
            initial='hidden'
            whileInView='visible'
            variants={fadeInUp}
            custom={0}
            viewport={{ once: true }}
          >
            Ready to Invest with TinyCheque?
          </motion.h1>

          <motion.p
            className='text-xl sm:text-xl text-[#864A5B] font-base'
            initial='hidden'
            whileInView='visible'
            variants={fadeInUp}
            custom={1}
            viewport={{ once: true }}
          >
            Increase your wins by 50%.
          </motion.p>

          <motion.div
            className='flex flex-col sm:flex-row justify-center md:max-w-[650px] space-y-4 sm:space-y-0 sm:space-x-4 mx-auto'
            initial='hidden'
            whileInView='visible'
            variants={fadeInUp}
            custom={2}
            viewport={{ once: true }}
          >
            <Button
              href='https://forms.tinycheque.com/invest'
              variant='primary'
            >
              We are raising next round soon
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToInvest;
