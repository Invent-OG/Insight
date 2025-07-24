'use client';

import React from 'react';
import Formpage from '@/components/sections/form/FormPage';
import Hero from '@/components/sections/form/Hero';
import EmpowerSection from '@/components/sections/form/EmpowerSection';
import WhyChooseInsight from '@/components/sections/form/WhyChooseInsight';

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
    </>
  );
}

export default Page;
