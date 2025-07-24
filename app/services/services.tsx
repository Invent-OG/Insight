'use client';

import { useState, useRef } from 'react';
import { MdSupportAgent, MdSchool, MdFlight, MdWork, MdHome, MdAttachMoney } from 'react-icons/md';
import { GiDiploma, GiGraduateCap } from 'react-icons/gi';
import { IoDocumentText } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ServicesHero from '@/components/sections/ServicesHero';
import { CldImage } from 'next-cloudinary'; // ensure this is imported

import 'aos/dist/aos.css';
import ServicesSection from '@/components/sections/ServicesSection';

const services = [
  {
    icon: <MdSupportAgent />,
    image: 'counselling_program_discovery_hc0ill',
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

export default function Services() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  // ✅ Smooth scroll handler
  const scrollToCards = () => {
    if (cardsRef.current) {
      const elementPosition = cardsRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleExplore = (route?: string) => {
    if (route) router.push(route);
  };

  return (
    <main className='min-h-screen w-full text-gray-900'>
      {/* ✅ Pass scrollToCards to ServicesHero */}
      <ServicesHero scrollToCards={scrollToCards} />

      <>
        <ServicesSection />
      </>
    </main>
  );
}
