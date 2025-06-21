'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const FutureLegalTech = () => {
  return (
    <section className='bg-[#FBFBFB]'>
      <div className='container'>
        <div className='px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='flex flex-col gap-2 sm:gap-2 items-center text-center'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              What is Niyam.ai
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              The Future of LegalTech Is Here
            </h2>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
              Simplify Your Legal Work with Niyam.ai
            </h2>
          </motion.div>
        </div>

        <motion.div
          className='bg-white rounded-2xl overflow-hidden shadow-lg mt-6 md:mt-10 mb-4'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className='p-6 md:p-8 md:flex'>
            <motion.div
              className='md:flex-1 md:pr-8'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={1}
            >
              <p className='text-[#864A5B] font-base text-sm mb-2' />
              <h2 className='text-2xl font-bold text-[#351C24] mb-4' />
              <p className='text-[#864A5B] font-base text-lg mb-4'>
                Niyam.ai is a GenAI-powered legal technology platform that
                transforms how legal professionals, MSMEs, corporates, and
                individuals manage their legal processes. Niyam.ai provides
                accurate, efficient, and customizable solutions. With the power
                of Generative AI, it produces high-impact content while ensuring
                full compliance with local and international regulations.
                Niyam.ai adapts to your unique legal requirements, saving time,
                reducing human error, and enhancing productivity.
              </p>
            </motion.div>

            <motion.div
              className='mt-6 md:mt-0 md:flex-1 rounded-lg'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={2}
            >
              <Image
                src='/images/products/niyam-legeltech.jpg'
                alt='AI robot holding scales of justice'
                width={600}
                height={400}
                loading='lazy'
                className='w-full h-auto rounded-lg'
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureLegalTech;
