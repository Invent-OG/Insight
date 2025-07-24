'use client';

import { Button } from '@/components/ui/button';
import React, { useEffect, useRef } from 'react';

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      section.classList.add('animate-fade-up');
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className='relative flex flex-col justify-center items-center bg-gradient-to-r from-[#e0f2fe] to-[#ffffff] text-black py-16 px-6 md:px-20 text-center rounded-2xl overflow-hidden min-h-screen'
    >
      {/* Top-left SVG */}
      <svg
        className='absolute -top-10 left-0 w-32 h-32 opacity-20'
        viewBox='0 0 200 200'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill='#2563EB'
          d='M41.6,-71.1C54.5,-62.7,66.5,-54.7,74.4,-43.2C82.2,-31.7,85.9,-15.8,83.9,-1.3C81.8,13.2,74.1,26.5,66.1,38.7C58.2,50.8,49.9,61.8,39.2,69.1C28.5,76.5,14.2,80.2,1,78.5C-12.3,76.8,-24.6,69.6,-37.1,62.1C-49.6,54.5,-62.2,46.6,-70.3,35.1C-78.4,23.6,-82,8.4,-78.4,-5.7C-74.8,-19.8,-63.9,-32.8,-52.4,-42.9C-40.8,-53.1,-28.5,-60.5,-15.4,-69.3C-2.2,-78.1,11.7,-88.2,25.9,-86.5C40.2,-84.8,55.7,-71.2,41.6,-71.1Z'
          transform='translate(100 100)'
        />
      </svg>

      {/* Heading and CTA */}
      <h2 className='text-2xl md:text-4xl font-bold mb-6 relative z-10'>
        <span className='text-primary'>Don’t Miss</span> your last chance to{' '}
        <span className='text-primary'>study abroad</span>
      </h2>
      <Button
        onClick={() => {
          const target = document.getElementById('contact-form');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className='relative z-10'
      >
        GET IN TOUCH
      </Button>

      {/* Bottom-right SVG */}
      <svg
        className='absolute bottom-1/6 right-0 w-40 h-40 opacity-20 rotate-180'
        viewBox='0 0 200 200'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill='#2563EB'
          d='M41.6,-71.1C54.5,-62.7,66.5,-54.7,74.4,-43.2C82.2,-31.7,85.9,-15.8,83.9,-1.3C81.8,13.2,74.1,26.5,66.1,38.7C58.2,50.8,49.9,61.8,39.2,69.1C28.5,76.5,14.2,80.2,1,78.5C-12.3,76.8,-24.6,69.6,-37.1,62.1C-49.6,54.5,-62.2,46.6,-70.3,35.1C-78.4,23.6,-82,8.4,-78.4,-5.7C-74.8,-19.8,-63.9,-32.8,-52.4,-42.9C-40.8,-53.1,-28.5,-60.5,-15.4,-69.3C-2.2,-78.1,11.7,-88.2,25.9,-86.5C40.2,-84.8,55.7,-71.2,41.6,-71.1Z'
          transform='translate(100 100)'
        />
      </svg>
    </section>
  );
}
