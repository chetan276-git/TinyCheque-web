'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface WhatProductsProps {
  subtitle?: string;
  titleBold: string;
  titleLight: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const WhatProducts: React.FC<WhatProductsProps> = ({
  subtitle = 'What is Autoposting.ai',
  titleBold,
  titleLight,
  description,
  imageSrc,
  imageAlt = 'Product image',
}) => {
  return (
    <section className='bg-[#FBFBFB]'>
      <div className='container'>
        <div className='container relative max-w-6xl flex flex-col items-center pt-16 pb-16 gap-6'>
          <div className='w-full px-4 sm:px-6 lg:px-8'>
            <motion.div
              className='flex flex-col gap-2 sm:gap-2 items-center text-center'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
                {subtitle}
              </p>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
                {titleBold}
              </h2>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
                {titleLight}
              </h2>
            </motion.div>
          </div>

          <motion.div
            className='max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg mt-6 mb-4'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className='p-6 md:p-8 md:flex'>
              <div className='md:flex-1 md:pr-8'>
                <p className='text-[#864A5B] font-base text-lg mb-4'>
                  {description}
                </p>
              </div>

              <div className='mt-6 md:mt-0 md:flex-1 rounded-lg'>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={600}
                  height={500}
                  priority
                  className='w-full h-auto rounded-xl'
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatProducts;
