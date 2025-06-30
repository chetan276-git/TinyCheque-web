import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInZoom = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const LogosWrapper = () => {
  const logos = [
    {
      src: '/images/faad.svg',
      alt: 'FAAD.IN',
      width: 200,
      height: 64,
    },
    {
      src: '/images/maheshwari.svg',
      alt: 'Maheshwari Angel Network',
      width: 230,
      height: 74,
    },
    {
      src: '/images/ivy1.svg',
      alt: 'IVY Growth Associates',
      width: 320,
      height: 64,
    },
  ];

  return (
    <>
      <div className='bg-white rounded-3xl w-full shadow-md p-6 my-8'>
        <div className='container mx-auto'>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12'>
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className='w-full sm:w-1/3 flex justify-center'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeInZoom}
                custom={index}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  loading='lazy'
                  height={logo.height}
                  className='h-12 sm:h-16 object-contain'
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogosWrapper;
