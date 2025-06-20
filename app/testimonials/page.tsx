// "use client";

// import React, { useState } from "react";
// import { useTestimonials } from "@/lib/queries/testimonials";
// import { CircularTestimonials } from "@/components/circular-testimonials";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";


// export default function TestimonialsPage() {
//   const { data, isLoading, error } = useTestimonials();
//   const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

//   if (isLoading) return <p>Loading testimonials...</p>;
//   if (error) return <p>Error loading testimonials.</p>;

//   const defaultAvatar = "/default-avatar.jpg";

//   const toggleReadMore = (index: number) => {
//     setExpandedIndexes((prev) =>
//       prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
//     );
//   };

//   const testimonials =
//     data?.testimonials.map((t, index) => {
//       const isExpanded = expandedIndexes.includes(index);
//       const isLong = t.content.length > 300;
//       const shortContent = t.content.slice(0, 300);

//       return {
//         quote: (
//           <>
//             {isExpanded || !isLong ? t.content : `${shortContent}... `}
//             {isLong && (
//               <button
//                 onClick={() => toggleReadMore(index)}
//                 className="ml-2 flex items-center gap-1 text-[#FF0012] text-sm hover:underline transition"
//               >
//                 {isExpanded ? (
//                   <>
//                     Read Less <FaChevronUp size={12} />
//                   </>
//                 ) : (
//                   <>
//                     Read More <FaChevronDown size={12} />
//                   </>
//                 )}
//               </button>
//             )}
//           </>
//         ),
//         name: t.name,
//         designation: t.role,
//         src: t.imageUrl || defaultAvatar,
//       };
//     }) ?? [];

//   return (
//     <section className="relative">
//       {/* Parallax Background */}
//       <div
//         className="absolute inset-0 bg-fixed bg-center bg-cover -z-10"
//         style={{
//           backgroundImage:
//             "url('https://images.pexels.com/photos/30700949/pexels-photo-30700949/free-photo-of-mysterious-river-valley-under-dramatic-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
//         }}
//         aria-hidden="true"
//       />

//       {/* Overlay */}
//       <div className="bg-black/80 w-full h-full absolute inset-0 -z-10" />

//       {/* Dark Section */}
//       <div className="relative px-4 sm:px-6 lg:px-12 py-16 sm:py-24 min-h-[100dvh] sm:min-h-screen flex items-center justify-center">
//         <div className="w-full max-w-6xl">
//           <div className="flex justify-center items-center py-10">
//             <CircularTestimonials
//               testimonials={testimonials}
//               autoplay={true}
//               colors={{
//                 name: "#f7f7ff",
//                 designation: "#FF0012",
//                 testimony: "#f1f1f7",
//                 arrowBackground: "#FF0012",
//                 arrowForeground: "#141414",
//                 arrowHoverBackground: "#f7f7ff",
//               }}
//               fontSizes={{
//                 name: "28px",
//                 designation: "20px",
//                 quote: "20px",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
