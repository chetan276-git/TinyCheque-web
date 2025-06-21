'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const NiyamSolution = () => {
  return (
    <section>
      <div className='container'>
        <motion.div
          className='w-full px-4 sm:px-6 lg:px-8'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className='flex flex-col gap-2 sm:gap-2 items-center text-center'>
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              Solution
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              Why Niyam.ai Is the
            </h2>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
              Preferred Legal Tech Solution
            </h2>
          </div>
        </motion.div>

        <motion.div
          className='bg-white rounded-2xl overflow-hidden shadow-lg mt-6 mb-4'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className='p-6 md:p-8 md:flex'>
            <div className='md:flex-1 md:pr-8'>
              <p className='text-[#864A5B] font-base text-lg mb-4'>
                Why Legal Professionals Trust Niyam.ai
              </p>
              <ul className='list-disc list-inside text-gray-600 space-y-2'>
                <li>
                  <span className='font-semibold'>Powered by GenAI:</span>
                  <span className='text-[#864A5B]'>
                    {' '}
                    Niyam.ai is built on cutting-edge Generative AI technology,
                    ensuring that every legal output — whether it's a contract,
                    research report, or compliance checklist — is precise,
                    efficient and tailored to your needs.
                  </span>
                </li>
                <li>
                  <span className='font-semibold'>
                    Tailored for Every Legal Professional:
                  </span>{' '}
                  <span className='text-[#864A5B]'>
                    Whether you’re an individual, law firm or a large
                    enterprise, Niyam.ai offers customizable workflows and
                    templates to suit your specific legal requirements.
                  </span>
                </li>
              </ul>
            </div>
            <div className='mt-6 md:mt-0 md:flex-1 rounded-lg'>
              <Image
                src='/images/products/niyan-solution.jpg'
                alt='AI robot holding scales of justice'
                width={600}
                height={400}
                loading='lazy'
                className='w-full h-auto rounded-lg'
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NiyamSolution;
