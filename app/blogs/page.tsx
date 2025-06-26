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
// import MultiLayerParallax from "@/components/sections/HeroParallax";

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
//     <main className="min-h-screen w-full ">
//       <section
//         data-aos="fade-up"
//         data-aos-anchor-placement="top-center"
//         className="lg:py-16 py-20 w-full bg-red-100 text-black"
//       >
//         <h4 className="text-primary uppercase text-base text-center font-medium tracking-wider">
//           — Blogs —
//         </h4>
//         <div className="w-full flex flex-col items-center gap-16 px-0">
//           <div className="text-center max-w-5xl mx-auto px-4">
//             <h2 className="mb-3 py-4 text-3xl md:text-4xl lg:text-5xl  font-bold ">
//               Blog <span className="text-primary">Posts</span>
//             </h2>
//             <p className=" text-muted-foreground md:text-base lg:text-lg">
//               Discover the latest trends, insights, and real-world stories from
//               our team.
//             </p>
//           </div>

//           <div className="grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
//             {paginatedBlogs.map((post) => (
//               <Card
//                 key={post.id}
//                 className="min-h-[430px] flex flex-col justify-between overflow-hidden rounded-md border border-red-300 "
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
//                     <h3 className="text-lg font-semibold hover:underline md:text-xl text-black">
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
//                       <ArrowRight className="ml-2 size-4 text-primary" />
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
// import { ArrowRight, RefreshCcw } from "lucide-react"; // fixed icon import
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
// import MultiLayerParallax from "@/components/sections/HeroParallax";

// export default function BlogsPage() {
//   const { data, isLoading, isError, error } = useBlogs();
//   const [page, setPage] = useState(1);
//   const blogsPerPage = 10;

//   useEffect(() => {
//     AOS.init({ duration: 1000, offset: 100, once: true });
//   }, []);

//   // Fallback Blogs
//   const fallbackBlogs = [
//     {
//       id: "default-1",
//       title: "Placeholder Blog 1",
//       excerpt:
//         "This is a temporary placeholder excerpt. Actual data will load shortly.",
//       imageUrl: "https://via.placeholder.com/400x300.png?text=Loading...",
//       createdAt: new Date().toISOString(),
//     },
//     {
//       id: "default-2",
//       title: "Placeholder Blog 2",
//       excerpt:
//         "This is a temporary placeholder excerpt. Actual data will load shortly.",
//       imageUrl: "https://via.placeholder.com/400x300.png?text=Loading...",
//       createdAt: new Date().toISOString(),
//     },
//     {
//       id: "default-3",
//       title: "Placeholder Blog 3",
//       excerpt:
//         "This is a temporary placeholder excerpt. Actual data will load shortly.",
//       imageUrl: "https://via.placeholder.com/400x300.png?text=Loading...",
//       createdAt: new Date().toISOString(),
//     },
//   ];

//   // Actual and Fallback Logic
//   const actualBlogs = data?.blogs || [];
//   const blogs = actualBlogs.length > 0 ? actualBlogs : fallbackBlogs;

//   const totalPages = Math.ceil(actualBlogs.length / blogsPerPage);
//   const startIndex = (page - 1) * blogsPerPage;
//   const paginatedBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

//   if (isLoading && actualBlogs.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center p-20 min-h-screen  space-y-3">
//         <RefreshCcw className="w-12 h-12 text-red-600 animate-spin" />
//         <p className="text-gray-600 text-lg">Loading latest articles...</p>
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="text-red-500 p-10">Error: {(error as Error).message}</div>
//     );
//   }

//   return (
//     <main className="min-h-screen w-full">
//       <section
//         data-aos="fade-up"
//         data-aos-anchor-placement="top-center"
//         className="lg:py-16 py-20 w-full bg-red-100 text-black"
//       >
//         <h4 className="text-primary uppercase text-base text-center font-medium tracking-wider">
//           — Blogs —
//         </h4>
//         <div className="w-full flex flex-col items-center gap-16 px-0">
//           <div className="text-center max-w-5xl mx-auto px-4">
//             <h2 className="mb-3 py-4 text-3xl md:text-4xl lg:text-5xl font-bold">
//               Blog <span className="text-primary">Posts</span>
//             </h2>
//             <p className="text-muted-foreground md:text-base lg:text-lg">
//               Discover the latest trends, insights, and real-world stories from
//               our team.
//             </p>
//           </div>

