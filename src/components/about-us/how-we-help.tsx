'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { EyeIcon } from '../icons/eye-icon';
import { DevelopmentIcon } from '../icons/development-icon';
import { StrategiesIcon } from '../icons/strategies-icon';

const HowWeHelp = () => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Share Your Vision',
      description:
        "We work with you to understand your business challenges, goals, and vision. Whether you're an entrepreneur with a big idea or a business looking to enhance your SaaS product, we begin by listening.",
      icon: <EyeIcon />,
    },
    {
      step: 'Step 2',
      title: 'Build with Experts',
      description:
        'Our team of AI and SaaS experts collaborates closely with you to design and develop a product that is both innovative and practical. From AI-driven user insights to secure backend architecture, we handle the technical complexities, so you can focus on strategy.',
      icon: <DevelopmentIcon />,
    },
    {
      step: 'Step 3',
      title: 'Scale and Succeed',
      description:
        "TinyCheque is not just a product builder—we're a scaling partner. With our extensive market experience and AI expertise, we ensure your SaaS product is not just functional but positioned to grow, reach new markets, and maximize profitability.",
      icon: <StrategiesIcon />,
    },
  ];

  return (
    <section className='bg-[#FBFBFB]'>
      <div className='container'>
        <div className='w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='flex flex-col gap-2 sm:gap-2 items-center text-center'
          >
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              How we help
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              How TinyCheque helps
            </h2>
            <h2 className='text-2xl sm:text-3xl md:text-3xl font-light text-[#351C24]'>
              you scale with AI
            </h2>
            <p className='text-[#864A5B] mt-2'>
              We understand that navigating the complex world of SaaS
              development can be daunting. That’s why we’ve built a streamlined,
              proven process that reduces uncertainty and accelerates growth.
              From ideation to market entry, TinyCheque offers full-lifecycle
              support, ensuring that your SaaS product is scalable, secure, and
              ready to dominate its market.
            </p>
            <p className='font-semibold text-[#351C24] mt-4'>
              Our Approach: From Vision to Reality
            </p>
          </motion.div>
        </div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-10'
          initial='hidden'
          whileInView='visible'
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
            hidden: {},
          }}
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeHelp;
