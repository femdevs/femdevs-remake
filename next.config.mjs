/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async function() {
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
                destination: '/en-US/contact',
                permanent: true,
            },
        ];
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
};

export default nextConfig;
