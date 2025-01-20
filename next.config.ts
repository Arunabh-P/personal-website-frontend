import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const config: import('next').NextConfig = {
  distDir: 'build',
  compress: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dku0lexry/**',
      },
    ],
  },
};

module.exports = withNextIntl(config);
