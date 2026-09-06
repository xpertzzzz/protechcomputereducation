import { c as formatDate } from "./brand-DdQD3q0T.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Star } from "../_libs/lucide-react.mjs";
import { c as SiteShell, i as PageHero, m as usePublicTestimonials, o as Reveal, r as EmptyState } from "./pieces-l00FVp0i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-DqNiX6dF.js
var import_jsx_runtime = require_jsx_runtime();
function TestimonialsPage() {
	const { data: items = [], isLoading, isError } = usePublicTestimonials();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Testimonials",
		title: "Student experiences, in their own words.",
		lead: "Every testimonial on this page is published by the institute from a real student. Nothing here is written on their behalf."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "shell py-12",
		children: isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: "We couldn't load testimonials",
			body: "Please refresh the page, or call the institute on 7008414704."
		}) : isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-px",
			children: [
				0,
				1,
				2
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 animate-pulse bg-surface" }, i))
		}) : items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: "No testimonials published yet",
			body: "As students complete their courses and share their experience, their words will be published here.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/courses",
				className: "inline-flex items-center border border-foreground bg-foreground px-5 py-3 text-sm text-primary-foreground",
				children: "Explore courses"
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: items.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 4 * .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "grid gap-6 border-b border-border py-12 md:grid-cols-[16rem_1fr] md:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "flex items-start gap-4",
						children: [t.photo_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: t.photo_url,
							alt: t.student_name,
							loading: "lazy",
							className: "h-14 w-14 shrink-0 rounded-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "grid h-14 w-14 shrink-0 place-items-center rounded-full bg-surface-2 font-display text-lg",
							children: t.student_name.charAt(0)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-medium",
									children: t.student_name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: t.course_name ?? "Student"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex gap-0.5",
									"aria-label": `${t.rating} out of 5`,
									children: Array.from({ length: t.rating }).map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-teal text-teal" }, s))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-mono text-[0.65rem] text-muted-foreground",
									children: formatDate(t.given_on)
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "font-display text-xl leading-[1.45] tracking-tight sm:text-2xl",
						children: [
							"“",
							t.content,
							"”"
						]
					})]
				})
			}, t.id))
		})
	})] });
}
//#endregion
export { TestimonialsPage as component };
