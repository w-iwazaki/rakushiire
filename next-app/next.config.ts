import { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/suppliers',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.microcms-assets.io", // MicroCMSの画像ホスト
      },
      {
        protocol: "https",
        hostname: "placehold.jp",
      },
    ],
  },
};

export default nextConfig;
