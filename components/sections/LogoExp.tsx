'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function LogoExp() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const ctx = gsap.context(() => {
      // Pin & Animate Logo
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: true,
            pin: true,
          },
        })
        .fromTo(
          imageRef.current,
          {
            scale: isMobile ? 2 : 4,
            filter: isMobile ? 'blur(10px)' : 'blur(20px)',
            opacity: 0,
          },
          {
            scale: 1,
            filter: 'blur(0px)',
            opacity: 1,
            ease: 'power2.out',
          }
        );

      // Fade in About Section
      gsap.from(aboutRef.current, {
        opacity: 0,
        y: 20,
        duration: 1.5,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: isMobile ? 'top 90%' : 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Fade in Mission Section
      gsap.from(missionRef.current, {
        opacity: 0,
        y: 20,
        duration: 2,
        scrollTrigger: {
          trigger: missionRef.current,
          start: isMobile ? 'top 90%' : 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Logo Section */}
      <section
        ref={sectionRef}
        className='relative flex items-center justify-center w-full h-screen bg-black overflow-hidden'
      >
        {/* Extra spacing before scroll takes over */}
        <div className='absolute top-0 w-full h-[200vh]'></div>

        <div ref={imageRef} className='z-20 will-change-transform'>
          <Image
            alt='logoexplaining'
            src='/assets/whitelogo.png'
            width={320}
            height={320}
            className='object-contain'
            priority
          />
        </div>
      </section>

      {/* Content Block 1: More About the Logo
      <section ref={aboutRef} className='px-4 py-20 text-white bg-black text-center md:px-6'>
        <h2 className='mb-6 text-3xl font-semibold'>More About the Logo</h2>
        <p className='max-w-3xl mx-auto text-base leading-7 md:text-lg md:leading-8'>
          Our logo represents depth, transformation, and clarity. The evolving shapes reflect our
          dynamic approach, while the bold geometry signifies direction and growth.
        </p>
      </section>

      Content Block 2: Our Mission
      <section ref={missionRef} className='px-4 py-20 text-black bg-white text-center md:px-6'>
        <h2 className='mb-6 text-3xl font-semibold'>Our Mission</h2>
        <p className='max-w-3xl mx-auto text-base leading-7 md:text-lg md:leading-8'>
          We aim to empower students with vision, purpose, and clarity. Our unique blend of empathy
          and expertise helps individuals thrive globally through education and transformation.
        </p>
      </section> */}
    </div>
  );
}

export default LogoExp;
