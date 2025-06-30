'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EyeIcon } from '../icons/eye-icon';
import { DevelopmentIcon } from '../icons/development-icon';
import { StrategiesIcon } from '../icons/strategies-icon';

const ProductProcessSteps = [
  {
    title: 'Strategic Expertise at Every Stage',
    description: `We work closely with you to provide strategic guidance that helps your SaaS scale faster and smarter. Whether you're an early-stage startup or an established business looking to optimize, we provide the roadmap to success.
`,
    icon: <EyeIcon />,
  },
  {
    title: 'Full AI and Product Development Team',
    description: `With TinyCheque, you get access to a world-class team of AI engineers, SaaS developers, and product managers—all working to turn your vision into a product that's market-ready and scalable.`,
    icon: <DevelopmentIcon />,
  },
  {
    title: 'Proven Go-to-Market (GTM) Strategies',
    description: `Bringing a SaaS product to market requires more than just a launch. We provide GTM strategies that include customer acquisition, growth hacking, and product positioning—ensuring you hit the ground running.`,
    icon: <StrategiesIcon />,
  },
];

const PartnershipBuilt = () => {
  return (
    <section className='bg-[#FBFBFB] py-10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
            What We Offer Beyond Just Software
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
            A Partnership Built on Collaboration and Expertise
          </h2>
          <h3 className='text-2xl sm:text-3xl md:text-3xl font-light text-[#351C24]'>
            Why it Matters
          </h3>
          <p className='text-[#864A5B] mt-2'>
            You don&apos;t just need a product. You need a product that is
            scalable, market-ready, and equipped to dominate its niche.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-10'>
          {ProductProcessSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className='bg-white rounded-3xl shadow-md p-6 flex flex-col h-full'
            >
              <div className='mb-4 w-12 h-12'>{step.icon}</div>
              <h3 className='text-xl font-semibold text-[#351C24] mb-3'>
                {step.title}
              </h3>
              <p className='text-[#864A5B] text-base flex-grow'>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipBuilt;
