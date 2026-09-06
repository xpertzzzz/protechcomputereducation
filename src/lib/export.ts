import { createServerFn } from "@tanstack/react-start";
import { db } from "@/db";
import { students, payments, courses } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import * as xlsx from "xlsx";
import { getSessionFn } from "./auth-server";

export const exportStudentsFn = createServerFn({ method: "GET" }).handler(async () => {
  const session = await getSessionFn();
  if (!session || session.role !== 'admin') {
    throw new Error("Unauthorized");
  }

  const allStudents = await db.select().from(students).orderBy(desc(students.createdAt));

  const data = allStudents.map(s => ({
    "Student ID": s.studentId,
    "Full Name": s.fullName,
    "Mobile": s.mobileNumber,
    "Email": s.email || "",
    "Status": s.status,
    "Admission Date": s.admissionDate.toISOString().split("T")[0],
    "Address": s.address || "",
  }));

  const worksheet = xlsx.utils.json_to_sheet(data);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, "Students");

  // Output as base64
  const base64 = xlsx.write(workbook, { type: "base64", bookType: "xlsx" });
  return base64;
});

export const exportPaymentsFn = createServerFn({ method: "GET" }).handler(async () => {
  const session = await getSessionFn();
  if (!session || session.role !== 'admin') {
    throw new Error("Unauthorized");
  }

  const allPayments = await db.select({
    id: payments.id,
    amount: payments.amount,
    paymentDate: payments.paymentDate,
    status: payments.status,
    paymentMethod: payments.paymentMethod,
    studentName: students.fullName,
    studentId: students.studentId,
    courseName: courses.name
  })
  .from(payments)
  .leftJoin(students, eq(payments.studentId, students.id))
  .leftJoin(courses, eq(payments.courseId, courses.id))
  .orderBy(desc(payments.paymentDate));

  const data = allPayments.map(p => ({
    "Payment ID": p.id,
    "Date": p.paymentDate.toISOString().split("T")[0],
    "Student Name": p.studentName || "",
    "Student ID": p.studentId || "",
    "Course": p.courseName || "",
    "Amount (INR)": p.amount,
    "Method": p.paymentMethod || "",
    "Status": p.status,
  }));

  const worksheet = xlsx.utils.json_to_sheet(data);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, "Payments");

  const base64 = xlsx.write(workbook, { type: "base64", bookType: "xlsx" });
  return base64;
});
