'use client';

import React from 'react';
import ProductsProcessCard from '@/src/components/products/products-process-card';
import { Search } from '@/src/components/icons/search';
import { AIPowered } from '@/src/components/icons/ai-powered';
import { CustomizeationIcon } from '@/src/components/icons/customization-icon';
import { AudomatedCompliance } from '@/src/components/icons/automated-compliance';
import ProductsCaseStudy from '@/src/components/products/products-case-study';
import KeyFeaturesProducts from '@/src/components/products/key-features-products';
import WhySolutionProduct from '@/src/components/products/why-products-card';
import CompetitorsProductsList from '@/src/components/products/competitors-products-list';
import FAQ from '@/src/components/home/faq';
import WhatProducts from '@/src/components/products/what-is-products';
import GameChangerProducts from '@/src/components/products/game-changer';
import ProductsBanner from '@/src/components/products/products-banner';

const ProductProcessSteps = [
  {
    step: 'Step 1:',
    title: 'Define Your Content Goals',
    description: `Start by selecting your campaign objectives—whether it's boosting engagement, promoting a product, or growing your audience. Our intuitive dashboard helps you align content type, tone, and timing to match your brand and goals.`,
    icon: <Search />,
  },
  {
    step: 'Step 2:',
    title: 'AI-Powered Content Generation',
    description:
      'Autoposting.ai’s GenAI engine creates scroll-stopping content—from captions and hashtags to full posts—tailored for each platform. It analyzes trends and audience behavior to ensure every piece is optimized for performance.',
    icon: <AIPowered />,
  },
  {
    step: 'Step 3:',
    title: 'Customization & Preview',
    description:
      'Tweak and tailor content to match your voice or marketing style. Use editable templates and smart suggestions while retaining full control over your posts before scheduling or publishing.',
    icon: <CustomizeationIcon />,
  },
  {
    step: 'Step 4:',
    title: 'Automated Scheduling & Optimization',
    description:
      'Set it and forget it. Autoposting.ai schedules content for the best times across platforms and provides performance insights, so you stay consistent while maximizing reach and ROI.',
    icon: <AudomatedCompliance />,
  },
];

const featuresData = [
  {
    title: 'AI-Driven Content Intelligence',
    description:
      'Powered by advanced Generative AI, Autoposting.ai crafts platform-optimized posts, adapts tone and format automatically, and delivers high-impact content with speed and precision.',
  },
  {
    title: 'Customizable for Every Workflow',
    description: `Whether you're a solo creator, digital agency, startup, or large team, Autoposting.ai offers flexible templates and scheduling flows tailored to your unique content strategy.`,
  },
  {
    title: 'Compliance & Consistency Built In',
    description:
      'Stay on-brand and aligned with platform policies effortlessly. Autoposting.ai helps ensure your content meets community guidelines and maintains brand consistency across channels.',
  },
  {
    title: 'Time-Saving Automation',
    description:
      'Forget the grind of manual posting. From AI-generated captions to smart scheduling and analytics, Autoposting.ai automates your routine—so you can focus on strategy and growth.',
  },
];

