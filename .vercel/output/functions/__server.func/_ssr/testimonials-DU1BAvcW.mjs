import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { s as Star } from "../_libs/lucide-react.mjs";
import { c as SiteShell, i as PageHero, m as usePublicTestimonials, o as Reveal, r as EmptyState } from "./pieces-dZJcImtG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-DU1BAvcW.js
var import_jsx_runtime = require_jsx_runtime();
function TestimonialsPage() {
	const { data: items = [], isLoading, isError } = usePublicTestimonials();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Student Experiences",
		lead: "Read directly from students who have studied here. None of these words are written on their behalf.",
		breadcrumbs: [{
			label: "Home",
			path: "/"
		}, { label: "Testimonials" }],
		bgImages: [
			"https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
		]
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
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12",
			children: items.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 6 * .08,
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative flex h-full flex-col justify-between rounded-3xl bg-card p-8 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.05)] border border-border/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-cobalt/20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cobalt to-teal origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-4 right-6 text-border/40 font-serif text-8xl leading-none select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-cobalt/10",
							children: "\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1 mb-6 text-[#F59E0B]",
								children: Array.from({ length: t.rating }).map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, s))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[0.95rem] text-foreground/80 leading-relaxed italic font-medium",
								children: [
									"\"",
									t.content,
									"\""
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-4 pt-6",
							children: [t.photo_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: t.photo_url,
								alt: t.student_name,
								loading: "lazy",
								className: "h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-background border border-border/50"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cobalt/10 font-display text-lg font-bold text-cobalt ring-2 ring-background border border-cobalt/20",
								children: t.student_name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-bold text-foreground",
									children: t.student_name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 truncate text-[0.65rem] font-bold text-cobalt uppercase tracking-wider",
									children: t.course_name ?? "Student Review"
								})]
							})]
						})
					]
				})
			}, t.id))
		})
	})] });
}
//#endregion
export { TestimonialsPage as component };
