/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    bundleAnalyzerEnabled: process.env.ANALYZE === "true",
  },
};

module.exports = nextConfig;
