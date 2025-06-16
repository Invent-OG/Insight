// "use client";

// import { useBlogs } from "@/lib/queries/blogs";
// import { ArrowRight } from "lucide-react";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import Link from "next/link";

// export default function BlogsPage() {
//   const { data, isLoading, isError, error } = useBlogs();

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       offset: 100,
//       once: true,
//     });
//   }, []);

//   if (isLoading) return <div className="text-white p-10">Loading...</div>;
//   if (isError)
//     return (
//       <div className="text-red-500 p-10">Error: {(error as Error).message}</div>
//     );

//   const blogs =
//     data?.blogs
//       ?.sort(
//         (a, b) =>
//           new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//       )
//       .slice(0, 3) || [];

//   return (
//     <main className="min-h-screen w-full bg-black text-white">
//       <section
//         data-aos="fade-up"
//         data-aos-anchor-placement="top-center"
//         className="py-16 w-full bg-gradient-to-r from-black to-primary/40 text-white"
//       >
//         <h4 className="text-primary text-center uppercase text-base font-medium tracking-wider">
//           — Services —
//         </h4>
//         <div className="w-full flex flex-col items-center gap-16 px-0">
//           <div className="text-center max-w-5xl mx-auto px-4">
//             <h2 className=" text-3xl md:text-4xl lg:text-5xl py-6 font-semibold">
//               Latest <span className="text-primary">Blog</span> Posts
//             </h2>
//             <p className="mb-4 text-muted-foreground md:text-base lg:text-lg">
//               Stay updated with trends, stories, and insights.
//             </p>
//             <Button variant="link" asChild className="text-lg font-semibold">
//               <Link href="/blogs">
//                 Explore All Blogs
//                 <ArrowRight className="ml-2 size-4" />
//               </Link>
//             </Button>
//           </div>

//           <div className="grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
//             {blogs.map((post) => (
//               <Card
//                 key={post.id}
//                 className="flex flex-col h-[450px] bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg"
//               >
//                 {/* Image */}
//                 <Link
//                   href={`/blogs/${post.id}`}
//                   className="relative w-full aspect-[16/9]"
//                 >
//                   {post.imageUrl ? (
//                     <img
//                       src={post.imageUrl}
//                       alt={post.title}
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <div className="bg-gray-700 w-full h-full flex items-center justify-center text-white">
//                       No Image
//                     </div>
//                   )}
//                 </Link>

//                 {/* Title + Date */}
//                 <CardHeader className="flex flex-col gap-1 px-4 pt-4 pb-2">
//                   <h3 className="text-lg font-semibold hover:underline  line-clamp-2">
//                     <Link href={`/blogs/${post.id}`}>{post.title}</Link>
//                   </h3>
//                   <p className="text-sm text-red-600 text-muted-foreground">
//                     {new Date(post.createdAt).toLocaleDateString()}
//                   </p>
//                 </CardHeader>

//                 {/* Description */}
//                 <CardContent className="px-4 pb-2">
//                   <p className="text-muted-foreground text-sm line-clamp-3">
//                     {post.excerpt}
//                   </p>
//                 </CardContent>

//                 {/* Spacer + Read More */}
//                 <div className="flex-grow" />
//                 <CardFooter className="px-4 pb-4">
//                   <Link
//                     href={`/blogs/${post.id}`}
//                     className="flex items-center text-primary hover:underline text-sm font-medium"
//                   >
//                     Read more
//                     <ArrowRight className="ml-2 size-4" />
//                   </Link>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
"use client";

import { useBlogs } from "@/lib/queries/blogs";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

export default function BlogsPage() {
  const { data, isLoading, isError, error } = useBlogs();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  if (isLoading) return <div className="text-white p-10">Loading...</div>;
  if (isError)
    return (
      <div className="text-red-500 p-10">Error: {(error as Error).message}</div>
    );

  const blogs =
    data?.blogs
      ?.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, 3) || [];

  return (
    <main className="min-h-screen w-full text-black">
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="py-16 bg-red-50  "
      >
        <h4 className="text-primary text-center uppercase text-base font-medium tracking-wider">
          — Services —
        </h4>
        <div className="w-full flex flex-col items-center gap-16 px-0">
          <div className="text-center max-w-5xl mx-auto px-4">
            <h2 className=" text-3xl md:text-4xl lg:text-5xl py-6 font-semibold">
              Latest <span className="text-primary">Blog</span> Posts
            </h2>
            <p className="mb-4 text-muted-foreground md:text-base lg:text-lg">
              Stay updated with trends, stories, and insights.
            </p>
            <Button variant="link" asChild className="text-lg font-semibold">
              <Link href="/blogs">
                Explore All Blogs
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
            {blogs.map((post) => (
              <Card
                key={post.id}
                className="flex flex-col h-[450px] bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg"
              >
                {/* Image */}
                <Link
                  href={`/blogs/${post.id}`}
                  className="relative w-full aspect-[16/9]"
                >
                  {post.imageUrl ? (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-700 w-full h-full flex items-center justify-center text-white">
                      No Image
                    </div>
                  )}
                </Link>

                {/* Title + Date */}
                <CardHeader className="flex flex-col gap-1 px-4 pt-4 pb-2">
                  <h3 className="text-lg font-semibold hover:underline  line-clamp-2">
                    <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-red-600 text-muted-foreground">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </CardHeader>

                {/* Description */}
                <CardContent className="px-4 pb-2">
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>

                {/* Spacer + Read More */}
                <div className="flex-grow" />
                <CardFooter className="px-4 pb-4">
                  <Link
                    href={`/blogs/${post.id}`}
                    className="flex items-center text-primary hover:underline text-sm font-medium"
                  >
                    Read more
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
