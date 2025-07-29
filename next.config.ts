import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname:"sahil-streemly.b-cdn.net" , protocol:"https",port:"",pathname:"/**"
      },
      {
        hostname:"*" , protocol:"https",port:"",pathname:"/**"
      },
    ]
  }
};

export default nextConfig;
