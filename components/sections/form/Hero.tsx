'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from(textRef.current, {
        y: 30,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Smooth scroll on click with GSAP offset
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('contact-form');
    if (target) {
      const offset = 100; // you can increase this value to scroll more downward
      const top = target.getBoundingClientRect().top + window.scrollY + offset;

      gsap.to(window, {
        scrollTo: { y: top, autoKill: true },
        duration: 1,
        ease: 'power2.out',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className='relative w-full h-screen flex items-center justify-center px-6 bg-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('/assets/contact/contact.jpg')`,
      }}
    >
      {/* White Overlay */}
      <div className='inset-0 absolute bg-white bg-opacity-60' />

      {/* Content */}
      <div className='text-center max-w-3xl p-8 rounded-xl relative z-10'>
        <p className='text-sm uppercase tracking-widest text-red-500 mb-4'>Get started today!</p>

        <h1 ref={headingRef} className='text-4xl md:text-6xl font-bold text-gray-900 leading-tight'>
          <span className='text-red-600'>Plan smarter</span>, go further.
        </h1>

        <p ref={textRef} className='text-lg md:text-xl text-gray-700 mt-6'>
          Let our experts guide you towards your international education journey.
        </p>

        {/* Scroll Button */}
        <a
          ref={btnRef}
          href='#contact-form'
          onClick={handleScroll}
          className='inline-block mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300'
        >
          Connect with us today
        </a>
      </div>
    </section>
  );
}
