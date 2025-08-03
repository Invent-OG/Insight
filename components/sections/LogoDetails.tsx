// 'use client';

// import React, { useRef, useEffect, useState } from 'react';
// import Image from 'next/image';
// import gsap from 'gsap';

// const sections = [
//   {
//     image: '/assets/logos/logo2.webp',
//     title: 'The Central Figure',
//     content:
//       'The central figure symbolizes “I”, with the cap and bulb representing knowledge and growth.',
//   },
//   {
//     image: '/assets/logos/logo3.webp',
//     title: 'Butterfly Symbolism',
//     content:
//       'Its wings feature the book for educational knowledge, pillar for a strong foundation, money symbol for financial independence, and phoenix for resilience and overcoming challenges.',
//   },
//   {
//     image: '/assets/logos/logo4.webp',
//     title: 'Global Dome',
//     content:
//       'Symbolizes our international presence and expertise in guiding students toward global education opportunities.',
//   },
//   {
//     image: '/assets/logos/logo5.webp',
//     title: 'Surrounding Stars',
//     content: 'Represents excellence, guidance, and global opportunities.',
//   },
//   {
//     image: '/assets/logos/logo1.webp',
//     title: 'Overall',
//     content:
//       "The INSIGHT logo represents a student's journey of growth and transformation into a confident, knowledgeable, and globally empowered achiever — supported by freedom, education, resilience, and international opportunities.",
//   },
// ];

// export default function LogoDetails() {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const logoRef = useRef<HTMLDivElement | null>(null);
//   const contentRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
//       const scrollTop = window.scrollY;
//       const offset = scrollTop - containerTop;
//       const sectionHeight = window.innerHeight;
//       const index = Math.floor(offset / sectionHeight);

//       if (index >= 0 && index < sections.length && index !== currentIndex) {
//         setCurrentIndex(index);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [currentIndex]);

//   // Animate on currentIndex change
//   useEffect(() => {
//     if (logoRef.current && contentRef.current) {
//       gsap.fromTo(
//         logoRef.current,
//         { opacity: 0, scale: 0.8, y: 50 },
//         { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' }
//       );

//       gsap.fromTo(
//         contentRef.current,
//         { opacity: 0, y: 40 },
//         { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.1 }
//       );
//     }
//   }, [currentIndex]);

//   return (
//     <div
//       ref={containerRef}
//       className='relative bg-black'
//       style={{ height: `${sections.length * 100}vh` }}
//     >
//       {/* Sticky Section */}
//       <div className='sticky top-0 h-screen flex flex-col items-center justify-center px-6 md:px-20 text-white text-center overflow-hidden'>
//         {/* Logo */}
//         <div className='w-[300px] h-[300px] relative transition-opacity duration-500'>
//           <Image
//             src={sections[currentIndex].image}
//             alt={`Logo ${currentIndex + 1}`}
//             fill
//             className='object-contain'
//             priority
//           />
//         </div>

//         {/* Content */}
//         <div ref={contentRef} className='max-w-3xl will-change-transform'>
//           <h2 className='text-3xl md:text-4xl font-semibold mb-4'>
//             {sections[currentIndex].title}
//           </h2>
//           <p className='text-lg md:text-xl leading-relaxed text-white/90'>
//             {sections[currentIndex].content}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
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

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
      const scrollTop = window.scrollY;
      const offset = scrollTop - containerTop;
      const sectionHeight = window.innerHeight;
      const index = Math.floor(offset / sectionHeight);

      if (index >= 0 && index < sections.length && index !== currentIndex) {
        setCurrentIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

  // Animate logo and content on currentIndex change
  useEffect(() => {
    if (logoRef.current && contentRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
        }
      ).fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.4' // overlap animation
      );
    }
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className='relative bg-black'
      style={{ height: `${sections.length * 100}vh` }}
    >
      {/* Sticky Section */}
      <div className='sticky top-0 h-screen flex flex-col items-center justify-center px-6 md:px-20 text-white text-center overflow-hidden'>
        {/* Logo */}
        <div ref={logoRef} className='w-[300px] h-[300px] relative transition-opacity duration-500'>
          <Image
            src={sections[currentIndex].image}
            alt={`Logo ${currentIndex + 1}`}
            fill
            className='object-contain'
            priority
          />
        </div>

        {/* Content */}
        <div ref={contentRef} className='max-w-3xl will-change-transform'>
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
