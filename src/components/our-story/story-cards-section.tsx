'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface StoryHighlight {
  id: number;
  text: string;
}

interface StoryCardsSectionProps {
  title?: string;
  heading?: string;
  subheading?: string;
  introText?: string;
  highlights: StoryHighlight[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const StoryCardsSection: React.FC<StoryCardsSectionProps> = ({
  title,
  heading,
  subheading,
  introText,
  highlights,
}) => {
  return (
    <section>
      <div className='container'>
        {/* Header Section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className='w-full max-w-5xl mx-auto'
        >
          <div className='flex flex-col gap-2 sm:gap-2 items-center text-center'>
            {title && (
              <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
                {title}
              </p>
            )}
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              {heading}
            </h2>
            {subheading && (
              <h2 className='text-xl sm:text-2xl md:text-3xl font-light text-[#351C24]'>
                {subheading}
              </h2>
            )}
            <p className='text-md text-[#864A5B] font-normal'>{introText}</p>
          </div>
        </motion.div>

        {/* Card Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 md:mt-10 mb-4'>
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              className='bg-white rounded-3xl shadow-md flex items-start justify-center px-8 py-6'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={index * 0.2}
            >
              <p className='text-sm font-normal sm:text-base text-[#864A5B]'>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryCardsSection;
