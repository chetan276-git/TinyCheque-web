import React from 'react';
import Image from 'next/image';
// Types
type SectionItem = string | { term: string; definition: string };

type Section = {
  id: number;
  title: string;
  items?: SectionItem[];
  subsections?: {
    [key: string]: string[];
  };
};

type TermsOfService = {
  title: string;
  effectiveDate: string;
  sections: Section[];
};

// Local object
const termsOfService: TermsOfService = {
  title: 'Terms of Service',
  effectiveDate: '20th October 2024',
  sections: [
    {
      id: 1,
      title: 'Definitions',
      items: [
        {
          term: 'User/You',
          definition: 'Anyone accessing or using our Services.',
        },
        {
          term: 'Account',
          definition: 'User-created profile for accessing Services.',
        },
        {
          term: 'Content',
          definition: 'Text, images, videos, and other materials.',
        },
        {
          term: 'Third-Party Services',
          definition: 'External services linked to our site.',
        },
      ],
    },
    {
      id: 2,
      title: 'Eligibility',
      items: [
        'Must be 18+ years old.',
        'Must have legal capacity to form a binding contract.',
      ],
    },
    {
      id: 3,
      title: 'User Accounts',
      subsections: {
        'Account Registration': [
          'Account creation may be required.',
          'Provide accurate and complete information.',
        ],
        'Account Security': [
          "You're responsible for your credentials.",
          'Notify us of any unauthorized activity.',
        ],
        'Account Termination': [
          'We may suspend/terminate your account if terms are violated.',
        ],
      },
    },
    {
      id: 4,
      title: 'Use of Services',
      subsections: {
        License: [
          'Limited, non-transferable license for personal/business use.',
        ],
        'Updates and Modifications': [
          'Services may change anytime.',
          'Not liable for change consequences.',
        ],
      },
    },
    {
      id: 5,
      title: 'User Obligations',
      items: [
        'Use lawfully.',
        "Don't harm or disrupt Services or other users.",
      ],
    },
    {
      id: 6,
      title: 'Prohibited Activities',
      items: [
        'No unlawful/fraudulent use.',
        'No impersonation or false info.',
        'No viruses or malicious code.',
        'No unauthorized access.',
        'No service interference.',
      ],
    },
    {
      id: 7,
      title: 'Intellectual Property',
      subsections: {
        Ownership: ['All IP belongs to TinyCheque or licensors.'],
        Restrictions: [
          'No reproduction, distribution, or derivative works without permission.',
        ],
      },
    },
  ],
};

// Component
const TermsPage: React.FC = () => {
  return (
    <div className='max-w-3xl mx-auto p-6 pt-6'>
      <div className='mb-6 mt-6'>
        <h1 className='text-4xl font-bold text-[#351C24]'>
          {termsOfService.title}
        </h1>

        <div className='bg-white rounded-2xl py-4 pl-4 mt-4 flex gap-2  items-center'>
          <div className='w-6 h-6 flex justify-center relative'>
            <Image src={`/images/icons/timer-start.svg`} fill alt='Timer' />
          </div>
          <p className='text-base font-normal text-[#864A5B]'>
            a Effective Date 20th October 2024
          </p>
        </div>

        <div className='my-6'>
          <p className='text-[#864A5B] text-lg font-normal'>
            Welcome to TinyCheque Ventures Private Limited (“TinyCheque,” “we,”
            “us,” or “our”). These Terms of Service (“Terms”) govern your access
            to and use of our website tinycheque.com (“Website”) and any related
            services (“Services”). By accessing or using our Website and
            Services, you agree to be bound by these Terms.
          </p>
          <p className='text-[#864A5B] mt-4  text-lg font-normal'>
            Please read these Terms carefully before using our Services. If you
            do not agree with any part of these Terms, you must not use our
            Services.
          </p>
        </div>
      </div>
      {termsOfService.sections.map((section: Section) => (
        <div key={section.id} className='bg-white rounded-2xl py-6 px-6 mt-6'>
          <h2 className='text-xl font-semibold text-[#351C24]'>
            {section.id}. {section.title}
          </h2>

          {section.items && (
            <ul className='list-disc pl-6 text-[#864A5B] text-lg font-normal mt-2'>
              {section.items.map((item: SectionItem, i: number) => (
                <li key={i}>
                  {typeof item === 'string' ? (
                    item
                  ) : (
                    <>
                      <strong>{item.term}:</strong> {item.definition}
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}

          {section.subsections &&
            Object.entries(section.subsections).map(
              ([subTitle, subItems], idx: number) => (
                <div key={idx} className='mt-4'>
                  <h3 className='font-semibold text-[#351C24] text-lg'>
                    {subTitle}
                  </h3>
                  <ul className='list-disc pl-6 text-[#864A5B] text-lg font-normal mt-1'>
                    {subItems.map((subItem: string, i: number) => (
                      <li key={i}>{subItem}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
        </div>
      ))}
    </div>
  );
};

export default TermsPage;
