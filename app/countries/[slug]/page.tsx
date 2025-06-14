"use client";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";

import uk from "@/public/assets/UK.png";
import usa from "@/public/assets/country/Usa.jpg";
import ireland from "@/public/assets/country/Ireland.jpg";
import canada from "@/public/assets/country/Canada (1).png";
import australia from "@/public/assets/country/Australia.png";
import newzealand from "@/public/assets/country/New Zealand (1).png";
import france from "@/public/assets/country/France.jpg";
import germany from "@/public/assets/country/Germany (1).png";
import uae from "@/public/assets/country/UAE (1).png";
import singapore from "@/public/assets/country/Singapore.png";
import malaysia from "@/public/assets/country/Malaysia.png";
import poland from "@/public/assets/country/Poland.png";
import sweden from "@/public/assets/country/Sweden.png";
import latvia from "@/public/assets/country/Latvia.jpg";
import lithuania from "@/public/assets/country/Lithuania .jpg";
import malta from "@/public/assets/country/malta.jpg";
import netherland from "@/public/assets/country/Netherland.jpg";
import finland from "@/public/assets/country/Finland.jpg";
import { motion } from "framer-motion";
import { use, useState } from "react";
import Link from "next/link";

type Country = {
  title: string;
  image: any;
  slug: string;
  description: string;
};

