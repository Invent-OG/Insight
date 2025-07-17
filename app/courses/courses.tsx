'use client';
import React, { useEffect, useRef, useState } from 'react';
import { CldImage } from 'next-cloudinary'; // ensure this is imported
import WhyTheseCountries from '@/components/sections/WhyTheseCountries';
import {
  FaBriefcase,
  FaCog,
  FaRobot,
  FaHospital,
  FaGlobe,
  FaPaintBrush,
  FaBalanceScale,
  FaGraduationCap,
  FaBuilding,
  FaTruck,
  FaFlask,
  FaPlane,
  FaBook,
  FaNewspaper,
  FaGavel,
  FaHeartbeat,
} from 'react-icons/fa';

const categoryIcons = {
  'Business Management Courses Abroad': <FaBriefcase className='w-6 h-6 text-red-600' />,
  'Engineering and Technology Programs': <FaCog className='w-6 h-6 text-red-600' />,
  'Data Science and Artificial Intelligence': <FaRobot className='w-6 h-6 text-red-600' />,
  'Health and Medical Sciences': <FaHospital className='w-6 h-6 text-red-600' />,
  'Social Sciences and Humanities': <FaGlobe className='w-6 h-6 text-red-600' />,
  'Creative Arts and Design': <FaPaintBrush className='w-6 h-6 text-red-600' />,
  Law: <FaBalanceScale className='w-6 h-6 text-red-600' />,
  Education: <FaGraduationCap className='w-6 h-6 text-red-600' />,
  'Architecture and Built Environment': <FaBuilding className='w-6 h-6 text-red-600' />,
  'Logistics and Supply Chain Management': <FaTruck className='w-6 h-6 text-red-600' />,
  'Science and Technology': <FaFlask className='w-6 h-6 text-red-600' />,
  'Hospitality and Tourism': <FaPlane className='w-6 h-6 text-red-600' />,
  'Library and Information Science': <FaBook className='w-6 h-6 text-red-600' />,
  'Media, Journalism, and Communication': <FaNewspaper className='w-6 h-6 text-red-600' />,
  'Philosophy, Politics, and Economics (PPE)': <FaGavel className='w-6 h-6 text-red-600' />,
  'MBBS Courses Abroad': <FaHeartbeat className='w-6 h-6 text-red-600' />,
};

import Image from 'next/image';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountriesCarousel from '@/components/sections/CountriesCarousel';
import CoursesHero from '@/components/sections/CoursesHero';

