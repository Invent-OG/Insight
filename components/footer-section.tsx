// "use client";

// import React, { useEffect } from "react";
// import Image from "next/image";
// import {
//   FacebookIcon,
//   InstagramIcon,
//   LinkedinIcon,
//   YoutubeIcon,
// } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import logo from "@/public/assets/whitelogo.png";

// interface FooterLink {
//   title: string;
//   href: string;
//   icon?: React.ComponentType<{ className?: string }>;
// }

// interface FooterSection {
//   label: string;
//   links: FooterLink[];
// }

// const footerLinks: FooterSection[] = [
//   {
//     label: "Product",
//     links: [
//       { title: "Features", href: "#features" },
//       { title: "Pricing", href: "#pricing" },
//       { title: "Testimonials", href: "#testimonials" },
//       { title: "Integration", href: "/" },
//     ],
//   },
//   {
//     label: "Company",
//     links: [
//       { title: "FAQs", href: "/faqs" },
//       { title: "About Us", href: "/about" },
//       { title: "Privacy Policy", href: "/privacy" },
//       { title: "Terms of Services", href: "/terms" },
//     ],
//   },
//   {
//     label: "Resources",
//     links: [
//       { title: "Blog", href: "/blog" },
//       { title: "Changelog", href: "/changelog" },
//       { title: "Brand", href: "/brand" },
//       { title: "Help", href: "/help" },
//     ],
//   },
//   {
//     label: "Social Links",
//     links: [
//       { title: "Facebook", href: "#", icon: FacebookIcon },
//       { title: "Instagram", href: "#", icon: InstagramIcon },
//       { title: "Youtube", href: "#", icon: YoutubeIcon },
//       { title: "LinkedIn", href: "#", icon: LinkedinIcon },
//     ],
//   },
// ];

// export function Footer() {
//   return (
//     <footer className="bg-gradient-to-b bg-black text-white relative w-full mx-auto flex flex-col items-center justify-center rounded-t-4xl px-6 py-12 lg:py-16">
//       {/* Decorative top line */}
//       <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

//       <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
//         {/* Logo and copyright */}
//         <div className="space-y-4">
//           <Image src={logo} alt="Company Logo" className="h-10 w-10" />
//           <p className="text-muted-foreground mt-8 text-sm md:mt-0">
//             © {new Date().getFullYear()} Asme. All rights reserved.
//           </p>
//         </div>

//         {/* Footer links */}
//         <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
//           {footerLinks.map((section) => (
//             <div key={section.label} className="mb-10 md:mb-0">
//               <h3 className="text-xs font-semibold uppercase tracking-wide">
//                 {section.label}
//               </h3>
//               <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
//                 {section.links.map((link, i) => (
//                   <li key={i}>
//                     <a
//                       href={link.href}
//                       className="hover:text-foreground inline-flex items-center transition-all duration-300"
//                     >
//                       {link.icon && (
//                         <link.icon className="me-1 size-4" aria-hidden="true" />
//                       )}
//                       {link.title}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }
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
      { title: "Changelog", href: "/changelog" },
      { title: "Brand", href: "/brand" },
      { title: "Help", href: "/contact" },
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
      data-aos="fade-up"
      data-aos-duration="2000"
      className="relative w-full flex flex-col items-center justify-center rounded-t-4xl px-6 py-12 lg:py-16 text-white bg-black"
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
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur z-10" />

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
      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8 relative z-20">
        {/* Logo and copyright */}
        <div className="space-y-4">
          <Image src={logo} alt="Company Logo" className="h-10 w-10" />
          <p className="text-gray-300 mt-8 text-sm md:mt-0">
            © {new Date().getFullYear()} Insight. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section) => (
            <div key={section.label} className="mb-10 md:mb-0">
              <h3 className="text-xs font-semibold uppercase tracking-wide">
                {section.label}
              </h3>
              <ul className="text-gray-300 mt-4 space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="hover:text-white inline-flex items-center transition-all duration-300"
                    >
                      {link.icon && (
                        <link.icon
                          className="me-1 h-4 w-4"
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
