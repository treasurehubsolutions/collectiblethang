/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'collectiblethang.vercel.app' }],
        destination: 'https://theshelfcartel.com/:path*',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
