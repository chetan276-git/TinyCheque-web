import React from 'react';
import Image from 'next/image';

// Component
const PrivacyPolicy: React.FC = () => {
  return (
    <div className='max-w-3xl mx-auto p-6 pt-6'>
      <div className='mb-6 mt-6'>
        <h1 className='text-4xl font-bold text-[#351C24] '>Privacy Policy</h1>
        <div className='bg-white rounded-2xl py-4 pl-4 mt-4 flex gap-2'>
          <div className='w-6 h-6 flex justify-center relative'>
            <Image src={`/images/icons/timer-start.svg`} fill alt='Timer' />
          </div>
          <p className='text-base font-normal text-[#864A5B]'>
            Effective Date 20th October 2024
          </p>
        </div>
      </div>
      <div className='mb-6'>
        <p className='text-[#864A5B] text-lg font-normal'>
          Welcome to TinyCheque Ventures Private Limited (“TinyCheque,” “we,”
          “us,” or “our”). We are committed to protecting your privacy and
          ensuring that your personal data is handled in a safe and responsible
          manner.
        </p>
        <p className='text-[#864A5B] mt-4  text-lg font-normal'>
          This Privacy Policy outlines how we collect, use, disclose, and
          protect your personal information when you access or use our website{' '}
          <a className='text-[#537FDE]' href='https://tinycheque.com/'>
            tinycheque.com
          </a>{' '}
          (“Website“) and our services (“Services“). By using our Website and
          Services, you agree to the terms of this Privacy Policy.
        </p>
      </div>
      <div className='mb-6 bg-white rounded-2xl py-6 px-6 mt-4 '>
        <h2 className='text-xl font-semibold mb-2 text-[#351C24]'>
          {' '}
          1. Definitions
        </h2>
        <ul className='list-disc pl-6 text-[#351C24] mt-2 text-lg pl-2'>
          <li className='text-[#864A5B] font-normal'>
            <strong className='text-[#351C24]'>Personal Data:</strong> Any
            information that relates to an individual who can be identified from
            that information.
          </li>
          <li className='text-[#864A5B] font-normal'>
            <strong className='text-[#351C24]'>Non-Personal Data:</strong>{' '}
            Information that does not identify you or any other individual and
            includes aggregate information.
          </li>
          <li className='text-[#864A5B] font-normal'>
            <strong className='text-[#351C24]'>Cookies:</strong>Small files
            stored on your device (computer or mobile device).
          </li>
        </ul>
      </div>
      <div className='mb-6 bg-white rounded-2xl py-6 px-6 mt-4'>
        <h2 className='text-xl font-semibold mb-2 text-[#351C24]'>
          2. Information We Collect
        </h2>
        <div className='pl-4 mt-4'>
          <div className='mb-4'>
            <div className='font-semibold text-[#351C24] text-lg'>
              2.1 Personal Data
            </div>
            <p className='text-[#864A5B] mt-2'>
              We may collect the following types of personal data:
            </p>
            <ul className='list-disc pl-6 text-[#351C24] mt-2 text-lg pl-2'>
              <li className=' text-[#864A5B]'>
                <span className='font-semibold text-[#351C24] '>
                  Contact Information:
                </span>
                Name, email address, postal address, telephone number.
              </li>
              <li className=' text-[#864A5B]'>
                <span className='font-semibold text-[#351C24] '>
                  Account Information:
                </span>
                Username, password, and other credentials used to access our
                Services.
              </li>
              <li className=' text-[#864A5B]'>
                <span className='font-semibold text-[#351C24] '>
                  Payment Information:
                </span>
                Credit card numbers, billing address, and other financial data
                necessary to process payments.
              </li>
              <li className=' text-[#864A5B]'>
                <span className='font-semibold text-[#351C24]'>
                  Usage Data:
                </span>
                Information about how you use our Website and Services.
              </li>
              <li className=' text-[#864A5B]'>
                <span className='font-semibold text-[#351C24]'>
                  Communication Data:
                </span>
                Content of your communications with us, including emails and
                chat messages.
              </li>
            </ul>
          </div>
          <div className='mt-6'>
            <div className='font-semibold text-[#351C24] text-lg'>
              2.2 Non-Personal Data
            </div>
            <div className='pl-4 mt-2'>
              <div className='flex gap-2'>
                <span className='text-[#864A5B]'>a.</span>
                <p className='text-[#864A5B]'>
                  We may collect non-personal data such as browser types,
                  operating systems, and the URLs of sites you visited before
                  and after visiting our Website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-6 bg-white rounded-2xl py-6 px-6 mt-4 '>
        <h2 className='text-xl font-semibold mb-2 text-[#351C24]'>
          3. How We Collect Information
        </h2>
        <ul className='list-disc pl-6 text-[#351C24] mt-2 text-lg pl-2'>
          <li className='text-[#864A5B] font-normal'>
            <strong className='text-[#351C24]'>Directly from You:</strong>When
            you register, purchase, or use our Services.
          </li>
          <li className='text-[#864A5B] font-normal'>
            <strong className='text-[#351C24]'>Automatically:</strong> Through
            cookies and similar tracking technologies.
          </li>
          <li className='text-[#864A5B] font-normal'>
            <strong className='text-[#351C24]'>Third Parties:</strong> From
            affiliates, partners, or service providers.
          </li>
        </ul>
      </div>
      <div className='mb-6 bg-white rounded-2xl py-6 px-6 mt-4 '>
        <h2 className='text-xl font-semibold mb-2 text-[#351C24]'>
          4. Use of Your Information
        </h2>
        <h6 className='font-semibold'>
          We use your information for the following purposes:
        </h6>
        <ul className='list-disc pl-6 text-[#351C24] mt-2 text-lg pl-2'>
          <li className='text-[#864A5B] font-normal'>
            <strong className='text-[#351C24]'>Provide Services:</strong>To
            process transactions and provide you with the requested Services
          </li>
          <li className='text-[#864A5B] font-normal'>
            <strong className='text-[#351C24]'>Communication:</strong> To send
            administrative information, updates, and promotional materials.
          </li>
          <li className='text-[#864A5B] font-normal'>
            <strong className='text-[#351C24]'>Customer Support:</strong> To
            respond to your inquiries and provide support.
          </li>
          <li className='text-[#864A5B] font-normal'>
            <strong className='text-[#351C24]'>Personalization:</strong> To
            tailor our Services to your preferences.
          </li>
          <li className='text-[#864A5B] font-normal'>
            <strong className='text-[#351C24]'>Legal Obligations:</strong> To
            comply with legal requirements and protect our rights.
          </li>
        </ul>
      </div>
      <div className='mb-6 bg-white rounded-2xl py-6 px-6 mt-4'>
        <h2 className='text-xl font-semibold mb-2 text-[#351C24]'>
          5. Cookies and Similar Technologies
        </h2>
        <p className='text-[#351C24] mt-4 mb-3 font-semibold'>
          We use cookies and similar technologies to:
        </p>
        <ul className='pl-4 space-y-2'>
          <li className='flex gap-2'>
            <span>•</span>
            <p className='text-[#864A5B]'>Enhance user experience.</p>
          </li>
          <li className='flex gap-2'>
            <span>•</span>
            <p className='text-[#864A5B]'>
              Analyze site traffic and usage patterns.
            </p>
          </li>
          <li className='flex gap-2'>
            <span>•</span>
            <p className='text-[#864A5B]'>
              Remember your preferences and settings.
            </p>
          </li>
        </ul>
        <div className='mt-4'>
          <span className='font-semibold text-[#351C24]'>
            Managing Cookies:{' '}
          </span>
          <span className='text-[#864A5B]'>
            You can control the use of cookies at the individual browser level.
            If you reject cookies, you may still use our Website but your
            ability to use some features may be limited.
          </span>
        </div>
      </div>
      <div className='mb-6 bg-white rounded-2xl py-6 px-6 mt-4'>
        <h2 className='text-xl font-semibold mb-2 text-[#351C24]'>
          6. Disclosure of Your Information
        </h2>
        <div className='pl-4'>
          <div className='mb-6'>
            <div className='font-semibold text-[#351C24] text-lg'>
              6.1 Third-Party Service Providers
            </div>
            <p className='text-[#351C24] mt-2 mb-3 font-semibold'>
              We may share your information with third-party service providers
              who assist us in:
            </p>
            <ul className='pl-4 space-y-2'>
              <li className='flex gap-2'>
                <span>•</span>
                <p className='text-[#864A5B]'>Payment processing.</p>
              </li>
              <li className='flex gap-2'>
                <span>•</span>
                <p className='text-[#864A5B]'>Data analysis.</p>
              </li>
              <li className='flex gap-2'>
                <span>•</span>
                <p className='text-[#864A5B]'>Marketing and advertising.</p>
              </li>
              <li className='flex gap-2'>
                <span>•</span>
                <p className='text-[#864A5B]'>Customer service.</p>
              </li>
            </ul>
          </div>
          <div className='mb-4'>
            <div className='font-semibold text-[#351C24] text-lg'>
              6.2 Legal Requirements
            </div>
            <p className='text-[#351C24] mt-2 mb-3 font-semibold'>
              We may disclose your information if required to do so by law or in
              the good faith belief that such action is necessary to:
            </p>
            <ul className='pl-4 space-y-2'>
              <li className='flex gap-2'>
                <span>•</span>
                <p className='text-[#864A5B]'>Comply with legal obligations.</p>
              </li>
              <li className='flex gap-2'>
                <span>•</span>
                <p className='text-[#864A5B]'>
                  Protect and defend our rights or property.
                </p>
              </li>
              <li className='flex gap-2'>
                <span>•</span>
                <p className='text-[#864A5B]'>
                  Prevent or investigate possible wrongdoing.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mb-6 bg-white rounded-2xl py-6 px-6 mt-4'>
        <h2 className='text-xl font-semibold mb-2 text-[#351C24]'>
          7. Data Security
        </h2>
        <p className='text-[#351C24] mb-4'>
          We implement appropriate security measures to protect your personal
          data from unauthorized access, alteration, disclosure, or destruction.
          These measures include:
        </p>
        <ul className='pl-4 space-y-2'>
          <li className='flex gap-2'>
            <span>•</span>
            <p className='text-[#864A5B]'>Encryption of sensitive data.</p>
          </li>
          <li className='flex gap-2'>
            <span>•</span>
            <p className='text-[#864A5B]'>Regular security assessments.</p>
          </li>
          <li className='flex gap-2'>
            <span>•</span>
            <p className='text-[#864A5B]'>
              Restricted access to personal data.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
