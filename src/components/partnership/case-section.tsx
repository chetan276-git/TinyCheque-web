'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const CaseStudySection = () => {
  return (
    <section>
      <div className='container'>
        <motion.div
          className='flex flex-col gap-2 sm:gap-2 items-center text-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <p className='text-secondary text-base sm:text-lg font-normal'>
            Case Study
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>
            Niyam.ai—A LegalTech Revolution
          </h2>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-primary'>
            Built with TinyCheque
          </h2>
        </motion.div>

        <div className='max-w-6xl mx-auto space-y-4 mt-4 mb-4'>
          <motion.div
            className='bg-white rounded-3xl p-6 shadow'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div className='flex flex-col gap-2 mb-2 px-2'>
              <div className='rounded-md'>
                <Image
                  src='/images/icons/eraser.svg'
                  width={35}
                  height={35}
                  loading='lazy'
                  alt='Icon'
                />
              </div>
              <h2 className='text-lg font-bold'>The Opportunity</h2>
            </div>
            <p className='text-secondary text-lg font-normal px-2'>
              Niyam.ai was an AI-powered LegalTech startup with a groundbreaking
              platform, but they needed help scaling their product, entering new
              markets, and building a sustainable business model.
            </p>
          </motion.div>

          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-4'>
            <motion.div
              className='bg-white rounded-3xl p-6 shadow flex-1'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
            >
              <div className='flex flex-col gap-2 mb-2 px-2'>
                <div>
                  <Image
                    src='/images/icons/receipt-search.svg'
                    width={35}
                    height={35}
                    alt='Icon'
                    loading='lazy'
                  />
                </div>
                <h2 className='text-lg font-bold'>The Partnership</h2>
              </div>
              <p className='mb-2 px-2'>
                TinyCheque partnered with Niyam.ai in a 50-50 JV, bringing in
                its extensive resources across marketing, sales, and tech to
                drive growth. TinyCheque worked closely with Niyam.ai’s founders
                to build a tailored GTM strategy, optimize the platform’s AI
                capabilities, and develop key partnerships with law firms and
                corporates.
              </p>
              <ul className='list-disc pl-5 space-y-2 text-sm md:text-md font-normal text-black px-2' />
            </motion.div>

            <motion.div
              className='bg-white rounded-3xl p-6 shadow flex-1'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
            >
              <div className='flex flex-col gap-2 mb-2 px-2'>
                <div>
                  <Image
                    src='/images/icons/tick-circle.svg'
                    width={35}
                    height={35}
                    alt='Icon'
                    loading='lazy'
                  />
                </div>
                <h2 className='text-lg font-bold'>The Outcome</h2>
              </div>
              <p className='mb-2 px-2'>
                After implementing TinyCheque’s recommendations
              </p>
              <ul className='list-disc pl-5 space-y-2 text-sm md:text-md font-normal text-secondary px-2'>
                <li>
                  <span className='font-semibold text-gray-800'> </span>Niyam.ai
                  grew from 0 to thousands of users in months, thanks to
                  TinyCheque’s market expansion strategies.
                </li>
                <li>
                  <span className='font-semibold text-gray-800'> </span>Niyam.ai
                  is in talks to raise funding through TinyCheque’s investor
                  network, accelerating its growth even further.
                </li>
                <li>
                  <span className='font-semibold text-gray-800'> </span>Today,
                  Niyam.ai is one of the hottest AI-SaaS LegalTech spaces,
                  automating legal research, document drafting, and compliance
                  for law firms and businesses of all sizes.
                </li>
                <li>
                  <span className='font-semibold text-gray-800'> </span>This is
                  the power of a 50-50 partnership with TinyCheque — together,
                  we build scalable, successful AI-first SaaS products that
                  dominate their markets.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
