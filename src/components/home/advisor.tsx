'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const mentors = [
  {
    name: 'Amit Kumar',
    role: 'Founder & CEO',
    company: 'MSMEx',
    companyColor: 'text-blue-600',
    image: '/images/advisor/amit-kumar.svg',
    alt: 'Amit Kumar',
  },
  {
    name: 'Amit Chand',
    role: 'Founder',
    company: 'Angel Investor',
    companyColor: 'text-blue-600',
    extraRole: 'Founder',
    extraCompany: 'Byt Avenue',
    extraCompanyColor: 'text-blue-600',
    image: '/images/advisor/amit-chand.jpg',
    alt: 'Amit Chand',
  },
  {
    name: 'Deepak Maheshwari',
    role: 'Co-Founder',
    company: 'Jindagi Live Group',
    companyColor: 'text-blue-600',
    extraRole: 'Ex-CFO',
    extraCompany: 'GE Capital',
    extraCompanyColor: 'text-blue-600',
    image: '/images/advisor/deepak.svg',
    alt: 'Deepak Maheshwari',
  },
  {
    name: 'Neeraj Sharma',
    role: 'Co-Founder',
    company: 'Pariveda',
    companyColor: 'text-blue-600',
    extraRole: 'Ex Partner',
    extraCompany: 'Grant Thornton',
    extraCompanyColor: 'text-blue-600',
    image: '/images/advisor/neeraj.svg',
    alt: 'Neeraj Sharma',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
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

const Advisor = () => {
  return (
    <section className='bg-[#FBFBFB]'>
      <div className='container'>
        <div className='w-full mx-auto md:px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col gap-2 sm:gap-2 items-center text-center'>
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              Advisors
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              Advisor to TinyCheque
            </h2>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
              Marquee Angels
            </h2>
          </div>
        </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:px-4 mt-8 md:mt-12'>
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              className='bg-white rounded-3xl shadow-md p-6 flex items-center space-x-4'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              custom={index}
            >
              <div className='relative w-24 h-26 flex-shrink-0'>
                <Image
                  src={mentor.image}
                  alt={mentor.alt}
                  fill
                  className='rounded-md object-cover'
                  sizes='96px'
                  priority={index === 0}
                />
              </div>
              <div>
                <h3 className='font-semibold text-lg'>{mentor.name}</h3>
                <p className='text-sm text-[#864A5B]'>
                  {mentor.role},&nbsp;
                  <span className={mentor.companyColor}>{mentor.company}</span>
                </p>
                {mentor.extraRole && mentor.extraCompany && (
                  <div className='flex flex-wrap text-sm'>
                    <p className='text-[#864A5B] mr-1'>{mentor.extraRole},</p>
                    <span className={mentor.extraCompanyColor}>
                      {mentor.extraCompany}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advisor;
