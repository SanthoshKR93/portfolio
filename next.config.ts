import type { NextConfig } from "next";

const repoName = "portfolio"; // GitHub repo name

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/i,
      type: 'asset/resource'
    });
    return config;
  }
};

export default nextConfig;
