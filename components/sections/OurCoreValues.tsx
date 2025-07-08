"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Sparkles, UserCog, Lightbulb, Handshake } from "lucide-react";

interface RoadmapProps {
  children: ReactNode;
}

interface CardProps {
  index: number;
  logo: React.ReactNode;
  title: string;
  description: string;
  background: string;
}

export default function Roadmap({ children }: RoadmapProps) {
  useEffect(() => {
    const handleResize = () => {};
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20 bg-gray-200 overflow-hidden">
      {/* Section Title */}
      <div className="relative z-10 text-center mb-10 sm:mb-12 ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
          Our <span className="text-primary">Core</span> Values
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="relative z-10 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 w-full max-w-7xl px-2 sm:px-4">
          {children}
        </div>
      </div>
    </section>
  );
}

const RoadmapCard: React.FC<CardProps> = ({ logo, title, description }) => {
  return (
    <div className="relative group p-6 sm:p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col gap-6 border border-gray-100 overflow-hidden">
      {/* Decorative SVG Circle at top-right */}
      <div className="absolute -top-8 -right-10 z-0 opacity-60 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="currentColor"
          className="w-20 h-20 text-primary"
        >
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>

      {/* Icon Container (above SVG layer) */}
      <div className="z-10 w-16 h-16 flex items-center justify-center rounded-full backdrop-blur-md bg-white/30 border border-white/40 shadow-md">
        <div className="text-3xl text-primary">{logo}</div>
      </div>

      {/* Text Content */}
      <div className="z-10 flex flex-col gap-2 border-t pt-4 border-gray-200">
        <h3 className="text-lg font-mono font-semibold text-gray-800 uppercase tracking-wide">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

Roadmap.Card = RoadmapCard;

export function RoadmapSection() {
  return (
    <div className="bg-white">
      <Roadmap>
        <Roadmap.Card
          index={0}
          title="Kind Attitude"
          description="We treat every student with a positive attitude, empathy and respect throughout their journey."
          background="#DCFCE7"
          logo={<Sparkles />}
        />
        <Roadmap.Card
          index={1}
          title="Professionalism"
          description="Our expert team ensures timely and reliable support at every step of your application process."
          background="#E0F2FE"
          logo={<UserCog />}
        />
        <Roadmap.Card
          index={2}
          title="Clarity"
          description="We provide transparent guidance throughout so you always understand your options, requirements, and next steps."
          background="#FEF9C3"
          logo={<Lightbulb />}
        />
        <Roadmap.Card
          index={3}
          title="Trust"
          description="We build lasting relationships through honest advice and dependable service you can count on."
          background="#FEE2E2"
          logo={<Handshake />}
        />
      </Roadmap>
    </div>
  );
}
