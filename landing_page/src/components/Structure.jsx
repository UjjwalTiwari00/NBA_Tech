import React from 'react';
import About_section from './About_section';
import { StickyScrollRevealDemo } from './StickyScrollRevealDemo';
import Our_Service from './Our_Services';
import SolutionsAndServices from './SolutionsAndServices';
import ContactForm from './ContactForm';
import HeroSection from './Hero_section';

const Structure = () => {
  return (
    <div className='overflow-x-hidden'>
      <HeroSection />
      <About_section />
      <StickyScrollRevealDemo className="w-screen" /> 
      {/* <CardHoverEffectDemo /> */}
      <Our_Service />
      <SolutionsAndServices />
      <ContactForm />
    </div>
  );
};

export default Structure;
