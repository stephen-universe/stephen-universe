
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
// next.config.js

  env: {
    GOOGLE_SCRIPT_URL: process.env.GOOGLE_SCRIPT_URL,
  },

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};

module.exports = nextConfig;