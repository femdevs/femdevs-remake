import { NextResponse } from 'next/server';
import fs from 'fs';

export async function GET() {
    const file = fs.readFileSync(`${process.cwd()}/assets/media/logos/default.svg`);
    return new NextResponse(file, { status: 200, headers: { 'Content-Type': 'image/svg+xml' } });
}
