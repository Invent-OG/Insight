"use client";

import Head from "next/head";
import {
  MdSupportAgent,
  MdSchool,
  MdFlight,
  MdWork,
  MdHome,
  MdAttachMoney,
} from "react-icons/md";
import { GiDiploma, GiGraduateCap } from "react-icons/gi";
import { IoDocumentText } from "react-icons/io5";

import { motion, useViewportScroll, useTransform } from "framer-motion";
import AnimatedBackground from "@/components/ui/animated-background";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import "@/app/globals.css";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import animatedStyles from "@/app/services/AnimatedCircles.module.css";
import ServicesHero from "@/components/sections/ServicesHero";

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  const { scrollY } = useViewportScroll();
  const bgY = useTransform(scrollY, [0, 500], ["0%", "30%"], {
    clamp: false,
  });

  const cardsRef = useRef<HTMLDivElement>(null);

  const scrollToCards = () => {
    if (cardsRef.current) {
      const yOffset = -80; // adjust if you have a sticky header
      const y =
        cardsRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 100,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen w-full text-gray-100">
      {/* Hero Section */}
      <ServicesHero scrollToCards={scrollToCards} />

      {/* Services Section */}
      <section ref={cardsRef} className={`${animatedStyles.area} relative`}>
        <ul className={animatedStyles.circles}>
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>

        <div className="relative z-10 px-4 sm:px-6 md:px-12 py-10">
          <h4 className="text-primary uppercase text-center text-base mb-6 tracking-wider">
            — Services —
          </h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-center text-black mb-12 leading-tight">
            What We <span className="text-primary">Offer</span>
          </h2>

          <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <AnimatedBackground
                key={idx}
                enableHover={true}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ServiceCard {...service} index={idx} />
              </AnimatedBackground>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    icon: <MdSupportAgent size={45} className="text-black" />,
    title: "Counselling & Program Discovery",
    description:
      "Having trouble deciding on a course or country? We’ll help you explore your options based on your interests, background, and future goals. Our experienced team will guide you in finding the academic path that suits you best.",
  },
  {
    icon: <MdSchool size={45} className="text-black" />,
    title: "IELTS, Duolingo, & PTE Training",
    description:
      "We offer personalized training for IELTS, Duolingo, and PTE exams to help you meet language requirements with confidence. We also identify universities accepting MOI-based waivers or alternative tests, and guide you through the documentation process.",
    route: "/english-programs",
    featured: true,
  },
  {
    icon: <IoDocumentText size={45} className="text-black" />,
    title: "SOP Writing",
    description:
      "Your Statement of Purpose is your story — and we help you tell it well. We craft compelling, authentic SOPs that highlight your goals, strengths, and personality — no templates, just your true voice.",
  },
  {
    icon: <MdAttachMoney size={45} className="text-black" />,
    title: "Financial & Loan Guidance",
    description:
      "Studying abroad is a big investment, and we make it manageable. Get help understanding tuition, living expenses, and securing scholarships or education loans (collateral & non-collateral) from public and private banks.",
    route: "/loan_assistance",
    featured: true,
  },
  {
    icon: <GiDiploma size={45} className="text-black" />,
    title: "Visa Process Assistance",
    description:
      "Navigating the visa process can be overwhelming — we simplify it. From document prep to interview training, we ensure your student visa application is complete, accurate, and on time.",
  },
  {
    icon: <MdFlight size={45} className="text-black" />,
    title: "Flight Ticket Booking",
    description:
      "We assist in booking affordable international flights that align with your visa timelines and university schedules — so your travel is one less thing to stress about.",
  },
  {
    icon: <GiGraduateCap size={45} className="text-black" />,
    title: "Pre-Departure & Transition Support",
    description:
      "We prepare you for life abroad with travel planning, cultural insights, and packing tips. Upon arrival, we assist with airport pickup, local orientation, and housing support to help you settle smoothly.",
  },
  {
    icon: <MdHome size={45} className="text-black" />,
    title: "Accommodation Arrangements",
    description:
      "Find reliable, safe, and budget-friendly housing — whether university dorms or private rentals. We help you feel at home in your new country from day one.",
  },
  {
    icon: <MdWork size={45} className="text-black" />,
    title: "Part-Time Job Guidance",
    description:
      "Gain work experience and manage expenses while studying. We help you understand local job rules, find flexible part-time roles, and balance work with academics.",
  },
];

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  route?: string;
  featured?: boolean;
}

function ServiceCard({
  icon,
  title,
  description,
  index,
  route,
  featured,
}: ServiceCardProps) {
  const { scrollYProgress } = useViewportScroll();

  const yRangeStart = 0 + index * 0.1;
  const yRangeEnd = 1 + index * 0.1;
  const y = useTransform(scrollYProgress, [yRangeStart, yRangeEnd], [-20, 20], {
    clamp: false,
  });

  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={handleClick}
      className={`relative group p-6 rounded-2xl overflow-hidden bg-transparent border text-black transition-all duration-300 ${
        route ? "cursor-pointer" : ""
      }`}
    >
      {featured && (
        <span className="absolute top-2 right-2 bg-primary text-xs px-2 py-1 rounded-full text-white font-semibold z-10">
          Featured
        </span>
      )}

      {!featured && (
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary transition-all duration-300" />
      )}

      <div className="relative z-10">
        <div className="text-2xl mb-2">{icon}</div>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="text-sm py-2 leading-normal">{description}</p>
      </div>
    </motion.div>
  );
}

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useState } from "react";

// const cards = [
//   {
//     title: "Server Infrastructure",
//     description:
//       "Ethernet cables plugged on a server rack, representing robust networking infrastructure.",
//     image: "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg",
//   },
// ];

// export default function HoverCards() {
//   return (
//     <div className="grid grid-cols-3 gap-8">
//       {cards.map((card, index) => (
//         <HoverCard key={index} card={card} />
//       ))}
//     </div>
//   );
// }

// function HoverCard({ card }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative w-64 h-80 bg-black overflow-hidden cursor-pointer border border-purple-500"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Image src={card.image} alt={card.title} fill className="object-cover" />
//       <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center p-2">
//         <p className="text-lg font-bold">{card.title}</p>
//       </div>

//       <motion.div
//         initial={{ y: "100%" }}
//         animate={{ y: isHovered ? "0%" : "100%" }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//         className="absolute bottom-0 left-0 w-full h-full bg-purple-600/30 backdrop-blur-sm text-white p-4 flex flex-col justify-center"
//       >
//         <p className="mb-4 text-sm">{card.description}</p>
//         <a href="#" className="underline">
//           Read More
//         </a>
//       </motion.div>
//     </div>
//   );
// }
