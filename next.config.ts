import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/tenant/localhost",
        has: [
          {
            type: "host",
            value: "localhost:3000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
