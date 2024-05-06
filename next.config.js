const isProd = process.env.NODE_ENV === "production";

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
  assetPrefix: isProd ? "https://items-cdn.zvdev.com" : undefined,
};

module.exports = nextConfig;