// Animation variants for framer-motion
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const CoursesPage = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const scrollToCards = () => {
    if (cardsRef.current) {
      const yOffset = -80;
      const y = cardsRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    function onScroll() {
      // Show content after user scrolls down 100px (adjust as needed)
      if (window.scrollY > 100) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 640);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 300,
      offset: 100,
      once: true,
    });
  }, []);
  return (
    <main className='mx-auto '>
      {/* Meta Title and Description */}
      <CoursesHero scrollToCards={scrollToCards} />

      {/* Combined Courses Section */}
      <div>
        <section
          ref={cardsRef}
          data-aos='zoom-in-up'
          data-aos-duration='1000'
          data-aos-delay='100'
          className='max-w-4xl px-4 py-10 mx-auto mb-16 rounded-lg sm:px-6 md:px-12'
        >
          <h4 className='uppercase text-sm lg:text-base tracking-[0.20em] text-primary text-center font-bold text-shadow-sm'>
            — courses —
          </h4>
          <h2 className='py-4 mb-4 text-3xl font-bold tracking-wide text-center text-black sm:text-4xl md:text-5xl lg:mb-14'>
            Explore <span className='text-primary'>Top Courses Abroad</span>
          </h2>

          <div className='overflow-hidden divide-gray-700 shadow-lg rounded-xl'>
            {/* Now add the rest of the categories dynamically */}
            {[
              {
                category: 'Business Management Courses Abroad',
                image: 'Business_management_course_syxhse',
                description:
                  'Unlock global business opportunities with world-class business education. Business management courses abroad offer cutting-edge curriculum, internship programs, and international exposure.',
                undergraduate: [
                  'Business Administration',
                  'Management Studies',
                  'International Business',
                  'Marketing',
                  'Finance',
                  'Accounting',
                ],
                postgraduate: [
                  'Master of Business Administration (MBA)',
                  'Management Studies',
                  'International Business',
                  'Marketing and Digital Strategy',
                  'Business Analytics',
                  'Strategic Management',
                  'Human Resources Management',
                  'Supply Chain Management',
                ],
              },

              {
                category: 'Engineering and Technology Programs',
                image: 'engineeering_technology_zpydnw',
                description:
                  'Shape the future with innovative engineering and tech degrees. These programs combine theoretical foundations with hands-on training and research opportunities.',
                undergraduate: [
                  'Mechanical Engineering',
                  'Civil Engineering',
                  'Electrical Engineering',
                  'Computer Science Engineering',
                  'Electronics and Communication Engineering',
                  'Aerospace Engineering',
                ],
                postgraduate: [
                  'Artificial Intelligence and Machine Learning',
                  'Data Science and Big Data',
                  'Robotics',
                  'Software Engineering',
                  'Computer Engineering',
                  'Structural Engineering',
                  'Electrical Power Engineering',
                  'Environmental Engineering',
                ],
              },
              {
                category: 'Data Science and Artificial Intelligence',
                image: 'data_science_and_aritificial_intelligence_btvrl1',
                description:
                  'Harness the power of data and intelligent systems with future-ready degrees. Learn to analyze, model, and innovate using AI tools across real-world scenarios.',
                undergraduate: [
                  'Data Science',
                  'Artificial Intelligence',
                  'Computer Science',
                  'Software Engineering',
                ],
                postgraduate: [
                  'Master of Data Science',
                  'Artificial Intelligence and Machine Learning',
                  'Data Analytics',
                  'Business Analytics',
                  'Computational Intelligence',
                  'Big Data Engineering',
                  'Cybersecurity and Data Protection',
                ],
              },
              {
                category: 'Health and Medical Sciences',
                image: 'health_and_medical_science_j0sr8b',
                description:
                  'Build a career in healthcare through programs that blend academic knowledge with clinical practice. Study with experts and contribute to advancing medical care.',
                undergraduate: [
                  'Nursing',
                  'Physiotherapy',
                  'Biomedical Sciences',
                  'Health Sciences',
                  'Public Health',
                  'Pharmacy',
                ],
                postgraduate: [
                  'Public Health',
                  'Advanced Clinical Practice',
                  'Health Informatics',
                  'Pharmacy',
                  'Bioinformatics',
                  'Medical Laboratory Technology',
                  'Health Administration',
                  'Global Health',
                ],
              },
              {
                category: 'Social Sciences and Humanities',
                image: 'social_science_humanities_ii82wa',
                description:
                  'Examine society, culture, and behavior through interdisciplinary learning. These degrees foster critical insight and prepare you for diverse global roles.',
                undergraduate: [
                  'Sociology',
                  'Psychology',
                  'History',
                  'Political Science',
                  'Philosophy',
                  'English Literature',
                  'Geography',
                  'Economics',
                ],
                postgraduate: [
                  'Psychology',
                  'Sociology',
                  'Criminology',
                  'Political Science',
                  'Philosophy',
                  'International Relations',
                  'Development Studies',
                  'Anthropology',
                ],
              },
              {
                category: 'Creative Arts and Design',
                image: 'creative_arts_and_design_hpxgeu',
                description:
                  'Turn your creativity into a profession with immersive training in art, design, and digital production. Develop your portfolio and collaborate on real projects.',
                undergraduate: [
                  'Fine Arts',
                  'Graphic Design',
                  'Fashion Design',
                  'Animation',
                  'Interior Design',
                  'Photography',
                ],
                postgraduate: [
                  'Masters in Fine Arts',
                  'Graphic Design and Digital Media',
                  'Animation and Visual Effects',
                  'Fashion Management',
                  'Interior Architecture',
                  'Film Production',
                  'Art History',
                ],
              },
              {
                category: 'Law',
                image: 'law_compressed_z4q6st',
                description:
                  'Develop a strong legal foundation through theory, casework, and practice. Study how laws shape society and gain skills for a global legal career.',
                undergraduate: ['LLB (Bachelor of Law)'],
                postgraduate: [
                  'LLM (Master of Law)',
                  'International Business Law',
                  'Criminal Law',
                  'Corporate Law',
                  'Human Rights Law',
                  'Environmental Law',
                  'Taxation Law',
                ],
              },
              {
                category: 'Education',
                image: 'education_jv3u9j',
                description:
                  'Prepare to lead and inspire in the classroom with a focus on pedagogy, child development, and hands-on teaching experience.',
                undergraduate: [
                  'Primary Education',
                  'Secondary Education',
                  'Special Education',
                  'Early Childhood Education',
                ],
                postgraduate: [
                  'Masters in Education (M.Ed)',
                  'Educational Leadership and Management',
                  'Special Education',
                  'Educational Psychology',
                  'TESOL (Teaching English to Speakers of Other Languages)',
                  'International Education',
                ],
              },
              {
                category: 'Architecture and Built Environment',
                image: 'architecture_and_built_environment_ejnjqx',
                description:
                  'Learn to create sustainable, functional spaces through architecture and design. These programs blend creativity, environmental awareness, and structural skills.',
                undergraduate: [
                  'Architecture',
                  'Construction Management',
                  'Urban Planning',
                  'Interior Architecture',
                ],
                postgraduate: [
                  'Architecture (M.Arch)',
                  'Urban Design',
                  'Construction Project Management',
                  'Landscape Architecture',
                  'Building Information Modeling (BIM)',
                ],
              },
              {
                category: 'Logistics and Supply Chain Management',
                image: 'logistics_supply_chain_management_etphxk',
                description:
                  'Gain expertise in managing global supply systems and operations. Study logistics, procurement, and strategic planning for thriving business environments.',
                undergraduate: [
                  'Logistics and Supply Chain Management',
                  'International Business with Logistics',
                  'Business Operations Management',
                ],
                postgraduate: [
                  'MSc in Logistics and Supply Chain Management',
                  'Supply Chain Analytics',
                  'International Logistics and Transport',
                  'Strategic Supply Chain Management',
                  'Procurement and Logistics',
                ],
              },
              {
                category: 'Science and Technology',
                image: 'science_and_technology_l1k1be',
                description:
                  'Delve into innovation through science and tech-based learning. Engage with lab work, experimentation, and modern challenges in a tech-driven world.',
                undergraduate: [
                  'Biotechnology',
                  'Environmental Science',
                  'Physics',
                  'Chemistry',
                  'Mathematics',
                  'Biochemistry',
                ],
                postgraduate: [
                  'Environmental Science and Management',
                  'Biotechnology and Molecular Biology',
                  'Physics and Astronomy',
                  'Chemistry (Inorganic, Organic, Analytical)',
                  'Mathematics (Applied/Computational)',
                  'Biochemical Engineering',
                ],
              },
              {
                category: 'Hospitality and Tourism',
                image: 'hospitality_tourism_d7rpvr',
                description:
                  'Get ready for a career in global service industries with practical training in hospitality, tourism, and management, built on real-world applications.',
                undergraduate: [
                  'Hospitality Management',
                  'Travel and Tourism Management',
                  'Event Management',
                ],
                postgraduate: [
                  'MSc in International Hospitality Management',
                  'Tourism Management',
                  'Events and Conference Management',
                  'Hospitality and Tourism Business Management',
                ],
              },
              {
                category: 'Library and Information Science',
                image: 'library_information_science_wblwzh',
                description:
                  'Explore how knowledge is collected, organized, and shared in digital and physical formats. Develop skills to manage libraries, databases, and archives.',
                undergraduate: [],
                postgraduate: [
                  'Library and Information Science',
                  'Information Management',
                  'Digital Libraries',
                  'Archival Studies',
                  'Data Science for Libraries',
                ],
              },
              {
                category: 'Media, Journalism, and Communication',
                image: 'media_journalism_and_communication_weqnrl',
                description:
                  'Learn to craft compelling stories and navigate the modern media landscape. Develop communication skills for careers in journalism, PR, and digital content.',
                undergraduate: [
                  'Media Studies',
                  'Journalism',
                  'Public Relations',
                  'Advertising',
                  'Film Studies',
                ],
                postgraduate: [
                  'Masters in Journalism',
                  'Public Relations and Corporate Communications',
                  'Media and Communication Studies',
                  'Broadcast Journalism',
                  'Digital Media Production',
                ],
              },
              {
                category: 'Philosophy, Politics, and Economics (PPE)',
                image: 'philosophy_politics_economics_cmcuc1',
                description:
                  'Study the intersection of ideas, governance, and economics. This interdisciplinary program equips you with tools to understand and influence complex systems.',
                undergraduate: ['Philosophy', 'Politics', 'Economics'],
                postgraduate: [
                  'Masters in Philosophy',
                  'Masters in Politics',
                  'Masters in Economics',
                  'Public Policy',
                ],
              },
              {
                category: 'MBBS Courses Abroad',
                image: 'mbbs_vc9yyh',
                description: `"Pursue a globally recognized medical degree and unlock a world of healthcare
opportunities. MBBS courses abroad offer high-quality education, state-of-the-art
facilities, clinical exposure, and international recognition."`,
                undergraduate: [
                  'General Medicine (MBBS)',
                  'Clinical Medicine',
                  'Surgery',
                  'Pediatrics',
                  'Dentistry (BDS)',
                  'Nursing',
                ],
                postgraduate: [
                  'Internal Medicine',
                  'General Surgery',
                  'Pediatrics',
                  'Orthopedics',
                  'Gynecology & Obstetrics',
                  'Cardiology',
                  'Radiology',
                  'Anesthesiology',
                  'Dermatology',
                  'Psychiatry',
                ],
              },
            ].map(({ image, category, description, undergraduate, postgraduate }: any) => (
              <details key={category} className='border-b border-gray-700 group' open={false}>
                <summary className='flex items-center justify-between px-6 py-4 text-xl font-semibold tracking-wide text-black cursor-pointer select-none hover:bg-red-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 bg'>
                  <div className='flex items-center space-x-2'>
                    {categoryIcons[category as keyof typeof categoryIcons]}
                    <span className='font-sans'>{category}</span>
                  </div>

                  {/* Toggle indicator icon for opening/closing */}
                  <svg
                    className='w-6 h-6 transition-transform duration-300 text-primary group-open:hidden'
                    stroke='currentColor'
                    fill='none'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M6 9l6 6 6-6' />
                  </svg>
                  <svg
                    className='hidden w-6 h-6 transition-transform duration-300 rotate-180 text-primary group-open:block'
                    stroke='currentColor'
                    fill='none'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M6 9l6 6 6-6' />
                  </svg>
                </summary>

                {/* 🔥 Image first */}
                <div className='w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-md h-[400px] relative'>
                  <CldImage
                    src={image} // this is your public ID
                    alt={category}
                    fill
                    className='object-contain'
                    loading='lazy'
                    sizes='100vw'
                  />
                </div>

                <div className='max-w-5xl px-10 pt-6 pb-10 mx-auto space-y-6 font-sans transition-all duration-300 shadow-lg rounded-b-xl text-primary'>
                  {/* 🔥 Description second */}
                  <p className='text-base italic font-semibold leading-relaxed text-center text-gray-700 md:text-lg max-w-prose'>
                    {description}
                  </p>

                  {/* 🔥 UG & PG Third */}
                  <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
                    {/* Undergraduate */}
                    {undergraduate.length > 0 && (
                      <div className='p-5 rounded-lg shadow-md'>
                        <h4 className='pb-2 mb-4 text-xl font-semibold border-b border-red-600 text-primary'>
                          Undergraduate
                        </h4>
                        <ul className='space-y-3 text-base text-black list-none'>
                          {undergraduate.map((item: string) => (
                            <li
                              key={item}
                              className='flex items-center space-x-3 transition-colors duration-200 hover:text-red-400'
                            >
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-red-500'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                viewBox='0 0 24 24'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M5 13l4 4L19 7'
                                />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Postgraduate */}
                    {postgraduate.length > 0 && (
                      <div className='p-5 rounded-lg shadow-md'>
                        <h4 className='pb-2 mb-4 text-xl font-semibold border-b border-red-600 text-primary'>
                          Postgraduate
                        </h4>
                        <ul className='space-y-3 text-base text-black list-none'>
                          {postgraduate.map((item: string) => (
                            <li
                              key={item}
                              className='flex items-center space-x-3 transition-colors duration-200 hover:text-red-400'
                            >
                              <svg
                                className='flex-shrink-0 w-5 h-5 text-red-500'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                viewBox='0 0 24 24'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M5 13l4 4L19 7'
                                />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
      {/* countries table are here  */}
      <CountriesCarousel />
      {/* why these countries */}
      <div data-aos='zoom-in-up' data-aos-duration='1000' data-aos-delay='100'>
        <WhyTheseCountries />
      </div>
    </main>
  );
};

export default CoursesPage;
