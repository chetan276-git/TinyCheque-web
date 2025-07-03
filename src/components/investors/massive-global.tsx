'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const MassiveGlobal = () => {
  return (
    <div className='container pb-0 md:py-24'>
      {/* Section 1: Massive Market Need */}
      <div className='flex flex-col lg:flex-row-reverse gap-4 lg:gap-10 items-center'>
        {/* Text */}
        <motion.div
          className='flex-1 space-y-6'
          variants={fadeLeft}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <div className='space-y-4'>
            <h2 className='text-xl md:text-2xl lg:text-2xl font-bold text-[#351C24]'>
              Addressing a Massive Market Need with AI-First Solutions
            </h2>
            <p className='text-[#864A5B]'>
              The{' '}
              <strong className='text-[#351C24]'>
                Zinnov-Chiratae India SaaS Report
              </strong>{' '}
              shows that{' '}
              <strong className='text-[#351C24]'>
                80% of India’s SaaS unicorns
              </strong>{' '}
              have emerged in the last three years...
            </p>
            <ul className='space-y-4'>
              <li className='list-disc ml-6 text-[#864A5B]'>
                <strong className='text-[#351C24]'>$4.5 billion</strong> was
                invested in Indian SaaS in 2021 alone...
              </li>
              <li className='list-disc ml-6 text-[#864A5B]'>
                <strong className='text-[#351C24]'>Revenue per employee</strong>{' '}
                in Indian SaaS companies is among the highest globally...
              </li>
            </ul>
            <p className='text-[#864A5B]'>
              TinyCheque is perfectly positioned to take advantage of this surge
              in demand...
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className='flex-1'
          variants={fadeRight}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <Image
            src='/images/massive-market.png'
            alt='Business Partnership'
            width={800}
            height={600}
            loading='lazy'
            className='rounded-lg shadow-lg w-full h-auto'
          />
        </motion.div>
      </div>

      {/* Section 2: Global VCs */}
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-10 items-center mt-16 md:mt-24'>
        {/* Text */}
        <motion.div
          className='flex-1 space-y-6'
          variants={fadeRight}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <div className='space-y-4'>
            <h2 className='text-xl md:text-2xl lg:text-2xl font-bold text-[#351C24]'>
              Global VCs Are Betting Big on AI-SaaS
            </h2>
            <p className='text-[#864A5B]'>
              Venture capital firms worldwide are investing billions into AI and
              SaaS startups...
            </p>
            <ul className='space-y-4'>
              <li className='list-disc ml-6 text-[#864A5B]'>
                <strong className='text-[#351C24]'>
                  SoftBank’s Vision Fund:
                </strong>{' '}
                Allocated $28 billion specifically for AI investments.
              </li>
              <li className='list-disc ml-6 text-[#864A5B]'>
                <strong className='text-[#351C24]'>Andreessen Horowitz:</strong>{' '}
                Invested heavily in OpenAI and Databricks.
              </li>
              <li className='list-disc ml-6 text-[#864A5B]'>
                <strong className='text-[#351C24]'>Lightspeed & Accel:</strong>{' '}
                Funding early-stage AI-SaaS companies.
              </li>
            </ul>
            <p className='text-[#864A5B]'>
              TinyCheque is uniquely positioned to attract continued investment
              from leading VCs...
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className='flex-1'
          variants={fadeLeft}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <Image
            src='/images/global-sass.jpg'
            alt='Business Partnership'
            width={800}
            height={600}
            loading='lazy'
            className='rounded-lg shadow-lg w-full h-auto'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MassiveGlobal;
