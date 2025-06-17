// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       // Blog images (stored in either location)
//       {
//         protocol: "https",
//         hostname: "inkxnijaveazwuplldwu.supabase.co",
//         pathname: "/storage/v1/object/public/images/blogs/**", // ✅ Preferred path
//       },
//       {
//         protocol: "https",
//         hostname: "inkxnijaveazwuplldwu.supabase.co",
//         pathname: "/storage/v1/object/public/blogs/**", // ✅ If you previously uploaded here
//       },
//       // Testimonial images
//       {
//         protocol: "https",
//         hostname: "inkxnijaveazwuplldwu.supabase.co",
//         pathname: "/storage/v1/object/public/images/testimonials/**",
//       },
//       // Other external sources
//       {
//         protocol: "https",
//         hostname: "example.com",
//       },
//       {
//         protocol: "https",
//         hostname: "images.pexels.com",
//       },
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "plus.unsplash.com",
//       },
//     ],
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Blog images (stored in either location)
      {
        protocol: "https",
        hostname: "inkxnijaveazwuplldwu.supabase.co",
        pathname: "/storage/v1/object/public/images/blogs/**", // ✅ Preferred path
      },
      {
        protocol: "https",
        hostname: "inkxnijaveazwuplldwu.supabase.co",
        pathname: "/storage/v1/object/public/blogs/**", // ✅ If you previously uploaded here
      },
      // Testimonial images
      {
        protocol: "https",
        hostname: "inkxnijaveazwuplldwu.supabase.co",
        pathname: "/storage/v1/object/public/images/testimonials/**",
      },
      // Other external sources
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
