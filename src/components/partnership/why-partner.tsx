'use client';
import React from 'react';

const WhyPartner = () => {
  const features = [
    {
      title: 'Full Co-Founder Commitment',
      description: `We're not just an investor or development agency. We come in as your equal
        partner, taking on 50% ownership and sharing in both the challenges and
        the rewards. This is a true partnership where our success is tied to
        yours.`,
    },
    {
      title: 'All-in-One Expertise',
      description: `TinyCheque brings decades of experience across marketing, sales,
        technology, and finance. From developing go-to-market strategies to
        scaling tech architecture and securing funding, we've done it all—and now
        we're ready to do it with you.`,
    },
    {
      title: 'Access to Our Global Network',
      description: `As your co-founder, you'll tap into our extensive network of industry
        leaders, venture capitalists, and strategic partners. We open doors that
        would otherwise take years to unlock, accelerating your growth.`,
    },
    {
      title: 'AI-First Focus',
      description: `We specialize in AI-driven SaaS products. If you're building a
        cutting-edge solution that leverages AI, we're the perfect partner to help
        you take it to the next level. Our deep understanding of AI technology
        ensures we can add value from day one.`,
    },
    {
      title: 'Shared Growth, Shared Success',
      description: `We don't win unless you win. Our 50-50 JV model means we're as committed
        as you are to seeing your product succeed. With TinyCheque by your side,
        you'll have a partner who's fully aligned with your vision and growth
        goals.`,
    },
  ];
  return (
    <>
      <section className='bg-[#F5F5F4]'>
        <div className='container'>
          <div className='flex flex-col gap-2 sm:gap-2 items-center text-center'>
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              Why Partner with TinyCheque?
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              TinyCheque: Your Key to Scaling Faster and Smarter
            </h2>
            <h2 className='text-lg sm:text-xl md:text-2xl font-light text-[#351C24]' />
            <p className='text-[#864A5B] text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 mb-4'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-white rounded-3xl shadow-md p-6 flex flex-col items-start space-y-3'
              >
                <h3 className='text-xl font-semibold text-[#351C24]'>
                  {feature.title}
                </h3>
                <p className='text-lg text-[#864A5B] font-normal'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyPartner;
