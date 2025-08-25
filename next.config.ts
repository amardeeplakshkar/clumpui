import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    registry: ["./registry/**/*"],
  },
  images: {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
    minimumCacheTTL: 2678400,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
