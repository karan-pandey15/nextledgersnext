/** @type {import('next').NextConfig} */
const nextConfig = {
  // Help Vercel CDN cache & stream the phone mockup video efficiently
  async headers() {
    return [
      {
        source: "/video/:path*.mp4",
        headers: [
          { key: "Accept-Ranges", value: "bytes" },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
