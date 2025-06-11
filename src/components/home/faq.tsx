'use client';

import Link from 'next/link';
import React from 'react';
import Accordion from '../accordion';
import { motion } from 'framer-motion';

const faqs = [
  {
    question:
      'What is a Venture Studio, and how is TinyCheque different from an incubator or accelerator?',
    answer:
      'A Venture Studio builds startups from the ground up, providing not just funding but hands-on support. TinyCheque differs by partnering deeply in operations, technology, and strategy, unlike incubators or accelerators that mainly offer mentorship or small investments.',
  },
  {
    question: 'What industries does TinyCheque focus on?',
    answer:
      'TinyCheque primarily focuses on AI SaaS, fintech, and automation tools, but is open to opportunities in other high-growth verticals.',
  },
  {
    question: 'How does TinyCheque select partners for Joint Ventures?',
    answer:
      'We look for domain experts with validated ideas, complementary skill sets, and a strong execution mindset. Alignment on values and vision is key.',
  },
  {
    question: "What is TinyCheque's involvement in Joint Venture partnerships?",
    answer:
      'TinyCheque acts as a co-founder — providing product design, engineering, go-to-market, funding, and operational support from day one.',
  },
  {
    question: 'Does TinyCheque offer funding to partners?',
    answer:
      'Yes, we invest capital into ventures we co-build and help raise additional funds when needed through our investor network.',
  },
  {
    question: 'What types of AI SaaS products does TinyCheque build?',
    answer:
      'We specialize in building tools that automate workflows, generate content, and enhance decision-making using AI technologies like LLMs and ML models.',
  },
];

const FAQ = () => {
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
          <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
            Key part of a knowledge base
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
            Frequently asked questions
          </h2>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
            commonly asked by customers
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
  );
};

export default FAQ;
