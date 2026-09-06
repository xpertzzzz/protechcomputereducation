import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie, deleteCookie } from "@tanstack/react-start/server";
import { verifyPassword, createToken, verifyToken } from "@/server/auth";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

const COOKIE_NAME = "protech_session";

export const loginFn = createServerFn({ method: "POST" })
  .validator((data: { email: string; passwordPlain: string }) => data)
  .handler(async ({ data }) => {
    const { email, passwordPlain } = data;
    
    // Find user
    const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
    const user = result[0];
    
    if (!user) {
      throw new Error("Invalid credentials");
    }
    
    // Verify password
    const isValid = await verifyPassword(passwordPlain, user.passwordHash);
    if (!isValid) {
      throw new Error("Invalid credentials");
    }
    
    // Create token
    const token = await createToken({ sub: String(user.id), email: user.email, role: user.role });
    
    // Set cookie
    setCookie(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env['NODE_ENV'] === "production",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
      sameSite: "lax"
    });
    
    return { success: true };
  });

export const logoutFn = createServerFn({ method: "POST" }).handler(async () => {
  deleteCookie(COOKIE_NAME, { path: "/" });
  return { success: true };
});

export const getSessionFn = createServerFn({ method: "GET" }).handler(async () => {
  const token = getCookie(COOKIE_NAME);
  if (!token) return null;
  
  const payload = await verifyToken(token);
  if (!payload) return null;
  
  return {
    id: payload.sub,
    email: payload['email'] as string,
    role: payload['role'] as string,
  };
});
