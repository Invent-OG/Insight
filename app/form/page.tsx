'use client';

import React from 'react';
import Formpage from '@/components/sections/form/FormPage';
import Hero from '@/components/sections/form/Hero';
import EmpowerSection from '@/components/sections/form/EmpowerSection';
import WhyChooseInsight from '@/components/sections/form/WhyChooseInsight';
import Services from '@/components/sections/form/Services';
import WhatYouGet from '@/components/sections/form/WhatYouGet';
import HowItWorks from '@/components/sections/form/HowItWorks';
import CountriesCarousel from '@/components/sections/CountriesCarousel';
import FinalCTA from '@/components/sections/form/FinalCTA';

function Page() {
  return (
    <>
      <Hero />

      {/* Wrap Formpage in a scroll-target section */}
      <section id='contact-form'>
        <Formpage />
      </section>
      <EmpowerSection />
      <WhyChooseInsight />
      <Services />
      <WhatYouGet />
      <HowItWorks />
      <CountriesCarousel />
      <section id='contact-form'>
        <FinalCTA />
      </section>
    </>
  );
}

export default Page;
