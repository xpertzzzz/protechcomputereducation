import { a as FALLBACK_SETTINGS } from "./brand-DdQD3q0T.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Prose, c as SiteShell, i as PageHero } from "./pieces-dZJcImtG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/refund-policy-Co9MdGIv.js
var import_jsx_runtime = require_jsx_runtime();
function RefundPolicy() {
	const s = FALLBACK_SETTINGS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Refund Policy",
		lead: "How cancellations and fee refunds are handled.",
		breadcrumbs: [{
			label: "Home",
			path: "/"
		}, { label: "Refund Policy" }],
		bgImages: [
			"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1505664159814-fb5e47895e68?q=80&w=2070&auto=format&fit=crop"
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Prose, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Requesting a refund" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Refund requests must be made in writing or in person at the institute, stating the student name, course and reason. Requests made only over WhatsApp or phone should be followed by a written confirmation so that they can be recorded." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "How requests are assessed" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The date the request is received relative to the batch start date." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sessions already attended and study material already issued." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Any registration or admission component of the fee, which is non-refundable." })
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "If the institute cancels a batch" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If the institute cancels a batch before it begins and cannot offer you a suitable alternative batch, the fee paid for that course is refunded in full." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Processing" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Approved refunds are paid back through the same method used for payment wherever possible, and the refund is recorded against the student's payment history." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Discussing your situation" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Circumstances differ. If you need to withdraw, speak to us early — options such as moving to a later batch or pausing your course may be available. Contact ",
			s.institute_name,
			",",
			" ",
			s.address_line,
			", ",
			s.city,
			", ",
			s.state,
			" — ",
			s.pincode,
			", phone ",
			s.phone_primary,
			s.phone_secondary ? ` or ${s.phone_secondary}` : "",
			"."
		] })
	] })] });
}
//#endregion
export { RefundPolicy as component };
