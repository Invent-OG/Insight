'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: `What are the top countries to study abroad, and how do I choose the
right one for my career goals?`,
    answer: `Choosing the right study abroad destination depends on your field of interest, budget, and long-term career plans. Insight Abroad Services offers personalized counseling to help you select the best country—whether it's Canada, the UK, Australia, Germany, or the USA—based on course quality, job opportunities, and immigration pathways.`,
  },
  {
    question: 'In what ways does Insight Abroad Services support the student visa process?',
    answer: `Our team assists with the entire visa process, including paperwork and interview
prep, ensuring your application meets all current requirements. We ensure your
student visa application aligns with the latest immigration guidelines of your
chosen study destination to increase your chances of approval.`,
  },
  {
    question:
      'What are the eligibility requirements to study abroad after high school or graduation?',
    answer: `Eligibility varies by country and university, but commonly includes academic
transcripts, proof of English proficiency (IELTS, TOEFL, or PTE), and financial
documentation. Insight Abroad Services evaluates your profile and helps you
meet all academic and visa requirements for smooth admission.`,
  },
  {
    question:
      'Can Insight Abroad Services assist with choosing the right university and course abroad?',
    answer: `Absolutely. We conduct a comprehensive profile analysis and recommend
top-ranking universities and courses that match your interests, academic
background, and future career aspirations. Our goal is to align your education
with global industry demands.`,
  },
  {
    question:
      'What is the cost of studying abroad, and do you assist with scholarships or financial aid?',
    answer: `The overall cost usually covers tuition, living expenses, and travel. We also guide
you in finding scholarships and funding opportunities to ease the financial load.
Insight Abroad Services helps you estimate your total budget and guides you in
applying for scholarships, tuition waivers, and affordable education loan options
through our partnered financial institutions.`,
  },
  {
    question: 'Is it possible to work part-time while studying abroad?',
    answer: `Yes, most countries allow international students to work part-time during their
studies. We brief you on work-hour limits, job types, and post-study work permits
to ensure you balance academics and part-time work legally and effectively.`,
  },
  {
    question: 'Do you offer post-arrival support after students reach their destination?',
    answer: `Yes, we provide complete support—from pre-departure planning to helping you
settle into student life abroad. We ensure your transition to international student
life is safe, comfortable, and well-guided.`,
  },
  {
    question:
      ' How long does the entire study abroad process take from application to visa approval?',
    answer: `The process typically takes 4–6 months, depending on the country, university
deadlines, and visa timelines. Starting early with Insight Abroad Services helps
avoid delays and maximizes your chances of timely admission.`,
  },
  {
    question:
      'Does Insight Abroad Services help students with education loans for studying abroad?',
    answer: `Yes. We offer dedicated guidance on securing education loans through trusted
financial partners and banks. Whether you're looking for collateral-free loans or
government-backed schemes, our team assists with documentation, eligibility
checks, and timely loan approvals.`,
  },
  {
    question:
      'Are scholarships available for studying abroad, and how does Insight Abroad Services assist?',
    answer: `Yes. Many institutions and governments offer scholarships. We help identify
suitable options and assist with applications to increase your chances. Our
experts identify suitable scholarships, assist with application essays, and ensure
you meet deadlines to improve your chances of receiving financial aid.`,
  },
  {
    question: 'Does Insight Abroad Services offer IELTS coaching for students?',
    answer: `Yes, we offer comprehensive IELTS coaching with certified trainers. Our
programs include live classes, mock tests, personalized feedback, and tips to
improve your scores in Listening, Reading, Writing, and Speaking.`,
  },
  {
    question: 'What is the ideal IELTS score required for study abroad, and how can I achieve it?',
    answer: `Most universities require an IELTS band score of 6.0 to 7.5, depending on the
program and country. Our tailored IELTS preparation courses help you reach
your target score through structured lessons and regular practice sessions.`,
  },
  {
    question: 'Is IELTS compulsory for all countries, and what are the alternatives?',
    answer: `While IELTS is widely recognized, some countries also accept TOEFL, PTE, or
Duolingo. We help you choose the most suitable test based on your goals and
strengths.`,
  },
  {
    question: 'What are the top countries for Indian students to pursue MBBS abroad?',
    answer: `Russia, Georgia, Kazakhstan, the Philippines, and Uzbekistan are popular for
MBBS due to affordable fees, English-medium courses, and MCI/NMC
recognition. We assist in selecting the right option that matches your academic
background and financial plan.`,
  },
  {
    question: 'Is NEET required to study MBBS abroad?',
    answer: `Yes, Indian students must qualify NEET to pursue MBBS abroad and return to
practice in India.Our counselors at Insight Abroad Services ensure you meet all
the eligibility criteria, including NEET, to apply for top medical universities abroad.`,
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className='bg-[#f9fafb] min-h-screen py-28 lg:py-28 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-12'>
          <HelpCircle className='w-10 h-10 mx-auto text-primary mb-2' />
          <h1 className='text-4xl font-bold text-gray-800'>Frequently Asked Questions</h1>
          <p className='text-gray-500 mt-2'>
            Find answers to common questions about studying abroad with Insight Abroad Services.
          </p>
        </div>

        <div className='space-y-5'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-300`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className='w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-all'
              >
                <span className='text-lg font-medium text-gray-800 flex-1'>
                  {index + 1}. {faq.question}
                </span>
                {activeIndex === index ? (
                  <ChevronUp className='w-5 h-5 text-primary' />
                ) : (
                  <ChevronDown className='w-5 h-5 text-primary' />
                )}
              </button>

              <div
                className={`px-6 pt-0 pb-4 text-gray-600 text-[15px] leading-relaxed transition-all duration-300 ${
                  activeIndex === index ? 'block' : 'hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
