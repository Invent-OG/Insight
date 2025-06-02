"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const universities = [
  {
    name: "University of Greenwich",
    images: [
      "https://images.pexels.com/photos/2305098/pexels-photo-2305098.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3014015/pexels-photo-3014015.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    name: "Sheffield Hallam University",
    images: [
      "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    name: "University of East Anglia",
    images: [
      "https://images.pexels.com/photos/32213218/pexels-photo-32213218/free-photo-of-students-socializing-at-university-campus-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
];

export default function UniversitiesSection() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 2); // 2 images per university
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white px-6">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h4 className="text-yellow-400 text-sm uppercase tracking-wider mb-2 relative">
          <span className="before:content-['—'] before:mr-2 after:content-['—'] after:ml-2 text-primary">
            Universities
          </span>
        </h4>
        <h2 className="text-3xl md:text-5xl font-bold py-4">
          Unlock New Opportunities With Sterlings
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {universities.map((uni, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group shadow-lg hover:scale-105 transition-transform duration-300 bg-[#111111]"
          >
            {/* Image wrapper for fade-in/out animation */}
            <div className="relative w-full h-60">
              {uni.images.map((img, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={img}
                  alt={`${uni.name} Image ${imgIndex + 1}`}
                  fill
                  className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ${
                    imgIndex === imageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* University name overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
              <h3 className="text-white text-lg font-bold uppercase tracking-wide">
                {uni.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
