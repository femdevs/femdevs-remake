import { NextResponse } from 'next/server';
import barcode from 'bwip-js';
import { sendError } from '#/src/error';

/**
 * @param {import('next/server').NextRequest} request
 * @param {{params: {codec: string}}} param1
 */
export async function GET(request, { params }) {
    const { codec } = params;
    const content = request.nextUrl.searchParams.get('content');
    if (!content) return sendError(6);
    const fmat = request.headers.get('x-format') === 'svg';
    const config = {
        bcid: codec,
        text: content,
        scale: 3,
        includetext: true,
        textxalign: 'center',
        textsize: 16,
        textyoffset: 10,
        paddingheight: 2,
        paddingwidth: 2,
        backgroundcolor: 'FFFFFF',
        color: '000000',
        barcolor: '000000',
    };
    try {
        const BCDO = fmat ? barcode.toSVG(config) : barcode.toBuffer(config);
		const awaitedBCDO = await BCDO;
        if (awaitedBCDO instanceof Buffer) {
			request.headers.set('Content-Disposition', 'inline; filename="barcode.png"');
			request.headers.set('Content-Type', 'image/png');
		}
        return new NextResponse(awaitedBCDO, {status: 200});
    } catch (err) {
        return sendError(0);
    }
}
