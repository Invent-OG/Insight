// "use client";

// import Head from "next/head";
// import contact from "@/public/assets/contact.png";
// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 300, once: true });
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess(false);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         setSuccess(true);
//         setFormData({ name: "", email: "", phone: "", message: "" });
//       }
//     } catch (err) {
//       console.error("Email send failed", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>
//           Contact Us | Expert Abroad Study Consultancy – Get in Touch Today
//         </title>
//         <meta
//           name="description"
//           content="Contact our expert abroad study consultants for guidance and support to start your international education journey today. Get in touch with the Best Study Abroad Consultancy in Coimbatore. Expert advice. Just a message away."
//         />
//       </Head>

//       <main className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
//         {/* Background Image */}
//         <div
//           data-aos="flip-left"
//           data-aos-duration="1000"
//           data-aos-anchor-placement="top-start"
//           data-aos-delay="100"
//           className="absolute inset-0 bg-cover bg-center z-0"
//           style={{ backgroundImage: `url(${contact.src})` }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-70"></div>
//         </div>

//         {/* Left - Text */}
//         <div className="relative z-10 flex items-center justify-center text-white px-8 py-36 md:w-1/2 w-full text-center">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               <span className="text-primary">Plan smarter</span>, go further.
//             </h1>
//             <p className="text-lg max-w-md mx-auto leading-8">
//               Let our experts guide you towards your international education
//               journey. Connect with us today.
//             </p>
//           </div>
//         </div>

//         {/* Right - Form */}
//         <div
//           data-aos="flip-right"
//           data-aos-duration="1000"
//           data-aos-anchor-placement="top-start"
//           data-aos-delay="100"
//           className="relative z-10 flex items-center justify-center w-full md:w-1/2 px-8 py-20 backdrop-blur-sm bg-white/10"
//         >
//           <div className="w-full max-w-lg text-white">
//             <h2 className="text-2xl font-bold mb-6 text-primary">
//               Get in Touch
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Name <span className="text-red-600">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500"
//                   placeholder="Your Name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Email Address <span className="text-red-600">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500"
//                   placeholder="you@example.com"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Phone Number <span className="text-red-600">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500"
//                   placeholder="+91 00000 00000"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-200">
//                   Message <span className="text-red-600">*</span>
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={4}
//                   className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500"
//                   placeholder="Tell us your interest"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-primary hover:bg-red-700 text-white font-semibold py-3 rounded-md transition transform hover:scale-105 active:scale-95"
//               >
//                 {loading ? "Sending..." : "Submit Inquiry"}
//               </button>
//               {success && (
//                 <p className="text-green-400 mt-3">
//                   Message sent successfully!
//                 </p>
//               )}
//             </form>

//             {/* Contact Info */}
//             <div className="mt-10 text-gray-300">
//               <p className="mb-3">
//                 <strong>Phone:</strong>{" "}
//                 <a href="tel:+918270883451" className="text-primary">
//                   +91 82708 83451
//                 </a>
//               </p>
//               <p className="mb-3">
//                 <strong>Email:</strong>{" "}
//                 <a
//                   href="mailto:admin@insightabroadservices.org"
//                   className="text-primary"
//                 >
//                   admin@insightabroadservices.org
//                 </a>
//               </p>
//               <p className="mb-6">
//                 <strong>Location:</strong> <br />
//                 Tharani Complex 3, 8th Street, Cross Cut Road,
//                 <br />
//                 Gandhipuram, Coimbatore, Tamil Nadu 641012
//               </p>
//               <h3 className="text-lg font-semibold mb-2 text-primary">
//                 Office Hours
//               </h3>
//               <ul className="text-sm space-y-1">
//                 <li>Monday – Friday: 9:00 AM – 5:00 PM</li>
//                 <li>Saturday: 10:00 AM – 3:00 PM</li>
//                 <li>Sunday: Closed</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send. Please try again.");
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

      <main className="min-h-screen bg-white py-16 px-6">
        {/* Header */}
        <div
          className="max-w-4xl mx-auto text-center mb-10"
          data-aos="fade-down"
        >
          <h1 className="text-4xl font-bold text-gray-900 mt-6">
            <span className="text-red-600">Plan smarter</span>, go further.
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Let our experts guide you towards your international education
            journey. Connect with us today.
          </p>
        </div>

        {/* Contact Form */}
        <div
          className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl p-10"
          data-aos="zoom-in"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
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

        {/* Contact Info Section */}
        <div
          className="mt-16 max-w-3xl mx-auto text-center text-gray-700 text-sm space-y-5"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-2">
            <Phone className="text-red-600 w-4 h-4" />
            <span>
              <strong className="text-gray-900">Phone:</strong>{" "}
              <a href="tel:+918270883451" className="text-red-600">
                +91 82708 83451
              </a>
            </span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Mail className="text-red-600 w-4 h-4" />
            <span>
              <strong className="text-gray-900">Email:</strong>{" "}
              <a
                href="mailto:admin@insightabroadservices.org"
                className="text-red-600"
              >
                admin@insightabroadservices.org
              </a>
            </span>
          </div>

          <div className="flex items-start justify-center gap-2">
            <MapPin className="text-red-600 w-4 h-4 mt-1" />
            <span>
              <strong className="text-gray-900">Location:</strong> <br />
              Tharani Complex 3, 8th Street, Cross Cut Road,
              <br />
              Gandhipuram, Coimbatore, Tamil Nadu 641012
            </span>
          </div>

          <div className="flex items-start justify-center gap-2">
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
        </div>

        {/* Google Map Embed */}
        <div className="mt-10 max-w-4xl mx-auto" data-aos="fade-up">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9077654242126!2d76.96380507414076!3d11.005547654938608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b3ef09fd9f%3A0xe1783cf1c2033a9e!2sTharani%20Complex%2C%208th%20St%2C%20Gandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012!5e0!3m2!1sen!2sin!4v1718727760000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-md w-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
    </>
  );
}
