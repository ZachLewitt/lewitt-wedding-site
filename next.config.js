/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    imageSizes: [64, 96, 128, 256, 384],
    deviceSizes: [1080, 1200, 1920, 2048, 3840],
  },
}

module.exports = nextConfig