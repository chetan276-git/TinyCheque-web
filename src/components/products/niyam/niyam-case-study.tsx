'use client';
import React from 'react';
import Image from 'next/image';

const NiyamCaseStudy = () => {
  const niyamCaseStudy = {
    problem: {
      icon: '/eraser.svg',
      title: 'The Problem',
      description:
        'A mid-sized firm struggled with long document drafting times and inefficient legal research, which limited the firm’s ability to take on more cases. The firm also faced challenges keeping up with changing regulations, leading to compliance risks for their clients.',
    },
    solution: {
      icon: '/receipt-search.svg',
      title: 'The Solution',
      description:
        'Niyam.ai was implemented to automate the firm’s document drafting and legal research. By using customizable templates and AI-powered insights, the firm streamlined operations while ensuring all documents met compliance standards.',
      points: [], // You can add bullet points here if needed
    },
    outcome: {
      icon: '/tick-circle.svg',
      title: 'The Outcome',
      description: '',
      points: [
        'Document drafting time reduced by 50%, allowing lawyers to focus on higher-level casework.',
        'Legal research efficiency improved by 40%, providing deeper insights into cases while reducing manual efforts.',
        'Compliance risks reduced by 30%, thanks to real-time monitoring and automated compliance checks.',
      ],
    },
  };

  return (
    <section>
      <div className='container'>
        <div className='w-full px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col gap-2 sm:gap-2 items-center text-center'>
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              Case Study
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#351C24]'>
              How Niyam.ai Transformed
            </h2>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-[#351C24]'>
              A Law Firm&lsquo;s Workflow
            </h2>
          </div>
        </div>
        <div className='space-y-4 mt-6 md:mt-10 mb-4'>
          {/* Problem */}
          <div className='bg-white rounded-3xl p-6 shadow'>
            <div className='flex flex-col gap-2 mb-2 px-2'>
              <Image
                src={niyamCaseStudy.problem.icon}
                alt='Problem icon'
                width={32}
                height={32}
                loading='lazy'
              />
              <h2 className='text-lg font-bold'>
                {niyamCaseStudy.problem.title}
              </h2>
            </div>
            <p className='text-[#864A5B] text-lg font-normal px-2'>
              {niyamCaseStudy.problem.description}
            </p>
          </div>

          {/* Solution & Outcome */}
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-4'>
            {/* Solution */}
            <div className='bg-white rounded-3xl p-6 shadow flex-1'>
              <div className='flex flex-col gap-2 mb-2 px-2'>
                <Image
                  src={niyamCaseStudy.solution.icon}
                  alt='Solution icon'
                  width={32}
                  height={32}
                  loading='lazy'
                />
                <h2 className='text-lg font-bold'>
                  {niyamCaseStudy.solution.title}
                </h2>
              </div>
              <p className='text-[#864A5B] text-lg font-normal px-2'>
                {niyamCaseStudy.solution.description}
              </p>
            </div>

            {/* Outcome */}
            <div className='bg-white rounded-3xl p-6 shadow flex-1'>
              <div className='flex flex-col gap-2 mb-2 px-2'>
                <Image
                  src={niyamCaseStudy.outcome.icon}
                  alt='Outcome icon'
                  width={32}
                  height={32}
                  loading='lazy'
                />
                <h2 className='text-lg font-bold'>
                  {niyamCaseStudy.outcome.title}
                </h2>
              </div>
              <ul className='list-disc pl-5 space-y-2 text-sm md:text-md font-normal text-[#864A5B] px-2'>
                {niyamCaseStudy.outcome.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NiyamCaseStudy;
