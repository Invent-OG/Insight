'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CoursesHeroProps {
  scrollToCards: () => void;
}
export default function CoursesHero({ scrollToCards }: CoursesHeroProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className='relative flex items-center justify-center min-h-screen px-6 sm:px-12 bg-[#e3eefc] overflow-hidden text-center'
      style={{
        backgroundImage: isMobile
          ? "url('/assets/course/courses and countries page.webp')"
          : "url('/assets/course/courses and countries page.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      }}
    >
      {/* Glass Background Overlay */}
      <div className='absolute inset-0 z-0 bg-white/40 backdrop-blur-sm' />

      {/* Content */}
      <div className='relative z-10 max-w-3xl'>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='text-4xl sm:text-5xl md:text-5xl font-bold leading-tight text-gray-900'
        >
          Top Courses to <span className='text-primary'>Study Abroad</span>
        </motion.h1>

        <div className='w-20 h-1 mx-auto my-6 bg-red-600 rounded-full animate-pulse' />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className='px-2 text-xl italic font-medium text-gray-900 sm:text-lg md:text-xl sm:px-8'
        >
          Discover the best programs for business, law, technology, and design in 12+ countries —
          tailored to your dreams and goals.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          onClick={scrollToCards}
          className='px-6 py-3 mt-10 text-lg font-semibold text-white transition rounded-lg bg-primary hover:bg-transparent hover:border hover:text-black hover:border-black'
        >
          Explore Programs
        </motion.button>
      </div>
    </section>
  );
}
