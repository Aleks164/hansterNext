/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "basket-**.wb.ru",
        port: "",
        pathname: "/vol**/part**/**/images/c516x688/1.webp",
      },
    ],
  },
};

export default nextConfig;
