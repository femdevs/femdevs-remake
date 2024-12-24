import { NextResponse } from 'next/server';
import Phone from '#/src/formatters/phone';

export async function GET(request, { params }) {
    const number = request.headers.get('x-number');
    if (!number) return sendError(6);
    const formatted = number.replace(/[^0-9]/gm, '');
    const data = await fetch(`https://api.veriphone.io/v2/verify?default_country=US&key=${process.env.VERIPHONE_TOKEN}&phone=${formatted}`).then(res => res.json());
    const fData = new Phone(data);
    switch (request.nextUrl.searchParams.get('type')) {
        case 'xml':
            return new NextResponse(fData.XML, { status: 200, headers: { 'Content-Type': 'application/xml' } });
        case 'yaml':
            return new NextResponse(fData.YAML, { status: 200, headers: { 'Content-Type': 'application/yaml' } });
        case 'json':
        default:
            return NextResponse.json(fData.JSON, { status: 200 });
    }
}
