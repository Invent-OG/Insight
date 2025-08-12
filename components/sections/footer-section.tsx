'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
import logo from '@/public/assets/whitelogo.png';
import mavenlogo from '@/public/assets/logos/mavenlogo.jpeg';

const footerLinks = [
  {
    label: 'Company',
    links: [
      { title: 'FAQs', href: '/faq' },
      { title: 'About Us', href: '/about' },
      { title: 'Privacy Policy', href: '/privacy-policy' },
      { title: 'Terms of Services', href: '/termsofservice' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Blog', href: '/blogs' },
      { title: 'Services', href: '/services' },
      { title: 'Loan Assistance', href: '/loan_assistance' },
      { title: 'Contact Us', href: '/contact' },
      { title: 'Countries', href: '/countries' },
      { title: 'Courses', href: '/courses' },
      { title: 'Admin Login', href: '/admin/login' },
    ],
  },
  {
    label: 'Social Links',
    links: [
      { title: 'Facebook', href: '#', icon: FacebookIcon },
      { title: 'Instagram', href: '#', icon: InstagramIcon },
      { title: 'Youtube', href: '#', icon: YoutubeIcon },
      { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
    ],
  },
];

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={footerRef}
      className={`relative md:min-h-[50vh] z-40 flex flex-col items-center justify-center w-full px-6 py-12 text-white bg-black transition-transform duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'
      }`}
    >
      <div className='relative z-20 w-full max-w-7xl'>
        <div className='grid gap-12 md:grid-cols-2 xl:grid-cols-3'>
          {/* Logo */}
          <div className='flex flex-col items-start space-y-4'>
            <Image src={logo} alt='Company Logo' className='w-32 sm:w-36 md:w-40 h-auto' />
            <p className='text-sm text-gray-300'>
              © {new Date().getFullYear()} Insight. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className='md:col-span-1 xl:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8'>
            {footerLinks.map((section) => (
              <div key={section.label}>
                <h3 className='text-xs font-semibold tracking-wide uppercase'>{section.label}</h3>
                <ul className='mt-4 space-y-2 text-sm text-gray-300'>
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className='inline-flex items-center transition-all duration-300 hover:text-white'
                      >
                        {'icon' in link && link.icon && (
                          <link.icon className='w-4 h-4 me-1' aria-hidden='true' />
                        )}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Maven logo bottom-right */}
      <div className='absolute bottom-4 right-4 z-50'>
        <Image
          src={mavenlogo}
          alt='Footer Logo'
          width={200}
          height={200}
          priority
          className='w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto rounded-full shadow-lg'
        />
      </div>
    </div>
  );
}
