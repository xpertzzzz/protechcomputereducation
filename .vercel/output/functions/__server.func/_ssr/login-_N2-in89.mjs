import { r as __toESM } from "../_runtime.mjs";
import { o as LOGO_URL } from "./brand-DdQD3q0T.mjs";
import { g as Link, v as useNavigate, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as loginFn } from "./functions-DE_HuUbQ.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as Eye, F as ArrowLeft, _ as Lock, g as LogIn, i as User, r as Users, v as LoaderCircle, w as EyeOff, x as GraduationCap } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-_N2-in89.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const [username, setUsername] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [remember, setRemember] = (0, import_react.useState)(false);
	const [pending, setPending] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const router = useRouter();
	const handleLogin = async (e) => {
		e.preventDefault();
		setPending(true);
		try {
			await loginFn({ data: {
				username,
				password
			} });
			toast.success("Logged in successfully");
			await router.invalidate();
			navigate({ to: "/admin" });
		} catch (err) {
			toast.error(err.message || "Invalid credentials");
		} finally {
			setPending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-surface p-4 sm:p-6 lg:p-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-full max-w-[1000px] overflow-hidden rounded-[2rem] bg-card shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden w-[45%] flex-col justify-between bg-gradient-to-br from-cobalt to-teal p-10 text-white lg:flex relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold backdrop-blur-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }), " ADMIN ACCESS"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-12 font-display text-4xl font-bold leading-[1.1] tracking-tight",
								children: [
									"Welcome to ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									" Admin Portal"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm leading-relaxed text-white/80",
								children: "Manage students, courses, certificates, and all educational operations from your centralized dashboard."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 flex flex-col gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-md border border-white/10 transition-colors hover:bg-white/20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-bold",
										children: "Student Management"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-white/70 mt-0.5",
										children: "Admissions, records & progress tracking"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-md border border-white/10 transition-colors hover:bg-white/20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-bold",
										children: "Course Administration"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-white/70 mt-0.5",
										children: "Manage courses & curriculum"
									})] })]
								})]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-full flex-col justify-center bg-card p-8 sm:p-12 lg:w-[55%] lg:p-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 text-center flex flex-col items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: LOGO_URL,
								alt: "Protech Logo",
								className: "h-10 mb-8"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-bold tracking-tight text-foreground w-full text-left",
								children: "Sign In"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground w-full text-left",
								children: "Enter your credentials to access the dashboard"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleLogin,
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-xs font-semibold text-foreground",
								htmlFor: "username",
								children: "Username"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4 text-muted-foreground" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "username",
									type: "text",
									required: true,
									value: username,
									onChange: (e) => setUsername(e.target.value),
									className: "block w-full rounded-xl border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-cobalt focus:ring-1 focus:ring-cobalt",
									placeholder: "Enter your username"
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-xs font-semibold text-foreground",
								htmlFor: "password",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4 text-muted-foreground" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "password",
										type: showPassword ? "text" : "password",
										required: true,
										value: password,
										onChange: (e) => setPassword(e.target.value),
										className: "block w-full rounded-xl border border-border bg-surface py-2.5 pl-10 pr-10 text-sm text-foreground outline-none transition-colors focus:border-cobalt focus:ring-1 focus:ring-cobalt",
										placeholder: "Enter your password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setShowPassword(!showPassword),
										className: "absolute inset-y-0 right-0 flex items-center pr-3.5 text-muted-foreground hover:text-foreground",
										children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "remember",
									type: "checkbox",
									checked: remember,
									onChange: (e) => setRemember(e.target.checked),
									className: "h-4 w-4 rounded border-border text-cobalt focus:ring-cobalt bg-surface"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "remember",
									className: "ml-2 block text-sm text-muted-foreground",
									children: "Remember me"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: pending,
								className: "mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-cobalt py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-cobalt/90 disabled:opacity-50",
								children: pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-4 w-4" }), " SIGN IN"] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 flex items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full border-t border-border" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative flex justify-center text-xs",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "bg-card px-2 uppercase text-muted-foreground font-semibold",
										children: "Or"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-transparent py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to Website"]
							})
						]
					})]
				})
			})]
		})
	});
}
//#endregion
export { LoginPage as component };
