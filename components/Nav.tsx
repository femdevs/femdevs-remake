/* eslint-disable @next/next/no-img-element */
'use server';
import React from 'react';
import { SignedIn, UserButton, SignedOut, SignInButton } from '@clerk/nextjs';
import otaClient from '@crowdin/ota-client';

import NavLink from '#/components/NavLink';
import { BaseReactProps } from "lib/m/types";

export default async function Nav({ lang }: BaseReactProps<{ lang: string }>) {
    const client = new otaClient(process.env.CROWDIN_DISTRO_ID!);
    const strings = await client.getStringsByLocale(lang);
    return (
        <nav className="sticky top-0 z-30 flex flex-row items-center justify-center bg-white">
            <div className="flex w-full max-w-6xl flex-row items-center justify-between p-8">
                <img
                    className="h-12" src="/assets/images/icon"
                    // @ts-expect-error
                    alt="FemDevs Logo" async=''
                    />
                <div className="hidden flex-row items-center space-x-6 md:flex">
                    <NavLink href={`/${lang}/`} text={strings.nav.home} />
                    <NavLink href={`/${lang}/about`} text={strings.nav.about} />
                    <NavLink href={`/${lang}/team`} text={strings.nav.team} />
                    <NavLink href="mailto:support@thefemdevs.com" text={strings.nav.contact} extraAttributes={{ rel: "noreferrer", target: "_blank" }} />
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                </div>
            </div>
        </nav>
    );
}
