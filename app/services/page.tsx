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
import AnimatedBackground from "@/components/ui/animated-background"; // Adjust path as needed
import { HeroGeometric } from "@/components/ui/shape-landing-hero"; // Adjust path as needed
import "@/app/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import animatedStyles from "@/app/services/AnimatedCircles.module.css";

// Animation variants for fade-in and slide-up on mount
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

  // Map scrollY to background Y position for parallax effect
  const bgY = useTransform(scrollY, [0, 500], ["0%", "30%"], {
    clamp: false,
  });

  useEffect(() => {
    AOS.init({
      duration: 100,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Our Services | End-to-End Study Abroad Support – Insight</title>
        <meta
          name="description"
          content="From counselling to visa and guaranteed accommodation, get expert support for your global study journey every step of the way."
        />
      </Head>

      <main className=" min-h-screen w-full text-gray-100">
        {/* Hero Section */}
        <div>
          <HeroGeometric />
        </div>

        {/* Services Section */}
        <section className={`${animatedStyles.area} relative`}>
          <ul className={animatedStyles.circles}>
            {Array.from({ length: 10 }).map((_, i) => (
              <li key={i}></li>
            ))}
          </ul>

          <div className="relative z-10 px-4 sm:px-6 md:px-12 py-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-center text-white mb-12 leading-tight">
              What We <span className="text-primary">Offer</span>
            </h2>

            <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
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
    </>
  );
}

const services = [
  {
    icon: <MdSupportAgent size={45} className="text-white" />,
    title: "Counselling & Program Discovery",
    description:
      "Having trouble deciding on a course or country? We’ll help you explore your options based on your interests, background, and future goals. Our experienced team will guide you in finding the academic path that suits you best.",
  },
  {
    icon: <MdSchool size={45} className="text-white" />,
    title: "IELTS, Duolingo, & PTE Training",
    description:
      "We offer personalized training for IELTS, Duolingo, and PTE exams to help you meet language requirements with confidence. We also identify universities accepting MOI-based waivers or alternative tests, and guide you through the documentation process.",
  },
  {
    icon: <IoDocumentText size={45} className="text-white" />,
    title: "SOP Writing",
    description:
      "Your Statement of Purpose is your story — and we help you tell it well. We craft compelling, authentic SOPs that highlight your goals, strengths, and personality — no templates, just your true voice.",
  },
  {
    icon: <MdAttachMoney size={45} className="text-white" />,
    title: "Financial & Loan Guidance",
    description:
      "Studying abroad is a big investment, and we make it manageable. Get help understanding tuition, living expenses, and securing scholarships or education loans (collateral & non-collateral) from public and private banks.",
  },
  {
    icon: <GiDiploma size={45} className="text-white" />,
    title: "Visa Process Assistance",
    description:
      "Navigating the visa process can be overwhelming — we simplify it. From document prep to interview training, we ensure your student visa application is complete, accurate, and on time.",
  },
  {
    icon: <MdFlight size={45} className="text-white" />,
    title: "Flight Ticket Booking",
    description:
      "We assist in booking affordable international flights that align with your visa timelines and university schedules — so your travel is one less thing to stress about.",
  },
  {
    icon: <GiGraduateCap size={45} className="text-white" />,
    title: "Pre-Departure & Transition Support",
    description:
      "We prepare you for life abroad with travel planning, cultural insights, and packing tips. Upon arrival, we assist with airport pickup, local orientation, and housing support to help you settle smoothly.",
  },
  {
    icon: <MdHome size={45} className="text-white" />,
    title: "Accommodation Arrangements",
    description:
      "Find reliable, safe, and budget-friendly housing — whether university dorms or private rentals. We help you feel at home in your new country from day one.",
  },
  {
    icon: <MdWork size={45} className="text-white" />,
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
}

// ✅ HIGHLIGHTED second card only
function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  const { scrollYProgress } = useViewportScroll();

  const yRangeStart = 0 + index * 0.1;
  const yRangeEnd = 1 + index * 0.1;
  const y = useTransform(scrollYProgress, [yRangeStart, yRangeEnd], [-20, 20], {
    clamp: false,
  });

  const isHighlighted = index === 1;

  const router = useRouter();

  const handleClick = () => {
    if (isHighlighted) {
      router.push("/english-programs");
    }
  };
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={handleClick}
      className={`relative group p-6 rounded-2xl overflow-hidden text-white transition-all duration-300 ${
        isHighlighted
          ? "bg-gradient-to-br  via-black to-black border-2 border-primary cursor-pointer"
          : "bg-transparent  cursor-default"
      }`}
    >
      {!isHighlighted && (
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary transition-all duration-300" />
      )}
      {isHighlighted && (
        <span className="absolute top-2 right-2 bg-primary text-xs px-2 py-1 rounded-full text-black font-semibold z-10">
          Featured
        </span>
      )}
      <div className="relative z-10">
        <div className="text-2xl mb-2">{icon}</div>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="text-sm py-2 leading-normal">{description}</p>
      </div>
    </motion.div>
  );
}
