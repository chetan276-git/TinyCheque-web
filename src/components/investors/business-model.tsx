'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BusinessModel = () => {
  return (
    <section className='bg-[#FBFBFB] pt-0 overflow-x-hidden'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row-reverse gap-6 lg:gap-10 items-center'>
          {/* Image Block Animation */}
          <motion.div
            className='flex-1'
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <Image
              src='/images/dual-bisuness-modal.svg'
              alt='Business Partnership'
              width={800}
              height={600}
              loading='lazy'
              className='rounded-lg shadow-lg w-full h-auto'
            />
          </motion.div>

          {/* Text Block Animation */}
          <motion.div
            className='flex-1 space-y-6'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className='space-y-4'>
              <h2 className='text-xl md:text-2xl font-bold text-[#351C24]'>
                A Dual Business Model That Drives Innovation and Scalability
              </h2>
              <p className='text-[#864A5B]'>
                TinyCheque operates a{' '}
                <strong className='text-[#351C24]'>dual business model</strong>{' '}
                that combines proprietary AI-driven product development with
                strategic joint ventures. This approach allows us to:
              </p>

              {/* List of Benefits */}
              <div className='space-y-4'>
                <div>
                  <h5 className='font-semibold text-[#351C24]'>
                    Create proprietary AI-SaaS products
                  </h5>
                  <p className='text-[#864A5B]'>
                    that solve real-world problems across multiple verticals,
                    including MarTech, SalesTech, HRTech and more. Our flagship
                    product,{' '}
                    <strong className='text-[#351C24]'>niyam.ai</strong>, has
                    already disrupted the legal industry by automating legal
                    workflows, increasing efficiency, and reducing human error.
                  </p>
                </div>
                <div>
                  <h5 className='font-semibold text-[#351C24]'>
                    Form joint ventures (JVs)
                  </h5>
                  <p className='text-[#864A5B]'>
                    with entrepreneurs, industry leaders, and enterprises to
                    co-create SaaS products that scale globally. By leveraging
                    our{' '}
                    <strong className='text-[#351C24]'>
                      135 million B2B contacts
                    </strong>{' '}
                    and deep market expertise, we help these ventures achieve
                    rapid market entry and growth.
                  </p>
                </div>
                <div>
                  <p className='text-[#864A5B]'>
                    This{' '}
                    <strong className='text-[#351C24]'>hybrid approach</strong>{' '}
                    enables TinyCheque to innovate faster, reduce risks, and tap
                    into new revenue streams, offering investors{' '}
                    <strong className='text-[#351C24]'>diverse exposure</strong>{' '}
                    to high-growth sectors in AI and SaaS.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
