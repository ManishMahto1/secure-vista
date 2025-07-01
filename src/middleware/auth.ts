import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const path = request.nextUrl.pathname;

  // Only protect specific routes
  const protectedRoutes = ['/dashboard', '/profile'];

  if (protectedRoutes.some(route => path.startsWith(route))) {
    try {
      if (!token || !jwt.verify(token, process.env.JWT_SECRET!)) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    } catch {
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('token');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
};


/* // middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const path = request.nextUrl.pathname;

  const protectedRoutes = ['/dashboard', '/profile'];

  try {
    // Verify token if exists
    if (token) jwt.verify(token, process.env.JWT_SECRET!);
    
    if (protectedRoutes.some(route => path.startsWith(route))) {
      if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }

    if (path.startsWith('/login') && token) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  } catch  {
    // Clear invalid token
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('token');
    return response;
  }

  return NextResponse.next();
}

 */

/* import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const path = request.nextUrl.pathname;

  const protectedRoutes = ['/admin', '/dashboard'];

  if (protectedRoutes.some((route) => path.startsWith(route))) {
    if (!token || !jwt.verify(token, process.env.JWT_SECRET!)) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*'],
};
  */
 

/*  import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const path = request.nextUrl.pathname;

  const protectedRoutes = ['/dashboard', '/admin'];
  const authRoutes = ['/login', '/register'];

  if (protectedRoutes.some((route) => path.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
    } catch {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  if (authRoutes.includes(path) && token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      return NextResponse.redirect(new URL('/dashboard', request.url));
    } catch {
      // Token invalid, proceed to login/register
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/login', '/register'],
};   */