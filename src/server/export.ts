import { db } from "@/db";
import { students, payments, courses } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import * as xlsx from "xlsx";
import { getSessionFn } from "./auth-functions";

export const exportStudentsFn = async (req: any, res: any) => {
  const session = await getSessionFn(req);
  if (!session) {
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

  return xlsx.write(workbook, { type: "base64", bookType: "xlsx" });
};

export const exportPaymentsFn = async (req: any, res: any) => {
  const session = await getSessionFn(req);
  if (!session) {
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

  return xlsx.write(workbook, { type: "base64", bookType: "xlsx" });
};
