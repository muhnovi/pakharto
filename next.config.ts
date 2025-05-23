import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.app.goo.gl",
      }
    ],
  },
  };
export default nextConfig;
