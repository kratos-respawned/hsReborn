/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.dicebear.com", "raw.githubusercontent.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
