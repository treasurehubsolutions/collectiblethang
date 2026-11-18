/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
        ],
      },
    ]
  },
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
