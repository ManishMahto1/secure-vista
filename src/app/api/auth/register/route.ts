import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import connectToDatabase from '@/lib/database/mongodb';
import {User} from '@/models/User';

export async function POST(request: NextRequest) {
  await connectToDatabase();
  const { email, password } = await request.json();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ message: 'User already exists' }, { status: 400 });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();

  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET!, { expiresIn: '1d' });
  const cookie = serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 day
    path: '/',
  });

  return NextResponse.json({ user: { id: user._id, email: user.email } }, {
    status: 201,
    headers: { 'Set-Cookie': cookie },
  });
}