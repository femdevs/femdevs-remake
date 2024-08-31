/* eslint-disable @next/next/no-img-element */
'use server';
import React from 'react';
import otaClient from '@crowdin/ota-client';

import NavLink from './NavLink';

export default async function Nav({ lang }) {
    const client = new otaClient('e7e5f0f98533e445ccd2b89t9ev');
    const strings = await client.getStringsByLocale(lang);
    return (
        <nav className="sticky top-0 z-30 flex flex-row items-center justify-center bg-white">
            <div className="flex w-full max-w-6xl flex-row items-center justify-between p-8">
                <img className="h-12" src="https://cdn.thefemdevs.com/assets/images/icon" alt="FemDevs Logo" async />
                <div className="hidden flex-row items-center space-x-6 md:flex">
                    <NavLink href={`/${lang}/`} text={strings.nav.home} />
                    <NavLink href={`/${lang}/about`} text={strings.nav.about} />
                    <NavLink href={`/${lang}/team`} text={strings.nav.team} />
                    <NavLink href="mailto:support@thefemdevs.com" text={strings.nav.contact} extraAttributes={{ rel: "noreferrer", target: "_blank" }} />
                </div>
            </div>
        </nav>
    );
}
