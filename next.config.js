/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['streamcoimg-a.akamaihd.net'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
