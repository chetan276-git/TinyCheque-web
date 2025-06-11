'use client';
import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
    },
  }),
};

const SassSection = () => {
  const gridItems = [
    {
      title: '50-50 Co-Founder Partnership',
      description:
        "We don't just invest in your company—we become your co-founder, sharing 50% ownership and bringing all of our resources, expertise, and network to the table. We're in this together.",
    },
    {
      title: 'End-to-End Growth Expertise',
      description:
        "From market strategy to technology development and fundraising, we offer a complete suite of resources to drive your SaaS growth. Whether it's acquiring your first 1,000 users or scaling to millions, we have the experience to make it happen.",
    },
    {
      title: 'AI-Focused Vision',
      description:
        'We are deeply embedded in the AI-SaaS world. Our technical expertise in AI ensures that your product is at the cutting edge of innovation, with the scalability and adaptability needed for long-term success.',
    },
    {
      title: 'Decades of Experience',
      description:
        'TinyCheque has built and scaled AI-first SaaS products across multiple industries. Our proven frameworks, combined with our deep network of contacts, make us the ideal partner for companies looking to grow quickly and strategically.',
    },
    {
      title: 'A True Partnership',
      description:
        "With TinyCheque, you're not just getting another investor—you're getting a partner who is fully committed to your success. We bring all the tools necessary to scale, including marketing, sales, technology, finance, and strategic guidance. And because we share ownership, we're just as invested in your success as you are.",
    },
  ];

  return (
    <section className='bg-[#FBFBFB]'>
      <div className='container'>
        <motion.div
          className='flex flex-col gap-2 sm:gap-2 items-center text-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
            Partner with TinyCheque
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
            Why AI-First SaaS Companies
          </h2>
          <h2 className='text-lg sm:text-xl md:text-2xl font-light text-[#351C24]'>
            Trust TinyCheque
          </h2>
          <p className='text-[#864A5B] text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose'>
            Why TinyCheque Is the Partner You Need to Scale Your SaaS
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 mb-4'>
          {gridItems.map((item, index) => (
            <motion.div
              key={index}
              className='bg-white rounded-3xl shadow-md p-6 flex flex-col items-start space-y-3'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 1}
            >
              <h3 className='text-xl font-semibold text-[#351C24]'>
                {item.title}
              </h3>
              <p className='text-lg text-[#864A5B] font-normal'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SassSection;
