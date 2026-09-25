import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  transpilePackages: ["framer-motion"],
  webpack: (config, { dev }) => {
    // Disable Webpack disk cache in development for both server and client to prevent ChunkLoadErrors and cache corruption
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
