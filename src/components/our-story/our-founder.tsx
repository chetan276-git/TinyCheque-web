'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Udit Goenka',
    title: 'Chief Executive Officer',
    company: 'TinyCheque',
    description: [
      'A serial entrepreneur and product visionary, Udit Goenka has spent years shaping the SaaS landscape with AI-powered solutions.',
      'Under his leadership, TinyCheque has grown from a bootstrapped startup to a globally recognized AI-First SaaS Venture Studio.',
      'His relentless focus on innovation and his ability to turn ambitious ideas into scalable products have made TinyCheque a trusted partner for businesses worldwide.',
    ],
    image: '/images/founder/udi-goenka.svg',
    linkedin: 'https://www.linkedin.com/in/uditgoenka/',
    twitter: 'https://x.com/iuditg',
  },
  {
    name: 'Sudhir Goenka',
    title: 'Chief Executive Officer',
    company: 'TinyCheque',
    description: [
      'A serial entrepreneur and product visionary, Udit Goenka has spent years shaping the SaaS landscape with AI-powered solutions.',
      'Under his leadership, TinyCheque has grown from a bootstrapped startup to a globally recognized AI-First SaaS Venture Studio.',
      'His relentless focus on innovation and his ability to turn ambitious ideas into scalable products have made TinyCheque a trusted partner for businesses worldwide.',
    ],
    image: '/images/founder/sudhi-goenka.svg',
    linkedin: 'https://www.linkedin.com/in/uditgoenka/',
    twitter: 'https://x.com/sudhirgoenka',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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

const OurFounder = () => {
  return (
    <section className='bg-[#fff]'>
      <div className='container'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4'>
            Our Founders
          </h2>
          <p className='text-xl md:text-2xl text-gray-600 mb-4'>
            visionaries with a shared mission
          </p>
          <p className='text-gray-600'>
            At the heart of TinyCheque&apos;s success is a leadership team that
            shares a deep commitment to innovation and excellence.
          </p>
        </div>
        <div className='flex flex-col gap-12 max-w-5xl mx-auto'>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className='bg-gray-50 rounded-lg p-6 md:p-8'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              variants={fadeUp}
            >
              <div className='flex flex-col md:flex-row gap-8 items-start'>
                <div className='w-full md:w-72 shrink-0'>
                  <div className='aspect-square relative rounded-lg overflow-hidden bg-gray-200'>
                    <Image
                      alt={member.name}
                      src={member.image}
                      fill
                      className='object-cover'
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className='flex-1'>
                  <div className='text-sm text-purple-600 mb-2'>
                    Ongoing Projects
                  </div>
                  <h3 className='text-2xl font-bold text-[#2D2D2D] mb-1'>
                    {member.name}
                  </h3>
                  <p className='text-gray-600 mb-1'>{member.title}</p>
                  <p className='text-purple-600 mb-4'>{member.company}</p>
                  <div className='space-y-4 text-[#864A5B]'>
                    {member.description.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </div>
                  <div className='flex gap-4 mt-6'>
                    <a
                      className='text-gray-600 hover:text-purple-600'
                      href={member.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {/* LinkedIn SVG */}
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 40 40'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M36 0H4C1.8 0 0 1.8 0 4V36C0 38.2 1.8 40 4 40H36C38.2 40 40 38.2 40 36V4C40 1.8 38.2 0 36 0ZM12 34H6V16H12V34ZM9 12.6C7 12.6 5.4 11 5.4 9C5.4 7 7 5.4 9 5.4C11 5.4 12.6 7 12.6 9C12.6 11 11 12.6 9 12.6ZM34 34H28V23.4C28 21.8001 26.6 20.4 25 20.4C23.4 20.4 22 21.8001 22 23.4V34H16V16H22V18.4C23 16.8 25.2 15.6 27 15.6C30.8 15.6 34 18.8 34 22.6V34Z'
                          fill='#864A5B'
                        />
                      </svg>
                    </a>
                    <a
                      className='text-gray-600 hover:text-purple-600'
                      href={member.twitter}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {/* Twitter SVG */}
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 36 36'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M35.0047 0L3.99914 36H0.292969L31.2995 0H35.0047Z'
                          fill='#864A5B'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M25.1674 35.002L1.89355 1.00195H10.8317L34.1055 35.002H25.1674Z'
                          fill='white'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M9.78135 3L30.316 33H26.2186L5.684 3H9.78135ZM11.358 0H0L24.642 36H36L11.358 0Z'
                          fill='#864A5B'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFounder;
