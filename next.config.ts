import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "human.md";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: isGithubPages ? "export" : undefined,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  trailingSlash: isGithubPages ? true : undefined,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
