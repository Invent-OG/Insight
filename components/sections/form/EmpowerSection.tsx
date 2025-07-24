'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EmpowerSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(paraRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: paraRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className='relative w-full bg-white py-20 px-6 md:px-12 overflow-hidden'
    >
      {/* Decorative SVG */}
      <svg
        className='absolute top-0 right-0 w-64 h-64 text-red-100 opacity-30'
        fill='none'
        viewBox='0 0 200 200'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='100' cy='100' r='100' fill='currentColor' />
      </svg>

      <div className='relative max-w-4xl mx-auto text-center'>
        <h2
          ref={headingRef}
          className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug'
        >
          <span className='text-red-600'>Empowering</span> Students to study abroad with confidence
        </h2>
        <p ref={paraRef} className='text-lg md:text-xl text-gray-700 leading-relaxed'>
          At <span className='text-red-600 font-semibold'>Insight</span> Educator & Abroad Services,
          we believe in “Insight” — the ability to see beyond the obvious, understand deeply, and
          make informed decisions. Guided by this principle, we offer comprehensive study abroad
          consultancy services to students in Coimbatore and beyond, empowering them to achieve
          their global education dreams.
        </p>
      </div>
    </section>
  );
}
