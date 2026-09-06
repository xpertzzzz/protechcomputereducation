import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-DoGJar5W.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-functions-WtFVrDno.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("96253f2500ce9c4e55d835db3a759f8acd07144c4f97c20853e145d2d5e590ce"));
var logoutFn = createServerFn({ method: "POST" }).handler(createSsrRpc("49dcbcd0215da2532db4137c92042c18d89b52565d8e359085b1a1ae212b6985"));
var getSessionFn = createServerFn({ method: "GET" }).handler(createSsrRpc("49c0c8f533b2c8e8f74dc4a7fff03a3f1012b67bab2317158abef09ecbd101e2"));
//#endregion
export { getSessionFn as n, logoutFn as r, createSsrRpc as t };
