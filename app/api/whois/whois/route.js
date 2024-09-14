import { NextResponse } from 'next/server';
import whois from 'whoiser';
import * as DNS from '#/src/modules/dns';
import { sendError } from '#/src/error';

/**
 * @param {import('next/server').NextRequest} request
 */
export async function GET(request, { params }) {
    const reqDomain = request.headers.get('x-domain');
    if (!reqDomain) return sendError(8);
    const domain =
        await new Promise((ok, fail) => { try { ok(new DNS.Domain(reqDomain)); } catch (err) { fail(err); } }).catch(_ => sendError(9));
    if (domain instanceof NextResponse) return domain;
    const whoisData = await whois(domain.baseDomain);
    Object.entries(whoisData)
        .forEach(([_, mv]) => (typeof mv === 'object' && !Array.isArray(mv)) ? Object.entries(mv).forEach(([k, v]) => whoisData[k] = v) : null);
    const getUserData = sect =>
        Object.fromEntries([
            'Name',
            'Organization',
            'Street',
            'City',
            'State/Province',
            'Postal Code',
            'Country',
            'Phone',
            'Fax',
            'Email',
        ].map(k => [k.toLowerCase(), whoisData[`${sect} ${k}`]]));
    return NextResponse.json(new DNS.WhoisData({
        registrant: getUserData('Registrant'),
        admin: getUserData('Admin'),
        tech: getUserData('Tech'),
        billing: getUserData('Billing'),
        domainName: whoisData["Domain Name"],
        registrar: whoisData["Registrar"],
        creationDate: whoisData["Creation Date"],
        expirationDate: whoisData["Expiry Date"],
        updatedDate: whoisData["Updated Date"],
        status: whoisData["Domain Status"],
    }), { status: 200 });
}
