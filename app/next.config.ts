import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    domains: ["cdn.sanity.io"],
    formats: ["image/avif", "image/webp"],
  },
  trailingSlash: false, 
};

export default nextConfig;
