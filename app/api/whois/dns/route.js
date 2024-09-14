import { NextResponse } from 'next/server';
import dns from 'dns';
import * as DNS from '#/src/modules/dns';
import { sendError } from '#/src/error';

/**
 * @param {import('next/server').NextRequest} request
 */
export async function GET(request) {
    const initialDomain = request.headers.get('x-domain');
    if (!initialDomain) return sendError(8);
    const domain = await new Promise((ok, fail) => {
        try {
            ok(new DNS.Domain(initialDomain));
        } catch (err) {
            fail(err);
        }
    }).catch(_ => sendError(9));
    if (domain instanceof NextResponse) return domain;
    const Resolver = new dns.Resolver();
    Resolver.setServers(['1.1.1.1', '1.0.0.1', '8.8.8.8', '8.8.4.4']);
    const recordTypes = ['A', 'AAAA', 'CAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'];
    const DNSdata = new DNS.DNS();
    const DNSCallback = dat => {
        const [err, res, rt] = dat;
        let data = res;
        if (err) return;
        switch (rt) {
            case 'TXT':
                data = res.map(([txt]) => txt);
                break;
            case 'SOA': return DNSdata.newRecord('SOA', res);
        }
        if (data) data.forEach(intData => DNSdata.newRecord(rt, intData));
    };
    await new Promise((ok, fail) => {
        Promise
            .all(
                recordTypes.map(rt => new Promise((ok, _fail) => {
                    try {
                        Resolver.resolve(domain.requestedDomain, rt, (err, res) => ok([err, res, rt]));
                    } catch (err) {
                        ok([err, null, rt]);
                    }
                })),
            )
            .then(data => data.forEach(intData => DNSCallback(intData)), fail)
            .finally(() => ok());
    });
    const filteredCAAList = [];
    DNSdata.CAA
        .forEach(
            v => (
                !filteredCAAList.includes(v.issue || v.issuewild)
                && (v.issue || v.issuewild)
            )
                ? filteredCAAList.push(v.issue || v.issuewild)
                : null,
        );
    DNSdata.CAA = filteredCAAList.map(k => {
        const CAARecords = DNSdata.CAA.filter(v => k === (v.issue || v.issuewild));
        return { issuer: k, wild: CAARecords.some(v => Boolean(v.issuewild)), main: CAARecords.some(v => Boolean(v.issue)) };
    }).concat([{ iodef: DNSdata.CAA.find(v => Boolean(v.iodef)).iodef }]).filter(v => v !== null);
    return NextResponse.json(
        Object.fromEntries(Array.from(
            Object.entries(DNSdata)).sort(([val1, _], [val2, __]) => Intl.Collator({ language: 'en_us' }).compare(val1, val2),
            )),
    );
}
