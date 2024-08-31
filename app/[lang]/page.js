'use server';
import otaClient from '@crowdin/ota-client';

import ServicesAbout from '#/components/ServicesAbout';
import LFV from '#/components/LFV';

export async function generateMetadata({ params }) {
    return {
        title: 'Homepage',
        description: 'The homepage of The FemDevs',
        alternates: {
            canonical: '/' + params.lang,
        },
        openGraph: {
            title: 'The FemDevs Homepage',
            description: 'The homepage of The FemDevs',
            url: '/' + params.lang,
        },
        twitter: {
            title: 'The FemDevs Homepage',
            description: 'The homepage of The FemDevs',
        },
    };
}

function SVG({ path }) {
    return (
        <svg
            className="fill-none w-8 h-8"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path className={`fill-brand-primary-light dark:fill-brand-primary-dark`} d={path}></path>
        </svg>
    );
}


export default async function Page({ params }) {
    const client = new otaClient('e7e5f0f98533e445ccd2b89t9ev');
    const strings = await client.getStringsByLocale(params.lang);
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
                                <SVG
                                    path="M24 4.5C20.1433 4.5 16.3731 5.64366 13.1664 7.78634C9.95963 9.92903 7.46027 12.9745 5.98436 16.5377C4.50845 20.1008 4.12228 24.0216 4.8747 27.8043C5.62711 31.5869 7.4843 35.0615 10.2114 37.7886C12.9386 40.5157 16.4131 42.3729 20.1957 43.1253C23.9784 43.8777 27.8992 43.4916 31.4623 42.0156C35.0255 40.5397 38.071 38.0404 40.2137 34.8336C42.3564 31.6269 43.5 27.8567 43.5 24C43.4945 18.83 41.4383 13.8732 37.7826 10.2174C34.1268 6.56167 29.1701 4.50546 24 4.5ZM19.0556 31.5H28.9444C27.9375 34.9388 26.25 38.0381 24 40.4794C21.75 38.0381 20.0625 34.9388 19.0556 31.5ZM18.375 28.5C17.8775 25.5206 17.8775 22.4794 18.375 19.5H29.625C30.1225 22.4794 30.1225 25.5206 29.625 28.5H18.375ZM7.50001 24C7.4987 22.4783 7.70884 20.9638 8.12438 19.5H15.3356C14.8881 22.4833 14.8881 25.5167 15.3356 28.5H8.12438C7.70884 27.0362 7.4987 25.5217 7.50001 24ZM28.9444 16.5H19.0556C20.0625 13.0612 21.75 9.96188 24 7.52063C26.25 9.96188 27.9375 13.0612 28.9444 16.5ZM32.6644 19.5H39.8756C40.7081 22.4422 40.7081 25.5578 39.8756 28.5H32.6644C33.1119 25.5167 33.1119 22.4833 32.6644 19.5ZM38.6944 16.5H32.0513C31.2858 13.4878 30.0002 10.6325 28.2525 8.0625C30.4853 8.66254 32.5679 9.72323 34.3662 11.1764C36.1646 12.6295 37.6389 14.4429 38.6944 16.5ZM19.7475 8.0625C17.9998 10.6325 16.7143 13.4878 15.9488 16.5H9.30563C10.3611 14.4429 11.8354 12.6295 13.6338 11.1764C15.4321 9.72323 17.5147 8.66254 19.7475 8.0625ZM9.30563 31.5H15.9488C16.7143 34.5122 17.9998 37.3675 19.7475 39.9375C17.5147 39.3375 15.4321 38.2768 13.6338 36.8236C11.8354 35.3705 10.3611 33.5571 9.30563 31.5ZM28.2525 39.9375C30.0002 37.3675 31.2858 34.5122 32.0513 31.5H38.6944C37.6389 33.5571 36.1646 35.3705 34.3662 36.8236C32.5679 38.2768 30.4853 39.3375 28.2525 39.9375Z"
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
                                <SVG
                                    path="M4 9.2V18.8C4 20.6 5 22 6.4 22H41.8C43 22 44.2 20.6 44.2 18.8V9.2C44 7.4 43 6 41.6 6H6.4C5 6 4 7.4 4 9.2ZM20 16V12H18V16H20ZM10 16H14V12H10V16ZM40 18H8V10H40V18ZM4 29.2V38.8C4 40.6 5 42 6.4 42H41.8C43 42 44.2 40.6 44.2 38.8V29.2C44.2 27.4 43.2 26 41.8 26H6.4C5 26 4 27.4 4 29.2ZM20 36V32H18V36H20ZM10 36H14V32H10V36ZM40 38H8V30H40V38Z"
                                />
                            </div>
                            <p className="max-w-2xl select-none font-poppins text-lg text-neutral-900 md:text-right">
                                {strings.home.info.two.desc}
                            </p>
                        </div>
                        <div className="flex flex-col items-start space-y-4">
                            <div className="flex flex-row items-center space-x-2">
                                <SVG
                                    path="M24 44L23.5 38H23C18.2667 38 14.25 36.35 10.95 33.05C7.65 29.75 6 25.7333 6 21C6 16.2667 7.65 12.25 10.95 8.95C14.25 5.65 18.2667 4 23 4C25.3667 4 27.5753 4.44133 29.626 5.324C31.6767 6.20667 33.4767 7.42333 35.026 8.974C36.5753 10.5247 37.7913 12.3247 38.674 14.374C39.5567 16.4233 39.9987 18.632 40 21C40 23.5 39.5913 25.9 38.774 28.2C37.9567 30.5 36.84 32.6333 35.424 34.6C34.008 36.5667 32.3247 38.35 30.374 39.95C28.4233 41.55 26.2987 42.9 24 44ZM28 36.7C30.3667 34.7 32.292 32.358 33.776 29.674C35.26 26.99 36.0013 24.0987 36 21C36 17.3667 34.7413 14.292 32.224 11.776C29.7067 9.26 26.632 8.00133 23 8C19.3667 8 16.292 9.25867 13.776 11.776C11.26 14.2933 10.0013 17.368 10 21C10 24.6333 11.2587 27.708 13.776 30.224C16.2933 32.74 19.368 33.9987 23 34H28V36.7ZM22.95 31.95C23.5167 31.95 24 31.75 24.4 31.35C24.8 30.95 25 30.4667 25 29.9C25 29.3333 24.8 28.85 24.4 28.45C24 28.05 23.5167 27.85 22.95 27.85C22.3833 27.85 21.9 28.05 21.5 28.45C21.1 28.85 20.9 29.3333 20.9 29.9C20.9 30.4667 21.1 30.95 21.5 31.35C21.9 31.75 22.3833 31.95 22.95 31.95ZM21.5 25.6H24.5C24.5 24.6 24.6 23.9 24.8 23.5C25 23.1 25.6333 22.3667 26.7 21.3C27.3 20.7 27.8 20.05 28.2 19.35C28.6 18.65 28.8 17.9 28.8 17.1C28.8 15.4 28.2247 14.1247 27.074 13.274C25.9233 12.4233 24.5653 11.9987 23 12C21.5333 12 20.3 12.4087 19.3 13.226C18.3 14.0433 17.6 15.0347 17.2 16.2L20 17.3C20.1667 16.7333 20.4833 16.1747 20.95 15.624C21.4167 15.0733 22.1 14.7987 23 14.8C23.9 14.8 24.5747 15.05 25.024 15.55C25.4733 16.05 25.6987 16.6 25.7 17.2C25.7 17.7667 25.5333 18.2753 25.2 18.726C24.8667 19.1767 24.4667 19.6347 24 20.1C22.8333 21.1 22.1247 21.892 21.874 22.476C21.6233 23.06 21.4987 24.1013 21.5 25.6Z"
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
                                <ServicesAbout
                                    title={strings.home.products.api.title}
                                    description={strings.home.products.api.desc}
                                />
                            </div>
                            <div className="flex flex-col space-y-3 rounded-lg bg-white p-8 lg:col-span-2">
                                <ServicesAbout
                                    title={strings.home.products.website.title}
                                    description={strings.home.products.website.desc}
                                />
                            </div>
                            <div className="flex flex-col space-y-3 rounded-lg bg-white p-8 lg:col-span-2">
                                <ServicesAbout
                                    title={strings.home.products.bot.title}
                                    description={strings.home.products.bot.desc}
                                />
                            </div>
                            <div className="flex flex-col space-y-3 rounded-lg bg-white p-8">
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
                        <LFV val='13,000+' description={strings.home.clients} />
                        <LFV val='99.7%' description={strings.home.uptime} />
                    </div>
                </div>
            </hero>
        </content>
    );
}
