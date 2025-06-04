"use client";

import React, { useRef } from "react";
import FlipCard from "./FlipCard";
import { countries } from "@/components/sections/Countries"; // your data
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

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

  return (
    <div className="bg-black">
      <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight  text-center ">
        Countries
      </h1>
      <div className="relative w-full">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          aria-label="Scroll Left"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-md transition
          bg-red-700 hover:bg-black"
        >
          <FaArrowAltCircleLeft size={30} className="text-white" />
        </button>

        {/* Carousel container */}
        <div
          ref={carouselRef}
          className="w-full overflow-x-auto scroll-smooth scrollbar-hide bg-black"
        >
          <div className="flex gap-6 px-4 py-8">
            {countries.map((country, index) => (
              <div key={index} className="flex-shrink-0">
                <FlipCard
                  imageSrc={country.image}
                  title={country.title}
                  backDescription={country.description}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          aria-label="Scroll Right"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-md transition
          bg-red-700 hover:bg-black"
        >
          <FaArrowAltCircleRight size={30} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default CountriesCarousel;
