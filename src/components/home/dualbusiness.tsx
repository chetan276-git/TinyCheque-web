import Link from 'next/link';
import React from 'react';

const DualBusiness = () => {
  return (
    <>
      <section className='bg-[#FBFBFB]'>
        <div className='container'>
          <div className='flex flex-col gap-2 sm:gap-2 items-center text-center'>
            <p className='text-[#864A5B] text-base sm:text-lg font-normal '>
              Verticals
            </p>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>
              Our dual business model
            </h2>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-primary'>
              product-service
            </h2>
            <p className='text-[#864A5B] text-sm sm:text-base md:text-lg font-normal mt-2 sm:mt-2 max-w-prose'>
              Balance the need to manage new opportunities with the need to
              optimize existing businesses
            </p>
          </div>
          <div className='w-full mx-auto mb-4 mt-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='bg-white rounded-lg shadow-md p-6 flex flex-col h-full'>
                <h2 className='text-xl font-semibold text-primary mb-1'>
                  Building Proprietary AI SaaS Solutions
                </h2>
                <p className='text-sm font-semibold text-primary mb-4'>
                  AI-driven software products
                </p>
                <p className='text-md font-normal text-[#864A5B] mb-4'>
                  At TinyCheque, we develop our own AI-driven software products,
                  focused on addressing specific industry pain points. Our
                  products combine the latest in AI technology with intuitive
                  design to deliver exceptional results.
                </p>
                <ul className='list-disc list-inside mb-4 flex-grow'>
                  <li className='text-sm text-gray-700 mb-2'>
                    <span className='font-semibold text-gray-800'>
                      Innovative Products:{' '}
                    </span>
                    <span className='text-[#864A5B] text-base font-normal'>
                      Built with the future in mind, our SaaS products are
                      designed to be scalable and adaptable to industry needs.
                    </span>
                  </li>
                  <li className='text-sm text-gray-700 mb-2'>
                    <span className='font-semibold text-gray-800'>
                      Problem-Solving Focus:{' '}
                    </span>
                    <span className='text-[#864A5B] text-base font-normal'>
                      Each product solves a unique challenge for businesses,
                      driven by AI-powered automation and efficiency.
                    </span>
                  </li>
                </ul>
                <Link
                  href='/'
                  scroll={false}
                  className='text-[#3E64D2] font-semibold hover:underline text-base'
                >
                  Learn More →
                </Link>
              </div>
              <div className='bg-white rounded-lg shadow-md p-6 flex flex-col h-full'>
                <h2 className='text-xl font-semibold text-primary mb-1'>
                  Joint Ventures &amp; Partnerships
                </h2>
                <p className='text-sm font-semibold text-primary mb-4'>
                  Joint Ventures
                </p>
                <p className='text-md font-normal text-[#864A5B] mb-4'>
                  Our second vertical involves forming Joint Ventures (JVs) with
                  entrepreneurs and businesses to co-create and co-distribute
                  innovative SaaS products. We believe in collaboration and
                  shared success, offering not just financial backing but also
                  AI and product expertise.
                </p>
                <ul className='list-disc list-inside mb-4 flex-grow'>
                  <li className='text-sm text-gray-700 mb-2'>
                    <span className='font-semibold text-gray-800'>
                      Shared Expertise:{' '}
                    </span>
                    <span className='text-[#864A5B] text-base font-normal'>
                      We partner with visionaries to co-develop software
                      solutions that tap into emerging market needs.
                    </span>
                  </li>
                  <li className='text-sm text-gray-700 mb-2'>
                    <span className='font-semibold text-gray-800'>
                      Strategic Distribution:{' '}
                    </span>
                    <span className='text-[#864A5B] text-base font-normal'>
                      Using our distribution channels and market insights, we
                      scale products for maximum impact.
                    </span>
                  </li>
                </ul>
                <Link
                  href='/'
                  scroll={false}
                  className='text-[#3E64D2] font-semibold hover:underline text-base'
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DualBusiness;