const AutoPostingAI = () => {
  return (
    <>
      <ProductsBanner
        title='Autoposting.ai: Smarter Content Automation'
        subtitle='with GenAI-Driven Automation'
        description='Harness the power of advanced AI to automate your content strategy, maximize reach, and save time for marketers, creators, startups, and enterprises. From smart scheduling to real-time engagement insights, we make content work harder for you. Let AI take the wheel, while you lead the vision.'
        imageSrc='/images/products/autopost-banner-image.jpg'
        buttons={[
          {
            label: 'Get Started for free',
            href: 'https://app.autoposting.ai/',
            variant: 'primary',
          },
          {
            label: 'Get free demo',
            href: 'https://autoposting.ai/',
            variant: 'secondary',
          },
        ]}
      />
      <WhatProducts
        titleBold={'What is Autoposting.ai'}
        titleLight={'Simplify Your Content Strategy with Autoposting.ai'}
        description={
          'Autoposting.ai is a GenAI-powered content automation platform that transforms how marketers, creators, startups, and businesses manage their digital presence. Built to streamline workflows like post scheduling, cross-platform publishing, and engagement optimization, Autoposting.ai delivers smart, efficient, and customizable solutions. With the power of Generative AI, it creates high-impact content and automates delivery—so you can stay consistent and visible, effortlessly.'
        }
        imageSrc={'/images/products/niyam-legeltech.jpg'}
      />
      <GameChangerProducts
        heading='Why Autoposting.ai'
        subheading='Is a Game Changer for Content Automation'
        tagline='Autoposting.ai: Redefining Efficiency and Impact in Digital Workflows'
        features={featuresData}
      />
      <ProductsProcessCard
        sectionTitle='The Autoposting.ai Process'
        sectionSubtitle='How Autoposting.ai Streamlines Your Content Strategy in 4 Simple Steps'
        steps={ProductProcessSteps}
      />
      <ProductsCaseStudy
        heading='How Autoposting.ai Transformed'
        subheading='A Marketing Teams Workflow'
        caseStudy={{
          problem: {
            icon: '/images/icons/eraser.svg',
            title: 'The Problem',
            description:
              'A mid-sized marketing team struggled with managing multi-platform content schedules and creating platform-specific posts at scale. Time-consuming manual workflows and inconsistent posting were impacting engagement and brand visibility.',
          },
          solution: {
            icon: '/images/icons/receipt-search.svg',
            title: 'The Solution',
            description:
              'Autoposting.ai was introduced to automate content creation, scheduling, and optimization. By leveraging customizable templates and GenAI-powered automation, the team streamlined their workflow, maintained brand consistency, and increased posting frequency without adding headcount.',
          },
          outcome: {
            icon: '/images/icons/tick-circle.svg',
            title: 'The Outcome',
            points: [
              'Content creation time reduced by 50%, enabling the team to focus on strategy and creative innovation.',
              'Engagement rates increased by 45%, thanks to data-backed post timing and AI-optimized copy.',
              'Brand consistency improved across channels, with templates and automation minimizing human error.',
            ],
          },
        }}
      />
      <KeyFeaturesProducts
        heading='Key Features of Autoposting.ai'
        subheading=''
        features={[
          {
            title: 'AI-Powered Content Creation',
            description:
              'Generate scroll-stopping posts in seconds with Autoposting.ai’s GenAI engine—saving hours on ideation and copywriting. Each post is optimized for platform, audience, and tone.',
          },
          {
            title: 'Comprehensive Content Research',
            description:
              'Cut through content noise with AI-curated insights. Discover high-performing trends, hashtags, and formats tailored to your niche—driving relevance and engagement across channels.',
          },
          {
            title: 'Compliance Monitoring & Smart Alerts',
            description:
              'Stay brand-safe and compliant. Autoposting.ai checks your content for regulatory flags and brand guidelines—alerting you in real time before you publish.',
          },
          {
            title: 'Customizable Post Templates',
            description: `Use proven frameworks or build your own to create consistent, on-brand content at scale. Whether you're a startup, agency, or creator, we've got templates that fit.`,
          },
          {
            title: 'Seamless Platform Integration',
            description:
              'Autoposting.ai syncs with your favorite tools—CMSs, CRMs, social schedulers—ensuring smooth workflows from content planning to posting without the chaos.',
          },
        ]}
      />
      <WhySolutionProduct
        topLabel='Solution'
        heading='Why Autoposting.ai Is the'
        subheading='Preferred Content Automation Platform'
        listTitle='Why Professionals Rely on Autoposting.ai'
        imageSrc='/images/products/autopost-solution.jpg'
        listItems={[
          {
            title: 'Powered by GenAI:',
            description: `Autoposting.ai runs on cutting-edge generative AI to craft compelling, platform-optimized posts—whether it’s a product promo, carousel caption, LinkedIn insight, or trend-based TikTok script—fast, precise, and customized to your voice.`,
          },
          {
            title: 'Tailored for Every Content Strategy:',
            description:
              'Whether you’re a solo creator, growing startup, or enterprise team, Autoposting.ai adapts to your workflow with flexible templates and strategy-aligned automation tools',
          },
        ]}
      />
      <CompetitorsProductsList
        subtitle='You vs. Competitors'
        titleLeft='Why Autoposting.ai'
        titleRight='Outperforms Other Tools'
        description='Software comparison is the process of deeply analyzing multiple similar software based on critical parameters like features, pricing, ratings, etc'
        button='Get Started for free'
        buttonLink='https://app.autoposting.ai/'
        comparisonData={[
          { feature: 'AI-Powered Content Creation', left: 'Yes', right: 'No' },
          {
            feature: 'Real-Time Trend Optimization',
            left: 'Yes',
            right: 'Manual Trend Tracking',
          },
          {
            feature: 'Customizable Post Templates',
            left: 'Yes',
            right: 'One-Size-Fits-All Templates',
          },
          {
            feature: 'Built for All Creators & Teams',
            left: 'Yes',
            right: 'Primarily for Agencies or Enterprises',
          },
          {
            feature: 'Seamless Platform Integration',
            left: 'Yes',
            right: 'Limited Channel Support',
          },
        ]}
      />
      <FAQ
        titleMain='Frequently asked questions'
        description={`Below you'll find answers to the most common questions you may have on . If you still can't find the answer you're looking for, just`}
        faqs={[
          {
            question: 'What is Autoposting.ai?',
            answer:
              'Autoposting.ai is an AI-powered social media automation tool that helps creators, businesses, and agencies streamline their content creation and scheduling. It generates high-performing posts, optimizes them for different platforms, and automates publishing—so you can focus on growth.',
          },
          {
            question: 'How does the AI create content?',
            answer:
              'Our advanced AI analyzes your brand, audience, and trending topics to generate tailored captions, hashtags, and visuals. You can input prompts or let the AI suggest full post ideas based on your niche or goals.',
          },
          {
            question: 'Can I customize the AI-generated posts?',
            answer: 'Yes',
          },
          {
            question: 'Does it support post scheduling?',
            answer:
              'Yes! You can schedule posts across all your platforms from a single dashboard. Autoposting.ai also recommends the best times to post for maximum engagement.',
          },
        ]}
      />
    </>
  );
};

export default AutoPostingAI;
