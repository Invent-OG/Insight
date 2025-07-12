"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import logo from "@/public/assets/whitelogo.png";
import footerbg from "@/public/assets/footerbg.jpg";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Product",
    links: [
      { title: "Features", href: "/services" },
      { title: "Pricing", href: "#pricing" },
      { title: "Testimonials", href: "#testimonials" },
      { title: "Integration", href: "/" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "FAQs", href: "/faqs" },
      { title: "About Us", href: "/about" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Services", href: "/terms" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Blog", href: "/blogs" },
      { title: "Help", href: "/contact" },
      { title: "Admin Login", href: "/admin/login" },
    ],
  },
  {
    label: "Social Links",
    links: [
      { title: "Facebook", href: "#", icon: FacebookIcon },
      { title: "Instagram", href: "#", icon: InstagramIcon },
      { title: "Youtube", href: "#", icon: YoutubeIcon },
      { title: "LinkedIn", href: "#", icon: LinkedinIcon },
    ],
  },
];

export function Footer() {
  useEffect(() => {
    AOS.init({ once: true }); // animation setup
  }, []);

  return (
    <footer
      // data-aos="fade-up"
      // data-aos-duration="2000"
      className="relative z-50 flex flex-col items-center justify-center w-full px-6 py-12 text-white bg-black rounded-t-4xl lg:py-16"
    >
      {/* Background Map Overlay */}
      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="absolute inset-0 z-0"
      >
        <Image
          src={footerbg}
          alt="World map background"
          fill
          className="object-cover object-center opacity-5"
          priority
        />
      </div>

      {/* Decorative top line */}
      <div className="absolute top-0 z-10 w-1/3 h-px -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/20 right-1/2 left-1/2 blur" />

      {/* Spinning Globe in Corner (optional) */}
      <div className="absolute lg:-left-10 lg:bottom-52  -left-10 -top-5 w-24 h-24 opacity-[5%] pointer-events-none z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
          stroke="white"
          strokeWidth="2"
          className="w-full h-full animate-[spin_20s_linear_infinite]"
        >
          <circle cx="32" cy="32" r="30" />
          <path d="M32 2c0 12 0 48 0 60" />
          <path d="M2 32c12 0 48 0 60 0" />
          <ellipse cx="32" cy="32" rx="30" ry="12" />
          <ellipse cx="32" cy="32" rx="30" ry="20" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-20 grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        {/* Logo and copyright */}
        <div className="space-y-4">
          <Image src={logo} alt="Company Logo" className="w-10 h-10" />
          <p className="mt-8 text-sm text-gray-300 md:mt-0">
            © {new Date().getFullYear()} Insight. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 mt-10 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section) => (
            <div key={section.label} className="mb-10 md:mb-0">
              <h3 className="text-xs font-semibold tracking-wide uppercase">
                {section.label}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="inline-flex items-center transition-all duration-300 hover:text-white"
                    >
                      {link.icon && (
                        <link.icon
                          className="w-4 h-4 me-1"
                          aria-hidden="true"
                        />
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