//           <div className="grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
//             {paginatedBlogs.map((post) => (
//               <Card
//                 key={post.id}
//                 className="min-h-[430px] flex flex-col justify-between overflow-hidden rounded-md border border-red-300"
//               >
//                 <Link
//                   href={actualBlogs.length > 0 ? `/blogs/${post.id}` : "#"}
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
//                     <h3 className="text-lg font-semibold hover:underline md:text-xl text-black">
//                       <Link
//                         href={
//                           actualBlogs.length > 0 ? `/blogs/${post.id}` : "#"
//                         }
//                       >
//                         {post.title}
//                       </Link>
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
//                       href={actualBlogs.length > 0 ? `/blogs/${post.id}` : "#"}
//                       className="flex items-center text-foreground hover:underline text-primary text-sm"
//                     >
//                       Read more
//                       <ArrowRight className="ml-2 size-4 text-primary" />
//                     </Link>
//                   </CardFooter>
//                 </div>
//               </Card>
//             ))}
//           </div>

//           {/* Pagination Controls (Only when actual data has blogs) */}
//           {actualBlogs.length > 0 && actualBlogs.length > blogsPerPage && (
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
// import { ArrowRight, RefreshCcw, Search } from "lucide-react";
// import { useEffect, useState, useMemo } from "react";
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
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const blogsPerPage = 10;

//   useEffect(() => {
//     AOS.init({ duration: 1000, offset: 100, once: true });
//   }, []);

//   const fallbackBlogs = [
//     {
//       id: "default-1",
//       title: "Placeholder Blog 1",
//       excerpt:
//         "This is a temporary placeholder excerpt. Actual data will load shortly.",
//       imageUrl: "https://via.placeholder.com/400x300.png?text=Loading...",
//       createdAt: new Date().toISOString(),
//       category: "Placeholder",
//     },
//     {
//       id: "default-2",
//       title: "Placeholder Blog 2",
//       excerpt:
//         "This is a temporary placeholder excerpt. Actual data will load shortly.",
//       imageUrl: "https://via.placeholder.com/400x300.png?text=Loading...",
//       createdAt: new Date().toISOString(),
//       category: "Placeholder",
//     },
//     {
//       id: "default-3",
//       title: "Placeholder Blog 3",
//       excerpt:
//         "This is a temporary placeholder excerpt. Actual data will load shortly.",
//       imageUrl: "https://via.placeholder.com/400x300.png?text=Loading...",
//       createdAt: new Date().toISOString(),
//       category: "Placeholder",
//     },
//   ];

//   const actualBlogs = data?.blogs || [];
//   const blogs = actualBlogs.length > 0 ? actualBlogs : fallbackBlogs;

//   // Categories
//   const categories = Array.from(
//     new Set(actualBlogs.map((blog) => blog.category))
//   );

//   // SEARCH + CATEGORY FILTER
//   const filteredBlogs = useMemo(() => {
//     return blogs.filter((blog) => {
//       const matchesSearch = blog.title
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase());
//       const matchesCategory = selectedCategory
//         ? blog.category === selectedCategory
//         : true;

//       return matchesSearch && matchesCategory;
//     });
//   }, [blogs, searchQuery, selectedCategory]);

//   const featuredBlog = actualBlogs.length > 0 ? actualBlogs[0] : null;

//   // Suggested / Related
//   const relatedArticles = useMemo(() => {
//     if (!featuredBlog) return [];
//     return filteredBlogs.filter((blog) => blog.id !== featuredBlog.id);
//   }, [filteredBlogs, featuredBlog]);

//   // Pagination
//   const totalPages = Math.ceil(relatedArticles.length / blogsPerPage);
//   const startIndex = (page - 1) * blogsPerPage;
//   const paginatedBlogs = relatedArticles.slice(
//     startIndex,
//     startIndex + blogsPerPage
//   );

//   const isSearching = searchQuery.trim() !== "";

//   if (isLoading && actualBlogs.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center p-20 min-h-screen space-y-3">
//         <RefreshCcw className="w-12 h-12 text-red-600 animate-spin" />
//         <p className="text-gray-600 text-lg">Loading latest articles...</p>
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="text-red-500 p-10">Error: {(error as Error).message}</div>
//     );
//   }

