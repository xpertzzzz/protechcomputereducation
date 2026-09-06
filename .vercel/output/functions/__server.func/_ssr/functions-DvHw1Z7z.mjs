import { a as FALLBACK_SETTINGS } from "./brand-DdQD3q0T.mjs";
import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { a as eq, i as desc, r as asc } from "../_libs/drizzle-orm+postgres.mjs";
import { a as galleryItems, i as enquiries, l as testimonials, n as createServerRpc, r as db, s as settings, t as courses } from "./db-BNOqJG8A.mjs";
import { a as verifyCredentials, i as verifyAdminSession, n as createAdminSession, t as clearAdminSession } from "./auth-Cr268tDJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/functions-DvHw1Z7z.js
function safeParseArray(val, separator = ",") {
	if (!val) return [];
	try {
		const parsed = JSON.parse(val);
		if (Array.isArray(parsed)) return parsed;
	} catch (e) {}
	return val.split(separator).map((s) => s.trim()).filter(Boolean);
}
function mapCourse(c) {
	return {
		id: String(c.id),
		name: c.name,
		slug: c.slug,
		category: c.category,
		level: c.level || "Beginner",
		duration: c.duration,
		short_description: c.shortDescription,
		full_description: c.description,
		syllabus: safeParseArray(c.syllabus, "\n"),
		technologies: safeParseArray(c.technologies, ","),
		projects: safeParseArray(c.projects, ","),
		prerequisites: safeParseArray(c.prerequisites, ","),
		audience: null,
		image_url: c.image,
		featured: c.featured,
		is_active: c.active,
		display_order: c.displayOrder,
		created_at: c.createdAt.toISOString()
	};
}
var getSettingsFn_createServerFn_handler = createServerRpc({
	id: "89d082a2adcc961aa14203bb348393e8f65766d634ccd979c36e19d9a4d876ea",
	name: "getSettingsFn",
	filename: "src/server/functions.ts"
}, (opts) => getSettingsFn.__executeServer(opts));
var getSettingsFn = createServerFn({ method: "GET" }).handler(getSettingsFn_createServerFn_handler, async () => {
	const result = await db.select().from(settings).where(eq(settings.id, 1)).limit(1);
	if (result.length === 0) return null;
	const s = result[0];
	return {
		institute_name: s.instituteName ?? FALLBACK_SETTINGS.institute_name,
		tagline: s.tagline ?? FALLBACK_SETTINGS.tagline,
		phone_primary: s.phoneNumbers ?? FALLBACK_SETTINGS.phone_primary,
		phone_secondary: FALLBACK_SETTINGS.phone_secondary,
		whatsapp_number: s.whatsappNumber ?? FALLBACK_SETTINGS.whatsapp_number,
		email: s.email ?? FALLBACK_SETTINGS.email,
		address_line: s.address ?? FALLBACK_SETTINGS.address_line,
		city: FALLBACK_SETTINGS.city,
		state: FALLBACK_SETTINGS.state,
		pincode: FALLBACK_SETTINGS.pincode,
		facebook_url: null,
		instagram_url: null,
		youtube_url: null,
		linkedin_url: null,
		logo_url: s.logoUrl,
		favicon_url: s.faviconUrl
	};
});
var getPublicCoursesFn_createServerFn_handler = createServerRpc({
	id: "032174825f368796784456ac601c30a0efb4887f2713706117025d20be5eb000",
	name: "getPublicCoursesFn",
	filename: "src/server/functions.ts"
}, (opts) => getPublicCoursesFn.__executeServer(opts));
var getPublicCoursesFn = createServerFn({ method: "GET" }).handler(getPublicCoursesFn_createServerFn_handler, async () => {
	return (await db.select().from(courses).where(eq(courses.active, true)).orderBy(asc(courses.displayOrder), asc(courses.name))).map(mapCourse);
});
var getCourseBySlugFn_createServerFn_handler = createServerRpc({
	id: "b93c4fc6550e44bced113342801e52d573c2d6e7732d7aa13cb43d3beb197bff",
	name: "getCourseBySlugFn",
	filename: "src/server/functions.ts"
}, (opts) => getCourseBySlugFn.__executeServer(opts));
var getCourseBySlugFn = createServerFn({ method: "GET" }).validator((slug) => slug).handler(getCourseBySlugFn_createServerFn_handler, async ({ data: slug }) => {
	const result = await db.select().from(courses).where(eq(courses.slug, slug)).limit(1);
	return result.length > 0 && result[0].active ? mapCourse(result[0]) : null;
});
var getPublicGalleryFn_createServerFn_handler = createServerRpc({
	id: "89720fa7d07a91ee36640e101ec3e421b356837ff2db507a44bbe47a5aeb119d",
	name: "getPublicGalleryFn",
	filename: "src/server/functions.ts"
}, (opts) => getPublicGalleryFn.__executeServer(opts));
var getPublicGalleryFn = createServerFn({ method: "GET" }).handler(getPublicGalleryFn_createServerFn_handler, async () => {
	return (await db.select().from(galleryItems).where(eq(galleryItems.active, true)).orderBy(asc(galleryItems.displayOrder), desc(galleryItems.createdAt))).map((g) => ({
		id: String(g.id),
		title: g.title,
		description: g.description,
		category: g.category,
		image_url: g.imageUrl,
		storage_path: null,
		taken_on: g.createdAt.toISOString(),
		display_order: g.displayOrder,
		featured: g.featured,
		is_published: g.active
	}));
});
var getPublicTestimonialsFn_createServerFn_handler = createServerRpc({
	id: "f46fbcdfc744977e7e30f6318da9185a6aee6799b59b4b91d89c5a7ed4325fac",
	name: "getPublicTestimonialsFn",
	filename: "src/server/functions.ts"
}, (opts) => getPublicTestimonialsFn.__executeServer(opts));
var getPublicTestimonialsFn = createServerFn({ method: "GET" }).handler(getPublicTestimonialsFn_createServerFn_handler, async () => {
	return (await db.select().from(testimonials).where(eq(testimonials.active, true)).orderBy(asc(testimonials.displayOrder), desc(testimonials.createdAt))).map((t) => ({
		id: String(t.id),
		student_name: t.studentName,
		course_name: t.course,
		photo_url: t.photoUrl,
		rating: t.rating,
		content: t.testimonial,
		given_on: t.createdAt.toISOString(),
		display_order: t.displayOrder,
		featured: t.featured,
		is_published: t.active
	}));
});
var submitEnquiryFn_createServerFn_handler = createServerRpc({
	id: "751a8a6bdaa9911211a312879fc845d26424a164f3a6b8b97863ff3eeba84465",
	name: "submitEnquiryFn",
	filename: "src/server/functions.ts"
}, (opts) => submitEnquiryFn.__executeServer(opts));
var submitEnquiryFn = createServerFn({ method: "POST" }).validator((data) => data).handler(submitEnquiryFn_createServerFn_handler, async ({ data }) => {
	await db.insert(enquiries).values({
		name: data.name,
		mobileNumber: data.mobile,
		email: data.email || null,
		courseInterestedIn: data.course_name || null,
		message: data.message || null
	});
	return { success: true };
});
var loginFn_createServerFn_handler = createServerRpc({
	id: "fdad76f66590512404b4110799fa58b110f3643b1a2db6061fe41e320c2c001f",
	name: "loginFn",
	filename: "src/server/functions.ts"
}, (opts) => loginFn.__executeServer(opts));
var loginFn = createServerFn({ method: "POST" }).validator((data) => data).handler(loginFn_createServerFn_handler, async ({ data }) => {
	if (!verifyCredentials(data.username, data.password)) throw new Error("Invalid username or password");
	await createAdminSession();
	return { success: true };
});
var logoutFn_createServerFn_handler = createServerRpc({
	id: "2f626000867da5a61f21feab5ff08b3c0d8aabdbd2634c294834ad4ccb68e818",
	name: "logoutFn",
	filename: "src/server/functions.ts"
}, (opts) => logoutFn.__executeServer(opts));
var logoutFn = createServerFn({ method: "POST" }).handler(logoutFn_createServerFn_handler, async () => {
	clearAdminSession();
	return { success: true };
});
var checkAuthFn_createServerFn_handler = createServerRpc({
	id: "0c663e963b7e91c3d331c964fe523ee52a6f44a3f41a353d685593396f9724de",
	name: "checkAuthFn",
	filename: "src/server/functions.ts"
}, (opts) => checkAuthFn.__executeServer(opts));
var checkAuthFn = createServerFn({ method: "GET" }).handler(checkAuthFn_createServerFn_handler, async () => {
	return { isAuthenticated: await verifyAdminSession() };
});
//#endregion
export { checkAuthFn_createServerFn_handler, getCourseBySlugFn_createServerFn_handler, getPublicCoursesFn_createServerFn_handler, getPublicGalleryFn_createServerFn_handler, getPublicTestimonialsFn_createServerFn_handler, getSettingsFn_createServerFn_handler, loginFn_createServerFn_handler, logoutFn_createServerFn_handler, submitEnquiryFn_createServerFn_handler };
