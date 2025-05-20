import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "inkxnijaveazwuplldwu.supabase.co",
      "example.com",
      "images.pexels.com", // ✅ Add this line
    ],
  },
};

export default nextConfig;
