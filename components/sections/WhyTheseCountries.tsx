// components/CountryTable.tsx

"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

const countries = [
  {
    country: "United Kingdom (UK)",
    academic: "Bachelor’s (3-4 years), Master’s (1 year)",
    duration: "2-year post-study work visa",
    special:
      "The UK is home to 4 of the world’s top 10 universities, including Oxford and Cambridge (QS World University Rankings).",
  },
  {
    country: "United States (USA)",
    academic: "Bachelor’s (4 years), Master’s (2 years)",
    duration: "12-month OPT, extendable for STEM grads to 3 years",
    special:
      "Home to Silicon Valley—the world’s leading tech hub—hosting Apple, Google, and Facebook, driving significant advancements.",
  },
  {
    country: "Ireland",
    academic: "Bachelor’s (3-4 years), Master’s (1 year)",
    duration: "2-year post-graduation work visa",
    special:
      "Most tech companies have their European HQs here, making it a hub for innovation and careers in technology.",
  },
  {
    country: "Canada",
    academic: "Bachelor’s (3-4 years), Master’s (1-2 years)",
    duration: "3-year post-graduation work permit",
    special:
      "Ranked as one of the best countries for quality of life and higher education (QS Best Student Cities).",
  },
  {
    country: "Australia",
    academic: "Bachelor’s (3-4 years), Master’s (1-2 years)",
    duration: "2-4 years post-study work visa",
    special:
      "Ranks 3rd globally for international student satisfaction (ICEF Monitor).",
  },
  {
    country: "New Zealand",
    academic: "Bachelor’s (3 years), Master’s (1-2 years)",
    duration: "1-3 years post-study work visa",
    special:
      "2nd in the world for quality of life; strong job market in IT and agriculture (QS Rankings).",
  },
  {
    country: "France",
    academic: "Bachelor’s (3 years), Master’s (2 years)",
    duration: "2-year post-graduation work visa",
    special:
      "5th most popular destination for international students globally (UNESCO).",
  },
  {
    country: "Germany",
    academic: "Bachelor’s (3-4 years), Master’s (1-2 years)",
    duration: "18-month job-seeking visa",
    special:
      "No tuition fees at many public universities and high-demand STEM careers.",
  },
  {
    country: "UAE",
    academic: "Bachelor’s (3-4 years), Master’s (1-2 years)",
    duration: "Work visa available for graduates",
    special:
      "Rapid economic growth driven by education, technology, and finance sectors (World Bank).",
  },
  {
    country: "Singapore",
    academic: "Bachelor’s (3-4 years), Master’s (1 year)",
    duration: "Work visa options for graduates",
    special:
      "Ranked as the 4th best student city globally (QS Best Student Cities 2023).",
  },
  {
    country: "Malaysia",
    academic: "Bachelor’s (3-4 years), Master’s (1-2 years)",
    duration: "Post-graduation work visa options",
    special:
      "Affordable tuition and rich cultural environment for international students.",
  },
  {
    country: "Latvia",
    academic: "Bachelor’s (3 years), Master’s (1-2 years)",
    duration: "6-month job-seeking visa",
    special: "Emerging as an IT education hub with lower tuition costs.",
  },
  {
    country: "Lithuania",
    academic: "Bachelor’s (3 years), Master’s (1-2 years)",
    duration: "Post-graduation work visa available",
    special:
      "One of the fastest-growing economies in the EU, especially in tech and business.",
  },
  {
    country: "Poland",
    academic: "Bachelor’s (3 years), Master’s (2 years)",
    duration: "Work visa opportunities after graduation",
    special:
      "Leader in European business education, affordable tuition, and a growing job market.",
  },
  {
    country: "Other European Countries",
    academic: "Bachelor’s (3-4 years), Master’s (1-2 years)",
    duration: "Post-graduation work visas in various countries",
    special:
      "Wide range of affordable education options and strong cultural diversity.",
  },
];

export default function WhyTheseCountries() {
  return (
    <section className="bg-black text-white lg:mt-10 mt-8 p-8 lg:py-10 mb-10 rounded-3xl shadow-2xl max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8">
        Why <span className="text-primary">These</span> Countries?
      </h2>

      {/* Desktop & tablet: Table, hidden on small */}
      <motion.table
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="min-w-full border-collapse border-2 border-red-500 rounded-xl overflow-hidden hidden sm:table"
      >
        <thead>
          <tr className="bg-gray-900">
            <th className="px-6 py-4 text-left border-b border-red-500">
              Country
            </th>
            <th className="px-6 py-4 text-left border-b border-red-500">
              Academic Duration
            </th>
            <th className="px-6 py-4 text-left border-b border-red-500">
              Stay-Back Period
            </th>
            <th className="px-6 py-4 text-left border-b border-red-500">
              Special Feature
            </th>
          </tr>
        </thead>
        <tbody>
          {countries.map((item, index) => (
            <tr
              key={item.country}
              className={`${
                index % 2 === 0 ? "bg-black/80" : "bg-gray-900/80"
              } hover:bg-red-600/70 transition duration-300`}
            >
              <td className="px-6 py-4 font-semibold">{item.country}</td>
              <td className="px-6 py-4">{item.academic}</td>
              <td className="px-6 py-4">{item.duration}</td>
              <td className="px-6 py-4">{item.special}</td>
            </tr>
          ))}
        </tbody>
      </motion.table>

      {/* Mobile: Accordion Cards, hidden on sm+ */}
      <div className="sm:hidden mt-6 space-y-4">
        {countries.map((item, index) => (
          <details key={item.country} className="bg-gray-900 rounded-lg p-4">
            <summary className="font-semibold cursor-pointer flex justify-between items-center">
              {item.country}
              <span className="ml-2">▶</span>
            </summary>
            <div className="mt-2 text-sm space-y-1">
              <p>
                <strong>Academic Duration:</strong> {item.academic}
              </p>
              <p>
                <strong>Stay-Back Period:</strong> {item.duration}
              </p>
              <p>
                <strong>Special Feature:</strong> {item.special}
              </p>
            </div>
          </details>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-8 text-center">
        <Button>Get Course Recommendations</Button>
      </div>
    </section>
  );
}
