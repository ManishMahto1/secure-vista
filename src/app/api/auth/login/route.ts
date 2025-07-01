import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import connectToDatabase from '@/lib/database/mongodb';
import { User as UserModel } from '@/models/User';

export async function POST(request: NextRequest) {
  await connectToDatabase();
  const { email, password } = await request.json();

  const user = await UserModel.findOne({ email });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const token = jwt.sign({ id: user._id.toString(), email: user.email }, process.env.JWT_SECRET!, { expiresIn: '1d' });
  const cookie = serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 day
    path: '/',
    sameSite: 'lax',//strict 
  });

  return NextResponse.json({ user: { id: user._id.toString(), email: user.email } }, {
    status: 200,
    headers: { 'Set-Cookie': cookie },
  });
}