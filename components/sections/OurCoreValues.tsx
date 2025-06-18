"use client";

import React, { ReactNode } from "react";
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
  return (
    <section className="relative w-full min-h-screen md:px-16 bg-white overflow-hidden lg:py-16 py-10">
      {/* ✅ Background Image with Opacity */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/textures/ourcorebg1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          opacity: 0.2, // Adjust this value as needed (0.1 to 0.5 recommended)
        }}
      />
      {/* Heading at top */}
      <div className="flex justify-center items-center  pb-12 text-center">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-black">
          Our <span className="text-primary">Core</span> Values
        </h1>
      </div>

      {/* Cards in grid layout */}
      <section className="flex justify-center items-center ">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {children}
        </article>
      </section>
    </section>
  );
}

const RoadmapCard: React.FC<CardProps> = ({
  logo,
  title,
  description,
  background,
}) => {
  return (
    <div
      className="p-8 rounded-[24px] flex flex-col gap-6 max-w-[450px] w-full shadow-md"
      style={{ background }}
    >
      <div className="text-4xl text-red-500">{logo}</div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl text-black">{title}</h1>
        <p className="font-normal text-black text-sm md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

Roadmap.Card = RoadmapCard;

// ---- Usage (inside your page or component) ----

export function RoadmapSection() {
  return (
    <div className="relative z-10 min-h-screen bg-white">
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
