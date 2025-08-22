import { NextResponse } from 'next/server';

export async function GET() {
	return new NextResponse('This page has been permanently removed.', {
		status: 410,
		headers: {
			'Cache-Control': 'public, max-age=3600',
		},
	});
}

export async function HEAD() {
	return new NextResponse(null, { status: 410 });
}