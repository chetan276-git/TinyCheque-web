'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const contentSections = [
  {
    step: '1',
    title: 'AI-First Approach',
    headline: 'Pioneering Innovation in Every Product',
    description:
      'At TinyCheque, we embed artificial intelligence into the core of everything we build. With AI as the backbone, your SaaS product benefits from automation, machine learning, and intelligent data-driven insights that set you apart from competitors. From AI-driven customer engagement to predictive analytics, we bring future-proof solutions to every SaaS business we partner with.',
    why: 'The SaaS landscape is constantly evolving. Without AI, you risk being left behind. With TinyCheque, AI becomes your competitive edge.',
    image: '/images/why-us/poineering-innovation.jpg',
    reverse: false,
  },
  {
    step: '2',
    title: 'Dual Business Model',
    headline: 'Creating and Co-Building for Maximum Impact',
    description:
      "TinyCheque's unique dual business model is designed to maximize opportunities for growth. We do more than build our own AI-first SaaS products. We form joint ventures with forward-thinking companies, helping them create transformative products through a co-creation and co-distribution approach.",
    extra: [
      {
        heading: 'Vertical 1: Proprietary SaaS Products',
        text: 'We build our own SaaS solutions, targeting real-world challenges and scaling them rapidly.',
      },
      {
        heading: 'Vertical 2: Strategic Joint Ventures',
        text: 'We partner with innovative entrepreneurs and companies, co-creating solutions from ideation to market launch.',
      },
    ],
    why: 'Whether you want to launch a new product or enhance an existing platform, TinyCheque provides the expertise and resources you need for every stage of the process.',
    image: '/images/why-us/business-model.jpg',
    reverse: true,
  },
  {
    step: '3',
    title: 'Proven Track Record',
    headline: '700+ SaaS Companies, $300M+ Raised',
    description:
      'Our experience speaks for itself. Having worked with over 700 SaaS companies, helping them raise more than $300 million in funding, TinyCheque has the proven expertise to take your SaaS business from zero to scale.',
    extra: [
      {
        heading: 'Our Experience:',
        text: 'We understand every stage of the SaaS journey—having witnessed, built, and optimized countless successful platforms.',
      },
    ],
    why: `You'll benefit from our deep knowledge of what works, what scales, and what drives revenue in the SaaS ecosystem.`,
    image: '/images/why-us/track-record.jpg',
    reverse: false,
  },
  {
    step: '4',
    title: 'End-to-End SaaS Support',
    headline: 'From Ideation to Scale',
    description: `We don't just come in for one phase. TinyCheque is your end-to-end partner in SaaS development, ensuring that every phase - product development, AI integration, sales optimization, customer success - is built for long-term growth. We stay with you from concept to scaling globally, providing consistent, tailored support at every step.`,
    why: `Whether you need help building from scratch or scaling an existing product, TinyCheque becomes a long-term partner invested in your growth.`,
    image: '/images/why-us/sass-support.jpg',
    reverse: true,
  },
  {
    step: '5',
    title: 'Tailored Solutions',
    headline: 'for SaaS Companies',
    description: `TinyCheque's solutions are never “one-size-fits-all.” We understand the unique challenges of SaaS—from converting free trials into paying customers to reducing churn and increasing customer lifetime value (CLV). We craft solutions that address your specific pain points and opportunities.`,
    extra: [
      {
        heading: 'SaaS-Specific Focus:',
        text: 'Our work spans the entire SaaS lifecycle, with solutions optimized for rapid, scalable growth.',
      },
    ],
    why: `You get solutions tailored to your unique market, product, and customers—ensuring you maximize revenue and growth opportunities.`,
    image: '/images/why-us/tailored-solutions.png',
    reverse: false,
  },
  {
    step: '6',
    title: 'AI-Powered Audits',
    headline: 'for Maximum Optimization',
    description: `TinyCheque doesn't just help you launch; we help you optimize. Our SaaS audits—from SaaS CRO to SaaS Sales SOPs—are designed to fine-tune your platform, optimizing it for conversions, growth, and customer retention. Our proprietary AI-powered tools ensure that every inch of your SaaS platform is primed for efficiency.`,
    extra: [
      {
        heading: 'SaaS Audits We Offer:',
        text: 'Our work spans the entire SaaS lifecycle, with solutions optimized for rapid, scalable growth.',
      },
    ],
    why: `With TinyCheque's audit services, you'll gain actionable insights that improve your platform's performance and revenue generation.`,
    image: '/images/why-us/powered-audits.png',
    reverse: true,
  },
];

const KeyResones = () => {
  return (
    <section>
      <div className='container'>
        <div className='max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='flex flex-col gap-2 sm:gap-2 items-center text-center'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              Partner
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              Key Reasons to Partner with TinyCheque
            </h2>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-light text-[#351C24]'>
              to Partner with TinyCheque
            </h2>
          </motion.div>
        </div>

        <div className='w-full bg-white rounded-3xl mt-6 md:mt-10'>
          {contentSections.map((section, idx) => (
            <motion.div
              key={idx}
              className='py-10 px-4 md:px-8 lg:px-16'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariant}
            >
              <div
                className={`flex flex-col ${
                  section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-4 lg:gap-10 items-center`}
              >
                {/* Text Content */}
                <div className='flex-1 space-y-6'>
                  <div className='space-y-4'>
                    <h3 className='text-lg font-semibold text-[#864A5B]'>
                      {section.step}. {section.title}
                    </h3>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#351C24]'>
                      {section.headline}
                    </h2>
                    <p className='text-gray-600'>{section.description}</p>
                    {section.extra?.map((item, index) => (
                      <div key={index}>
                        <h5 className='font-semibold text-[#864A5B]'>
                          {item.heading}
                        </h5>
                        <p className='text-gray-600'>{item.text}</p>
                      </div>
                    ))}
                    <div className='pt-4'>
                      <h5 className='font-semibold text-[#864A5B]'>
                        Why it Matters:
                      </h5>
                      <p className='text-gray-600'>{section.why}</p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className='flex-1'>
                  <Image
                    alt={section.title}
                    src={section.image}
                    width={600}
                    height={400}
                    className='rounded-3xl shadow-lg w-full h-auto'
                    loading='lazy'
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyResones;
