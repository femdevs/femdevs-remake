import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const game = params.map;
    const data = await fetch(`https://api.playhive.com/v0/game/map/${game}`).then(res => res.json());
    return NextResponse.json(data, { status: 200 });
}
