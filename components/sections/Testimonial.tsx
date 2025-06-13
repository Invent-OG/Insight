// "use client";

// import { TestimonialsColumn } from "@/components/testimonials-columns-1";
// import { motion } from "motion/react";

// const testimonials = [
//   {
//     text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//     name: "Briana Patton",
//     role: "Operations Manager",
//   },
//   {
//     text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
//     image: "https://randomuser.me/api/portraits/men/2.jpg",
//     name: "Bilal Ahmed",
//     role: "IT Manager",
//   },
//   {
//     text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
//     image: "https://randomuser.me/api/portraits/women/3.jpg",
//     name: "Saman Malik",
//     role: "Customer Support Lead",
//   },
//   {
//     text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
//     image: "https://randomuser.me/api/portraits/men/4.jpg",
//     name: "Omar Raza",
//     role: "CEO",
//   },
//   {
//     text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
//     image: "https://randomuser.me/api/portraits/women/5.jpg",
//     name: "Zainab Hussain",
//     role: "Project Manager",
//   },
//   {
//     text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//     name: "Aliza Khan",
//     role: "Business Analyst",
//   },
//   {
//     text: "Our business functions improved with a user-friendly design and positive customer feedback.",
//     image: "https://randomuser.me/api/portraits/men/7.jpg",
//     name: "Farhan Siddiqui",
//     role: "Marketing Director",
//   },
//   {
//     text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
//     image: "https://randomuser.me/api/portraits/women/8.jpg",
//     name: "Sana Sheikh",
//     role: "Sales Manager",
//   },
//   {
//     text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
//     image: "https://randomuser.me/api/portraits/men/9.jpg",
//     name: "Hassan Ali",
//     role: "E-commerce Manager",
//   },
// ];

// const firstColumn = testimonials.slice(0, 3);
// const secondColumn = testimonials.slice(3, 6);
// const thirdColumn = testimonials.slice(6, 9);

// const Testimonials = () => {
//   return (
//     <section className="bg-black text-white relative py-16">
//       <div
//         data-aos="fade-right"
//         data-aos-duration="1000"
//         data-aos-delay="100"
//         className="container mx-auto"
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//           viewport={{ once: true }}
//           className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
//         >
//           {/* <div className="flex justify-center">
//             <div className="border border-gray-700 py-1 px-4 rounded-lg">
//               Testimonials
//             </div>
//           </div>

//           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
//             What our users say
//           </h2>
//           <p className="text-center mt-5 opacity-75">
//             See what our customers have to say about us.
//           </p> */}
//           <div className="text-center max-w-2xl mx-auto mb-12">
//             <h4 className="text-primary text-sm uppercase tracking-wider mb-3">
//               — Testimonials —
//             </h4>
//             <h2 className="text-3xl md:text-4xl font-bold leading-tight">
//               See what our customers have to say about us.
//             </h2>
//           </div>
//         </motion.div>

//         <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
//           <TestimonialsColumn testimonials={firstColumn} duration={15} />
//           <TestimonialsColumn
//             testimonials={secondColumn}
//             className="hidden md:block"
//             duration={19}
//           />
//           <TestimonialsColumn
//             testimonials={thirdColumn}
//             className="hidden lg:block"
//             duration={17}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
"use client";

import { useTestimonials } from "@/lib/queries/testimonials";
import { TestimonialsColumn } from "@/components/testimonials-columns-1";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Testimonials() {
  const { data, isLoading, error } = useTestimonials();

  if (isLoading)
    return <p className="text-center text-white">Loading testimonials...</p>;
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
    <section className="bg-black text-white relative py-16">
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
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              See what our customers have to say about us.
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
