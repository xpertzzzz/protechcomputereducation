import { f as Outlet, g as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as logoutFn } from "./functions-DE_HuUbQ.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { E as CreditCard, N as BookOpen, b as Image, c as Settings, d as MessageCircle, h as LogOut, r as Users, u as MessageSquare, y as LayoutDashboard } from "../_libs/lucide-react.mjs";
import { t as Route } from "./admin-BXLLXtlh.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-H1M3rX-m.js
var import_jsx_runtime = require_jsx_runtime();
function AdminLayout() {
	const { session } = Route.useRouteContext();
	const router = useRouter();
	const handleLogout = async () => {
		await logoutFn();
		toast.success("Logged out successfully");
		router.navigate({ to: "/login" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "w-64 border-r border-border bg-card flex flex-col hidden md:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-16 flex items-center px-6 border-b border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display font-medium",
						children: "Protech Admin"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex-1 overflow-y-auto py-4 px-3 space-y-1",
					children: [
						{
							name: "Dashboard",
							href: "/admin",
							icon: LayoutDashboard
						},
						{
							name: "Students",
							href: "/admin/students",
							icon: Users
						},
						{
							name: "Courses",
							href: "/admin/courses",
							icon: BookOpen
						},
						{
							name: "Payments",
							href: "/admin/payments",
							icon: CreditCard
						},
						{
							name: "Enquiries",
							href: "/admin/enquiries",
							icon: MessageSquare
						},
						{
							name: "Gallery",
							href: "/admin/gallery",
							icon: Image
						},
						{
							name: "Testimonials",
							href: "/admin/testimonials",
							icon: MessageCircle
						},
						{
							name: "Settings",
							href: "/admin/settings",
							icon: Settings
						}
					].map((item) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.href,
							className: "flex items-center px-3 py-2.5 text-sm font-medium rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors data-[status=active]:bg-foreground data-[status=active]:text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mr-3 h-4 w-4" }), item.name]
						}, item.name);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 border-t border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center px-3 py-2 mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3 font-medium text-xs",
							children: session.email?.[0]?.toUpperCase() || "A"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 truncate",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium truncate",
								children: session.email
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground truncate",
								children: session.role
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleLogout,
						className: "flex w-full items-center px-3 py-2.5 text-sm font-medium rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-3 h-4 w-4" }), "Sign Out"]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "flex-1 flex flex-col min-h-0 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "h-16 flex items-center px-4 border-b border-border bg-card md:hidden shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display font-medium",
					children: "Protech Admin"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto p-6 md:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})]
		})]
	});
}
//#endregion
export { AdminLayout as component };
