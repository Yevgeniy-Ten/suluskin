/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  output:"standalone",
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/:path*',
      },
    ];
  }
};

export default nextConfig;
