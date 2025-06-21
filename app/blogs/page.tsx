// "use client";

// import { useBlogs } from "@/lib/queries/blogs";
// import { ArrowRight } from "lucide-react";
// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import Link from "next/link";

// export default function BlogsPage() {
//   const { data, isLoading, isError, error } = useBlogs();
//   const [page, setPage] = useState(1);
//   const blogsPerPage = 10;

//   useEffect(() => {
//     AOS.init({ duration: 1000, offset: 100, once: true });
//   }, []);

//   if (isLoading) return <div className="text-white p-10">Loading...</div>;
//   if (isError)
//     return (
//       <div className="text-red-500 p-10">Error: {(error as Error).message}</div>
//     );

//   const blogs = data?.blogs || [];
//   const totalPages = Math.ceil(blogs.length / blogsPerPage);
//   const startIndex = (page - 1) * blogsPerPage;
//   const paginatedBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

//   return (
//     <main className="min-h-screen w-full bg-black text-white">
//       <section
//         data-aos="fade-up"
//         data-aos-anchor-placement="top-center"
//         className="lg:py-16 py-20 w-full bg-gradient-to-r from-black to-primary/40 text-white"
//       >
//         <h4 className="text-primary uppercase text-base text-center font-medium tracking-wider">
//           — Services —
//         </h4>
//         <div className="w-full flex flex-col items-center gap-16 px-0">
//           <div className="text-center max-w-5xl mx-auto px-4">
//             <h2 className="mb-3 py-4 text-3xl md:text-4xl lg:text-5xl  font-bold ">
//               Blog <span className="text-primary">Posts</span>
//             </h2>
//             <p className="mb-8 text-muted-foreground md:text-base lg:text-lg">
//               Discover the latest trends, insights, and real-world stories from
//               our team.
//             </p>
//           </div>

//           <div className="grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
//             {paginatedBlogs.map((post) => (
//               <Card
//                 key={post.id}
//                 className="min-h-[430px] flex flex-col justify-between overflow-hidden rounded-md bg-white/5"
//               >
//                 <Link
//                   href={`/blogs/${post.id}`}
//                   className="relative w-full h-48 block"
//                 >
//                   {post.imageUrl ? (
//                     <img
//                       src={post.imageUrl}
//                       alt={post.title}
//                       className="w-full h-full object-cover object-center"
//                     />
//                   ) : (
//                     <div className="bg-gray-700 w-full h-full flex items-center justify-center text-white">
//                       No Image
//                     </div>
//                   )}
//                 </Link>

//                 <div className="flex flex-col flex-1 justify-between px-4">
//                   <CardHeader className="px-0">
//                     <h3 className="text-lg font-semibold hover:underline md:text-xl text-white">
//                       <Link href={`/blogs/${post.id}`}>{post.title}</Link>
//                     </h3>
//                     <p className="text-sm text-muted-foreground text-primary">
//                       {new Date(post.createdAt).toLocaleDateString()}
//                     </p>
//                   </CardHeader>

//                   <CardContent className="px-0 pb-4 flex-1">
//                     <p className="text-muted-foreground text-sm line-clamp-3">
//                       {post.excerpt}
//                     </p>
//                   </CardContent>

//                   <CardFooter className="px-0 pt-0">
//                     <Link
//                       href={`/blogs/${post.id}`}
//                       className="flex items-center text-foreground hover:underline text-primary text-sm"
//                     >
//                       Read more
//                       <ArrowRight className="ml-2 size-4 text-white" />
//                     </Link>
//                   </CardFooter>
//                 </div>
//               </Card>
//             ))}
//           </div>

//           {/* Pagination Controls */}
//           {blogs.length > blogsPerPage && (
//             <div className="flex items-center gap-4 mt-8">
//               <button
//                 onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
//                 disabled={page === 1}
//                 className="px-4 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 disabled:opacity-50"
//               >
//                 Previous
//               </button>

//               <span className="text-muted-foreground text-sm">
//                 Page {page} of {totalPages}
//               </span>

//               <button
//                 onClick={() =>
//                   setPage((prev) => Math.min(prev + 1, totalPages))
//                 }
//                 disabled={page === totalPages}
//                 className="px-4 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import { useBlogs } from "@/lib/queries/blogs";
// import { useEffect, useRef, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// const IMG_PADDING = 12;
// const BLOGS_PER_PAGE = 5;

// const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["end end", "end start"],
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

//   return (
//     <motion.div
//       style={{
//         backgroundImage: `url(${imgUrl})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: `calc(100vh - ${IMG_PADDING * 2}px)`,
//         top: IMG_PADDING,
//         scale,
//       }}
//       ref={targetRef}
//       className="sticky z-0 overflow-hidden rounded-3xl"
//     >
//       <motion.div
//         className="absolute inset-0 bg-neutral-950/70"
//         style={{ opacity }}
//       />
//     </motion.div>
//   );
// };

// const OverlayCopy = ({
//   subheading,
//   heading,
// }: {
//   subheading: string;
//   heading: string;
// }) => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
//   const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

//   return (
//     <motion.div
//       style={{ y, opacity }}
//       ref={targetRef}
//       className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
//     >
//       <p className="text-center text-4xl font-bold md:text-7xl mb-2 md:mb-4">
//         {heading}
//       </p>
//       <p className="text-center text-xl">{subheading}</p>
//     </motion.div>
//   );
// };

