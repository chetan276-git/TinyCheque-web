import React from 'react';
import Image from 'next/image';

const HomeVisionScalable = () => {
  const stepsData = [
    {
      id: 1,
      icon: '/timer.svg',
      title: 'Share Your Vision',
      stepLabel: 'Step 1',
      description:
        'Collaborate with TinyCheque to co-create AI SaaS products that revolutionize industries.',
    },
    {
      id: 2,
      icon: '/timer-start.svg',
      title: 'Develop Solution',
      stepLabel: 'Step 2',
      description:
        'We provide the technology and expertise to transform ideas into successful AI-driven SaaS solutions.',
    },
    {
      id: 3,
      icon: '/calendar-tick.svg',
      title: 'Launch and Scale',
      stepLabel: 'Step 3',
      description:
        'Partner with us to launch and scale AI-powered software solutions that reach new markets and customers.',
    },
  ];

  return (
    <section className='bg-[#FBFBFB]'>
      <div className='container'>
        <div className='flex flex-col gap-2 sm:gap-2 items-center text-center'>
          <p className='text-primary text-base sm:text-lg font-normal'>
            The Transformation
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>
            From Vision to Scalable
          </h2>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-primary'>
            AI-Solutions
          </h2>
          <p className='text-secondary text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose'>
            TinyCheque reduces the uncertainty of SaaS product development by
            offering a clear and proven path to success, whether you&#39;re
            building with us or partnering to scale. We turn your vision into
            reality with our expertise in AI innovation.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8 mb-4'>
          {stepsData.map((currEle, i) => (
            <div
              className='bg-white rounded-3xl shadow-md p-6 border border-gray-200'
              key={i}
            >
              <div className='flex flex-col gap-2 mb-4'>
                <div className='w-8 h-8 flex items-center justify-center relative'>
                  <Image
                    src={`/images/icons/${currEle.icon}`}
                    fill
                    alt='Timer'
                  />
                </div>
                <p className='text-base text-[#BC808C] font-medium'>
                  {currEle.stepLabel}
                </p>
              </div>
              <h2 className='text-xl font-semibold text-primary mb-2'>
                {currEle.title}
              </h2>
              <div className='w-12 h-0.5 bg-gradient-to-r from-[#2F4085] to-[#537FDE] mb-4' />
              <p className='text-sm font-normal text-secondary'>
                {currEle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeVisionScalable;
