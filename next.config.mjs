/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "users-bucket-ai-image-gen.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
