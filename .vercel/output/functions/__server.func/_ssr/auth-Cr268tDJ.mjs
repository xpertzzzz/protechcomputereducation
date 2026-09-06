import { a as setCookie$1, n as getCookie, t as deleteCookie$1 } from "./request-response-DKbRKVw6.mjs";
import { n as jwtVerify, t as SignJWT } from "../_libs/jose.mjs";
import { t as bcryptjs_default } from "../_libs/bcryptjs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-Cr268tDJ.js
var JWT_SECRET = new TextEncoder().encode(process.env["JWT_SECRET_KEY"] || "super-secret-protech-admin-key-for-dev");
var ADMIN_USERNAME = process.env["ADMIN_USERNAME"] || "admin";
var ADMIN_PASSWORD = process.env["ADMIN_PASSWORD"] || "admin123";
function verifyCredentials(username, password) {
	return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}
async function createAdminSession() {
	const jwt = await new SignJWT({ role: "admin" }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("24h").sign(JWT_SECRET);
	setCookie$1("admin_token", jwt, {
		httpOnly: true,
		secure: true,
		sameSite: "lax",
		path: "/",
		maxAge: 86400
	});
}
async function verifyAdminSession() {
	const token = getCookie("admin_token");
	if (!token) return false;
	try {
		const { payload } = await jwtVerify(token, JWT_SECRET);
		return payload["role"] === "admin";
	} catch (error) {
		return false;
	}
}
function clearAdminSession() {
	deleteCookie$1("admin_token", { path: "/" });
}
async function verifyPassword(passwordPlain, passwordHash) {
	return bcryptjs_default.compare(passwordPlain, passwordHash);
}
async function createToken(payload) {
	return new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("24h").sign(JWT_SECRET);
}
async function verifyToken(token) {
	try {
		const { payload } = await jwtVerify(token, JWT_SECRET);
		return payload;
	} catch (error) {
		return null;
	}
}
//#endregion
export { verifyCredentials as a, verifyAdminSession as i, createAdminSession as n, verifyPassword as o, createToken as r, verifyToken as s, clearAdminSession as t };
