'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const HomeVisionScalable = () => {
  const stepsData = [
    {
      id: 1,
      icon: 'timer.svg',
      title: 'Share Your Vision',
      stepLabel: 'Step 1',
      description:
        'Collaborate with TinyCheque to co-create AI SaaS products that revolutionize industries.',
    },
    {
      id: 2,
      icon: 'timer-start.svg',
      title: 'Develop Solution',
      stepLabel: 'Step 2',
      description:
        'We provide the technology and expertise to transform ideas into successful AI-driven SaaS solutions.',
    },
    {
      id: 3,
      icon: 'calendar-tick.svg',
      title: 'Launch and Scale',
      stepLabel: 'Step 3',
      description:
        'Partner with us to launch and scale AI-powered software solutions that reach new markets and customers.',
    },
  ];

  return (
    <section className='bg-[#FBFBFB]'>
      <div className='container'>
        <div className='flex flex-col gap-2 sm:gap-2 items-center text-center'>
          <motion.p
            className='text-primary text-base sm:text-lg font-normal'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            The Transformation
          </motion.p>
          <motion.h2
            className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            From Vision to Scalable
          </motion.h2>
          <motion.h2
            className='text-2xl sm:text-3xl md:text-4xl font-light text-primary'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            AI-Solutions
          </motion.h2>
          <motion.p
            className='text-secondary text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            TinyCheque reduces the uncertainty of SaaS product development by
            offering a clear and proven path to success, whether you&#39;re
            building with us or partnering to scale. We turn your vision into
            reality with our expertise in AI innovation.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8 mb-4'>
          {stepsData.map((currEle, i) => (
            <motion.div
              key={i}
              className='bg-white rounded-3xl p-6 border border-gray-200 hover:shadow-2xl transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 cursor-pointer'
              custom={i}
              initial='hidden'
              whileInView='visible'
              variants={cardVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className='flex flex-col gap-2 mb-4'>
                <div className='w-8 h-8 relative'>
                  <Image
                    src={`/images/icons/${currEle.icon}`}
                    fill
                    alt={currEle.title}
                    className='object-contain'
                  />
                </div>
                <p className='text-base text-[#BC808C] font-medium'>
                  {currEle.stepLabel}
                </p>
              </div>
              <h2 className='text-xl font-semibold text-primary mb-2'>
                {currEle.title}
              </h2>
              <div className='w-12 h-0.5 bg-gradient-to-r from-[#2F4085] to-[#537FDE] mb-4' />
              <p className='text-sm font-normal text-secondary'>
                {currEle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeVisionScalable;
