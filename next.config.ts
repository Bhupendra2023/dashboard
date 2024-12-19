import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    unoptimized: true,
    domains: ['d19k0hz679a7ts.cloudfront.net', 'qa-new.visionias.in', 'cdn.visionias.in', 'i.ytimg.com', 'visionresources.s3.us-west-2.amazonaws.com', 's3-us-west-2.amazonaws.com', "img.youtube.com", "visionstudent.s3.amazonaws.com"],
  },
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/',
      },
    ]
  },
};


export default nextConfig;
