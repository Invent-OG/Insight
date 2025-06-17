"use client";

import React, { ReactNode, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
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
    <section className="relative w-full min-h-screen md:px-16">
      {/* Background image */}

      {/* Heading at top */}
      <div className="flex justify-center items-center pt-24 pb-12 text-center">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-black">
          Our Core Values
        </h1>
      </div>

      {/* Cards centered vertically */}
      <section className="flex justify-center items-center md:p-16">
        <article className="md:px-16 p-5 flex flex-col items-center gap-12">
          {children}
        </article>
      </section>
    </section>
  );
}

const RoadmapCard: React.FC<CardProps> = ({
  index,
  logo,
  title,
  description,
  background,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [40, -index * 4]);

  return (
    <div
      ref={containerRef}
      className="top-[80px] sticky flex justify-center h-screen"
    >
      <motion.div
        className="py-10 px-8 rounded-[24px] flex flex-col gap-6 max-w-[450px] max-h-[320px] relative"
        style={{
          background: background,
          rotate,
        }}
      >
        <div className="text-4xl text-primary">{logo}</div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl text-black">{title}</h1>
          <p className="font-normal text-black text-sm md:text-lg">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

Roadmap.Card = RoadmapCard;

// ---- Usage (inside your page or component) ----

export function RoadmapSection() {
  return (
    <div
      data-aos="fade-down-right"
      data-aos-duration="800"
      data-aos-anchor-placement="top-end"
      className="relative z-10 min-h-screen"
    >
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
