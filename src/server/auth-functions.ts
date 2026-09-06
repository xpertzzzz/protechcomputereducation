
import { verifyPassword, createToken, verifyToken } from "@/server/auth";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

const COOKIE_NAME = "protech_session";

export const loginFn = async (data: { email: string; passwordPlain: string }, req: any, res: any) => {
    const { email, passwordPlain } = data;
    
    const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
    const user = result[0];
    
    if (!user) throw new Error("Invalid credentials");
    
    const isValid = await verifyPassword(passwordPlain, user.passwordHash);
    if (!isValid) throw new Error("Invalid credentials");
    
    const token = await createToken({ sub: String(user.id), email: user.email, role: user.role });
    
    res.cookie(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env['NODE_ENV'] === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 1000,
      sameSite: "lax"
    });
    
    return { success: true };
};

export const logoutFn = async (req: any, res: any) => {
  res.clearCookie(COOKIE_NAME, { path: "/" });
  return { success: true };
};

export const getSessionFn = async (req: any) => {
  const token = req.cookies[COOKIE_NAME];
  if (!token) return null;
  
  const payload = await verifyToken(token);
  if (!payload) return null;
  
  return {
    id: payload.sub,
    email: payload['email'] as string,
    role: payload['role'] as string,
  };
};
