'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type CaseStudySection = {
  icon: string;
  title: string;
  description?: string;
  points?: string[];
};

type ProductsCaseStudyProps = {
  heading?: string;
  subheading?: string;
  caseStudy: {
    problem: CaseStudySection;
    solution: CaseStudySection;
    outcome: CaseStudySection;
  };
};

const ProductsCaseStudy: React.FC<ProductsCaseStudyProps> = ({
  heading = 'How Niyam.ai Transformed',
  subheading = 'A Law Firm’s Workflow',
  caseStudy,
}) => {
  return (
    <section>
      <div className='container'>
        <div className='w-full px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex flex-col gap-2 sm:gap-2 items-center text-center'
          >
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              Case Study
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              {heading}
            </h2>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
              {subheading}
            </h2>
          </motion.div>
        </div>

        <div className='space-y-4 mt-6 md:mt-10 mb-4'>
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-3xl p-6 shadow'
          >
            <div className='flex flex-col gap-2 mb-2 px-2'>
              <Image
                src={caseStudy.problem.icon}
                alt='Problem icon'
                width={32}
                height={32}
                loading='lazy'
              />
              <h2 className='text-lg font-bold'>{caseStudy.problem.title}</h2>
            </div>
            <p className='text-[#864A5B] text-lg font-normal px-2'>
              {caseStudy.problem.description}
            </p>
          </motion.div>

          {/* Solution & Outcome */}
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-4'>
            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='bg-white rounded-3xl p-6 shadow flex-1'
            >
              <div className='flex flex-col gap-2 mb-2 px-2'>
                <Image
                  src={caseStudy.solution.icon}
                  alt='Solution icon'
                  width={32}
                  height={32}
                  loading='lazy'
                />
                <h2 className='text-lg font-bold'>
                  {caseStudy.solution.title}
                </h2>
              </div>
              <p className='text-[#864A5B] text-lg font-normal px-2'>
                {caseStudy.solution.description}
              </p>
            </motion.div>

            {/* Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='bg-white rounded-3xl p-6 shadow flex-1'
            >
              <div className='flex flex-col gap-2 mb-2 px-2'>
                <Image
                  src={caseStudy.outcome.icon}
                  alt='Outcome icon'
                  width={32}
                  height={32}
                  loading='lazy'
                />
                <h2 className='text-lg font-bold'>{caseStudy.outcome.title}</h2>
              </div>
              {caseStudy.outcome.points && (
                <ul className='list-disc pl-5 space-y-2 text-sm md:text-md font-normal text-[#864A5B] px-2'>
                  {caseStudy.outcome.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
              {!caseStudy.outcome.points && caseStudy.outcome.description && (
                <p className='text-[#864A5B] text-lg font-normal px-2'>
                  {caseStudy.outcome.description}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCaseStudy;
