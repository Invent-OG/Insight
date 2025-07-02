
"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Sparkles, UserCog, Lightbulb, Handshake } from "lucide-react";
import ourcorevalues from "@/public/assets/about/ourcorevalue.webp";

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
  const [bgAttachment, setBgAttachment] = useState("fixed");

  useEffect(() => {
    const handleResize = () => {
      setBgAttachment(window.innerWidth <= 768 ? "scroll" : "fixed");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full px-4 sm:px-6 md:px-10 lg:px-16 bg-white overflow-hidden py-10 lg:py-16">
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center opacity-90"
        style={{
          backgroundImage: `url(${ourcorevalues.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundAttachment: bgAttachment,
        }}
      />

      <div className="flex justify-center items-center pb-12 text-center z-10 relative">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-black leading-tight">
          Our <span className="text-primary">Core</span> Values
        </h1>
      </div>

      <section className="flex justify-center items-center relative z-10">
        <article className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
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
      className="p-6 sm:p-8 rounded-2xl flex flex-col gap-4 sm:gap-6 max-w-xs sm:max-w-sm md:max-w-md w-full shadow-md h-auto md:h-[340px] lg:h-[380px] xl:h-[250px] overflow-hidden"
      style={{ background }}
    >
      <div className="text-3xl sm:text-4xl text-red-500">{logo}</div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl sm:text-2xl text-black">{title}</h1>
        <p className="font-normal text-sm sm:text-base md:text-lg text-black line-clamp-5">
          {description}
        </p>
      </div>
    </div>
  );
};

Roadmap.Card = RoadmapCard;

export function RoadmapSection() {
  return (
    <div className="relative z-10 bg-white">
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
