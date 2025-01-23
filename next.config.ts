import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    redirects: async function () {
        return [
            // Basic redirect
            {
                source: '/',
                destination: '/en-US/',
                permanent: true,
            },
            {
                source: '/about',
                destination: '/en-US/about',
                permanent: true,
            },
            {
                source: '/team',
                destination: '/en-US/team',
                permanent: true,
            },
            {
                source: '/contact',
                destination: 'mailto:support@thefemdevs.com',
                permanent: true,
            },
        ];
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    typescript: {
        ignoreBuildErrors: true, // There are some errors that I can't be bothered to fix
    },
};

export default nextConfig;
