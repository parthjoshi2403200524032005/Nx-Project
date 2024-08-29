module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/search",
        destination: "/search",
      },
      {
        source: "/searchresults",
        destination: "/searchresults",
      },
    ];
  },
};
