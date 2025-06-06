"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-gray-700" />, // Changed to gray
  title = "Featured",
  description = "Discover amazing content",
  titleClassName = "text-gray-800", // Changed to gray
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border border-gray-300 bg-white px-4 py-3 transition-all duration-700 shadow-md hover:shadow-lg after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-white after:to-transparent after:content-[''] hover:border-gray-400 [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-gray-200 p-1">
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-normal text-lg text-gray-700">{description}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      icon: "🎯",
      title: "Kind Attitude",
      description:
        "We treat every student with a positive attitude, empathy and respect throughout their journey.",
      className:
        "[grid-area:stack] hover:-translate-y-20 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: "📅",
      title: "Professionalism",
      description:
        "Our expert team ensures timely and reliable support at every step of your application process.",
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: "🔍",
      title: "Clarity",
      description:
        "We provide transparent guidance throughout so you always understand your options, requirements, and next steps.",
      className:
        "[grid-area:stack] translate-x-32 translate-y-20 hover:-translate-y-10",
    },
    {
      icon: "🤝",
      title: "Trust",
      description:
        "We build lasting relationships through honest advice and dependable service you can count on.",
      className:
        "[grid-area:stack] translate-x-48 translate-y-28 hover:translate-y-14",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="min-h-screen  grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
