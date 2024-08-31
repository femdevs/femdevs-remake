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

/*
content.flex.flex-col.items-center.justify-center
    hero.flex.w-full.max-w-6xl.flex-row.items-center.justify-between.p-8(class='md:my-16')
        .flex.w-full.flex-col.space-y-4
            img.w-full.rounded-xl.object-cover.transition-all(src='https://cdn.thefemdevs.com/assets/images/deficon' alt='FemDevs Logo' async='')
            h1.select-none.font-poppins.text-5xl.font-medium.text-neutral-900 Our Story
            h2.select-none.font-poppins.text-3xl.font-medium.text-neutral-900 The Backstory
            p.select-none.font-poppins.text-xl.text-neutral-900.
                FemDevs is a small software development company, founded in February 2023 by Alex and Oblong.
                We are based in the United States, and we are dedicated to providing high-quality software solutions to small businesses and individuals.
                We are passionate about what we do, and we are always looking to improve our products and services.
                Although, we didn't start like this. Let us take you back in time.
            h2.select-none.font-poppins.text-3xl.font-medium.text-neutral-900 The Beginnings
            p.select-none.font-poppins.text-xl.text-neutral-900.
                In February 2023, we started developing discord bot to manage a personal discord server known as "The Kingdom of Candia."
                This would be the first project that Alex and Oblong, as a team, would work on together.
                They would both learn a lot from this project, such as things about each other, about the open source community, and about the software development industry.
                This would be the project that would spark the creation of the FemDevs.
            h2.select-none.font-poppins.text-3xl.font-medium.text-neutral-900 A New Challenger Appears
            p.select-none.font-poppins.text-xl.text-neutral-900.
                A few days after the beginning of the project, a new team member would join the FemDevs, that being Benjamin.
                Benjamin was very skilled at programming, excelling at server-side development and database management.
                The team continued developing the bot in the initial language of Python, until Benjamin determined that it would be beneficial to switch to JavaScript.
                This would be the first of many decisions that would shape the future of the FemDevs.
            h2.select-none.font-poppins.text-3xl.font-medium.text-neutral-900 The Present
            p.select-none.font-poppins.text-xl.text-neutral-900.
                In July of 2023, we have helped over 12,000 people and started to sell high quality products.
                By the end of 2023, we have helped over 50,000 people.
                We have continued to grow and expand our services, and we are always looking for new ways to improve.
                We are excited to see what the future holds for FemDevs, and we are grateful for all of the support that we have received.
            h2.select-none.font-poppins.text-3xl.font-medium.text-neutral-900 The Future
            p.select-none.font-poppins.text-xl.text-neutral-900.
                We are always looking for new ways to improve our products and services, and we are excited to see what the future holds for FemDevs.
                We are dedicated to providing high-quality software solutions to small businesses and individuals, and we are always looking for new ways to expand our services.
                We are excited to see what the future holds for FemDevs, and we are grateful for all of the support that we have received.
*/

function Section({ title, description }) {
    return (
        <>
            <h2 className="select-none font-poppins text-3xl font-medium text-neutral-900">{title}</h2>
            <p className="select-none font-poppins text-xl text-neutral-900">{description}</p>
        </>
    );
}

export default async function Page({ params }) {
    const client = new otaClient('e7e5f0f98533e445ccd2b89t9ev');
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
