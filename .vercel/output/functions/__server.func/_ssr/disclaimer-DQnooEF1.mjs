import { a as FALLBACK_SETTINGS } from "./brand-DdQD3q0T.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Prose, c as SiteShell, i as PageHero } from "./pieces-l00FVp0i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/disclaimer-DQnooEF1.js
var import_jsx_runtime = require_jsx_runtime();
function Disclaimer() {
	const s = FALLBACK_SETTINGS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Legal",
		title: "Disclaimer",
		lead: "What the information on this website does and does not promise."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Course information" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Course descriptions, syllabus points, durations and levels on this website are provided for guidance. They may be revised as technologies and teaching plans change. For the current details of any course, please confirm with the institute directly." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Learning outcomes" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Progress depends on each student's attendance, practice and effort. The institute does not guarantee any specific result, certification outcome, employment, placement or income from completing a course." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Third-party names and technologies" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Programming languages, frameworks, tools and platform names referred to on this site belong to their respective owners and are named only to describe what is taught. Their mention does not imply any affiliation, endorsement or partnership." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "External links" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Where this site links to external websites or opens WhatsApp, those services are operated by others and their content and policies are outside our control." }),
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
export { Disclaimer as component };
