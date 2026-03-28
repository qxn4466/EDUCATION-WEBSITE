/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This creates the 'out' folder for static files
  images: {
    unoptimized: true,  // Required for static export
  },
}

module.exports = nextConfig
