'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  CheckCircle,
  BookOpenCheck,
  Globe,
  School,
  BadgeCheck,
  PlaneTakeoff,
  Home,
  Clock,
  Users,
  Target,
} from 'lucide-react';
import Image from 'next/image';

const bulletItems = [
  {
    icon: BookOpenCheck,
    text: 'IELTS coaching in Coimbatore by certified professionals',
  },
  { icon: School, text: 'Personalized study abroad counselling' },
  {
    icon: Globe,
    text: 'Assistance with university applications and admissions',
  },
  {
    icon: BadgeCheck,
    text: 'Help with securing scholarships and financial aid',
  },
  { icon: CheckCircle, text: 'Complete student visa support and guidance' },
  {
    icon: PlaneTakeoff,
    text: 'Flight booking, accommodation, and airport pickup services',
  },
  { icon: Home, text: 'Pre-departure and post-arrival support' },
  { icon: Clock, text: 'Part- Time Guidance' },
];

const icons = [Globe, School, Users, Target];

const paragraphs = [
  `Whether you're aspiring to study in the UK, USA, Canada, Australia, New Zealand, Ireland, Europe, UAE, Singapore, or Malaysia, we provide end-to-end support to make your journey smooth and stress-free.`,
  `We work with top-ranked universities and a wide range of academic programs, ensuring that your choices align with your career goals and personal preferences. 
    <span class='text-red-600 font-semibold'>We never limit your options—instead, we empower you with choices that truly fit your ambitions.</span>`,
  `At Insight, we pride ourselves on our professional, kind, and transparent approach. We’re always available to answer your questions—big or small—and we actively involve parents in the process to build trust and clarity. Our goal is to provide not just a service, but a life-changing experience.`,
  `Whether you're just beginning to explore your study abroad options or ready to start your application, we’re here to guide you from start to finish. Discover your path to international education with <span class='font-bold text-red-600'>Insight</span> — Coimbatore’s trusted study abroad consultants.`,
];

export default function OurServicesInfo() {
  const [tab, setTab] = useState('about');
  const [expandedCards, setExpandedCards] = useState(Array(paragraphs.length).fill(false));

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <section className='relative bg-white py-10 px-6 sm:px-10  overflow-hidden'>
      {/* Background SVG blob */}
      <div className='absolute top-[-100px] left-[-100px] z-0 opacity-10 pointer-events-none'>
        <svg viewBox='0 0 200 200' width='500' height='500'>
          <path
            fill='#f87171'
            d='M43.6,-69.4C57.5,-63.9,71.5,-53.6,76.4,-40.3C81.2,-27,76.9,-10.7,70.9,3.3C64.9,17.2,57.2,28.8,47.6,40.5C38,52.3,26.5,64.1,13.1,70.4C-0.3,76.7,-15.6,77.5,-30.6,72.8C-45.7,68.2,-60.6,57.9,-65.3,44.1C-70,30.3,-64.6,13.2,-63.3,-4.6C-61.9,-22.5,-64.7,-41.2,-57.1,-52.2C-49.5,-63.2,-31.5,-66.5,-15.2,-70.3C1.1,-74.2,22.2,-78.9,43.6,-69.4Z'
            transform='translate(100 100)'
          />
        </svg>
      </div>

      {/* Tabs */}
      <div className='relative z-10 max-w-6xl mx-auto mb-10 text-center'>
        <h4 className=' uppercase text-sm lg:text-base  tracking-[0.20em] text-primary text-center font-bold text-shadow-sm'>
          — Insight Cares —
        </h4>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-black py-2'>
          Our <span className='text-primary'> Services</span>
        </h2>
        <div className='flex justify-center py-2'>
          <div className='inline-flex bg-gray-100 rounded-full p-1 shadow-inner border border-gray-200'>
            <button
              onClick={() => setTab('about')}
              className={`px-6  text-sm font-medium rounded-full transition-all duration-300
        ${
          tab === 'about' ? 'bg-red-600 text-white shadow-md' : 'text-gray-700 hover:text-red-600'
        }`}
            >
              About Insight
            </button>
            <button
              onClick={() => setTab('services')}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300
        ${
          tab === 'services'
            ? 'bg-red-600 text-white shadow-md'
            : 'text-gray-700 hover:text-red-600'
        }`}
            >
              Our Services
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode='wait'>
        {tab === 'about' ? (
          <motion.div
            key='about'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className='relative z-10 max-w-5xl mx-auto space-y-10'
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className='rounded-3xl overflow-hidden shadow-lg mx-auto lg:w-3/5'
            >
              <Image
                src='/assets/about/Our services (about page).webp'
                alt='Study Abroad'
                width={1200} // Adjust based on your layout (this is a safe large default)
                height={600} // You can adjust based on aspect ratio
                className='w-full h-auto object-cover'
                style={{ width: '100%', height: 'auto' }} // Ensures responsive full-width with automatic height
              />
            </motion.div>

            {/* Timeline */}
            <section className='relative max-w-6xl mx-auto px-6 sm:px-10 py-16'>
              <div className='absolute left-8 top-0 bottom-0 w-[2px] bg-red-200 z-0' />
              <div className='relative z-10 flex flex-col gap-16'>
                {paragraphs.map((text, i) => {
                  const Icon = icons[i];
                  return (
                    <motion.div
                      key={i}
                      className='relative flex items-start gap-6'
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2, duration: 0.6 }}
                      viewport={{ once: false }}
                    >
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                        viewport={{ once: false }}
                        className='flex flex-col items-center relative z-10'
                      >
                        <div className='w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md ring-4 ring-white mt-2'>
                          <Icon className='w-6 h-6' />
                        </div>
                      </motion.div>

                      {/* Text Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 + 0.1, duration: 0.6 }}
                        viewport={{ once: false }}
                        className='bg-zinc-50 border-l-[5px] border-r-[5px]  border-red-400 shadow-md rounded-xl p-6 text-[16.5px] leading-relaxed text-gray-800 w-full relative overflow-hidden group'
                      >
                        <div className='absolute top-4 right-4 text-red-400 text-xl opacity-20 group-hover:opacity-40 transition duration-500'>
                          <i className='fas fa-university' />
                        </div>

                        <div
                          className={`relative z-10 ${
                            expandedCards[i] ? '' : 'line-clamp-5'
                          } transition-all duration-300`}
                          dangerouslySetInnerHTML={{ __html: text }}
                        />

                        {text.length > 200 && (
                          <button
                            onClick={() => toggleExpand(i)}
                            className='mt-4 text-sm font-medium text-red-500 hover:underline focus:outline-none block md:hidden'
                          >
                            {expandedCards[i] ? 'Show Less' : 'Read More'}
                          </button>
                        )}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key='services'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='relative z-10 max-w-2xl mx-auto space-y-8 px-4'
          >
            {bulletItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: i * 0.2,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                className='relative pl-10 border-l-[3px] border-r-[3px] border-red-400 bg-white rounded-lg shadow-md p-6 group hover:shadow-lg transition'
              >
                {/* Glowing Icon Circle */}
                <div className='absolute -left-[25px] top-6 w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-red-400 text-red-600 shadow-md'>
                  <div className='absolute inset-0 rounded-full bg-red-300 opacity-30 blur-md animate-pulse' />
                  <item.icon className='relative z-10 w-5 h-5' />
                </div>

                {/* Text */}
                <p className='text-[16.5px] text-gray-800 leading-relaxed'>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
