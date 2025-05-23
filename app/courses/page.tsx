"use client";

import React from "react";

const Course = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-900">
      {/* Meta Title & Description */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-3">
          Top Courses to Study Abroad | Business, Tech, Medicine & More
        </h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Explore the best courses to study abroad in 12+ countries – from
          business and tech to healthcare, law, and design. Explore Top Courses
          Abroad – Designed for a Global Career.
        </p>
      </section>

      {/* Business Management Courses Abroad */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">
          Business Management Courses Abroad
        </h2>
        <p className="mb-4">
          Unlock global business opportunities with world-class business
          education. Business management courses abroad offer cutting-edge
          curriculum, internship programs, and international exposure.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Undergraduate:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Business Administration</li>
              <li>Management Studies</li>
              <li>International Business</li>
              <li>Marketing</li>
              <li>Finance</li>
              <li>Accounting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Postgraduate:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Master of Business Administration (MBA)</li>
              <li>Management Studies</li>
              <li>International Business</li>
              <li>Marketing and Digital Strategy</li>
              <li>Business Analytics</li>
              <li>Strategic Management</li>
              <li>Human Resources Management</li>
              <li>Supply Chain Management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Engineering and Technology Programs */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">
          Engineering and Technology Programs
        </h2>
        <p className="mb-4">
          Shape the future with innovative engineering and tech degrees. These
          programs combine theoretical foundations with hands-on training and
          research opportunities.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Undergraduate:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Mechanical Engineering</li>
              <li>Civil Engineering</li>
              <li>Electrical Engineering</li>
              <li>Computer Science Engineering</li>
              <li>Electronics and Communication Engineering</li>
              <li>Aerospace Engineering</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Postgraduate:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Artificial Intelligence and Machine Learning</li>
              <li>Data Science and Big Data</li>
              <li>Robotics</li>
              <li>Software Engineering</li>
              <li>Computer Engineering</li>
              <li>Structural Engineering</li>
              <li>Electrical Power Engineering</li>
              <li>Environmental Engineering</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Course;
