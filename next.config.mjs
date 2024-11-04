/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        // Define the remote pattern
        protocol: 'https',
        hostname: 'download.blender.org',
        pathname: '/ED/**', // This allows all paths under /ED/
      },
      {
        protocol: 'https',
        hostname: 'mango.blender.org', // Add the new hostname
        pathname: '/wp-content/uploads/**', // Allow all uploads from this path
      },
    ],
  },
};

export default nextConfig;
