"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface Blog7Props {
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  posts: Post[];
}

const Blog7 = ({
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development.",
  buttonText = "View all articles",
  buttonUrl = "/blogs",
  posts = [],
}: Blog7Props) => {
  return (
    <section className="py-16 w-full bg-gradient-to-r from-black to-primary/40 text-white min-h-screen">
      <div className="w-full flex flex-col items-center gap-16 px-0">
        <div className="text-center max-w-5xl mx-auto px-4">
          <h2 className="mb-3 text-3xl font-semibold md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:text-lg">
            {description}
          </p>
          <Button variant="link" asChild className="text-lg font-semibold">
            <Link href={buttonUrl}>
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
          {posts.map((post) => (
            <Card key={post.id} className="grid grid-rows-[auto_auto_1fr_auto]">
              <div className="aspect-[16/9] w-full">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center"
                  />
                </a>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/blogs"
                  className="flex items-center text-foreground hover:underline text-primary"
                >
                  Read more
                  <ArrowRight className="ml-2 size-4 text-white" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const demoData: Blog7Props = {
  heading: "Blog Posts",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  buttonText: "Explore all posts",
  buttonUrl: "/blogs",
  posts: [
    {
      id: "post-1",
      title: "Build websites in minutes with shadcn/ui",
      summary:
        "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
      label: "Ut varius dolor turpis",
      author: "Jane Doe",
      published: "1 Jan 2024",
      url: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      image:
        "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "post-2",
      title: "Easily copy code to build your website",
      summary:
        "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
      label: "Ut varius dolor turpis",
      author: "Jane Doe",
      published: "1 Jan 2024",
      url: "https://www.shadcnblocks.com",
      image: "/assets/country/europe.jpg",
    },
    {
      id: "post-3",
      title: "The future of web design",
      summary:
        "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
      label: "Ut varius dolor turpis",
      author: "Jane Doe",
      published: "1 Jan 2024",
      url: "https://www.shadcnblocks.com",
      image: "/assets/country/japan.png",
    },
  ],
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen w-full bg-black">
      <section className="w-full bg-black text-white">
        <div className="w-full">
          <Blog7 {...demoData} />
        </div>
      </section>
    </main>
  );
}
