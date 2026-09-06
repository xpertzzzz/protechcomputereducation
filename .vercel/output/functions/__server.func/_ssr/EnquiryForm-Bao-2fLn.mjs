import { r as __toESM } from "../_runtime.mjs";
import { d as whatsappLink, s as enquiryWhatsAppMessage } from "./brand-DdQD3q0T.mjs";
import { u as submitEnquiryFn } from "./functions-DE_HuUbQ.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { P as ArrowUpRight, v as LoaderCircle } from "../_libs/lucide-react.mjs";
import { f as usePublicCourses, h as useSettings } from "./pieces-dZJcImtG.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as unionType, n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/EnquiryForm-Bao-2fLn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your full name").max(120),
	mobile: stringType().trim().regex(/^[0-9+\-\s]{10,15}$/, "Enter a valid mobile number"),
	email: unionType([stringType().trim().email("Enter a valid email").max(200), literalType("")]),
	date_of_birth: stringType().optional(),
	course: stringType().optional(),
	message: stringType().trim().max(2e3).optional()
});
function EnquiryForm({ presetCourse, initialCourse, compact = false }) {
	const { settings } = useSettings();
	const { data: courses = [] } = usePublicCourses();
	const [errors, setErrors] = (0, import_react.useState)({});
	const [pending, setPending] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	async function onSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const fd = new FormData(form);
		const raw = {
			name: String(fd.get("name") ?? ""),
			mobile: String(fd.get("mobile") ?? ""),
			email: String(fd.get("email") ?? ""),
			date_of_birth: String(fd.get("date_of_birth") ?? ""),
			course: presetCourse?.id ?? String(fd.get("course") ?? ""),
			message: String(fd.get("message") ?? "")
		};
		const parsed = schema.safeParse(raw);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (!next[key]) next[key] = issue.message;
			}
			setErrors(next);
			toast.error("Please check the highlighted fields.");
			return;
		}
		setErrors({});
		setPending(true);
		const selected = courses.find((c) => c.id === parsed.data.course);
		const courseName = presetCourse?.name ?? selected?.name ?? null;
		try {
			await submitEnquiryFn({ data: {
				name: parsed.data.name,
				mobile: parsed.data.mobile,
				email: parsed.data.email || null,
				date_of_birth: parsed.data.date_of_birth || null,
				course_id: presetCourse?.id ?? selected?.id ?? null,
				course_name: courseName,
				message: parsed.data.message || null
			} });
		} catch (error) {
			setPending(false);
			toast.error("We couldn't save your enquiry. Please call 7008414704 instead.");
			return;
		}
		setPending(false);
		setDone(true);
		toast.success("Enquiry received. Opening WhatsApp…");
		form.reset();
		const link = whatsappLink(settings.whatsapp_number, enquiryWhatsAppMessage({
			name: parsed.data.name,
			mobile: parsed.data.mobile,
			email: parsed.data.email,
			course: courseName,
			message: parsed.data.message ?? ""
		}));
		window.open(link, "_blank", "noopener,noreferrer");
	}
	const fieldClass = "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-teal";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: compact ? "grid gap-6" : "grid gap-6 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Full name",
					error: errors.name,
					htmlFor: "name",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "name",
						name: "name",
						required: true,
						className: fieldClass,
						placeholder: "Your name"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Mobile number",
					error: errors.mobile,
					htmlFor: "mobile",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "mobile",
						name: "mobile",
						inputMode: "tel",
						required: true,
						className: fieldClass,
						placeholder: "10-digit number"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					error: errors.email,
					htmlFor: "email",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "email",
						name: "email",
						type: "email",
						className: fieldClass,
						placeholder: "you@example.com"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Date of birth (optional)",
					error: errors.date_of_birth,
					htmlFor: "dob",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "dob",
						name: "date_of_birth",
						type: "date",
						className: fieldClass
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: compact ? "" : "sm:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Course interested in",
						htmlFor: "course",
						children: presetCourse ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b border-border py-3 text-sm font-medium",
							children: presetCourse.name
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "course",
							name: "course",
							className: fieldClass,
							defaultValue: courses.find((c) => c.slug === initialCourse)?.id ?? "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select a course"
							}), courses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: c.id,
								children: [
									c.name,
									" — ",
									c.category
								]
							}, c.id))]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: compact ? "" : "sm:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Message",
						error: errors.message,
						htmlFor: "message",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "message",
							name: "message",
							rows: 3,
							className: `${fieldClass} resize-none`,
							placeholder: "Tell us what you would like to learn"
						})
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-9 flex flex-wrap items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				disabled: pending,
				className: "group inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground disabled:opacity-60",
				children: [
					pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : null,
					"Send Enquiry",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: done ? "Saved. Your enquiry is with the institute." : "Your enquiry is saved with the institute before WhatsApp opens."
			})]
		})]
	});
}
function Field({ label, htmlFor, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor,
			className: "eyebrow block",
			children: label
		}),
		children,
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			role: "alert",
			className: "mt-2 text-xs text-destructive",
			children: error
		})
	] });
}
//#endregion
export { EnquiryForm as t };
