import { r as __toESM } from "../_runtime.mjs";
import { n as COURSE_CATEGORIES, r as COURSE_HIGHLIGHTS, t as AI_TRACK } from "./brand-DdQD3q0T.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, i as useTransform, n as useReducedMotion, o as motion } from "../_libs/framer-motion+[...].mjs";
import { E as ArrowUpRight, _ as Globe, a as Star, b as CodeXml, i as Terminal, t as Zap, w as BrainCircuit } from "../_libs/lucide-react.mjs";
import { c as SiteShell, f as usePublicCourses, l as WordReveal, m as usePublicTestimonials, n as Counter, o as Reveal, p as usePublicGallery, r as EmptyState, s as SectionHead, t as ArrowLink, u as cn } from "./pieces-l00FVp0i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C7ni1qaQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 60]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative overflow-hidden border-b border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 grid-field opacity-60",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-20",
				style: { background: "radial-gradient(circle, oklch(0.7 0.126 178) 0%, transparent 70%)" },
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell relative grid gap-14 pt-32 pb-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12 lg:pt-40 lg:pb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: reduced ? false : { opacity: 0 },
						animate: { opacity: 1 },
						transition: { duration: .6 },
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Bolgarh · Khordha · Odisha"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-line hidden max-w-40 flex-1 sm:block" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-[2.8rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.2rem]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordReveal, { text: "Protech" }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordReveal, { text: "Computer" }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "brand-gradient-text",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordReveal, { text: "Education" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: reduced ? false : {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .5,
							duration: .7
						},
						className: "mt-6 max-w-xl text-lg font-medium leading-relaxed text-foreground/80 sm:text-xl",
						children: "Bringing programming and web technologies for you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: reduced ? false : {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .62,
							duration: .7
						},
						className: "mt-3 max-w-xl text-base leading-relaxed text-muted-foreground",
						children: "Learn web design, web development, programming, databases, cyber security and AI through structured courses and practical projects."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: reduced ? false : {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .55,
							duration: .6
						},
						className: "mt-8 flex flex-wrap gap-2",
						children: [
							"HTML/CSS",
							"JavaScript",
							"Python",
							"C/C++",
							"Java",
							"PHP",
							"MySQL",
							"React",
							"AI/ML"
						].map((tech, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
							initial: reduced ? false : {
								opacity: 0,
								scale: .85
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: {
								delay: .6 + i * .06,
								duration: .4
							},
							className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-mono text-[0.7rem] text-foreground/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-teal" }), tech]
						}, tech))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: reduced ? false : {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .72,
							duration: .7
						},
						className: "mt-10 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/courses",
							className: "group inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground",
							children: ["Explore Courses", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:border-foreground",
							children: "Talk to Protech"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: { y },
					className: "relative hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechVisual, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shell relative border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "grid grid-cols-2 divide-border sm:grid-cols-4 sm:divide-x",
					children: [
						["Course tracks", 4],
						["Structured courses", 17],
						["Highlight subjects", COURSE_HIGHLIGHTS.length],
						["Levels of study", 3]
					].map(([label, value], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * .07,
						className: "py-8 sm:px-8 sm:first:pl-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "eyebrow",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-display text-3xl tracking-tight",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: value })
						})]
					}, label))
				})
			})
		]
	});
}
function TechVisual() {
	const reduced = useReducedMotion();
	const tracks = [
		{
			icon: Globe,
			label: "Web Design",
			color: "text-teal",
			bg: "bg-teal/10",
			skills: [
				"HTML",
				"CSS",
				"Figma"
			]
		},
		{
			icon: CodeXml,
			label: "Web Development",
			color: "text-cobalt",
			bg: "bg-cobalt/10",
			skills: [
				"JS",
				"PHP",
				"MySQL"
			]
		},
		{
			icon: Terminal,
			label: "Programming",
			color: "text-teal",
			bg: "bg-teal/10",
			skills: [
				"C",
				"C++",
				"Java",
				"Python"
			]
		},
		{
			icon: BrainCircuit,
			label: "AI & ML",
			color: "text-cobalt",
			bg: "bg-cobalt/10",
			skills: [
				"TensorFlow",
				"NLP",
				"Data"
			]
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: reduced ? {} : { y: [
					0,
					-12,
					0
				] },
				transition: {
					repeat: Infinity,
					duration: 5,
					ease: "easeInOut"
				},
				className: "absolute -top-6 -right-6 h-32 w-32 rounded-full",
				style: { background: "radial-gradient(circle, oklch(0.62 0.183 262 / 0.15) 0%, transparent 70%)" },
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3",
				children: tracks.map(({ icon: Icon, label, color, bg, skills }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: reduced ? false : {
						opacity: 0,
						y: 16,
						scale: .95
					},
					animate: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					transition: {
						delay: 1.05 + i * .1,
						duration: .55,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					whileHover: reduced ? {} : {
						y: -3,
						scale: 1.02
					},
					className: "group cursor-default rounded-xl border border-border bg-card p-3.5 shadow-sm transition-shadow hover:shadow-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("mb-2 inline-flex rounded-lg p-2", bg),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: cn("h-4 w-4", color) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[0.82rem] font-semibold tracking-tight text-foreground",
							children: label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-mono text-[0.65rem] text-muted-foreground",
							children: skills.join(" · ")
						})
					]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: reduced ? false : {
					opacity: 0,
					scale: .8
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					delay: 1.5,
					duration: .5
				},
				"animate-float": true,
				className: "absolute -bottom-4 -left-6 flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 shadow-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3.5 w-3.5 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[0.68rem] font-medium text-foreground",
					children: "17 courses · 4 tracks"
				})]
			})
		]
	});
}
function Positioning() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "shell py-12 sm:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			index: "01",
			eyebrow: "The institute",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"A technology institute built around",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "what students actually do"
				}),
				" once they leave the classroom."
			] }),
			lead: "Protech Computer Education teaches the technologies that run modern software: the markup and styling of the web, the languages behind applications, the databases underneath them, and the emerging tools shaping the next decade.",
			align: "split"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 border-t border-border",
			children: [
				{
					t: "Practical learning",
					d: "Every concept is taught alongside the work it enables — typing code, debugging it, and running it."
				},
				{
					t: "Programming foundations",
					d: "C, C++, Java, Python and R are taught as a progression, not as isolated syllabi."
				},
				{
					t: "Web technologies",
					d: "From semantic markup and layout through PHP, MySQL and JavaScript on the server and client."
				},
				{
					t: "Project-based work",
					d: "Courses conclude with builds you can show — applications, dashboards, analyses and tools."
				},
				{
					t: "Emerging technology",
					d: "AI concepts, machine learning, data science and NLP taught with grounded, honest expectations."
				}
			].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group grid gap-3 border-b border-border py-7 transition-colors hover:bg-surface md:grid-cols-[6rem_1fr_1.2fr] md:items-baseline md:gap-8 md:px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: ["0", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl tracking-tight transition-transform duration-500 md:group-hover:translate-x-1",
							children: item.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: item.d
						})
					]
				})
			}, item.t))
		})]
	});
}
function CourseExplorer() {
	const { data: courses = [], isLoading } = usePublicCourses();
	const [active, setActive] = (0, import_react.useState)(COURSE_CATEGORIES[0]);
	const inCategory = courses.filter((c) => c.category === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-12 sm:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				index: "02",
				eyebrow: "Curriculum",
				title: "Four tracks. One progression.",
				lead: "Choose a track to see the courses inside it. Each course runs from fundamentals to a project you build yourself.",
				align: "split"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col",
					children: COURSE_CATEGORIES.map((cat, i) => {
						const isActive = cat === active;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onMouseEnter: () => setActive(cat),
							onFocus: () => setActive(cat),
							onClick: () => setActive(cat),
							"aria-pressed": isActive,
							className: cn("group relative border-t border-border py-6 text-left transition-colors last:border-b", isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "eyebrow",
									children: ["0", i + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("font-display text-2xl tracking-tight transition-transform duration-500 sm:text-3xl", isActive && "translate-x-1"),
									children: cat
								})]
							}), isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								layoutId: "track-bar",
								className: "absolute inset-y-0 -left-4 w-px bg-teal",
								transition: {
									type: "spring",
									stiffness: 320,
									damping: 30
								}
							})]
						}, cat);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-[18rem]",
					children: [isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: [
							0,
							1,
							2
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 animate-pulse bg-surface-2" }, i))
					}) : inCategory.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						title: "No courses published in this track yet",
						body: "Courses added from the institute's admin area appear here immediately."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
						className: "divide-y divide-border border-y border-border",
						children: inCategory.map((course, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: i * .05,
								duration: .45
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/courses/$slug",
								params: { slug: course.slug },
								className: "group flex items-center justify-between gap-6 py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "truncate font-display text-lg tracking-tight",
										children: course.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 line-clamp-1 text-sm text-muted-foreground",
										children: course.short_description
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex shrink-0 items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow hidden sm:block",
										children: course.level
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" })]
								})]
							})
						}, course.id))
					}, active), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLink, {
							to: "/courses",
							children: "See the full catalogue"
						})
					})]
				})]
			})]
		})
	});
}
function Highlights() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "shell py-12 sm:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			index: "03",
			eyebrow: "Courses Highlights",
			title: "The subjects that sit underneath every technology career.",
			lead: "Studied alongside the main tracks, these subjects give the theoretical grounding that makes practical work make sense.",
			align: "split"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 columns-1 gap-x-12 sm:columns-2 lg:columns-3",
			children: COURSE_HIGHLIGHTS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 6 * .04,
				className: "break-inside-avoid",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group flex items-baseline gap-4 border-b border-border py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[0.65rem] text-muted-foreground",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.95rem] transition-transform duration-500 group-hover:translate-x-1",
						children: item
					})]
				})
			}, item))
		})]
	});
}
function AISection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-y border-border bg-foreground text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 opacity-[0.15]",
			style: {
				backgroundImage: "linear-gradient(to right, rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.25) 1px, transparent 1px)",
				backgroundSize: "64px 64px"
			},
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell relative py-12 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow !text-primary-foreground/60",
						children: "04 — The future is here"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 max-w-3xl font-display text-3xl leading-[1.06] tracking-tight sm:text-5xl",
						children: "AI & Emerging Technology"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/70",
						children: "Taught as engineering, not spectacle: how these systems represent data, how they learn, what they can be trusted with, and how to build something real with them."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-px border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-5",
					children: AI_TRACK.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group h-full bg-foreground p-7 transition-colors hover:bg-primary-foreground/5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-[0.65rem] text-teal",
									children: ["0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-lg leading-tight tracking-tight",
									children: item.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs leading-relaxed text-primary-foreground/60",
									children: item.note
								})
							]
						})
					}, item.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/courses",
						search: { category: "AI & Emerging Technology" },
						className: "group inline-flex items-center gap-2 border border-primary-foreground/30 px-6 py-3.5 text-sm transition-colors hover:border-teal hover:text-teal",
						children: ["Explore the AI track", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
					})
				})
			]
		})]
	});
}
function GalleryStrip() {
	const { data: images = [] } = usePublicGallery();
	if (images.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "shell py-12 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				index: "05",
				eyebrow: "Gallery",
				title: "Inside the institute."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
				children: images.slice(0, 8).map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "group relative aspect-4/3 overflow-hidden bg-surface-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.image_url,
							alt: img.title ?? "Protech Computer Education",
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
						})
					})
				}, img.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLink, {
					to: "/gallery",
					children: "View the full gallery"
				})
			})
		]
	});
}
function TestimonialsSection() {
	const { data: items = [], isLoading } = usePublicTestimonials();
	const [index, setIndex] = (0, import_react.useState)(0);
	const current = items[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-12 sm:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				index: "06",
				eyebrow: "In their words",
				title: "Student experiences."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14",
				children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 animate-pulse bg-surface-2" }) : items.length === 0 || !current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: "No student testimonials published yet",
					body: "When students share their experience with the institute, their words will appear here — never anything invented on their behalf."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
					initial: {
						opacity: 0,
						y: 14
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "max-w-4xl font-display text-2xl leading-[1.35] tracking-tight sm:text-3xl",
					children: [
						"“",
						current.content,
						"”"
					]
				}, current.id), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							current.photo_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: current.photo_url,
								alt: current.student_name,
								className: "h-11 w-11 rounded-full object-cover",
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: current.student_name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: current.course_name ?? "Student"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-0.5",
								"aria-label": `${current.rating} out of 5`,
								children: Array.from({ length: current.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-teal text-teal" }, i))
							})
						]
					}), items.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2",
						children: items.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": `Show testimonial ${i + 1}`,
							onClick: () => setIndex(i),
							className: cn("h-px w-8 transition-colors", i === index ? "bg-foreground" : "bg-border hover:bg-muted-foreground")
						}, t.id))
					})]
				})] })
			})]
		})
	});
}
function ClosingCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "shell py-12 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 border-y border-border py-12 lg:grid-cols-[1.2fr_1fr] lg:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "max-w-2xl font-display text-3xl leading-[1.08] tracking-tight sm:text-5xl",
				children: "Start where you are. Leave with something you built."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3 lg:justify-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/courses",
					className: "inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground",
					children: "Explore Courses"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm transition-colors hover:border-foreground",
					children: "Enquire Now"
				})]
			})]
		}) })
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Positioning, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseExplorer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlights, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AISection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCTA, {})
	] });
}
//#endregion
export { HomePage as component };
