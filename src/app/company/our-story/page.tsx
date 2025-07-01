import OurStoryHowBegan from '@/src/components/our-story/how-began';
import OurFounder from '@/src/components/our-story/our-founder';
import StoryCardsSection from '@/src/components/our-story/story-cards-section';
import ProductsBanner from '@/src/components/products/products-banner';
import React from 'react';

const OurStory = () => {
  return (
    <>
      <ProductsBanner
        title='Our Story'
        subtitle='The Journey of TinyCheque'
        description={`At TinyCheque, we believe that great companies are built on vision, passion, and the relentless pursuit of innovation. Our journey from a small startup to India's first AI-First SaaS Venture Studio is a testament to this belief. What began as an ambitious dream to redefine the future of SaaS has evolved into a thriving hub of AI-powered innovation, empowering businesses around the world to scale and succeed.
`}
        imageSrc='/images/ourstory-banner.png'
      />
      <OurStoryHowBegan />
      <StoryCardsSection
        title='Explore SaaS'
        heading='From idea to execution'
        subheading='building our foundation'
        introText='In the early days, TinyCheque was just a small team of passionate innovators working tirelessly from a modest office space, experimenting with AI models and software development tools.'
        highlights={[
          {
            id: 1,
            text: 'Udit and Sudhir knew that to truly transform the SaaS industry, they needed more than just great ideas—they needed to build a culture of execution, a place where technology, strategy, and creativity intersected.',
          },
          {
            id: 2,
            text: 'By focusing on two core principles—AI-first innovation and strategic partnerships—TinyCheque quickly attracted attention from industry leaders. Early collaborations with pioneering SaaS companies gave us the momentum to grow.',
          },
          {
            id: 3,
            text: 'Our philosophy was simple but revolutionary: Leverage AI to accelerate SaaS growth and focus on building partnerships, not just products.',
          },
        ]}
      />
      <StoryCardsSection
        heading='The Future: Continuing to'
        subheading={`build what's next`}
        highlights={[
          {
            id: 1,
            text: 'As we look to the future, our mission remains as bold as ever: To lead the AI revolution in SaaS.',
          },
          {
            id: 2,
            text: 'We are constantly evolving, always on the lookout for the next big challenge to solve, the next market to disrupt, and the next partnership to foster.',
          },
          {
            id: 3,
            text: `With every new product and partnership, we aim to push the boundaries of what AI can do, building solutions that not only meet today's needs but anticipate tomorrow's challenges.`,
          },
        ]}
      />
      <OurFounder />
    </>
  );
};

export default OurStory;
