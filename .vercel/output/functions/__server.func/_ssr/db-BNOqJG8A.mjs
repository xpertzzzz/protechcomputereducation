import { i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { c as timestamp, d as json, f as integer, h as src_default, l as text, n as relations, o as pgTable, p as boolean, s as varchar, t as drizzle, u as serial } from "../_libs/drizzle-orm+postgres.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/db-BNOqJG8A.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var schema_exports = /* @__PURE__ */ __exportAll({
	courses: () => courses,
	coursesRelations: () => coursesRelations,
	enquiries: () => enquiries,
	galleryItems: () => galleryItems,
	payments: () => payments,
	paymentsRelations: () => paymentsRelations,
	settings: () => settings,
	studentCourses: () => studentCourses,
	studentCoursesRelations: () => studentCoursesRelations,
	students: () => students,
	studentsRelations: () => studentsRelations,
	testimonials: () => testimonials,
	users: () => users
});
var users = pgTable("users", {
	id: serial("id").primaryKey(),
	email: varchar("email", { length: 255 }).notNull().unique(),
	passwordHash: varchar("password_hash", { length: 255 }).notNull(),
	role: varchar("role", { length: 50 }).notNull().default("admin"),
	createdAt: timestamp("created_at").defaultNow().notNull()
});
var students = pgTable("students", {
	id: serial("id").primaryKey(),
	studentId: varchar("student_id", { length: 50 }).notNull().unique(),
	fullName: varchar("full_name", { length: 255 }).notNull(),
	mobileNumber: varchar("mobile_number", { length: 20 }).notNull(),
	email: varchar("email", { length: 255 }),
	dateOfBirth: timestamp("date_of_birth"),
	gender: varchar("gender", { length: 20 }),
	address: text("address"),
	admissionDate: timestamp("admission_date").defaultNow().notNull(),
	notes: text("notes"),
	status: varchar("status", { length: 50 }).notNull().default("Active"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull()
});
var courses = pgTable("courses", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	slug: varchar("slug", { length: 255 }).notNull().unique(),
	category: varchar("category", { length: 255 }).notNull(),
	level: varchar("level", { length: 50 }),
	shortDescription: text("short_description"),
	description: text("description"),
	duration: varchar("duration", { length: 100 }),
	syllabus: text("syllabus"),
	technologies: text("technologies"),
	projects: text("projects"),
	prerequisites: text("prerequisites"),
	image: text("image"),
	featured: boolean("featured").default(false).notNull(),
	displayOrder: integer("display_order").default(0).notNull(),
	active: boolean("active").default(true).notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull()
});
var studentCourses = pgTable("student_courses", {
	id: serial("id").primaryKey(),
	studentId: integer("student_id").notNull().references(() => students.id, { onDelete: "cascade" }),
	courseId: integer("course_id").notNull().references(() => courses.id, { onDelete: "cascade" }),
	enrolledAt: timestamp("enrolled_at").defaultNow().notNull()
});
var payments = pgTable("payments", {
	id: serial("id").primaryKey(),
	studentId: integer("student_id").notNull().references(() => students.id, { onDelete: "cascade" }),
	courseId: integer("course_id").references(() => courses.id, { onDelete: "set null" }),
	amount: integer("amount").notNull(),
	paymentDate: timestamp("payment_date").defaultNow().notNull(),
	paymentMethod: varchar("payment_method", { length: 100 }),
	transactionId: varchar("transaction_id", { length: 255 }),
	status: varchar("status", { length: 50 }).notNull().default("Paid"),
	notes: text("notes"),
	createdAt: timestamp("created_at").defaultNow().notNull()
});
var enquiries = pgTable("enquiries", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	mobileNumber: varchar("mobile_number", { length: 20 }).notNull(),
	email: varchar("email", { length: 255 }),
	courseInterestedIn: varchar("course_interested_in", { length: 255 }),
	message: text("message"),
	status: varchar("status", { length: 50 }).notNull().default("New"),
	internalNotes: text("internal_notes"),
	createdAt: timestamp("created_at").defaultNow().notNull()
});
var galleryItems = pgTable("gallery_items", {
	id: serial("id").primaryKey(),
	title: varchar("title", { length: 255 }),
	description: text("description"),
	category: varchar("category", { length: 100 }),
	imageUrl: text("image_url").notNull(),
	displayOrder: integer("display_order").default(0).notNull(),
	featured: boolean("featured").default(false).notNull(),
	active: boolean("active").default(true).notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull()
});
var testimonials = pgTable("testimonials", {
	id: serial("id").primaryKey(),
	studentName: varchar("student_name", { length: 255 }).notNull(),
	course: varchar("course", { length: 255 }),
	photoUrl: text("photo_url"),
	rating: integer("rating").default(5).notNull(),
	testimonial: text("testimonial").notNull(),
	displayOrder: integer("display_order").default(0).notNull(),
	active: boolean("active").default(true).notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull()
});
var settings = pgTable("settings", {
	id: serial("id").primaryKey(),
	instituteName: varchar("institute_name", { length: 255 }),
	tagline: varchar("tagline", { length: 255 }),
	phoneNumbers: text("phone_numbers"),
	address: text("address"),
	whatsappNumber: varchar("whatsapp_number", { length: 50 }),
	email: varchar("email", { length: 255 }),
	socialLinks: json("social_links"),
	logoUrl: text("logo_url"),
	faviconUrl: text("favicon_url"),
	updatedAt: timestamp("updated_at").defaultNow().notNull()
});
var studentsRelations = relations(students, ({ many }) => ({
	studentCourses: many(studentCourses),
	payments: many(payments)
}));
var coursesRelations = relations(courses, ({ many }) => ({
	studentCourses: many(studentCourses),
	payments: many(payments)
}));
var studentCoursesRelations = relations(studentCourses, ({ one }) => ({
	student: one(students, {
		fields: [studentCourses.studentId],
		references: [students.id]
	}),
	course: one(courses, {
		fields: [studentCourses.courseId],
		references: [courses.id]
	})
}));
var paymentsRelations = relations(payments, ({ one }) => ({
	student: one(students, {
		fields: [payments.studentId],
		references: [students.id]
	}),
	course: one(courses, {
		fields: [payments.courseId],
		references: [courses.id]
	})
}));
var connectionString = process.env["DATABASE_URL"];
if (!connectionString) throw new Error("DATABASE_URL is missing in environment variables.");
var client = src_default(connectionString, { prepare: false });
var db = drizzle(client, { schema: schema_exports });
//#endregion
export { galleryItems as a, students as c, enquiries as i, testimonials as l, createServerRpc as n, payments as o, db as r, settings as s, courses as t, users as u };
