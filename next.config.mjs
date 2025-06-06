/** @type {import('next').NextConfig} */
const nextConfig = {  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**',
        search: '',
      },
    ],
    domains: ['encrypted-tbn0.gstatic.com'], // Thêm domain ở đây
  },
};
  
  export default nextConfig; 
  