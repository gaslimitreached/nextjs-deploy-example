const { join } = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: join(__dirname, '../../')
  },
  cleanDistDir: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: '**.unsplash.com'
      }
    ]
  }
}

module.exports = nextConfig
