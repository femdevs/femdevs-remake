'use server';
/* eslint-disable @next/next/no-img-element */
import otaClient from '@crowdin/ota-client';
import * as Supabase from '@supabase/supabase-js';
import crypto from 'crypto';

export async function generateMetadata({ params }) {
    /** @type {import('next').Metadata} */
    return {
        title: 'Team',
        description: 'About The FemDevs Team',
        alternates: {
            canonical: `/${params.lang}/team`,
        },
        openGraph: {
            title: 'About The FemDevs Team',
            description: 'About The FemDevs Team',
            url: `/${params.lang}/team`,
            siteName: 'About The FemDevs Team',
        },
        twitter: {
            title: 'About The FemDevs Team',
            description: 'About The FemDevs Team',
        },
    };
}

function StaffCard({ member }) {
    return (
        <a className="group flex flex-col rounded-xl bg-white transition-all hover:ring-1 hover:ring-brand-black hover:drop-shadow-xl" href={member.website}>
            <img className="h-32 rounded-t-xl object-cover transition-all" src={member.avatarUrl} alt={`${member.displayname}'s profile picture`} type="image/webp" loading="lazy" />
            <div className="space-y-1 p-4">
                <h4 className="select-none font-poppins text-xl font-medium text-neutral-900">{member.displayname}</h4>
                <h5 className="select-none font-poppins text-lg text-neutral-600">{member.title}</h5>
            </div>
        </a>
    );
}

function StaffSegment({ title, members }) {
    return (
        <div className="flex flex-col space-y-6">
            <h3 className="select-none font-poppins text-3xl font-medium text-neutral-900">{title}</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {members.map(member => (<StaffCard member={member} key={hash(member.displayname)} />))}
            </div>
        </div>
    );
}

function hash(val) {
    const hasher = crypto.createHash('md5');
    hasher.update(val);
    return hasher.digest().toString('utf8');
}

export default async function Page({ params }) {
    const { lang } = params;
    const client = new otaClient(process.env.CROWDIN_DISTRO_ID);
    const locales = await client.listLanguages();
    if (!locales.includes(lang)) return notFound();
    const strings = await client.getStringsByLocale(lang);
    const supabase = Supabase.createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_KEY
    );
    const staffRoles = {};
    const { data } = (await supabase.from("staff").select("*").eq('isstaff', true).order('id', { ascending: true }));
    data.forEach(staff => staffRoles[staff.role] = staffRoles[staff.role] || {});
    data.forEach((staff, index) => Object.assign(
        staffRoles[staff.role],
        { [index]: { ...staff, avatarUrl: `https://thefemdevs.com/assets/images/team/${staff.userid}` } },
    ));
    return (
        <content className="flex flex-col items-center justify-center">
            <div className="flex w-full max-w-6xl flex-col space-y-8 p-8 md:my-16">
                <div className="flex w-full flex-col space-y-4">
                    <h1 className="select-none font-poppins text-5xl font-medium text-neutral-900">The Team</h1>
                    <h2 className="select-none font-poppins text-xl text-neutral-900">
                        FemDevs would not be possible without the help of a number of people.
                        We would like to thank the following people for their contributions to FemDevs.
                    </h2>
                </div>
                {(() => {
                    const staff = [];
                    for (const role in staffRoles) {
                        staff.push(
                            <StaffSegment title={role} key={hash(role)} members={Object.values(staffRoles[role]).filter(val => typeof val === 'object')} />
                        );
                    }
                    return staff;
                })()}
            </div>
        </content>
    );
}
