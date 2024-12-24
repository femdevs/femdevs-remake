import { NextResponse } from 'next/server';
import { Crypt } from '@therealbenpai/webutils';

/**
 * @param {import('next/server').NextRequest} request
 */
export async function GET(request) {
    const data = request.nextUrl.searchParams.get('data');
    if (!data) return sendError(6);
    const decrypted = await Crypt.Auto.decrypt(data);
    return new NextResponse(decrypted, { status: 200 });
}
