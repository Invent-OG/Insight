'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const sections = [
  {
    image: '/assets/logos/logo2.webp',
    title: 'The Central Figure',
    content:
      'The central figure symbolizes “I”, with the cap and bulb representing knowledge and growth.',
  },
  {
    image: '/assets/logos/logo3.webp',
    title: 'Butterfly Symbolism',
    content:
      'Its wings feature the book for educational knowledge, pillar for a strong foundation, money symbol for financial independence, and phoenix for resilience and overcoming challenges.',
  },
  {
    image: '/assets/logos/logo4.webp',
    title: 'Global Dome',
    content:
      'Symbolizes our international presence and expertise in guiding students toward global education opportunities.',
  },
  {
    image: '/assets/logos/logo5.webp',
    title: 'Surrounding Stars',
    content: 'Represents excellence, guidance, and global opportunities.',
  },
  {
    image: '/assets/logos/logo1.webp',
    title: 'Overall',
    content:
      "The INSIGHT logo represents a student's journey of growth and transformation into a confident, knowledgeable, and globally empowered achiever — supported by freedom, education, resilience, and international opportunities.",
  },
];

export default function LogoDetails() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const logoRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Scroll handler for section index
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const scrollTop = window.scrollY;
      const offset = scrollTop - containerTop;
      const sectionHeight = window.innerHeight;
      let index = Math.floor(offset / sectionHeight);

      // Clamp index
      index = Math.max(0, Math.min(index, sections.length - 1));

      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

  // Animation effect for logo & text
  useEffect(() => {
    if (logoRef.current && contentRef.current) {
      // Kill any old tweens to prevent stacking
      gsap.killTweensOf([logoRef.current, contentRef.current]);

      const tl = gsap.timeline();

      // Logo blur + fade in
      tl.fromTo(
        logoRef.current,
        { opacity: 0, filter: 'blur(6px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power2.out',
        }
      ).fromTo(
        contentRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.6'
      );
    }
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className='relative bg-black'
      style={{ height: `${(sections.length + 1) * 100}vh` }} // +1 for last card sticky space
    >
      <div className='sticky top-0 h-screen flex flex-col items-center justify-center px-6 md:px-20 text-white text-center overflow-hidden'>
        {/* Logo */}
        <div ref={logoRef} className='relative  duration-500'>
          <Image
            src={sections[currentIndex].image}
            alt={`Logo ${currentIndex + 1}`}
            height={300}
            width={300}
            loading='eager'
            className='object-contain'
            priority
          />
        </div>

        {/* Content */}
        <div
          key={currentIndex} // Force remount to avoid repeated animations
          ref={contentRef}
          className='max-w-3xl h-[20vh]'
        >
          <h2 className='text-3xl md:text-4xl font-semibold mb-4'>
            {sections[currentIndex].title}
          </h2>
          <p className='text-lg md:text-xl leading-relaxed text-white/90'>
            {sections[currentIndex].content}
          </p>
        </div>
      </div>
    </div>
  );
}
