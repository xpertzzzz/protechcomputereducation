import { r as __toESM } from "../_runtime.mjs";
import { a as FALLBACK_SETTINGS, d as whatsappLink, o as LOGO_URL } from "./brand-DdQD3q0T.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getPublicGalleryFn, i as getPublicCoursesFn, o as getPublicTestimonialsFn, r as getCourseBySlugFn, s as getSettingsFn } from "./functions-DE_HuUbQ.mjs";
import { i as require_react, r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, n as useReducedMotion, o as motion, r as useSpring, s as AnimatePresence, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { P as ArrowUpRight, f as Menu, l as Phone, n as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pieces-dZJcImtG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useSettings() {
	const query = useQuery({
		queryKey: ["settings"],
		staleTime: 3e5,
		queryFn: async () => {
			return await getSettingsFn() ?? FALLBACK_SETTINGS;
		}
	});
	return {
		settings: query.data ?? FALLBACK_SETTINGS,
		...query
	};
}
function usePublicCourses() {
	return useQuery({
		queryKey: ["courses", "public"],
		queryFn: async () => {
			return await getPublicCoursesFn();
		}
	});
}
function useCourseBySlug(slug) {
	return useQuery({
		queryKey: ["course", slug],
		queryFn: async () => {
			return await getCourseBySlugFn({ data: slug });
		}
	});
}
function usePublicGallery() {
	return useQuery({
		queryKey: ["gallery", "public"],
		queryFn: async () => {
			return await getPublicGalleryFn();
		}
	});
}
function usePublicTestimonials() {
	return useQuery({
		queryKey: ["testimonials", "public"],
		queryFn: async () => {
			return await getPublicTestimonialsFn();
		}
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Reveal({ children, delay = 0, y = 24, className, as = "div" }) {
	const reduced = useReducedMotion();
	const Comp = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		...reduced ? {} : {
			initial: {
				opacity: 0,
				y
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-80px"
			},
			transition: {
				duration: .7,
				delay,
				ease: [
					.22,
					1,
					.36,
					1
				]
			}
		},
		className,
		children
	});
}
function WordReveal({ text, className }) {
	const reduced = useReducedMotion();
	const words = text.split(" ");
	if (reduced) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className,
		children: text
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-block", className),
		children: words.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block overflow-hidden align-bottom",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				className: "inline-block",
				initial: { y: "110%" },
				animate: { y: 0 },
				transition: {
					duration: .85,
					delay: .08 + i * .055,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: [word, i < words.length - 1 ? "\xA0" : ""]
			})
		}, `${word}-${i}`))
	});
}
function Counter({ to, suffix = "", className }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-60px"
	});
	const reduced = useReducedMotion();
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		if (reduced) {
			setValue(to);
			return;
		}
		const start = performance.now();
		const duration = 1200;
		let frame = 0;
		const tick = (now) => {
			const p = Math.min(1, (now - start) / duration);
			setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
			if (p < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [
		inView,
		to,
		reduced
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className,
		children: [value, suffix]
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 140,
		damping: 26,
		restDelta: .001
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": true,
		style: { scaleX },
		className: "fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-teal to-cobalt"
	});
}
var NAV = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Courses",
		to: "/courses"
	},
	{
		label: "Gallery",
		to: "/gallery"
	},
	{
		label: "Testimonials",
		to: "/testimonials"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { settings } = useSettings();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => setOpen(false), [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-[100] flex flex-col pointer-events-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-auto hidden lg:flex items-center justify-between px-6 py-2.5 bg-cobalt text-primary-foreground text-[0.7rem] font-semibold tracking-wide shadow-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${settings.phone_primary}`,
						className: "flex items-center gap-1.5 hover:text-white/80 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3 w-3" }), settings.phone_primary]
					}),
					settings.phone_secondary && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${settings.phone_secondary}`,
						className: "flex items-center gap-1.5 hover:text-white/80 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3 w-3" }), settings.phone_secondary]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappLink(settings.whatsapp_number, "Hello"),
						target: "_blank",
						rel: "noreferrer",
						className: "flex items-center gap-1.5 text-[#25D366] hover:text-[#25D366]/80 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-[#25D366]" }), "WHATSAPP"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6 uppercase",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					settings.address_line,
					", ",
					settings.city,
					", ",
					settings.state,
					" — ",
					settings.pincode
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "flex items-center gap-1.5 border border-primary-foreground/30 px-3 py-1 rounded hover:bg-primary-foreground hover:text-cobalt transition-colors",
					children: "Login"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-center px-4 pt-4 pb-2 transition-transform",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					y: -80,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				transition: {
					duration: .7,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: cn("pointer-events-auto flex w-full max-w-5xl items-center gap-1 rounded-full border px-3 py-2 transition-all duration-500", scrolled ? "border-border/60 bg-background/95 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.18)] backdrop-blur-3xl" : "border-border/40 bg-background/80 shadow-[0_4px_24px_-6px_rgba(15,23,42,0.12)] backdrop-blur-xl"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "group flex flex-1 items-center gap-2.5 rounded-full px-3 py-1.5 transition-colors hover:bg-surface lg:flex-none lg:mr-2",
						"aria-label": "Protech Computer Education — home",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: LOGO_URL,
							alt: "Protech Computer Education",
							width: 120,
							height: 40,
							className: "h-7 w-auto flex-shrink-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-[0.82rem] font-semibold tracking-tight text-foreground",
							children: "Protech Computer Education"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden h-5 w-px bg-border lg:block",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center lg:flex",
						"aria-label": "Primary",
						children: NAV.map((item) => {
							const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("relative rounded-full px-3.5 py-1.5 text-[0.8rem] font-medium tracking-wide transition-all duration-200", active ? "bg-foreground text-primary-foreground" : "text-muted-foreground hover:bg-surface hover:text-foreground"),
								children: item.label
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden h-5 w-px bg-border lg:block",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/courses",
						className: "hidden rounded-full bg-teal px-4 py-1.5 text-[0.8rem] font-semibold text-white shadow-sm transition-all hover:brightness-110 lg:inline-flex",
						children: "Enroll Now"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						className: "inline-flex h-8 w-8 items-center justify-center rounded-full text-foreground hover:bg-surface lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
					})
				]
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: -16
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: -16
		},
		transition: {
			duration: .35,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "fixed inset-x-4 top-[88px] z-[90] overflow-hidden rounded-2xl border border-border bg-background/95 shadow-2xl backdrop-blur-2xl lg:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border",
				children: NAV.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
					initial: {
						opacity: 0,
						x: -10
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { delay: .04 + i * .045 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						className: "flex items-center justify-between py-3.5 font-display text-xl tracking-tight",
						children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: ["0", i + 1]
						})]
					})
				}, item.to))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "mt-4 flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3.5 text-sm font-medium text-primary-foreground",
				children: ["Enquire Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
			})]
		})
	}) })] });
}
function Footer() {
	const { settings } = useSettings();
	const socials = [
		["Facebook", settings.facebook_url],
		["Instagram", settings.instagram_url],
		["YouTube", settings.youtube_url],
		["LinkedIn", settings.linkedin_url]
	].filter(([, url]) => Boolean(url));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-16 border-t border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: LOGO_URL,
								alt: settings.institute_name,
								className: "h-10 w-auto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground",
								children: settings.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-sm leading-relaxed text-foreground",
								children: [
									settings.address_line,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									settings.city,
									", ",
									settings.state,
									" — ",
									settings.pincode
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-col gap-1 font-mono text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${settings.phone_primary}`,
										className: "link-underline w-fit",
										children: settings.phone_primary
									}),
									settings.phone_secondary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${settings.phone_secondary}`,
										className: "link-underline w-fit",
										children: settings.phone_secondary
									}),
									settings.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${settings.email}`,
										className: "link-underline w-fit",
										children: settings.email
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Navigate",
						links: NAV.map((n) => ({
							label: n.label,
							to: n.to
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Courses",
						links: [
							{
								label: "Website Designing",
								to: "/courses",
								search: { category: "Website Designing" }
							},
							{
								label: "Website Development",
								to: "/courses",
								search: { category: "Website Development" }
							},
							{
								label: "Programming Excellence",
								to: "/courses",
								search: { category: "Programming Excellence" }
							},
							{
								label: "AI & Emerging Technology",
								to: "/courses",
								search: { category: "AI & Emerging Technology" }
							}
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Information",
						links: [
							{
								label: "Privacy Policy",
								to: "/privacy-policy"
							},
							{
								label: "Terms & Conditions",
								to: "/terms-and-conditions"
							},
							{
								label: "Refund Policy",
								to: "/refund-policy"
							},
							{
								label: "Disclaimer",
								to: "/disclaimer"
							},
							{
								label: "Student Policy",
								to: "/student-policy"
							}
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						settings.institute_name.replace(/^PROTECH/i, "Protech"),
						". All rights reserved."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-5 text-xs",
					children: [socials.map(([label, url]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: url,
						target: "_blank",
						rel: "noreferrer noopener",
						className: "link-underline text-muted-foreground hover:text-foreground",
						children: label
					}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappLink(settings.whatsapp_number, "Hello Protech Computer Education,"),
						target: "_blank",
						rel: "noreferrer noopener",
						className: "link-underline text-muted-foreground hover:text-foreground",
						children: "WhatsApp"
					})]
				})]
			})]
		})
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "eyebrow",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-5 space-y-2.5",
		children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: l.to,
			search: l.search,
			className: "link-underline text-sm text-muted-foreground transition-colors hover:text-foreground",
			children: l.label
		}) }, l.label))
	})] });
}
function FloatingCall() {
	const { settings } = useSettings();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: whatsappLink(settings.whatsapp_number, "Hello Protech Computer Education, I would like to know more about your courses."),
		target: "_blank",
		rel: "noreferrer noopener",
		className: "fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 border border-foreground bg-foreground px-4 py-3 text-xs font-medium tracking-wide text-primary-foreground shadow-[0_10px_30px_-14px_rgba(15,23,42,0.6)] transition-transform duration-300 hover:-translate-y-0.5 sm:bottom-8 sm:right-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }), "Talk to Protech"]
	});
}
function SiteShell({ children }) {
	const reduced = useReducedMotion();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.main, {
				...reduced ? {} : {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						duration: .45,
						ease: [
							.22,
							1,
							.36,
							1
						]
					}
				},
				className: "flex-1 pt-[88px] lg:pt-[116px]",
				children
			}, pathname),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCall, {})
		]
	});
}
function SectionHead({ index, eyebrow, title, lead, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: cn("grid gap-6", align === "split" && "lg:grid-cols-[1fr_1fr] lg:gap-16"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-4",
			children: [
				index && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: index
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-line hidden flex-1 sm:block" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-6 max-w-2xl font-display text-3xl leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.9rem]",
			children: title
		})] }), lead && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-xl self-end text-[0.95rem] leading-relaxed text-muted-foreground",
			children: lead
		})]
	});
}
function ArrowLink({ to, children, className, search }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		search,
		className: cn("group inline-flex items-center gap-2 text-sm font-medium text-foreground", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "link-underline",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
	});
}
function EmptyState({ title, body, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden border border-dashed border-border bg-surface px-8 py-12 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 grid-field opacity-40",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "Nothing here yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-display text-xl tracking-tight",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground",
					children: body
				}),
				action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-center",
					children: action
				})
			]
		})]
	});
}
function PageHero({ eyebrow, title, lead, breadcrumbs, bgImages, children }) {
	const [currentImageIndex, setCurrentImageIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!bgImages || bgImages.length <= 1) return;
		const interval = setInterval(() => {
			setCurrentImageIndex((prev) => (prev + 1) % bgImages.length);
		}, 1500);
		return () => clearInterval(interval);
	}, [bgImages]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-b border-border bg-gradient-to-b from-surface/50 to-background pt-10 pb-16",
		children: [
			bgImages && bgImages.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-0 opacity-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						transition: { duration: .5 },
						className: "absolute inset-0",
						style: {
							backgroundImage: `url("${bgImages[currentImageIndex]}")`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundAttachment: "fixed"
						}
					}, currentImageIndex)
				})
			}),
			!bgImages && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 grid-field opacity-40",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-0 bg-background/80 backdrop-blur-sm" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell relative z-10 flex flex-col items-center text-center",
				children: [
					breadcrumbs && breadcrumbs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-5 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-medium text-muted-foreground shadow-sm",
						children: breadcrumbs.map((crumb, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [idx > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "›" }), crumb.path ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: crumb.path,
								className: "hover:text-foreground transition-colors",
								children: crumb.label
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: crumb.label
							})]
						}, idx))
					}),
					eyebrow && !breadcrumbs && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/80 backdrop-blur px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground shadow-sm",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "max-w-4xl font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl lg:text-7xl",
							children: title
						}),
						lead && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
							children: lead
						}),
						children
					] })
				]
			})
		]
	});
}
function Prose({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "shell py-12 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-3xl space-y-8 text-[0.95rem] leading-relaxed text-muted-foreground [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-xl [&_h2]:tracking-tight [&_h2]:text-foreground [&_li]:mb-2 [&_p]:mt-3 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-5",
			children
		})
	});
}
//#endregion
export { Prose as a, SiteShell as c, useCourseBySlug as d, usePublicCourses as f, useSettings as h, PageHero as i, WordReveal as l, usePublicTestimonials as m, Counter as n, Reveal as o, usePublicGallery as p, EmptyState as r, SectionHead as s, ArrowLink as t, cn as u };
