import React from 'react';
import Button from '../button';

const WhyChoose = () => {
  interface Comparison {
    factor: string;
    tinyCheque: { text: string; positive: boolean };
    competitor: { text: string; positive: boolean };
  }

  const comparisons: Comparison[] = [
    {
      factor: 'AI-First Focus',
      tinyCheque: { text: 'AI is the core of our SaaS', positive: true },
      competitor: { text: 'General startup focus', positive: false },
    },
    {
      factor: 'Joint Ventures',
      tinyCheque: { text: 'Active co-development', positive: true },
      competitor: { text: 'Focus on funding only', positive: false },
    },
    {
      factor: 'End-to-End Product Support',
      tinyCheque: { text: 'Full lifecycle support', positive: true },
      competitor: { text: 'Limited hands‑on involvement', positive: false },
    },
    {
      factor: 'Market Entry & Scaling',
      tinyCheque: { text: 'We help scale globally', positive: true },
      competitor: { text: 'Primarily seed‑stage focus', positive: false },
    },
    {
      factor: 'Industry Expertise',
      tinyCheque: { text: 'Specialization in AI SaaS', positive: true },
      competitor: { text: 'Broad industry focus', positive: false },
    },
  ];

  return (
    <>
      <section className='bg-[#fbfbfb]'>
        <div className='container'>
          <div className='flex flex-col gap-2 sm:gap-2 items-center text-center'>
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              Comparison Section (You vs. Competitors)
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              Why choose TinyCheque
            </h2>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
              as your venture partner?
            </h2>
            <p className='text-[#864A5B] text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose'>
              Software comparison is the process of deeply analyzing multiple
              similar software based on critical parameters like features,
              pricing, ratings, etc.
            </p>
          </div>
          <div className='bg-white rounded-3xl shadow-lg overflow-hidden p-2 mt-8 mb-2 w-full max-w-full overflow-x-auto'>
            {/* Desktop */}
            <div className='hidden sm:block'>
              {/* Header */}
              <div className='grid grid-cols-3 bg-white font-semibold text-base md:text-lg lg:text-xl'>
                <div className='p-3 border-b border-[#e2e7f0] sm:border-r'>
                  Factors
                </div>
                <div className='p-3 border-b border-[#e2e7f0] sm:border-r'>
                  TinyCheque
                </div>
                <div className='p-3 border-b border-[#e2e7f0]'>
                  Incubators/Accelerators
                </div>
              </div>
              {/* Rows */}
              {comparisons.map(({ factor, tinyCheque, competitor }, idx) => (
                <div
                  key={idx}
                  className='grid grid-cols-3 border-b border-[#e2e7f0] [&:last-child]:border-none [&>div:not(:last-child)]:border-r [&>div:not(:last-child)]:border-r-[#e2e7f0]'
                >
                  <div className='p-3 border-r text-sm md:text-base border-[#e2e7f0]'>
                    {factor}
                  </div>
                  {[tinyCheque, competitor].map(({ text, positive }, i) => (
                    <div
                      key={i}
                      className='p-3 flex items-center text-sm md:text-base '
                    >
                      {positive ? <CheckIcon /> : <XIcon />}
                      {text}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className='block sm:hidden divide-y divide-[#e2e7f0]'>
              {comparisons.map(({ factor, tinyCheque, competitor }, idx) => (
                <div key={idx} className='py-4 first:pt-2 last:pb-2'>
                  <div className='font-semibold text-base mb-3 text-[#351C24]'>
                    {factor}
                  </div>
                  {[
                    { label: 'TinyCheque', value: tinyCheque },
                    { label: 'Incubators', value: competitor },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className='flex items-center justify-between mb-2'
                    >
                      <span className='font-semibold text-sm text-gray-600'>
                        {label}
                      </span>
                      <div className='flex items-center text-sm'>
                        {value.positive ? <CheckIcon /> : <XIcon />}
                        <span className='text-[#351C24]'>{value.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-center items-center mt-12 max-w-2/4 mx-auto'>
            <Button
              variant='primary'
              href='https://cal.com/team/tinycheque/services'
            >
              Schedule Your Audit Today
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;

const CheckIcon = () => (
  <svg
    className='w-5 h-5 mr-2 text-blue-500'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
  </svg>
);

const XIcon = () => (
  <svg
    className='w-5 h-5 mr-2 text-red-500'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M6 18L18 6M6 6l12 12'
    />
  </svg>
);
