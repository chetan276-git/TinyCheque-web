import FAQ from '@/src/components/home/faq';
import { AIPowered } from '@/src/components/icons/ai-powered';
import { AudomatedCompliance } from '@/src/components/icons/automated-compliance';
import { CustomizeationIcon } from '@/src/components/icons/customization-icon';
import { Search } from '@/src/components/icons/search';
import CompetitorsProductsList from '@/src/components/products/competitors-products-list';
import GameChangerProducts from '@/src/components/products/game-changer';
import KeyFeaturesProducts from '@/src/components/products/key-features-products';
import ProductsBanner from '@/src/components/products/products-banner';
import ProductsCaseStudy from '@/src/components/products/products-case-study';
import ProductsProcessCard from '@/src/components/products/products-process-card';
import WhatProducts from '@/src/components/products/what-is-products';
import WhySolutionProduct from '@/src/components/products/why-products-card';
import React from 'react';

const QcallAI = () => {
  const GameChangerData = [
    {
      title: 'AI-Driven Conversational Intelligence',
      description:
        'Powered by advanced Generative AI, QCall.ai handles human-like conversations, adapts tone and context on the fly, and delivers high-converting call experiences with speed and accuracy.',
    },
    {
      title: 'Customizable for Every Workflow',
      description: `Whether you're a solo founder, sales team, support center, or growing enterprise, QCall.ai offers flexible call flows, scripts, and integrations tailored to your unique outreach and engagement strategy.`,
    },
    {
      title: 'Compliance & Consistency Built In',
      description:
        'Stay compliant with industry standards and maintain brand voice effortlessly. QCall.ai ensures every interaction aligns with your messaging guidelines and regulatory requirements.',
    },
    {
      title: 'Time-Saving Automation',
      description:
        'Skip the hassle of manual dialing and follow-ups. From AI-powered call handling to real-time insights and scheduling, QCall.ai automates your communications—so you can focus on closing deals and scaling impact.',
    },
  ];

  const QCallProcessSteps = [
    {
      step: 'Step 1:',
      title: 'Define Your Call Objectives',
      description: `Begin by setting your communication goals—whether it's lead generation, customer follow-ups, or support outreach. Our intuitive dashboard helps you align call scripts, tone, and timing with your brand and campaign strategy..`,
      icon: <Search />,
    },
    {
      step: 'Step 2:',
      title: 'AI-Powered Call Generation',
      description:
        'QCall.ai’s GenAI engine crafts intelligent, natural-sounding call scripts and responses. It adapts to caller context, behavior, and intent to ensure every conversation is engaging and effective.',
      icon: <AIPowered />,
    },
    {
      step: 'Step 3:',
      title: 'Customization & Preview',
      description:
        'Refine your scripts and call flows to reflect your unique tone and business needs. Use smart templates, dynamic variables, and live previews to stay in control before launch.',
      icon: <CustomizeationIcon />,
    },
    {
      step: 'Step 4:',
      title: 'Automated Scheduling & Optimization',
      description:
        'Schedule calls at optimal times and let QCall.ai handle the rest. With real-time analytics and performance tracking, you’ll gain insights into call outcomes, response quality, and engagement trends—maximizing results while saving time.',
      icon: <AudomatedCompliance />,
    },
  ];

  return (
    <>
      <ProductsBanner
        title='QCall.ai: Smarter Call Automation'
        subtitle='with GenAI-Driven Conversations'
        description='Harness the power of advanced AI to automate your call strategy, boost engagement, and save time for sales teams, support centers, and enterprises. From intelligent call scheduling to real-time conversational insights, we make every interaction count. Let AI handle the calls, while you focus on building relationships and closing deals.'
        imageSrc='/images/products/qcall-banner.jpg'
      />
      <WhatProducts
        subtitle={'What is QCall.ai'}
        titleBold={'The Future of Call Automation Is Here'}
        titleLight={'Simplify Your Outreach Strategy with QCall.ai'}
        description={
          'QCall.ai is a GenAI-powered call automation platform that’s transforming how sales teams, support agents, startups, and enterprises connect with their audiences. Designed to streamline workflows like intelligent call.QCall.ai delivers smart, scalable, and customizable communication solutions. With the power of Generative AI, it drives high-quality conversations and automates outreach—so you can stay responsive, productive, and ahead of the game.'
        }
        imageSrc={'/images/products/qcall-what.jpg'}
      />
      <GameChangerProducts
        heading='Why QCall.ai'
        subheading='Is a Game Changer for Call Automation'
        tagline='QCall.ai: Redefining Efficiency and Impact in Communication Workflows'
        features={GameChangerData}
      />
      <ProductsProcessCard
        sectionTitle='The QCall.ai Process'
        sectionSubtitle='How QCall.ai Streamlines Your Outreach Strategy in 4 Simple Steps'
        steps={QCallProcessSteps}
      />
      <ProductsCaseStudy
        heading='How QCall.ai Transformed'
        subheading='A Sales Team’s Outreach Workflow'
        caseStudy={{
          problem: {
            icon: '/images/icons/eraser.svg',
            title: 'The Problem',
            description:
              'A growing B2B sales team was overwhelmed with cold calls, follow-ups, and lead qualification tasks. Manual dialing, inconsistent messaging, and limited time were bottlenecks that led to low conversion rates and missed opportunities.',
          },
          solution: {
            icon: '/images/icons/receipt-search.svg',
            title: 'The Solution',
            description:
              'QCall.ai was implemented to automate outbound calls, lead qualification, and follow-up sequences. With customizable scripts, real-time AI responses, and smart scheduling, the team was able to engage leads faster, more consistently, and at scale—without burning out.',
          },
          outcome: {
            icon: '/images/icons/tick-circle.svg',
            title: 'The Outcome',
            points: [
              'Call handling time reduced by 60%, freeing up reps to focus on closing high-intent deals.',
              'Lead engagement rose by 50%, driven by timely, AI-personalized outreach.',
              'Sales conversions increased by 35%, thanks to consistent, on-brand conversations powered by GenAI.',
            ],
          },
        }}
      />
      <KeyFeaturesProducts
        heading='Key Features of QCall.ai'
        subheading='Partner with TinyCheque'
        features={[
          {
            title: 'AI-Powered Call Automation',
            description:
              'Create natural, high-converting call scripts in seconds with QCall.ai’s GenAI engine—saving time on manual scripting and outreach. Each call is tailored to your audience, objective, and tone of voice.',
          },
          {
            title: 'Conversational Intelligence & Lead Insights',
            description:
              'Cut through the noise with real-time data and AI-powered analysis. QCall.ai identifies key trends, call outcomes, and buyer signals—giving your team actionable insights to drive performance.',
          },
          {
            title: 'Compliance Monitoring & Smart Alerts',
            description:
              'Stay fully compliant and on-brand. QCall.ai automatically reviews call scripts and interactions for regulatory risks or off-brand messaging—alerting you before issues arise.',
          },
          {
            title: 'Customizable Voice',
            description: `Start with proven voices or build your own to create consistent, personalized call flows. Whether you’re a startup, sales team, or support center, QCall.ai adapts to your workflow..`,
          },
          {
            title: 'Seamless Platform Integration',
            description:
              'QCall.ai connects effortlessly with your favorite tools—CRMs, dialers, help desks, and analytics platforms—so your call strategy works smoothly end-to-end without the manual mess.',
          },
        ]}
      />
      <WhySolutionProduct
        topLabel='Solution'
        heading='Why QCall.ai Is the'
        subheading='Preferred Call Automation Platform'
        listTitle='Why Professionals Rely on QCall.ai'
        imageSrc='/images/products/what-qcall.jpg'
        listItems={[
          {
            title: 'Powered by GenAI:',
            description: `QCall.ai is built on cutting-edge generative AI that powers natural, human-like conversations—whether it’s outbound sales, lead qualification, customer follow-ups, or appointment scheduling. Fast, adaptive, and always on-brand.`,
          },
          {
            title: 'Tailored for Every Content Strategy:',
            description: `Whether you're a solo founder, fast-growing startup, or enterprise-level sales or support team, QCall.ai fits seamlessly into your workflow. With flexible call templates, customizable scripts, and intelligent automation, it adapts to your goals with precision.`,
          },
        ]}
      />
      <CompetitorsProductsList
        subtitle='You vs. Competitors'
        titleLeft='Why QCall.ai'
        titleRight='Outperforms Other Call Automation Tools'
        description='Software comparison is the process of deeply analyzing multiple similar software based on critical parameters like features, pricing, ratings, etc'
        comparisonData={[
          {
            feature: 'AI-Powered Call Generation',
            left: 'Yes',
            right: 'Scripted, Manual Only',
          },
          {
            feature: 'Real-Time Conversational Insights',
            left: 'Yes',
            right: 'Basic Call Logs Only',
          },
          {
            feature: 'Customizable Voice',
            left: 'Yes',
            right: 'No',
          },
        ]}
      />
      <FAQ
        subtitle='Key part of a knowledge base'
        titleMain='Frequently asked questions'
        description={`Below you'll find answers to the most common questions you may have on . If you still can't find the answer you're looking for, just`}
        faqs={[
          {
            question: 'How does QCall.ai work?',
            answer:
              'QCall.ai is an AI-powered virtual assistant that automates calls, engages customers, and provides real-time insights to optimize outreach and support.',
          },
          {
            question: 'Can AI really replace human calling?',
            answer:
              'AI doesn’t replace humans—it enhances communication by handling routine calls, freeing up agents for more meaningful conversations.',
          },
          {
            question: 'Does it support multiple languages?',
            answer:
              'Yes! QCall.ai works in English, Spanish, Hindi, Gujarati, Bengali, Tamil, Kannada, Marathi, and more. Need a custom voice? We’ll train it for you!',
          },
          {
            question: 'How much can I save with QCall.ai?',
            answer:
              'Companies using QCall.ai have reported cost reductions of up to 70-80% and a 50-80% increase in revenue.',
          },
        ]}
      />
    </>
  );
};

export default QcallAI;
