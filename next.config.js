/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/writing',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/writing/:slug',
        permanent: true,
      },
      {
        source: '/books1',
        destination: '/books',
        permanent: true,
      },
      {
        source: '/books2',
        destination: '/books',
        permanent: true,
      },
      {
        source: '/books3',
        destination: '/books',
        permanent: true,
      },
      {
        source: '/books4',
        destination: '/books',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
