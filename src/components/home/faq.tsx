'use client';

import Link from 'next/link';
import React from 'react';
import Accordion from '../accordion';
import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  subtitle?: string;
  titleMain: string;
  titleSub?: string;
  description?: string;
  contactEmail?: string;
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({
  subtitle,
  titleMain,
  titleSub,
  description,
  contactEmail,
  faqs,
}) => {
  return (
    <motion.section
      className='bg-[#F5F5F4]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='container'>
        <motion.div
          className='flex flex-col gap-2 sm:gap-2 items-center text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {subtitle && (
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              {subtitle}
            </p>
          )}
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
            {titleMain}
          </h2>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
            {titleSub}
          </h2>
          <p className='text-[#864A5B] text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose'>
            {description}{' '}
            <Link
              href={`mailto:${contactEmail}`}
              className='text-[#3E64D2] font-semibold'
            >
              <span className='pl-1'>Contact us!</span>
            </Link>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='mt-8 md:mt-0'
        >
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;
