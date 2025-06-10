import React from 'react';
import PartnerSection from '@/src/components/partnership/partner-section';
import PartnershipModal from '@/src/components/partnership/partnership-modal';
import WhyPartner from '@/src/components/partnership/why-partner';
import TransformationSection from '@/src/components/partnership/transformation-section';
import CaseStudySection from '@/src/components/partnership/case-section';
import SassSection from '@/src/components/partnership/sass-section';
import GrowthSection from '@/src/components/partnership/growth-section.';
import WhyTinyCheque from '@/src/components/partnership/why-tiny-cheque';
import PartnershipFAQ from '@/src/components/partnership/partnership-faq';
import ReadyToBuild from '@/src/components/home/readytobuild';

export const metadata = {
  title: 'Partnership | TinyCheque',
  description: 'Empowering Tomorrow with AI-Driven Saas Solutions Today',
};

const Partnership = () => {
  return (
    <>
      <PartnerSection />
      <PartnershipModal />
      <WhyPartner />
      <TransformationSection />
      <CaseStudySection />
      <SassSection />
      <GrowthSection />
      <WhyTinyCheque />
      <PartnershipFAQ />
      <ReadyToBuild
        title={
          'Ready to Partner with TinyCheque and Build the Next AI SaaS Success Story?'
        }
        bgColor='#FBFBFB'
      />
    </>
  );
};

export default Partnership;
