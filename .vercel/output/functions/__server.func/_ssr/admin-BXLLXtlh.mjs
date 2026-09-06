import { M as redirect, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as checkAuthFn } from "./functions-DE_HuUbQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BXLLXtlh.js
var $$splitComponentImporter = () => import("./admin-H1M3rX-m.mjs");
var Route = createFileRoute("/admin")({
	beforeLoad: async () => {
		const { isAuthenticated } = await checkAuthFn();
		if (!isAuthenticated) throw redirect({ to: "/login" });
		return { session: {
			email: "admin",
			role: "Administrator"
		} };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
