'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/src/components/button';

interface BannerButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface ProductsBannerProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  buttons?: BannerButton[];
}

const ProductsBanner: React.FC<ProductsBannerProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = 'Banner image',
  buttons,
}) => {
  return (
    <section>
      <div className='container'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          {/* Left Content */}
          <motion.div
            className='w-full md:w-1/2 flex flex-col gap-6 md:gap-8 mb-8 md:mb-0'
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className='flex flex-col gap-2'>
              <h1 className='font-bold text-[#351C24] text-3xl md:text-4xl'>
                {title}
              </h1>
              <span className='text-3xl md:text-4xl'>{subtitle}</span>
            </div>
            <div className='pr-0 md:pr-20 lg:pr-40'>
              <h3 className='text-lg md:text-xl font-normal text-[#864A5B]'>
                {description}
              </h3>
            </div>
            {buttons && (
              <div className='flex flex-col sm:flex-row w-full justify-between gap-4 pt-4 pr-2'>
                {buttons.map((btn, idx) => (
                  <Button key={idx} variant={btn.variant} href={btn.href}>
                    {btn.label}
                  </Button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Image */}
          <motion.div
            className='w-full md:w-1/2 pb-4 pl-0 sm:pl-10'
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={500}
              priority
              className='w-full h-auto'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsBanner;
