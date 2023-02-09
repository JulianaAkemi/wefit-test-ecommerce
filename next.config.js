/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['wefit-react-web-test.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
