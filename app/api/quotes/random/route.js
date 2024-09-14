import { NextResponse } from 'next/server';
import Quote from '#/src/formatters/quote';

export async function GET(request, { params }) {
    const data = await fetch('https://api.quotable.io/random').then(res => res.json());
    const { content: quote, author, tags } = data;
    const fData = new Quote({ quote, author, tags });
    switch (req.query.type) {
        case 'xml':
            return new NextResponse(fData.XML, { status: 200, headers: { 'Content-Type': 'application/xml' } });
        case 'yaml':
            return new NextResponse(fData.YAML, { status: 200, headers: { 'Content-Type': 'application/yaml' } });
        case 'json':
        default:
            return NextResponse.json(fData.JSON, { status: 200 });
    }
}
