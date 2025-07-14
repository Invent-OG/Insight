"use client";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useCreateLead } from "@/lib/queries/leads"; // adjust path if needed
import toast, { Toaster } from "react-hot-toast";

import { Fragment, useState } from "react";
import Link from "next/link";
import { countryData, CountryInfo } from "@/app/data/countryData";
import { Button } from "@/components/ui/button";

type Country = {
  title: string;
  image: any;
  slug: string;
  description: string;
};

const countries: Country[] = [
  {
    title: "Study in UK",
    image: "/assets/country/UK.webp",
    slug: "uk",
    description: `Home to renowned institutions like Oxford and Cambridge, the UK
offers rigorous programs, short duration courses, and a strong
academic tradition. Cities in the UK offers a student-friendly
atmosphere, blending culture and connectivity. They offer a 1-year
master’s degree with no compromise on academic standards, along
with a 2-year stay-back option. With part-time work opportunities,
the UK is ideal for career-focused learners.`,
  },
  {
    title: "Study in the USA",
    image: "/assets/country/USA (1).webp",
    slug: "usa",
    description: `The U.S. is a top destination for international students, offering
prestigious universities like Harvard and MIT, a flexible education
system, research projects and internship opportunities. Its diverse
lifestyle—from city campuses to quiet towns—enhances the student
experience. Offering a 2-year master's program and a 3-year
stay-back option, students can gain valuable work experience after
graduation through Optional Practical Training (OPT) and STEM
extensions`,
  },
  {
    title: "Study in Ireland",
    image: "/assets/country/Ireland.webp",
    slug: "ireland",
    description: `Ireland is home to prestigious universities like Trinity College Dublin
and University College Dublin, known for academic excellence. With
vibrant cities, affordable tuition, and a welcoming atmosphere, it
offers an exceptional student experience. Ireland also provides
Post-Graduation Work Permits, making it a great choice for
long-term career and settlement opportunities.
`,
  },
  {
    title: "Study in Canada",
    image: "/assets/country/Canada (1).webp",
    slug: "canada",
    description: `Canada stands out for its world-class universities like the University
of Toronto and McGill, inclusive society, and high standard of living.
Affordable tuition, multicultural cities, and a welcoming
environment make it a top choice. Post-Graduation Work Permits
(up to 3 years) and clear Permanent Residency pathways support
long-term settlement.`,
  },
  {
    title: "Study in Australia",
    image: "/assets/country/Australia.webp",
    slug: "australia",
    description: `Australia offers globally ranked universities, practical learning, and
vibrant student life in cities like Sydney and Melbourne. Students
benefit from part-time work rights and can apply for post-study
work visas of up to 4 years. Known for its beautiful landscapes and
sunny climate, Australia blends quality education with a laid-back
lifestyle.
`,
  },
  {
    title: "Study in New Zealand",
    image: "/assets/country/New zealand (1).webp",
    slug: "new-zealand",
    description: `New Zealand provides a peaceful and research-driven education
experience at institutions like the University of Auckland. With its
stunning scenery and friendly, diverse communities, it offers a
balanced lifestyle. Students can work during studies and stay up to
3 years post-graduation, making it a great option for academic and
personal growth.`,
  },
  {
    title: "Study in France",
    image: "/assets/country/France.webp",
    slug: "france",
    description: `With top-ranked universities, affordable tuition, and diverse English
and French-taught programs, France welcomes international
students from across the globe. Experience a rich cultural heritage,
vibrant student life, and access to leading industries. Whether
you're pursuing undergraduate, postgraduate, or research degrees,
France offers academic excellence and career opportunities.
Scholarships and visa support make studying here more accessible
than ever. Begin your global journey with an education that sets you
apart.
`,
  },
  {
    title: "Study in Germany",
    image: "/assets/country/Germany (1).webp",
    slug: "germany",
    description: `Germany is known for top public universities like TUM and
Heidelberg that offer tuition-free or low-cost education in
engineering, science, and more. With modern infrastructure, English
programs, and strong job prospects, it attracts career-focused
students. Learning German is an added advantage, as it opens
doors to more job opportunities and integration into the local
culture. Graduates can stay 18 months for job search and pursue
EU Blue Card residency.
`,
  },
  {
    title: "Study in the UAE",
    image: "/assets/country/UAE (2).webp",
    slug: "uae",
    description: `The UAE offers international-standard education in a safe,
multicultural setting with campuses in Dubai and Abu Dhabi. With
strong programs in business, AI, and engineering, students gain
practical skills and global exposure. High living standards, tax-free
income, and strong career prospects make it a dynamic choice.`,
  },
  {
    title: "Study in Singapore",
    image: "/assets/country/singapore.webp",
    slug: "singapore",
    description: `Singapore is Asia’s leading education hub, home to world-class
institutions like NUS and NTU. It offers cutting-edge programs in
tech, business, and life sciences, alongside a clean, safe
environment. With strong industry links and high employability,
Singapore prepares students for success in the fast-growing
Asia-Pacific region.
`,
  },
  {
    title: "Study in Malaysia",
    image: "/assets/country/malaysia.webp",
    slug: "malaysia",
    description: `Malaysia offers globally recognized degrees at lower costs, with
English widely spoken and vibrant multicultural campuses.
Universities like the University of Malaya offer dual-degree
programs and industry collaboration. Its central location and
welcoming environment make it a great gateway to careers in Asia.`,
  },
  {
    title: "Study in Poland",
    image: "/assets/country/poland.webp",
    slug: "poland",
    description: `Poland combines affordable living with top universities
offering strong programs in various fields. Known for its
vibrant student life and historic cities, Poland is an attractive
destination for international students.
`,
  },
  {
    title: "Study in Sweden",
    image: "/assets/country/swedan.webp",
    slug: "sweden",
    description: `Sweden is renowned for its world-class education,
innovation, and sustainability focus. With English widely
spoken, numerous English-taught programs, and a high
quality of life, Students enjoy modern cities, scholarship
opportunities, and post-study work options, making Sweden
ideal for future innovators and researchers.
`,
  },
  {
    title: "Study in Latvia",
    image: "/assets/country/Latvia.webp",
    slug: "latvia",
    description: `Latvia offers a range of quality, affordable education
options, especially in fields like engineering, IT, and
business. It’s an emerging destination with a unique cultural
experience and a growing international student community.
`,
  },
  {
    title: "Study in Lithuania",
    image: "/assets/country/Lithuania.webp",
    slug: "lithuania",
    description: `Lithuania offers high-quality, low-cost education in a
vibrant, historical setting. Known for strong academic
programs in science, technology, and arts, Lithuania is a
hidden gem for international students.`,
  },
  {
    title: "Study in Malta",
    image: "/assets/country/malta.jpg",
    slug: "malta",
    description: `Malta offers top-quality education in English, with a
Mediterranean lifestyle that combines rich history, vibrant
culture, and affordable living. It’s perfect for students
seeking an English-speaking environment in a stunning
location.`,
  },
  {
    title: "Study in Netherlands",
    image: "/assets/country/Netherland.jpg",
    slug: "netherlands",
    description: `The Netherlands is famous for its innovation and top-tier
universities, many of which offer English-taught programs.
With a highly international student population, it’s an ideal
destination for career-focused students.
`,
  },
  {
    title: "Study in Finland",
    image: "/assets/country/Finland.jpg",
    slug: "finland",
    description: `Finland is known for its innovative education system,
offering excellent universities with a focus on research and
creativity. With a high quality of life and diverse
post-graduation opportunities, Finland is a top choice for
international students.
`,
  },
  {
    title: "Study in Armenia",
    image: "/assets/country/Armenia.webp",
    slug: "armenia",
    description: `Armenia offers affordable, high-quality education with growing international
recognition. Universities in Yerevan and other cities provide a mix of theoretical
and practical learning, especially in medicine and IT. Students enjoy a welcoming
environment, rich cultural heritage, and low living costs. With increasing
opportunities for internships and work during studies, Armenia is an emerging
destination for international students.

`,
  },
  {
    title: "Study in Georgia",
    image: "/assets/country/Georgia.webp",
    slug: "georgia",
    description: `Georgia is becoming an increasingly popular destination for international
students, offering a wide range of English-medium programs in fields like
medicine, business, and engineering Institutions in Tbilisi and Batumi offer
modern education with low tuition fees and a friendly atmosphere. International
students benefit from a multicultural experience, scenic landscapes, and
simplified visa procedures. Georgia combines academic value with a vibrant
lifestyle and growing career prospects.
`,
  },
  {
    title: "Study in Uzbekistan",
    image: "/assets/country/Uzbekistan.webp",
    slug: "uzbekistan",
    description: `Uzbekistan is rapidly developing as a study destination with government-backed
reforms in higher education. Cities like Tashkent and Samarkand host institutions
offering globally aligned curricula in medicine, technology, and business.
Students experience a unique cultural blend, low cost of living, and increasing
support for international learners. With its sunny climate and historic charm,
Uzbekistan offers both quality education and cultural richness.
`,
  },
];
const suggestionMap: Record<string, string[]> = {
  uk: ["singapore", "latvia", "poland"],
  usa: ["france", "new-zealand", "poland"],
  ireland: ["singapore", "france", "sweden"],
  canada: ["poland", "uae", "uk"],
  australia: ["malta", "netherlands", "finland"],
  "new-zealand": ["singapore", "finland", "sweden"],
  france: ["singapore", "finland", "new-zealand"],
  germany: ["netherlands", "singapore", "australia"],
  uae: ["latvia", "usa", "lithuania"],
  singapore: ["malaysia", "germany", "uae"],
  malaysia: ["ireland", "lithuania", "singapore"],
  poland: ["latvia", "netherlands", "malta"],
  sweden: ["malaysia", "germany", "uae"],
  latvia: ["uae", "lithuania", "netherlands"],
  lithuania: ["finland", "australia", "new-zealand"],
  malta: ["ireland", "finland", "germany"],
  netherlands: ["germany", "usa", "poland"],
  finland: ["canada", "usa", "sweden"],
  armenia: ["georgia", "uzbekistan", "poland"],
  georgia: ["armenia", "uzbekistan", "lithuania"],
  uzbekistan: ["armenia", "georgia", "finland"],
};

