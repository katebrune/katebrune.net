/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@katebrune/ui'],
  eslint: {
    ignoreDuringBuilds: true,
  },
}
