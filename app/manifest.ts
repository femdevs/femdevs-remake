/* eslint-disable camelcase */

export default function manifest() {
    return {
        name: 'FemDevs Website',
        short_name: 'FemDevs',
        description: 'The official website for FemDevs',
        start_url: '/en-US',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
