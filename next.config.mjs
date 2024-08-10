/** @type {import('next').NextConfig} */
const nextConfig = {
   compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://point-market-47a320ab4ef6.herokuapp.com/api/:path*'
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
