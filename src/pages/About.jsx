import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, 
  MagnifyingGlassIcon, ArrowUpCircleIcon, CurrencyDollarIcon, WalletIcon, Cog8ToothIcon, MegaphoneIcon, RocketLaunchIcon, GlobeAmericasIcon } from '@heroicons/react/16/solid';
import JoinUs from '../components/JoinUs';

  
const FAQSection = () => {
  // State for managing which sections are open
  const [openSections, setOpenSections] = useState({
    shipping: false,
    returns: false,
    exchange: false,
    tracking: false
  });

  // State for search input
  const [searchTerm, setSearchTerm] = useState('');

  // FAQ data with sections
  const faqData = [
    {
      id: 'shipping',
      title: 'What is PictureMotion?',
      content: 'PictureMotion is a cutting-edge video editing platform that empowers creators of all levels to bring their visions to life. With our intuitive tools and powerful features, you can easily edit, enhance, and share your videos.'
    },
    {
      id: 'exchange',
      title: 'How much does PictureMotion cost?',
      content: 'We offer a variety of pricing plans to suit different needs. From free plans with basic features to premium plans with advanced capabilities, there\'s a plan for everyone. Please visit our pricing page for more details.'
    },
    {
      id: 'tracking',
      title: 'Is PictureMotion compatible with my device?',
      content: 'PictureMotion is compatible with a wide range of devices, including desktop computers, laptops, tablets, and smartphones. You can access our platform through your web browser or download our mobile app.'
    },
    {
      id: 'tracking',
      title: 'What kind of support is available?',
      content: 'We offer comprehensive customer support through our help center, email, and live chat. Our dedicated team is ready to assist you with any questions or issues you may encounter.'
    },
    {
      id: 'tracking',
      title: 'Can I collaborate with others on PictureMotion?',
      content: 'Absolutely! PictureMotion allows you to collaborate with other users in real-time. You can share projects, provide feedback, and work together to create stunning videos'
    },
  ];

  // Toggle section open/close
  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Filter FAQs based on search term
  const filteredFAQs = faqData.filter(faq => 
    faq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-4 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9">
      <h2 className="text-3xl font-semibold leading-9 text-gray-800 dark:text-white lg:text-4xl lg:leading-9 md:leading-7">
        Frequently Asked Questions
      </h2>
      
      <div className="flex flex-col items-start justify-start mt-4 md:justify-between md:items-start md:flex-row">
        <div>
          <p className="text-base font-normal leading-6 text-gray-600 dark:text-gray-400 lg:w-8/12 md:w-9/12">
            Here are few of the most frequently asked questions by our valuable customers
          </p>
        </div>
        
        <div className="flex items-center justify-center w-full pb-2 mt-10 border-b-2 border-gray-200 md:mt-0 md:w-auto">
          <input 
            placeholder="Search" 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search" 
            className="w-full text-base font-normal leading-4 text-gray-600 placeholder-gray-600 dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 lg:w-96 md:w-72 focus:outline-none" 
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-600 cursor-pointer dark:text-gray-400" />
        </div>
      </div>
      
      <div className="flex flex-col mt-8 md:flex-row md:space-x-8 md:mt-16">
        <div className="w-full md:w-5/12 lg:w-4/12">
          <img 
            src="/api/placeholder/500/600" 
            alt="FAQ Illustration" 
            className="hidden w-full md:block" 
          />
          <img 
            src="/api/placeholder/500/600" 
            alt="FAQ Illustration" 
            className="block w-full md:hidden" 
          />
        </div>
        
        <div className="w-full mt-10 md:w-7/12 lg:w-8/12 md:mt-0 sm:mt-14">
          {filteredFAQs.map((faq, index) => (
            <React.Fragment key={faq.id}>
              <div>
                <div className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-xl font-semibold leading-5 text-gray-800 dark:text-white">
                    {faq.title}
                  </h3>
                  <button 
                    aria-label="Toggle FAQ" 
                    className="text-gray-800 cursor-pointer dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    onClick={() => toggleSection(faq.id)}
                  >
                    {openSections[faq.id] ? (
                      <ChevronUpIcon className="w-5 h-5" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {openSections[faq.id] && (
                  <p className="w-11/12 mt-4 text-base font-normal leading-6 text-gray-600 dark:text-gray-400">
                    {faq.content}
                  </p>
                )}
              </div>
              
              {index < filteredFAQs.length - 1 && (
                <hr className="bg-gray-200 my-7" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};




const AboutSummary = () => {
  return (
    <>
    <JoinUs />
    </>
  );
};






const About = () => {
  return (
    <>
        <h1 className='text-4xl mt-2 font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br to-green-500 from-40% via-gray-500 via-10% from-gray-300 uppercase 
    text-center'>About Us</h1>
    <AboutSummary />
    <FAQSection />
    </>
  )
}

export default About