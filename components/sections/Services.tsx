"use client";

import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head"; // for SEO meta tags
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Services from "@/app/services/page";

const services = [
  {
    title: "Counselling & Program Discovery",
    description:
      "Having trouble deciding on a course or country? We’ll help you explore your options based on your interests, background, and future goals. Our experienced team will guide you in finding the academic path that suits you best.",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    icon: "/icons/counseling.svg",
  },
  {
    title: "IELTS, Duolingo, PTE & English Speaking Training",
    description:
      "We offer personalized training for IELTS, Duolingo, and PTE exams to help students meet language proficiency requirements with confidence. Many universities in countries like the UK, Canada, and the USA accept IELTS waivers based on medium of instruction (MOI) or alternative tests like Duolingo or Pearson Test of English (PTE). We help you identify such universities and streamline the documentation process for eligibility.",
    image:
      "https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: "/icons/selection.svg",
  },
  {
    title: "SOP Writing",
    description:
      "Your Statement of Purpose is your story — and we help you tell it well. Our team works with you to write a compelling, authentic SOP that highlights your goals, strengths, and personality. It’s not about using templates — it’s about helping your voice stand out and make an impact.",
    image: "https://images.pexels.com/photos/6347727/pexels-photo-6347727.jpeg",
    icon: "/icons/processing.svg",
  },
];

export default function ServicesSection() {
  // State to track which descriptions are expanded; store indexes of expanded items
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Helper to truncate text
  const truncateText = (text: string, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Our Services | End-to-End Study Abroad Support – Insight</title>
        <meta
          name="description"
          content="From counselling to visa and guaranteed accommodation, get expert support for your global study journey every step of the way"
        />
      </Head>

      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center ">
          <h4 className="text-primary uppercase tracking-wide text-sm mb-2">
            — Services —
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight py-4">
            Your Journey, Fully Supported
          </h2>
          <p className="mt-2 text-neutral-400 max-w-3xl mx-auto">
            Every Step of the Way!
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const isExpanded = expanded[index] || false;
            const displayedText = isExpanded
              ? service.description
              : truncateText(service.description, 120);

            return (
              <CardContainer key={index} className="inter-var">
                <CardBody className="bg-gradient-to-t from-black via-primary/80 to-black border-white/[0.1] rounded-xl p-6 w-full h-full flex flex-col hover:shadow-lg transition min-h-[420px]">
                  <CardItem
                    translateZ="100"
                    className="relative w-full h-48 rounded-xl overflow-hidden mb-4"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </CardItem>

                  <div className="flex-grow flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <CardItem translateZ="60">
                        <h3 className="text-lg font-semibold">
                          {service.title}
                        </h3>
                      </CardItem>
                    </div>

                    <CardItem
                      translateZ="40"
                      as="p"
                      className="text-sm text-neutral-400 flex-grow"
                    >
                      {displayedText}
                    </CardItem>

                    {service.description.length > 120 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="mt-2 text-red-500 font-semibold hover:underline self-start"
                        type="button"
                      >
                        {isExpanded ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </div>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto  text-center">
          <Button onClick={() => router.push("/services")}>
            Go to Services
          </Button>
        </div>
      </section>
    </>
  );
}
