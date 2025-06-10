"use client";

import React, { useState, useRef, useEffect } from "react";
import FlipCard from "./FlipCard";
import { StaticImageData } from "next/image";

// Import images
import uk from "@/public/assets/UK.png";
import usa from "@/public/assets/country/Usa.jpg";
import ireland from "@/public/assets/country/Ireland.jpg";
import canada from "@/public/assets/country/Canada (1).png";

// Parallax background image (replace with any wide image you want)
import parallaxBg from "@/public/assets/country/Netherland.jpg"

interface Country {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
}

export const countries: Country[] = [
  {
    id: "card1",
    title: "Study in UK",
    description: `Home to renowned institutions like Oxford and Cambridge, the UK offers rigorous programs, short duration courses, and a strong academic tradition. Cities in the UK offers a student-friendly atmosphere, blending culture and connectivity. They offer a 1-year master’s degree with no compromise on academic standards, along with a 2-year stay-back option. With part-time work opportunities, the UK is ideal for career-focused learners.`,
    image: uk,
  },
  {
    id: "card2",
    title: "Study in the USA",
    description: `The U.S. is a top destination for international students, offering prestigious universities like Harvard and MIT, a flexible education system, research projects and internship opportunities. Its diverse lifestyle—from city campuses to quiet towns—enhances the student experience. Offering a 2-year master's program and a 3-year stay-back option, students can gain valuable work experience after graduation through Optional Practical Training (OPT) and STEM extensions.`,
    image: usa,
  },
  {
    id: "card3",
    title: "Study in Ireland",
    description: `Ireland is home to prestigious universities like Trinity College Dublin and University College Dublin, known for academic excellence. With vibrant cities, affordable tuition, and a welcoming atmosphere, it offers an exceptional student experience. Ireland also provides Post-Graduation Work Permits, making it a great choice for long-term career and settlement opportunities.`,
    image: ireland,
  },
  {
    id: "card4",
    title: "Study in Canada",
    description: `Canada stands out for its world-class universities like the University of Toronto and McGill, inclusive society, and high standard of living. Affordable tuition, multicultural cities, and a welcoming environment make it a top choice. Post-Graduation Work Permits (up to 3 years) and clear Permanent Residency pathways support long-term settlement.`,
    image: canada,
  },
];

const CountryList: React.FC = () => {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  // Ref for scroll container
  const scrollRef = useRef<HTMLDivElement>(null);

  // State for parallax background X offset
  const [parallaxX, setParallaxX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        setParallaxX(scrollLeft * 0.3); // Adjust multiplier for parallax speed
      }
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (el) {
        el.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-full mx-auto bg-black/90 py-10 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute top-0 left-0 w-[200%] h-full -z-10 pointer-events-none select-none"
        style={{
          transform: `translateX(${-parallaxX}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <img
          src={parallaxBg.src}
          alt="Parallax background"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-6 scrollbar-hide max-w-full"
      >
        {countries.map((country, index) => (
          <FlipCard
            key={index}
            imageSrc={country.image}
            title={country.title}
            backDescription={country.description}
            id={country.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryList;
