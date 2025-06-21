'use client';

import React from 'react';
import { motion } from 'framer-motion';

const KeyFeatures = () => {
  const niyamFeatures = [
    {
      title: 'AI-Powered Document Drafting',
      description:
        "Generate high-quality legal documents with Niyam.ai's GenAI model, saving hours on manual drafting. Our AI ensures every document is clear, accurate, and fully compliant with legal standards.",
    },
    {
      title: 'Comprehensive Legal Research',
      description:
        'Cut through the noise of traditional research methods with AI-driven research tools that pull relevant legal precedents, statutes, and case laws tailored to your case or business need.',
    },
    {
      title: 'Compliance Monitoring & Smart Alerts',
      description:
        'Stay compliant with up-to-date regulatory frameworks. Niyam.ai automatically checks your documents for compliance, ensuring adherence to the latest legal requirements. Our platform notifies you of any changes in the law that may affect your business.',
    },
    {
      title: 'Customizable Legal Templates',
      description:
        'Tinycheque has built and scaled AI-first SaaS products across multiple industries. Our proven frameworks, combined with our deep networks of contacts, make us the ideal partner for companies looking to grow quickly and strategically.',
    },
    {
      title: 'Seamless Integration',
      description:
        'Niyam.ai integrates with your existing workflow tools—whether it’s a CRM, case management system, or document repository—making it easy to adopt without disrupting your operations.',
    },
  ];

  return (
    <section className='bg-[#FBFBFB] py-10'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center px-4 sm:px-6 lg:px-8'
        >
          <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
            Partner with TinyCheque
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
            Key Features of Autoposting.ai
          </h2>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          {niyamFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white rounded-3xl shadow-md p-6 flex flex-col items-start space-y-3'
            >
              <h3 className='text-xl font-semibold text-[#351C24]'>
                {feature.title}
              </h3>
              <p className='text-lg text-[#864A5B] font-normal'>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
