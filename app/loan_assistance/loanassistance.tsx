'use client';

import React, { useState } from 'react';
import { FaUniversity, FaHandHoldingUsd, FaUserCheck, FaGlobeAsia } from 'react-icons/fa';
import { MdChecklist, MdEmojiTransportation, MdKeyboardArrowRight } from 'react-icons/md';
import { GiWallet } from 'react-icons/gi';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SECTIONS = ['Loan Partners', 'Why Insight', 'Expenses Covered', 'Eligibility'];

export default function LoanAssistancePage() {
  const [activeSection, setActiveSection] = useState<string>('Loan Partners');
  const [mobileActiveSection, setMobileActiveSection] = useState<string | null>(null);
  const router = useRouter();

  const renderContent = (section: string) => {
    switch (section) {
      case 'Loan Partners':
        return (
          <div className='space-y-12'>
            <div className='relative flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-white via-white to-primary/10 border-l-4 border-primary rounded-lg shadow-md overflow-hidden'>
              {/* Decorative Faint SVG in Background */}
              <div className='absolute right-0 top-1/2 -translate-y-1/2 opacity-10 text-primary text-6xl pointer-events-none'>
                <FaUniversity />
              </div>

              {/* Icon Bubble */}
              <div className='w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-md z-10'>
                <FaUniversity className='text-xl' />
              </div>

              {/* Heading */}
              <h2 className='text-xl sm:text-2xl font-bold text-gray-800 z-10'>
                Our Loan Partners
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {/* HDFC Card */}
              <div className='border rounded-xl p-5 bg-white shadow hover:shadow-md transition space-y-4'>
                <div className='flex items-center gap-2'>
                  <FaUniversity className='text-primary' />
                  <h3 className='text-lg font-semibold text-primary'>
                    HDFC Credila Financial Services
                  </h3>
                </div>
                {[
                  'India’s first dedicated education loan company.',
                  'Offers 100% funding including tuition, living, travel, and insurance.',
                  'Loan approval even before university admission (pre-visa disbursement).',
                  'Doorstep service and faster processing.',
                  'Customizable repayment options.',
                ].map((point, i) => (
                  <div key={i} className='flex items-start gap-2'>
                    <MdChecklist className='text-primary mt-1' />
                    <p className='text-sm text-gray-700'>{point}</p>
                  </div>
                ))}
              </div>

              {/* Avanse Card */}
              <div className='border rounded-xl p-5 bg-white shadow hover:shadow-md transition space-y-4'>
                <div className='flex items-center gap-2'>
                  <FaUniversity className='text-primary' />
                  <h3 className='text-lg font-semibold text-primary'>Advance Financial Services</h3>
                </div>
                {[
                  'Focused on global education loans for UG, PG, MBBS, and more.',
                  'Covers complete study costs including tuition, living, flight, books, etc.',
                  'Flexible EMI options and moratorium period.',
                  'No hidden charges. Transparent & student-friendly process.',
                ].map((point, i) => (
                  <div key={i} className='flex items-start gap-2'>
                    <FaHandHoldingUsd className='text-primary mt-1' />
                    <p className='text-sm text-gray-700'>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className='rounded-xl border border-primary/30 bg-white p-5 shadow'>
              <div className='flex items-start gap-4'>
                <MdEmojiTransportation className='text-primary mt-1' size={24} />
                <div>
                  <p className='text-gray-800'>
                    Our financial advisors help you compare, apply, and secure the best loan options
                    suited for your study destination and budget.{' '}
                    <span className='font-semibold text-primary'>
                      Talk to us today for end-to-end loan support.
                    </span>
                  </p>
                  <Button
                    onClick={() => router.push('/contact')}
                    className='text-base lg:mt-2 mt-4 sm:text-lg font-semibold text-white hover:bg-transparent hover:text-black border hover:border-black'
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Why Insight':
        return (
          <section className='bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden px-4 md:px-8 pt-0 pb-10 space-y-10'>
            <div className='w-full h-60 sm:h-72 md:h-80 lg:h-[22rem] overflow-hidden rounded-b-xl relative'>
              <Image
                src='/assets/services/SOP writing.webp'
                alt='Insight Loan Background'
                fill
                className='object-cover'
              />
            </div>

            <div className='relative z-10 max-w-6xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8'>
              <div className='relative text-center px-0 sm:px-6 py-6 sm:py-8 sm:bg-gradient-to-br sm:from-white sm:via-white sm:to-primary/5 sm:rounded-xl sm:border sm:border-primary/10 sm:shadow-md overflow-hidden'>
                {/* Optional floating background SVG for style */}
                <div className='hidden sm:block absolute right-4 top-4 text-primary/10 text-6xl pointer-events-none'>
                  <FaHandHoldingUsd />
                </div>

                {/* Icon Bubble */}
                <div className='w-12 sm:w-14 h-12 sm:h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center'>
                  <FaHandHoldingUsd className='text-xl sm:text-2xl text-primary' />
                </div>

                {/* Heading */}
                <h2 className='text-xl sm:text-3xl font-bold text-gray-800'>
                  Why Apply Through Insight?
                </h2>

                {/* Subheading */}
                <p className='mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4 sm:px-0'>
                  Unlock expert guidance, fast loan comparisons, and a stress-free process with
                  Insight.
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6'>
                {[
                  {
                    text: 'Compare and apply to multiple lenders faster.',
                    icon: <MdChecklist size={26} />,
                  },
                  {
                    text: 'One-on-one financial counseling.',
                    icon: <FaHandHoldingUsd size={24} />,
                  },
                  {
                    text: 'Help with budgeting, documents, and costs.',
                    icon: <GiWallet size={26} />,
                  },
                  {
                    text: 'Direct coordination with loan partners.',
                    icon: <FaUniversity size={24} />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className='group bg-white rounded-xl border border-gray-200 shadow hover:shadow-md transition-all duration-300 p-6 flex items-start gap-4'
                  >
                    <div className='text-primary shrink-0 group-hover:scale-110 transition-transform duration-300'>
                      {item.icon}
                    </div>
                    <p className='text-gray-700 text-base leading-relaxed'>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      case 'Expenses Covered':
        return (
          <section className='relative h-screen w-full overflow-hidden'>
            <div className='absolute inset-0 z-0'>
              <Image
                src='/assets/services/SOP writing.webp'
                alt='Expenses Covered'
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-white bg-opacity-50' />
            </div>

            <div className='relative z-10 h-full w-full px-4 md:px-8 py-10 flex flex-col justify-center items-center'>
              <div className='w-full max-w-6xl space-y-6'>
                <div className='flex items-center gap-3'>
                  <GiWallet className='text-primary text-2xl' />
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
                    What Expenses Are Covered?
                  </h2>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {[
                    {
                      label: 'Tuition fees',
                      icon: <FaUniversity size={22} className='text-primary mt-1' />,
                    },
                    {
                      label: 'Living expenses (rent, food)',
                      icon: <GiWallet size={22} className='text-primary mt-1' />,
                    },
                    {
                      label: 'Travel and flights',
                      icon: <MdEmojiTransportation size={22} className='text-primary mt-1' />,
                    },
                    {
                      label: 'Visa & insurance',
                      icon: <FaGlobeAsia size={22} className='text-primary mt-1' />,
                    },
                    {
                      label: 'Books, supplies, and laptop',
                      icon: <MdChecklist size={22} className='text-primary mt-1' />,
                    },
                    {
                      label: 'Pre & post departure costs',
                      icon: <FaHandHoldingUsd size={22} className='text-primary mt-1' />,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className='flex items-start gap-3 p-5 bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition'
                    >
                      {item.icon}
                      <p className='text-gray-700 text-base leading-relaxed'>{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case 'Eligibility':
        return (
          <section className='relative px-4 md:px-10 py-16 h-screen flex items-center justify-center'>
            <div className='relative z-10 w-full max-w-5xl mx-auto space-y-12'>
              <div className='flex items-center gap-3'>
                <div className='bg-primary/10 text-primary p-2 rounded-full'>
                  <FaUserCheck className='text-xl' />
                </div>
                <h2 className='text-3xl font-bold text-gray-800'>Eligibility & Requirements</h2>
              </div>

              <div className='relative border-l-2 border-dashed border-primary/30 pl-6 space-y-10'>
                {[
                  {
                    text: 'Indian citizen with confirmed admission or planning to apply.',
                    icon: <FaUserCheck className='text-primary mt-1' size={24} />,
                  },
                  {
                    text: 'Co-applicant (parent/guardian) with a steady income.',
                    icon: <FaHandHoldingUsd className='text-primary mt-1' size={24} />,
                  },
                  {
                    text: 'Basic documents: KYC, admission letter/proof, fee structure, income proof.',
                    icon: <GiWallet className='text-primary mt-1' size={24} />,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className='relative bg-white rounded-xl shadow-md p-5 md:ml-6 flex items-start gap-4 transition hover:shadow-xl'
                  >
                    <div className='absolute -left-6 top-3 w-6 h-6 bg-primary text-white text-sm font-semibold flex items-center justify-center rounded-full shadow-md'>
                      {index + 1}
                    </div>
                    {item.icon}
                    <p className='text-gray-700 text-base leading-relaxed'>{item.text}</p>
                  </div>
                ))}
              </div>

              <div className='bg-white border border-gray-200 rounded-xl p-6 shadow-sm'>
                <div className='flex gap-3 items-start'>
                  <FaUniversity className='text-primary mt-1' size={24} />
                  <p className='text-gray-700 leading-relaxed text-base'>
                    We also provide guidance for other bank loans like{' '}
                    <strong className='text-gray-800 font-medium'>SBI, Indian Overseas</strong> and
                    more, including options with and without collateral depending on your profile
                    and university.
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <main className='bg-white text-gray-800'>
      {/* Hero */}
      <section className='relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/assets/services/SOP writing.webp'
            alt='Education Loan Background'
            fill
            className='object-cover object-center'
            priority
          />
          <div className='absolute inset-0 bg-black/60' />
        </div>
        <div className='relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-white text-center md:text-left'>
          <div className='space-y-6 max-w-3xl mx-auto '>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight'>
              Secure Your <span className='text-primary text-nowrap '>Education Loan</span>
              <br className='hidden  sm:block' /> With Confidence
            </h1>
            <p className='text-xl sm:text-lg md:text-xl text-white/90 leading-relaxed'>
              Studying abroad is a dream for many — and finances shouldn’t stop you. We help
              students secure{' '}
              <span className='relative inline-block font-semibold text-white'>
                <span className='absolute -bottom-2 left-0 w-full h-2 bg-primary opacity-80 rounded-sm z-0'></span>
                <span className='relative font-mono z-10text-white'>100% education loans</span>
              </span>{' '}
              via trusted institutions.
            </p>

            <div>
              <Button
                onClick={() => router.push('/contact')}
                className='text-base sm:text-lg font-semibold text-white hover:bg-transparent hover:text-black border hover:border-black'
              >
                Talk to Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className='max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-5 gap-8'>
        {/* Sidebar for Desktop */}
        <div className='hidden md:block md:col-span-1 bg-gray-100 rounded-lg border border-gray-200 p-4'>
          <h3 className='relative text-white font-semibold text-lg sm:text-xl mb-4 bg-primary px-6 py-3 rounded-r-full w-fit shadow-md'>
            Sections
            <span className='absolute -right-3 bg-primary top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-white border-b-[10px] border-b-transparent'></span>
          </h3>

          <nav className='space-y-1'>
            {SECTIONS.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`w-full px-3 py-2 text-left text-sm font-medium border-l-4 flex items-center gap-2 ${
                  activeSection === section
                    ? 'border-primary text-primary bg-primary/5'
                    : 'border-transparent text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                <MdKeyboardArrowRight />
                {section}
              </button>
            ))}
          </nav>
        </div>

        {/* Accordion for Mobile */}
        <div className='block md:hidden w-full h-3/6'>
          <h2 className='text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-pink-500 text-transparent bg-clip-text mb-4 px-4'>
            🚀 Explore Loan Assistance Topics
          </h2>

          {SECTIONS.map((section) => (
            <div
              key={section}
              className='mx-2 mb-3 rounded-lg bg-gray-50 border border-gray-200 shadow-sm'
            >
              <button
                onClick={() =>
                  setMobileActiveSection((prev) => (prev === section ? null : section))
                }
                className={`w-full px-4 py-3 flex justify-between items-center font-medium transition ${
                  mobileActiveSection === section
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                <span className='flex items-center gap-2'>
                  <MdKeyboardArrowRight
                    className={`transition-transform duration-200 ${
                      mobileActiveSection === section ? 'rotate-90 text-primary' : ''
                    }`}
                  />
                  {section}
                </span>
              </button>

              {mobileActiveSection === section && (
                <div className='px-4 py-4 text-sm text-gray-700 bg-white border-t border-gray-200 rounded-b-lg'>
                  {renderContent(section)}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side for Desktop */}
        <div className='md:col-span-4 hidden md:block space-y-10'>
          {renderContent(activeSection)}
        </div>
      </section>
    </main>
  );
}
