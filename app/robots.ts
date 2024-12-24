export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/admin',
                '/api',
                '/auth',
                '/spotify',
            ],
        },
        sitemap: 'https://thefemdevs.com/sitemap.xml',
    };
}
