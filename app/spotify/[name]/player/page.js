import Player from "#/components/Player";

import "#/assets/css/player.css";

/** @return {import('next').Metadata} */
export async function generateMetadata({ params }) {
    return {
        title: `${params.name}'s Spotify`,
        description: `See what ${params.name} is listening to on spotify`,
        alternates: {
            canonical: `/profile/alex`,
        },
        openGraph: {
            title: 'Alex\'s Profile',
            description: 'About Alex, a crucial manager within the FemDevs',
            url: `/profile/alex`,
            siteName: 'Alex\'s Profile',
            images: [
                {
                    href: '/assets/images/grav/ad7cc897aef0988a7f7039f16417008b',
                },
            ],
        },
        twitter: {
            title: 'Alex\'s Profile',
            description: 'About Alex, a crucial manager within the FemDevs',
            images: [
                {
                    href: '/assets/images/grav/ad7cc897aef0988a7f7039f16417008b',
                },
            ],
        },
    };
}

export default async function Page({ params }) {
    return (
        <body>
            <div id="bg" className="x-0 y-0 flex">
            </div>
            <div className="flex items-center justify-center min-h-screen">
                <Player
                    user={params.name}
                />
            </div>
        </body>
    );
}
