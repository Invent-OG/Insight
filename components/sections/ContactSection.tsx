"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "../ui/button";

export default function ContactSection() {
  return (
    <section
      className="bg-black text-white py-20 px-6 flex justify-center flex-col gap-10"
      id="contact"
    >
      {/* Centered Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h4 className="text-primary text-sm uppercase tracking-wider mb-3">
          — Say Hello —
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Let Us Know Your Concern <br /> We Are Always Ready.
        </h2>
      </div>

      {/* Grid Section */}
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Left Side - Form */}
        <div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none"
            />
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-1/2 p-3 bg-transparent border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Enter your Phone"
                className="w-1/2 p-3 bg-transparent border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Your message"
              rows={5}
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none"
            />
            <Button>— Contact Now —</Button>
          </form>
        </div>

        {/* Right Side - Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-2">Lets Talk</h3>
          <p className="text-gray-300 mb-6">
            Schedule a consultation to discuss your study abroad goals
          </p>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full border border-primary text-primary">
              <FaPhoneAlt size={20} />
            </div>
            <div>
              <span className="text-sm text-gray-400">Phone</span>
              <p className="text-lg font-medium text-primary">
                +91 7593 000 094
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
