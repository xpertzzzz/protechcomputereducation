import { r as __toESM } from "../_runtime.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as loginFn } from "./functions-BQXZ2nMb.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { m as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-BDO8Yh10.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const [username, setUsername] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const handleLogin = async (e) => {
		e.preventDefault();
		setPending(true);
		try {
			await loginFn({ data: {
				username,
				password
			} });
			toast.success("Logged in successfully");
			navigate({ to: "/admin" });
		} catch (err) {
			toast.error(err.message || "Invalid credentials");
		} finally {
			setPending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl tracking-tight text-foreground",
					children: "Admin Login"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Sign in to manage Protech Computer Education"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleLogin,
				className: "mt-8 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "eyebrow block",
						htmlFor: "username",
						children: "Username"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "username",
						type: "text",
						required: true,
						value: username,
						onChange: (e) => setUsername(e.target.value),
						className: "mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-cobalt",
						placeholder: "admin"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "eyebrow block",
						htmlFor: "password",
						children: "Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "password",
						type: "password",
						required: true,
						value: password,
						onChange: (e) => setPassword(e.target.value),
						className: "mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-teal",
						placeholder: "••••••••"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: pending,
						className: "w-full inline-flex justify-center items-center gap-2 bg-cobalt px-4 py-3 text-sm font-medium text-primary-foreground rounded shadow-sm transition-colors hover:bg-cobalt/90 disabled:opacity-50",
						children: pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Sign In"
					})
				]
			})]
		})
	});
}
//#endregion
export { LoginPage as component };
