'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MeetOurFounders = () => {
  const teamMembers = [
    {
      name: 'Udit Goenka',
      role: 'Chief Executive Officer',
      company: 'TinyCheque',
      image: '/images/founder/udi-goenka.svg',
      alt: 'Udit Goenka - Chief Executive Officer',
    },
    {
      name: 'Sudhir Goenka',
      role: 'Chief Executive Officer',
      company: 'TinyCheque',
      image: '/images/founder/sudhi-goenka.svg',
      alt: 'Sudhir Goenka - Chief Executive Officer',
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section>
      <div className='container'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className='text-center'
        >
          <p className='text-[#864A5B] text-sm uppercase tracking-wider mb-4'>
            Our Team
          </p>
          <h2 className='text-4xl font-bold text-[#351C24] mb-4'>
            Meet Our Founders
          </h2>
          <p className='text-2xl text-[#351C24] font-light mb-4'>
            passionate, driven and hardworking
          </p>
          <p className='text-[#864A5B] max-w-2xl mx-auto'>
            Meet some of our favorite innovators solving big problems in their
            communities
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-6 md:mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className='bg-white rounded-3xl shadow-sm p-6 hover:shadow-lg transition-shadow duration-300'
            >
              <div className='relative w-full h-80 mb-6 rounded-2xl overflow-hidden'>
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  className='object-cover rounded-2xl'
                  priority={index === 0}
                />
              </div>
              <h3 className='text-xl font-semibold text-[#351C24] mb-2'>
                {member.name}
              </h3>
              <p className='text-[#864A5B] mb-1'>{member.role}</p>
              <p className='text-[#864A5B]'>{member.company}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetOurFounders;
