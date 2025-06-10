'use client';

import React from 'react';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-[#f5f5f4cc]/80 backdrop-blur-sm'>
      <div className='relative animate-bounce'>
        {/* Main Logo with pulse */}
        <Image
          src='/images/logo/Tinychequelogo.svg'
          alt='TinyCheque Loading'
          width={60}
          height={60}
          priority // important for early loading
          className='animate-pulse'
        />

        {/* Ping effect */}
        <div className='absolute inset-0 animate-ping'>
          <Image
            src='/images/logo/Tinychequelogo.svg'
            alt='TinyCheque Loading Effect'
            width={60}
            height={60}
            priority
            className='opacity-75'
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
