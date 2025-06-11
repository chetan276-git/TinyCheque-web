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
    },
  }),
};

const HelpBusinesses = () => {
  const cards = [
    {
      title: 'LegalTech',
      description:
        "From our flagship product niyam.ai to ongoing legal industry collaborations, we're transforming legal practices through Artificial Intelligence.",
    },
    {
      title: 'MarTech',
      description:
        'Enhancing customer engagement and marketing strategies through AI-powered tools that optimize campaigns and drive higher ROI.',
    },
    {
      title: 'SalesTech',
      description:
        'Empowering sales teams with AI-driven insights, lead scoring, and sales funnel automation to close deals faster and scale efficiently.',
    },
  ];

  return (
    <section className='bg-[#F5F5F4]'>
      <div className='container'>
        {/* Header with animation */}
        <motion.div
          className='flex flex-col gap-2 sm:gap-2 items-center text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
            Tailored AI Solutions for Growing Industries
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
            How we help businesses
          </h2>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
            scale with AI
          </h2>
          <p className='text-[#864A5B] text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose'>
            By focusing on industry-specific solutions, TinyCheque accelerates
            the development and scaling of SaaS products that make a measurable
            impact.
          </p>
        </motion.div>

        {/* Cards with animation */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-4 w-full'>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className='bg-white rounded-3xl shadow-md p-6 border border-gray-200'
              custom={i}
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold text-[#351C24]'>
                  {card.title}
                </p>
                <div className='w-12 h-0.5 bg-gradient-to-r from-[#2F4085] to-[#537FDE]' />
                <p className='text-sm text-[#864A5B]'>{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpBusinesses;
