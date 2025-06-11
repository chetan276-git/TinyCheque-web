'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 0 },
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

const DualBusiness = () => {
  return (
    <section className='bg-[#FBFBFB] py-16'>
      <div className='container'>
        {/* Title Block */}
        <motion.div
          className='flex flex-col gap-2 sm:gap-2 items-center text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
            Verticals
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>
            Our dual business model
          </h2>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-primary'>
            product-service
          </h2>
          <p className='text-[#864A5B] text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose'>
            Balance the need to manage new opportunities with the need to
            optimize existing businesses
          </p>
        </motion.div>

        {/* Cards */}
        <div className='w-full mx-auto mb-4 mt-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {[
              {
                title: 'Building Proprietary AI SaaS Solutions',
                subtitle: 'AI-driven software products',
                description:
                  'At TinyCheque, we develop our own AI-driven software products, focused on addressing specific industry pain points. Our products combine the latest in AI technology with intuitive design to deliver exceptional results.',
                bullets: [
                  {
                    title: 'Innovative Products:',
                    content:
                      'Built with the future in mind, our SaaS products are designed to be scalable and adaptable to industry needs.',
                  },
                  {
                    title: 'Problem-Solving Focus:',
                    content:
                      'Each product solves a unique challenge for businesses, driven by AI-powered automation and efficiency.',
                  },
                ],
              },
              {
                title: 'Joint Ventures & Partnerships',
                subtitle: 'Joint Ventures',
                description:
                  'Our second vertical involves forming Joint Ventures (JVs) with entrepreneurs and businesses to co-create and co-distribute innovative SaaS products. We believe in collaboration and shared success, offering not just financial backing but also AI and product expertise.',
                bullets: [
                  {
                    title: 'Shared Expertise:',
                    content:
                      'We partner with visionaries to co-develop software solutions that tap into emerging market needs.',
                  },
                  {
                    title: 'Strategic Distribution:',
                    content:
                      'Using our distribution channels and market insights, we scale products for maximum impact.',
                  },
                ],
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                initial='hidden'
                whileInView='visible'
                variants={cardVariants}
                className='bg-white rounded-lg shadow-md p-6 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1'
              >
                <h2 className='text-xl font-semibold text-primary mb-1'>
                  {card.title}
                </h2>
                <p className='text-sm font-semibold text-primary mb-4'>
                  {card.subtitle}
                </p>
                <p className='text-md font-normal text-[#864A5B] mb-4'>
                  {card.description}
                </p>
                <ul className='list-disc list-inside mb-4 flex-grow'>
                  {card.bullets.map((bullet, index) => (
                    <li key={index} className='text-sm text-gray-700 mb-2'>
                      <span className='font-semibold text-gray-800'>
                        {bullet.title}{' '}
                      </span>
                      <span className='text-[#864A5B] text-base font-normal'>
                        {bullet.content}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href='/'
                  scroll={false}
                  className='text-[#3E64D2] font-semibold hover:underline text-base'
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualBusiness;
