/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  images: {
    domains: ["", ""],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/1labs4us/companion",
        permanent: false,
      },
    ];
  },
};
module.exports = nextConfig
