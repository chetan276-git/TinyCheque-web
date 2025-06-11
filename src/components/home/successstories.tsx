'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SuccesSstories = () => {
  return (
    <section className='bg-[#FBFBFB]'>
      <div className='container'>
        {/* Header Section */}
        <motion.div
          className='flex flex-col gap-2 sm:gap-2 items-center text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
            What our Clients Say
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
            Success stories
          </h2>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
            from our portfolio
          </h2>
          <p className='text-[#864A5B] text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose'>
            Our Customers are succeeding in growing their business. Read their
            stories and how they did it. Contact us to request a free demo.
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          className='max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg mt-6 mb-4'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className='p-6 md:p-8 md:flex'>
            {/* Left Text */}
            <motion.div
              className='md:flex-1 md:pr-8'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <motion.p
                className='text-[#864A5B] font-base text-sm mb-2'
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                launched on Sept 22, 2024
              </motion.p>

              <motion.h2
                className='text-2xl font-bold text-[#351C24] mb-4'
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                niyam.ai: AI-First LegalTech Platform
              </motion.h2>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link href='/'>
                  <button className='px-3 py-1 rounded-md border-2 border-[#864A5B] text-sm mb-4'>
                    Learn More
                  </button>
                </Link>
              </motion.div>

              <motion.p
                className='text-[#864A5B] font-base text-lg mb-4'
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                At TinyCheque, we develop our own AI-driven software products,
                focused on addressing specific industry pain points. Our
                products combine the latest in AI technology with intuitive
                design to deliver exceptional results.
              </motion.p>

              <motion.ul
                className='list-disc list-inside text-gray-600 space-y-2'
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <span className='font-semibold'>Innovative Products:</span>
                  <span className='text-[#864A5B]'>
                    {' '}
                    Built with the future in mind, our SaaS products are
                    designed to be scalable and adaptable to industry needs.
                  </span>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <span className='font-semibold'>Problem-Solving Focus:</span>
                  <span className='text-[#864A5B]'>
                    {' '}
                    Each product solves a unique challenge for businesses,
                    driven by AI-powered automation and efficiency.
                  </span>
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className='mt-6 md:mt-0 md:flex-1 rounded-lg relative'
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src={`/images/niyam-ai.jpg`}
                alt='Niyam.ai'
                className='w-full h-full rounded-2xl'
                layout='fill'
                objectFit='cover'
                priority={false}
                quality={50}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccesSstories;
