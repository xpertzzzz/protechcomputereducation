import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-sFB7R9wl.js
var $$splitComponentImporter = () => import("./contact-BbTJEHo3.mjs");
var Route = createFileRoute("/contact")({
	validateSearch: (search) => {
		return { course: typeof search.course === "string" ? search.course : void 0 };
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
