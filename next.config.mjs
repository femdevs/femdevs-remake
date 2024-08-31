/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
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
};

export default nextConfig;
