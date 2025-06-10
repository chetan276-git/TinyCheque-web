import React from 'react';
import Button from '../button';

interface ReadyToBuildProps {
  title: string;
  subtitle?: string;
  bgColor?: string;
}

const ReadyToBuild: React.FC<ReadyToBuildProps> = ({
  title,
  subtitle,
  bgColor,
}) => {
  return (
    <>
      <section className={`bg-[${bgColor}]`}>
        <div className='container'>
          <div className='w-full space-y-6 md:space-y-8 text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-4xl font-bold text-[#351C24] leading-tight'>
              {' '}
              {title}
            </h1>
            {subtitle && (
              <p className='text-xl sm:text-xl text-[#864A5B] font-base'>
                {subtitle}
              </p>
            )}
            <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:smax-w-2/4 mx-auto'>
              <Button href='https://forms.tinycheque.com/jv'>
                Partner with us
              </Button>
              <Button
                href='https://cal.com/team/tinycheque/15'
                variant='secondary'
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadyToBuild;
