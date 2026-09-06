import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses._slug-NCj2YSy2.js
var $$splitComponentImporter = () => import("./courses._slug-CV2IfV5q.mjs");
var Route = createFileRoute("/courses/$slug")({
	head: ({ params }) => {
		const readable = params.slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
		return { meta: [
			{ title: `${readable} — Protech Computer Education` },
			{
				name: "description",
				content: `${readable} course at Protech Computer Education, Khordha: syllabus, level, duration, technologies and practical projects.`
			},
			{
				property: "og:title",
				content: `${readable} — Protech Computer Education`
			},
			{
				property: "og:description",
				content: `Course details, syllabus and projects for ${readable}.`
			},
			{
				rel: "canonical",
				href: `https://protech-computer-education.lovable.app/courses/${params.slug}`
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
