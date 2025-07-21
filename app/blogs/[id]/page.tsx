'use client';

import { useParams } from 'next/navigation';
import { useBlog, useBlogs } from '@/lib/queries/blogs';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';

export default function BlogDetailPage() {
  const params = useParams();
  const id = typeof params?.id === 'string' ? params.id : '';

  const [scrollY, setScrollY] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 700 });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { data: blogData, isLoading, isError, error } = useBlog(id);
  const { data: blogsData } = useBlogs();

  if (!id) return <div className='text-red-500'>Invalid blog ID</div>;

  if (isLoading) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen space-y-3'>
        <RefreshCcw className='w-12 h-12 text-red-600 animate-spin' />
        <p className='text-gray-600 text-lg'>Loading latest articles...</p>
      </div>
    );
  }

  if (isError) return <div className='text-red-500 p-10'>Error: {(error as Error).message}</div>;

  const blog = blogData?.blog;
  if (!blog) return <div className='text-gray-600 p-10'>Blog not found</div>;

  // Related blogs excluding the current one
  const relatedBlogs = blogsData?.blogs?.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <main className='bg-[#fefefe] min-h-screen text-black'>
      {/* Banner with Image & Text Parallax */}
      <div className='relative h-[100vh] bg-black text-white overflow-hidden' ref={bannerRef}>
        {/* Parallax Image */}
        <div
          className='absolute inset-0 will-change-transform'
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            fill
            className='object-cover opacity-40'
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 to-transparent' />

        {/* Parallax Text */}
        <div
          className='relative z-10 flex items-center justify-center h-full px-4'
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <h1
            className='text-3xl md:text-5xl font-bold text-center drop-shadow-lg'
            data-aos='fade-up'
          >
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Blog Layout */}
      <div className='relative w-full'>
        {/* Background Layer */}
        <div
          className='absolute inset-0 z-0'
          style={{
            backgroundImage: "url('/assets/bgblogtexture.avif')",
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            opacity: 0.2,
          }}
        />

        <div className='relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4 py-16'>
          {/* Blog Content */}
          <article className='col-span-1 md:col-span-3 order-2 md:order-1' data-aos='fade-up'>
            <div
              className='prose prose-lg md:prose-xl max-w-none prose-neutral prose-headings:text-black prose-p:text-gray-800 prose-a:text-red-600 prose-a:underline prose-img:rounded-lg prose-blockquote:border-l-4 prose-blockquote:border-red-500 prose-blockquote:pl-4 prose-blockquote:italic whitespace-pre-line'
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>

          {/* Sidebar */}
          <aside className='col-span-1 order-1 md:order-2' data-aos='fade-left'>
            {/* Back to Blogs Button (top position) */}
            <Link
              href='/blogs'
              className='inline-block mb-6 relative text-sm font-semibold text-primary dark:text-primary border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md group transition-all duration-300'
            >
              <span className='flex items-center gap-1'>
                <span className='relative z-10 group-hover:-translate-x-1 transition-transform duration-300'>
                  ←
                </span>
                <span className='relative z-10 group-hover:translate-x-1 transition-transform duration-300'>
                  Back to Blogs
                </span>
              </span>
              {/* Optional subtle background effect on hover */}
              <span className='absolute inset-0 bg-gray-100/40 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-md z-0' />
            </Link>

            {/* Sticky Blog Metadata */}
            <div className='sticky top-20 space-y-4 text-sm text-gray-600'>
              <p>
                <strong>Published:</strong>
                <br />
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
              <p>
                <strong>Category:</strong>
                <br />
                <span className='text-red-600 font-semibold'>{blog.category}</span>
              </p>
            </div>
          </aside>
        </div>

        {/* Footer CTA */}
        <div className='relative z-10 py-10 text-center'>
          <h3 className='text-xl font-semibold mb-4' data-aos='fade-up'>
            Enjoyed this post?
          </h3>

          <Link href='/contact'>
            <Button
              asChild
              className='px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <span>Get in Touch</span>
            </Button>
          </Link>
        </div>

        {/* Inspiration Banner */}
        <div className='relative z-10 bg-red-50 py-12 px-6 text-center' data-aos='zoom-in'>
          <blockquote className='text-xl italic text-red-700 max-w-3xl mx-auto'>
            “Knowledge is power, but enthusiasm pulls the switch.”
          </blockquote>
        </div>
        {/* Related Articles */}
        {(relatedBlogs ?? []).length > 0 && (
          <div className='relative z-10 max-w-6xl mx-auto px-4 py-12' data-aos='fade-up'>
            <h3 className='text-2xl font-bold text-center mb-6 text-gray-900'>
              You might also like
            </h3>

            <div className='grid md:grid-cols-3 gap-6'>
              {(relatedBlogs ?? []).map((item) => (
                <Link href={`/blogs/${item.id}`} key={item.id}>
                  <div className='relative group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition duration-300'>
                    {/* Image with Hover Overlay */}
                    <div className='relative h-48 w-full overflow-hidden'>
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                      />

                      {/* Read More Button on Hover */}
                      <div className='absolute bottom-4 left-0 right-0 flex justify-center'>
                        <div className='opacity-0 group-hover:opacity-100 transition duration-500'>
                          <span className='relative inline-block text-sm font-semibold text-black/90 dark:text-white px-5 py-2 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md shadow-md transition-colors duration-300 group-hover:bg-white group-hover:text-black'>
                            Read More →{/* Animated Underline */}
                            <span className='absolute left-1/2 bottom-1 transform -translate-x-1/2 w-0 h-[2px] bg-black dark:bg-white transition-all duration-500 group-hover:w-4/5'></span>
                          </span>
                        </div>
                      </div>

                      {/* Floating Category Tag */}
                      <div className='absolute top-4 left-4 bg-red-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow'>
                        {item.category}
                      </div>
                    </div>

                    {/* Blog Content */}
                    <div className='p-4'>
                      <h4 className='text-lg font-bold text-gray-800 mb-1 group-hover:text-red-600 transition'>
                        {item.title}
                      </h4>
                      <p className='text-sm text-gray-600 line-clamp-3'>
                        {item.excerpt || 'Continue reading to explore more...'}
                      </p>
                      <div className='text-xs text-gray-500 mt-3'>
                        {new Date(item.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
