'use client';

import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const AIFirstApproach = () => {
  const streams = [
    {
      title: 'Proprietary Products',
      description:
        'We generate revenue by selling our AI-powered SaaS products across multiple industries.',
    },
    {
      title: 'Joint Ventures',
      description:
        'We share revenue and equity in co-created SaaS products, enabling faster growth and access to new markets.',
    },
    {
      title: 'Advisory and Equity Stakes',
      description:
        'We provide strategic advisory services and take equity in promising SaaS ventures, ensuring sustained revenue generation.',
    },
  ];

  return (
    <section className='bg-[#F5F5F4] py-20'>
      <div className='container'>
        <motion.div
          className='px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto mb-8'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
            AI-First Approach with a Clear Path to Profitability
          </h2>
          <p className='text-md text-[#864A5B] font-normal mt-4'>
            TinyCheque&apos;s LEGO-style SaaS development framework allows us to
            rapidly build, iterate, and scale AI-SaaS products faster than
            traditional models, reducing time-to-market and maximizing ROI for
            investors.
          </p>
          <p className='font-semibold text-[#351C24] text-lg mt-8'>
            Revenue Streams
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {streams.map((item, index) => (
            <motion.div
              key={index}
              className='bg-white rounded-3xl shadow-md px-8 py-6'
              custom={index}
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className='text-sm sm:text-base text-[#864A5B]'>
                <strong className='text-[#351C24]'>{item.title}:</strong>{' '}
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className='max-w-3xl text-center mx-auto mt-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='text-md text-[#864A5B] font-normal'>
            This model offers investors clear pathways to profitability, with
            multiple exit opportunities through acquisitions or revenue-sharing
            models.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AIFirstApproach;
