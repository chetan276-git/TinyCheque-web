'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../button';

interface ComparisonItem {
  feature: string;
  left: string;
  right: string;
}

interface CompetitorsProductsListProps {
  bgColor?: string;
  subtitle?: string;
  titleLeft: string;
  titleRight: string;
  description?: string;
  button?: string;
  buttonLink?: string;
  comparisonData: ComparisonItem[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const CompetitorsProductsList: React.FC<CompetitorsProductsListProps> = ({
  bgColor = '#FBFBFB',
  subtitle,
  titleLeft,
  titleRight,
  description,
  comparisonData,
  button,
  buttonLink = '#',
}) => {
  return (
    <section className={`bg-[${bgColor}]`}>
      <div className='container '>
        <div className='w-full px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className='flex flex-col gap-2 sm:gap-2 items-center text-center'
          >
            {subtitle && (
              <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
                {subtitle}
              </p>
            )}
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              {titleLeft}
            </h2>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
              {titleRight}
            </h2>
            {description && (
              <p className='text-[#864A5B] text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose'>
                {description}
              </p>
            )}
          </motion.div>
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className='bg-white rounded-3xl shadow-lg overflow-hidden p-2 mt-4 md:mt-10 mb-2 w-full max-w-full'
        >
          {/* Desktop View */}
          <div className='hidden sm:block overflow-x-auto'>
            <div className='grid grid-cols-3 font-semibold text-sm md:text-base lg:text-lg border-b border-[#e2e7f0] bg-white'>
              <div className='p-2 md:p-3 border-r border-[#e2e7f0]'>
                Features
              </div>
              <div className='p-2 md:p-3 border-r border-[#e2e7f0]'>
                {titleLeft}
              </div>
              <div className='p-2 md:p-3'>{titleRight}</div>
            </div>
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className='grid grid-cols-3 border-b border-[#e2e7f0] last:border-b-0'
              >
                <div className='p-2 md:p-3 border-r border-[#e2e7f0] text-sm md:text-base'>
                  {item.feature}
                </div>
                <div className='p-2 md:p-3 border-r border-[#e2e7f0] flex items-center text-sm md:text-base'>
                  <CheckIcon />
                  <span>Yes</span>
                </div>
                <div className='p-2 md:p-3 flex items-center text-sm md:text-base'>
                  <XIcon />
                  <span>{item.right}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className='block sm:hidden divide-y divide-[#e2e7f0]'>
            {comparisonData.map((item, index) => (
              <div key={index} className='py-4 first:pt-2 last:pb-2'>
                <div className='font-semibold text-sm mb-3 text-[#351C24]'>
                  {item.feature}
                </div>
                <div className='grid grid-cols-2 gap-4 text-sm'>
                  <div className='flex flex-col items-start'>
                    <div className='text-gray-500 mb-1'>{titleLeft}</div>
                    <div className='flex items-center'>
                      {item.left === 'Yes' ? (
                        <>
                          <CheckIcon />
                          <span className='text-[#351C24]'>Yes</span>
                        </>
                      ) : (
                        <span className='text-[#351C24]'>{item.left}</span>
                      )}
                    </div>
                  </div>
                  <div className='flex flex-col items-start'>
                    <div className='text-gray-500 mb-1'>{titleRight}</div>
                    <div className='flex items-center'>
                      {(item.right === 'Yes' || item.right === 'No') && (
                        <XIcon />
                      )}
                      <span className='text-[#351C24]'>{item.right}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <div className='w-full flex justify-center'>
          {button && (
            <div className='w-full max-w-md mt-8 flex justify-center'>
              <Button href={buttonLink}>{button}</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompetitorsProductsList;

// Icons
const CheckIcon: React.FC = () => (
  <svg
    className='w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-500 flex-shrink-0'
    fill='currentColor'
    viewBox='0 0 20 20'
  >
    <path
      fillRule='evenodd'
      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
      clipRule='evenodd'
    />
  </svg>
);

const XIcon: React.FC = () => (
  <svg
    className='w-4 h-4 md:w-5 md:h-5 mr-2 text-red-500 flex-shrink-0'
    fill='currentColor'
    viewBox='0 0 20 20'
  >
    <path
      fillRule='evenodd'
      d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
      clipRule='evenodd'
    />
  </svg>
);
