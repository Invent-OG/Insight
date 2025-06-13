"use client";

import { useParams } from "next/navigation";
import { useBlog } from "@/lib/queries/blogs";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogDetailPage() {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : "";

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
      {/* Top Section - Hero */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        {blog.imageUrl ? (
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.4]"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400">
            No image available
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold max-w-4xl leading-tight text-white">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          href="/blogs"
          className="text-primary hover:underline text-sm font-medium mb-8 block"
        >
          ← Back to Blogs
        </Link>

        {/* Meta Info */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-muted-foreground border-b border-white/10 pb-4">
          <p className="text-sm">
            Published on:{" "}
            <span className="text-white font-medium">
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          </p>
          <p className="text-sm">
            Category:{" "}
            <span className="text-primary font-semibold">{blog.category}</span>
          </p>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none text-gray-200 whitespace-pre-line leading-relaxed">
          {blog.content}
        </article>
      </div>
    </main>
  );
}
