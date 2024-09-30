'use server';
/* eslint-disable @next/next/no-img-element */
import otaClient from '@crowdin/ota-client';
import * as Supabase from '@supabase/supabase-js';
import crypto from 'crypto';
import { Icon } from '@iconify-icon/react';
import axios from 'axios';
import Cache from 'node-cache';

const staffCache = new Cache({ stdTTL: 60, checkperiod: 120 });

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
    const iconClasses = 'inline-block size-6 relative bottom-0 text-brand-black';
    return (
        <a className="group flex flex-col rounded-xl bg-white transition-all hover:ring-1 hover:ring-brand-black hover:drop-shadow-xl" href={member.website}>
            <img
                className="h-32 rounded-t-xl object-cover transition-all"
                src={`https://thefemdevs.com/assets/images/grav/${member.gravatar}`}
                alt={`${member.displayname}'s profile picture`}
                type="image/webp"
                loading="lazy"
            />
            <div className="space-y-1 p-4">
                <h4 className="select-none font-poppins text-xl font-medium text-neutral-900 flex gap-3 items-center">
                    {member.displayname}
                    <span className="flex gap-[6px] items-center">
                        {
                            member.owner && (
                                <Icon icon="tabler:crown" className={iconClasses} alt="Owner" title="Owner" />
                            )
                        } {
                            member.admin && !member.owner && (
                                <Icon icon="material-symbols:add-moderator-outline" className={iconClasses} alt="Admin" title="Admin" />
                            )
                        } {
                            member.dev && !member.owner && (
                                <Icon icon="tabler:user-cog" className={iconClasses} alt="Developer" title="Developer" />
                            )
                        } {
                            member.org && (
                                <Icon icon="tabler:building-skyscraper" className={iconClasses} alt="Organization" title="Organization" />
                            )
                        }
                    </span>
                </h4>
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

const hash = val => crypto.createHash('sha1').update(val).digest().toString('utf8');

export default async function Page({ params }) {
    const { lang } = params;
    const client = new otaClient(process.env.CROWDIN_DISTRO_ID);
    const locales = await client.listLanguages();
    if (!locales.includes(lang)) return notFound();
    const strings = await client.getStringsByLocale(lang);
    const staffRoles = {};
    if (staffCache.has('staff')) Object.assign(staffRoles, staffCache.get('staff'));
    else {
        const url = new URL('https://xbrshjvntcletdswsxtq.supabase.co/rest/v1/staff');
        url.searchParams.append('select', '*');
        url.searchParams.append('isstaff', 'eq.true');
        url.searchParams.append('order', 'id.asc');
        const { data } = await axios.get(url.toString(), {
            headers: {
                'Cache-Control': 'no-cache',
                Expires: 0,
                Pragma: 'no-cache',
                apikey: process.env.SUPABASE_KEY,
            },
        });
        for (const staff of data) {
            staffRoles[staff.role] = staffRoles[staff.role] || {};
            const flags = staff.flags.split(':');
            staff.owner = flags[0] === '1';
            staff.admin = flags[1] === '1';
            staff.dev = flags[2] === '1';
            staff.org = staff.role === 'Business Partners';
            staff.title = strings.team.roles[staff.title];
            Object.assign(
                staffRoles[staff.role],
                { [staff.id]: staff },
            );
        }
        staffCache.set('staff', staffRoles);
    }
    return (
        <content className="flex flex-col items-center justify-center">
            <div className="flex w-full max-w-6xl flex-col space-y-8 p-8 md:my-16">
                <div className="flex w-full flex-col space-y-4">
                    <h1 className="select-none font-poppins text-5xl font-medium text-neutral-900">The Team</h1>
                    <h2 className="select-none font-poppins text-xl text-neutral-900">
                        {strings.team.desc}
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
