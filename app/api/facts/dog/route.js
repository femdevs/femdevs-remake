import { NextResponse } from 'next/server';

export async function GET() {
    const { data } = await req.axiosReq('http://dog-api.kinduff.com/api/facts', { params: { number: 1 } });
    return NextResponse.json(data, { status: 200 });
}
