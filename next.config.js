/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'utopia-image-storage.s3.ap-southeast-1.amazonaws.com',
      'i.dummyjson.com',
    ],
  },
};

module.exports = nextConfig;
