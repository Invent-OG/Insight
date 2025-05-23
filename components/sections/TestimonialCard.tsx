// /components/TestimonialCard.tsx
"use client";
import Image from "next/image";

export default function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg text-center">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={100}
        height={100}
        className="rounded-full mx-auto mb-4"
      />
      <p className="italic mb-2">"{testimonial.message}"</p>
      <h3 className="font-bold text-yellow-600">{testimonial.name}</h3>
      <p className="text-gray-500 text-sm">{testimonial.country}</p>
    </div>
  );
}
