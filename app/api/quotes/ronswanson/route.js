import { NextResponse } from 'next/server';
import Quote from '#/src/formatters/quote';

export async function GET(request, { params }) {
    const data = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes').then(res => res.json());
    const fData = new Quote({ quote: data[0], author: 'Ron Swanson', tags: [] });
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
