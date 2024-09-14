import { NextResponse } from 'next/server';

export async function GET() {
    const { data } = await req.axiosReq('https://api.chucknorris.io/jokes/random');
    return NextResponse.json(data, { status: 200 });
}
