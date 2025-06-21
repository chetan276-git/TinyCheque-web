import React, { useRef } from 'react';

const VideoBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <>
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
    </>
  );
};

export default VideoBanner;
