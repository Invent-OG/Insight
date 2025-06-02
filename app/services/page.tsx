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
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { GiDiploma, GiGraduateCap } from "react-icons/gi";
import { IoDocumentText } from "react-icons/io5";
import AnimatedBackground from "@/components/ui/animated-background"; // Adjust path as needed
import "@/app/globals.css";

// Import the updated HeroGeometric component
import { HeroGeometric } from "@/components/ui/shape-landing-hero"; // Assuming your file is saved here

// DemoHeroGeometric component using the updated HeroGeometric
function DemoHeroGeometric() {
  return <HeroGeometric />;
}

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services | End-to-End Study Abroad Support – Insight</title>
        <meta
          name="description"
          content="From counselling to visa and guaranteed accommodation, get expert support for your global study journey every step of the way."
        />
      </Head>

      <main className="bg-black w-full min-h-screen ">
        {/* Hero Section */}
        <section
          className="min-h-screen flex items-center justify-center text-center"
          style={{ margin: 0, paddingTop: 0, paddingBottom: 0 }}
        >
          <DemoHeroGeometric />
        </section>

        {/* Services Section */}
        <section className="w-full bg-black">
          <div className="max-w-7xl mx-auto px-6 py-16">
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
                  <ServiceCard {...service} data-id={`service-${idx}`} />
                </AnimatedBackground>
              ))}
            </div>
            {/* CTA */}
            <div className="mt-20 text-center">
              <button
                onClick={() => alert("Consultation form coming soon!")}
                className="bg-gradient-to-r from-red-600 to-red-800 hover:scale-105 hover:from-red-700 hover:to-red-900 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300"
              >
                Get Personalized Assistance Now
              </button>
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

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  "data-id"?: string;
};

function ServiceCard({
  icon,
  title,
  description,
  "data-id": dataId,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const springConfig = { stiffness: 400, damping: 20 };
  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      data-id={dataId}
      ref={cardRef}
      className="bg-black rounded-lg p-6 cursor-pointer relative overflow-hidden flex"
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.07, boxShadow: "0 0 40px #f87171" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-2 bg-red-500 rounded-l-lg mr-5" />
      <div>
        <motion.div
          className="text-4xl text-red-400 mb-3"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>
        <motion.h3
          className="text-white text-xl font-semibold overflow-hidden whitespace-nowrap"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "auto", opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-gray-400 mt-2 max-w-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}
