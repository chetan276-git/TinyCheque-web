'use client';

import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const FutureAISaaS = () => {
  const reasons = [
    {
      description:
        'Choosing the right partner for your SaaS business can define your success. At TinyCheque, we go beyond being a traditional Venture Studio. We are a visionary partner for SaaS companies seeking to leverage AI, scale rapidly, and build innovative solutions that reshape industries.',
    },
    {
      description:
        "TinyCheque stands out because we don't just provide capital or mentorship; we co-create, co-distribute, and drive the full lifecycle of AI-powered SaaS solutions. Whether you're building a product from scratch or optimizing your existing solution, TinyCheque becomes a seamless extension of your team, committed to your long-term success.",
    },
  ];

  return (
    <section className='bg-[#FBFBFB] py-20'>
      <div className='container'>
        <motion.div
          className='px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto mb-10'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
            The Future of AI-SaaS Is Here
          </h2>
          <h3 className='text-xl sm:text-2xl md:text-3xl font-light text-[#351C24] mt-2'>
            Invest in TinyCheque
          </h3>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className='bg-white rounded-3xl shadow-md px-8 py-6'
              custom={index}
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className='text-sm sm:text-base text-[#864A5B]'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureAISaaS;
