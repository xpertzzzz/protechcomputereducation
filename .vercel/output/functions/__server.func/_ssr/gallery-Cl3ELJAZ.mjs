import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { A as ChevronRight, j as ChevronLeft, n as X } from "../_libs/lucide-react.mjs";
import { c as SiteShell, i as PageHero, p as usePublicGallery, r as EmptyState, u as cn } from "./pieces-dZJcImtG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-Cl3ELJAZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LOCAL_IMAGES = [
	{
		id: "l1",
		image_url: "/images/1.jpeg",
		category: "Classroom",
		title: "Computer Lab"
	},
	{
		id: "l2",
		image_url: "/images/2.jpeg",
		category: "Events",
		title: "Certificate Distribution"
	},
	{
		id: "l3",
		image_url: "/images/3.jpeg",
		category: "Events",
		title: "Group Photo"
	},
	{
		id: "l4",
		image_url: "/images/4.jpeg",
		category: "Classroom",
		title: "Practical Session"
	},
	{
		id: "l5",
		image_url: "/images/5.jpeg",
		category: "Campus",
		title: "Institute Entrance"
	},
	{
		id: "l6",
		image_url: "/images/6.png",
		category: "Others",
		title: "Student Work"
	},
	{
		id: "l7",
		image_url: "/images/7.jpeg",
		category: "Campus",
		title: "Campus View"
	}
];
function GalleryPage() {
	const { data: dbImages = [], isLoading, isError } = usePublicGallery();
	const [category, setCategory] = (0, import_react.useState)(null);
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const sourceImages = dbImages.length > 0 ? dbImages : LOCAL_IMAGES;
	const categories = (0, import_react.useMemo)(() => Array.from(new Set(sourceImages.map((i) => i.category))).filter(Boolean).sort(), [sourceImages]);
	const shown = category ? sourceImages.filter((i) => i.category === category) : sourceImages;
	const close = (0, import_react.useCallback)(() => setLightbox(null), []);
	const step = (0, import_react.useCallback)((dir) => setLightbox((cur) => cur === null ? null : (cur + dir + shown.length) % shown.length), [shown.length]);
	(0, import_react.useEffect)(() => {
		if (lightbox === null) return;
		const onKey = (e) => {
			if (e.key === "Escape") close();
			if (e.key === "ArrowRight") step(1);
			if (e.key === "ArrowLeft") step(-1);
		};
		window.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [
		lightbox,
		close,
		step
	]);
	const active = lightbox === null ? null : shown[lightbox];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			title: "Gallery",
			lead: "Moments from our campus, classrooms, student work, and institute events.",
			breadcrumbs: [{
				label: "Home",
				path: "/"
			}, { label: "Gallery" }],
			bgImages: [
				"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
				"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
				"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/80 backdrop-blur px-5 py-2 text-xs font-medium shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-teal font-bold",
						children: "✓"
					}),
					"Verified",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground mx-1",
						children: "|"
					}),
					"Government Recognized",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground mx-1",
						children: "|"
					}),
					"ISO Certified"
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "shell py-14",
			children: [categories.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap justify-center gap-3 pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCategory(null),
					className: cn("rounded-full px-6 py-2.5 text-sm font-semibold transition-all shadow-sm border", !category ? "border-cobalt bg-cobalt text-white shadow-md" : "border-border bg-card text-foreground hover:border-cobalt/30 hover:text-cobalt"),
					children: "All"
				}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCategory(c),
					className: cn("rounded-full px-6 py-2.5 text-sm font-semibold transition-all shadow-sm border", category === c ? "border-cobalt bg-cobalt text-white shadow-md" : "border-border bg-card text-foreground hover:border-cobalt/30 hover:text-cobalt"),
					children: c
				}, c))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: "We couldn't load the gallery",
					body: "Please refresh the page. If it keeps happening, contact the institute on 7008414704."
				}) : isLoading && dbImages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						0,
						1,
						2,
						3,
						4,
						5
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-6 animate-pulse rounded-3xl bg-surface-2 aspect-[4/3]" }, i))
				}) : shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: "No photographs published yet",
					body: "Photographs uploaded by the institute will appear here. Nothing on this page is stock imagery."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
					children: shown.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						type: "button",
						onClick: () => setLightbox(i),
						initial: {
							opacity: 0,
							y: 18
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .6,
							delay: i % 6 * .05
						},
						className: "group relative block w-full overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm text-left transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] hover:border-cobalt/40 hover:-translate-y-1 aspect-[4/3]",
						"aria-label": `Open ${img.title ?? "gallery image"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.image_url,
							alt: img.title ?? "Protech Computer Education",
							loading: "lazy",
							className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
						}), (img.title || img.category) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-0 left-0 right-0 flex flex-col gap-1 bg-background/95 px-5 py-4 border-t border-border/50 backdrop-blur-sm translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-sm text-foreground",
								children: img.title ?? "Untitled"
							}), img.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.65rem] font-bold text-cobalt uppercase tracking-wider",
								children: img.category
							})]
						})]
					}, img.id))
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": active.title ?? "Gallery image",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "fixed inset-0 z-[70] flex items-center justify-center bg-foreground/95 p-4",
			onClick: close,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: close,
					"aria-label": "Close",
					className: "absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center border border-primary-foreground/30 text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				}),
				shown.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Previous image",
					onClick: (e) => {
						e.stopPropagation();
						step(-1);
					},
					className: "absolute left-4 inline-flex h-11 w-11 items-center justify-center border border-primary-foreground/30 text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Next image",
					onClick: (e) => {
						e.stopPropagation();
						step(1);
					},
					className: "absolute right-4 inline-flex h-11 w-11 items-center justify-center border border-primary-foreground/30 text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
					initial: {
						opacity: 0,
						scale: .98
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: { duration: .35 },
					className: "max-h-[85vh] max-w-5xl",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: active.image_url,
							alt: active.title ?? "Protech Computer Education",
							className: "max-h-[75vh] w-auto object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-4 flex flex-wrap items-baseline justify-between gap-3 text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: active.title ?? "Untitled"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "eyebrow !text-primary-foreground/60",
								children: [
									lightbox + 1,
									" / ",
									shown.length
								]
							})]
						}),
						active.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-2xl text-xs text-primary-foreground/70",
							children: active.description
						})
					]
				}, active.id)
			]
		}) })
	] });
}
//#endregion
export { GalleryPage as component };
