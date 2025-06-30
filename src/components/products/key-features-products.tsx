'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Feature = {
  title: string;
  description: string;
};

type KeyFeaturesProductsProps = {
  heading?: string;
  subheading?: string;
  features: Feature[];
};

const KeyFeaturesProducts: React.FC<KeyFeaturesProductsProps> = ({
  heading,
  subheading,
  features,
}) => {
  return (
    <section className='bg-[#FBFBFB] py-10'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center px-4 sm:px-6 lg:px-8'
        >
          <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
            {subheading}
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
            {heading}
          </h2>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white rounded-3xl shadow-md p-6 flex flex-col items-start space-y-3'
            >
              <h3 className='text-xl font-semibold text-[#351C24]'>
                {feature.title}
              </h3>
              <p className='text-lg text-[#864A5B] font-normal'>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesProducts;
