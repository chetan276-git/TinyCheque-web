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
        <FAQ
          titleMain='Frequently asked questions'
          titleSub='commonly asked by customers'
          description={`Below you'll find answers to the most common questions you may have on TinyCheque. If you still can't find the answer you're looking for, just`}
          faqs={[
            {
              question:
                'What is a Venture Studio, and how is TinyCheque different from an incubator or accelerator?',
              answer: `A Venture Studio is a company that builds and develops its own startup ideas and also partners with entrepreneurs to co-create and co-distribute products. TinyCheque differs from incubators or accelerators by offering more than just mentorship or funding. We actively build AI-powered SaaS products ourselves and collaborate closely with partners throughout the entire lifecycle—from ideation to scaling.`,
            },
            {
              question: 'What industries does TinyCheque focus on?',
              answer:
                'TinyCheque specializes in industries where AI has transformative potential. Our focus areas include LegalTech, FinTech, HealthTech, and other emerging sectors where automation, AI insights, and innovation can drive efficiency and growth. However, we are open to exploring other verticals with high growth potential.',
            },
            {
              question:
                'How does TinyCheque select partners for Joint Ventures?',
              answer:
                'We look for visionary entrepreneurs, established businesses, or industry experts with a clear idea or market need that can benefit from AI-driven SaaS solutions. We are interested in partners who share our passion for innovation and are eager to collaborate to bring new products to life.',
            },
            {
              question: `What is TinyCheque's involvement in Joint Venture partnerships?`,
              answer:
                'TinyCheque provides end-to-end support in Joint Ventures. This includes AI expertise, product development, financial resources, and go-to-market strategies. We co-develop the product with our partners and share responsibilities in its success—both technically and strategically.',
            },
            {
              question: `Does TinyCheque offer funding to partners?`,
              answer:
                'Yes, in many cases, TinyCheque contributes financially to the development and scaling of co-built SaaS products. In addition to financial investment, we offer product development resources, marketing support, and our extensive AI knowledge base to ensure the success of the venture.',
            },
            {
              question: `What types of AI SaaS products does TinyCheque build?`,
              answer: `TinyCheque develops AI-first SaaS products that solve industry-specific problems. Our first portfolio product, niyam.ai, is focused on automating and enhancing the legal industry's processes through AI-driven tools. Our other products in development span FinTech, HealthTech, and other growing markets where AI can drive efficiency.`,
            },
          ]}
        />
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
