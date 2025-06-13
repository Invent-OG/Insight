"use client";

import { useParams } from "next/navigation";
import { useBlog } from "@/lib/queries/blogs";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BlogDetailPage() {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : "";

  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  const { data, isLoading, isError, error } = useBlog(id);

  if (!id) return <div className="text-red-500">Invalid blog ID</div>;
  if (isLoading) return <div className="text-white p-10">Loading...</div>;
  if (isError)
    return (
      <div className="text-red-500 p-10">Error: {(error as Error).message}</div>
    );

  const blog = data?.blog;
  if (!blog) return <div className="text-gray-400 p-10">Blog not found</div>;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        {blog.imageUrl ? (
          <div className="absolute inset-0">
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              fill
              sizes="100vw"
              priority
              className="object-cover object-center w-full h-full brightness-[0.5]"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-gray-300">
            No image available
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent skew-y-3" />
        <div className="absolute inset-0 flex items-end justify-center text-center px-4 pb-10">
          <h1
            className="text-3xl md:text-5xl font-bold max-w-4xl text-white drop-shadow-xl"
            data-aos="fade-up"
          >
            {blog.title}
          </h1>
        </div>
      </section>

      {/* Blog Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 border border-red-700 text-white text-sm rounded-md hover:bg-red-700 transition mb-8"
          data-aos="fade-right"
        >
          ← Back to Blogs
        </Link>

        {/* Meta Info */}
        <div
          className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-4 text-sm text-gray-400"
          data-aos="fade-up"
        >
          <p>
            Published on:{" "}
            <span className="text-white font-medium">
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          </p>
          <p>
            Category:{" "}
            <span className="text-red-500 font-semibold">{blog.category}</span>
          </p>
        </div>

        {/* Content */}
        <article
          className="prose prose-invert prose-lg max-w-none text-gray-200 whitespace-pre-line"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {blog.content}
        </article>
      </div>
    </main>
  );
}
