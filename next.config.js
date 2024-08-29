module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/search',
        destination: '/search', // Handle static path
      },
      {
        source: '/searchresults/:path*',
        destination: '/searchresults/:path*', // Handle dynamic paths
      },
    ];
  },
};
