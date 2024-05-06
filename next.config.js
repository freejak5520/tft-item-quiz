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
  images: {
    loader: "custom",
    loaderFile: "./src/r2-loader.ts",
  },
};

module.exports = nextConfig;
