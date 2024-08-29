import React from "react";
import * as Supabase from "@supabase/supabase-js";

import FooterLink from "./FooterLink";
import StatusOrb from "./StatusOrb";

export default async function Footer() {
    const supabase = Supabase.createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_KEY
    );
    const { data } = (await supabase.from("websitestatus").select("upstatus").limit(1).single());
    const { upstatus: status } = data;
    return (
        <footer className="flex w-full justify-center bg-neutral-900 p-12 text-neutral-100">
            <div className="flex w-full max-w-6xl flex-col space-y-8 divide-y divide-neutral-700 px-8">
                <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                    <div className="flex flex-col space-y-2">
                        <h2 className="select-none font-poppins text-xl font-medium">About</h2>
                        <div className="flex flex-col space-y-0">
                            <FooterLink href="https://thefemdevs.com/about" text="About" />
                            <FooterLink href="https://thefemdevs.com/team" text="Team" />
                            <FooterLink href="https://thefemdevs.com/products" text="Products" />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h2 className="select-none font-poppins text-xl font-medium">Community</h2>
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
                        <h2 className="select-none font-poppins text-xl font-medium">Company</h2>
                        <div className="flex flex-col space-y-0">
                            <FooterLink href="https://thefemdevs.com/branding" text="Branding" />
                            <FooterLink href="https://thefemdevs.com/careers" text="Careers" />
                            <FooterLink href="mailto:support@thefemdevs.com" text="Contact" extraAttributes={{ rel: "noreferrer", target: "_blank" }} />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h2 className="select-none font-poppins text-xl font-medium">Legal</h2>
                        <div className="flex flex-col space-y-0">
                            <FooterLink href="https://legal.thefemdevs.com/terms" text="Terms" />
                            <FooterLink href="https://legal.thefemdevs.com/privacy" text="Privacy" />
                            <FooterLink href="https://legal.thefemdevs.com/cookies" text="Cookies" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between pt-8">
                    <h2 className="select-none font-poppins text-lg">FemDevs &copy; 2024</h2>
                    <div className="flex flex-row items-center justify-center space-x-4">
                        <StatusOrb state={status} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
