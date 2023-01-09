/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcPlugins: [
      ['swc-plugin-coverage-instrument', {}]
    ]
  }
}

module.exports = nextConfig
