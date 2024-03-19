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
    prependData: `@import "core.scss";`,
  },
};

export default nextConfig;
