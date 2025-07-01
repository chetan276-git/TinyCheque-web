'use client';
import React from 'react';

import WhyInvest from '@/src/components/investors/why-invest';
import BusinessModel from '@/src/components/investors/business-model';
import GlobalStartupPrograms from '@/src/components/investors/global-startup-programs';
import ProvenTrackRecord from '@/src/components/investors/proven-track-record';
import AIFirstApproach from '@/src/components/investors/ai-first-approach';
import FutureAISaaS from '@/src/components/investors/future-ai-saas';
import ReadyToInvest from '@/src/components/investors/ready-invest';
import InvestInTinycheque from '@/src/components/investors/Invest-in-tinycheque';

const Investors = () => {
  return (
    <>
      <InvestInTinycheque />
      <WhyInvest />
      <BusinessModel />
      <GlobalStartupPrograms />
      <ProvenTrackRecord />
      <AIFirstApproach />
      <FutureAISaaS />
      <ReadyToInvest />
    </>
  );
};

export default Investors;
