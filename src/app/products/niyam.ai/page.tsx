import NiyamHero from '@/src/components/products/niyam/banner-niyam';
import GameChanger from '@/src/components/products/niyam/game-changer';
import FutureLegalTech from '@/src/components/products/niyam/future-legal-tech';
import React from 'react';
import NiyamProcess from '@/src/components/products/niyam/niyam-process';
import NiyamCaseStudy from '@/src/components/products/niyam/niyam-case-study';
import KeyFeatures from '@/src/components/products/niyam/key-features';
import NiyamSolution from '@/src/components/products/niyam/niyam-solution';

const NiyamAI = () => {
  return (
    <>
      <NiyamHero />
      <FutureLegalTech />
      <GameChanger />
      <NiyamProcess />
      <NiyamCaseStudy />
      <KeyFeatures />
      <NiyamSolution />
    </>
  );
};

export default NiyamAI;