//   // Social Links
//   const encodeURL = encodeURIComponent(featuredBlog?.title || "");
//   const encodeLink = encodeURIComponent(
//     featuredBlog
//       ? `${typeof window !== "undefined" && window.location.origin}/blogs/${
//           featuredBlog.id
//         }`
//       : ""
//   );

//   return (
//     <main className="min-h-screen w-full">
//       <section
//         data-aos="fade-up"
//         data-aos-anchor-placement="top-center"
//         className="lg:py-16 py-20 w-full bg-red-100 text-black"
//       >
//         <h4 className="text-primary uppercase text-base text-center font-medium tracking-wider">
//           — Blogs —
//         </h4>
//         <div className="w-full flex flex-col items-center gap-16 px-0">
//           {/* PAGE HEADER */}
//           <div className="text-center max-w-5xl mx-auto px-4">
//             <h2 className="mb-3 py-4 text-3xl md:text-4xl lg:text-5xl font-bold">
//               Blog <span className="text-primary">Posts</span>
//             </h2>
//             <p className="text-muted-foreground md:text-base lg:text-lg">
//               Discover the latest trends, insights, and real-world stories from
//               our team.
//             </p>
//           </div>
//           {/* SEARCH BAR */}

//           <div className="w-full max-w-2xl flex justify-center px-4">
//             <div className="relative w-full">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
//               <input
//                 type="text"
//                 placeholder="Search blogs..."
//                 value={searchQuery}
//                 onChange={(e) => {
//                   setSearchQuery(e.target.value);
//                   setPage(1);
//                 }}
//                 className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 text-gray-800 focus:outline-none focus:border-red-500"
//               />
//             </div>
//           </div>
//           {/* Category Filter Buttons */}
//           {categories.length > 0 && (
//             <div className="flex flex-wrap justify-center gap-3 mt-6">
//               {/* All Button */}
//               <button
//                 onClick={() => {
//                   setSelectedCategory(null);
//                   setPage(1);
//                 }}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border-2 transition transform hover:scale-105
//         ${
//           selectedCategory === null
//             ? "bg-red-600 text-white border-red-600"
//             : "bg-white text-gray-600 hover:border-red-600 hover:text-red-600"
//         }
//       `}
//               >
//                 <span>🌍 All</span>
//                 <span
//                   className={`text-xs rounded-full px-2 ${
//                     selectedCategory === null
//                       ? "bg-white text-red-600"
//                       : "bg-gray-100 text-gray-600"
//                   }`}
//                 >
//                   {actualBlogs.length}
//                 </span>
//               </button>

//               {/* Category Buttons */}
//               {categories.map((category) => {
//                 const categoryCount = actualBlogs.filter(
//                   (b) => b.category === category
//                 ).length;

