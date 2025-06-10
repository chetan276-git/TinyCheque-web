'use client';

import React from 'react';
import Image from 'next/image';

const Resources = () => {
  const blogPosts = [
    {
      title: 'SaaS Pricing Strategy: Optimizing Your Subscription Model',
      date: '10/27/2024',
      url: '/blog/saas-pricing-strategy',
      image: '/images/blog/sass-pricing-strategy.jpg',
      alt: 'SaaS Pricing Strategy: Optimizing Your Subscription Model',
    },
    {
      title: 'SaaS Venture Studio: Innovate & Launch Tech Startups',
      date: '10/27/2024',
      url: '/blog/saas-venture-studio',
      image: '/images/blog/sass-venture-studio.jpg',
      alt: 'SaaS Venture Studio: Innovate & Launch Tech Startups',
    },
    {
      title: 'Psychological Pricing: Boost Sales with Smart Tactics',
      date: '10/27/2024',
      url: '/images/blog/pychological-pricing.jpg',
      image:
        'https://blog.tinycheque.com/content/images/2024/10/Psychological-Pricing.jpg',
      alt: 'Psychological Pricing: Boost Sales with Smart Tactics',
    },
  ];

  return (
    <>
      <section className='bg-[#FBFBFB]'>
        <div className='container'>
          <div className='flex flex-col gap-2 sm:gap-2 items-center text-center'>
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              Resources
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              What can we help you find
            </h2>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
              with everything you need
            </h2>
            <p className='text-[#864A5B] text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose'>
              Learn how to build professional editors and get guidance,
              insights, and access to all the essentials in our docs and blog.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14'>
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl shadow-md overflow-hidden p-2'
              >
                <a
                  href={post.url}
                  className='flex justify-between flex-col h-full pl-6 pr-6 pt-4 pb-4 gap-6'
                >
                  <div className=''>
                    <p className='text-sm text-[#864A5B] font-base'>
                      {post.date}
                    </p>
                    <h3 className='text-xl font-semibold text-[#351C24] mt-2 mb-3 xl:pr-12'>
                      {post.title}
                    </h3>
                    <div className='inline-block rounded-md border-2 border-[#864A5B] px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer'>
                      <p className='text-[#3550C0] font-semibold underline-none'>
                        Continue reading
                      </p>
                    </div>
                  </div>
                  <div className='relative w-full h-56'>
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      className='rounded-md'
                      priority={index === 0}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
