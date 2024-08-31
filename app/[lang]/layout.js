import Nav from '#/components/Nav';
import Footer from '#/components/Footer';

/** @type {import('next').Metadata} */
export const metadata = {
    metadataBase: new URL('https://thefemdevs.com'),
    title: {
        template: "%s | The FemDevs",
        default: 'Home page',
    },
    keywords: [],
    authors: [
        { name: 'Benjamin', url: '' },
        { name: 'Alex', url: '' },
        { name: 'Oblong', url: '' },
    ],
    creator: 'The FemDevs',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        siteName: 'The FemDevs',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The FemDevs',
        site: '@OfficialFemDevs',
        creator: '@OfficialFemDevs',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children, params }) {
    const { lang } = params;
    return (
        <html lang="en">
            <body className="bg-neutral-200">
                <Nav lang={lang} />
                {children}
                <Footer lang={lang} />
            </body>
        </html>
    );
}
