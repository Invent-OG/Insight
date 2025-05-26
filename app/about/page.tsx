"use client";

import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Insight | Trusted Overseas Education Consultants</title>
        <meta
          name="description"
          content="Learn how Insight helps students study abroad with expert advice, global partnerships, and student-first support."
        />
        <meta
          name="keywords"
          content="study abroad, overseas education consultants, IELTS coaching Coimbatore, international education, student visa support"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        {/* Header Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-4xl font-serif font-bold mb-3 text-gray-900">
            INSIGHT EDUCATOR & ABROAD SERVICES
          </h1>
          <p className="text-lg text-gray-700 italic">
            Your pathway to international education
          </p>
        </div>

        {/* About Card */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <p className="text-gray-800 leading-relaxed">
            At Insight Educator & Abroad Services, we believe in “Insight” - The
            ability to see beyond the obvious, understand deeply, and make
            informed decisions which is the foundation of success. Guided by
            this principle, we offer comprehensive study abroad consultancy
            services to students in Coimbatore and beyond, empowering them to
            achieve their global education dreams.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Our founder, <strong>Neshika</strong>, brings a wealth of personal
            and professional experience to the table. Having pursued her
            education in the UK and being an IELTS-certified trainer from
            Trinity University, she understands firsthand the challenges and
            opportunities international students face. Her passion for education
            and commitment to student success drives our team to deliver expert,
            personalized guidance every step of the way.
          </p>
        </div>

        {/* Services Card */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
          <p className="text-gray-800 leading-relaxed">
            Whether you're aspiring to study in the UK, USA, Canada, Australia,
            New Zealand, Ireland, Europe, UAE, Singapore, or Malaysia, we
            provide end-to-end support to make your journey smooth and
            stress-free. Our services include:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>IELTS coaching in Coimbatore by certified professionals</li>
            <li>Personalized study abroad counselling</li>
            <li>Assistance with university applications and admissions</li>
            <li>Help with securing scholarships and financial aid</li>
            <li>Complete student visa support and guidance</li>
            <li>Flight booking, accommodation, and airport pickup services</li>
            <li>Pre-departure and post-arrival support</li>
            <li>Part-Time Guidance</li>
          </ul>
        </div>

        {/* Core Values Card */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Our Core Values
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>
              <strong>Kind Attitude:</strong> We treat every student with a
              positive attitude, empathy and respect throughout their journey.
            </li>
            <li>
              <strong>Professionalism:</strong> Our expert team ensures timely
              and reliable support at every step of your application process.
            </li>
            <li>
              <strong>Clarity:</strong> We provide transparent guidance
              throughout so you always understand your options, requirements,
              and next steps.
            </li>
            <li>
              <strong>Trust:</strong> We build lasting relationships through
              honest advice and dependable service you can count on.
            </li>
          </ol>
        </div>

        {/* CTA Card */}
        <div className="bg-blue-600 rounded-lg shadow-lg p-8 text-center">
          <button
            onClick={() => alert("Booking functionality coming soon!")}
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition"
          >
            Book a Free Consultation
          </button>
        </div>
      </section>
    </>
  );
}
