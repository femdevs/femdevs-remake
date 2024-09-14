import { NextResponse } from 'next/server';
import fs from 'fs';

export async function GET() {
    const file = fs.readFileSync(`${process.cwd()}/assets/media/logos/default.svg`);
    return new NextResponse(file, { status: 200, headers: { 'Content-Type': 'image/svg+xml' } });
}

router
	.get('/icon', (req, res) => {
		const options = fs.readdirSync(`${process.cwd()}/assets/media/logos/`);
		res
			.setHeader('Cache-Control', 'no-store')
			.setHeader('Expires', '0')
			.setHeader("Content-Type", "image/svg+xml")
			.sendFile(`${process.cwd()}/assets/media/logos/${options.at(Math.floor(Math.random() * options.length))}`);
	})
	.get('/icon/:name', (req, res) => {
		res
			.setHeader('Cache-Control', 'public, max-age 10800, max-stale 10800, stale-if-error 86400, no-transform, immutable')
			.setHeader("Content-Type", "image/svg+xml")
			.send(fs.readFileSync(`${process.cwd()}/assets/media/logos/${req.params.name.toLowerCase()}.svg`));
	})
	.get('/deficon', (req, res) => {
		res
			.setHeader('Cache-Control', 'public, max-age 10800, max-stale 10800, stale-if-error 86400, no-transform, immutable')
			.setHeader("Content-Type", "image/svg+xml")
			.sendFile(`${process.cwd()}/assets/media/logos/default.svg`);
	})