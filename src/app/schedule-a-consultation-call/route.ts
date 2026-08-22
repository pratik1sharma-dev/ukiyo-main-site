import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	return NextResponse.redirect(new URL('/contact', request.url), 301);
}

export async function HEAD(request: Request) {
	return NextResponse.redirect(new URL('/contact', request.url), 301);
}