"use client";

import Head from "next/head";
import contact from "@/public/assets/contact.png"; // 👈 Adjust the path as needed
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    });
  }, []);
  return (
    <>
      <Head>
        <title>
          Contact Us | Expert Abroad Study Consultancy – Get in Touch Today
        </title>
        <meta
          name="description"
          content="Contact our expert abroad study consultants for guidance and support to start your international education journey today. Get in touch with the Best Study Abroad Consultancy in Coimbatore. Expert advice. Just a message away."
        />
      </Head>

      <main className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Left Side — Fullscreen Background Image */}
        <div
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-start"
          data-aos-delay="100"
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${contact.src})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        {/* Left Side — Text Over Image */}
        <div className="relative z-10 flex items-center justify-center text-white px-8 py-36 md:w-1/2 w-full text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Plan smarter</span>, go further.
            </h1>
            <p className="text-lg max-w-md mx-auto leading-8">
              Let our experts guide you towards your international education
              journey. Connect with us today.
            </p>
          </div>
        </div>

        {/* Right Side — Transparent Glass Form */}
        <div
          data-aos="flip-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-start"
          data-aos-delay="100"
          className="relative z-10 flex items-center justify-center w-full md:w-1/2 px-8 py-20 backdrop-blur-sm bg-white/10"
        >
          <div className="w-full max-w-lg text-white">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Get in Touch
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500 transition"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500 transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500 transition"
                  placeholder="+91 00000 00000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Interest
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500 transition"
                  placeholder="Study Abroad Program"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-red-700 text-white font-semibold py-3 rounded-md transition transform hover:scale-105 active:scale-95"
              >
                Submit Inquiry
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 text-gray-300">
              <p className="mb-3">
                <strong>Phone:</strong>{" "}
                <a href="tel:+918270883451" className="text-primary">
                  +91 82708 83451
                </a>
              </p>
              <p className="mb-3">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:admin@insightabroadservices.org"
                  className="text-primary"
                >
                  admin@insightabroadservices.org
                </a>
              </p>
              <p className="mb-6">
                <strong>Location:</strong> <br />
                Tharani Complex 3, 8th Street, Cross Cut Road,
                <br />
                Gandhipuram, Coimbatore, Tamil Nadu 641012
              </p>
              <h3 className="text-lg font-semibold mb-2 text-primary">
                Office Hours
              </h3>
              <ul className="text-sm space-y-1">
                <li>Monday – Friday: 9:00 AM – 5:00 PM</li>
                <li>Saturday: 10:00 AM – 3:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
