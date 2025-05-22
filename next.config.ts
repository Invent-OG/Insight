import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "inkxnijaveazwuplldwu.supabase.co", // Supabase
      "example.com", // (Optional) if still used
      "images.pexels.com", // ✅ Pexels image domain
    ],
  },
};

export default nextConfig;
