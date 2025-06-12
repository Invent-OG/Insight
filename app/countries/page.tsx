"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

type Country = {
  title: string;
  image: any;
  slug: string;
};

const countries: Country[] = [
  { title: "Study in UK", image: uk, slug: "uk" },
  { title: "Study in the USA", image: usa, slug: "usa" },
  { title: "Study in Ireland", image: ireland, slug: "ireland" },
  { title: "Study in Canada", image: canada, slug: "canada" },
  { title: "Study in Australia", image: australia, slug: "australia" },
  { title: "Study in New Zealand", image: newzealand, slug: "new-zealand" },
  { title: "Study in France", image: france, slug: "france" },
  { title: "Study in Germany", image: germany, slug: "germany" },
  { title: "Study in the UAE", image: uae, slug: "uae" },
  { title: "Study in Singapore", image: singapore, slug: "singapore" },
  { title: "Study in Malaysia", image: malaysia, slug: "malaysia" },
  { title: "Study in Poland", image: poland, slug: "poland" },
  { title: "Study in Sweden", image: sweden, slug: "sweden" },
  { title: "Study in Latvia", image: latvia, slug: "latvia" },
  { title: "Study in Lithuania", image: lithuania, slug: "lithuania" },
  { title: "Study in Malta", image: malta, slug: "malta" },
  { title: "Study in Netherlands", image: netherland, slug: "netherlands" },
  { title: "Study in Finland", image: finland, slug: "finland" },
];

const Page = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowContent(window.scrollY > 100);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full min-h-screen sm:h-80 md:h-96 flex justify-center items-center text-center px-4 sm:px-6 md:px-12 relative overflow-hidden bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1594734415578-00fc9540929b?q=80&w=1470&auto=format&fit=crop')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-widest font-sans select-none text-white drop-shadow-lg"
        >
          Study <span className="text-primary">Abroad</span> Destinations
        </motion.h1>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-red-500 animate-bounce">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Cards Section */}
      <section className="w-full mx-auto py-16 lg:py-20 bg-black px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-gray-200">
          {countries.map((country) => (
            <Link href={`/countries/${country.slug}`} key={country.slug}>
              <motion.div
                className="relative w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-xl group border border-gray-800 hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative h-80 w-full">
                  <Image
                    src={country.image}
                    alt={country.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent px-4 py-3">
                    <h2 className="text-white text-lg font-semibold text-center">
                      {country.title}
                    </h2>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
