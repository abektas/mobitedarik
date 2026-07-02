import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Dynamic routes require server mode
  // output: "export",
};

export default nextConfig;
