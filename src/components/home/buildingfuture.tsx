'use client';

import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const BuildingFuture = () => {
  const cards = [
    {
      icon: 'https://tinycheque.com/archive.svg',
      title: 'Niyam.ai',
      image: '/images/niyam-ai-slide.jpg',
      link: 'https://niyam.ai/',
    },
    {
      icon: 'https://tinycheque.com/archive.svg',
      title: 'AutoPosting.ai',
      image: '/images/auto-posting.jpg',
      link: 'https://niyam.ai/',
    },
    {
      icon: 'https://tinycheque.com/archive.svg',
      title: 'FableShorts',
      image: '/images/fable-shorts.jpg',
      link: 'https://niyam.ai/',
    },
    {
      icon: 'https://tinycheque.com/archive.svg',
      title: 'Coming Soon 1',
      image: '/images/comming-soon.jpg',
      link: 'https://niyam.ai/',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    const cardElements = container?.querySelectorAll('[data-card]');
    const activeCard = cardElements?.[activeIndex] as HTMLElement;
    activeCard?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }, [activeIndex]);

  return (
    <section className='bg-[#F5F5F4] py-8'>
      <div className='container mx-auto'>
        {/* Header */}
        <div className='flex flex-col gap-2 items-center text-center px-4'>
          <p className='text-secondary text-base sm:text-lg font-normal'>
            Our Portfolio of AI-Driven Products
          </p>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary'>
            Building For the Future.. ..TODAY
          </h2>
          <p className='text-secondary text-sm sm:text-base md:text-lg font-normal mt-2 max-w-prose'>
            At TinyCheque, we pride ourselves on developing and distributing
            innovative AI-powered SaaS solutions that are transforming
            industries.
          </p>
        </div>

        {/* Scrollable Cards */}
        <div className='w-full px-4 sm:px-0 overflow-hidden mt-6'>
          <div className='flex items-center'>
            {/* Prev Button */}
            <button
              onClick={() => scroll('left')}
              className='flex-none mr-2 bg-white p-2 rounded-full shadow-md cursor-pointer'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='#864A5B'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>

            {/* Card List */}
            <div className='flex-grow overflow-hidden' ref={scrollRef}>
              <div className='flex transition-all duration-300 ease-in-out'>
                {cards.map((card, idx) => (
                  <div
                    key={idx}
                    data-card
                    onClick={() =>
                      setActiveIndex(idx === activeIndex ? activeIndex : idx)
                    }
                    className='flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 cursor-pointer'
                  >
                    <div
                      className={`rounded-lg p-3 flex flex-col items-center justify-center text-center h-full transition border-2 ${
                        activeIndex === idx
                          ? 'border-[#864A5B] bg-[#fef2f2]'
                          : 'border-gray-300'
                      }`}
                    >
                      <Image
                        src={`${card.icon}`}
                        alt='Niyam.ai'
                        className='w-8 rounded-3xl mb-3'
                        width={20}
                        height={20}
                      />
                      <h5 className='text-[#864A5B] text-sm sm:text-base font-semibold'>
                        {card.title}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={() => scroll('right')}
              className='flex-none ml-2 bg-white p-2 rounded-full shadow-md cursor-pointer'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='#864A5B'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 5l7 7-7 7'
                ></path>
              </svg>
            </button>
          </div>

          {/* Accordion Content */}
          {activeIndex !== null && (
            <div className='max-w-4xl mx-auto mt-4 mb-4 relative'>
              <Link
                href={`${cards[activeIndex].link}`}
                rel='noopener noreferrer'
                className='w-full h-[500px] block overflow-hidden p-6 bg-[#d4b1bb]  rounded-3xl'
              >
                <div className='w-full h-full relative rounded-2xl flex items-center justify-center overflow-hidden aspect-[0.5]'>
                  <Image
                    src={`${cards[activeIndex].image}`}
                    alt='Niyam.ai'
                    className='w-full h-full rounded-2xl x'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BuildingFuture;
