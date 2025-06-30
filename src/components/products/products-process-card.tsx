'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Step = {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

type ProductsProcessCardProps = {
  sectionTitle?: string;
  sectionSubtitle?: string;
  steps: Step[];
};

const ProductsProcessCard: React.FC<ProductsProcessCardProps> = ({
  sectionTitle = 'The Niyam.ai Process',
  sectionSubtitle = 'How Niyam.ai Transforms your Legal Operations in 4 Simple Steps',
  steps,
}) => {
  return (
    <section className='bg-[#FBFBFB] py-10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
            Process
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
            {sectionTitle}
          </h2>
          <h3 className='text-2xl sm:text-3xl md:text-3xl font-light text-[#351C24]'>
            {sectionSubtitle}
          </h3>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-10'>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className='bg-white rounded-3xl shadow-md p-6 flex flex-col h-full'
            >
              <div className='mb-4 w-12 h-12'>{step.icon}</div>
              <div className='text-sm text-[#BC808C] mb-2'>{step.step}</div>
              <h3 className='text-xl font-semibold text-[#351C24] mb-3'>
                {step.title}
              </h3>
              <p className='text-[#864A5B] text-base flex-grow'>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsProcessCard;
