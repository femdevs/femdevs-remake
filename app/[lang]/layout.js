import otaClient from '@crowdin/ota-client';
import { notFound } from 'next/navigation';

import Nav from '#/components/Nav';
import Footer from '#/components/Footer';

export default async function RootLayout({ children, params }) {
    const { lang } = params;
    const client = new otaClient(process.env.CROWDIN_DISTRO_ID);
    const locales = await client.listLanguages();
    if (!locales.includes(lang)) return notFound();
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
