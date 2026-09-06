import { a as FALLBACK_SETTINGS, d as whatsappLink, u as telHref } from "./brand-DdQD3q0T.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as MapPin, f as Mail, s as Phone, x as Clock } from "../_libs/lucide-react.mjs";
import { c as SiteShell, h as useSettings, i as PageHero, o as Reveal } from "./pieces-l00FVp0i.mjs";
import { t as Route } from "./contact-sFB7R9wl.mjs";
import { t as EnquiryForm } from "./EnquiryForm-DKuKoD3n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BbTJEHo3.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { data: settings } = useSettings();
	const search = Route.useSearch();
	const s = settings ?? FALLBACK_SETTINGS;
	const phones = [s.phone_primary, s.phone_secondary].filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Talk to the institute.",
		lead: "Send an enquiry and it is saved with us before WhatsApp opens."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "shell grid gap-12 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), " Address"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-2xl leading-snug tracking-tight",
							children: s.address_line
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: [
								s.city,
								", ",
								s.state,
								" — ",
								s.pincode
							]
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "eyebrow flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }), " Phone"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2",
								children: phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: telHref(p),
									className: "link-underline font-mono text-lg tracking-tight",
									children: p
								}) }, p))
							}),
							phones[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappLink(phones[0], "Hello Protech Computer Education, I would like to know more about your courses."),
								target: "_blank",
								rel: "noopener noreferrer",
								className: "mt-5 inline-flex items-center border border-teal px-4 py-2.5 text-xs text-teal transition-colors hover:bg-teal hover:text-primary-foreground",
								children: "Message on WhatsApp"
							})
						]
					})
				}),
				s.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border pt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5" }), " Email"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${s.email}`,
							className: "link-underline mt-4 inline-block text-sm",
							children: s.email
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-y border-border py-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }), " Visiting"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "Walk in at the Bolgarh Bus Stand campus, or call ahead to fix a time with an instructor. Batch timings are confirmed at the time of admission."
						})]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border border-border bg-card p-6 sm:p-8 rounded-xl shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow text-cobalt",
					children: "Admission enquiry"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-2xl font-bold tracking-tight",
					children: "Send Your Details"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground mb-6",
					children: "Fill this in and we'll save your enquiry, then open WhatsApp with your message ready to send."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, { initialCourse: search.course })
				})
			]
		})]
	})] });
}
//#endregion
export { ContactPage as component };
