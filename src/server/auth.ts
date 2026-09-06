import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";

const JWT_SECRET = new TextEncoder().encode(
  process.env["JWT_SECRET_KEY"] || "super-secret-protech-admin-key-for-dev"
);

const ADMIN_USERNAME = process.env["ADMIN_USERNAME"] || "admin";
const ADMIN_PASSWORD = process.env["ADMIN_PASSWORD"] || "admin123";

export function verifyCredentials(username: unknown, password: unknown) {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export async function verifyPassword(passwordPlain: string, passwordHash: string) {
  return bcrypt.compare(passwordPlain, passwordHash);
}

export async function createToken(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(JWT_SECRET);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    return null;
  }
}
