'use client';
import React from 'react';
import Image from 'next/image';

const Homelogos = () => {
  return (
    <section className='bg-[#F5F5F4]'>
      <div className='container'>
        <div className='bg-white rounded-3xl w-full shadow-md p-6 my-8'>
          <div className='container mx-auto'>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12'>
              <div className='w-full sm:w-1/3 flex justify-center'>
                <Image
                  src='/images/faad.svg'
                  alt='FAAD.IN'
                  height={64}
                  width={200}
                  className='h-12 sm:h-16 object-contain'
                />
              </div>
              <div className='w-full sm:w-1/3 flex justify-center'>
                <Image
                  src='/images/maheshwari.svg'
                  alt='Maheshwari Angel Network'
                  height={74}
                  width={230}
                  className='h-12 sm:h-16 object-contain'
                />
              </div>
              <div className='w-full sm:w-1/3 flex justify-center'>
                <Image
                  src='/images/ivy1.svg'
                  alt='IVY Growth Associates'
                  height={64}
                  width={320}
                  className='h-16 w-[320px] sm:h-16 object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homelogos;
