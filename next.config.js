/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
    typescript: {
    ignoreBuildErrors: true, // ✅ This disables type checking during build
  },
  
  images: {
      remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    domains: [
      'images.pexels.com', 
      'images.unsplash.com', 
      'assets.aceternity.com', 
      'turbifycdn.com', 
      'avatars.githubusercontent.com',
      'wallpapers.com'
    ],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
