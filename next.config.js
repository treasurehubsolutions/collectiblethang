/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ebayimg.com', pathname: '**' },
      { protocol: 'https', hostname: '*.ebayimg.com', pathname: '**' },
      { protocol: 'https', hostname: 'eptnfpvwfxloimmbzxcl.supabase.co', pathname: '**' },
    ],
    unoptimized: true,
  }
}
module.exports = nextConfig
