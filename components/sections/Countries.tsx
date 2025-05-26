"use client";
import { GlareCard } from "@/components/ui/glare-card";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const countries = [
  {
    name: "Study In France",
    image:
      "https://images.pexels.com/photos/8828400/pexels-photo-8828400.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#",
  },
  {
    name: "Study In Germany",
    image:
      "https://images.pexels.com/photos/7235907/pexels-photo-7235907.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#",
  },
  {
    name: "Study In Moldova",
    image:
      "https://images.pexels.com/photos/8828605/pexels-photo-8828605.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#",
  },
  {
    name: "Study In Ireland",
    image:
      "https://images.pexels.com/photos/7412094/pexels-photo-7412094.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#",
  },
];

export default function Countries() {
  return (
    <section className="bg-[#1f1f29] py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-yellow-400 font-semibold tracking-widest uppercase mb-2">
          Our Connections
        </p>
        <h2 className="text-4xl font-bold mb-10">COUNTRIES</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <GlareCard
              key={index}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={country.image}
                alt={country.name}
                width={400}
                height={300}
                className="object-cover w-full h-60 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-yellow-400 text-black p-2 rounded-full">
                <ArrowUpRight size={16} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-lg font-semibold text-yellow-400 border-b border-yellow-400 inline-block">
                  {country.name}
                </h3>
              </div>
            </GlareCard>
          ))}
        </div>
      </div>
    </section>
  );
}
