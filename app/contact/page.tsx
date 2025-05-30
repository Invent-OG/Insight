"use client";

import Head from "next/head";
import contact from "@/public/assets/contact.png"; // 👈 Adjust the path as needed

export default function Contact() {
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

      <main className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side — Background Image with Overlay */}
        <div
          className="relative bg-black text-white flex items-center justify-center px-8 py-20 md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${contact.src})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>

          {/* Content */}
          <div className="relative text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plan smarter, go further.
            </h1>
            <p className="text-lg max-w-md mx-auto">
              Let our experts guide you towards your international education
              journey. Connect with us today.
            </p>
          </div>
        </div>

        {/* Right Side — Contact Form with Slide-in Animation */}
        <div className="flex items-center justify-center bg-black w-full md:w-1/2 px-8 py-20 animate-slideIn">
          <div className="w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6 text-red-700">
              Get in Touch
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Interest
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition transform hover:scale-105 active:scale-95"
              >
                Submit Inquiry
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 text-gray-600">
              <p className="mb-3">
                <strong>Phone:</strong>{" "}
                <a href="tel:+918270883451" className="text-red-600">
                  +91 82708 83451
                </a>
              </p>
              <p className="mb-3">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:admin@insightabroadservices.org"
                  className="text-red-600"
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
              <h3 className="text-lg font-semibold mb-2 text-red-700">
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

      {/* Slide-in Animation */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 1s ease forwards;
        }
      `}</style>
    </>
  );
}
