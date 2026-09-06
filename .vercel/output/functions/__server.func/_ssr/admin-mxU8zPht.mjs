import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { a as eq, i as desc, m as sql } from "../_libs/drizzle-orm+postgres.mjs";
import { a as galleryItems, c as students, i as enquiries, l as testimonials, n as createServerRpc, o as payments, r as db, t as courses } from "./db-BNOqJG8A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-mxU8zPht.js
var getAdminCoursesFn_createServerFn_handler = createServerRpc({
	id: "b7e90880cc0dfbacc8253610d9cf812d6a0d9fc2f8b30aac770e34a7d4ea95a1",
	name: "getAdminCoursesFn",
	filename: "src/server/admin.ts"
}, (opts) => getAdminCoursesFn.__executeServer(opts));
var getAdminCoursesFn = createServerFn({ method: "GET" }).handler(getAdminCoursesFn_createServerFn_handler, async () => {
	return await db.select().from(courses).orderBy(desc(courses.createdAt));
});
var getEnquiriesFn_createServerFn_handler = createServerRpc({
	id: "616ccbdc67f76f4202a56efa5610cfa96cb2570bbf422e5479453c7213f2b3de",
	name: "getEnquiriesFn",
	filename: "src/server/admin.ts"
}, (opts) => getEnquiriesFn.__executeServer(opts));
var getEnquiriesFn = createServerFn({ method: "GET" }).handler(getEnquiriesFn_createServerFn_handler, async () => {
	return await db.select().from(enquiries).orderBy(desc(enquiries.createdAt));
});
var getAdminGalleryFn_createServerFn_handler = createServerRpc({
	id: "41df4f75f3ed6dc9c672d553e00ce1d075f64cebb3e97d8dad597c178aa842ef",
	name: "getAdminGalleryFn",
	filename: "src/server/admin.ts"
}, (opts) => getAdminGalleryFn.__executeServer(opts));
var getAdminGalleryFn = createServerFn({ method: "GET" }).handler(getAdminGalleryFn_createServerFn_handler, async () => {
	return await db.select().from(galleryItems).orderBy(desc(galleryItems.createdAt));
});
var getDashboardStatsFn_createServerFn_handler = createServerRpc({
	id: "12240b4f3db93cde1a65620345a87c1db2c8c2c8e900e75eab339e1307885af6",
	name: "getDashboardStatsFn",
	filename: "src/server/admin.ts"
}, (opts) => getDashboardStatsFn.__executeServer(opts));
var getDashboardStatsFn = createServerFn({ method: "GET" }).handler(getDashboardStatsFn_createServerFn_handler, async () => {
	const [studentsCount, coursesCount, enquiriesCount, revenueData] = await Promise.all([
		db.select({ count: sql`count(*)` }).from(students),
		db.select({ count: sql`count(*)` }).from(courses),
		db.select({ count: sql`count(*)` }).from(enquiries).where(eq(enquiries.status, "New")),
		db.select({ sum: sql`sum(amount)` }).from(payments).where(eq(payments.status, "Paid"))
	]);
	return {
		totalStudents: Number(studentsCount[0]?.count ?? 0),
		totalCourses: Number(coursesCount[0]?.count ?? 0),
		newEnquiries: Number(enquiriesCount[0]?.count ?? 0),
		totalRevenue: Number(revenueData[0]?.sum ?? 0)
	};
});
var getPaymentsFn_createServerFn_handler = createServerRpc({
	id: "ce0dbbd3ede3e83cfe5ebed55cfcdc90cc337578345995c8613d2fbb4df3708e",
	name: "getPaymentsFn",
	filename: "src/server/admin.ts"
}, (opts) => getPaymentsFn.__executeServer(opts));
var getPaymentsFn = createServerFn({ method: "GET" }).handler(getPaymentsFn_createServerFn_handler, async () => {
	return await db.select({
		id: payments.id,
		amount: payments.amount,
		paymentDate: payments.paymentDate,
		status: payments.status,
		paymentMethod: payments.paymentMethod,
		studentName: students.fullName,
		courseName: courses.name
	}).from(payments).leftJoin(students, eq(payments.studentId, students.id)).leftJoin(courses, eq(payments.courseId, courses.id)).orderBy(desc(payments.paymentDate));
});
var getStudentsFn_createServerFn_handler = createServerRpc({
	id: "f91c012dc296d338256995ceba0a6bd8f043e5710e66e2cc5d07762b8dbd653c",
	name: "getStudentsFn",
	filename: "src/server/admin.ts"
}, (opts) => getStudentsFn.__executeServer(opts));
var getStudentsFn = createServerFn({ method: "GET" }).handler(getStudentsFn_createServerFn_handler, async () => {
	return await db.select().from(students).orderBy(desc(students.createdAt));
});
var getAdminTestimonialsFn_createServerFn_handler = createServerRpc({
	id: "f3eee142ad4ae9105f6b7ebcfbe30e76c99d81a63fc4f937467faf87edb40250",
	name: "getAdminTestimonialsFn",
	filename: "src/server/admin.ts"
}, (opts) => getAdminTestimonialsFn.__executeServer(opts));
var getAdminTestimonialsFn = createServerFn({ method: "GET" }).handler(getAdminTestimonialsFn_createServerFn_handler, async () => {
	return await db.select().from(testimonials).orderBy(desc(testimonials.createdAt));
});
//#endregion
export { getAdminCoursesFn_createServerFn_handler, getAdminGalleryFn_createServerFn_handler, getAdminTestimonialsFn_createServerFn_handler, getDashboardStatsFn_createServerFn_handler, getEnquiriesFn_createServerFn_handler, getPaymentsFn_createServerFn_handler, getStudentsFn_createServerFn_handler };
