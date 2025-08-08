'use client';

import { useState } from 'react';
import {
  BookOpenCheck,
  Globe2,
  UserCheck,
  ShieldAlert,
  PenTool,
  Gavel,
  Mail,
  ChevronDown,
  ChevronUp,
  RefreshCcw,
} from 'lucide-react';

const terms = [
  {
    id: 'welcome',
    icon: <BookOpenCheck className='w-6 h-6 text-blue-600' />,
    title: 'Terms of Service',
    content:
      'Welcome and Thank You for Choosing Insight Abroad Services. It is our privilege to support you throughout your study abroad journey. Please take a moment to read these Terms of Service, which outline the guidelines for using our website and services.',
  },
  {
    id: 'scope',
    icon: <Globe2 className='w-6 h-6 text-green-600' />,
    title: 'Scope of Our Services',
    content:
      'Insight Abroad Services offers expert advice and support related to overseas education, including university and course selection, visa assistance, test preparation, and post-arrival guidance. While we strive to provide accurate and up-to-date information, the ultimate decisions on admissions, visas, and related processes rest with the universities and government authorities.',
  },
  {
    id: 'responsibility',
    icon: <UserCheck className='w-6 h-6 text-yellow-600' />,
    title: 'Your Responsibilities',
    content:
      'To serve you best, we kindly ask you to provide accurate and honest information. Any misleading or false information or documentation may result in the suspension of our services. Your cooperation helps us work efficiently and transparently.',
  },
  {
    id: 'liability',
    icon: <ShieldAlert className='w-6 h-6 text-red-500' />,
    title: 'Limitations of Liability',
    content:
      'Please understand that while we put forth our best efforts to assist you, Insight Abroad Services cannot guarantee admissions, visa approvals, or specific outcomes. We are an advisory service and do not have control over decisions made by educational institutions or immigration authorities.',
  },
  {
    id: 'intellectual',
    icon: <PenTool className='w-6 h-6 text-purple-600' />,
    title: 'Intellectual Property',
    content:
      'All content on this website, including but not limited to text, images, logos, and designs, is the intellectual property of Insight Abroad Services and protected by copyright laws. We kindly request that you respect these rights.',
  },
  {
    id: 'changes',
    icon: <RefreshCcw className='w-6 h-6 text-indigo-600' />,
    title: 'Changes to These Terms',
    content:
      'From time to time, we may revise or update these terms as necessary. We encourage you to review them periodically. Continued use of our website or services indicates your acceptance of any updated terms.',
  },
  {
    id: 'law',
    icon: <Gavel className='w-6 h-6 text-amber-600' />,
    title: 'Governing Law and Jurisdiction',
    content:
      'These Terms of Service are subject to Indian law, and any legal matters will be handled exclusively by Indian courts.',
  },
  {
    id: 'contact',
    icon: <Mail className='w-6 h-6 text-pink-600' />,
    title: 'Contacting Us',
    content: (
      <>
        If you have any questions, concerns, or feedback about these terms or our services, please
        feel free to contact us at{' '}
        <a
          href='mailto:Info@insightabroadservices.org'
          className='text-primary underline hover:text-primary/90'
        >
          Info@insightabroadservices.org
        </a>
        . We’re committed to assisting you and appreciate the trust you place in us.
      </>
    ),
  },
];

export default function TermsOfServicePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='bg-gradient-to-br from-gray-50 to-white min-h-screen py-28 px-4 sm:px-6 lg:px-32'>
      <div className='max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-200'>
        <div className='mb-10'>
          <h1 className='text-3xl sm:text-4xl font-extrabold text-gray-900 text-center sm:text-left mb-4'>
            Terms of Service
          </h1>
        </div>

        <div id='terms-pdf'>
          {/* Desktop layout */}
          <div className='hidden md:block space-y-12'>
            {terms.map((term, index) => (
              <div key={index} className='relative pl-14'>
                <div className='absolute left-0 top-1'>
                  <div className='bg-gray-100 rounded-full p-2 shadow'>{term.icon}</div>
                </div>
                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>{term.title}</h2>
                <div className='text-gray-700 text-lg leading-relaxed'>
                  {typeof term.content === 'string' ? <p>{term.content}</p> : term.content}
                </div>
                {index !== terms.length - 1 && <hr className='mt-8 border-gray-200' />}
              </div>
            ))}
          </div>

          {/* Mobile layout: Accordion */}
          <div className='md:hidden space-y-4'>
            {terms.map((term, index) => (
              <div key={index} className='border border-gray-200 rounded-lg'>
                <button
                  className='w-full flex justify-between items-center px-4 py-3 text-left text-gray-900 font-medium'
                  onClick={() => toggleIndex(index)}
                >
                  <div className='flex items-center space-x-3'>
                    {term.icon}
                    <span className='text-base font-semibold'>{term.title}</span>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className='w-5 h-5' />
                  ) : (
                    <ChevronDown className='w-5 h-5' />
                  )}
                </button>
                {openIndex === index && (
                  <div className='px-4 pb-4 text-gray-700 text-sm leading-relaxed'>
                    {typeof term.content === 'string' ? <p>{term.content}</p> : term.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