//                 return (
//                   <button
//                     key={category}
//                     onClick={() => {
//                       setSelectedCategory(category);
//                       setPage(1);
//                     }}
//                     className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border-2 transition transform hover:scale-105
//             ${
//               selectedCategory === category
//                 ? "bg-red-600 text-white border-red-600"
//                 : "bg-white text-gray-600 hover:border-red-600 hover:text-red-600"
//             }
//           `}
//                   >
//                     <span>🏷️ {category}</span>
//                     <span
//                       className={`text-xs rounded-full px-2 ${
//                         selectedCategory === category
//                           ? "bg-white text-red-600"
//                           : "bg-gray-100 text-gray-600"
//                       }`}
//                     >
//                       {categoryCount}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           )}
//           {/* SEARCH RESULTS */}
//           {isSearching && (
//             <div className="grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 mt-10">
//               {filteredBlogs.length > 0 ? (
//                 filteredBlogs.map((post) => (
//                   <Card
//                     key={post.id}
//                     className="min-h-[430px] flex flex-col justify-between overflow-hidden rounded-md border border-red-300 hover:shadow-lg hover:scale-[1.01] transition"
//                   >
//                     <Link
//                       href={actualBlogs.length > 0 ? `/blogs/${post.id}` : "#"}
//                       className="relative w-full h-48 block"
//                     >
//                       {post.imageUrl ? (
//                         <img
//                           src={post.imageUrl}
//                           alt={post.title}
//                           className="w-full h-full object-cover object-center"
//                         />
//                       ) : (
//                         <div className="bg-gray-700 w-full h-full flex items-center justify-center text-white">
//                           No Image
//                         </div>
//                       )}
//                     </Link>
//                     <div className="flex flex-col flex-1 justify-between px-4">
//                       <CardHeader className="px-0">
//                         <h3 className="text-lg font-semibold hover:underline md:text-xl text-black">
//                           <Link
//                             href={
//                               actualBlogs.length > 0 ? `/blogs/${post.id}` : "#"
//                             }
//                           >
//                             {post.title}
//                           </Link>
//                         </h3>
//                         <p className="text-sm text-muted-foreground text-primary">
//                           {new Date(post.createdAt).toLocaleDateString()}
//                         </p>
//                       </CardHeader>
//                       <CardContent className="px-0 pb-4 flex-1">
//                         <p className="text-muted-foreground text-sm line-clamp-3">
//                           {post.excerpt}
//                         </p>
//                       </CardContent>
//                       <CardFooter className="px-0 pt-0">
//                         <Link
//                           href={
//                             actualBlogs.length > 0 ? `/blogs/${post.id}` : "#"
//                           }
//                           className="flex items-center text-foreground hover:underline text-primary text-sm"
//                         >
//                           Read more
//                           <ArrowRight className="ml-2 size-4 text-primary" />
//                         </Link>
//                       </CardFooter>
//                     </div>
//                   </Card>
//                 ))
//               ) : (
//                 <div className="text-gray-600 p-10 text-center w-full">
//                   No results found for "
//                   <span className="font-bold">{searchQuery}</span>"
//                 </div>
//               )}
//             </div>
//           )}
//           {!isSearching && (
//             <>
//               {/* SUGGESTED / RELATED ARTICLES */}
//               {relatedArticles.length > 0 && (
//                 <>
//                   <h3 className="text-2xl font-bold mt-10">
//                     Suggested Articles
//                   </h3>
//                   <div className="grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
//                     {paginatedBlogs.map((post) => (
//                       <Card
//                         key={post.id}
//                         className="min-h-[430px] flex flex-col justify-between overflow-hidden rounded-md border border-red-300 hover:shadow-lg hover:scale-[1.01] transition"
//                       >
//                         <Link
//                           href={
//                             actualBlogs.length > 0 ? `/blogs/${post.id}` : "#"
//                           }
//                           className="relative w-full h-48 block"
//                         >
//                           {post.imageUrl ? (
//                             <img
//                               src={post.imageUrl}
//                               alt={post.title}
//                               className="w-full h-full object-cover object-center"
//                             />
//                           ) : (
//                             <div className="bg-gray-700 w-full h-full flex items-center justify-center text-white">
//                               No Image
//                             </div>
//                           )}
//                         </Link>
//                         <div className="flex flex-col flex-1 justify-between px-4">
//                           <CardHeader className="px-0">
//                             <h3 className="text-lg font-semibold hover:underline md:text-xl text-black">
//                               <Link
//                                 href={
//                                   actualBlogs.length > 0
//                                     ? `/blogs/${post.id}`
//                                     : "#"
//                                 }
//                               >
//                                 {post.title}
//                               </Link>
//                             </h3>
//                             <p className="text-sm text-muted-foreground text-primary">
//                               {new Date(post.createdAt).toLocaleDateString()}
//                             </p>
//                           </CardHeader>
//                           <CardContent className="px-0 pb-4 flex-1">
//                             <p className="text-muted-foreground text-sm line-clamp-3">
//                               {post.excerpt}
//                             </p>
//                           </CardContent>
//                           <CardFooter className="px-0 pt-0">
//                             <Link
//                               href={
//                                 actualBlogs.length > 0
//                                   ? `/blogs/${post.id}`
//                                   : "#"
//                               }
//                               className="flex items-center text-foreground hover:underline text-primary text-sm"
//                             >
//                               Read more
//                               <ArrowRight className="ml-2 size-4 text-primary" />
//                             </Link>
//                           </CardFooter>
//                         </div>
//                       </Card>
//                     ))}
//                   </div>

