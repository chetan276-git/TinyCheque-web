'use client';
import React from 'react';
import { motion } from 'framer-motion';

const OurInnovation = () => {
  const InnovationData = [
    {
      title: 'AI at the Core of Everything We Do',
      description:
        "TinyCheque is not just another SaaS development studio. We are an AI-first company, meaning AI isn't just an add-on for us—it's the very foundation of how we create, build, and scale software. Our unique combination of AI, product innovation, and industry expertise allows us to deliver solutions that are faster, smarter, and more effective than traditional SaaS offerings.",
    },
    {
      title: 'Dual Business Model: Product Innovation & Strategic Partnerships',
      description:
        'At TinyCheque, we operate on a dual business model. First, we develop our own proprietary AI-driven SaaS products, designed to address critical pain points across industries like LegalTech, FinTech, MarTech, SalesTech, etc. Second, we partner with entrepreneurs and businesses through joint ventures to co-create SaaS solutions that have the potential to disrupt their respective markets. Our success is defined not only by the groundbreaking products we build but also by the strategic collaborations that fuel innovation.',
    },
    {
      title: 'Proven Track Record of Success',
      description:
        'Having worked with over 700 SaaS companies in the past, and these companies raising over $300 million, led to the creation of TinyCheque. Our industry experience spans multiple verticals, from FinTech to HealthTech, making us the ideal partner for any business looking to scale with AI-powered solutions.',
    },
  ];

  return (
    <section>
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
              Our Innovation
            </p>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#351C24]'>
              What Sets TinyCheque Apart?
            </h2>
            <h2 className='text-2xl sm:text-3xl md:text-3xl font-light text-[#351C24]'>
              SaaS development studio
            </h2>
          </motion.div>
        </div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:mt-10 mb-4'
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
          {InnovationData.map((section, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className='bg-white rounded-3xl shadow-md py-6 px-8 flex flex-col'
            >
              <h3 className='text-xl font-semibold text-[#351C24] mb-2'>
                {section.title}
              </h3>
              <p className='text-md text-[#864A5B] font-normal'>
                {section.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurInnovation;
