'use client';

import React, { ReactNode } from 'react';
import { MdAccessTime, MdSchool, MdFlight, MdMood } from 'react-icons/md';

interface WrapperProps {
  children: ReactNode;
}

interface CardProps {
  logo: React.ReactNode;
  title: string;
  background: string;
}

const WhatYouGetWrapper = ({ children }: WrapperProps) => {
  return (
    <section className='relative px-4 sm:px-6 md:px-10 lg:px-16 py-6 lg:py-10 sm:py-16 bg-gray-100 overflow-hidden'>
      <div className='relative z-10 text-center mb-10 py-4 sm:mb-12'>
        <h2 className='lg:text-4xl md:text-4xl text-2xl font-bold text-black leading-tight'>
          What you get <span className='text-primary'>with Us</span>
        </h2>
      </div>

      <div className='relative z-10 flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 w-full max-w-7xl px-2 sm:px-4'>
          {children}
        </div>
      </div>
    </section>
  );
};

const WhatYouGetCard = ({ logo, title, background }: CardProps) => {
  return (
    <div
      className='relative group p-6 sm:p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col gap-6 border border-gray-100 overflow-hidden'
      style={{ backgroundColor: background }}
    >
      {/* Decorative Circle */}
      <div className='absolute -top-8 -right-10 z-0 opacity-40 pointer-events-none'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 100'
          fill='currentColor'
          className='w-20 h-20 text-white'
        >
          <circle cx='50' cy='50' r='40' />
        </svg>
      </div>

      {/* Icon */}
      <div className='z-10 w-16 h-16 flex items-center justify-center rounded-full backdrop-blur-md bg-white/30 border border-white/40 shadow-md'>
        <div className='text-3xl text-primary'>{logo}</div>
      </div>

      {/* Text */}
      <div className='z-10 flex flex-col gap-2 border-t pt-4 border-white/40'>
        <p className='text-base font-medium text-gray-600'>{title}</p>
      </div>
    </div>
  );
};

WhatYouGetWrapper.Card = WhatYouGetCard;

export default function WhatYouGetSection() {
  return (
    <div className='bg-white'>
      <WhatYouGetWrapper>
        <WhatYouGetWrapper.Card
          title='Save time with end-to-end support'
          background='#FFFFFF'
          logo={<MdAccessTime />}
        />
        <WhatYouGetWrapper.Card
          title='Higher success in Visa & Admissions'
          background='#FFFFFF'
          logo={<MdFlight />}
        />
        <WhatYouGetWrapper.Card
          title='Boost IELTS/PTE scores with our one-on-one training'
          background='#FFFFFF'
          logo={<MdSchool />}
        />
        <WhatYouGetWrapper.Card
          title='Stress free process'
          background='#FFFFFF'
          logo={<MdMood />}
        />
      </WhatYouGetWrapper>
    </div>
  );
}
