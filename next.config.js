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
      { source: '/shipping', destination: '/livraison', permanent: true },
      { source: '/shipping-policy', destination: '/livraison', permanent: true },
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
    ]
  },
}
module.exports = nextConfig
