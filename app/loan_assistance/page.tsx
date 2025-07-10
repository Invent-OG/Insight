"use client";

import React, { useState } from "react";
import {
  FaUniversity,
  FaHandHoldingUsd,
  FaUserCheck,
  FaGlobeAsia,
} from "react-icons/fa";
import {
  MdChecklist,
  MdEmojiTransportation,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const SECTIONS = [
  "Loan Partners",
  "Why Insight",
  "Expenses Covered",
  "Eligibility",
];

export default function LoanAssistancePage() {
  const [activeSection, setActiveSection] = useState<string>("Loan Partners");
  const router = useRouter();

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section with Cards Below */}
      <section className="relative  w-full min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/services/SOP writing.webp"
            alt="Education Loan Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-white text-center md:text-left">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Secure Your <span className="text-primary">Education Loan</span>
              <br className="hidden sm:block" /> With Confidence
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Studying abroad is a dream for many — and finances shouldn’t stop
              you. We help students secure{" "}
              <strong className="text-white">100% education loans</strong> via
              trusted institutions.
            </p>

            <div>
              <Button
                onClick={() => router.push("/contact")}
                className="text-base sm:text-lg font-semibold text-white hover:bg-transparent hover:text-black border hover:border-black"
              >
                Talk to Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Buttons Mobile Left and Content Right */}
      <section className=" max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Side Tabs */}
        <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-gray-200 pr-4 md:pr-0">
          {SECTIONS.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`w-full text-left px-4 py-2 border-l-4 font-medium flex items-center gap-2 transition-all duration-200
                ${
                  activeSection === section
                    ? "border-primary text-primary bg-primary/5"
                    : "border-transparent text-gray-600 hover:text-primary"
                }`}
            >
              <MdKeyboardArrowRight /> {section}
            </button>
          ))}
        </div>

        {/* Right Side Content */}
        <div className="md:col-span-4 space-y-10">
          {activeSection === "Loan Partners" && (
            <div className="space-y-12">
              <div className="flex items-center gap-3">
                <FaUniversity className="text-primary text-xl" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Our Loan Partners
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="border rounded-xl p-5 bg-white shadow hover:shadow-md transition space-y-4">
                  <div className="flex items-center gap-2">
                    <FaUniversity className="text-primary" />
                    <h3 className="text-lg font-semibold text-primary">
                      HDFC Credila Financial Services
                    </h3>
                  </div>
                  {[
                    "India’s first dedicated education loan company.",
                    "Offers 100% funding including tuition, living, travel, and insurance.",
                    "Loan approval even before university admission (pre-visa disbursement).",
                    "Doorstep service and faster processing.",
                    "Customizable repayment options.",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <MdChecklist className="text-primary mt-1" />
                      <p className="text-sm text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="border rounded-xl p-5 bg-white shadow hover:shadow-md transition space-y-4">
                  <div className="flex items-center gap-2">
                    <FaUniversity className="text-primary" />
                    <h3 className="text-lg font-semibold text-primary">
                      Avanse Financial Services
                    </h3>
                  </div>
                  {[
                    "Focused on global education loans for UG, PG, MBBS, and more.",
                    "Covers complete study costs including tuition, living, flight, books, etc.",
                    "Flexible EMI options and moratorium period.",
                    "No hidden charges. Transparent & student-friendly process.",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <FaHandHoldingUsd className="text-primary mt-1" />
                      <p className="text-sm text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-primary/30 bg-white p-5 shadow">
                <div className="flex items-start gap-4">
                  <MdEmojiTransportation
                    className="text-primary mt-1"
                    size={24}
                  />
                  <div>
                    <p className="text-gray-800">
                      Our financial advisors help you compare, apply, and secure
                      the best loan options suited for your study destination
                      and budget.{" "}
                      <span className="font-semibold text-primary">
                        Talk to us today for end-to-end loan support.
                      </span>
                    </p>
                    <Button
                      onClick={() => router.push("/contact")}
                      className="text-base lg:mt-2 mt-4 sm:text-lg font-semibold text-white hover:bg-transparent hover:text-black border hover:border-black"
                    >
                      Get Free Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "Why Insight" && (
            <section className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden px-4 md:px-8 pt-0 pb-10 space-y-10">
              {/* Top Image Section */}
              <div className="w-full h-60 sm:h-72 md:h-80 lg:h-[22rem] overflow-hidden rounded-b-xl relative">
                <img
                  src="/assets/services/SOP writing.webp" // Replace with your own image
                  alt="Insight Loan Background"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-6xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3">
                    <FaHandHoldingUsd className="text-primary text-3xl" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                      Why Apply Through Insight?
                    </h2>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                    Unlock expert guidance, fast loan comparisons, and a
                    stress-free process with Insight.
                  </p>
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                  {[
                    {
                      text: "Compare and apply to multiple lenders faster.",
                      icon: <MdChecklist size={26} />,
                    },
                    {
                      text: "One-on-one financial counseling.",
                      icon: <FaHandHoldingUsd size={24} />,
                    },
                    {
                      text: "Help with budgeting, documents, and costs.",
                      icon: <GiWallet size={26} />,
                    },
                    {
                      text: "Direct coordination with loan partners.",
                      icon: <FaUniversity size={24} />,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group bg-white rounded-xl border border-gray-200 shadow hover:shadow-md transition-all duration-300 p-6 flex items-start gap-4"
                    >
                      <div className="text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <p className="text-gray-700 text-base leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {activeSection === "Expenses Covered" && (
            <section className="relative h-screen w-full overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/assets/services/SOP writing.webp"
                  alt="Expenses Covered"
                  className="w-full h-full object-cover"
                />
                {/* Optional overlay for contrast */}
                <div className="absolute inset-0 bg-white bg-opacity-50" />
              </div>

              {/* Content Wrapper */}
              <div className="relative z-10 h-full w-full px-4 md:px-8 py-10 flex flex-col justify-center items-center">
                <div className="w-full max-w-6xl space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <GiWallet className="text-primary text-2xl" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      What Expenses Are Covered?
                    </h2>
                  </div>

                  {/* Grid Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      "Tuition fees",
                      "Living expenses (rent, food)",
                      "Travel and flights",
                      "Visa & insurance",
                      "Books, supplies, and laptop",
                      "Pre & post departure costs",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-5 bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition"
                      >
                        <MdChecklist size={22} className="text-primary mt-1" />
                        <p className="text-gray-700 text-base leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === "Eligibility" && (
            <section className="relative  px-4 md:px-10 py-16 h-screen flex items-center justify-center">
              <div className="relative z-10 w-full max-w-5xl mx-auto space-y-12">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-full">
                    <FaUserCheck className="text-xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Eligibility & Requirements
                  </h2>
                </div>

                {/* Timeline-style Step Cards */}
                <div className="relative border-l-2 border-dashed border-primary/30 pl-6 space-y-10">
                  {[
                    "Indian citizen with confirmed admission or planning to apply.",
                    "Co-applicant (parent/guardian) with a steady income.",
                    "Basic documents: KYC, admission letter/proof, fee structure, income proof.",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="relative bg-white rounded-xl shadow-md p-5 md:ml-6 flex items-start gap-4 transition hover:shadow-xl"
                    >
                      {/* Step Number Dot */}
                      <div className="absolute -left-6 top-3 w-6 h-6 bg-primary text-white text-sm font-semibold flex items-center justify-center rounded-full shadow-md">
                        {index + 1}
                      </div>

                      {/* Icon + Text */}
                      <div className="flex-shrink-0">
                        <MdChecklist className="text-primary mt-1" size={24} />
                      </div>
                      <p className="text-gray-700 text-base leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Additional Guidance Note */}
                <div className="relative z-10 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="flex gap-3 items-start">
                    <MdChecklist className="text-primary mt-1" size={24} />
                    <p className="text-gray-700 leading-relaxed text-base">
                      We also provide guidance for other bank loans like{" "}
                      <strong className="text-gray-800 font-medium">
                        SBI, Indian Overseas
                      </strong>{" "}
                      and more, including options with and without collateral
                      depending on your profile and university.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}
