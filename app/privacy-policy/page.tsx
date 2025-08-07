'use client';

import { useState } from 'react';
import {
  ShieldCheck,
  FileText,
  Lock,
  UserCheck,
  RefreshCcw,
  Mail,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const sections = [
  {
    id: 'welcome',
    icon: <ShieldCheck className='w-6 h-6 text-blue-600' />,
    title: 'Welcome to Insight Abroad Services’ Privacy Policy',
    content: `We sincerely value your trust and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard the data you share with us when you visit our website or use our services.`,
  },
  {
    id: 'collect',
    icon: <FileText className='w-6 h-6 text-green-600' />,
    title: 'Information We Collect',
    content: `When you interact with us—whether through inquiries, registrations, or consultations—we collect information such as your name, contact details, educational background, and documents related to your study abroad plans. Additionally, we may gather non-identifiable technical information through cookies and website analytics to help improve your experience.`,
  },
  {
    id: 'use',
    icon: <UserCheck className='w-6 h-6 text-yellow-600' />,
    title: 'How We Use Your Information',
    content: `Your information is used thoughtfully to provide personalized guidance, assist with visa applications, communicate important updates, and enhance our services. We want you to feel confident that your information is never sold or shared with unauthorized parties. We only share your data with trusted partners involved directly in your application, or when legally required.`,
  },
  {
    id: 'security',
    icon: <Lock className='w-6 h-6 text-red-500' />,
    title: 'Data Protection and Security',
    content: `We understand how important your privacy is. That’s why we implement robust security measures to protect your data against unauthorized access, loss, or misuse. Our team regularly reviews these measures to maintain a high standard of safety.`,
  },
  {
    id: 'rights',
    icon: <UserCheck className='w-6 h-6 text-purple-600' />,
    title: 'Your Rights and Choices',
    content: `We respect your rights regarding your personal information. You have the right to request access to, correction of, or removal of your personal data by reaching out to us at any time. We are here to support you and will respond promptly to your requests in accordance with applicable laws.`,
  },
  {
    id: 'updates',
    icon: <RefreshCcw className='w-6 h-6 text-indigo-600' />,
    title: 'Policy Updates',
    content: `To keep pace with our evolving services, this privacy policy may be revised periodically. We encourage you to review this page periodically. Any updates will be clearly posted along with the date of revision.`,
  },
  {
    id: 'contact',
    icon: <Mail className='w-6 h-6 text-pink-600' />,
    title: 'Contact Us',
    content: (
      <>
        If you have any questions, concerns, or requests about your privacy or this policy, please
        do not hesitate to contact us at{' '}
        <a
          href='mailto:Info@insightabroadservices.org'
          className='text-blue-600 underline hover:text-blue-800'
        >
          Info@insightabroadservices.org
        </a>
        . We are always happy to assist you.
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='bg-gradient-to-br from-gray-50 to-white min-h-screen py-32 px-4 sm:px-6 lg:px-32'>
      <div className='max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-200'>
        <h1 className='text-4xl font-extrabold text-center text-gray-900 mb-10'>Privacy Policy</h1>

        {/* Desktop layout */}
        <div className='hidden md:block space-y-12'>
          {sections.map((section, index) => (
            <div key={index} className='relative pl-14'>
              <div className='absolute left-0 top-1'>
                <div className='bg-gray-100 rounded-full p-2 shadow'>{section.icon}</div>
              </div>
              <h2 className='text-2xl font-semibold text-gray-800 mb-2'>{section.title}</h2>
              <p className='text-gray-700 text-lg leading-relaxed'>{section.content}</p>
              {index !== sections.length - 1 && <hr className='mt-8 border-gray-200' />}
            </div>
          ))}
        </div>

        {/* Mobile layout: Accordion */}
        <div className='md:hidden space-y-4'>
          {sections.map((section, index) => (
            <div key={index} className='border border-gray-200 rounded-lg'>
              <button
                className='w-full flex justify-between items-center px-4 py-3 text-left text-gray-900 font-medium'
                onClick={() => toggleIndex(index)}
              >
                <div className='flex items-center space-x-3'>
                  {section.icon}
                  <span className='text-base font-semibold'>{section.title}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className='w-5 h-5' />
                ) : (
                  <ChevronDown className='w-5 h-5' />
                )}
              </button>
              {openIndex === index && (
                <div className='px-4 pb-4 text-gray-700 text-sm leading-relaxed'>
                  {typeof section.content === 'string' ? (
                    <p>{section.content}</p>
                  ) : (
                    <div>{section.content}</div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
