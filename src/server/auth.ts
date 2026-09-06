import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';
import { db } from '../db';
import { users } from '../db/schema';
import { eq } from 'drizzle-orm';
import { getCookie, setCookie } from '@tanstack/react-start/server'; // or similar cookies library if using Start

const secretKey = new TextEncoder().encode(process.env['JWT_SECRET'] || 'fallback_secret');

export async function createToken(payload: any) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secretKey);
  return token;
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload;
  } catch (error) {
    return null;
  }
}

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}

export async function createAdminUser(email: string, passwordPlain: string) {
  const hash = await hashPassword(passwordPlain);
  await db.insert(users).values({
    email,
    passwordHash: hash,
    role: 'admin',
  }).onConflictDoNothing();
}
