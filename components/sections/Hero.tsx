"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";

// Background images
const backgroundImages = [
  "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=600",
];

// Side illustration images
const sideImages = [
  "https://images.pexels.com/photos/1526713/pexels-photo-1526713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/18160413/pexels-photo-18160413/free-photo-of-a-person-paddling-a-paddle-board-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/19568896/pexels-photo-19568896/free-photo-of-a-large-church-with-a-clock-tower-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentImage(
      (prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length
    );
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImages[currentImage]}
          alt="Background"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 px-6 text-white text-center md:text-left max-w-6xl w-full">
        {/* Text Content + Nav buttons container */}
        <div className="max-w-xl flex flex-col md:items-start items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Empowering Your{" "}
            <span className="text-primary inline-block">
              <AnimatedTextCycle
                words={[
                  "Digital",
                  "Cloud",
                  "AI",
                  "Next-Gen",
                  "Scalable",
                  "Smart",
                  "Futuristic",
                ]}
                interval={3000}
                className="text-primary font-extrabold"
              />
            </span>{" "}
            Journey
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Build, scale, and launch faster with our modern tech solutions.
          </p>
          <button className="bg-primary hover:bg-red-900 text-white font-bold px-8 py-3 rounded-xl transition-all mb-8 md:mb-12">
            Get Started
          </button>

          {/* Navigation Buttons */}
          <div className="flex justify-center md:justify-start gap-6">
            <button
              onClick={goToPrev}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Side Image */}
        <Image
          className="w-full sm:w-72 md:w-80 h-96 rounded-2xl shadow-lg object-cover"
          width={320}
          height={384}
          src={sideImages[currentImage]}
          alt="Hero Illustration"
          priority
        />
      </div>
    </section>
  );
}
