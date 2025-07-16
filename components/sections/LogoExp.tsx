'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function LogoExp() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const blackRef = useRef(null);
  const whiteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo zoom-in and pin
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          scale: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'center center',
            end: 'bottom center',
            scrub: true,
            pin: true,
          },
        }
      );

      // Background transition to dark
      gsap.to(sectionRef.current, {
        backgroundColor: '#1a1a1a',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Slide white section over black section
      gsap.fromTo(
        whiteRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: blackRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Logo Zoom Section */}
      <section
        ref={sectionRef}
        className='relative flex items-center justify-center w-full h-screen bg-black'
      >
        <div ref={imageRef} className='z-10'>
          <Image
            alt='logoexplaining'
            src='/assets/whitelogo.png'
            width={300}
            height={300}
            className='object-contain'
          />
        </div>
      </section>

      {/* Black + White Scroll Section */}
      <section
        ref={blackRef}
        className='relative flex items-center justify-center min-h-screen overflow-hidden text-white bg-black'
      >
        {/* Black Content */}
        <div className='z-10 max-w-3xl px-4 text-base leading-7 md:text-lg md:leading-8 md:px-6'>
          <h2 className='mb-6 text-3xl font-semibold text-center'>More About the Logo</h2>
          <p className='text-center'>
            Our logo symbolizes strength, unity, and forward-thinking innovation. The curved
            elements represent a global presence and movement, while the sharp points denote
            direction and growth.
          </p>
        </div>

        {/* White Section slides over */}
        <div
          ref={whiteRef}
          className='absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full text-black bg-white'
        >
          <div className='z-10 max-w-3xl px-4 text-base leading-7 md:text-lg md:leading-8 md:px-6'>
            <h2 className='mb-6 text-3xl font-semibold text-center'>Our Mission</h2>
            <p className='text-center'>
              We empower students and professionals with the knowledge, tools, and guidance they
              need to succeed on the global stage. From education consulting to international
              partnerships, our team drives success through innovation and integrity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default LogoExp;
