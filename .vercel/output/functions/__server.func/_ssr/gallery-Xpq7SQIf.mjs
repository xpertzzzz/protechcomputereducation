import { r as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { C as ChevronLeft, S as ChevronRight, n as X } from "../_libs/lucide-react.mjs";
import { c as SiteShell, i as PageHero, p as usePublicGallery, r as EmptyState, u as cn } from "./pieces-l00FVp0i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-Xpq7SQIf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	const { data: images = [], isLoading, isError } = usePublicGallery();
	const [category, setCategory] = (0, import_react.useState)(null);
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const categories = (0, import_react.useMemo)(() => Array.from(new Set(images.map((i) => i.category))).sort(), [images]);
	const shown = category ? images.filter((i) => i.category === category) : images;
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
			eyebrow: "Gallery",
			title: "The institute, as it is.",
			lead: "Photographs of classes, sessions and student work, published by the institute."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "shell py-14",
			children: [categories.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2 border-b border-border pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCategory(null),
					className: cn("border px-4 py-2 text-xs transition-colors", !category ? "border-foreground bg-foreground text-primary-foreground" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"),
					children: "All"
				}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCategory(c),
					className: cn("border px-4 py-2 text-xs transition-colors", category === c ? "border-foreground bg-foreground text-primary-foreground" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"),
					children: c
				}, c))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: "We couldn't load the gallery",
					body: "Please refresh the page. If it keeps happening, contact the institute on 7008414704."
				}) : isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "columns-1 gap-4 sm:columns-2 lg:columns-3",
					children: [
						0,
						1,
						2,
						3,
						4,
						5
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 animate-pulse bg-surface",
						style: { height: 180 + i % 3 * 70 }
					}, i))
				}) : shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					title: "No photographs published yet",
					body: "Photographs uploaded by the institute will appear here. Nothing on this page is stock imagery."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "columns-1 gap-4 sm:columns-2 lg:columns-3",
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
						className: "group mb-4 block w-full break-inside-avoid overflow-hidden bg-surface-2 text-left",
						"aria-label": `Open ${img.title ?? "gallery image"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.image_url,
							alt: img.title ?? "Protech Computer Education",
							loading: "lazy",
							className: "w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
						}), (img.title || img.category) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-3 bg-background px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-xs",
								children: img.title ?? "Untitled"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow shrink-0",
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
