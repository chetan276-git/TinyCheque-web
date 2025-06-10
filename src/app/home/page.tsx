'use client';

import Advisor from '@/src/components/home/advisor';
import HomeBanner from '@/src/components/home/banner';
import BuildingFuture from '@/src/components/home/buildingfuture';
import DualBusiness from '@/src/components/home/dualbusiness';
import FAQ from '@/src/components/home/faq';
import HelpBusinesses from '@/src/components/home/helpbusinesses';
import Homelogos from '@/src/components/home/homelogos';
import HomeProcessSection from '@/src/components/home/process';
import ReadyToBuild from '@/src/components/home/readytobuild';
import Resources from '@/src/components/home/resources';
import SuccesSstories from '@/src/components/home/successstories';
import HomeVisionScalable from '@/src/components/home/visionscalable';
import WhyChoose from '@/src/components/home/whychoose';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

const HomePage = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <main>
        <HomeBanner />
        <HomeVisionScalable />
        <HomeProcessSection />
        <DualBusiness />
        <BuildingFuture />
        <SuccesSstories />
        <HelpBusinesses />
        <WhyChoose />
        <FAQ />
        <Resources />
        <ReadyToBuild
          title={'Ready to Build the Future with Us?'}
          subtitle=' Increase your wins by 50%.'
          bgColor='#F5F5F4'
        />
        <Advisor />
        <Homelogos />
      </main>
    </div>
  );
};

export default HomePage;
