import { a as FALLBACK_SETTINGS } from "./brand-DdQD3q0T.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Prose, c as SiteShell, i as PageHero } from "./pieces-dZJcImtG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-and-conditions-CXOkIAm5.js
var import_jsx_runtime = require_jsx_runtime();
function Terms() {
	const s = FALLBACK_SETTINGS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Terms & Conditions",
		lead: "The terms that apply to enrolment and to using this website.",
		breadcrumbs: [{
			label: "Home",
			path: "/"
		}, { label: "Terms & Conditions" }],
		bgImages: [
			"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1505664159814-fb5e47895e68?q=80&w=2070&auto=format&fit=crop"
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Enrolment" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Admission to a course is confirmed only after the institute accepts the enrolment and the agreed fee arrangement is recorded. Seats in a batch are limited and are allotted in order of confirmed admissions." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Fees" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fees, instalment arrangements and due dates are agreed at the time of admission." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Payment records are maintained by the institute and available on request." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Continued attendance may depend on fees being up to date." })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Course delivery" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Course content, batch timings and schedules may be adjusted where required for teaching reasons. Where a change affects you, the institute will inform you in advance by phone, WhatsApp or in class." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Student conduct" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Students are expected to use institute equipment responsibly, respect other learners and instructors, and follow the safety and usage rules explained on the premises. The institute may discontinue enrolment in cases of serious or repeated misconduct." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Website use and content" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The name, logo, course descriptions and material on this website belong to the institute and may not be reproduced without permission. Course listings and details on this site are for information and may be updated at any time." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Contact" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			s.institute_name,
			", ",
			s.address_line,
			", ",
			s.city,
			", ",
			s.state,
			" — ",
			s.pincode,
			". Phone",
			" ",
			s.phone_primary,
			s.phone_secondary ? ` or ${s.phone_secondary}` : "",
			"."
		] })
	] })] });
}
//#endregion
export { Terms as component };