const countries: Country[] = [
  {
    title: "Study in UK",
    image: uk,
    slug: "uk",
    description:
      "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain,[m] is a country in Northwestern Europe, off the coast of the continental mainland. It comprises England, Scotland, Wales and Northern Ireland.[n] The UK includes the island of Great Britain, the north-eastern part of the island of Ireland, and most of the smaller islands within the British Isles, covering 94,354 square miles (244,376 km2).[f] Northern Ireland shares a land border with the Republic of Ireland; otherwise, the UK is surrounded by the Atlantic Ocean, the North Sea, the English Channel, the Celtic Sea and the Irish Sea. It maintains sovereignty over the British Overseas Territories, which are located across various oceans and seas globally. The UK had an estimated population of over 68.2 million people in 2023. The capital and largest city of both England and the UK is London. The cities of Edinburgh, Cardiff and Belfast are the national capitals of Scotland, Wales and Northern Ireland.",
  },
  {
    title: "Study in the USA",
    image: usa,
    slug: "usa",
    description:
      "The USA provides diverse courses, top universities, and cultural exposure. It's a leading choice for STEM, Business, and Research programs.",
  },
  {
    title: "Study in Ireland",
    image: ireland,
    slug: "ireland",
    description:
      "Ireland offers a vibrant student life, excellent universities, and strong opportunities in tech and pharmaceuticals.",
  },
  {
    title: "Study in Canada",
    image: canada,
    slug: "canada",
    description:
      "Canada is known for its welcoming atmosphere, excellent education system, and work-permit friendly policies.",
  },
  {
    title: "Study in Australia",
    image: australia,
    slug: "australia",
    description:
      "Australia boasts world-class universities, sunny weather, and PR pathways for international graduates.",
  },
  {
    title: "Study in New Zealand",
    image: newzealand,
    slug: "new-zealand",
    description:
      "New Zealand provides high-quality education and stunning natural beauty. A great choice for peaceful and practical learning.",
  },
  {
    title: "Study in France",
    image: france,
    slug: "france",
    description:
      "France offers affordable tuition, cultural richness, and globally ranked institutions like Sorbonne and HEC Paris.",
  },
  {
    title: "Study in Germany",
    image: germany,
    slug: "germany",
    description:
      "Germany offers tuition-free education in public universities and is a tech and engineering powerhouse.",
  },
  {
    title: "Study in the UAE",
    image: uae,
    slug: "uae",
    description:
      "The UAE is rapidly growing as an education hub with campuses of top global universities and vibrant student life.",
  },
  {
    title: "Study in Singapore",
    image: singapore,
    slug: "singapore",
    description:
      "Singapore blends Eastern and Western cultures, has world-class universities, and is a global financial center.",
  },
  {
    title: "Study in Malaysia",
    image: malaysia,
    slug: "malaysia",
    description:
      "Malaysia offers affordable, high-quality education and hosts many UK university branches with lower costs.",
  },
  {
    title: "Study in Poland",
    image: poland,
    slug: "poland",
    description:
      "Poland combines rich history with low tuition and living costs, ideal for medical and engineering studies.",
  },
  {
    title: "Study in Sweden",
    image: sweden,
    slug: "sweden",
    description:
      "Sweden focuses on innovation, sustainability, and research, with great scholarships for international students.",
  },
  {
    title: "Study in Latvia",
    image: latvia,
    slug: "latvia",
    description:
      "Latvia offers affordable education, growing international programs, and opportunities to explore Europe.",
  },
  {
    title: "Study in Lithuania",
    image: lithuania,
    slug: "lithuania",
    description:
      "Lithuania is an emerging study destination in the EU with modern universities and cost-effective living.",
  },
  {
    title: "Study in Malta",
    image: malta,
    slug: "malta",
    description:
      "Malta offers English-taught programs, Mediterranean lifestyle, and easy access to European travel.",
  },
  {
    title: "Study in Netherlands",
    image: netherland,
    slug: "netherlands",
    description:
      "The Netherlands provides cutting-edge education in English, progressive culture, and career support.",
  },
  {
    title: "Study in Finland",
    image: finland,
    slug: "finland",
    description:
      "Finland has one of the best education systems globally, with a focus on equality, innovation, and student well-being.",
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
};

type PageProps = {
  params: {
    slug: string;
  };
};

export default function CountryPage() {
  const params = useParams(); // ✅ Correct way in client components
  const slug = params.slug;

  const country = countries.find((c) => c.slug === params.slug);
  if (!country) notFound();

  const [selectedSlug, setSelectedSlug] = useState(slug as string);
  const selectedSuggestions = suggestionMap[selectedSlug];
  const suggestedCards = countries.filter((c) =>
    selectedSuggestions.includes(c.slug)
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // You can integrate backend logic here
  };

  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-12 py-16">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column - Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[70%] space-y-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Take the First Step Toward Your Global Education!
          </h1>
          <h2 className="text-xl font-semibold">
            Find Your Ideal Course & Country
          </h2>
          <p className="text-gray-300">
            Submit your details, and let’s explore your study abroad options
            together. Discover top universities, visa guidance, and expert
            counseling to shape your academic future.
          </p>

          {/* Image with overlay */}
          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={country.image}
              alt={country.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-xl font-semibold">{country.title}</span>
            </div>
          </div>

          {/* More text BELOW the image */}
          <p className="text-gray-300">
            Submit your details, and let’s explore your study abroad options
            together. Discover top universities, visa guidance, and expert
            counseling to shape your academic future.
          </p>
          <p className="text-gray-300">
            Submit your details, and let’s explore your study abroad options
            together. Discover top universities, visa guidance, and expert
            counseling to shape your academic future.
          </p>
          <p className="text-gray-300">
            Submit your details, and let’s explore your study abroad options
            together. Discover top universities, visa guidance, and expert
            counseling to shape your academic future.
          </p>
          <p className="text-gray-300">
            Submit your details, and let’s explore your study abroad options
            together. Discover top universities, visa guidance, and expert
            counseling to shape your academic future.
          </p>
        </motion.div>

        {/* Right Column - Form + Suggestions */}
        <div className="w-full lg:w-[30%] flex flex-col">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[450px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-primary text-center mb-2">
                Let’s Get Started
              </h3>
              <p className="text-center text-sm text-gray-400 mb-4">
                Submit your details for expert guidance
              </p>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                name="interest"
                placeholder="Interest (e.g., Engineering)"
                value={form.interest}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-primary text-black font-bold py-3 px-6 rounded-md hover:bg-primary/90 transition"
              >
                Submit
              </button>
            </div>
          </motion.form>

          {/* Suggested Countries */}
          <div className="mt-4">
            <h4 className="text-white text-sm font-semibold mb-4">
              Popular Destinations:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {suggestedCards.slice(0, 2).map((c) => (
                <Link href={`/countries/${c.slug}`} key={c.slug}>
                  <div
                    className={`cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300
        bg-white/5 text-white border-white/10 hover:bg-white/10`}
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
