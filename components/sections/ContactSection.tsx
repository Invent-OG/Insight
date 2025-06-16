"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate a successful response without Nodemailer
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-black text-white py-12 md:py-16 lg:py-20 px-6 flex justify-center flex-col gap-10"
      id="contact"
    >
      {/* Centered Heading */}
      <div className="text-center max-w-2xl mx-auto ">
        <h4 className="text-primary text-base uppercase tracking-wider mb-3">
          — Say Hello —
        </h4>
        <h2 className="text-3xl md:text-4xl lg:text-5xl py-4 font-bold leading-tight">
          Let Us Know Your Concern
          <br /> We Are <span className="text-primary">Always Ready.</span>
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
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none"
            />
            <div className="flex gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-1/2 p-3 bg-transparent border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your Phone"
                required
                className="w-1/2 p-3 bg-transparent border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={5}
              required
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none"
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Sending..." : "— Contact Now —"}
            </Button>
            {success && (
              <p className="text-green-400 mt-2">Message sent successfully!</p>
            )}
          </form>
        </div>

        {/* Right Side - Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">Lets Talk</h3>
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
