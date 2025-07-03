import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AdvisorsInfo = [
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

const AdvisorsInfoCards = () => {
  return (
    <div className='w-full px-4 md:px-6 lg:px-8 mt-8 md:mt-12'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {AdvisorsInfo.map((mentor, index) => (
          <motion.div
            key={index}
            className='bg-white rounded-3xl shadow-md p-4 sm:p-6 flex items-start space-x-4'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={index}
          >
            <div className='relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0'>
              <Image
                src={mentor.image}
                alt={mentor.alt}
                fill
                className='rounded-md object-cover'
                sizes='(max-width: 640px) 80px, 96px'
                priority={index === 0}
              />
            </div>
            <div className='text-left flex-1'>
              <h3 className='font-semibold text-base sm:text-lg'>
                {mentor.name}
              </h3>
              <p className='text-sm text-[#864A5B]'>
                {mentor.role},{' '}
                <span className={mentor.companyColor}>{mentor.company}</span>
              </p>
              {mentor.extraRole && mentor.extraCompany && (
                <div className='flex flex-wrap text-sm mt-1'>
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
  );
};

export default AdvisorsInfoCards;
