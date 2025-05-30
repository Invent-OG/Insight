"use client";

import Head from "next/head";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Patel",
    country: "Canada",
    message:
      "Insight helped me navigate the entire process — from choosing my course to landing in Toronto. Their guidance made my study abroad dream come true.",
  },
  {
    name: "Divya Menon",
    country: "Germany",
    message:
      "The SOP and visa support were top-notch! I’m now pursuing my Master's in Berlin and couldn’t have done it without Insight.",
  },
  {
    name: "Jeevan Thomas",
    country: "Australia",
    message:
      "From IELTS prep to accommodation, Insight handled everything. It felt like having a trusted friend throughout the journey.",
  },
];

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>
          Student Testimonials | Study Abroad Success Stories with Insight
        </title>
        <meta
          name="description"
          content="Hear real stories from students who achieved their study abroad dreams with Insight’s expert support. Don’t just take our word for it — see how we’ve helped students like you around the globe."
        />
      </Head>

      <main className="bg-white min-h-screen py-20 px-6">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear real stories from students who achieved their study abroad
            dreams with Insight’s expert support.
          </p>
        </section>

        {/* Testimonials Grid */}
        <section className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-red-50 border border-red-200 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <FaQuoteLeft className="text-red-500 text-2xl mb-4" />
              <p className="text-gray-700 italic mb-4">
                "{testimonial.message}"
              </p>
              <h3 className="text-lg font-semibold text-red-700">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.country}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transition duration-300">
            Start Your Journey
          </button>
        </div>
      </main>
    </>
  );
}
