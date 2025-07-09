"use client";
import { useRouter } from "next/navigation";
import React from "react";

export function LampDemo() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen bg-[hsl(210,47%,23%)] flex items-center px-4 py-12 overflow-hidden">
      {/* Main Content */}
      <div className="absolute top-24 -left-4 md:top-6 md:left-6 lg:top-4 lg:-left-10 lg:bg-[hsl(210,47%,23%)] p-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-40 h-40 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 fill-[hsl(210,46%,27%)]"
        >
          <polygon points="0,0 100,50 0,100" />
        </svg>
      </div>
      <div className="absolute top-24 -left-4 md:top-6 md:left-6 lg:top-20 lg:-left-10 lg:bg-[hsl(210,47%,23%)] p-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-40 h-40 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 fill-[hsl(210,46%,27%)]"
        >
          <polygon points="0,0 100,50 0,100" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-56 md:top-6 md:left-6 lg:top-10 lg:right-10 lg:left-auto lg:bg-[hsl(210,47%,23%)] p-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-40 h-40 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 fill-[hsl(210,46%,27%)] rotate-180 opacity-40"
        >
          <polygon points="0,0 100,50 0,100" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
        {/* Left Content */}
        <div className="text-white space-y-6">
          <h1 className="lamp-heading text-4xl md:text-5xl font-bold md:font-extrabold leading-tight">
            <span className="text-primary">Insight Educator</span> Abroad
            Services
          </h1>

          <p className="text-base text-white/90">
            We provide expert guidance to help students explore global education
            opportunities with clarity, confidence, and care.
          </p>
          <div className="flex flex-col  sm:flex-row gap-6">
            <button
              onClick={() => router.push("/services")}
              className="px-6 py-3 bg-white text-primary font-semibold rounded hover:bg-gray-300 transition"
            >
              Explore Our Services
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-red-700 transition"
            >
              Get Free Consultation
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-64 sm:h-80 md:h-96">
          <img
            src="/assets/about/aboutpage.webp"
            alt="Study Abroad"
            className="w-full h-full object-cover  shadow-lg"
          />
        </div>
      </div>

      {/* Bottom Right Wave SVG */}
      <div className="absolute bottom-0 right-0 w-full z-0">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#ffffff10"
            d="M0,160L80,160C160,160,320,160,480,154.7C640,149,800,139,960,149.3C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
