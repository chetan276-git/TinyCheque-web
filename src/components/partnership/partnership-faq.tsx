'use client';

import Link from 'next/link';
import React from 'react';
import Accordion from '../accordion';
import { motion } from 'framer-motion';
const faqs = [
  {
    question: 'What kind of SaaS companies does TinyCheque partner with?',
    answer: `We partner with AI-first SaaS companies that are in the early stages but have high growth potential. Whether you're in LegalTech, MarTech, SalesTech, or beyond, we're looking for ambitious founders who want to scale their business with an equal partner.`,
  },
  {
    question: 'What does the 50-50 JV model mean?',
    answer:
      'It means we take 50% ownership in the business, becoming full co-founders with you. We share the risks, rewards, and responsibilities, working together to build a successful SaaS product.',
  },
  {
    question: 'What resources does TinyCheque provide?',
    answer:
      'TinyCheque offers a full range of resources, including marketing, sales, tech development, fundraising, and strategic guidance. We help you grow every aspect of your business.',
  },
  {
    question: 'How does TinyCheque help with fundraising?',
    answer:
      'Our extensive network of investors and VCs ensures that when the time is right, we can help secure additional funding to scale your business. We also provide financial expertise to optimize your business for long-term growth.',
  },
];

const PartnershipFAQ = () => {
  return (
    <>
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
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              Key part of a knowledge base
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              Frequently asked questions
            </h2>

            <p className='text-[#864A5B] text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose'>
              Below you&#39;ll find answers to the most common questions you may
              have on TinyCheque. If you still can&#39;t find the answer
              you&#39;re looking for, just
              <Link
                href='mailto:hello@tinycheque.com'
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
          >
            <Accordion items={faqs} />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default PartnershipFAQ;
