import { NextResponse } from 'next/server';
import LocationFormatter from '#/src/formatters/location';
import fullData from '#/src/modules/location';
import { sendError } from '#/src/error';

/**
 * @param {import('next/server').NextRequest} request
 */
export async function GET(request) {
    const resp = new NextResponse(null);
    const loc = request.headers.get('x-pluscode');
    if (!loc) return sendError(6);
    const results = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.GMAPS_API_KEY}&address=${loc}`);
    const data = JSON.parse(await results.json());
    if (data.status === 'ZERO_RESULTS') return sendError(13);
    const fData = new LocationFormatter(fullData(data));
    switch (req.query.type) {
        case 'xml':
            resp.headers.set('Content-Type', 'application/xml');
            resp.body = fData.XML;
            return resp;
        case 'yaml':
            resp.headers.set('Content-Type', 'application/yaml');
            resp.body = fData.YAML;
            return resp;
        case 'json':
        default:
            return resp.json(fData.JSON);
    }
}
