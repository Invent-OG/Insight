// components/sections/ServicesSection.tsx
'use client';

import { useState, useRef } from 'react';
import { MdSupportAgent, MdSchool, MdFlight, MdWork, MdHome, MdAttachMoney } from 'react-icons/md';
import { GiDiploma, GiGraduateCap } from 'react-icons/gi';
import { IoDocumentText } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CldImage } from 'next-cloudinary';

const services = [
  {
    icon: <MdSupportAgent />,
    image: 'Counselling_and_program_discovery_wbn4aw',
    tabTitle: 'Counselling',
    title: 'Counselling & Program Discovery',
    description:
      'Having trouble deciding on a course or country? We’ll help you explore your options based on your interests, background, and future goals. Our experienced in finding the academic path that suits you best.',
  },
  {
    icon: <MdSchool />,
    image: 'IELTS_training_gkioj1',
    tabTitle: 'IELTS Training',
    title: 'IELTS, Duolingo, & PTE Training',
    description:
      'We offer personalized training for IELTS, Duolingo, and PTE exams to help you meet language requirements with confidence. We also identify universities accepting MOI-based waivers or alternative tests, and guide you through the documentation process.',
    route: '/english-programs',
  },
  {
    icon: <IoDocumentText />,
    image: 'SOP_writing_vopuz0',
    tabTitle: 'SOP Writing',
    title: 'SOP Writing',
    description:
      'Your Statement of Purpose is your story — and we help you tell it well. We craft compelling, authentic SOPs that highlight your goals, strengths, and personality — no templates, just your true voice.',
  },
  {
    icon: <MdAttachMoney />,
    image: 'Financial_Guidance_Documents_vtlk3m',
    tabTitle: 'Financial Guidance',
    title: 'Financial & Loan Guidance',
    description:
      'Studying abroad is a big investment, and we make it manageable. Get help understanding tuition, living expenses, and securing scholarships or education loans (collateral & non-collateral) from public and private banks.',
    route: '/loan_assistance',
  },
  {
    icon: <GiDiploma />,
    image: 'Visa_assistance_pyx8qd',
    tabTitle: 'Visa Assistance',
    title: 'Visa Process Assistance',
    description:
      'Navigating the visa process can be overwhelming — we simplify it. From document prep to interview training, we ensure your student visa application is complete, accurate, and on time.',
  },
  {
    icon: <MdFlight />,
    image: 'flight_booking_p3qnqp',
    tabTitle: 'Flight Booking',
    title: 'Flight Ticket Booking',
    description:
      'We assist in booking affordable international flights that align with your visa timelines and university schedules — so your travel is one less thing to stress about.',
  },
  {
    icon: <GiGraduateCap />,
    image: 'pre_depature_rd1chz',
    tabTitle: 'Pre-Departure',
    title: 'Pre-Departure & Transition Support',
    description:
      'We prepare you for life abroad with travel planning, cultural insights, and packing tips. Upon arrival, we assist with airport pickup, local orientation, and housing support to help you settle smoothly.',
  },
  {
    icon: <MdHome />,
    image: 'accomodation_grw6zn',
    tabTitle: 'Accommodation',
    title: 'Accommodation Arrangements',
    description:
      'Find reliable, safe, and budget-friendly housing — whether university dorms or private rentals. We help you feel at home in your new country from day one.',
  },
  {
    icon: <MdWork />,
    image: 'part_time_jhofex',
    tabTitle: 'Part-Time Jobs',
    title: 'Part-Time Job Guidance',
    description:
      'Gain work experience and manage expenses while studying. We help you understand local job rules, find flexible part-time roles, and balance work with academics.',
  },
];

