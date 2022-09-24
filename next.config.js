/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "",
    domains: ["images.microcms-assets.io"],
  },
  swcMinify: true,
};
const headers = require("./headers");

module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers,
      },
    ];
  },
};

module.exports = nextConfig;
