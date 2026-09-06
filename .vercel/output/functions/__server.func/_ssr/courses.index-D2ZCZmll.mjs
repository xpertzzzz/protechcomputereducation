import { r as __toESM } from "../_runtime.mjs";
import { i as COURSE_LEVELS, n as COURSE_CATEGORIES } from "./brand-DdQD3q0T.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { P as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { c as SiteShell, f as usePublicCourses, i as PageHero, r as EmptyState, u as cn } from "./pieces-dZJcImtG.mjs";
import { t as Route } from "./courses.index-BMjPgiEe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses.index-D2ZCZmll.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Chip({ active, children, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-pressed": active,
		className: cn("border px-4 py-2 text-xs tracking-wide transition-colors", active ? "border-foreground bg-foreground text-primary-foreground" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"),
		children
	});
}
function CoursesPage() {
	const search = Route.useSearch();
	const navigate = useNavigate({ from: "/courses/" });
	const { data: courses = [], isLoading, isError } = usePublicCourses();
	const technologies = (0, import_react.useMemo)(() => {
		const set = /* @__PURE__ */ new Set();
		courses.forEach((c) => c.technologies.forEach((t) => set.add(t)));
		return Array.from(set).sort();
	}, [courses]);
	const filtered = courses.filter((c) => (!search.category || c.category === search.category) && (!search.level || c.level === search.level) && (!search.tech || c.technologies.includes(search.tech)));
	const set = (patch) => navigate({
		search: ((prev) => ({
			...prev,
			...patch
		})),
		replace: true
	});
	const activeCount = [
		search.category,
		search.level,
		search.tech
	].filter(Boolean).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			title: "Our Courses",
			lead: "Structured programmes across website designing, website development, programming excellence and AI. Filter to find where you belong.",
			breadcrumbs: [{
				label: "Home",
				path: "/"
			}, { label: "Courses" }],
			bgImages: [
				"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
				"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
				"https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "shell pt-16 pb-8 border-b border-border/50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-cobalt",
						children: "Government Recognized Certification"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-bold tracking-tight",
						children: "NIELIT O & A Level Courses"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground max-w-2xl text-sm leading-relaxed",
						children: "Standardized IT certification programs offered by the National Institute of Electronics and Information Technology, India. These courses open doors to esteemed government and private sector jobs."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-surface to-background p-8 shadow-sm transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-cobalt/40 hover:-translate-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-teal to-cobalt origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold text-foreground",
								children: "O-Level Computer Course"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-semibold text-teal uppercase tracking-wider",
								children: "Foundation Level (Basic Diploma)"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-muted-foreground border border-border",
								children: "1 Year"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
								children: "What you'll learn"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: "IT tools and networking, web designing, Python programming, and Internet of Things (IoT)."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
								children: "Career Roles"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: "Web designer, UI designer, office automation assistant, data entry operator."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 pt-6 border-t border-border/50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								search: { course: "o-level" },
								className: "inline-flex items-center gap-2 text-sm font-semibold text-cobalt hover:text-teal transition-colors",
								children: ["Enquire for O-Level", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-surface to-background p-8 shadow-sm transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-cobalt/40 hover:-translate-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cobalt to-teal origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold text-foreground",
								children: "A-Level Computer Course"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-semibold text-cobalt uppercase tracking-wider",
								children: "Advanced Level (PGDCA Eq.)"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-muted-foreground border border-border",
								children: "1.5 - 2 Years"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
								children: "What you'll learn"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: "Advanced programming, data structures, DBMS (SQL, NoSQL), server-side scripting, and web services."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold text-foreground uppercase tracking-wider mb-1.5",
								children: "Career Roles"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: "Programmer, system analyst, IT specialist, freelance developer."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 pt-6 border-t border-border/50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								search: { course: "a-level" },
								className: "inline-flex items-center gap-2 text-sm font-semibold text-cobalt hover:text-teal transition-colors",
								children: ["Enquire for A-Level", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "shell py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 border-b border-border pb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow mr-2 w-16",
									children: "Track"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: !search.category,
									onClick: () => set({ category: void 0 }),
									children: "All"
								}),
								COURSE_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: search.category === c,
									onClick: () => set({ category: c }),
									children: c
								}, c))
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow mr-2 w-16",
									children: "Level"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: !search.level,
									onClick: () => set({ level: void 0 }),
									children: "All"
								}),
								COURSE_LEVELS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: search.level === l,
									onClick: () => set({ level: l }),
									children: l
								}, l))
							]
						}),
						technologies.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow mr-2 w-16",
									children: "Tech"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: !search.tech,
									onClick: () => set({ tech: void 0 }),
									children: "All"
								}),
								technologies.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: search.tech === t,
									onClick: () => set({ tech: t }),
									children: t
								}, t))
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: isLoading ? "Loading" : `${filtered.length} course${filtered.length === 1 ? "" : "s"}`
					}), activeCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => set({
							category: void 0,
							level: void 0,
							tech: void 0
						}),
						className: "link-underline text-xs text-muted-foreground hover:text-foreground",
						children: "Clear filters"
					})]
				}),
				isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: "We couldn't load the catalogue",
					body: "Something went wrong reaching the course list. Please refresh, or call the institute on 7008414704."
				}) : isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-px",
					children: [
						0,
						1,
						2,
						3,
						4
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 animate-pulse bg-surface" }, i))
				}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: "No courses match these filters",
					body: "Try clearing a filter, or browse the full catalogue to see everything currently offered."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						children: filtered.map((course, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
							layout: true,
							initial: {
								opacity: 0,
								y: 14
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: { opacity: 0 },
							transition: {
								duration: .4,
								delay: Math.min(i * .03, .25)
							},
							className: "flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex flex-col justify-between w-full rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-cobalt/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow text-cobalt mb-3",
										children: course.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/courses/$slug",
										params: { slug: course.slug },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-cobalt",
											children: course.name
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3",
										children: course.short_description
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										search: { course: course.slug },
										className: "flex-1 text-center bg-cobalt text-primary-foreground text-sm font-semibold py-2.5 rounded shadow-sm hover:bg-cobalt/90 hover:shadow transition-all",
										children: "Enroll Now"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/courses/$slug",
										params: { slug: course.slug },
										className: "p-2.5 rounded border border-border group-hover:border-cobalt/30 group-hover:bg-cobalt/5 transition-colors",
										"aria-label": "View course details",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground group-hover:text-cobalt transition-colors" })
									})]
								})]
							})
						}, course.id))
					})
				})
			]
		})
	] });
}
//#endregion
export { CoursesPage as component };
