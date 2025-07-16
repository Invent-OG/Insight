'use client';

import { useEffect, useState } from 'react';

export default function EnglishProgramHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className='flex flex-col text-center justify-center py-20 min-h-screen  text-white relative overflow-hidden'>
      {/* 🔲 Background Image with Parallax (desktop) and Scroll (mobile) */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: "url('/assets/englishprogram/heroenglishprogram.webp')",
          // backgroundAttachment: isMobile ? "scroll" : "fixed", // ✅ Parallax for desktop, scroll for mobile
          // backgroundPosition: isMobile ? "left 60%" : "right 10%", // ✅ Mobile-adjusted image positioning
          // backgroundSize: isMobile ? "350%" : "cover", // ✅ Zoom in for mobile, normal for desktop
        }}
      />

      {/* 🔲 Dark Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-80' />

      {/* 🔲 Content */}
      <div className='relative z-10 space-y-10 max-w-5xl mx-auto'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight mt-4 mb-8 opacity-0 blur-md animate-fade-in-up animation-delay-500'>
          Achieve <span className='text-primary'>English Excellence</span>
          <br />
          Personalized and <span className='text-primary'>Practical</span>
        </h1>

        <p className='max-w-2xl mx-auto text-xl leading-8 animate-fade-in-up animation-delay-500'>
          We offer one-on-one training led by experts
          <span className='italic font-semibold text-nowrap bg-primary text-white px-1 rounded drop-shadow-sm'>
            certified by Trinity College London
          </span>
          <span>
            . Go beyond theory with meaningful, result-oriented English coaching that’s tailored to
            your needs.
          </span>
        </p>
      </div>
    </section>
  );
}
