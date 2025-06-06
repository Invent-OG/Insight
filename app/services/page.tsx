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

function DemoHeroGeometric() {
  return <HeroGeometric />;
}

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
  // Adjust scroll range and movement as you like
  const bgY = useTransform(scrollY, [0, 500], ["0%", "30%"]);

  return (
    <>
      <Head>
        <title>Our Services | End-to-End Study Abroad Support – Insight</title>
        <meta
          name="description"
          content="From counselling to visa and guaranteed accommodation, get expert support for your global study journey every step of the way."
        />
      </Head>

      <main className="bg-gradient-to-tr from-indigo-900 via-black to-gray-900 min-h-screen w-full text-gray-100">
        {/* Hero Section */}
        <section
          className="min-h-screen flex items-center justify-center text-center"
          style={{ margin: 0, paddingTop: 0, paddingBottom: 0 }}
        >
          <DemoHeroGeometric />
        </section>

        {/* Services Section */}
        <section className="w-full relative bg-black/70 overflow-hidden">
          {/* Parallax Background Image */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage: "url('')",
              y: bgY,
              filter: "brightness(0.4)",
            }}
          />

          {/* Background overlay with subtle animated gradient */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-30"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
            }}
            style={{
              backgroundSize: "200% 200%",
              filter: "blur(80px)",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              What We Offer
            </h2>

            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, idx) => (
                <AnimatedBackground
                  key={idx}
                  className="bg-red-100/30 rounded-xl"
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
    icon: <MdSupportAgent size={28} className="text-red-600" />,
    title: "Counselling & Program Discovery",
    description:
      "Having trouble deciding on a course or country? We’ll help you explore your options based on your interests, background, and future goals. Our experienced team will guide you in finding the academic path that suits you best.",
  },
  {
    icon: <MdSchool size={28} className="text-red-600" />,
    title: "IELTS, Duolingo, & PTE Training",
    description:
      "We offer personalized training for IELTS, Duolingo, and PTE exams to help you meet language requirements with confidence. We also identify universities accepting MOI-based waivers or alternative tests, and guide you through the documentation process.",
  },
  {
    icon: <IoDocumentText size={28} className="text-red-600" />,
    title: "SOP Writing",
    description:
      "Your Statement of Purpose is your story — and we help you tell it well. We craft compelling, authentic SOPs that highlight your goals, strengths, and personality — no templates, just your true voice.",
  },
  {
    icon: <MdAttachMoney size={28} className="text-red-600" />,
    title: "Financial & Loan Guidance",
    description:
      "Studying abroad is a big investment, and we make it manageable. Get help understanding tuition, living expenses, and securing scholarships or education loans (collateral & non-collateral) from public and private banks.",
  },
  {
    icon: <GiDiploma size={28} className="text-red-600" />,
    title: "Visa Process Assistance",
    description:
      "Navigating the visa process can be overwhelming — we simplify it. From document prep to interview training, we ensure your student visa application is complete, accurate, and on time.",
  },
  {
    icon: <MdFlight size={28} className="text-red-600" />,
    title: "Flight Ticket Booking",
    description:
      "We assist in booking affordable international flights that align with your visa timelines and university schedules — so your travel is one less thing to stress about.",
  },
  {
    icon: <GiGraduateCap size={28} className="text-red-600" />,
    title: "Pre-Departure & Transition Support",
    description:
      "We prepare you for life abroad with travel planning, cultural insights, and packing tips. Upon arrival, we assist with airport pickup, local orientation, and housing support to help you settle smoothly.",
  },
  {
    icon: <MdHome size={28} className="text-red-600" />,
    title: "Accommodation Arrangements",
    description:
      "Find reliable, safe, and budget-friendly housing — whether university dorms or private rentals. We help you feel at home in your new country from day one.",
  },
  {
    icon: <MdWork size={28} className="text-red-600" />,
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

function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  const { scrollYProgress } = useViewportScroll();

  // Slightly offset each card's scroll range for natural staggered parallax
  const yRangeStart = 0 + index * 0.1;
  const yRangeEnd = 1 + index * 0.1;

  // Map scroll progress to vertical translate Y between -20 and +20 pixels
  const y = useTransform(scrollYProgress, [yRangeStart, yRangeEnd], [-20, 20]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUpVariants}
      style={{ y }}
      className="relative cursor-default p-8 rounded-3xl bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 border border-gray-300 shadow-md flex flex-col items-center text-center text-gray-800"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </motion.div>
  );
}
