import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses.index-4PEua8O5.js
var $$splitComponentImporter = () => import("./courses.index-B5nTiPAG.mjs");
var Route = createFileRoute("/courses/")({
	validateSearch: (search) => ({
		...typeof search["category"] === "string" ? { category: search["category"] } : {},
		...typeof search["level"] === "string" ? { level: search["level"] } : {},
		...typeof search["tech"] === "string" ? { tech: search["tech"] } : {}
	}),
	head: () => ({ meta: [
		{ title: "Courses — Protech Computer Education" },
		{
			name: "description",
			content: "Browse programming, web design, web development and AI courses at Protech Computer Education. Filter by track, level and technology."
		},
		{
			property: "og:title",
			content: "Courses at Protech Computer Education"
		},
		{
			property: "og:description",
			content: "Website designing, development, programming excellence and AI courses."
		},
		{
			rel: "canonical",
			href: "https://protech-computer-education.lovable.app/courses"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
