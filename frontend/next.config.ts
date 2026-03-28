/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Skip generating specific pages that cause issues
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig