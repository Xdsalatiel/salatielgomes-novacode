/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Força o uso do Pages Router, compatível com sua estrutura atual
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
