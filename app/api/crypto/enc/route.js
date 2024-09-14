import { NextResponse } from 'next/server';
import * as webUtils from '@therealbenpai/webutils';

/**
 * @param {import('next/server').NextRequest} request
 */
export async function GET(request) {
    const data = request.nextUrl.searchParams.get('data');
    if (!data) return sendError(6);
    const encrypted = await webUtils.Crypt.Auto.encrypt(data);
    return new NextResponse(encrypted, { status: 200 });
}
