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
  // REMOVE these invalid keys:
  // swcMinify: true,  <- Remove this
  // experimental: {   <- Remove this entire block
  //   turbo: {
  //     enabled: false,
  //   },
  // },
};

module.exports = nextConfig;