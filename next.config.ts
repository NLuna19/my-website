import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/my-website',
  assetPrefix: '/my-website/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
