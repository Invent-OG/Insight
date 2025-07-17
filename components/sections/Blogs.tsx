'use client';

import { useBlogs } from '@/lib/queries/blogs';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

export default function BlogsPage() {
  const { data, isLoading, isError, error } = useBlogs();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  if (isLoading) return <div className='text-white p-10'>Loading...</div>;
  if (isError) return <div className='text-red-500 p-10'>Error: {(error as Error).message}</div>;

  const blogs =
    data?.blogs
      ?.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 3) || [];

  return (
    <main className='w-full text-black'>
      <section
        data-aos='fade-up'
        data-aos-anchor-placement='top-center'
        className='lg:py-10 py-10 bg-gray-100'
      >
        <h4 className='uppercase text-sm lg:text-base tracking-[0.20em] text-primary text-center font-bold text-shadow-sm'>
          — Blogs —
        </h4>

        <div className='w-full flex flex-col items-center gap-16 px-0'>
          {/* Section Heading */}
          <div className='text-center max-w-5xl mx-auto px-4'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl py-6 font-bold'>
              Latest <span className='text-primary'>Blog</span> Posts
            </h2>
            <p className='mb-4 text-gray-600 font-semibold md:text-base lg:text-lg'>
              Stay updated with trends, stories, and insights.
            </p>
            <Button
              variant='link'
              asChild
              className='text-lg font-semibold text-primary hover:text-red-700'
            >
              <Link href='/blogs'>
                Explore All Blogs
                <ArrowRight className='ml-2 size-4' />
              </Link>
            </Button>
          </div>

          {/* Blog Cards */}
          <div className='grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4'>
            {blogs.map((post) => (
              <Card
                key={post.id}
                className='flex flex-col h-full bg-white text-gray-800 rounded-lg overflow-hidden shadow-lg'
              >
                {/* Image */}
                <Link href={`/blogs/${post.id}`} className='relative w-full aspect-[16/9]'>
                  {post.imageUrl ? (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className='w-full h-full object-cover'
                    />
                  ) : (
                    <div className='bg-gray-700 w-full h-full flex items-center justify-center text-white'>
                      No Image
                    </div>
                  )}
                </Link>

                {/* Card Content Wrapper */}
                <div className='flex flex-col justify-between flex-1'>
                  {/* Title + Date */}
                  <CardHeader className='flex flex-col gap-1 px-4 pt-4 pb-2'>
                    <h3 className='text-lg font-semibold hover:underline line-clamp-2'>
                      <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className='text-sm text-primary'>
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </CardHeader>

                  {/* Description */}
                  <CardContent className='px-4 pb-2'>
                    <p className='text-gray-600 text-sm line-clamp-3'>{post.excerpt}</p>
                  </CardContent>

                  {/* Read More */}
                  <CardFooter className='px-4 pb-4 mt-auto'>
                    <Link
                      href={`/blogs/${post.id}`}
                      className='flex items-center text-primary hover:underline text-sm font-medium'
                    >
                      Read more
                      <ArrowRight className='ml-2 size-4' />
                    </Link>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
