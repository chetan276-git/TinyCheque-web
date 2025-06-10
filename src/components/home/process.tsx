import React from 'react';
import Image from 'next/image';

const HomeProcessSection = () => {
  const stepsData = [
    {
      id: 1,
      icon: '/timer.svg',
      title: '48 Hours',
      response: 'Response Time',
      description:
        'Your personal acquisition plan. The way you see your dream exit.',
    },
    {
      id: 1,
      icon: '/timer-start.svg',
      title: '14 Days',
      response: 'To Receive an offer',
      description: 'Transparent and streamlined due diligence process.',
    },
    {
      id: 3,
      icon: '/calendar-tick.svg',
      title: '8 Weeks',
      response: 'To Close the deal',
      description:
        'Expert help from the beginning to signing the contract, and even beyond that.',
    },
  ];

  return (
    <section className='bg-[#F5F5F4]'>
      <div className='container'>
        <div className='flex flex-col gap-2 sm:gap-2 items-center text-center'>
          <p className='text-primary text-base sm:text-lg font-normal'>
            Process
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>
            We are professional and fast
          </h2>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-primary'>
            process & methodologies
          </h2>
          <p className='text-secondary text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose'>
            We value your time and don&#39;t drag the acquisition process out
            for months. And it can be done with a well-planned implementation
            plan and the right resources.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8 mb-4'>
          {stepsData.map((currEle, i) => (
            <div
              className='bg-white rounded-3xl shadow-md p-6 border border-gray-200'
              key={i}
            >
              <div className='flex flex-col gap-4 mb-4 '>
                <div className='w-8 h-8 flex items-center justify-center relative'>
                  <Image
                    src={`/images/icons/${currEle.icon}`}
                    fill
                    alt='Timer'
                  />
                </div>
                <p className='text-xl font-semibold text-[#351C24] '>
                  {currEle.title}
                </p>
              </div>
              <h2 className='text-base font-medium text-[#537FDE] mb-2 '>
                {currEle.response}
              </h2>
              <div className='w-12 h-0.5 bg-gradient-to-r from-[#2F4085] to-[#537FDE] mb-4 w-12' />
              <p className='text-sm font-normal text-[#864A5B]'>
                {currEle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProcessSection;
