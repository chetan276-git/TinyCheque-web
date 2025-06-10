import React from 'react';
import Image from 'next/image';

const PartnerSection = () => {
  return (
    <section className='bg-[#F3F3F2]'>
      <div className='container'>
        <div className='flex flex-col md:flex-row justify-between '>
          <div className='w-[50%] flex flex-col gap-6 md:gap-8 mb-8 md:mb-'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-primary text-3xl md:text-4xl font-extrabold'>
                Partner with TinyCheque
              </h1>
              <span className='font- text-3xl md:text-4xl'>
                Your AI-First Co-Founder for Explosive SaaS Growth
              </span>
            </div>
            <div>
              <h3 className='text-lg md:text-xl font-normal text-[#864A5B]'>
                Unlock the full potential of your AI-driven SaaS with
                TinyCheque. Together, we&lsquo;ll take your early-stage SaaS to
                the next level by combining our marketing, sales, tech, and
                financial expertise with your vision—building a scalable
                business for long-term success.
              </h3>
            </div>
          </div>
          <div className='w-[50%] p-4 pl-0 sm:pl-6'>
            <div className='relative w-full h-full flex flex-col items-center justify-center'>
              <Image
                src='/images/partner-with-tinycheque.png'
                fill
                objectFit='contain'
                className='scale-[1.2]'
                alt='About Image'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
