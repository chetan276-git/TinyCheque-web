'use client';

import React from 'react';
import AdvisorsInfoCards from '../advisors-cards';

const Advisor = () => {
  return (
    <section className='bg-[#FBFBFB]'>
      <div className='container'>
        <div className='w-full mx-auto md:px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col gap-2 sm:gap-2 items-center text-center'>
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              Advisors
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              Advisor to TinyCheque
            </h2>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
              Marquee Angels
            </h2>
          </div>
        </div>
        <AdvisorsInfoCards />
      </div>
    </section>
  );
};

export default Advisor;
