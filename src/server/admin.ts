import { createServerFn } from "@tanstack/react-start";
import { db } from "@/db/index";
import { students, courses, enquiries, payments, galleryItems, testimonials } from "@/db/schema";
import { eq, desc, count, sql } from "drizzle-orm";

export const getAdminCoursesFn = createServerFn({ method: "GET" }).handler(async () => {
  return await db.select().from(courses).orderBy(desc(courses.createdAt));
});

export const getEnquiriesFn = createServerFn({ method: "GET" }).handler(async () => {
  return await db.select().from(enquiries).orderBy(desc(enquiries.createdAt));
});

export const getAdminGalleryFn = createServerFn({ method: "GET" }).handler(async () => {
  return await db.select().from(galleryItems).orderBy(desc(galleryItems.createdAt));
});

export const getDashboardStatsFn = createServerFn({ method: "GET" }).handler(async () => {
  const [
    studentsCount,
    coursesCount,
    enquiriesCount,
    revenueData
  ] = await Promise.all([
    db.select({ count: sql<number>`count(*)` }).from(students),
    db.select({ count: sql<number>`count(*)` }).from(courses),
    db.select({ count: sql<number>`count(*)` }).from(enquiries).where(eq(enquiries.status, 'New')),
    db.select({ sum: sql<number>`sum(amount)` }).from(payments).where(eq(payments.status, 'Paid'))
  ]);

  return {
    totalStudents: Number(studentsCount[0]?.count ?? 0),
    totalCourses: Number(coursesCount[0]?.count ?? 0),
    newEnquiries: Number(enquiriesCount[0]?.count ?? 0),
    totalRevenue: Number(revenueData[0]?.sum ?? 0),
  };
});

export const getPaymentsFn = createServerFn({ method: "GET" }).handler(async () => {
  return await db.select({
    id: payments.id,
    amount: payments.amount,
    paymentDate: payments.paymentDate,
    status: payments.status,
    paymentMethod: payments.paymentMethod,
    studentName: students.fullName,
    courseName: courses.name
  })
  .from(payments)
  .leftJoin(students, eq(payments.studentId, students.id))
  .leftJoin(courses, eq(payments.courseId, courses.id))
  .orderBy(desc(payments.paymentDate));
});

export const getStudentsFn = createServerFn({ method: "GET" }).handler(async () => {
  return await db.select().from(students).orderBy(desc(students.createdAt));
});

export const getAdminTestimonialsFn = createServerFn({ method: "GET" }).handler(async () => {
  return await db.select().from(testimonials).orderBy(desc(testimonials.createdAt));
});
