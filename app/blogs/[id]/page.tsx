// "use client";

// import { useParams } from "next/navigation";
// import { useBlog } from "@/lib/queries/blogs";
// import React, { useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function BlogDetailPage() {
//   const params = useParams();
//   const id = typeof params?.id === "string" ? params.id : "";

//   useEffect(() => {
//     AOS.init({ once: true, duration: 700 });
//   }, []);

//   const { data, isLoading, isError, error } = useBlog(id);

//   if (!id) return <div className="text-red-500">Invalid blog ID</div>;
//   if (isLoading) return <div className="text-white p-10">Loading...</div>;
//   if (isError)
//     return (
//       <div className="text-red-500 p-10">Error: {(error as Error).message}</div>
//     );

//   const blog = data?.blog;
//   if (!blog) return <div className="text-gray-400 p-10">Blog not found</div>;

//   return (
//     <main className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <section className="relative h-[60vh] w-full overflow-hidden">
//         {blog.imageUrl ? (
//           <div className="absolute inset-0">
//             <Image
//               src={blog.imageUrl}
//               alt={blog.title}
//               fill
//               sizes="100vw"
//               priority
//               className="object-cover object-center w-full h-full brightness-[0.5]"
//             />
//           </div>
//         ) : (
//           <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-gray-300">
//             No image available
//           </div>
//         )}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent skew-y-3" />
//         <div className="absolute inset-0 flex items-end justify-center text-center px-4 pb-10">
//           <h1
//             className="text-3xl md:text-5xl font-bold max-w-4xl text-white drop-shadow-xl"
//             data-aos="fade-up"
//           >
//             {blog.title}
//           </h1>
//         </div>
//       </section>

//       {/* Blog Content Section */}
//       <div className="max-w-4xl mx-auto px-4 py-16">
//         <Link
//           href="/blogs"
//           className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 border border-red-700 text-white text-sm rounded-md hover:bg-red-700 transition mb-8"
//           data-aos="fade-right"
//         >
//           ← Back to Blogs
//         </Link>

//         {/* Meta Info */}
//         <div
//           className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-4 text-sm text-gray-400"
//           data-aos="fade-up"
//         >
//           <p>
//             Published on:{" "}
//             <span className="text-white font-medium">
//               {new Date(blog.createdAt).toLocaleDateString()}
//             </span>
//           </p>
//           <p>
//             Category:{" "}
//             <span className="text-red-500 font-semibold">{blog.category}</span>
//           </p>
//         </div>

//         {/* Content */}
//         <article
//           className="prose prose-invert prose-lg max-w-none text-gray-200 whitespace-pre-line"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           {blog.content}
//         </article>
//       </div>
//     </main>
//   );
// }
// "use client";

// import { useParams } from "next/navigation";
// import { useBlog } from "@/lib/queries/blogs";
// import React, { useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function BlogDetailPage() {
//   const params = useParams();
//   const id = typeof params?.id === "string" ? params.id : "";

//   useEffect(() => {
//     AOS.init({ once: true, duration: 700 });
//   }, []);

//   const { data, isLoading, isError, error } = useBlog(id);

//   if (!id) return <div className="text-red-500">Invalid blog ID</div>;
//   if (isLoading) return <div className="text-black p-10">Loading...</div>;
//   if (isError)
//     return (
//       <div className="text-red-500 p-10">Error: {(error as Error).message}</div>
//     );

//   const blog = data?.blog;
//   if (!blog) return <div className="text-gray-600 p-10">Blog not found</div>;

//   return (
//     <main className="min-h-screen bg-white text-black">
//       {/* Hero Section */}
//       <section className="relative h-[60vh] w-full overflow-hidden">
//         {blog.imageUrl ? (
//           <div className="absolute inset-0">
//             <Image
//               src={blog.imageUrl}
//               alt={blog.title}
//               fill
//               sizes="100vw"
//               priority
//               className="object-cover object-center w-full h-full"
//             />
//           </div>
//         ) : (
//           <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
//             No image available
//           </div>
//         )}
//         <div className="absolute inset-0 flex items-end justify-center text-center px-4 pb-10">
//           <h1
//             className="text-3xl md:text-5xl font-bold max-w-4xl text-black drop-shadow-xl"
//             data-aos="fade-up"
//           >
//             {blog.title}
//           </h1>
//         </div>
//       </section>

