
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https', 
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        
        hostname: 'framerusercontent.com', 
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'gyazo.com',
      },
    ],
  },
};

export default nextConfig;