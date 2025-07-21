'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import 'aos/dist/aos.css';
import { RoadmapSection } from '@/components/sections/OurCoreValues';
import OurServicesInfo from '@/components/sections/OurServicesInfo';
import OurTeam from '@/components/sections/OurTeam';
import AboutHero from '@/components/sections/AboutHero';
import LogoExp from '@/components/sections/LogoExp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 2.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'center bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Disable fixed background on mobile/iPhone
      document.documentElement.style.setProperty('--bg-attachment', 'scroll');
      return;
    }

    // On desktop, enable parallax effect by updating background position on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const bg = document.querySelector('.hero');
      if (bg instanceof HTMLElement) {
        bg.style.backgroundPosition = `center ${scrolled * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <main className=' text-white min-h-screen relative'>
        <div className='relative h-screen w-screen '>
          {/* <LampDemo /> */}
          <AboutHero />
        </div>

        {/* Hero  sub content */}
        <section
          className='hero flex items-center min-h-screen filter brightness-95 bg-center bg-cover px-6 md:px-12 relative overflow-hidden bg-white'
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/925743/pexels-photo-925743.jpeg')`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'contain',
            backgroundPosition: 'top center',
          }}
        >
          <style jsx>{`
            @media (min-width: 1024px) {
              .hero {
                min-height: 100vh;
              }
            }
          `}</style>

          <motion.div
            className='max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center relative z-10'
            initial='hidden'
            animate='visible'
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.25, when: 'beforeChildren' },
              },
            }}
          >
            {/* Left: Image animation */}
            <motion.div
              className='w-full md:w-1/2 flex justify-center'
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1, ease: 'easeOut' },
                },
              }}
            >
              <Image
                src='/assets/about/Pathway to international education (about page).webp'
                alt='International education'
                width={384} // md:w-96 = 384px
                height={384} // md:h-96 = 384px
                className='object-cover rounded-lg w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 shadow-lg'
                priority // Optional: for above-the-fold image optimization
              />
            </motion.div>

            {/* Right: Text animation */}
            <motion.div
              className='w-full md:w-1/2 text-white flex flex-col items-start'
              variants={{
                hidden: { opacity: 0, x: 60 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { type: 'spring', stiffness: 120, damping: 20 },
                },
              }}
            >
              <h2 className='lg:text-4xl md:text-4xl text-2xl font-bold mb-6 leading-snug text-left'>
                Your pathway to{' '}
                <span className='text-primary text-nowrap'>international education</span>
              </h2>

              <motion.p
                className='text-lg sm:text-lg lg:text-xl text-white leading-snug max-w-xl text-left'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                At Insight Educator & Abroad Services, we believe in “Insight” — the ability to see
                beyond the obvious, understand deeply, and make informed decisions. Guided by this
                principle, we offer comprehensive study abroad consultancy services to students in
                Coimbatore and beyond, empowering them to achieve their global education dreams.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Overlay */}
          <div className='absolute inset-0 bg-black bg-opacity-40 z-0'></div>
        </section>

        {/* Founder Section */}
        <div className='lg:py-10 py-8'>
          <h4 className='uppercase text-sm lg:text-base tracking-[0.20em] text-primary text-center font-medium text-shadow-sm'>
            — founder —
          </h4>

          <section
            ref={sectionRef}
            className='relative lg:py-20 lg:mt-10 max-w-5xl mx-auto px-6 py-8 flex flex-col-reverse md:flex-row items-center gap-10 bg-white overflow-hidden'
          >
            {/* SVG Background Wave */}
            <div className='absolute lg:bottom-20 bottom-0 left-0 w-full z-0 pointer-events-none'>
              <svg
                viewBox='0 0 1440 320'
                className='fill-current text-red-100'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0,288L144,256L288,160L432,192L576,224L720,160L864,96L1008,160L1152,96L1296,160L1440,128L1440,320L1296,320L1152,320L1008,320L864,320L720,320L576,320L432,320L288,320L144,320L0,320Z' />
              </svg>
            </div>

            {/* Text Block */}
            <motion.blockquote
              initial={{ x: -50, opacity: 0, rotate: -2 }}
              whileInView={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className='relative text-black italic text-lg border-l-4 border-red-600 pl-6 md:w-2/3 z-10'
            >
              “Our founder, <span className='text-red-600 font-semibold not-italic'>Neshika</span>
              , brings a wealth of personal and professional experience to the table. Having pursued
              her education in the UK and being an IELTS-certified trainer from Trinity University,
              she understands firsthand the challenges and opportunities international students
              face. Her passion for education and commitment to student success drives our team to
              deliver expert, personalized guidance every step of the way.”
              <br />
              <br />
              <span className='hidden md:inline text-red-600 font-semibold not-italic'>
                — Founder Neshika
              </span>
            </motion.blockquote>

            {/* Founder Image */}
            <div
              ref={imageRef}
              className='flex flex-col items-center md:items-start md:w-auto z-10'
            >
              <div className='relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-8 border-red-600/70 shadow-xl flex-shrink-0'>
                <Image
                  src='/assets/about/founder.jpeg'
                  alt='Founder Neshika'
                  width={240}
                  height={240}
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Founder name on mobile */}
              <span className='mt-4 text-red-600 font-semibold not-italic md:hidden'>
                — Founder Neshika
              </span>
            </div>
          </section>
        </div>

        {/* Founder Team section  */}
        <>
          <OurTeam />
        </>

        {/* Offerings Section */}
        <section className='relative lg:py-20 lg:mt-14 w-full overflow-x-hidden'>
          <OurServicesInfo />
        </section>
        {/* our core values  */}
        <>
          <RoadmapSection />
        </>
        {/* logo explain section   */}
        <>
          <LogoExp />
        </>
      </main>
    </>
  );
}
