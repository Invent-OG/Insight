'use client';

import { useBlogs } from '@/lib/queries/blogs';
import { ArrowRight, RefreshCcw, Search } from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
export default function BlogsPage() {
  const { data, isLoading, isError, error } = useBlogs();
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
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
          excerpt: 'Loading excerpt...',
          imageUrl: 'https://via.placeholder.com/400x300.png?text=Loading...',
          createdAt: new Date().toISOString(),
          category: 'Placeholder',
        }));

  const featuredBlog = featuredBlogs[activeBlogIndex];
  const categories = Array.from(new Set(actualBlogs.map((blog) => blog.category)));

  const filteredBlogs = useMemo(() => {
    return actualBlogs.filter((blog) => {
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? blog.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [actualBlogs, searchQuery, selectedCategory]);

  const relatedArticles = useMemo(() => {
    if (!featuredBlog) return [];
    return filteredBlogs.filter((blog) => blog.id !== featuredBlog.id);
  }, [filteredBlogs, featuredBlog]);

  const totalPages = Math.ceil(relatedArticles.length / blogsPerPage);
  const startIndex = (page - 1) * blogsPerPage;
  const paginatedBlogs = relatedArticles.slice(startIndex, startIndex + blogsPerPage);
  const isSearching = searchQuery.trim() !== '';

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
      <div className='flex flex-col items-center justify-center p-20 min-h-screen space-y-3'>
        <RefreshCcw className='w-12 h-12 text-primary animate-spin' />
        <p className='text-gray-600 text-lg'>Loading latest articles...</p>
      </div>
    );
  }

  if (isError) {
    return <div className='text-red-500 p-10'>Error: {(error as Error).message}</div>;
  }

  return (
    <main className='min-h-screen w-full bg-gray-100 text-gray-800'>
      <section className='py-20'>
        <h4 className='uppercase text-base tracking-[0.20em] text-primary text-center font-bold text-shadow-sm'>
          — Blogs —
        </h4>
        <div className='max-w-7xl mx-auto flex flex-col items-center py-10 gap-12 px-4'>
          {/* Featured Blog Slider (Auto) */}
          {featuredBlog && !isSearching && (
            <div className='w-full'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={featuredBlog.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className='bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row w-full hover:shadow-2xl transition'
                >
                  <div className='md:w-1/2 w-full h-64 relative'>
                    <Image
                      src={featuredBlog.imageUrl}
                      alt={featuredBlog.title}
                      width={800}
                      height={400}
                      className='w-full h-full object-cover'
                    />
                  </div>

                  <div className='p-6 flex flex-col justify-center md:w-1/2 w-full'>
                    <h2 className='text-2xl font-bold text-gray-600 hover:text-primary transition'>
                      <Link href={`/blogs/${featuredBlog.id}`}>{featuredBlog.title}</Link>
                    </h2>
                    <p className='text-gray-500 text-sm mt-2'>
                      {new Date(featuredBlog.createdAt).toLocaleDateString()}
                    </p>
                    <p className='text-gray-600 mt-3 line-clamp-3'>{featuredBlog.excerpt}</p>
                    <Link
                      href={`/blogs/${featuredBlog.id}`}
                      className='mt-4 flex items-center text-primary font-semibold hover:underline'
                    >
                      Read more <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* SEARCH */}
          <div className='w-full max-w-2xl relative'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4' />
            <input
              type='text'
              placeholder='Search blogs...'
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
              className='w-full rounded-xl border border-gray-300 pl-10 pr-4 py-3 text-gray-800 focus:outline-none focus:border-primary focus:ring-1 focus:ring-red-600'
            />
          </div>

          {/* CATEGORY BUTTONS */}
          {categories.length > 0 && (
            <div className='flex flex-wrap justify-center gap-3 mt-6'>
              <CategoryButton
                label='All'
                count={actualBlogs.length}
                isActive={selectedCategory === null}
                onClick={() => {
                  setSelectedCategory(null);
                  setPage(1);
                }}
              />
              {(showAllCategories ? categories : categories.slice(0, 10)).map((category) => {
                const categoryCount = actualBlogs.filter((b) => b.category === category).length;
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
              })}
              {categories.length > 7 && !showAllCategories && (
                <button
                  onClick={() => setShowAllCategories(true)}
                  className='bg-gray-200 text-gray-600 rounded-full px-4 py-2 text-sm font-medium hover:border-red-600 hover:text-red-600'
                >
                  +More
                </button>
              )}
            </div>
          )}

          {/* SEARCH RESULTS */}
          {isSearching && (
            <BlogGrid posts={filteredBlogs} actualBlogs={actualBlogs} searchQuery={searchQuery} />
          )}

          {/* SUGGESTED ARTICLES (STATIC) */}
          {!isSearching && relatedArticles.length > 0 && (
            <>
              <h3 className='text-2xl font-bold'>Suggested Articles</h3>
              <BlogGrid posts={paginatedBlogs} actualBlogs={actualBlogs} />
              {relatedArticles.length > blogsPerPage && (
                <div className='flex items-center justify-center gap-4 mt-8'>
                  <PaginationButton
                    disabled={page === 1}
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  >
                    Previous
                  </PaginationButton>
                  <span className='text-gray-500 text-sm'>
                    Page {page} of {totalPages}
                  </span>
                  <PaginationButton
                    disabled={page === totalPages}
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
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
            ? 'bg-red-100 text-red-600 border-red-600'
            : 'bg-white text-gray-600 hover:border-red-600 hover:text-red-600'
        }`}
    >
      <span>{label}</span>
      <span
        className={`text-xs rounded-full px-2 ${
          isActive ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'
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
    <div className='grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 mt-10'>
      {posts.length > 0 ? (
        posts.map((post: any) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.03 }}
            className='min-h-[430px] flex flex-col justify-between rounded-2xl overflow-hidden border border-gray-300 bg-white hover:shadow-lg transition'
          >
            <Link
              href={actualBlogs.length > 0 ? `/blogs/${post.id}` : '#'}
              className='relative w-full h-48 block'
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={400}
                height={300}
                className='w-full h-full object-cover object-center'
              />
            </Link>
            <div className='flex flex-col flex-1 justify-between p-4'>
              <div>
                <h3 className='text-lg font-bold text-gray-800 hover:underline'>
                  <Link href={actualBlogs.length > 0 ? `/blogs/${post.id}` : '#'}>
                    {post.title}
                  </Link>
                </h3>
                <p className='text-sm text-gray-500 mt-1'>
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
              <p className='text-gray-600 text-sm line-clamp-3 mt-2'>{post.excerpt}</p>
              <Link
                href={actualBlogs.length > 0 ? `/blogs/${post.id}` : '#'}
                className='flex items-center text-red-600 hover:underline text-sm mt-3 font-medium'
              >
                Read more
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </div>
          </motion.div>
        ))
      ) : (
        <div className='text-gray-600 p-10 text-center w-full'>
          No results found for "<span className='font-bold'>{searchQuery}</span>"
        </div>
      )}
    </div>
  );
}

// Pagination Button
function PaginationButton({ disabled, onClick, children }: any) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg font-medium ${
        disabled ? 'bg-gray-300 text-gray-500' : 'bg-gray-800 text-white hover:bg-gray-900'
      }`}
    >
      {children}
    </Button>
  );
}
