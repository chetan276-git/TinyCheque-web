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

const FableShortsCom = () => {
  const FabelGameChangerData = [
    {
      title: 'End-to-End AI Video Automation',
      description:
        'Fableshorts uses cutting-edge Generative AI to turn trending topics and custom ideas into fully produced, platform-ready videos. From research and scripting to voiceovers and visuals — it’s 100% hands-off, and 100% high-impact.',
    },
    {
      title: 'Tailored for Any Team, Any Industry',
      description: `Whether you're a solo founder, marketing lead, media publisher, or growing enterprise, Fableshorts adapts to your workflow with category-driven video series, smart scheduling, and multi-platform publishing.`,
    },
    {
      title: 'On-Brand, On-Point — Every Time',
      description:
        'Stay consistent, stay compliant. Fableshorts ensures your video content aligns with your tone, branding, and social platform guidelines automatically.',
    },
    {
      title: 'Time-Saving Video Magic',
      description:
        'No editors. No burnout. No delays. With fully automated research, scripts, production, and publishing, Fableshorts helps you scale your video output while you focus on what matters most: growing your brand.',
    },
  ];

  const FabelProcessSteps = [
    {
      step: 'Step 1:',
      title: 'Tell Us What You Want',
      description: `Start by picking your goal. Want to grow your audience? Push a product? Go viral on TikTok before lunch? Just set your content intention. Fableshorts aligns everything—topic, tone, timing—to match your mission and your brand. You dream it. We build around it.`,
      icon: <Search />,
    },
    {
      step: 'Step 2:',
      title: 'Sit Back While AI Gets to Work',
      description: `No more blank screens. No more creative blocks.Fableshorts' AI dives into the internet trenches—researching trends, crafting scroll-stopping scripts, and prepping the perfect content blueprint. You get juicy, social-ready ideas without lifting a finger.`,
      icon: <AIPowered />,
    },
    {
      step: 'Step 3:',
      title: 'Add Your Magic',
      description:
        'Want to tweak a line? Change a vibe? Add a call-to-action that screams you? Go for it. You’re in the director’s chair. Review the content, make it yours, and move on with your day. We keep the power in your hands.',
      icon: <CustomizeationIcon />,
    },
    {
      step: 'Step 4:',
      title: 'Publish While You Sleep',
      description:
        'Fableshorts doesn’t just create—it executes. Automatically.Your videos get scheduled and published at peak engagement times across YouTube, Instagram, Facebook, and TikTok. While you sleep, sip coffee, or build your empire—Fableshorts works behind the scenes making sure your content crushes it.',
      icon: <AudomatedCompliance />,
    },
  ];

  return (
    <>
      <ProductsBanner
        title='Fableshorts: Fully Automated Video Creation & Publishing'
        subtitle='Smarter Content. Zero Hassle. All in Minutes.'
        description='Ever feel like you’re stuck on the content treadmill — spinning your wheels but getting nowhere? We did too. That’s why we built Fableshorts — your all-in-one, automated video creation engine. From idea to scroll-stopping social video in literal minutes, Fableshorts harnesses GenAI to take video marketing completely off your plate — and onto your audience’s feeds.'
        imageSrc='/images/products/fabel-short-banner.jpg'
        buttons={[
          {
            label: 'Get Started for free',
            href: 'https://app.fableshorts.com/',
            variant: 'primary',
          },
          {
            label: 'Get free demo',
            href: 'https://app.fableshorts.com/',
            variant: 'secondary',
          },
        ]}
      />
      <WhatProducts
        subtitle={'What is Fableshorts?'}
        titleBold={'The Future of Video Creation Is Already Here'}
        titleLight={
          'Fully Automated. Endlessly Scalable. Built for the Fast Lane.'
        }
        description={
          'Fableshorts is a GenAI-powered video automation platform that redefines how creators, marketers, startups, and media teams produce video content. Built for the speed of social and the scale of modern content demands, Fableshorts turns ideas into polished, platform-optimized videos without you lifting a finger. No editors. No late nights. No stress. With Fableshorts, consistency is automatic visibility is inevitable.'
        }
        imageSrc={'/images/products/what-fabel-shorts.jpg'}
      />
      <GameChangerProducts
        heading='Why Fableshorts'
        subheading='Is a Game Changer for Automated Video Creation'
        tagline='Fableshorts: Redefining Speed, Scale, and Simplicity in Video Marketing'
        features={FabelGameChangerData}
      />
      <ProductsProcessCard
        sectionTitle='The Fable Shorts Process'
        sectionSubtitle='From Idea to Viral Video in 4 Ridiculously Easy Steps'
        steps={FabelProcessSteps}
      />
      <ProductsCaseStudy
        heading='How One Team Ditched the Content Chaos'
        subheading='From Burnout to Brilliance with Fableshorts'
        caseStudy={{
          problem: {
            icon: '/images/icons/eraser.svg',
            title: 'The Struggle Was Real',
            description:
              'A fast-moving marketing team was drowning in the content grind.Endless to-do lists. Dozens of platforms. A different format, tone, and post time for each one.It felt like running a marathon… in quicksand.Manual workflows slowed them down, consistency slipped, and engagement? Let’s just say it wasn’t exactly popping off.',
          },
          solution: {
            icon: '/images/icons/receipt-search.svg',
            title: 'Then Came the Plot Twist',
            description:
              'One tool to end the madness. With fully automated video creation, scheduling, and AI-powered optimization, the team finally hit play on a process that actually worked.No more copy-paste chaos. No more scrambling last minute.Just beautiful, branded videos that posted themselves—on time, every time.',
          },
          outcome: {
            icon: '/images/icons/tick-circle.svg',
            title: 'The Outcome',
            points: [
              '50% less time spent creating content. That’s hours back in the day.',
              '+45% engagement across platforms thanks to AI-optimized publishing.',
              'Consistent branding across every post, every channel—with zero stress.',
            ],
          },
        }}
      />
      <KeyFeaturesProducts
        heading='Fuel Growth with Fableshorts Tech Power'
        subheading='Partner with TinyCheque'
        features={[
          {
            title: 'AI-Powered Content That Actually Converts',
            description:
              'No more staring at a blinking cursor.Our GenAI engine whips up scroll-stopping posts in seconds—crafted to match the platform, audience, and vibe.That’s hours of ideation and copywriting… gone. Replaced with content that wins.',
          },
          {
            title: 'Laser-Focused Trend Research',
            description:
              'Fableshorts cuts through the noise with AI-curated trends, hashtags, and formats tailored to your space.Translation? Posts that feel timely, relevant, and hit harder.',
          },
          {
            title: 'Built-In Compliance That Has Your Back',
            description:
              'Our smart compliance engine checks your posts for red flags and brand violations—before you go live.You stay safe, sound, and on-brand every time.',
          },
          {
            title: 'Templates That Do the Heavy Lifting',
            description: `Grab a proven framework or customize your own.Fableshorts gives you battle-tested post templates that scale effortlessly—whether you’re a solo creator or a 20-person marketing squad.`,
          },
          {
            title: 'Integrations That Actually Work',
            description:
              'From CMS to CRM to your favorite scheduler, Fableshorts plays nice with the tools you already love.No more juggling tabs or dragging files. Just smooth, seamless content workflows—from idea to publish.',
          },
        ]}
      />
      <WhySolutionProduct
        topLabel='Solution'
        heading='Why Fableshorts is the Weapon of Choice'
        subheading='Why Pros, Creators, and Brands Trust Us to Automate Their Content Game'
        listTitle='Built on Brainy GenAI'
        imageSrc='/images/products/what-fabelshorts.jpg'
        listItems={[
          {
            title: 'This isn’t just AI—it’s Fableshorts AI.',
            description: `Lightning-fast, razor-sharp, and tailored to your voice, our GenAI engine turns ideas into content gold. Product drops? Done. Carousels? Covered. LinkedIn gems or TikTok hooks? All optimized, on-brand, and ready to go in seconds—not hours.`,
          },
          {
            title: 'Fits Your Flow, Not the Other Way Around',
            description: `Whether you're a scrappy solo creator, a startup finding its voice.`,
          },
        ]}
      />
      <CompetitorsProductsList
        subtitle='You vs. Competitors'
        titleLeft='Why Fableshorts'
        titleRight='eaves Traditional Tools in the Dust'
        description='Software comparison is the process of deeply analyzing multiple similar software based on critical parameters like features, pricing, ratings, etc'
        buttonLink='https://app.autoposting.ai/'
        comparisonData={[
          {
            feature: 'AI-Powered Content Creation',
            left: 'Yes',
            right: 'No',
          },
          {
            feature: 'Real-Time Trend Optimization',
            left: 'Yes',
            right: 'Manual Trend Tracking',
          },
          {
            feature: 'Customizable Video Templates',
            left: 'Yes',
            right: 'One-Size-Fits-All Templates',
          },
        ]}
      />
      <FAQ
        titleMain='Frequently asked questions'
        description={`Below you'll find answers to the most common questions you may have on . If you still can't find the answer you're looking for, just`}
        faqs={[
          {
            question: 'What exactly is Fable Shorts?',
            answer:
              'Fable Shorts is an AI-powered video creation platform that automates the entire process of researching topics, writing scripts, creating videos, and publishing them across various social media platforms.',
          },
          {
            question: 'How does Fable Shorts work?',
            answer:
              'Fable Shorts uses advanced AI algorithms to research topics, generate scripts, create visuals, and compile them into cohesive videos. You simply input a topic or theme, and our AI takes care of the rest',
          },
          {
            question: 'What types of videos can Fable Shorts create?',
            answer:
              'Fable Shorts can create a wide variety of video types, including educational content, news updates, product reviews, how-to guides, and entertaining shorts. The AI adapts to your chosen topic and style.',
          },
          {
            question: 'Can I customize the videos created by Fable Shorts?',
            answer:
              'Yes, you can customize various aspects of the videos, including the script, visuals, background music, and overall style. However, the level of customization may vary depending on your subscription plan.',
          },
        ]}
      />
    </>
  );
};

export default FableShortsCom;
