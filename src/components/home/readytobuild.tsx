'use client';

import React from 'react';
import Button from '../button';
import { motion } from 'framer-motion';

interface ReadyToBuildProps {
  title: string;
  subtitle?: string;
  bgColor?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const ReadyToBuild: React.FC<ReadyToBuildProps> = ({
  title,
  subtitle,
  bgColor = '#F5F5F4',
  primaryButton,
  secondaryButton,
}) => {
  return (
    <section style={{ backgroundColor: bgColor }}>
      <div className='container'>
        <div className='w-full space-y-6 md:space-y-8 text-center'>
          <motion.h1
            className='text-3xl sm:text-4xl md:text-4xl font-bold text-[#351C24] leading-tight'
            initial='hidden'
            animate='visible'
            variants={fadeInUp}
            custom={0}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              className='text-xl sm:text-xl text-[#864A5B] font-base'
              initial='hidden'
              animate='visible'
              variants={fadeInUp}
              custom={1}
            >
              {subtitle}
            </motion.p>
          )}

          {(primaryButton || secondaryButton) && (
            <motion.div
              className='flex flex-col sm:flex-row justify-center md:max-w-2/4 space-y-4 sm:space-y-0 sm:space-x-4 mx-auto'
              initial='hidden'
              animate='visible'
              variants={fadeInUp}
              custom={2}
            >
              {primaryButton && (
                <Button href={primaryButton.href}>{primaryButton.text}</Button>
              )}
              {secondaryButton && (
                <Button href={secondaryButton.href} variant='secondary'>
                  {secondaryButton.text}
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReadyToBuild;
