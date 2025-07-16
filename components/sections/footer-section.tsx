'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '@/public/assets/whitelogo.png';

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
  {
    label: 'Company',
    links: [
      { title: 'FAQs', href: '/faqs' },
      { title: 'About Us', href: '/about' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Services', href: '/terms' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Blog', href: '/blogs' },
      { title: 'Services', href: '/services' },
      { title: 'Loan Assistance', href: '/loan_assistance' },
      { title: 'Contact Us', href: '/contact' },
      { title: 'Countries ', href: '/countries' },
      { title: 'Courses ', href: '/courses' },

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
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { y: 100, opacity: 1 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom', // when footer enters view
            end: 'top top+=400',
            scrub: true, // parallax-like effect
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className='relative z-50 flex flex-col items-center justify-center w-full lg:h-[60vh] px-6 py-12 text-white bg-black'
    >
      <div className='absolute bottom-0 right-0 bg-white'>
        <Image
          src='/assets/mavenlogo.webp'
          height={100}
          width={100}
          alt='Footer Image'
          className='w-full h-20'
        />
      </div>

      {/* Footer Content */}
      <div className='relative z-20 grid w-full gap-8 xl:grid-cols-3 xl:gap-8'>
        {/* Logo and copyright */}
        <div className='space-y-4'>
          <Image src={logo} alt='Company Logo' className='w-40 h-40' />
          <p className='mt-8 text-sm text-gray-300 md:mt-0'>
            © {new Date().getFullYear()} Insight. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className='grid grid-cols-2 gap-8 mt-10 md:grid-cols-4 xl:col-span-2 xl:mt-0'>
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
    </footer>
  );
}
