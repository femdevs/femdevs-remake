import { NextResponse } from 'next/server';
import Buffer from 'buffer';
export async function GET(request, { params }) {
    const { hash } = params;
    const url = new URL(`/avatar/${hash}`, 'https://www.gravatar.com');
    url.search = (new URLSearchParams([['size', '800'], ['d', 'mp'], ['r', 'x'], ['d', 'retro']])).toString();
    return new NextResponse(Buffer.from(await fetch(url).then(res => res.arrayBuffer())), {
        headers: {
            'Cache-Control': 'no-store',
            'Content-Type': 'image/png',
        },
    });
};
