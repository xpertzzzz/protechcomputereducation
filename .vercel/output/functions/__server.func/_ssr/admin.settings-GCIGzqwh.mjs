import { s as getSettingsFn } from "./functions-DE_HuUbQ.mjs";
import { r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.settings-GCIGzqwh.js
var import_jsx_runtime = require_jsx_runtime();
function AdminSettings() {
	const { data: settings, isLoading } = useQuery({
		queryKey: ["admin", "settings"],
		queryFn: () => getSettingsFn()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-display font-medium tracking-tight",
				children: "Settings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2",
				children: "Manage your institute details and website configuration."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "bg-foreground text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition-colors",
				children: "Save Settings"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-md border border-border bg-card p-6",
			children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-muted-foreground",
				children: "Loading..."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				className: "space-y-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-medium",
								children: "Institute Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								defaultValue: settings?.institute_name,
								className: "w-full border-b border-border bg-transparent py-2 outline-none focus:border-teal"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-medium",
								children: "Tagline"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								defaultValue: settings?.tagline,
								className: "w-full border-b border-border bg-transparent py-2 outline-none focus:border-teal"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-medium",
								children: "Primary Phone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								defaultValue: settings?.phone_primary,
								className: "w-full border-b border-border bg-transparent py-2 outline-none focus:border-teal"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-medium",
								children: "WhatsApp Number"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								defaultValue: settings?.whatsapp_number,
								className: "w-full border-b border-border bg-transparent py-2 outline-none focus:border-teal"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 md:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-medium",
								children: "Address Line"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								defaultValue: settings?.address_line,
								className: "w-full border-b border-border bg-transparent py-2 outline-none focus:border-teal"
							})]
						})
					]
				})
			})
		})]
	});
}
//#endregion
export { AdminSettings as component };
