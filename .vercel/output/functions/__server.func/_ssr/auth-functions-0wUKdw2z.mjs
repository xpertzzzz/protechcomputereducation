import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { a as eq } from "../_libs/drizzle-orm+postgres.mjs";
import { n as createServerRpc, r as db, u as users } from "./db-BNOqJG8A.mjs";
import { a as setCookie$1, n as getCookie, t as deleteCookie$1 } from "./request-response-DKbRKVw6.mjs";
import { o as verifyPassword, r as createToken, s as verifyToken } from "./auth-Cr268tDJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-functions-0wUKdw2z.js
var COOKIE_NAME = "protech_session";
var loginFn_createServerFn_handler = createServerRpc({
	id: "96253f2500ce9c4e55d835db3a759f8acd07144c4f97c20853e145d2d5e590ce",
	name: "loginFn",
	filename: "src/server/auth-functions.ts"
}, (opts) => loginFn.__executeServer(opts));
var loginFn = createServerFn({ method: "POST" }).validator((data) => data).handler(loginFn_createServerFn_handler, async ({ data }) => {
	const { email, passwordPlain } = data;
	const user = (await db.select().from(users).where(eq(users.email, email)).limit(1))[0];
	if (!user) throw new Error("Invalid credentials");
	if (!await verifyPassword(passwordPlain, user.passwordHash)) throw new Error("Invalid credentials");
	const token = await createToken({
		sub: String(user.id),
		email: user.email,
		role: user.role
	});
	setCookie$1(COOKIE_NAME, token, {
		httpOnly: true,
		secure: true,
		path: "/",
		maxAge: 86400,
		sameSite: "lax"
	});
	return { success: true };
});
var logoutFn_createServerFn_handler = createServerRpc({
	id: "49dcbcd0215da2532db4137c92042c18d89b52565d8e359085b1a1ae212b6985",
	name: "logoutFn",
	filename: "src/server/auth-functions.ts"
}, (opts) => logoutFn.__executeServer(opts));
var logoutFn = createServerFn({ method: "POST" }).handler(logoutFn_createServerFn_handler, async () => {
	deleteCookie$1(COOKIE_NAME, { path: "/" });
	return { success: true };
});
var getSessionFn_createServerFn_handler = createServerRpc({
	id: "49c0c8f533b2c8e8f74dc4a7fff03a3f1012b67bab2317158abef09ecbd101e2",
	name: "getSessionFn",
	filename: "src/server/auth-functions.ts"
}, (opts) => getSessionFn.__executeServer(opts));
var getSessionFn = createServerFn({ method: "GET" }).handler(getSessionFn_createServerFn_handler, async () => {
	const token = getCookie(COOKIE_NAME);
	if (!token) return null;
	const payload = await verifyToken(token);
	if (!payload) return null;
	return {
		id: payload.sub,
		email: payload["email"],
		role: payload["role"]
	};
});
//#endregion
export { getSessionFn_createServerFn_handler, loginFn_createServerFn_handler, logoutFn_createServerFn_handler };
