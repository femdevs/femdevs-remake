'use server';

import otaClient from '@crowdin/ota-client';
import { notFound } from 'next/navigation';
import { BaseReactProps } from "lib/m/types";

import Nav from '#/components/Nav';
import Footer from '#/components/Footer';

export default async function RootLayout({ children, params }: BaseReactProps) {
    if (!params) return notFound();
    const lang = await params!.lang!;
    const client = new otaClient(process.env.CROWDIN_DISTRO_ID!);
    const locales = await client.listLanguages();
    if (!locales.includes(lang)) return notFound();
    return (
        <body className="bg-neutral-200">
            <Nav lang={lang} />
            {children}
            <Footer lang={lang} />
        </body>
    );
}
