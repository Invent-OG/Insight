"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const services = [
  {
    title: "Counseling",
    description:
      "Join in one of our Career Counselling sessions to realise your full potential. Our free Career Counselling has seen countless individuals transforming into successful Careers abroad...",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    icon: "/icons/counseling.svg",
  },
  {
    title: "Course Selection",
    description:
      "With a myriad of courses from scores of Universities and Colleges to choose from, zeroing in on the perfect one is not easy. We help you make the right choice...",
    image:
      "https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: "/icons/selection.svg",
  },
  {
    title: "Application Processing",
    description:
      "Once you've chosen a program and gathered all necessary documents, it's time to apply. We assist you step-by-step with your application process...",
    image: "https://images.pexels.com/photos/6347727/pexels-photo-6347727.jpeg",
    icon: "/icons/processing.svg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#1f1f29] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h4 className="text-yellow-400 uppercase tracking-wide text-sm mb-2">
          — Services —
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold">
          Maximize Your Study Abroad Experience With Our Expert Program
          Selection Assistance
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-[#2b2b3a] border border-white/[0.1] rounded-xl p-6 w-full h-full">
              <CardItem
                translateZ="100"
                className="relative w-full h-48 rounded-xl overflow-hidden"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </CardItem>

              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  {service.icon && (
                    <Image
                      src={service.icon}
                      alt="icon"
                      width={24}
                      height={24}
                      className="invert"
                    />
                  )}
                  <CardItem translateZ="60">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </CardItem>
                </div>

                <CardItem
                  translateZ="40"
                  as="p"
                  className="text-sm text-neutral-300"
                >
                  {service.description}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
