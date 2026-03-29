/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,   // ✅ THIS FIXES YOUR ISSUE
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig;