import { SignJWT, jwtVerify } from "jose";
import { setCookie, getCookie, deleteCookie } from "@tanstack/react-start/server";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET_KEY || "super-secret-protech-admin-key-for-dev"
);

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

// Simple unhashed check for this prototype, but normally you'd use bcrypt to compare against a DB hash
export function verifyCredentials(username: unknown, password: unknown) {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export async function createAdminSession() {
  const jwt = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(JWT_SECRET);

  setCookie("admin_token", jwt, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
  });
}

export async function verifyAdminSession(): Promise<boolean> {
  const token = getCookie("admin_token");
  if (!token) return false;

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload.role === "admin";
  } catch (error) {
    return false;
  }
}

export function clearAdminSession() {
  deleteCookie("admin_token", { path: "/" });
}
