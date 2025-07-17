'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { ContainerScroll, CardSticky } from '@/components/cards-stack';
import { Button } from '../ui/button';
import 'aos/dist/aos.css';
import { FaArrowRight } from 'react-icons/fa';
import { CldImage } from 'next-cloudinary';

const services = [
  {
    title: 'Counselling & Program Discovery',
    description:
      'Having trouble deciding on a course or country? We’ll help you explore your options based on your interests, background, and future goals. Our experienced team will guide you in finding the academic path that suits you best.',
    image: 'counselling_program_discovery_hc0ill',
    icon: '/icons/counseling.svg',
  },
  {
    title: 'IELTS, Duolingo, PTE & English Speaking Training',
    description:
      'We offer personalized training for IELTS, Duolingo, and PTE exams to help students meet language proficiency requirements with confidence. Many universities in countries like the UK, Canada, and the USA accept IELTS waivers based on medium of instruction (MOI) or alternative tests like Duolingo or Pearson Test of English (PTE). We help you identify such universities and streamline the documentation process for eligibility.',
    image: 'IELTS_training_gkioj1',
    icon: '/icons/selection.svg',
  },
  {
    title: 'SOP Writing',
    description:
      'Your Statement of Purpose is your story — and we help you tell it well. Our team works with you to write a compelling, authentic SOP that highlights your goals, strengths, and personality. It’s not about using templates — it’s about helping your voice stand out and make an impact.',
    image: 'SOP_writing_vopuz0',
    icon: '/icons/processing.svg',
  },
];

export default function ServicesSection() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const router = useRouter();

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const truncateText = (text: string, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <>
      <Head>
        <title>Our Services | End-to-End Study Abroad Support – Insight</title>
        <meta
          name='description'
          content='From counselling to visa and guaranteed accommodation, get expert support for your global study journey every step of the way'
        />
      </Head>

      <div className='relative'>
        {/* Section with sticky left + scrollable right */}
        <section className='relative z-10 flex flex-col items-center md:flex-col justify-center md:text-center'>
          <div className='container flex flex-col gap-10 px-8 py-8 md:py-10 lg:py-12 lg:flex-row lg:items-start'>
            {/* Left Side - Sticky */}
            <div className='flex-1 flex flex-col gap-4 rounded-xl items-center justify-center text-center lg:sticky top-20 lg:self-start lg:h-[calc(100vh-10rem)]'>
              <h4 className='uppercase text-sm lg:text-base tracking-[0.20em] text-primary font-bold text-shadow-sm'>
                — Services —
              </h4>

              <div className='h-px bg-white my-2 w-full max-w-xs'></div>

              <div className='relative px-4 md:py-4 lg:py-4 rounded-xl overflow-hidden'>
                <div
                  className='absolute inset-0 -z-10 rounded-xl  blur-md opacity-90'
                  style={{
                    background:
                      'radial-gradient(circle at center,rgba(255, 0, 0, 0.2), transparent 95%)',
                  }}
                ></div>
                <h2 className='lg:text-5xl md:text-4xl text-3xl  text-black font-bold'>
                  Your Journey, <span className='text-primary'>Fully Supported</span>
                </h2>
              </div>

              <p className='text-black lg:py-4 py-0 font-medium'>Every Step of the Way!</p>

              <div className='hidden lg:block'>
                <Button variant={'default'} onClick={() => router.push('/services')}>
                  Go to Services
                </Button>
              </div>
            </div>

            {/* Right Side - Scrollable Cards */}
            <div className='flex-1 w-full'>
              <ContainerScroll className='py-4 space-y-8'>
                {services.map((service, index) => {
                  const isExpanded = expanded[index] || false;
                  const displayedText = isExpanded
                    ? service.description
                    : truncateText(service.description, 120);

                  return (
                    <React.Fragment key={index}>
                      <CardSticky
                        index={index + 2}
                        className='rounded-2xl text-xl bg-black overflow-hidden p-0 shadow-md lg:backdrop-blur-md transform transition duration-300 hover:scale-[1.02] hover:shadow-xl'
                        incrementY={30}
                        incrementZ={10}
                      >
                        <div className='relative w-full flex flex-col sm:flex-row h-auto sm:h-[270px]'>
                          {/* Image */}
                          <div className='relative w-full sm:w-1/2 h-[200px] sm:h-full'>
                            <CldImage
                              src={service.image} // e.g., 'counselling_program_discovery_hc0ill'
                              alt={service.title}
                              width={500}
                              height={300}
                              crop='fill'
                              gravity='auto'
                              className='object-cover transition duration-300 hover:brightness-110 w-full h-full'
                            />
                          </div>

                          {/* Content */}
                          <div className='w-full sm:w-1/2 bg-[#fefefe] p-5 flex flex-col justify-between'>
                            <div className='space-y-4 h-full flex flex-col'>
                              {/* Title */}
                              <div>
                                <div className='flex items-center gap-2 mb-1'>
                                  <FaArrowRight className='text-primary text-sm sm:text-base flex-shrink-0' />
                                  <h3 className='text-xl sm:text-2xl font-bold text-[#111827]'>
                                    {service.title}
                                  </h3>
                                </div>
                              </div>

                              {/* Description */}
                              <div className='border-l-4 border-r-4  border-primary pl-4 bg-[#f4f6f8] p-3 rounded text-[#374151] text-sm sm:text-base leading-snug flex-grow'>
                                {displayedText}
                              </div>

                              {/* Read More */}
                              {service.description.length > 120 && (
                                <div className='text-right'>
                                  <button
                                    onClick={() => router.push('/services')}
                                    className='text-primary font-semibold text-sm hover:underline'
                                    type='button'
                                  >
                                    Read More →
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardSticky>
                    </React.Fragment>
                  );
                })}
              </ContainerScroll>

              {/* Mobile button */}
              <div className='flex justify-center lg:hidden mt-8'>
                <Button onClick={() => router.push('/services')} variant={'default'}>
                  Go to Services
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
