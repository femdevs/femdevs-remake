import { NextResponse } from 'next/server';
import fs from 'fs';

export async function GET(request, { params }) {
    const { color } = params;
    const file = fs.readFileSync(`${process.cwd()}/app/assets/media/logos/${color}.svg`);
    return new NextResponse(file, {
        headers: {
            'Cache-Control': 'public, max-age 10800, max-stale 10800, stale-if-error 86400, no-transform, immutable',
            'Content-Type': 'image/svg+xml',
        },
    });
}