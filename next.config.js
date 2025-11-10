/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  reactStrictMode: true,

  // Allow production builds to complete even with ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
