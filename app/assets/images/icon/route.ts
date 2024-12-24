import { NextResponse } from 'next/server';
import fs from 'fs';

export async function GET(request, { params }) {
    const options = fs.readdirSync(`${process.cwd()}/assets/media/logos/`);
    return new NextResponse(
        fs.readFileSync(`${process.cwd()}/assets/media/logos/${options.at(Math.floor(Math.random() * options.length))}`),
        {
            headers: {
                'Cache-Control': 'no-store',
                'Expires': '0',
                'Content-Type': 'image/svg+xml',
            },
        }
    );
}
