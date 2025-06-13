// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import Head from "next/head"; // for SEO meta tags
// import { CardBody, CardContainer } from "@/components/ui/3d-card";
// import { Button } from "../ui/button";
// import { useRouter } from "next/navigation";

// const services = [
//   {
//     title: "Counselling & Program Discovery",
//     description:
//       "Having trouble deciding on a course or country? We’ll help you explore your options based on your interests, background, and future goals. Our experienced team will guide you in finding the academic path that suits you best.",
//     image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
//     icon: "/icons/counseling.svg",
//   },
//   {
//     title: "IELTS, Duolingo, PTE & English Speaking Training",
//     description:
//       "We offer personalized training for IELTS, Duolingo, and PTE exams to help students meet language proficiency requirements with confidence. Many universities in countries like the UK, Canada, and the USA accept IELTS waivers based on medium of instruction (MOI) or alternative tests like Duolingo or Pearson Test of English (PTE). We help you identify such universities and streamline the documentation process for eligibility.",
//     image:
//       "https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     icon: "/icons/selection.svg",
//   },
//   {
//     title: "SOP Writing",
//     description:
//       "Your Statement of Purpose is your story — and we help you tell it well. Our team works with you to write a compelling, authentic SOP that highlights your goals, strengths, and personality. It’s not about using templates — it’s about helping your voice stand out and make an impact.",
//     image: "https://images.pexels.com/photos/6347727/pexels-photo-6347727.jpeg",
//     icon: "/icons/processing.svg",
//   },
// ];

// export default function ServicesSection() {
//   const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

//   const toggleExpand = (index: number) => {
//     setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
//   };

//   const truncateText = (text: string, maxLength = 120) => {
//     if (text.length <= maxLength) return text;
//     return text.slice(0, maxLength) + "...";
//   };

//   const router = useRouter();

//   return (
//     <>
//       <Head>
//         <title>Our Services | End-to-End Study Abroad Support – Insight</title>
//         <meta
//           name="description"
//           content="From counselling to visa and guaranteed accommodation, get expert support for your global study journey every step of the way"
//         />
//       </Head>

//       <section className="bg-black  text-white flex flex-col  justify-center items-center">
//         {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"> */}

//         <div className="container flex flex-col justify-center items-center gap-10 px-8 py-10  ">
//           <div className="  text-center ">
//             <h4 className="text-primary uppercase font-bold tracking-wide text-sm mb-2">
//               — Services —
//             </h4>
//             <h2 className="text-4xl md:text-5xl font-bold leading-tight ">
//               Your Journey, Fully Supported
//             </h2>
//             <p className="mt-2 text-neutral-400 max-w-3xl mx-auto">
//               Every Step of the Way!
//             </p>
//           </div>

//           <div className="flex gap-5 lg:flex-row md:flex-row flex-col">
//             {services.map((service, index) => {
//               const isExpanded = expanded[index] || false;
//               const displayedText = isExpanded
//                 ? service.description
//                 : truncateText(service.description, 120);

//               return (
//                 <CardContainer key={index} className="inter-var ">
//                   <CardBody className="bg-gray-950 border border-gray-700 rounded-lg overflow-hidden flex flex-col hover:shadow-sm transition h-72 sm:h-80 md:h-96">
//                     <div className="relative h-[90%] ">
//                       <Image
//                         src={service.image}
//                         alt={service.title}
//                         fill
//                         className="object-cover w-full "
//                         sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
//                       />
//                     </div>

//                     <div className="flex flex-col justify-between flex-grow p-4 sm:p-5">
//                       <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
//                         {service.title}
//                       </h3>
//                       <p className="text-sm sm:text-base text-gray-400">
//                         {displayedText}
//                       </p>

//                       {service.description.length > 120 && (
//                         <button
//                           onClick={() => toggleExpand(index)}
//                           className="mt-2 text-gray-400 font-semibold hover:underline self-start"
//                           type="button"
//                         >
//                           {isExpanded ? "Show Less" : "Read More"}
//                         </button>
//                       )}
//                     </div>
//                   </CardBody>
//                 </CardContainer>
//               );
//             })}
//           </div>

//           <Button onClick={() => router.push("/services")}>
//             Go to Services
//           </Button>
//         </div>
//       </section>
//     </>
//   );
// }
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { ContainerScroll, CardSticky } from "@/components/cards-stack";
import { Button } from "../ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

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
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const router = useRouter();

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const truncateText = (text: string, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };
  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 100,
      once: true,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Our Services | End-to-End Study Abroad Support – Insight</title>
        <meta
          name="description"
          content="From counselling to visa and guaranteed accommodation, get expert support for your global study journey every step of the way"
        />
      </Head>

      <div className="bg-gradient-to-r from-black to-primary/40">
        <section className="bg-black text-white flex flex-col items-center md:flex-col justify-center md:text-center ">
          <div className="container flex flex-col gap-10 px-8 py-8 md:py-10 lg:py-12 lg:flex-row ">
            {/* Left side - Not sticky on mobile */}
            <div className="flex-1 self-start flex flex-col gap-4 rounded-xl items-center justify-center text-center lg:sticky top-20">
              <h4 className="text-primary uppercase text-xs font-medium tracking-wider">
                — Services —
              </h4>
              <div className="h-px bg-gray-700 my-2"></div>
              <h2 className="text-5xl font-extrabold">
                Your Journey,{" "}
                <span className="text-primary">Fully Supported</span>
              </h2>
              <p className="text-gray-400 py-4">Every Step of the Way!</p>

              {/* Show button only on large screens */}
              <div className="hidden lg:block">
                <Button
                  onClick={() => router.push("/services")}
                  className="md:mt-4 lg:mt-6 w-40"
                >
                  Go to Services
                </Button>
              </div>
            </div>

            {/* Right side - Cards container */}
            <div className="flex-1 w-full">
              <ContainerScroll className="py-4 space-y-8">
                {services.map((service, index) => {
                  const isExpanded = expanded[index] || false;
                  const displayedText = isExpanded
                    ? service.description
                    : truncateText(service.description, 120);

                  return (
                    <React.Fragment key={index}>
                      <CardSticky
                        key={index}
                        index={index + 2}
                        className="rounded-2xl text-xl bg-black overflow-hidden p-0 shadow-md lg:backdrop-blur-md"
                        incrementY={30}
                        incrementZ={10}
                      >
                        <div className="relative h-64 w-full">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover opacity-30"
                          />
                          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                            <h3 className="sm:text-xl font-semibold text-white mb-2">
                              {service.title}
                            </h3>
                            <p className="text-sm text-gray-300">
                              {displayedText}
                            </p>
                            {service.description.length > 120 && (
                              <button
                                onClick={() => router.push("/services")}
                                className="mt-2 text-primary font-semibold hover:underline"
                                type="button"
                              >
                                Read More
                              </button>
                            )}
                          </div>
                        </div>
                      </CardSticky>
                    </React.Fragment>
                  );
                })}
              </ContainerScroll>

              {/* Mobile-only button with bottom margin */}
              <div className="flex justify-center lg:hidden mt-8">
                <Button
                  onClick={() => router.push("/services")}
                  className="w-40"
                >
                  Go to Services
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
