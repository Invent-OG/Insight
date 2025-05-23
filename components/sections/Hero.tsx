"use client";

import { useState } from "react";

const countries = [
  {
    name: "United Kingdom",
    description:
      "Home to renowned institutions like Oxford and Cambridge, the UK offers rigorous programs, short duration courses, and a strong academic tradition. 1-year master’s degree with 2-year stay-back and part-time work opportunities.",
  },
  {
    name: "USA",
    description:
      "Top destination for international students with prestigious universities like Harvard and MIT. Offers 2-year master's programs and 3-year stay-back options including OPT and STEM extensions.",
  },
  {
    name: "Ireland",
    description:
      "Home to universities like Trinity College Dublin with vibrant cities and affordable tuition. Provides Post-Graduation Work Permits for long-term career opportunities.",
  },
  {
    name: "Canada",
    description:
      "World-class universities like University of Toronto, multicultural cities, and up to 3-year Post-Graduation Work Permits with clear residency pathways.",
  },
  {
    name: "Australia",
    description:
      "Globally ranked universities with practical learning, part-time work rights, and post-study visas up to 4 years. Known for beautiful landscapes and laid-back lifestyle.",
  },
  {
    name: "New Zealand",
    description:
      "Peaceful, research-driven education with friendly communities, work during studies, and up to 3 years post-graduation stay.",
  },
  // Add other countries as needed...
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll contact you soon.`);
    // Here you could add API calls to submit form data
    setFormData({ name: "", email: "", phone: "", interest: "" });
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 text-gray-900">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4">
          Insight | Expert Study Abroad Consultants for Global Education
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
          Turn your study abroad dreams into reality with Insight. Expert
          guidance, trusted support, and global opportunities await!
        </p>
        <p className="italic text-yellow-600 font-semibold">
          Achieve Your Abroad Study Dreams with Us — Your Global Education
          Starts Here
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Why Choose Insight?
        </h2>
        <p>
          Feeling overwhelmed by the idea of studying abroad? You’re not alone —
          and we get it. At Insight Educator & Abroad Services, we are more than
          just consultants — we're your partners in shaping a brighter future
          overseas.
        </p>
        <p>
          Whether you have no idea which country to choose, what course fits you
          best, or how the visa process works — our expert foreign education
          advisors guide you every step of the way.
        </p>
        <p>
          Studying abroad is more than earning a degree – it’s a journey of
          personal growth, independence, and transformation. We help you grow as
          a student and a global citizen, broadening your perspective and
          preparing you for a confident future.
        </p>
        <p>
          We don’t believe in hard-selling. Our consultations empower you to ask
          questions, explore options, and make informed decisions.
        </p>
      </section>

      {/* Countries Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular Study Destinations
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {countries.map(({ name, description }) => (
            <div
              key={name}
              className="border border-gray-300 rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action Form */}
      <section className="bg-yellow-50 p-8 rounded-lg max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Find Your Ideal Course & Country
        </h2>
        <p className="mb-6 text-center text-gray-700">
          Submit your details, and let’s explore your study abroad options
          together.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-md mx-auto"
          noValidate
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="p-3 border border-gray-300 rounded focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-300"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="p-3 border border-gray-300 rounded focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-300"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone No"
            required
            className="p-3 border border-gray-300 rounded focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-300"
          />
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-300"
          >
            <option value="" disabled>
              Select Your Interest
            </option>
            <option value="Business">Business</option>
            <option value="Technology">Technology</option>
            <option value="Medicine">Medicine</option>
            <option value="Law">Law</option>
            <option value="Design">Design</option>
            <option value="Other">Other</option>
          </select>
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-500 transition"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
