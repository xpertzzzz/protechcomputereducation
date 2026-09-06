import { n as COURSE_CATEGORIES } from "./brand-DdQD3q0T.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as SiteShell, i as PageHero, o as Reveal, s as SectionHead } from "./pieces-dZJcImtG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-QLtZjY1h.js
var import_jsx_runtime = require_jsx_runtime();
function Block({ index, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 border-t border-border py-14 md:grid-cols-[8rem_1fr] md:gap-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow",
			children: index
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-3 font-display text-xl tracking-tight md:sticky md:top-28",
			children: title
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-2xl space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground",
			children
		})]
	}) });
}
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			title: "About Protech",
			lead: "A dedicated computer education institute based in Bolgarh, Khordha, driven by the belief that high-quality technology education should be accessible locally.",
			breadcrumbs: [{
				label: "Home",
				path: "/"
			}, { label: "About Us" }],
			bgImages: [
				"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
				"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
				"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell pb-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
					index: "01",
					title: "Our Story",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Protech Computer Education was created around a simple idea: technology is best learned by doing it. The institute teaches the same fundamentals that underpin professional software work — markup and layout, programming languages, databases, and the emerging tools built on top of them." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The institute operates from Bolgarh Bus Stand in Khordha, Odisha, and is open to learners starting from the very beginning as well as those extending skills they already have." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
					index: "02",
					title: "Our Approach",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Every course follows the same rhythm — ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: "learn, practice, build, grow"
						}),
						". Concepts are introduced in class, applied immediately in exercises, and consolidated into a project that the student completes themselves."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Courses are organised by level so that progress is honest: Beginner courses assume nothing, Intermediate courses assume the fundamentals, and Advanced courses assume working ability." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
					index: "03",
					title: "What We Teach",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The curriculum is organised into four tracks:" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3",
							children: COURSE_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-baseline gap-3 border-b border-border pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-1 w-1 shrink-0 translate-y-[-2px] bg-teal",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: c
								})]
							}, c))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Alongside these, highlight subjects such as computer fundamentals, software engineering, cyber security, data structures, networking, cloud computing and computer graphics provide the theoretical grounding." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
					index: "04",
					title: "Practical Learning",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Classroom time is spent at the machine. Students write code, break it, read the errors and fix them — because debugging is the skill that separates people who have read about programming from people who can do it." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Assignments are graded on working output, not on notes copied from a board." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
					index: "05",
					title: "Technology & Programming",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Programming is taught as a progression rather than a list of languages. C establishes memory and control flow; C++ introduces object-oriented design; Java extends that into enterprise-scale structure; Python and R open the door to automation, data and AI." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Web technologies run in parallel — HTML, CSS and JavaScript on the front, PHP and MySQL behind it — so students understand a full application, not just one half of it." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
					index: "06",
					title: "Projects & Internship Exposure",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Each course concludes with practical work: mini projects during the course and a larger practical programming project at the end. Internship exposure is included as part of the highlight subjects so students experience how the work is organised outside a classroom." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For details on current project and internship arrangements, please contact the institute directly." })]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "shell pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Next step",
				title: "Find the course that fits where you are."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/courses",
					className: "inline-flex items-center border border-foreground bg-foreground px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground",
					children: "Explore Courses"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "inline-flex items-center border border-border px-6 py-3.5 text-sm transition-colors hover:border-foreground",
					children: "Talk to Protech"
				})]
			})]
		})
	] });
}
//#endregion
export { AboutPage as component };
