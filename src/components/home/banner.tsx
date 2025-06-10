'use client';
import React, { useRef, useEffect, useState } from 'react';
import Button from '../button';
import Image from 'next/image';

const HomeBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect(); // Only trigger once
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className=' pt-12 md:p-12 md:pt-24 bg-[#F5F5F4]'>
        <div className='container'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            {/* Left Content */}
            <div className='w-full md:w-1/2 flex flex-col gap-6 md:gap-8 mb-8 md:mb-0'>
              <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-primary text-4xl md:text-5xl lg:text-6xl'>
                  India&#39;s First AI-First SaaS Venture Studio
                </h1>
              </div>
              <div className='pr-0 md:pr-20 lg:pr-40'>
                <h3 className='text-lg md:text-xl font-normal text-secondary'>
                  Building the Future of SaaS with AI-Driven Products and
                  Strategic Partnerships
                </h3>
              </div>
              <div className='flex flex-col sm:flex-row w-full justify-between gap-4 pt-4 pr-2'>
                <Button
                  variant='primary'
                  href='https://forms.tinycheque.com/jv'
                >
                  Partner with us
                </Button>
                <Button
                  variant='secondary'
                  href='https://cal.com/team/tinycheque/15'
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>

            {/* Video Section */}
            <div
              ref={wrapperRef}
              className='w-full md:w-1/2 pb-4 pl-0 sm:pl-10'
            >
              {isIntersecting && (
                <video
                  ref={videoRef}
                  className='w-full aspect-video object-cover rounded-xl shadow-xl'
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload='none'
                  poster='/banner-poster.jpg'
                >
                  <source src='/video/intro-video.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>

        {/* Logos Section */}
        <div className='container'>
          <div className='flex flex-col mt-0 md:mt-12 pt-12'>
            <div className='flex flex-col items-center gap-4 md:gap-6'>
              <h2 className='text-secondary text-base sm:text-lg font-normal text-center px-4'>
                TinyCheque is a part of
              </h2>
              <div className='relative h-16 w-full'>
                <Image
                  src='/images/logobrand.svg'
                  alt='Logos Brand Img'
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
