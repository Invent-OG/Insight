'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    image: '/assets/whitelogo.png',
    title: 'Top Ranked Universities',
    content:
      'We collaborate with globally recognized institutions that offer high academic standards, ensuring you get the best education.',
  },
  {
    image: '/assets/whitelogo.png',
    title: 'Diverse Course Options',
    content:
      'Choose from a wide range of programs tailored to match your passion and career goals.',
  },
  {
    image: '/assets/whitelogo.png',
    title: 'Global Opportunities',
    content:
      'Experience the culture and networks of international education while boosting your global career prospects.',
  },
  {
    image: '/assets/whitelogo.png',
    title: 'Trusted Guidance',
    content:
      'Our team helps you every step of the way—from application to visa—ensuring a smooth transition.',
  },
];

export default function LogoDetails() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLElement | null)[]>([]);
  const contentRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sections.forEach((_, i) => {
        const image = imageRefs.current[i];
        const content = contentRefs.current[i];
        const heading = content?.querySelector('h2');
        const paragraph = content?.querySelector('p');

        let imageAnim;

        switch (i) {
          case 0:
            imageAnim = gsap.fromTo(
              image,
              { scale: 2, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: image,
                  start: 'center center',
                  end: '+=100%',
                  scrub: true,
                  pin: true,
                },
              }
            );
            break;

          case 1:
            imageAnim = gsap.fromTo(
              image,
              { rotation: 45, opacity: 0, scale: 0.8 },
              {
                rotation: 0,
                opacity: 1,
                scale: 1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: image,
                  start: 'center center',
                  end: '+=100%',
                  scrub: true,
                  pin: true,
                },
              }
            );
            break;

          case 2:
            imageAnim = gsap.fromTo(
              image,
              { x: '-100%', opacity: 0 },
              {
                x: '0%',
                opacity: 1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: image,
                  start: 'top top',
                  end: '+=100%',
                  scrub: true,
                  pin: true,
                },
              }
            );
            break;

          case 3:
            imageAnim = gsap.fromTo(
              image,
              { scale: 1.4, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: image,
                  start: 'center center',
                  end: '+=100%',
                  scrub: true,
                  pin: true,
                },
              }
            );
            break;
        }

        // Background fade
        gsap.fromTo(
          content,
          { background: 'linear-gradient(to top, #ffffff00, #ffffff)' },
          {
            background: 'linear-gradient(to top, #ffffff, #ffffff)',
            scrollTrigger: {
              trigger: content,
              start: 'top bottom',
              end: 'top center',
              scrub: true,
            },
          }
        );

        // Text fade-in
        if (heading && paragraph) {
          gsap.from([heading, paragraph], {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: content,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className='relative w-full overflow-x-hidden bg-black text-white'>
      {sections.map((sec, i) => (
        <div key={i}>
          {/* Image Section */}
          <section
            ref={(el) => {
              imageRefs.current[i] = el;
            }}
            className='relative w-full h-screen flex items-center justify-center overflow-hidden'
          >
            <div className='z-10 w-[300px] h-[300px] md:w-[450px] md:h-[450px] relative'>
              <Image
                src={sec.image}
                alt={`Logo ${i + 1}`}
                fill
                className='object-contain'
                priority
              />
            </div>
          </section>

          {/* Overlapping Content */}
          <section
            ref={(el) => {
              contentRefs.current[i] = el;
            }}
            className='relative -mt-[25vh] z-20 bg-white px-6 py-24 text-center md:px-12 rounded-t-[50px] shadow-xl text-black'
          >
            <div className='max-w-3xl mx-auto'>
              <h2 className='mb-4 text-3xl font-bold md:text-4xl'>{sec.title}</h2>
              <p className='text-lg leading-relaxed md:text-xl text-gray-700'>{sec.content}</p>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
