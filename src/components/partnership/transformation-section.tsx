'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search } from '../icons/search';
import { Strategy } from '../icons/strategy';
import { Technology } from '../icons/technology';
import { Sales } from '../icons/sales';
import { Financial } from '../icons/financial';
import { Collaboration } from '../icons/collaboration';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const TransformationSection = () => {
  const stepsData = [
    {
      id: 1,
      step: 'Step 1',
      title: 'Initial Discovery & Strategy Alignment',
      description:
        "Our partnership begins with a deep-dive discovery session where we align on your product's vision, market potential, and growth strategy. We identify the gaps in your current operations—whether it's in marketing, sales, or tech—and formulate a clear roadmap to success. We make sure that we're perfectly in sync from the start, ensuring a strong foundation for our partnership.",
      icon: <Search />,
    },
    {
      id: 2,
      step: 'Step 2',
      title: 'Market & Distribution Strategy Development',
      description:
        'Once aligned, TinyCheque develops a robust go-to-market (GTM) strategy that focuses on rapid customer acquisition and market penetration. We leverage our proven marketing frameworks and distribution channels to ensure that your product reaches the right audience quickly. This includes performance marketing, content strategies, partnerships, and more.',
      icon: <Strategy />,
    },
    {
      id: 3,
      step: 'Step 3',
      title: 'Technology & Scalability Optimization',
      description:
        'With a strong GTM strategy in place, we turn our focus to technology. TinyCheque provides expertise in building scalable AI-first SaaS products. Whether you need help with product development, technical architecture, or AI model optimization, we bring the resources and talent necessary to ensure your SaaS can scale rapidly as user demand grows.',
      icon: <Technology />,
    },
    {
      id: 4,
      step: 'Step 4',
      title: 'Sales & Growth Acceleration',
      description:
        "We supercharge your sales process with AI-driven sales strategies, lead generation techniques, and performance tracking systems that bring in high-quality leads at scale. TinyCheque's sales expertise ensures your product grows its user base efficiently.",
      icon: <Sales />,
    },
    {
      id: 5,
      step: 'Step 5',
      title: 'Financial Strategy & Fundraising Support',
      description:
        "As your partner, TinyCheque provides the financial expertise needed to scale your business sustainably. We'll help you optimize pricing strategies, manage cash flow, and prepare for future fundraising rounds. With our extensive network of investors and VCs, we'll also help you secure additional funding to fuel growth when needed.",
      icon: <Financial />,
    },
    {
      id: 6,
      step: 'Step 6',
      title: 'Ongoing Collaboration & Scaling',
      description: `Unlike traditional partnerships that fade after launch, TinyCheque remains by your side as a full co-founder. We continuously refine your product, optimize marketing and sales strategies, and scale operations as your business grows. We're in this for the long haul—driving growth, improving processes, and scaling until we achieve our collective goals.`,
      icon: <Collaboration />,
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
          <p className='text-secondary text-base sm:text-lg font-normal'>
            The Transformation
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>
            The TinyCheque SaaS CRO Audit Process
          </h2>
          <h2 className='text-2xl sm:text-3xl md:text-3xl font-light text-primary'>
            Our 5-Step CRO Audit Process
          </h2>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-4 mt-12'>
          {stepsData.map((step, index) => (
            <motion.div
              key={step.id}
              className='bg-white rounded-3xl shadow-md p-6 flex flex-col h-full'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={index + 1}
            >
              <div className='mb-4 w-12 h-12 relative'>{step.icon}</div>
              <div className='text-sm text-[#BC808C] mb-2'>{step.step}</div>
              <h3 className='text-xl font-semibold text-primary mb-3'>
                {step.title}
              </h3>
              <p className='text-secondary text-base flex-grow'>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
