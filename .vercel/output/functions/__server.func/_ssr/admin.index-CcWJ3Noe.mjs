import { l as formatINR } from "./brand-DdQD3q0T.mjs";
import { r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { T as BookOpen, c as MessageSquare, r as Users, y as CreditCard } from "../_libs/lucide-react.mjs";
import { i as getDashboardStatsFn } from "./admin-DmfTHYay.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-CcWJ3Noe.js
var import_jsx_runtime = require_jsx_runtime();
function AdminDashboard() {
	const { data: stats, isLoading } = useQuery({
		queryKey: [
			"admin",
			"dashboard",
			"stats"
		],
		queryFn: () => getDashboardStatsFn()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl font-display font-medium tracking-tight",
			children: "Dashboard"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground mt-2",
			children: "Welcome to the Protech Computer Education administration panel."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					title: "Total Students",
					value: isLoading ? "..." : stats?.totalStudents,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-muted-foreground" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					title: "Active Courses",
					value: isLoading ? "..." : stats?.totalCourses,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-4 w-4 text-muted-foreground" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					title: "New Enquiries",
					value: isLoading ? "..." : stats?.newEnquiries,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4 text-muted-foreground" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					title: "Total Revenue",
					value: isLoading ? "..." : formatINR(stats?.totalRevenue),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4 text-muted-foreground" })
				})
			]
		})]
	});
}
function StatCard({ title, value, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-6 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-row items-center justify-between space-y-0 pb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "tracking-tight text-sm font-medium",
				children: title
			}), icon]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-2xl font-bold",
			children: value
		}) })]
	});
}
//#endregion
export { AdminDashboard as component };
