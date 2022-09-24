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

module.exports = (_) => {
  return {
    reactStrictMode: true,
    eslint: {
      dirs: ["src"],
    },
    async headers() {
      return [
        {
          // 全てのパスに Security Headers を適用する
          source: "/(.*)",
          headers,
        },
      ];
    },
  };
};

module.exports = nextConfig;
