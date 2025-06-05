"use client";

import React, { useRef, useState } from "react";
import FlipCard from "./FlipCard";
import { countries } from "@/components/sections/Countries"; // your data
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import france from "@/public/assets/country/Japan.png";

const CountriesCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const router = useRouter();
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden">
      {/* Background image with animation */}
      <div className="absolute inset-0 -z-20 overflow-hidden ">
        <Image
          src={france}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="animate-zoom-slow"
          priority
          quality={75}
        />
      </div>

      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Your content */}
      <div className="relative z-10 bg-transparent text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center py-8">
          Countries
        </h1>
        <div
          ref={carouselRef}
          className="w-full overflow-x-auto scroll-smooth scrollbar-hide flex justify-center"
        >
          <div className="flex gap-6 px-4 py-12 mb-6">
            {countries.map((country, index) => (
              <div key={index} className="flex-shrink-0">
                <FlipCard
                  imageSrc={country.image}
                  title={country.title}
                  backDescription={country.description}
                  id={country.id}
                  flipped={flippedCardId === country.id}
                  setFlippedCardId={setFlippedCardId}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Center button */}
        <div className="flex justify-center py-4">
          <Button onClick={() => router.push("/countries")}>
            Explore Countries
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CountriesCarousel;
