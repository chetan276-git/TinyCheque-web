import React from 'react';

const PartnershipModal = () => {
  return (
    <>
      <section className='bg-[#FBFBFB]'>
        <div className='container'>
          <div className='relative flex flex-col items-center pt-16 pb-16 gap-6'>
            <div className='max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex flex-col gap-2 sm:gap-2 items-center text-center'>
                <p className='text-secondary text-base sm:text-lg font-normal'>
                  What
                </p>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>
                  What Is the TinyCheque Partnership Model?
                </h2>
                <h2 className='text-xl sm:text-2xl md:text-3xl font-light text-primary'>
                  50-50 Joint Venture: The Co-Founding Partner You&apos;ve Been
                  Waiting For
                </h2>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4'>
              <div className='bg-white  rounded-3xl shadow-md flex items-start justify-center px-8 py-6'>
                <p className='text-sm font-normal sm:text-base text-secondary'>
                  Choosing the right partner for your SaaS business can define
                  your success. At TinyCheque, we go beyond being a traditional
                  Venture Studio. We are a visionary partner for SaaS companies
                  seeking to leverage AI, scale rapidly, and build innovative
                  solutions that reshape industries.
                </p>
              </div>
              <div className='bg-white  rounded-3xl shadow-md flex items-start justify-center px-8 py-6'>
                <p className='text-sm font-normal sm:text-base text-secondary'>
                  TinyCheque stands out because we don&lsquo;t just provide
                  capital or mentorship; we co-create, co-distribute, and drive
                  the full lifecycle of AI-powered SaaS solutions. Whether
                  you&lsquo;re building a product from scratch or optimizing
                  your existing solution, TinyCheque becomes a seamless
                  extension of your team, committed to your long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnershipModal;
