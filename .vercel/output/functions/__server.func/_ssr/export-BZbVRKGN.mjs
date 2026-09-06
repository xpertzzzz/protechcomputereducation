import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { n as getSessionFn } from "./auth-functions-WtFVrDno.mjs";
import { a as eq, i as desc } from "../_libs/drizzle-orm+postgres.mjs";
import { c as students, n as createServerRpc, o as payments, r as db, t as courses } from "./db-BNOqJG8A.mjs";
import { n as writeSync, t as utils } from "../_libs/xlsx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/export-BZbVRKGN.js
var exportStudentsFn_createServerFn_handler = createServerRpc({
	id: "9efcd0df4df4b6bff25127d6aa2d958c86c8d50e58d719369873c6b74b786c13",
	name: "exportStudentsFn",
	filename: "src/server/export.ts"
}, (opts) => exportStudentsFn.__executeServer(opts));
var exportStudentsFn = createServerFn({ method: "GET" }).handler(exportStudentsFn_createServerFn_handler, async () => {
	const session = await getSessionFn();
	if (!session || session.role !== "admin") throw new Error("Unauthorized");
	const data = (await db.select().from(students).orderBy(desc(students.createdAt))).map((s) => ({
		"Student ID": s.studentId,
		"Full Name": s.fullName,
		"Mobile": s.mobileNumber,
		"Email": s.email || "",
		"Status": s.status,
		"Admission Date": s.admissionDate.toISOString().split("T")[0],
		"Address": s.address || ""
	}));
	const worksheet = utils.json_to_sheet(data);
	const workbook = utils.book_new();
	utils.book_append_sheet(workbook, worksheet, "Students");
	return writeSync(workbook, {
		type: "base64",
		bookType: "xlsx"
	});
});
var exportPaymentsFn_createServerFn_handler = createServerRpc({
	id: "13f072bcb0defb6ecd263bdb3fc8aaf828e38ea11c4733e56d9e1581cfc92c4a",
	name: "exportPaymentsFn",
	filename: "src/server/export.ts"
}, (opts) => exportPaymentsFn.__executeServer(opts));
var exportPaymentsFn = createServerFn({ method: "GET" }).handler(exportPaymentsFn_createServerFn_handler, async () => {
	const session = await getSessionFn();
	if (!session || session.role !== "admin") throw new Error("Unauthorized");
	const data = (await db.select({
		id: payments.id,
		amount: payments.amount,
		paymentDate: payments.paymentDate,
		status: payments.status,
		paymentMethod: payments.paymentMethod,
		studentName: students.fullName,
		studentId: students.studentId,
		courseName: courses.name
	}).from(payments).leftJoin(students, eq(payments.studentId, students.id)).leftJoin(courses, eq(payments.courseId, courses.id)).orderBy(desc(payments.paymentDate))).map((p) => ({
		"Payment ID": p.id,
		"Date": p.paymentDate.toISOString().split("T")[0],
		"Student Name": p.studentName || "",
		"Student ID": p.studentId || "",
		"Course": p.courseName || "",
		"Amount (INR)": p.amount,
		"Method": p.paymentMethod || "",
		"Status": p.status
	}));
	const worksheet = utils.json_to_sheet(data);
	const workbook = utils.book_new();
	utils.book_append_sheet(workbook, worksheet, "Payments");
	return writeSync(workbook, {
		type: "base64",
		bookType: "xlsx"
	});
});
//#endregion
export { exportPaymentsFn_createServerFn_handler, exportStudentsFn_createServerFn_handler };