export default function ServicesSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const handleExplore = (route?: string) => {
    if (route) router.push(route);
  };

  return (
    <section ref={cardsRef} className='relative min-h-screen flex items-center justify-center'>
      <div className='relative z-10 px-4 sm:px-6 md:px-12 py-10 max-w-7xl w-full mx-auto'>
        <h4 className='uppercase text-sm lg:text-base tracking-[0.20em]  text-primary text-center font-medium text-shadow-sm'>
          — Services —
        </h4>
        <h2 className='lg:text-4xl md:text-4xl text-3xl py-6 font-bold text-center text-black leading-tight'>
          What We <span className='text-primary'>Offer</span>
        </h2>

        <div className='w-full lg:mb-10 mb-4 overflow-hidden'>
          <div className='flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 overflow-x-auto sm:overflow-visible'>
            {services.map((service, idx) => {
              const isFeatured =
                service.tabTitle === 'IELTS Training' || service.tabTitle === 'Financial Guidance';

              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex-shrink-0 w-[260px] sm:w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 ${
                    idx === activeIndex
                      ? 'bg-primary/10 shadow-md'
                      : 'bg-white hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  {isFeatured && (
                    <span className='absolute -top-2 -right-2 text-[10px] uppercase font-semibold tracking-wide px-2 py-[2px] bg-gradient-to-r from-primary to-orange-400 text-white rounded-full shadow-sm'>
                      Featured
                    </span>
                  )}

                  <div
                    className={`p-2 rounded-md transition-colors duration-300 ${
                      idx === activeIndex ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                    }`}
                  >
                    {service.icon}
                  </div>

                  <div className='flex-1'>
                    <p
                      className={`font-semibold text-sm transition-colors ${
                        idx === activeIndex ? 'text-primary' : 'text-gray-800'
                      }`}
                    >
                      {service.tabTitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Card */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className='relative grid md:grid-cols-2 overflow-hidden max-w-6xl mx-auto shadow-2xl bg-white'
        >
          {/* Left - Image */}
          <div className='relative h-72 md:h-auto w-full overflow-hidden'>
            <div className='w-full h-full relative'>
              <CldImage
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                fill
                crop='fit'
                className='object-cover scale-105'
                sizes='100vw'
                loading='lazy'
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className='relative flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 max-w-6xl mx-auto'>
            <div className='bg-primary text-white flex flex-col justify-center items-center w-full md:max-w-[120px] py-10 px-4 relative'>
              <div className='mb-6 bg-white text-primary w-14 h-14 flex items-center justify-center rounded-full shadow-md text-3xl'>
                {services[activeIndex].icon}
              </div>
            </div>

            <div className='relative flex-1 p-8 sm:p-10 md:p-12 space-y-6 overflow-hidden'>
              <svg
                className='absolute top-0 right-0 w-32 h-32 text-primary/10'
                viewBox='0 0 200 200'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
              >
                <path d='M46.6,-66.3C60.7,-56.2,71.8,-40.4,75.5,-23.5C79.2,-6.7,75.4,11.3,67.8,26.5C60.2,41.6,48.9,54,35.4,63.3C21.8,72.6,10.9,78.9,-2.2,82C-15.3,85,-30.6,84.8,-44.3,78.4C-58,72,-70,59.5,-74.6,44.8C-79.2,30.1,-76.5,13.1,-75.2,-5.5C-73.9,-24.2,-74,-44.4,-63.2,-56.1C-52.3,-67.7,-30.5,-70.7,-10.7,-67.6C9,-64.5,18,-55.4,46.6,-66.3Z' />
              </svg>

              <h3 className='text-3xl font-bold text-gray-800 relative z-10'>
                {services[activeIndex].title}
              </h3>
              <div className='w-14 h-1 bg-primary rounded-full relative z-10' />
              <p className='text-gray-600 text-base sm:text-lg leading-relaxed relative z-10'>
                {services[activeIndex].description}
              </p>

              {services[activeIndex].route && (
                <button
                  onClick={() => handleExplore(services[activeIndex].route)}
                  className='mt-4 inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold text-base hover:bg-primary/90 transition-all relative z-10'
                >
                  Learn More
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
