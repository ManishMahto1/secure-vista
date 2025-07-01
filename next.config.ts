import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
     
     domains: ["designsserver.com","plus.unsplash.com","storage.googleapis.com","res.cloudinary.com","media.istockphoto.com","storage.googleapis.com","as1.ftcdn.net","storage.googleapis.com","cdn.vectorstock.com","plus.unsplash.com",'images.unsplash.com',"storage.googleapis.com"],
    },
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      pathname: '**',
    },
  ],
};

export default nextConfig;


