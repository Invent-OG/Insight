
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const universities = [
  {
    name: "RWTH Aachen University",
    images: ["/assets/univercites/RWTH AACHEN UNIVERSITY.webp"],
  },
  {
    name: "Arizona State University",
    images: ["/assets/univercites/Arizona state university.webp"],
  },
  {
    name: "University of Twente",
    images: ["/assets/univercites/univeresity of twente.webp"],
  },
  {
    name: "Radboud University",
    images: ["/assets/univercites/Radboud university.webp"],
  },
  {
    name: "RMIT University",
    images: ["/assets/univercites/RMIT university.webp"],
  },
  {
    name: "Drexel University",
    images: ["/assets/univercites/Drexel university.webp"],
  },
  {
    name: "University of Oxford",
    images: ["/assets/univercites/University of oxford.webp"],
  },
  {
    name: "University of Cambridge",
    images: ["/assets/univercites/University of Cambridge.webp"],
  },
  {
    name: "University of Tech Sydney",
    images: ["/assets/univercites/Tech sydney.webp"],
  },
];

export default function UniversitiesSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => prev + 1);
      setSlideIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 100,
      once: true,
    });
  }, []);

  const currentUniversities = universities.slice(
    slideIndex * 3,
    slideIndex * 3 + 3
  );

  return (
    <div className="relative">
      <section className="relative text-black px-4 py-12 md:py-11 lg:py-4 overflow-hidden">
        {/* Mobile-only Background */}
        <div
          className="absolute inset-0 z-0 block md:hidden"
          style={{
            backgroundImage: "url('/assets/textures/university2.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center", // 👈 this is the key fix
            backgroundAttachment: "scroll",
            opacity: 0.6,
          }}
        />

        {/* Desktop Background */}
        <div
          className="absolute inset-0 z-0 hidden md:block"
          style={{
            backgroundImage: "url('/assets/textures/university2.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            opacity: 0.5,
          }}
        />
        <div className="relative z-10 container mx-auto max-w-7xl md:py-8 md:mb-4 lg:mt-6 lg:py-2">
          <div className="text-center max-w-4xl mx-auto lg:mb-12 space-y-8">
            <h4 className="text-yellow-400 text-xs md:text-sm uppercase tracking-wider relative">
              <span className="before:content-['—'] before:mr-2 after:content-['—'] after:ml-2 text-primary text-base">
                Universities
              </span>
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Unlock New <span className="text-primary">Opportunities</span>{" "}
              With <span className="text-primary">Insights</span>
            </h2>
          </div>
          <div className="w-full max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:py-4 py-6">
            {currentUniversities.map((uni, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden group shadow-lg hover:scale-105 transition-transform duration-300 bg-[#111111]"
              >
                <div className="relative w-full h-60 sm:h-64 md:h-72">
                  {uni.images.length > 1 ? (
                    uni.images.map((img, imgIndex) => (
                      <Image
                        key={imgIndex}
                        src={img}
                        alt={`${uni.name} Image ${imgIndex + 1}`}
                        fill
                        className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ${
                          imgIndex === imageIndex % uni.images.length
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      />
                    ))
                  ) : (
                    <Image
                      src={uni.images[0]}
                      alt={uni.name}
                      fill
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                  <h3 className="text-white text-lg font-bold uppercase tracking-wide">
                    {uni.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
