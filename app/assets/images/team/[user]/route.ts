import { NextResponse } from 'next/server';
import fs from 'fs';

export async function GET(request, { params }) {
    const { user } = params;
    const image = Buffer.from(await fetch(`https://api.daad.wtf/discord/user/${user}/avatar`).then(res => res.arrayBuffer()));
    return new NextResponse(
        image,
        {
            headers: {
                'Cache-Control': 'public, max-age 10800, max-stale 10800, stale-if-error 86400, no-transform, immutable',
                'Content-Type': 'image/png',
            },
        }
    );
}
