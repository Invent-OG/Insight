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
import Image from "next/image";

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

  const blogs = data?.blogs || [];

  return (
    <main className="min-h-screen w-full bg-black text-white">
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="py-16 w-full bg-gradient-to-r from-black to-primary/40 text-white"
      >
        <div className="w-full flex flex-col items-center gap-16 px-0">
          <div className="text-center max-w-5xl mx-auto px-4">
            <h2 className="mb-3 text-3xl font-semibold md:text-4xl lg:text-5xl">
              Blog Posts
            </h2>
            <p className="mb-8 text-muted-foreground md:text-base lg:text-lg">
              Discover the latest trends, insights, and real-world stories from
              our team.
            </p>
          </div>

          <div className="grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
            {blogs.map((post) => {
              console.log("Blog Image URL:", post.imageUrl);
              return (
                <Card
                  key={post.id}
                  className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden rounded-md min-h-[420px] bg-white/5"
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

                  <CardHeader>
                    <h3 className="text-lg font-semibold hover:underline md:text-xl">
                      <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={`/blogs/${post.id}`}
                      className="flex items-center text-foreground hover:underline text-primary"
                    >
                      Read more
                      <ArrowRight className="ml-2 size-4 text-white" />
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
