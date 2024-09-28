import React from "react";
import otaClient from "@crowdin/ota-client";
import StatusOrb from "#/components/StatusOrb";

export function FooterHeader({ title }) {
    return (
        <h2 className="select-none font-poppins text-xl font-medium">
            {title}
        </h2>
    );
}

export function FooterLink({ href, text, extraAttributes }) {
    return (
        <a
            className="select-none font-poppins text-lg text-neutral-100 transition-all hover:text-neutral-300"
            href={href}
            {...extraAttributes}
        >{text}</a>
    );
}

export default async function Footer({ lang }) {
    const client = new otaClient(process.env.CROWDIN_DISTRO_ID);
    const strings = await client.getStringsByLocale(lang);
    return (
        <footer className="flex w-full justify-center bg-neutral-900 p-12 text-neutral-100">
            <div className="flex w-full max-w-6xl flex-col space-y-8 divide-y divide-neutral-700 px-8">
                <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                    <div className="flex flex-col space-y-2">
                        <FooterHeader title={strings.footer.header.about} />
                        <div className="flex flex-col space-y-0">
                            <FooterLink href={`/${lang}/about`} text={strings.footer.links.about.about} />
                            <FooterLink href={`/${lang}/team`} text={strings.footer.links.about.team} />
                            <FooterLink href={`/${lang}/products`} text={strings.footer.links.about.products} />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <FooterHeader title={strings.footer.header.community} />
                        <div className="flex flex-col space-y-0">
                            <FooterLink href="https://discord.gg/FgQvDW8jtr" text="Discord" />
                            <FooterLink href="https://x.com/officialfemdevs" text="Twitter" />
                            <FooterLink href="https://instagram.com/officialfemdevs" text="Instagram" />
                            <FooterLink href="https://tiktok.com/@femdevs" text="TikTok" />
                            <FooterLink href="https://reddit.com/r/femdevs" text="Reddit" />
                            <FooterLink href="https://femboyland.eu/view-persons-profile/femdevs" text="FemboyLand" />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <FooterHeader title={strings.footer.header.company} />
                        <div className="flex flex-col space-y-0">
                            <FooterLink href={`/${lang}/branding`} text="Branding" />
                            <FooterLink href={`/${lang}/careers`} text="Careers" />
                            <FooterLink href="mailto:support@thefemdevs.com" text="Contact" extraAttributes={{ rel: "noreferrer", target: "_blank" }} />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <FooterHeader title={strings.footer.header.legal} />
                        <div className="flex flex-col space-y-0">
                            <FooterLink href="/legal/terms" text="Terms" />
                            <FooterLink href="/legal/privacy" text="Privacy" />
                            <FooterLink href="/legal/cookies" text="Cookies" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between pt-8">
                    <h2 className="select-none font-poppins text-lg">FemDevs &copy; 2024</h2>
                    <div className="flex flex-row items-center justify-center space-x-4">
                        <StatusOrb translations={strings.status} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