//       {/* Blog Content Section */}
//       <div className="max-w-4xl mx-auto px-4 py-16">
//         <Link
//           href="/blogs"
//           className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 border border-red-700 text-white text-sm rounded-md hover:bg-red-700 transition mb-8"
//           data-aos="fade-right"
//         >
//           ← Back to Blogs
//         </Link>

//         {/* Meta Info */}
//         <div
//           className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-red-500 pb-4 text-sm text-gray-700"
//           data-aos="fade-up"
//         >
//           <p>
//             Published on:{" "}
//             <span className="text-black font-medium">
//               {new Date(blog.createdAt).toLocaleDateString()}
//             </span>
//           </p>
//           <p>
//             Category:{" "}
//             <span className="text-red-600 font-semibold">{blog.category}</span>
//           </p>
//         </div>

//         {/* Blog Content */}
//         <article
//           className="prose prose-lg prose-neutral max-w-none text-black whitespace-pre-line"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           {blog.content}
//         </article>
//       </div>
//     </main>
//   );
// }

"use client";

import { useParams } from "next/navigation";
import { useBlog } from "@/lib/queries/blogs";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";

export default function BlogDetailPage() {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : "";

  const [scrollY, setScrollY] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 700 });

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { data, isLoading, isError, error } = useBlog(id);

  if (!id) return <div className="text-red-500">Invalid blog ID</div>;
  if (isLoading) return <div className="text-black p-10">Loading...</div>;
  if (isError)
    return (
      <div className="text-red-500 p-10">Error: {(error as Error).message}</div>
    );

  const blog = data?.blog;
  if (!blog) return <div className="text-gray-600 p-10">Blog not found</div>;

  return (
    <main className="bg-[#fefefe] min-h-screen text-black">
      {/* Banner with Image & Text Parallax */}
      <div
        className="relative h-[100vh] bg-black text-white overflow-hidden"
        ref={bannerRef}
      >
        {/* Parallax Image */}
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />

        {/* Parallax Text */}
        <div
          className="relative z-10 flex items-center justify-center h-full px-4"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <h1
            className="text-3xl md:text-5xl font-bold text-center drop-shadow-lg"
            data-aos="fade-up"
          >
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Blog Layout */}
      <div className="relative w-full">
        {/* Background Layer with Opacity */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assets/bgblogtexture.avif')",
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            opacity: 0.2,
          }}
        />

        {/* Blog Layout */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4 py-16">
          {/* Content */}
          <article
            className="col-span-1 md:col-span-3 order-2 md:order-1"
            data-aos="fade-up"
          >
            <div className="prose prose-lg md:prose-xl max-w-none prose-neutral prose-headings:text-black prose-p:text-gray-800 prose-a:text-red-600 prose-a:underline prose-img:rounded-lg prose-blockquote:border-l-4 prose-blockquote:border-red-500 prose-blockquote:pl-4 prose-blockquote:italic whitespace-pre-line">
              {blog.content}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="col-span-1 order-1 md:order-2" data-aos="fade-left">
            <Link
              href="/blogs"
              className="inline-block mb-6 text-red-600 hover:underline font-medium"
            >
              ← Back to Blogs
            </Link>
            <div className="sticky top-20 space-y-4 text-sm text-gray-600">
              <p>
                <strong>Published:</strong>
                <br />
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
              <p>
                <strong>Category:</strong>
                <br />
                <span className="text-red-600 font-semibold">
                  {blog.category}
                </span>
              </p>
            </div>
          </aside>
        </div>

        {/* Footer CTA */}
        <div className="relative z-10 py-10 text-center">
          <h3 className="text-xl font-semibold mb-4" data-aos="fade-up">
            Enjoyed this post?
          </h3>

          <Link href="/contact">
            <Button
              asChild
              className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span>Get in Touch</span>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