//                   {relatedArticles.length > blogsPerPage && (
//                     <div className="flex items-center gap-4 mt-8">
//                       <button
//                         onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
//                         disabled={page === 1}
//                         className="px-4 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 disabled:opacity-50"
//                       >
//                         Previous
//                       </button>
//                       <span className="text-muted-foreground text-sm">
//                         Page {page} of {totalPages}
//                       </span>
//                       <button
//                         onClick={() =>
//                           setPage((prev) => Math.min(prev + 1, totalPages))
//                         }
//                         disabled={page === totalPages}
//                         className="px-4 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 disabled:opacity-50"
//                       >
//                         Next
//                       </button>
//                     </div>
//                   )}
//                 </>
//               )}
//             </>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }
"use client";

import { useBlogs } from "@/lib/queries/blogs";
import { ArrowRight, RefreshCcw, Search } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function BlogsPage() {
  const { data, isLoading, isError, error } = useBlogs();
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeBlogIndex, setActiveBlogIndex] = useState(0);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const blogsPerPage = 10;

  const actualBlogs = data?.blogs || [];
  const featuredBlogs =
    actualBlogs.length > 0
      ? actualBlogs
      : new Array(3).fill(null).map((_, i) => ({
          id: `fallback-${i + 1}`,
          title: `Loading Blog ${i + 1}`,
          excerpt: "Loading excerpt...",
          imageUrl: "https://via.placeholder.com/400x300.png?text=Loading...",
          createdAt: new Date().toISOString(),
          category: "Placeholder",
        }));

  const featuredBlog = featuredBlogs[activeBlogIndex];
  const categories = Array.from(
    new Set(actualBlogs.map((blog) => blog.category))
  );

  const filteredBlogs = useMemo(() => {
    return actualBlogs.filter((blog) => {
      const matchesSearch = blog.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory
        ? blog.category === selectedCategory
        : true;
      return matchesSearch && matchesCategory;
    });
  }, [actualBlogs, searchQuery, selectedCategory]);

  const relatedArticles = useMemo(() => {
    if (!featuredBlog) return [];
    return filteredBlogs.filter((blog) => blog.id !== featuredBlog.id);
  }, [filteredBlogs, featuredBlog]);

  const totalPages = Math.ceil(relatedArticles.length / blogsPerPage);
  const startIndex = (page - 1) * blogsPerPage;
  const paginatedBlogs = relatedArticles.slice(
    startIndex,
    startIndex + blogsPerPage
  );
  const isSearching = searchQuery.trim() !== "";

  // Auto-slide only the featured blog
  useEffect(() => {
    if (actualBlogs.length <= 1) return;
    const interval = setInterval(() => {
      setActiveBlogIndex((prev) => (prev + 1) % actualBlogs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [actualBlogs.length]);

  if (isLoading && actualBlogs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-20 min-h-screen space-y-3">
        <RefreshCcw className="w-12 h-12 text-primary animate-spin" />
        <p className="text-gray-600 text-lg">Loading latest articles...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-500 p-10">Error: {(error as Error).message}</div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-800">
      <section className="py-16">
        <h4 className="text-primary uppercase text-base text-center mb-8 font-medium tracking-wide">
          — Blogs —
        </h4>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 px-4">
          {/* Featured Blog Slider (Auto) */}
          {featuredBlog && !isSearching && (
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredBlog.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row w-full hover:shadow-2xl transition"
                >
                  <div className="md:w-1/2 w-full h-64 relative">
                    <img
                      src={featuredBlog.imageUrl}
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center md:w-1/2 w-full">
                    <h2 className="text-2xl font-bold text-gray-600 hover:text-primary transition">
                      <Link href={`/blogs/${featuredBlog.id}`}>
                        {featuredBlog.title}
                      </Link>
                    </h2>
                    <p className="text-gray-500 text-sm mt-2">
                      {new Date(featuredBlog.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600 mt-3 line-clamp-3">
                      {featuredBlog.excerpt}
                    </p>
                    <Link
                      href={`/blogs/${featuredBlog.id}`}
                      className="mt-4 flex items-center text-primary font-semibold hover:underline"
                    >
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* SEARCH */}
          <div className="w-full max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
              className="w-full rounded-xl border border-gray-300 pl-10 pr-4 py-3 text-gray-800 focus:outline-none focus:border-primary focus:ring-1 focus:ring-red-600"
            />
          </div>

          {/* CATEGORY BUTTONS */}
          {categories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <CategoryButton
                label="All"
                count={actualBlogs.length}
                isActive={selectedCategory === null}
                onClick={() => {
                  setSelectedCategory(null);
                  setPage(1);
                }}
              />
              {(showAllCategories ? categories : categories.slice(0, 10)).map(
                (category) => {
                  const categoryCount = actualBlogs.filter(
                    (b) => b.category === category
                  ).length;
                  return (
                    <CategoryButton
                      key={category}
                      label={category}
                      count={categoryCount}
                      isActive={selectedCategory === category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setPage(1);
                      }}
                    />
                  );
                }
              )}
              {categories.length > 7 && !showAllCategories && (
                <button
                  onClick={() => setShowAllCategories(true)}
                  className="bg-gray-200 text-gray-600 rounded-full px-4 py-2 text-sm font-medium hover:border-red-600 hover:text-red-600"
                >
                  +More
                </button>
              )}
            </div>
          )}

          {/* SEARCH RESULTS */}
          {isSearching && (
            <BlogGrid
              posts={filteredBlogs}
              actualBlogs={actualBlogs}
              searchQuery={searchQuery}
            />
          )}

          {/* SUGGESTED ARTICLES (STATIC) */}
          {!isSearching && relatedArticles.length > 0 && (
            <>
              <h3 className="text-2xl font-bold">Suggested Articles</h3>
              <BlogGrid posts={paginatedBlogs} actualBlogs={actualBlogs} />
              {relatedArticles.length > blogsPerPage && (
                <div className="flex items-center justify-center gap-4 mt-8">
                  <PaginationButton
                    disabled={page === 1}
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  >
                    Previous
                  </PaginationButton>
                  <span className="text-gray-500 text-sm">
                    Page {page} of {totalPages}
                  </span>
                  <PaginationButton
                    disabled={page === totalPages}
                    onClick={() =>
                      setPage((prev) => Math.min(prev + 1, totalPages))
                    }
                  >
                    Next
                  </PaginationButton>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}

// Category Button
function CategoryButton({ label, count, isActive, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full text-sm font-medium border-2 px-4 py-2 transition transform hover:scale-105
        ${
          isActive
            ? "bg-red-100 text-red-600 border-red-600"
            : "bg-white text-gray-600 hover:border-red-600 hover:text-red-600"
        }`}
    >
      <span>{label}</span>
      <span
        className={`text-xs rounded-full px-2 ${
          isActive ? "bg-red-600 text-white" : "bg-gray-100 text-gray-600"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

// Blog Grid
function BlogGrid({ posts, actualBlogs, searchQuery }: any) {
  return (
    <div className="grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 mt-10">
      {posts.length > 0 ? (
        posts.map((post: any) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.03 }}
            className="min-h-[430px] flex flex-col justify-between rounded-2xl overflow-hidden border border-gray-300 bg-white hover:shadow-lg transition"
          >
            <Link
              href={actualBlogs.length > 0 ? `/blogs/${post.id}` : "#"}
              className="relative w-full h-48 block"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover object-center"
              />
            </Link>
            <div className="flex flex-col flex-1 justify-between p-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800 hover:underline">
                  <Link
                    href={actualBlogs.length > 0 ? `/blogs/${post.id}` : "#"}
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3 mt-2">
                {post.excerpt}
              </p>
              <Link
                href={actualBlogs.length > 0 ? `/blogs/${post.id}` : "#"}
                className="flex items-center text-red-600 hover:underline text-sm mt-3 font-medium"
              >
                Read more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))
      ) : (
        <div className="text-gray-600 p-10 text-center w-full">
          No results found for "<span className="font-bold">{searchQuery}</span>
          "
        </div>
      )}
    </div>
  );
}

// Pagination Button
function PaginationButton({ disabled, onClick, children }: any) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg font-medium ${
        disabled
          ? "bg-gray-300 text-gray-500"
          : "bg-gray-800 text-white hover:bg-gray-900"
      }`}
    >
      {children}
    </button>
  );
}

