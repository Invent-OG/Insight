
"use client";

import { useTestimonials } from "@/lib/queries/testimonials";
import { TestimonialsColumn } from "@/components/testimonials-columns-1";
import { motion } from "framer-motion";
import Link from "next/link";
import { RefreshCcw } from "lucide-react";

export default function Testimonials() {
  const { data, isLoading, error } = useTestimonials();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-20 min-h-screen  space-y-3">
        <RefreshCcw className="w-12 h-12 text-red-600 animate-spin" />
        <p className="text-gray-600 text-lg">Loading testimonials...</p>
      </div>
    );
  }
  if (error)
    return (
      <p className="text-center text-red-500">Error loading testimonials.</p>
    );

  const defaultAvatar = "/default-avatar.jpg";

  const testimonials =
    data?.testimonials.map((t) => ({
      id: t._id || t.id,
      text:
        t.content.length > 100 ? t.content.slice(0, 100) + "..." : t.content,
      image: t.imageUrl || defaultAvatar,
      name: t.name,
      role: t.role,
    })) ?? [];

  const firstColumn = testimonials.filter((_, i) => i % 3 === 0);
  const secondColumn = testimonials.filter((_, i) => i % 3 === 1);
  const thirdColumn = testimonials.filter((_, i) => i % 3 === 2);

  return (
    <section className="bg-gray-50 text-black relative py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h4 className="text-primary text-sm uppercase tracking-wider mb-3">
              — Testimonials —
            </h4>
            <h2 className="lg:text-5xl md:text-4xl text-3xl lg:font-bold font-bold ">
              See what our{" "}
              <span className="text-primary">customers have to</span> say about
              us.
            </h2>
          </div>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          {[firstColumn, secondColumn, thirdColumn].map((column, i) => (
            <TestimonialsColumn
              key={i}
              testimonials={column.map((item) => ({
                ...item,
                wrapper: ({ children }: { children: React.ReactNode }) => (
                  <Link
                    href={`/testimonials/${item.id}`}
                    className="block h-full"
                  >
                    {children}
                  </Link>
                ),
              }))}
              className={
                i === 1 ? "hidden md:block" : i === 2 ? "hidden lg:block" : ""
              }
              duration={i === 0 ? 15 : i === 1 ? 19 : 17}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
