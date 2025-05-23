"use client";

import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form logic here (e.g., POST request or integration with Formspree/Netlify)
    alert("Form submitted!");
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Get in touch with the Best Study Abroad Consultancy in Coimbatore
      </h1>
      <p className="text-center mb-8 text-lg">
        Expert advice. Just a message away. Plan smarter, go further—talk to us
        today.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 shadow rounded-md"
      >
        <div>
          <label className="block font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            required
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            required
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            required
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Interest</label>
          <textarea
            name="interest"
            rows={4}
            value={formData.interest}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded font-semibold"
        >
          Submit
        </button>
      </form>

      <div className="mt-12 bg-gray-50 p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
        <p>
          <strong>Phone:</strong> +91 82708 83451
        </p>
        <p>
          <strong>Email:</strong> admin@insightabroadservices.org
        </p>
        <p>
          <strong>Location:</strong> Tharani complex 3, 8th street, Cross Cut
          Road, Gandhipuram, Coimbatore, Tamil Nadu 641012
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Office Hours</h3>
        <ul className="list-disc list-inside">
          <li>Monday to Friday: 9.00 AM - 5.00 PM</li>
          <li>Saturday: 10.00 AM - 3.00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactPage;
