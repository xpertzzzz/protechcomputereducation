import { a as FALLBACK_SETTINGS } from "./brand-DdQD3q0T.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Prose, c as SiteShell, i as PageHero } from "./pieces-dZJcImtG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/student-policy-BG7ERWfd.js
var import_jsx_runtime = require_jsx_runtime();
function StudentPolicy() {
	const s = FALLBACK_SETTINGS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Student Policy",
		lead: "What we expect from students, and what students can expect from us.",
		breadcrumbs: [{
			label: "Home",
			path: "/"
		}, { label: "Student Policy" }],
		bgImages: [
			"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1505664159814-fb5e47895e68?q=80&w=2070&auto=format&fit=crop"
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Attendance" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Regular attendance matters most in practical subjects, where each session builds on the last. If you must miss a class, inform your instructor in advance so that catch-up work can be arranged." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Practice and lab use" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Handle computers, peripherals and networking equipment carefully." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Do not install unapproved software or change system configuration on lab machines." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Save your work in your own folder; the institute is not responsible for unsaved work." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Food and drink are not permitted at the workstations." })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Project work" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Project submissions should be your own work. Learning from references and documentation is encouraged; presenting someone else's project as your own is not." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Conduct" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Treat fellow students, instructors and staff with respect. Harassment, damage to property or disruption of classes may lead to enrolment being discontinued." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Records" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The institute maintains enrolment, course and fee records for each student. You may request a copy of your own record at any time." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "What you can expect from us" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Clear teaching, practical work on real tools, timely information about schedule changes and a fair hearing if something goes wrong. Speak to an instructor or contact",
			" ",
			s.institute_name,
			" on ",
			s.phone_primary,
			s.phone_secondary ? ` or ${s.phone_secondary}` : "",
			"."
		] })
	] })] });
}
//#endregion
export { StudentPolicy as component };
