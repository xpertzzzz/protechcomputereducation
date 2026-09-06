import { M as redirect, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getSessionFn } from "./auth-functions-WtFVrDno.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-QFJjoO9U.js
var $$splitComponentImporter = () => import("./admin-DMS4hbyi.mjs");
var Route = createFileRoute("/admin")({
	beforeLoad: async () => {
		const session = await getSessionFn();
		if (!session) throw redirect({ to: "/login" });
		return { session };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
