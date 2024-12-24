import _ from 'lodash';
import type {Metadata} from 'next';

export default function generateMetadata(data: Metadata): Metadata {
    const metadata: Metadata = {
        metadataBase: new URL('https://thefemdevs.com'),
        title: {
            template: "%s | The FemDevs",
            default: 'Home page',
        },
        keywords: [
            'thefemdevs',
            'femdevs',
            'development',
            'lgbtq',
            'discord',
            'open-sourced',
        ],
        authors: [
            { name: 'Alex', url: 'https://thefemdevs.com/profile/alex' },
            { name: 'Benjamin', url: 'https://thefemdevs.com/profile/ben' },
            { name: 'Oblong', url: 'https://thefemdevs.com/profile/oblong' },
        ],
        creator: 'The FemDevs',
        openGraph: {
            type: 'website',
            locale: 'en_US',
            siteName: 'The FemDevs',
            images: [
                {
                    url: '/opengraph-image.png',
                    width: 1366,
                    height: 635,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'The FemDevs',
            site: '@OfficialFemDevs',
            creator: '@OfficialFemDevs',
            images: [
                {
                    url: '/twitter-image.png',
                    width: 1366,
                    height: 635,
                },
            ],
        },
        robots: {
            index: true,
            follow: true,
        },
    };

    if (data) _.merge(metadata, data);

    return metadata;
}
