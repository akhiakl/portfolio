/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production'
const baseUrl = process.env.BASE_URL
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
  assetPrefix: prod ? baseUrl : '',
}

module.exports = nextConfig