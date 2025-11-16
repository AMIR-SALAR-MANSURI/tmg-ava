/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  async redirects() {
    return [
      {
        source: "/",
        destination: process.env.NEXT_PUBLIC_BASE_PATH,
        basePath: false,
        statusCode: 303,
        permanent: undefined,
      },
      {
        source: "/login",
        destination: process.env.NEXT_PUBLIC_BASE_PATH + "/login",
        basePath: false,
        statusCode: 303,
        permanent: undefined,
      },
    ];
  },
};

export default nextConfig;
