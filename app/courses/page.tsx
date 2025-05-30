// app/(your-folder)/page.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const coursesData = [
  {
    title: "Business Management Courses Abroad",
    description:
      "Unlock global business opportunities with world-class business education. Business management courses abroad offer cutting-edge curriculum, internship programs, and international exposure.",
    undergraduate: [
      "Business Administration",
      "Management Studies",
      "International Business",
      "Marketing",
      "Finance",
      "Accounting",
    ],
    postgraduate: [
      "Master of Business Administration (MBA)",
      "Management Studies",
      "International Business",
      "Marketing and Digital Strategy",
      "Business Analytics",
      "Strategic Management",
      "Human Resources Management",
      "Supply Chain Management",
    ],
  },
  {
    title: "Engineering and Technology Programs",
    description:
      "Shape the future with innovative engineering and tech degrees. These programs combine theoretical foundations with hands-on training and research opportunities.",
    undergraduate: [
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Computer Science Engineering",
      "Electronics and Communication Engineering",
      "Aerospace Engineering",
    ],
    postgraduate: [
      "Artificial Intelligence and Machine Learning",
      "Data Science and Big Data",
      "Robotics",
      "Software Engineering",
      "Computer Engineering",
      "Structural Engineering",
      "Electrical Power Engineering",
      "Environmental Engineering",
    ],
  },
  {
    title: "Data Science and Artificial Intelligence",
    description:
      "Harness the power of data and intelligent systems with future-ready degrees. Learn to analyze, model, and innovate using AI tools across real-world scenarios.",
    undergraduate: [
      "Data Science",
      "Artificial Intelligence",
      "Computer Science",
      "Software Engineering",
    ],
    postgraduate: [
      "Master of Data Science",
      "Artificial Intelligence and Machine Learning",
      "Data Analytics",
      "Business Analytics",
      "Computational Intelligence",
      "Big Data Engineering",
      "Cybersecurity and Data Protection",
    ],
  },
  // You can add more courses here...
];

const countriesData = [
  {
    name: "United Kingdom (UK)",
    academicDuration: "Bachelor’s (3-4 years), Master’s (1 year)",
    stayBackPeriod: "2-year post-study work visa",
    specialFeature:
      "The UK is home to 4 of the world’s top 10 universities, including the renowned Oxford and Cambridge (QS World University Rankings).",
  },
  {
    name: "United States (USA)",
    academicDuration: "Bachelor’s (4 years), Master’s (2 years)",
    stayBackPeriod: "12-month OPT, extendable for STEM grads to 3 years",
    specialFeature:
      "The USA, home to Silicon Valley—the world’s leading tech hub—hosts over 30,000 tech companies including Apple, Google, and Facebook, driving significant global advancements in technology and entrepreneurship.",
  },
  {
    name: "Ireland",
    academicDuration: "Bachelor’s (3-4 years), Master’s (1 year)",
    stayBackPeriod: "2-year post-graduation work visa",
    specialFeature:
      "Ireland with most tech companies having their European headquarters, makes it a hub for innovation and career opportunities in technology.",
  },
  // Add more countries as needed...
];

// Animation variants for framer-motion
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Page = () => {
  return (
    <main className="max-w-7xl mx-auto p-6 sm:p-10 bg-white">
      {/* Meta Title and Description */}
      <section className="mb-12 text-center mt-20 relative px-4 sm:px-0">
        <div
          className="absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-red-100 via-red-50 to-transparent opacity-30 -z-10 rounded-b-xl"
          aria-hidden="true"
        />
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900 relative inline-block">
          Top Courses to Study Abroad&nbsp;
          <span className="block h-1 w-24 bg-red-600 rounded-full mx-auto mt-1"></span>
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto relative">
          <span className="inline-block border-l-4 border-red-600 pl-4 italic text-red-700">
            Explore the best courses to study abroad in 12+ countries – from
            business and tech to healthcare, law, and design.
          </span>
          <br />
          <span className="mt-2 block font-semibold text-red-600">
            Explore Top Courses Abroad – Designed for a Global Career.
          </span>
        </p>
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-20 bg-red-600 rounded-full animate-pulse"></div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 border-b-2 border-red-600 inline-block pb-2 text-red-700">
          Countries to Study Abroad
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {countriesData.map(
            (
              { name, academicDuration, stayBackPeriod, specialFeature },
              idx
            ) => (
              <motion.div
                key={name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-red-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col"
              >
                <h3 className="text-xl font-bold text-red-700 mb-2">{name}</h3>
                <p className="text-sm font-semibold mb-1 text-red-600">
                  <span className="underline">Duration:</span>{" "}
                  {academicDuration}
                </p>
                <p className="text-sm font-semibold mb-3 text-red-600">
                  <span className="underline">Stay Back Period:</span>{" "}
                  {stayBackPeriod}
                </p>
                <p className="text-gray-700 text-sm flex-grow">
                  {specialFeature}
                </p>
                <button className="mt-4 self-start bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
                  Learn More
                </button>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Courses Section - Three New Card Layouts */}

      <section>
        <h2 className="text-3xl font-semibold mb-8 border-b-2 border-red-600 inline-block pb-2 text-red-700">
          Courses Overview - Layout 1 (Flip Card)
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {coursesData.map(({ title, description }, idx) => (
            <motion.div
              key={title + idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group perspective"
              style={{ perspective: "1000px" }}
            >
              <div className="relative w-full h-64 text-center transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180 rounded-lg shadow-lg">
                {/* Front Side */}
                <div className="absolute inset-0 bg-red-100 rounded-lg flex flex-col justify-center p-6 backface-hidden">
                  <h3 className="text-xl font-semibold text-red-700 mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-red-800">
                    {description.slice(0, 100)}...
                  </p>
                </div>
                {/* Back Side */}
                <div className="absolute inset-0 bg-red-600 rounded-lg text-white p-6 rotate-y-180 backface-hidden flex flex-col justify-center">
                  <p className="text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-8 border-b-2 border-red-600 inline-block pb-2 text-red-700">
          Courses Overview - Layout 2 (Slide-Up Cards)
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {coursesData.map(({ title, description }, idx) => (
            <motion.div
              key={title + idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl cursor-pointer transition-transform transform hover:-translate-y-3"
            >
              <h3 className="text-lg font-bold text-red-700 mb-3">{title}</h3>
              <p className="text-gray-700 text-sm mb-3 line-clamp-4">
                {description}
              </p>
              <button className="text-red-600 font-semibold hover:underline">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-20 mb-20">
        <h2 className="text-3xl font-semibold mb-8 border-b-2 border-red-600 inline-block pb-2 text-red-700">
          Courses Overview - Layout 3 (Info Tabs)
        </h2>
        <div className="space-y-8">
          {coursesData.map(({ title, undergraduate, postgraduate }, idx) => (
            <motion.div
              key={title + idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-red-50 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-bold text-red-700 mb-4">{title}</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-red-600 mb-2 underline">
                    Undergraduate Courses
                  </h4>
                  <ul className="list-disc list-inside text-gray-800 text-sm">
                    {undergraduate.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-red-600 mb-2 underline">
                    Postgraduate Courses
                  </h4>
                  <ul className="list-disc list-inside text-gray-800 text-sm">
                    {postgraduate.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
