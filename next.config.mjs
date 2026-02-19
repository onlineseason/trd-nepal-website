/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  compress: true,
  experimental: {
    optimizePackageImports: ["@radix-ui"],
  },
}

export default nextConfig
