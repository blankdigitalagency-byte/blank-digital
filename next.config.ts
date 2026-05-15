import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/services/geo-targeting",
        destination: "/services/generative-engine-optimisation",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
