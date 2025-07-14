"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "@/public/assets/whitelogo.png";

gsap.registerPlugin(ScrollTrigger);

type FooterLink = {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

type FooterSection = {
  label: string;
  links: FooterLink[];
};

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
  const footerRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          toggleActions: "play none none none", // only play once
        },
      }
    );
  }, footerRef);

  return () => ctx.revert();
}, []);


  return (
    <footer
      ref={footerRef}
      className="relative z-50 h-[50vh] flex flex-col items-center justify-center w-full bg-black text-white px-6 py-12"
    >
      <div className="relative z-20 grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        {/* Logo + Copyright */}
        <div className="space-y-4">
          <Image src={logo} alt="Company Logo" className="w-10 h-10" />
          <p className="mt-8 text-sm text-gray-300 md:mt-0">
            © {new Date().getFullYear()} Insight. All rights reserved.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-8 mt-10 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section) => (
            <div key={section.label}>
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
                          aria-hidden={true}
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
