import React from 'react';

const GameChanger = () => {
  const NiyamFeatures = [
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
        "Stay compliant with local and international regulations with Niyam.ai's built-in legal intelligence. It constantly monitors changes in law, ensuring that every document and recommendation adheres to the latest legal standards.",
    },
    {
      title: 'Time-Saving Automation',
      description:
        'Manual legal work can be tedious and error-prone. Niyam.ai automates tasks like contract generation, legal research, and compliance checks — freeing up time for higher-level strategic work.',
    },
  ];

  return (
    <section>
      <div className='container'>
        <div className='w-full px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col gap-2 sm:gap-2 items-center text-center'>
            <p className='text-[#864A5B] text-base sm:text-lg font-normal'>
              Why Niyam.ai
            </p>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#351C24]'>
              Is a Game Changer for Legal Industry
            </h2>
            <h2 className='text-2xl sm:text-3xl md:text-3xl font-light text-[#351C24]'>
              Niyam.ai: Redefining Efficiency and Accuracy in Legal Workflows
            </h2>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-10 mb-4'>
          {NiyamFeatures.map((feature, index) => (
            <div
              key={index}
              className='bg-white rounded-3xl shadow-md py-6 px-8 flex flex-col'
            >
              <h3 className='text-xl font-semibold text-[#351C24] mb-2'>
                {feature.title}
              </h3>
              <p className='text-md text-[#864A5B] font-normal'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameChanger;
