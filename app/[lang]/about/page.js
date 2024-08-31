'use server';
/* eslint-disable @next/next/no-img-element */
import otaClient from '@crowdin/ota-client';

export async function generateMetadata({ params }) {
    return {
        title: 'About Us',
        description: 'About The FemDevs',
        alternates: {
            canonical: `/${params.lang}/about`,
        },
        openGraph: {
            title: 'About The FemDevs',
            description: 'About The FemDevs',
            url: `/${params.lang}/about`,
        },
        twitter: {
            title: 'About The FemDevs',
            description: 'About The FemDevs',
        },
    };
}

function Section({ title, description }) {
    return (
        <>
            <h2 className="select-none font-poppins text-3xl font-medium text-neutral-900">{title}</h2>
            <p className="select-none font-poppins text-xl text-neutral-900">{description}</p>
        </>
    );
}

export default async function Page({ params }) {
    const client = new otaClient(process.env.CROWDIN_DISTRO_ID);
    const strings = await client.getStringsByLocale(params.lang);
    return (
        <content className="flex flex-col items-center justify-center">
            <hero className="flex w-full max-w-6xl flex-row items-center justify-between p-8 md:my-16">
                <div className="flex w-full flex-col space-y-4">
                    <img className="w-full rounded-xl object-cover transition-all" src="https://cdn.thefemdevs.com/assets/images/deficon" alt="FemDevs Logo" async="" />
                    <h1 className="select-none font-poppins text-5xl font-medium text-neutral-900">
                        {strings.about.title}
                    </h1>
                    <Section
                        title={strings.about.sections.one.title}
                        description={strings.about.sections.one.desc}
                    />
                    <Section
                        title={strings.about.sections.two.title}
                        description={strings.about.sections.two.desc}
                    />
                    <Section
                        title={strings.about.sections.three.title}
                        description={strings.about.sections.three.desc}
                    />
                    <Section
                        title={strings.about.sections.four.title}
                        description={strings.about.sections.four.desc}
                    />
                    <Section
                        title={strings.about.sections.five.title}
                        description={strings.about.sections.five.desc}
                    />
                </div>
            </hero>
        </content>
    );
}
