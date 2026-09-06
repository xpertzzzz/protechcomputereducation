import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { D as ArrowLeft } from "../_libs/lucide-react.mjs";
import { c as SiteShell, d as useCourseBySlug, o as Reveal, r as EmptyState } from "./pieces-l00FVp0i.mjs";
import { t as EnquiryForm } from "./EnquiryForm-DKuKoD3n.mjs";
import { t as Route } from "./courses._slug-D5WVz4oW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses._slug-GU2ynzIl.js
var import_jsx_runtime = require_jsx_runtime();
function List({ title, items }) {
	if (!items?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-border py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "eyebrow",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 grid gap-3 sm:grid-cols-2",
			children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-baseline gap-3 border-b border-border pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[0.65rem] text-muted-foreground",
					children: String(i + 1).padStart(2, "0")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm leading-relaxed",
					children: item
				})]
			}, item))
		})]
	});
}
function CourseDetail() {
	const { slug } = Route.useParams();
	const { data: course, isLoading, isError } = useCourseBySlug(slug);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-2/3 animate-pulse bg-surface" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-40 animate-pulse bg-surface" })]
	}) });
	if (isError || !course) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "shell py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: "This course isn't available",
			body: "It may have been renamed or unpublished. Browse the catalogue to see everything currently offered.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/courses",
				className: "inline-flex items-center border border-foreground bg-foreground px-5 py-3 text-sm text-primary-foreground",
				children: "Back to courses"
			})
		})
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-b border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 grid-field opacity-50",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell relative py-12 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/courses",
					className: "group inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" }), "All courses"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow mt-8 block",
						children: course.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl",
						children: course.name
					}),
					course.short_description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: course.short_description
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4",
					children: [
						["Level", course.level],
						["Track", course.category],
						["Technologies", String(course.technologies.length || "—")]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "eyebrow",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 text-sm font-medium",
						children: v
					})] }, k))
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell grid gap-16 py-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			course.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-12 overflow-hidden bg-surface-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: course.image_url,
					alt: course.name,
					loading: "lazy",
					className: "w-full object-cover"
				})
			}),
			course.full_description && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "eyebrow",
					children: "Overview"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground",
					children: course.full_description
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
				title: "What you'll learn — syllabus",
				items: course.syllabus
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
				title: "Practical projects",
				items: course.projects
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
				title: "Prerequisites",
				items: course.prerequisites
			}),
			course.technologies.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "eyebrow",
					children: "Technologies"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: course.technologies.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "border border-border px-3 py-1.5 font-mono text-xs",
						children: t
					}, t))
				})]
			}),
			course.audience && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-y border-border py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "eyebrow",
					children: "Who this course is for"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground",
					children: course.audience
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "lg:sticky lg:top-28 lg:self-start",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-border bg-card p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Admissions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-2xl tracking-tight",
						children: "Enquire About This Course"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: "Your enquiry is saved with the institute first, then WhatsApp opens with the details filled in."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {
							presetCourse: course,
							compact: true
						})
					})
				]
			})
		})]
	})] });
}
//#endregion
export { CourseDetail as component };
