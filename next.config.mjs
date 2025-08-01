/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      // {
      //     protocol: "https",
      //     hostname: "HOSTNAME_REQUIRED",
      // }
    ],
  },
  sassOptions: {
    includePaths: [path.resolve('./src/assets/scss')],
    prependData: `@use "core.scss" as *;`,
  },
};

export default nextConfig;
