"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send. Please try again.");
        console.error("❌ API Error:", data);
      }
    } catch (err) {
      console.error("Email send failed", err);
      toast.error("Something went wrong.");
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

      <Toaster position="top-right" />

      <main className="bg-white">
        {/* CONTACT FORM SECTION (With background) */}
        <section
          className="min-h-screen lg:py-16 py-16 px-6"
          style={{
            backgroundImage: "url('/assets/contactbg.jpg')",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
            {/* Left Side: Heading + Contact Info */}
            <div className="flex flex-col justify-start space-y-10">
              <div data-aos="fade-down">
                <h1 className="text-4xl font-bold text-gray-900 mt-16">
                  <span className="text-red-600">Plan smarter</span>, go
                  further.
                </h1>
                <p className="text-gray-600 text-lg mt-4">
                  Let our experts guide you towards your international education
                  journey. Connect with us today.
                </p>
              </div>

              <div
                className="text-gray-700 text-sm space-y-5"
                data-aos="fade-up"
              >
                <div className="flex items-center gap-2">
                  <Phone className="text-red-600 w-4 h-4" />
                  <span>
                    <strong className="text-gray-900">Phone:</strong>{" "}
                    <a href="tel:+918270883451" className="text-red-600">
                      +91 82708 83451
                    </a>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="text-red-600 w-4 h-4" />
                  <span>
                    <strong className="text-gray-900">Email:</strong>{" "}
                    <a
                      href="mailto:admin@insightabroadservices.org"
                      className="text-red-600"
                    >
                      Info@insightabroadservices.org
                    </a>
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="text-red-600 w-4 h-4 mt-1" />
                  <span>
                    <strong className="text-gray-900">Location:</strong> <br />
                    Tharani Complex 3, 8th Street, Cross Cut Road,
                    <br />
                    Gandhipuram, Coimbatore, Tamil Nadu 641012
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="text-red-600 w-4 h-4 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-red-600">
                      Office Hours
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>Monday – Friday: 9:00 AM – 5:00 PM</li>
                      <li>Saturday: 10:00 AM – 3:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex gap-4 pt-4">
                  {/* Instagram */}
                  <div className="relative group">
                    <a
                      href="https://www.instagram.com/yourpage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-100 text-red-600 hover:bg-red-600 hover:text-white rounded-full p-3 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-out bg-red-600 text-white text-xs px-3 py-1 rounded z-10 shadow-[0_0_8px_rgba(255,0,0,0.6)]">
                      Instagram
                    </span>
                  </div>

                  {/* Facebook */}
                  <div className="relative group">
                    <a
                      href="https://www.facebook.com/yourpage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-100 text-red-600 hover:bg-red-600 hover:text-white rounded-full p-3 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110"
                      aria-label="Facebook"
                    >
                      <FaFacebookF className="w-5 h-5" />
                    </a>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-out bg-red-600 text-white text-xs px-3 py-1 rounded z-10 shadow-[0_0_8px_rgba(255,0,0,0.6)]">
                      Facebook
                    </span>
                  </div>

                  {/* LinkedIn */}
                  <div className="relative group">
                    <a
                      href="https://www.linkedin.com/company/yourpage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-100 text-red-600 hover:bg-red-600 hover:text-white rounded-full p-3 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn className="w-5 h-5" />
                    </a>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-out bg-red-600 text-white text-xs px-3 py-1 rounded z-10 shadow-[0_0_8px_rgba(255,0,0,0.6)]">
                      LinkedIn
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div
              className="rounded-2xl shadow-xl p-10 flex flex-col justify-between border border-gray-100"
              style={{
                backgroundImage: `url('https://www.transparenttextures.com/patterns/tiny-grid.png')`,
                backgroundColor: "#fafafa",
                backgroundSize: "auto",
              }}
              data-aos="zoom-in"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="+91 00000 00000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Tell us your interest"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition duration-200"
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* MAP SECTION (without background image) */}
        <div className="mt-16 w-full px-6" data-aos="fade-up">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9077654242126!2d76.96380507414076!3d11.005547654938608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b3ef09fd9f%3A0xe1783cf1c2033a9e!2sTharani%20Complex%2C%208th%20St%2C%20Gandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012!5e0!3m2!1sen!2sin!4v1718727760000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full rounded-lg shadow-md"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </main>
    </>
  );
}
