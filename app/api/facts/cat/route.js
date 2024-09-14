import { NextResponse } from 'next/server';

export async function GET() {
    const { data } = await req.axiosReq('https://meowfacts.herokuapp.com/');
    return NextResponse.json(data, { status: 200 });
}
