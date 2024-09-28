'use server';
import otaClient from '@crowdin/ota-client';
import { notFound } from 'next/navigation';
import { Icon } from '@iconify-icon/react';

import ServicesAbout from '#/components/ServicesAbout';
import LFV from '#/components/LFV';
import UptimeClient from '#/src/uptime';

const client = new otaClient(process.env.CROWDIN_DISTRO_ID);

export async function generateMetadata({ params }) {
    const { lang } = params;
    const locales = await client.listLanguages();
    if (!locales.includes(lang)) return { title: { absolute: '404 Not Found' } };
    return {
        title: 'Homepage',
        description: 'The homepage of The FemDevs',
        alternates: {
            canonical: `/${params.lang}`,
        },
        openGraph: {
            title: 'The FemDevs Homepage',
            description: 'The homepage of The FemDevs',
            url: `/${params.lang}`,
        },
        twitter: {
            title: 'The FemDevs Homepage',
            description: 'The homepage of The FemDevs',
        },
    };
}

export default async function Page({ params }) {
    const { lang } = params;
    const locales = await client.listLanguages();
    if (!locales.includes(lang)) return notFound();
    const strings = await client.getStringsByLocale(lang);
    const uptimeClient = new UptimeClient(process.env.BETTER_STACK_TOKEN);
    const uptimeData = await uptimeClient.status();
    return (
        <content className="flex flex-col items-center justify-center">
            <main>
                <hero className="flex w-full max-w-6xl flex-row items-center justify-between p-8 md:my-16">
                    <div className="flex w-full flex-col space-y-8 lg:w-1/2">
                        <div className="flex flex-col space-y-4">
                            <h1 className="max-w-2xl select-none font-poppins text-5xl font-medium text-neutral-900">
                                {strings.home.headliner.title}
                            </h1>
                            <h3 className="max-w-md select-none font-poppins text-xl text-neutral-900">
                                {strings.home.headliner.desc}
                            </h3>
                        </div>
                        <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0">
                            <a
                                className="rounded-md border-2 border-brand-primary bg-neutral-50 px-8 py-2 text-center font-poppins text-lg text-brand-black transition-all hover:border-brand-primary-dark hover:bg-brand-primary-dark hover:text-neutral-50 hover:shadow-lg"
                                href="/products"
                            >
                                {strings.home.products.button}
                            </a>
                        </div>
                    </div>
                </hero>
                <hero className="flex w-full justify-center bg-brand-primary">
                    <div className="w-full max-w-6xl space-y-4 p-8">
                        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:justify-between sm:space-x-4 sm:space-y-0">
                            <h2 className="max-w-2xl select-none font-poppins text-2xl font-medium text-white">
                                {strings.home.tagline}
                            </h2>
                            <a
                                className="w-full rounded-md bg-neutral-50 px-8 py-2 text-center font-poppins text-lg text-neutral-900 transition-all hover:bg-neutral-200 hover:shadow-lg sm:w-max"
                                href="mailto:support@thefemdevs.com"
                                target="_blank"
                            >
                                {strings.home.contact.button}
                            </a>
                        </div>
                    </div>
                </hero>
                <hero className="flex w-full justify-center p-8 bg-white">
                    <div className="w-full max-w-6xl space-y-8 px-8">
                        <div className="flex flex-col items-start space-y-4">
                            <div className="flex flex-row items-center space-x-2">
                                <Icon
                                    icon="ph:globe"
                                    noobserver
                                    width='2rem'
                                    height='2rem'
                                    style={{ color: '#008' }}
                                />
                                <h3 className="max-w-2xl select-none font-poppins text-2xl font-medium text-neutral-900">
                                    {strings.home.info.one.title}
                                </h3>
                            </div>
                            <p className="max-w-2xl select-none font-poppins text-lg text-neutral-900">
                                {strings.home.info.one.desc}
                            </p>
                        </div>
                        <div className="flex flex-col items-start space-y-4 md:items-end">
                            <div className="flex flex-row items-center space-x-2">
                                <h3 className="max-w-2xl select-none font-poppins text-2xl font-medium text-neutral-900">
                                    {strings.home.info.two.title}
                                </h3>
                                <Icon
                                    icon="solar:server-outline"
                                    noobserver
                                    width='2rem'
                                    height='2rem'
                                    style={{ color: '#008' }}
                                />
                            </div>
                            <p className="max-w-2xl select-none font-poppins text-lg text-neutral-900 md:text-right">
                                {strings.home.info.two.desc}
                            </p>
                        </div>
                        <div className="flex flex-col items-start space-y-4">
                            <div className="flex flex-row items-center space-x-2">
                                <Icon
                                    icon="mdi:message-question-outline"
                                    noobserver
                                    width='2rem'
                                    height='2rem'
                                    style={{ color: '#008' }}
                                />
                                <h3 className="max-w-2xl select-none font-poppins text-2xl font-medium text-neutral-900">
                                    {strings.home.info.three.title}
                                </h3>
                            </div>
                            <p className="max-w-2xl select-none font-poppins text-lg text-neutral-900">
                                {strings.home.info.three.desc}
                            </p>
                        </div>
                    </div>
                </hero>
                <hero className="flex w-full max-w-6xl flex-row items-center p-8 md:my-16">
                    <div className="flex w-full flex-col space-y-8">
                        <div className="flex flex-col space-y-4">
                            <h2 className="max-w-2xl select-none font-poppins text-2xl font-medium text-neutral-900">
                                {strings.home.products.title}
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                            <div className="flex flex-col space-y-3 rounded-lg bg-white p-8">
                                <Icon
                                    icon="carbon:api"
                                    noobserver
                                    width='2rem'
                                    height='2rem'
                                    style={{ color: '#008' }}
                                />
                                <ServicesAbout
                                    title={strings.home.products.api.title}
                                    description={strings.home.products.api.desc}
                                />
                            </div>
                            <div className="flex flex-col space-y-3 rounded-lg bg-white p-8 lg:col-span-2">
                                <Icon
                                    icon="gridicons:site"
                                    noobserver
                                    width='2rem'
                                    height='2rem'
                                    style={{ color: '#008' }}
                                />
                                <ServicesAbout
                                    title={strings.home.products.website.title}
                                    description={strings.home.products.website.desc}
                                />
                            </div>
                            <div className="flex flex-col space-y-3 rounded-lg bg-white p-8 lg:col-span-2">
                                <Icon
                                    icon="bxs:bot"
                                    noobserver
                                    width='2rem'
                                    height='2rem'
                                    style={{ color: '#008' }}
                                />
                                <ServicesAbout
                                    title={strings.home.products.bot.title}
                                    description={strings.home.products.bot.desc}
                                />
                            </div>
                            <div className="flex flex-col space-y-3 rounded-lg bg-white p-8">
                                <Icon
                                    icon="material-symbols-light:database"
                                    noobserver
                                    width='2rem'
                                    height='2rem'
                                    style={{ color: '#008' }}
                                />
                                <ServicesAbout
                                    title={strings.home.products.database.title}
                                    description={strings.home.products.database.desc}
                                />
                            </div>
                        </div>
                    </div>
                </hero>
            </main>
            <hero className="flex w-full justify-center p-8 bg-white">
                <div className="w-full max-w-6xl space-y-8 px-8">
                    <div className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2">
                        <LFV val={`${Intl.NumberFormat('en-GB').format(13e3)}+`} description={strings.home.clients} />
                        <LFV val={`${(uptimeData.uptime * 100).toFixed(1)}%`} description={strings.home.uptime} />
                    </div>
                </div>
            </hero>
        </content>
    );
}
