'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '@/public/assets/whitelogo.png';
import mavenlogo from '@/public/assets/mavenlogo.webp';

gsap.registerPlugin(ScrollTrigger);

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
  const footerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer entrance animation
      gsap.fromTo(
        footerRef.current,
        { y: 100, opacity: 1 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
            end: 'top top+=400',
            scrub: true,
          },
        }
      );

      // Show fixed logo only when footer is visible
      gsap.fromTo(
        logoRef.current,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
            end: 'bottom bottom',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Fixed logo at bottom right (initially hidden) */}
      <div ref={logoRef} className='fixed bottom-4 right-4 z-50 opacity-0 pointer-events-none'>
        <Image
          src={mavenlogo}
          alt='Footer Logo'
          width={200}
          height={200}
          priority
          className='w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto'
        />
      </div>

      <footer
        ref={footerRef}
        className='relative z-40 flex flex-col items-center justify-center w-full px-6 py-12 text-white bg-black'
      >
        {/* Footer Content */}
        <div className='relative z-20 w-full max-w-7xl'>
          <div className='grid gap-12 md:grid-cols-2 xl:grid-cols-3'>
            {/* Logo and copyright */}
            <div className='flex flex-col items-start space-y-4'>
              <Image src={logo} alt='Company Logo' className='w-32 sm:w-36 md:w-40 h-auto' />
              <p className='text-sm text-gray-300'>
                © {new Date().getFullYear()} Insight. All rights reserved.
              </p>
            </div>

            {/* Footer Links */}
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
      </footer>
    </>
  );
}
