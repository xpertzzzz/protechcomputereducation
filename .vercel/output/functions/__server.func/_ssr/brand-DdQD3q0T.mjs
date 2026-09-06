//#region node_modules/.nitro/vite/services/ssr/assets/brand-DdQD3q0T.js
var LOGO_URL = "/logowithtext.png";
var FALLBACK_SETTINGS = {
	institute_name: "PROTECH COMPUTER EDUCATION",
	tagline: "Bringing programming and web technologies for you",
	phone_primary: "7008414704",
	phone_secondary: "7787840997",
	whatsapp_number: "917008414704",
	email: null,
	address_line: "Bolgarh Bus Stand",
	city: "Khordha",
	state: "Odisha",
	pincode: "752065",
	facebook_url: null,
	instagram_url: null,
	youtube_url: null,
	linkedin_url: null,
	logo_url: null,
	favicon_url: null
};
var COURSE_CATEGORIES = [
	"Website Designing",
	"Website Development",
	"Programming Excellence",
	"AI & Emerging Technology"
];
var COURSE_LEVELS = [
	"Beginner",
	"Intermediate",
	"Advanced"
];
var COURSE_HIGHLIGHTS = [
	"Computer Fundamentals",
	"Software Engineering",
	"Cyber Security",
	"Computer Organization & Architecture",
	"Data Structure — Basic",
	"Discrete Mathematical Structure",
	"Database Concept & SQL",
	"Computer Networking",
	"Cloud Computing",
	"Problem Solving",
	"Algorithm",
	"Computer Graphics",
	"Practical Programming Projects",
	"Mini Projects",
	"Internship"
];
var AI_TRACK = [
	{
		name: "AI Concepts",
		note: "Foundations, scope and responsible use"
	},
	{
		name: "Machine Learning — Basic",
		note: "Data, models, evaluation"
	},
	{
		name: "Data Science",
		note: "Analysis pipeline end to end"
	},
	{
		name: "NLP",
		note: "Language as structured data"
	},
	{
		name: "AI Projects & Tools",
		note: "Applied, portfolio-ready work"
	}
];
function normalizeWhatsApp(number) {
	const digits = (number ?? "").replace(/\D/g, "");
	if (!digits) return "";
	if (digits.length === 10) return `91${digits}`;
	return digits;
}
function whatsappLink(number, message) {
	return `https://wa.me/${normalizeWhatsApp(number)}?text=${encodeURIComponent(message)}`;
}
function enquiryWhatsAppMessage(input) {
	return [
		"Hello Protech Computer Education,",
		"",
		`I would like to enquire about ${input.course?.trim() || "your courses"}.`,
		"",
		`Name: ${input.name}`,
		`Mobile: ${input.mobile}`,
		`Email: ${input.email?.trim() || "—"}`,
		"",
		"Message:",
		input.message?.trim() || "—"
	].join("\n");
}
function formatINR(value) {
	const n = Number(value ?? 0);
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0
	}).format(Number.isFinite(n) ? n : 0);
}
function formatDate(value) {
	if (!value) return "—";
	const d = new Date(value);
	if (Number.isNaN(d.getTime())) return "—";
	return d.toLocaleDateString("en-IN", {
		day: "2-digit",
		month: "short",
		year: "numeric"
	});
}
function telHref(number) {
	const digits = (number ?? "").replace(/[^\d]/g, "");
	if (!digits) return "tel:";
	return `tel:+${digits.length === 10 ? `91${digits}` : digits}`;
}
//#endregion
export { FALLBACK_SETTINGS as a, formatDate as c, whatsappLink as d, COURSE_LEVELS as i, formatINR as l, COURSE_CATEGORIES as n, LOGO_URL as o, COURSE_HIGHLIGHTS as r, enquiryWhatsAppMessage as s, AI_TRACK as t, telHref as u };