// type BlogPost = {
//   id: string | number;
//   title: string;
//   excerpt: string;
//   createdAt: string | Date;
//   imageUrl?: string;
// };

// const BlogContent = ({ post }: { post: BlogPost }) => (
//   <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
//     <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
//       {post.title}
//     </h2>
//     <div className="col-span-1 md:col-span-8">
//       <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
//         {post.excerpt}
//       </p>
//       <Link
//         href={`/blogs/${post.id}`}
//         className="inline-block w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
//       >
//         Read more <ArrowRight className="inline ml-2" />
//       </Link>
//     </div>
//   </div>
// );

// type TextParallaxContentProps = {
//   imgUrl: string;
//   subheading: string;
//   heading: string;
//   children: React.ReactNode;
// };

// const TextParallaxContent = ({
//   imgUrl,
//   subheading,
//   heading,
//   children,
// }: TextParallaxContentProps) => (
//   <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
//     <div className="relative h-[150vh]">
//       <StickyImage imgUrl={imgUrl} />
//       <OverlayCopy heading={heading} subheading={subheading} />
//     </div>
//     {children}
//   </div>
// );

// export default function BlogsPage() {
//   const { data, isLoading, isError, error } = useBlogs();
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     AOS.init({ duration: 1000, offset: 100, once: true });
//   }, []);

//   if (isLoading) return <div className="text-white p-10">Loading...</div>;
//   if (isError)
//     return (
//       <div className="text-red-500 p-10">Error: {(error as Error).message}</div>
//     );

//   const blogs = data?.blogs || [];
//   const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
//   const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
//   const currentBlogs = blogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

//   return (
//     <main className="bg-white min-h-screen pb-12">
//       {currentBlogs.map((post) => (
//         <TextParallaxContent
//           key={post.id}
//           imgUrl={
//             post.imageUrl ||
//             "https://via.placeholder.com/1920x1080?text=No+Image"
//           }
//           heading={post.title}
//           subheading={new Date(post.createdAt).toLocaleDateString()}
//         >
//           <BlogContent post={post} />
//         </TextParallaxContent>
//       ))}

//       {/* Pagination Buttons */}
//       <div className="flex justify-center gap-6 ">
//         {currentPage > 1 && (
//           <button
//             onClick={() => setCurrentPage((prev) => prev - 1)}
//             className="bg-neutral-900 text-white px-6 py-3 rounded hover:bg-neutral-700"
//           >
//             Previous Page
//           </button>
//         )}
//         {currentPage < totalPages && (
//           <button
//             onClick={() => setCurrentPage((prev) => prev + 1)}
//             className="bg-neutral-900 text-white px-6 py-3 rounded hover:bg-neutral-700"
//           >
//             Next Page
//           </button>
//         )}
//       </div>
//     </main>
//   );
// }

"use client";

import { useBlogs } from "@/lib/queries/blogs";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import MultiLayerParallax from "@/components/sections/HeroParallax";

export default function BlogsPage() {
  const { data, isLoading, isError, error } = useBlogs();
  const [page, setPage] = useState(1);
  const blogsPerPage = 10;

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, once: true });
  }, []);

  if (isLoading) return <div className="text-white p-10">Loading...</div>;
  if (isError)
    return (
      <div className="text-red-500 p-10">Error: {(error as Error).message}</div>
    );

  const blogs = data?.blogs || [];
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (page - 1) * blogsPerPage;
  const paginatedBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  return (
    <main className="min-h-screen w-full ">
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="lg:py-16 py-20 w-full bg-red-100 text-black"
      >
        <h4 className="text-primary uppercase text-base text-center font-medium tracking-wider">
          — Blogs —
        </h4>
        <div className="w-full flex flex-col items-center gap-16 px-0">
          <div className="text-center max-w-5xl mx-auto px-4">
            <h2 className="mb-3 py-4 text-3xl md:text-4xl lg:text-5xl  font-bold ">
              Blog <span className="text-primary">Posts</span>
            </h2>
            <p className=" text-muted-foreground md:text-base lg:text-lg">
              Discover the latest trends, insights, and real-world stories from
              our team.
            </p>
          </div>

          <div className="grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
            {paginatedBlogs.map((post) => (
              <Card
                key={post.id}
                className="min-h-[430px] flex flex-col justify-between overflow-hidden rounded-md border border-red-300 "
              >
                <Link
                  href={`/blogs/${post.id}`}
                  className="relative w-full h-48 block"
                >
                  {post.imageUrl ? (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="bg-gray-700 w-full h-full flex items-center justify-center text-white">
                      No Image
                    </div>
                  )}
                </Link>

                <div className="flex flex-col flex-1 justify-between px-4">
                  <CardHeader className="px-0">
                    <h3 className="text-lg font-semibold hover:underline md:text-xl text-black">
                      <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground text-primary">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </CardHeader>

                  <CardContent className="px-0 pb-4 flex-1">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>

                  <CardFooter className="px-0 pt-0">
                    <Link
                      href={`/blogs/${post.id}`}
                      className="flex items-center text-foreground hover:underline text-primary text-sm"
                    >
                      Read more
                      <ArrowRight className="ml-2 size-4 text-primary" />
                    </Link>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination Controls */}
          {blogs.length > blogsPerPage && (
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 disabled:opacity-50"
              >
                Previous
              </button>

              <span className="text-muted-foreground text-sm">
                Page {page} of {totalPages}
              </span>

              <button
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={page === totalPages}
                className="px-4 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
