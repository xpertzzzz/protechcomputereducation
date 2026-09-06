import { r as __toESM } from "../_runtime.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_react, n as QueryClientProvider, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as Route$19 } from "./admin-BXLLXtlh.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$20 } from "./contact-C1Zcq0Gw.mjs";
import { t as Route$21 } from "./courses._slug-NCj2YSy2.mjs";
import { t as Route$22 } from "./courses.index-BMjPgiEe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-3AAyal2v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var styles_default = "/assets/styles-CiD8Jdw_.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "Error 404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-4xl tracking-tight text-foreground sm:text-5xl",
					children: "This page doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: "The page you're looking for may have been moved or renamed. You can head back to the homepage or browse the course catalogue."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center bg-foreground px-5 py-3 text-sm font-medium text-primary-foreground",
						children: "Go home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/courses",
						className: "inline-flex items-center border border-border px-5 py-3 text-sm",
						children: "Browse courses"
					})]
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-3xl tracking-tight text-foreground",
					children: "This page didn't load."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: "We couldn't reach the information for this page. Please try again, or contact the institute directly on 7008414704."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center bg-foreground px-5 py-3 text-sm font-medium text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center border border-border px-5 py-3 text-sm",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$18 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Protech Computer Education — Bolgarh, Khordha" },
			{
				name: "description",
				content: "Protech Computer Education teaches programming, web technologies, databases and AI through structured learning and practical projects in Bolgarh, Khordha."
			},
			{
				name: "author",
				content: "Protech Computer Education"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Protech Computer Education"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#FAFAF6"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/logo.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function PremiumPreloader() {
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1200);
		return () => clearTimeout(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 1 },
		exit: {
			opacity: 0,
			scale: 1.05
		},
		transition: {
			duration: .8,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: .6,
				ease: "easeOut"
			},
			className: "flex flex-col items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: "/logo.png",
				alt: "Protech Computer Education",
				className: "h-20 w-auto mb-8",
				animate: { scale: [
					1,
					1.02,
					1
				] },
				transition: {
					repeat: Infinity,
					duration: 2,
					ease: "easeInOut"
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-0.5 w-48 overflow-hidden rounded-full bg-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-full bg-foreground",
					initial: { width: "0%" },
					animate: { width: "100%" },
					transition: {
						duration: 1.1,
						ease: "easeInOut"
					}
				})
			})]
		})
	}) });
}
function RootComponent() {
	const { queryClient } = Route$18.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PremiumPreloader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })
		]
	});
}
var $$splitComponentImporter$17 = () => import("./routes-D_cILkxG.mjs");
var Route$17 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Protech Computer Education — Bringing Programming & Web Technologies for You" },
			{
				name: "description",
				content: "Protech Computer Education — Bringing programming and web technologies for you. Learn web design, web development, programming, AI and emerging technologies at Bolgarh Bus Stand, Khordha, Odisha."
			},
			{
				property: "og:title",
				content: "Protech Computer Education — Bringing Programming & Web Technologies for You"
			},
			{
				property: "og:description",
				content: "Bringing programming and web technologies for you. Structured courses in web design, development, programming and AI — Bolgarh, Khordha, Odisha."
			},
			{
				name: "keywords",
				content: "Protech Computer Education, programming courses Bolgarh, web development Khordha, computer courses Odisha, coding institute Bolgarh"
			},
			{
				rel: "canonical",
				href: "https://protechcomputereducation.in/"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "EducationalOrganization",
				name: "Protech Computer Education",
				slogan: "Bringing programming and web technologies for you",
				telephone: ["+917008414704", "+917787840997"],
				address: {
					"@type": "PostalAddress",
					streetAddress: "Bolgarh Bus Stand",
					addressLocality: "Khordha",
					addressRegion: "Odisha",
					postalCode: "752065",
					addressCountry: "IN"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./about-QLtZjY1h.mjs");
var Route$16 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Protech Computer Education" },
		{
			name: "description",
			content: "How Protech Computer Education teaches programming and web technologies: structured courses, practical work, projects and internship exposure in Khordha, Odisha."
		},
		{
			property: "og:title",
			content: "About Protech Computer Education"
		},
		{
			property: "og:description",
			content: "Our story, our approach and what we teach at Bolgarh, Khordha."
		},
		{
			rel: "canonical",
			href: "https://protech-computer-education.lovable.app/about"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./disclaimer-DyNbF2Ft.mjs");
var Route$15 = createFileRoute("/disclaimer")({
	head: () => ({ meta: [
		{ title: "Disclaimer — Protech Computer Education" },
		{
			name: "description",
			content: "Disclaimer covering course information, outcomes and third-party references on the Protech Computer Education website."
		},
		{
			property: "og:title",
			content: "Disclaimer — Protech Computer Education"
		},
		{
			property: "og:description",
			content: "Scope and limits of information on this website."
		},
		{
			rel: "canonical",
			href: "https://protech-computer-education.lovable.app/disclaimer"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./gallery-Cl3ELJAZ.mjs");
var Route$14 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — Protech Computer Education" },
		{
			name: "description",
			content: "Photographs from Protech Computer Education in Bolgarh, Khordha — classrooms, sessions, projects and institute life."
		},
		{
			property: "og:title",
			content: "Gallery — Protech Computer Education"
		},
		{
			property: "og:description",
			content: "Photographs from inside the institute."
		},
		{
			rel: "canonical",
			href: "https://protech-computer-education.lovable.app/gallery"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./login-_N2-in89.mjs");
var Route$13 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./privacy-policy-B7OYwPyO.mjs");
var Route$12 = createFileRoute("/privacy-policy")({
	head: () => ({ meta: [
		{ title: "Privacy Policy — Protech Computer Education" },
		{
			name: "description",
			content: "How Protech Computer Education collects, uses and protects the personal information of students and enquirers."
		},
		{
			property: "og:title",
			content: "Privacy Policy — Protech Computer Education"
		},
		{
			property: "og:description",
			content: "How we handle student and enquiry information."
		},
		{
			rel: "canonical",
			href: "https://protech-computer-education.lovable.app/privacy-policy"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./refund-policy-Co9MdGIv.mjs");
var Route$11 = createFileRoute("/refund-policy")({
	head: () => ({ meta: [
		{ title: "Refund Policy — Protech Computer Education" },
		{
			name: "description",
			content: "How fee refunds and cancellations are handled at Protech Computer Education, Bolgarh, Khordha."
		},
		{
			property: "og:title",
			content: "Refund Policy — Protech Computer Education"
		},
		{
			property: "og:description",
			content: "Fee refund and cancellation terms."
		},
		{
			rel: "canonical",
			href: "https://protech-computer-education.lovable.app/refund-policy"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./student-policy-BG7ERWfd.mjs");
var Route$10 = createFileRoute("/student-policy")({
	head: () => ({ meta: [
		{ title: "Student Policy — Protech Computer Education" },
		{
			name: "description",
			content: "Attendance, lab use, conduct and record-keeping expectations for students at Protech Computer Education."
		},
		{
			property: "og:title",
			content: "Student Policy — Protech Computer Education"
		},
		{
			property: "og:description",
			content: "Attendance, lab use and conduct expectations."
		},
		{
			rel: "canonical",
			href: "https://protech-computer-education.lovable.app/student-policy"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./terms-and-conditions-CXOkIAm5.mjs");
var Route$9 = createFileRoute("/terms-and-conditions")({
	head: () => ({ meta: [
		{ title: "Terms & Conditions — Protech Computer Education" },
		{
			name: "description",
			content: "Terms and conditions for enrolment, course delivery and use of the Protech Computer Education website."
		},
		{
			property: "og:title",
			content: "Terms & Conditions — Protech Computer Education"
		},
		{
			property: "og:description",
			content: "Terms for enrolment and use of this website."
		},
		{
			rel: "canonical",
			href: "https://protech-computer-education.lovable.app/terms-and-conditions"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./testimonials-DU1BAvcW.mjs");
var Route$8 = createFileRoute("/testimonials")({
	head: () => ({ meta: [
		{ title: "Testimonials — Protech Computer Education" },
		{
			name: "description",
			content: "Experiences shared by students of Protech Computer Education, Bolgarh, Khordha. Published by the institute, never invented."
		},
		{
			property: "og:title",
			content: "Student testimonials — Protech Computer Education"
		},
		{
			property: "og:description",
			content: "What students say about learning at Protech."
		},
		{
			rel: "canonical",
			href: "https://protech-computer-education.lovable.app/testimonials"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./admin.index-Ox64eMsH.mjs");
var Route$7 = createFileRoute("/admin/")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./admin.courses-DdHmgyz7.mjs");
var Route$6 = createFileRoute("/admin/courses")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./admin.enquiries-FfFi6sz7.mjs");
var Route$5 = createFileRoute("/admin/enquiries")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./admin.gallery-Ce23Ymy4.mjs");
var Route$4 = createFileRoute("/admin/gallery")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./admin.payments-BVXFmiF8.mjs");
var Route$3 = createFileRoute("/admin/payments")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./admin.settings-GCIGzqwh.mjs");
var Route$2 = createFileRoute("/admin/settings")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./admin.students-BBjDOyKz.mjs");
var Route$1 = createFileRoute("/admin/students")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./admin.testimonials-gWtDzbcc.mjs");
var Route = createFileRoute("/admin/testimonials")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$17.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$18
});
var AboutRoute = Route$16.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$18
});
var AdminRoute = Route$19.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$18
});
var ContactRoute = Route$20.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$18
});
var DisclaimerRoute = Route$15.update({
	id: "/disclaimer",
	path: "/disclaimer",
	getParentRoute: () => Route$18
});
var GalleryRoute = Route$14.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$18
});
var LoginRoute = Route$13.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$18
});
var PrivacyPolicyRoute = Route$12.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$18
});
var RefundPolicyRoute = Route$11.update({
	id: "/refund-policy",
	path: "/refund-policy",
	getParentRoute: () => Route$18
});
var StudentPolicyRoute = Route$10.update({
	id: "/student-policy",
	path: "/student-policy",
	getParentRoute: () => Route$18
});
var TermsAndConditionsRoute = Route$9.update({
	id: "/terms-and-conditions",
	path: "/terms-and-conditions",
	getParentRoute: () => Route$18
});
var TestimonialsRoute = Route$8.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$18
});
var AdminIndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var AdminCoursesRoute = Route$6.update({
	id: "/courses",
	path: "/courses",
	getParentRoute: () => AdminRoute
});
var AdminEnquiriesRoute = Route$5.update({
	id: "/enquiries",
	path: "/enquiries",
	getParentRoute: () => AdminRoute
});
var AdminGalleryRoute = Route$4.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => AdminRoute
});
var AdminPaymentsRoute = Route$3.update({
	id: "/payments",
	path: "/payments",
	getParentRoute: () => AdminRoute
});
var AdminSettingsRoute = Route$2.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AdminRoute
});
var AdminStudentsRoute = Route$1.update({
	id: "/students",
	path: "/students",
	getParentRoute: () => AdminRoute
});
var AdminTestimonialsRoute = Route.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => AdminRoute
});
var CoursesIndexRoute = Route$22.update({
	id: "/courses/",
	path: "/courses/",
	getParentRoute: () => Route$18
});
var CoursesSlugRoute = Route$21.update({
	id: "/courses/$slug",
	path: "/courses/$slug",
	getParentRoute: () => Route$18
});
var AdminRouteChildren = {
	AdminCoursesRoute,
	AdminEnquiriesRoute,
	AdminGalleryRoute,
	AdminPaymentsRoute,
	AdminSettingsRoute,
	AdminStudentsRoute,
	AdminTestimonialsRoute,
	AdminIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute: AdminRoute._addFileChildren(AdminRouteChildren),
	ContactRoute,
	DisclaimerRoute,
	GalleryRoute,
	LoginRoute,
	PrivacyPolicyRoute,
	RefundPolicyRoute,
	StudentPolicyRoute,
	TermsAndConditionsRoute,
	TestimonialsRoute,
	CoursesSlugRoute,
	CoursesIndexRoute
};
var routeTree = Route$18._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
