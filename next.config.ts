import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
        ],
    },
    redirects: async () => [
        {
            source: '/:path*',
            has: [{ type: 'host', value: 'www.bntw.dev' }],
            destination: 'https://bntw.dev/:path*',
            permanent: true
        }
    ]
};

export default nextConfig;
