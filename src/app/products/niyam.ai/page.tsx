import React from 'react';

import { AIPowered } from '@/src/components/icons/ai-powered';
import { AudomatedCompliance } from '@/src/components/icons/automated-compliance';
import { CustomizeationIcon } from '@/src/components/icons/customization-icon';
import { Search } from '@/src/components/icons/search';
import ProductsProcessCard from '@/src/components/products/products-process-card';
import ProductsCaseStudy from '@/src/components/products/products-case-study';
import KeyFeaturesProducts from '@/src/components/products/key-features-products';
import WhySolutionProduct from '@/src/components/products/why-products-card';
import CompetitorsProductsList from '@/src/components/products/competitors-products-list';
import WhatProducts from '@/src/components/products/what-is-products';
import GameChangerProducts from '@/src/components/products/game-changer';
import ProductsBanner from '@/src/components/products/products-banner';

const ProductProcessSteps = [
  {
    step: 'Step 1:',
    title: 'Input Your Legal Needs',
    description:
      'Begin by slecting the type of legal work- be it dratung contracts, conducting compliance checks, or performing legal resarch, Our intuitive inteface allows you to custoize the legal parameters relevant to your case or business.',
    icon: <Search />,
  },
  {
    step: 'Step 2:',
    title: 'AI-Powered Drafting & Research',
    description:
      'Niyam.ai’s GenAI model generates accurate legal documents, conducts thorough legal research, or cross-references compliance requirements. Its advanced slgorithms ensure that your legal outputs are detailed and legally sound.',
    icon: <AIPowered />,
  },
  {
    step: 'Step 3:',
    title: 'Customization & Review',
    description:
      "Use customizable templates to fit your specific needs, whether you're creating an NDA, drafting employemnet contracts, or condicting due diligence. You retain full control over the final output, making necessary edits or customizations.",
    icon: <CustomizeationIcon />,
  },
  {
    step: 'Step 4:',
    title: 'Automated Compliance Monitoring',
    description:
      'With every document drafted or task completed, Niyamai automatically checks for compliance with relevant laws, ensuring that you remain in full legal alignment at all times. It also continuously updates to reflect new regulations.',
    icon: <AudomatedCompliance />,
  },
];

const featuresData = [
  {
    title: 'AI-Driven Legal Expertise',
    description:
      'Powered by a state-of-the-art Generative AI model, Niyam.ai can draft precise legal documents, conduct comprehensive legal research, and ensure compliance with unprecedented speed and accuracy.',
  },
  {
    title: 'Customizable for Every Workflow',
    description:
      "Whether you're a lawyer, a law firm, an MSME, or a corporate entity, Niyam.ai provides adaptable templates and workflows that suit your specific legal needs.",
  },
  {
    title: 'Compliance Built in',
    description:
      "Stay compliant with local and international regulations with Niyam.ai's built-in legal intelligence...",
  },
  {
    title: 'Time-Saving Automation',
    description:
      'Manual legal work can be tedious and error-prone. Niyam.ai automates tasks like contract generation...',
  },
];

const NiyamAI = () => {
  return (
    <>
      <ProductsBanner
        title='  Niyam.ai: Revolutionizing Legal Tech with'
        subtitle='GenAI-Powered Solutions'
        description='Harness the power of cutting-edge AI to streamline legal tasks, reduce errors, and boost efficiency for legal professionals, MSMEs, corporates, and individuals.'
        imageSrc='/images/products/niyam-banner.png'
      />
      <WhatProducts
        titleBold={'What is Niyam.ai'}
        titleLight={'The Future of LegalTech Is Here'}
        description={
          'Niyam.ai is a GenAI-powered legal technology platform that transforms how legal professionals,MSMes, corporates, and individuals manage their legal processes.Niyam.ai provides accurate, efficient, and customizable solutions. With the power of Generative AI, it produces high-impact content while ensuring full compliance with local and international regulations. Niyam.ai adapts to your unique legal requirements, saving time, reducing human error, and enhancing productivity.'
        }
        imageSrc={'/images/products/niyam-legeltech.jpg'}
      />
      <GameChangerProducts
        heading='Why Niyam.ai'
        subheading='Is a Game Changer for Legal Industry'
        tagline='Niyam.ai: Redefining Efficiency and Accuracy in Legal Workflows'
        features={featuresData}
      />

      <ProductsProcessCard
        sectionTitle='The Niyam.ai Process'
        sectionSubtitle='How Niyam.ai Transforms your Legal Operations in 4 Simple Steps'
        steps={ProductProcessSteps}
      />
      <ProductsCaseStudy
        heading='How LegalTech Simplified Operations'
        subheading='For a Global Compliance Firm'
        caseStudy={{
          problem: {
            icon: '/images/icons/eraser.svg',
            title: 'The Challenge',
            description:
              'The firm faced delays in research and regulatory interpretation across multiple regions.',
          },
          solution: {
            icon: '/images/icons/receipt-search.svg',
            title: 'The Solution',
            description:
              'We implemented automation pipelines with AI-based legal monitoring and a smart knowledge base.',
          },
          outcome: {
            icon: '/images/icons/tick-circle.svg',
            title: 'The Results',
            points: [
              '30% faster case resolution across teams.',
              'Real-time updates on compliance law changes.',
              'Increased client satisfaction by 40%.',
            ],
          },
        }}
      />
      <KeyFeaturesProducts
        heading='Why Choose LegalGen?'
        subheading='Smart Automation for Legal Teams'
        features={[
          {
            title: 'AI-Powered Contracts',
            description:
              'Draft contracts 3x faster with automated legal templates.',
          },
          {
            title: 'Smart Compliance Alerts',
            description:
              'Stay on top of changing regulations with real-time alerts.',
          },
          {
            title: 'Seamless CRM Integration',
            description:
              'Connect your legal operations with Salesforce, HubSpot & more.',
          },
        ]}
      />
      <WhySolutionProduct
        topLabel='Solution'
        heading='Why LexAI is the'
        subheading='Go-To Platform for Legal Tech'
        listTitle='Why Legal Professionals TRustNiyam.ai'
        imageSrc='/images/products/legal-intelligence.jpg'
        listItems={[
          {
            title: 'Powered by GenAI:',
            description: ` Niyam.si is built on cutting-edge Generative AI technology, ensuring that every legal output- whether it's a contact, research report, or compliance checklist- is precise, efficient and tailored to yout nedds.`,
          },
          {
            title: 'Tailored for Every Legal Prefessional:',
            description:
              'Whether you’re a individual, law firm or a large enterpise, Niyam.ai offers customizable workflows and templates to suit your specific legal requirements.',
          },
        ]}
      />
      <CompetitorsProductsList
        subtitle='You vs. Competitors'
        titleLeft='Why Niyam.ai'
        titleRight='Traditional Legal Platforms'
        description='Software comparison is the process of deeply analyzing multiple similar software based on critical parameters like features, pricing, ratings, etc.'
        comparisonData={[
          { feature: 'AI-Powered Legal Drafting', left: 'Yes', right: 'No' },
          {
            feature: 'Real-Time Compliance Monitoring',
            left: 'Yes',
            right: 'Manual Processes',
          },
          {
            feature: 'Customizable Legal Templates',
            left: 'Yes',
            right: 'One-Size-Fits-All Templates',
          },
          {
            feature: 'Tailored for all business sizes',
            left: 'Yes',
            right: 'Typically for Large Enterprises',
          },
          {
            feature: 'Seamless Workflow Integration',
            left: 'Yes',
            right: 'Limited Integration options',
          },
        ]}
      />
    </>
  );
};

export default NiyamAI;
