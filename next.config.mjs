

import { defineConfig } from 'next';

export default defineConfig({
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/search',
        destination: '/search',
      },
      {
        source: '/search:query',
        destination: '/search:query',
      },
    ];
  },
});