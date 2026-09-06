import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C1Zcq0Gw.js
var $$splitComponentImporter = () => import("./contact-B7NCwvBc.mjs");
var Route = createFileRoute("/contact")({
	validateSearch: (search) => {
		const params = {};
		if (typeof search["course"] === "string") params.course = search["course"];
		return params;
	},
	head: () => ({ meta: [
		{ title: "Contact & Admissions - Protech Computer Education" },
		{
			name: "description",
			content: "Contact Protech Computer Education at Bolgarh Bus Stand, Khordha, Odisha 752065. Call 7008414704 or 7787840997, or send an admission enquiry."
		},
		{
			property: "og:title",
			content: "Contact Protech Computer Education"
		},
		{
			property: "og:description",
			content: "Bolgarh Bus Stand, Khordha, Odisha 752065. Call 7008414704 or 7787840997."
		},
		{
			rel: "canonical",
			href: "https://protech-computer-education.lovable.app/contact"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
