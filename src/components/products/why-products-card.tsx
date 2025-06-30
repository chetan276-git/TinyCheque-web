'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type ListItem = {
  title: string;
  description: string;
};

type WhySolutionProductProps = {
  bgColor?: string;
  topLabel?: string;
  heading?: string;
  subheading?: string;
  listTitle?: string;
  listItems: ListItem[];
  imageSrc: string;
};

const WhySolutionProduct: React.FC<WhySolutionProductProps> = ({
  bgColor,
  topLabel,
  heading,
  subheading,
  listTitle,
  listItems,
  imageSrc,
}) => {
  return (
    <section className={`bg-[${bgColor}]`}>
      <div className='container'>
        <motion.div
          className='w-full px-4 sm:px-6 lg:px-8'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className='flex flex-col gap-2 items-center text-center'>
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              {topLabel}
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              {heading}
            </h2>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
              {subheading}
            </h2>
          </div>
        </motion.div>

        <motion.div
          className='bg-white w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg mt-6 md:mt-10 mb-4'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className='p-6 md:p-8 md:flex items-center'>
            <div className='md:flex-1 md:pr-8'>
              <p className='text-[#864A5B] font-base text-lg mb-4'>
                {listTitle}
              </p>
              <ul className='list-disc list-inside text-gray-600 space-y-2'>
                {listItems.map((item, index) => (
                  <li key={index}>
                    <span className='font-semibold'>{item.title}</span>
                    <span className='text-[#864A5B]'> {item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mt-6 md:mt-0 md:flex-1 rounded-lg'>
              <Image
                src={imageSrc}
                alt='Solution Image'
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

export default WhySolutionProduct;
