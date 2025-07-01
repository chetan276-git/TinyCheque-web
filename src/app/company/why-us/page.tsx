import FAQ from '@/src/components/home/faq';
import ReadyToBuild from '@/src/components/home/readytobuild';
import CompetitorsProductsList from '@/src/components/products/competitors-products-list';
import GameChangerProducts from '@/src/components/products/game-changer';
import KeyResones from '@/src/components/why-us/key-resones';
import PartnershipBuilt from '@/src/components/why-us/partnership-built';
import WhyBanner from '@/src/components/why-us/why-banner';
import React from 'react';

const exploerSass = [
  {
    description:
      'Choosing the right partner for your SaaS business can define your success. At TinyCheque, we go beyond being a traditional Venture Studio. We are a visionary partner for SaaS companies seeking to leverage AI, scale rapidly, and build innovative solutions that reshape industries.',
  },
  {
    description:
      "TinyCheque stands out because we don't just provide capital or mentorship; we co-create, co-distribute, and drive the full lifecycle of AI-powered SaaS solutions. Whether you're building a product from scratch or optimizing your existing solution, TinyCheque becomes a seamless extension of your team, committed to your long-term success.",
  },
];

const WhyUs = () => {
  return (
    <>
      <WhyBanner />
      <GameChangerProducts
        bgColor='#FBFBFB'
        heading='Explore SaaS'
        subheading='What is a SaaS CRO Audit?'
        tagline='Is Your SaaS Platform Converting Visitors into Paying Customers?'
        features={exploerSass}
      />
      <KeyResones />
      <PartnershipBuilt />
      <CompetitorsProductsList
        bgColor='#F5F5F4'
        subtitle='Why TinyCheque vs. Competitors'
        titleLeft='Why TinyCheque'
        titleRight='SaaS Audit Outperforms Competitors'
        button='Schedule a call'
        buttonLink='https://cal.com/team/tinycheque/services'
        description='Software comparison is the process of deeply analyzing multiple similar software based on critical parameters like features, pricing, ratings, etc'
        comparisonData={[
          {
            feature: 'AI-First SaaS Focus',
            left: 'Yes',
            right: 'General SaaS focus',
          },
          {
            feature: 'Dual Business Model',
            left: 'Build and co-create SaaS',
            right: 'Build only',
          },
          {
            feature: 'CEnd-to-End Support',
            left: 'From ideation to scale',
            right: 'Limited involvement',
          },
          {
            feature: 'Custom SaaS Solutions',
            left: 'Tailored for your business',
            right: 'One-size-fits-all models',
          },
          {
            feature: 'SaaS Audits & Optimization',
            left: 'CRO, Sales SOP, Security Audits',
            right: 'Limited or no optimization',
          },
        ]}
      />
      <FAQ
        bgColor='#F5F5F4'
        titleMain='Frequently asked questions'
        description={`Below you'll find answers to the most common questions you may have on . If you still can't find the answer you're looking for, just`}
        faqs={[
          {
            question: `What is TinyCheque's dual business model?`,
            answer: `TinyCheque operates in two ways: we build proprietary SaaS products from the ground up, and we co-create products with entrepreneurs and companies through joint ventures. In both models, AI is at the core of everything we do.`,
          },
          {
            question: 'What industries does TinyCheque specialize in?',
            answer:
              'We focus on industries where AI can have the biggest impact, such as LegalTech, FinTech, HealthTech, and other emerging verticals.',
          },
          {
            question: 'How does TinyCheque help scale my SaaS business?',
            answer:
              'From building a scalable product to creating and implementing growth strategies, TinyCheque provides support throughout your entire journey. We offer SaaS audits, strategic growth hacking, and comprehensive go-to-market strategies.',
          },
          {
            question: `What's the difference between TinyCheque and other venture studios?`,
            answer:
              'Yes! You can schedule posts across all your platforms from a single dashboard. Autoposting.ai also recommends the best times to post for maximum engagement.',
          },
        ]}
      />
      <ReadyToBuild
        title={'Ready to Build, Scale, and Optimize with TinyCheque?'}
        subtitle=' Increase your wins by 50%.'
        bgColor='#FBFBFB'
        primaryButton={{
          text: 'Schedule Your Consultation',
          href: 'https://cal.com/team/tinycheque/services',
        }}
      />
    </>
  );
};

export default WhyUs;
