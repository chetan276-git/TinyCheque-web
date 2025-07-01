'use client';

import React from 'react';
import AboutContent from '@/src/components/about-us/about-content';
import OurVision from '@/src/components/about-us/our-vision';
import OurInnovation from '@/src/components/about-us/our-Innovation';
import HowWeHelp from '@/src/components/about-us/how-we-help';
import MeetOurFounders from '@/src/components/about-us/meet-our-founders';
import SuccesSstories from '@/src/components/home/successstories';
import PartnerWithTinycheque from '@/src/components/about-us/partner-with-tinycheque';

const AboutUs = () => {
  return (
    <>
      <AboutContent />
      <OurVision />
      <OurInnovation />
      <HowWeHelp />
      <SuccesSstories bgColor='#F5F5F4' />
      <PartnerWithTinycheque />
      <MeetOurFounders />
    </>
  );
};

export default AboutUs;
