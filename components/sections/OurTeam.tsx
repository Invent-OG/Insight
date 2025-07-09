"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const teamMembers = [
  {
    name: "Adam John",
    role: "Stack Developer",
    image: "/assets/teams/teams1.jpg",
  },
  {
    name: "Ann Richmond",
    role: "Creative Leader",
    image: "/assets/teams/teams2.jpg",
  },
  {
    name: "Alex Grinfield",
    role: "Programming Guru",
    image: "/assets/teams/teams3.jpg",
  },
  {
    name: "Jeffrey Brown",
    role: "Manager",
    image: "/assets/teams/teams4.jpg",
  },
  {
    name: "Sophie Turner",
    role: "UI/UX Designer",
    image: "/assets/teams/teams5.jpg",
  },
  {
    name: "Mark Zhao",
    role: "DevOps Engineer",
    image: "/assets/teams/teams6.jpg",
  },
];

export default function OurTeam() {

  return (
    <section
      className="relative w-full min-h-screen bg-white py-16 px-6 overflow-hidden "
    >
      {/* === Floating Decorations === */}
      <svg
        className="absolute left-[-60px] top-[-60px] w-60 h-60 z-0 animate-floating"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="40" fill="#FECACA" opacity="0.25" />
      </svg>

      <svg
        className="absolute right-0 top-[100px] w-72 h-72 z-0 animate-floating-reverse"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="10"
          width="80"
          height="80"
          rx="15"
          fill="#FBCFE8"
          opacity="0.2"
        />
      </svg>

      <svg
        className="absolute bottom-[-100px] right-[60px] w-72 h-72 z-0 animate-floating"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="50,10 90,90 10,90" fill="#FBCFE8" opacity="0.2" />
      </svg>

      {/* === Header === */}
      <div className="text-center relative z-10 mb-20 team-header">
        <h2 className="lg:text-5xl text-3xl font-extrabold text-gray-900">
          The <span className="text-primary">Dream</span> Team
        </h2>
        <p className="mt-3 text-lg text-red-600">
          Meet the talent that powers us forward
        </p>
      </div>

      {/* === Cards === */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="team-card bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group will-change-transform"
          >
            <div className="relative overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500 will-change-transform"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-red-600">{member.role}</p>
              </div>
            </div>
            <div className="p-5 flex justify-center gap-6 text-gray-500 text-xl border-t border-gray-100">
              <a href="#" className="hover:text-orange-500 transition">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <i className="fab fa-linkedin" />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
