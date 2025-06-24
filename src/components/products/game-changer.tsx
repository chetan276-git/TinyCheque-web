'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
}

interface GameChangerProductsProps {
  heading?: string;
  subheading?: string;
  tagline?: string;
  features: Feature[];
}

const GameChangerProducts: React.FC<GameChangerProductsProps> = ({
  heading,
  subheading,
  tagline,
  features,
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
              {heading}
            </p>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#351C24]'>
              {subheading}
            </h2>
            <h2 className='text-2xl sm:text-3xl md:text-3xl font-light text-[#351C24]'>
              {tagline}
            </h2>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-10 mb-4'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white rounded-3xl shadow-md py-6 px-8 flex flex-col'
            >
              <h3 className='text-xl font-semibold text-[#351C24] mb-2'>
                {feature.title}
              </h3>
              <p className='text-md text-[#864A5B] font-normal'>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameChangerProducts;
