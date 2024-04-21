/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cleanDistDir: true,
  redirects: async () => {
    return [
      {
        source: "/item-quiz",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
