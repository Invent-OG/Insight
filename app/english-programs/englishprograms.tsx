'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Lightbulb, Target, Rocket, Users, ShieldCheck, Star } from 'lucide-react';
import { Volume2, FileText, BookOpen, Presentation, Mic, Activity } from 'lucide-react';
import { CalendarCheck, UserCheck, Eye } from 'lucide-react';
import EnglishProgramHero from '@/components/sections/EnglishProgramHero';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.1,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        }
      );
    });
  }, []);
  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 90%',
          },
        }
      );
    }

    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftRef.current,
            start: 'top 85%',
          },
        }
      );
    }

    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 300,
      offset: 100,
      once: true,
    });
  }, []);
  const benefits = [
    'Not grammar-heavy – focus on test rules and smart strategies',
    'Customized practice sessions for individual needs',
    'Flexible timing and student comfort',
    'Regular feedback and progress tracking',
    'Personal mentorship & doubt-clearing sessions',
  ];
  const icons = [Lightbulb, Target, Rocket, Users, ShieldCheck, Star];

  return (
    <div>
      {/* Hero Section */}

      <EnglishProgramHero />

      {/* English Proficiency Tests */}
      <section
        // data-aos='zoom-in-down'
        // data-aos-anchor-placement='top-start'
        // data-aos-duration='2000'
        className='relative flex flex-col justify-center px-4 py-10 mx-auto overflow-hidden bg-gray-50'
      >
        <h4 className='uppercase text-sm lg:text-base tracking-[0.20em] text-primary text-center font-medium text-shadow-sm'>
          — test prep —
        </h4>
        <motion.h2
          className='relative z-10 py-2 mb-16  font-bold text-center text-black lg:text-4xl md:text-4xl text-2xl'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          English <span className='text-primary'>Proficiency</span> Test{' '}
          <span className='text-primary'>Preparation</span>
        </motion.h2>

        <div className='relative grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3 justify-items-center'>
          {[
            'IELTS – Academic & General',
            'PTE – Pearson Test of English',
            'Duolingo English Test',
          ].map((title, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className='relative h-full p-5 transition duration-300 bg-white border border-gray-300 shadow-xl rounded-xl hover:shadow-rose-400/50'>
                <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 to-primary rounded-t-xl'></div>
                <CardHeader className='mb-3'>
                  <h3 className='text-xl font-extrabold text-black'>{title}</h3>
                </CardHeader>
                <CardContent>
                  {index === 0 && (
                    <>
                      <p className='mb-4 text-gray-700'>
                        Training for both paper-based and computer-delivered tests. Covers
                        Listening, Reading, Writing, and Speaking.
                      </p>
                      <div className='space-y-2'>
                        <div className='flex items-center gap-2 text-gray-700'>
                          <span className='text-yellow-500'>⭐</span> Personalized one-on-one
                          sessions
                        </div>
                        <div className='flex items-center gap-2 text-gray-700'>
                          <span className='text-yellow-500'>⭐</span> Practice materials for all
                          modules
                        </div>
                        <div className='flex items-center gap-2 text-gray-700'>
                          <span className='text-yellow-500'>⭐</span> Mock tests with feedback
                        </div>
                        <div className='flex items-center gap-2 text-gray-700'>
                          <span className='text-yellow-500'>⭐</span> Targeted guidance to achieve
                          your band score
                        </div>
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <p className='mb-4 text-gray-700'>
                        Computer-based test with AI scoring system, recognized by institutions in
                        Australia, New Zealand, and more.
                      </p>
                      <div className='space-y-2'>
                        <div className='flex items-center gap-2 text-gray-700'>
                          <span className='text-yellow-500'>⭐</span> Digital test formats &
                          simulations
                        </div>
                        <div className='flex items-center gap-2 text-gray-700'>
                          <span className='text-yellow-500'>⭐</span> Module-specific practice
                        </div>
                        <div className='flex items-center gap-2 text-gray-700'>
                          <span className='text-yellow-500'>⭐</span> Time management tips
                        </div>
                      </div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <p className='mb-4 text-gray-700'>
                        Convenient online test accepted by many US and Canadian universities.
                      </p>
                      <div className='space-y-2'>
                        <div className='flex items-center gap-2 text-gray-700'>
                          <span className='text-yellow-500'>⭐</span> Adaptive test techniques
                        </div>
                        <div className='flex items-center gap-2 text-gray-700'>
                          <span className='text-yellow-500'>⭐</span> Speed & accuracy training
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Makes Us Different */}
      <section
        data-aos='fade-up'
        data-aos-anchor-placement='top-start'
        data-aos-duration='1000'
        className='relative py-10 overflow-hidden bg-white'
      >
        <h4 className='uppercase text-sm lg:text-base tracking-[0.20em] text-primary text-center font-medium text-shadow-sm'>
          — Our training —
        </h4>
        <div className='relative z-10 max-w-6xl px-4 py-2 mx-auto'>
          <h2 className='mb-16 font-bold text-center text-black lg:text-4xl md:text-4xl text-2xl'>
            What <span className='text-primary'>Makes</span> Our Training{' '}
            <span className='text-primary'>Different?</span>
          </h2>

          <div className='flex flex-col items-stretch gap-12 lg:flex-row '>
            <div className='flex items-center justify-center w-full lg:w-1/2'>
              <Image
                src='/assets/englishprogram/training.svg'
                alt='Online Training Illustration'
                width={500}
                height={400}
                className='w-full max-w-[500px] h-auto object-contain'
              />
            </div>

            <div className='flex flex-col justify-center w-full lg:w-1/2'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-14 '>
                {benefits.map((item, index) => {
                  const Icon = icons[index % icons.length]; // rotate icons if fewer than benefits
                  return (
                    <div
                      key={index}
                      ref={(el) => {
                        if (el) cardsRef.current[index] = el;
                      }}
                      className='relative p-6 lg:w-72 bg-white mx-auto rounded-2xl border border-white/90 shadow-lg bg-gradient-to-br from-white/10 to-white/5  transition-transform hover:scale-105 hover:rotate-[1deg] duration-300 flex items-center gap-4 min-h-[120px]'
                    >
                      <div className='p-2 rounded-full shadow-inner bg-black/10'>
                        <Icon className='w-6 h-6 text-primary' />
                      </div>
                      <p className='text-base leading-snug text-black'>{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* English Communication Classes */}
      <section className='relative py-10 overflow-hidden text-white'>
        <div
          className='absolute inset-0 bg-cover '
          style={{
            backgroundImage: "url('/assets/englishprogram/communicationclass.webp')",
          }}
        />
        <div className='absolute inset-0 bg-black/85 '></div>

        <div className='relative z-10 max-w-6xl px-4 mx-auto'>
          <h4 className='uppercase text-sm lg:text-base tracking-[0.20em] text-primary text-center font-medium text-shadow-sm'>
            — english classes —
          </h4>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='py-2 mb-16  font-bold text-center text-white lg:text-4xl md:text-4xl text-2xl'
          >
            English <span className='text-primary'>Communication</span> Classes
          </motion.h2>

          <div className='grid items-start gap-12 md:grid-cols-2'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <p className='text-lg leading-relaxed text-white'>
                Our English communication training is ideal for students, professionals, and anyone
                looking to gain fluency and confidence in spoken English.
              </p>

              <div>
                <h3 className='mb-2 text-xl font-semibold text-primary'>Our Method:</h3>
                <p className='mb-2 leading-relaxed text-white'>
                  We follow a{' '}
                  <span className='font-medium text-primary'>“speak first, learn rules later”</span>{' '}
                  approach.
                </p>
                <p className='mb-2 leading-relaxed text-white'>
                  Students begin with spoken practice in everyday situations – this builds natural
                  fluency and confidence.
                </p>
                <p className='leading-relaxed text-white'>
                  As they grow more comfortable, we introduce grammar, vocabulary, and sentence
                  patterns with clear usage-based explanations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='space-y-6 border border-gray-600 bg-[#111111]/80 p-8 rounded-xl shadow-md'
            >
              <h3 className='text-xl font-semibold text-primary'>Key Areas We Cover:</h3>

              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <div className='flex items-start space-x-2'>
                  <Volume2 className='w-5 h-5 mt-1 text-primary' />
                  <p className='text-white'>Spoken English and pronunciation</p>
                </div>

                <div className='flex items-start space-x-2'>
                  <FileText className='w-5 h-5 mt-1 text-primary' />
                  <p className='text-white'>Grammar and sentence framing</p>
                </div>

                <div className='flex items-start space-x-2'>
                  <BookOpen className='w-5 h-5 mt-1 text-primary' />
                  <p className='text-white'>Vocabulary development (basic to advanced)</p>
                </div>

                <div className='flex items-start space-x-2'>
                  <Presentation className='w-5 h-5 mt-1 text-primary' />
                  <p className='text-white'>Presentation and interview preparation</p>
                </div>

                <div className='flex items-start space-x-2'>
                  <Mic className='w-5 h-5 mt-1 text-primary' />
                  <p className='text-white'>Accent reduction and real-life speaking skills</p>
                </div>

                <div className='flex items-start space-x-2'>
                  <Activity className='w-5 h-5 mt-1 text-primary' />
                  <p className='text-white'>Real-time feedback and progress tracking</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* who can join us? */}
      <section className='relative w-full px-4 py-2 overflow-hidden text-black bg-white'>
        {/* Full-Width Black Themed SVG Background */}
        <svg
          className='absolute inset-0 w-full h-full'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='xMidYMid slice'
          fill='none'
          viewBox='0 0 1000 1000'
        >
          <defs>
            <radialGradient id='whiteFade' cx='50%' cy='50%' r='50%'>
              <stop offset='0%' stopColor='#ffffff' stopOpacity='0.4' />
              <stop offset='100%' stopColor='#ffffff' stopOpacity='0.1' />
            </radialGradient>
          </defs>

          {/* Radial gradient background */}
          <rect width='100%' height='100%' fill='url(#whiteFade)' />

          {/* White circle (top right) */}
          <circle cx='800' cy='200' r='180' fill='#1a1a1a' opacity='0.12' />

          {/* Light black circle (bottom left) */}
          <circle cx='200' cy='750' r='130' fill='#1a1a1a' opacity='0.08' />
        </svg>

        {/* Centered Content */}
        <div className='relative z-10 max-w-6xl p-6 mx-auto bg-transparent rounded-2xl sm:p-10'>
          <h4 className='uppercase text-sm lg:text-base tracking-[0.20em] text-primary text-center font-medium text-shadow-sm'>
            — join us —
          </h4>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='py-2 font-bold text-center text-black lg:text-4xl md:text-4xl text-2xl lg:py-0 mb-14'
          >
            Who Can <span className='text-primary'>Join?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='p-10 space-y-6 bg-transparent border-l-4 border-r-4 shadow-xl border-primary rounded-2xl'
          >
            <p className='text-lg leading-relaxed text-gray-800'>
              Everyone is welcome! Whether you're a{' '}
              <span className='font-semibold text-primary'>school student</span>,{' '}
              <span className='font-semibold text-primary'>graduate</span>,{' '}
              <span className='font-semibold text-primary'>working professional</span>,{' '}
              <span className='font-semibold text-primary'>homemaker</span>, or{' '}
              <span className='font-semibold text-primary'>elder</span>, we tailor the sessions to
              suit your goals.
            </p>

            <p className='leading-relaxed text-gray-800'>
              No prior knowledge is needed – we start from{' '}
              <span className='font-semibold text-primary'>your level</span> and build from there.
            </p>

            <div className='grid gap-4 pt-6 text-gray-800 border-t border-gray-300 md:grid-cols-3'>
              <div className='flex items-start p-4 space-x-3 bg-white border border-gray-300 shadow-sm rounded-xl'>
                <CalendarCheck className='w-6 h-6 mt-1 text-primary' />
                <span>
                  <span className='font-medium text-primary'>Flexible scheduling</span> based on
                  your convenience
                </span>
              </div>

              <div className='flex items-start p-4 space-x-3 bg-white border border-gray-300 shadow-sm rounded-xl'>
                <UserCheck className='w-6 h-6 mt-1 text-primary' />
                <span>
                  <span className='font-medium text-primary'>One-on-one attention</span> from
                  trained experts
                </span>
              </div>

              <div className='flex items-start p-4 space-x-3 bg-white border border-gray-300 shadow-sm rounded-xl'>
                <Eye className='w-6 h-6 mt-1 text-primary' />
                <span>
                  <span className='font-medium text-primary'>Demo session</span> available before
                  enrollment
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Insight */}
      <section className='flex items-center justify-center px-2 py-8 text-center bg-gray-50 lg:py-10 pb-14'>
        <motion.div
          className='max-w-2xl space-y-8'
          data-aos='flip-up'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className='mb-6  font-bold text-black lg:text-4xl md:text-4xl text-2xl'>
            Why <span className='text-primary'>Choose</span> Insight?
          </h2>
          <p className='py-2 mb-6 text-lg leading-relaxed text-black'>
            We don’t just <span className='font-semibold text-primary'>teach English</span> – we
            help you build
            <span className='font-semibold text-primary'> real-world communication skills</span>,
            boost your <span className='font-semibold text-primary'>confidence</span>, and prepare
            for
            <span className='font-semibold text-primary'> global opportunities</span>.
          </p>

          <p className='mb-6 text-lg leading-relaxed text-black'>
            Whether you're aiming for{' '}
            <span className='font-semibold text-primary'>test success</span> or
            <span className='font-semibold text-primary'> everyday fluency</span>,{' '}
            <span className='font-extrabold text-primary glow-text'>Insight</span> is here to guide
            you every step of the way.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
