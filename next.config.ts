import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.ctfassets.net" }],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            // Allow Contentful Live Preview (US and EU apps) to embed the site.
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://app.contentful.com https://app.eu.contentful.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
