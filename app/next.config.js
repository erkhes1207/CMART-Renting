/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: [
      "assets.stickpng.com",
      "a0.muscache.com",
      "images.pexels.com",
      "upload.wikimedia.org",
      "i.imgur.com",
    ],
  },
};
