'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const textFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const GrowthSection = () => {
  return (
    <section>
      <div className='container'>
        <motion.div
          className='text-center mb-16'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={textFadeUp}
        >
          <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
            Growth
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
            Future Growth and Possibilities
          </h2>
          <p className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
            passionate, driven and hardworking
          </p>
          <p className='text-[#864A5B] text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose mx-auto'>
            Meet some of our favorite innovators solving big problems
            <br />
            in their communities
          </p>
        </motion.div>

        <div className='bg-white rounded-3xl shadow-lg p-8 md:p-12'>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            {/* Left Text Column */}
            <motion.div
              className='space-y-6'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={slideLeft}
            >
              <h3 className='text-2xl font-bold text-[#2D1A22]'>
                Explosive Growth and Future Possibilities Await
              </h3>
              <p className='text-lg text-[#864A5B] leading-relaxed'>
                When you partner with TinyCheque, you gain more than just
                resources—you gain a strategic partner committed to scaling your
                SaaS product to new heights...
              </p>
              <div className='space-y-4'>
                <h4 className='text-lg font-bold text-[#351C24]'>
                  The Future is Yours to Build
                </h4>
                <ul className='space-y-3'>
                  {[
                    'Scale your AI-first SaaS from hundreds to millions of users.',
                    'Enter new markets with a clear go-to-market strategy backed by expert insights.',
                    'Grow revenue at an unprecedented rate with high-performance sales strategies.',
                    'Secure future funding rounds with ease, supported by our network of investors.',
                  ].map((point, i) => (
                    <li
                      key={i}
                      className='flex items-start text-lg text-[#8B3B6C]'
                    >
                      <span className='mr-2'>•</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <p className='text-lg text-[#8B3B6C]'>
                  Together, we&lsquo;ll build a thriving business that dominates
                  its market, grows rapidly, and positions itself for long-term
                  success or a strategic exit when the time is right.
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={slideRight}
            >
              <div className='rounded-lg overflow-hidden aspect-[1] relative'>
                <Image
                  src='/images/grwoth.jpg'
                  alt='Growth'
                  className='w-full h-auto'
                  priority={false}
                  quality={80}
                  fill
                  objectFit='contain'
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
