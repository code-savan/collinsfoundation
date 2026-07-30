import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/_next') || pathname === '/index.html') {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL('/index.html', req.url));
}

export const config = {
  matcher: '/:path*',
};
