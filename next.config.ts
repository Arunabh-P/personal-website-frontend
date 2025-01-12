import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const config: import('next').NextConfig = {
  distDir: 'build',
  compress: false,
  reactStrictMode: true,
};

module.exports = withNextIntl(config);
