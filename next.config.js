/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
  // Add these to help with build
  swcMinify: true,
  output: 'standalone',
  // Disable turbopack for now
  experimental: {
    turbo: {
      enabled: false,
    },
  },
};

module.exports = nextConfig;