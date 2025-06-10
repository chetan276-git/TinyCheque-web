import React from 'react';
import Image from 'next/image';

const CaseStudySection = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex flex-col gap-2 sm:gap-2 items-center text-center'>
          <p className='text-secondary text-base sm:text-lg font-normal'>
            Case Study
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>
            Niyam.ai—A LegalTech Revolution
          </h2>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-primary'>
            Built with TinyCheque
          </h2>
        </div>
        <div className='max-w-6xl mx-auto space-y-4 mt-4 mb-4'>
          <div className='bg-white rounded-3xl p-6 shadow'>
            <div className='flex flex-col gap-2 mb-2 px-2'>
              <div className='rounded-md'>
                <Image
                  src='/images/icons/eraser.svg'
                  width={35}
                  height={35}
                  alt='Icon'
                />
              </div>
              <h2 className='text-lg font-bold'>The Opportunity</h2>
            </div>
            <p className='text-secondary text-lg font-normal px-2'>
              Niyam.ai was an AI-powered LegalTech startup with a groundbreaking
              platform, but they needed help scaling their product, entering new
              markets, and building a sustainable business model.
            </p>
          </div>
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-4'>
            <div className='bg-white rounded-3xl p-6 shadow flex-1'>
              <div className='flex flex-col gap-2 mb-2 px-2'>
                <div>
                  <Image
                    src='/images/icons/receipt-search.svg'
                    width={35}
                    height={35}
                    alt='Icon'
                  />
                </div>
                <h2 className='text-lg font-bold'>The Partnership</h2>
              </div>
              <p className='mb-2 px-2'>
                TinyCheque partnered with Niyam.ai in a 50-50 JV, bringing in
                its extensive resources across marketing, sales, and tech to
                drive growth. TinyCheque worked closely with Niyam.ai&lsquo;s
                founders to build a tailored GTM strategy, optimize the
                platform&lsquo;s AI capabilities, and develop key partnerships
                with law firms and corporates.
              </p>
              <ul className='list-disc pl-5 space-y-2 text-sm md:text-md font-normal text-black px-2' />
            </div>
            <div className='bg-white rounded-3xl p-6 shadow flex-1'>
              <div className='flex flex-col gap-2 mb-2 px-2'>
                <div>
                  <Image
                    src='/images/icons/tick-circle.svg'
                    width={35}
                    height={35}
                    alt='Icon'
                  />
                </div>
                <h2 className='text-lg font-bold'>The Outcome</h2>
              </div>
              <p className='mb-2 px-2'>
                After implementing TinyCheque&lsquo;s recommendations
              </p>
              <ul className='list-disc pl-5 space-y-2 text-sm md:text-md font-normal text-secondary px-2'>
                <li>
                  <span className='font-semibold text-gray-800'> </span>Niyam.a
                  grew from 0 to thousands of users in months, thanks to
                  TinyCheque&lsquo;s market expansion strategies.
                </li>
                <li>
                  <span className='font-semibold text-gray-800'> </span>Niyam.ai
                  is in talks to raise funding through TinyCheque&lsquo;s
                  investor network, accelerating its growth even further.
                </li>
                <li>
                  <span className='font-semibold text-gray-800'> </span>Today,
                  Niyam.ai is one of the hottest AI-SaaS LegalTech spaces,
                  automating legal research, document drafting, and compliance
                  for law firms and businesses of all sizes.
                </li>
                <li>
                  <span className='font-semibold text-gray-800'> </span>This is
                  the power of a 50-50 partnership with TinyCheque - together,
                  we build scalable, successful AI-first SaaS products that
                  dominate their markets.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