type PageProps = {
  params: {
    slug: string;
  };
};

export default function CountryPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const params = useParams(); // ✅ Correct way in client components
  const slug = params.slug;
  const [selectedSlug, setSelectedSlug] = useState(slug as string);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const country = countries.find((c) => c.slug === params.slug);
  if (!country) notFound();

  const countryContents = countryData.filter(
    (c) => c.country.toLowerCase() === params.slug
  );

  const selectedSuggestions = suggestionMap[selectedSlug] || []; // Fallback to an empty array
  const suggestedCards = countries.filter((c) =>
    selectedSuggestions.includes(c.slug)
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { mutate: createLead, isPending } = useCreateLead();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createLead(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        interest: form.message,
      },
      {
        onSuccess: () => {
          setForm({ name: "", email: "", phone: "", message: "" });
          toast.success("Lead submitted successfully!");
        },
        onError: (error) => {
          console.error("Error creating lead:", error);
          toast.error("Failed to submit lead. Please try again.");
        },
      }
    );
  };

  return (
    <section className="min-h-screen bg-white text-black px-4 sm:px-6 md:px-12 py-16">
      <div className="flex flex-col lg:flex-row gap-10 py-10 ">
        {/* Left Column - Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[70%] space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Take the First Step Toward Your Global Education!
          </h1>
          <h2 className="text-xl font-semibold">
            Find Your Ideal Course & Country
          </h2>

          {/* Image with overlay */}
          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={country.image}
              alt={country.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-xl text-white font-semibold">
                {country.title}
              </span>
            </div>
          </div>

          {/* More text BELOW the image */}

          <div>{country.description}</div>

          <div className="overflow-x-auto p-4">
            <table className="min-w-full table-auto border border-white text-black bg-white ">
              <thead className="bg-black/80 text-white ">
                <tr>
                  <th className="px-4 py-2 border border-gray-500 text-left">
                    Field
                  </th>
                  <th className="px-4 py-2 border border-gray-500 text-left">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {countryContents.map((c, index) => (
                  <Fragment key={index}>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Country
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.country}
                      </td>
                    </tr>

                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Tuition Fee Range
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.tuitionFeeRange}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Living Costs
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.livingCosts}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Duration of Courses
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.durationOfCourses}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Academic Requirements
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.academicRequirements}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Language Proficiency
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.languageProficiency}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        IELTS Waiver
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.ieltsWaiverAvailability}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Accepted Academic Gaps
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.acceptedAcademicGaps}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Work Experience Proof
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.workExperienceProof}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Funds Required for Visa
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.fundsRequiredForVisa}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Financial Sources
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.acceptableFinancialSources}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Eligible Sponsors
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.eligibleSponsors}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Minimum Family Income
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.minimumFamilyIncome}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Visa Type
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.visaType}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Visa Processing Time
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.visaProcessingTime}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Part-time Work Limit
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.partTimeWorkLimit}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Average Part-time Wages
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.averagePartTimeWages}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Internship Options
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.internshipOptions}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Post-Study Work
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.postStudyWorkOptions}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        PR Pathway
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.permanentResidencyPathway}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Spouse Dependent Visa
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.spouseDependentVisa}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Dependent Conditions
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.dependentConditions}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Scholarships
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.scholarshipOpportunities}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Healthcare Access
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.healthcareAccess}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Climate
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.climateWeather}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Cultural Environment
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.culturalEnvironment}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Currency
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.currency}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Intakes
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.intakes}
                      </td>
                    </tr>
                    <tr className="hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out">
                      <td className="px-4 py-2 border border-gray-500 font-semibold">
                        Popular Cities
                      </td>
                      <td className="px-4 py-2 border border-gray-500">
                        {c.popularCities}
                      </td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Right Column - Form + Suggestions */}
        <div className="w-full lg:w-[30%] flex flex-col">
          {/* ✅ Add Toaster Here */}
          <Toaster position="top-right" reverseOrder={false} />
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-h-[450px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-primary text-center mb-2">
                Let’s Get Started
              </h3>
              <p className="text-center text-sm text-gray-700 mb-4">
                Submit your details for expert guidance
              </p>
            </div>

            <div className="flex-1 overflow-y-auto scrollbar-hide space-y-7 pr-1 py-4 text-black">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded-md text-sm text-black placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded-md text-sm text-black placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded-md text-sm text-black placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                name="message"
                placeholder="Interest"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded-md text-sm text-black placeholder-gray-400 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              {/* ✅ Added status message here */}
              <div className="h-5 mb-2 text-center text-sm font-medium">
                {statusMessage && (
                  <p className={isSuccess ? "text-green-400" : "text-red-400"}>
                    {statusMessage}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary/90 transition"
              >
                Submit
              </Button>
            </div>
          </motion.form>

          {/* Suggested Countries */}
          <div className="mt-4">
            <h4 className="text-black text-sm font-semibold mb-4">
              Popular Destinations:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {suggestedCards.slice(0, 2).map((c) => (
                <Link href={`/countries/${c.slug}`} key={c.slug}>
                  <div
                    className={`cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300
            bg-gray-600 text-white  hover:bg-gray-900`}
                  >
                    <div className="relative w-full h-36 md:h-32">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center py-3">
                      <span className="text-sm sm:text-base font-semibold">
                        {c.title.split(" in ")[1]}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
