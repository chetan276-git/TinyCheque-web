'use client';

import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
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

const ProvenTrackRecord = () => {
  const highlights = [
    {
      text: `Over $15m+ in SaaS Sales: One of TinyCheque's founders has a proven track record of selling millions of dollars worth of SaaS solutions, demonstrating an exceptional ability to identify market opportunities and create high-value products that resonate with businesses globally.`,
    },
    {
      text: `Featured on Shark Tank India, Season 3: One of the SaaS startups which we advised and listed on our SaaS marketplace was featured on Shark Tank India, Season 3, showcasing the innovation and scalability of the solutions developed by TinyCheque's founders. This platform provided exposure and validation from some of the most successful investors in the country.`,
    },
    {
      text: `700+ SaaS Companies and $300M Raised: We have worked with over 700 SaaS companies in various capacities, helping them grow and scale. Collectively, these companies have raised more than $300 million in funding over the last seven years, a testament to the founder's expertise in identifying scalable, high-potential SaaS ventures.`,
    },
    {
      text: `INR 2500 Cr Raised as CFO: Another founder has an extensive background in financial leadership, having raised over INR 2500 Cr (approximately $300 million USD) throughout his career as a CFO. His deep understanding of finance and strategic investments has helped businesses optimize their financial performance and scale sustainably.`,
    },
    {
      text: `100k+ Followers and LinkedIn Top Voice: One of TinyCheque's founders has amassed over 100,000 followers on LinkedIn and has been recognized as a Top Voice on the platform, further enhancing TinyCheque's reach and visibility. This broad audience fuels organic distribution and opens up strategic networking opportunities that help drive business growth and investor interest.`,
    },
    {
      text: `Our performance is a testament to our ability to deliver scalable, profitable products that solve real-world problems and create value for our investors.`,
    },
  ];

  return (
    <section className='bg-[#FBFBFB] py-20'>
      <div className='container'>
        <motion.div
          className='text-center max-w-4xl mx-auto mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24] mb-4'>
            Proven Track Record and Strong Foundational Expertise
          </h2>
          <p className='text-md text-[#864A5B] font-normal'>
            TinyCheque is built on the experience and success of its founders,
            who have an impressive track record in the SaaS and financial
            sectors. This foundation of expertise and execution has enabled
            TinyCheque to scale rapidly and deliver results that set us apart
            from other players in the AI-SaaS space.
          </p>
          <p className='font-semibold text-[#351C24] text-lg mt-6'>
            The Founders Key Achievements:
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              className='bg-white rounded-3xl shadow-md px-6 py-6'
              custom={idx}
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className='text-sm sm:text-base text-[#864A5B]'>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenTrackRecord;
