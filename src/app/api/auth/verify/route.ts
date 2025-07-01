/* import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { User } from '@/types/user';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.json({ message: 'No token' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as User;
    return NextResponse.json({ user: { id: decoded.id, email: decoded.email } }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
} */


import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { User } from '@/types/user';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as User;
    return NextResponse.json({ user: decoded }, { status: 200 });
  } catch {
    return NextResponse.json({ user: null }, { status: 200 });
  }
}