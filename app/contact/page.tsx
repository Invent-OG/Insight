"use client";

import Head from "next/head";
import contact from "@/public/assets/contact.png";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 300, once: true });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      console.error("Email send failed", err);
    } finally {
      setLoading(false);
    }
  };

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
        {/* Background Image */}
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

        {/* Left - Text */}
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

        {/* Right - Form */}
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500"
                  placeholder="+91 00000 00000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500"
                  placeholder="Tell us your interest"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-red-700 text-white font-semibold py-3 rounded-md transition transform hover:scale-105 active:scale-95"
              >
                {loading ? "Sending..." : "Submit Inquiry"}
              </button>
              {success && (
                <p className="text-green-400 mt-3">
                  Message sent successfully!
                </p>
              )}
            </form>

            {/* Contact Info */}
            <div className="mt-10 text-gray-300">
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
