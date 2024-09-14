import { NextResponse } from 'next/server';

export async function GET() {
    const password = () => {
        const syntax = [0, 0, 0].map(_ => 'xxxxxx'.replace(/x/g, () => String.fromCharCode(crypto.randomInt(97, 123))).split(''));
        syntax[crypto.randomInt(0, 3)][crypto.randomInt(0, 6)] = String.fromCharCode(crypto.randomInt(65, 91));
        syntax[crypto.randomInt(0, 3)][crypto.randomInt(0, 6)] = crypto.randomInt(0, 10);
        return syntax.map(arr => arr.join('')).join('-');
    };
    return NextResponse.json({ password: password() }, { status: 200 });
}
