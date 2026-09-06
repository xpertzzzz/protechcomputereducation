import { l as formatINR } from "./brand-DdQD3q0T.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { E as CreditCard, N as BookOpen, P as ArrowUpRight, a as TrendingUp, c as Settings, k as CirclePlus, r as Users, u as MessageSquare, y as LayoutDashboard } from "../_libs/lucide-react.mjs";
import { i as getDashboardStatsFn } from "./admin-BQ-P9tzG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-Ox64eMsH.js
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
	const currentDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 animate-in fade-in duration-500 pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-2xl bg-gradient-to-r from-cobalt to-teal p-8 text-white shadow-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -left-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 mb-4 text-xs font-medium backdrop-blur-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentDate })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-3xl font-bold tracking-tight sm:text-4xl",
								children: "Welcome back, Admin!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-white/80",
								children: "Here's what's happening at Protech Computer Education today. Review your latest enrollments, courses, and revenue."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shrink-0 flex gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/admin/courses",
								className: "inline-flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlus, { className: "h-4 w-4" }), " Add Course"]
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						title: "Total Students",
						value: isLoading ? "..." : stats?.totalStudents,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5 text-blue-500" }),
						trend: "+12% this month",
						trendUp: true,
						bgClass: "bg-blue-50"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						title: "Active Courses",
						value: isLoading ? "..." : stats?.totalCourses,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-5 w-5 text-indigo-500" }),
						trend: "3 new added",
						trendUp: true,
						bgClass: "bg-indigo-50"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						title: "New Enquiries",
						value: isLoading ? "..." : stats?.newEnquiries,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-5 w-5 text-amber-500" }),
						trend: "Requires attention",
						trendUp: false,
						bgClass: "bg-amber-50"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						title: "Total Revenue",
						value: isLoading ? "..." : formatINR(stats?.totalRevenue),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-5 w-5 text-emerald-500" }),
						trend: "+8% from last month",
						trendUp: true,
						bgClass: "bg-emerald-50"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-1 space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: "Quick Actions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionLink, {
									to: "/admin/students",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" }),
									label: "Manage Students"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionLink, {
									to: "/admin/enquiries",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4" }),
									label: "View Enquiries"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionLink, {
									to: "/admin/payments",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4" }),
									label: "Record Payment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionLink, {
									to: "/admin/settings",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-4 w-4" }),
									label: "System Settings"
								})
							]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] flex flex-col justify-center items-center min-h-[300px] relative overflow-hidden group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-surface to-surface-2 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cobalt/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-8 w-8 text-cobalt" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold",
								children: "Growth Analytics"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground max-w-sm mx-auto",
								children: "Detailed charts and student enrollment trends will appear here as more data is collected."
							})
						]
					})]
				})]
			})
		]
	});
}
function StatCard({ title, value, icon, trend, trendUp, bgClass }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-xl hover:border-cobalt/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-semibold text-muted-foreground",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `flex h-10 w-10 items-center justify-center rounded-xl ${bgClass}`,
				children: icon
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-3xl font-display font-bold text-foreground",
				children: value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex items-center gap-1.5 text-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: trendUp ? "text-emerald-600 font-medium" : "text-amber-600 font-medium",
					children: trend
				})
			})]
		})]
	});
}
function QuickActionLink({ to, icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group flex items-center justify-between rounded-xl p-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-8 w-8 items-center justify-center rounded-lg bg-surface group-hover:bg-card border border-transparent group-hover:border-border transition-colors",
				children: icon
			}), label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" })]
	});
}
//#endregion
export { AdminDashboard as component };
