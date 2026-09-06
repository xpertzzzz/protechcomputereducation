import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { db } from "@/db";
import { students } from "@/db/schema";
import { desc } from "drizzle-orm";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "@/lib/brand";
import { exportStudentsFn } from "@/lib/export";
import { useState } from "react";
import { Download } from "lucide-react";

export const getStudentsFn = createServerFn({ method: "GET" }).handler(async () => {
  return await db.select().from(students).orderBy(desc(students.createdAt));
});

export const Route = createFileRoute("/admin/students")({
  component: AdminStudents,
});

function AdminStudents() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["admin", "students"],
    queryFn: () => getStudentsFn(),
  });
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      const base64 = await exportStudentsFn();
      const a = document.createElement("a");
      a.href = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${base64}`;
      a.download = `students_export_${new Date().toISOString().split("T")[0]}.xlsx`;
      a.click();
    } catch (err) {
      console.error(err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-medium tracking-tight">Students</h1>
          <p className="text-muted-foreground mt-2">Manage student enrollments and records.</p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center gap-2 bg-muted text-foreground px-4 py-2 text-sm font-medium hover:bg-muted/80 transition-colors disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            {isExporting ? "Exporting..." : "Export"}
          </button>
          <button className="bg-foreground text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition-colors">
            Add Student
          </button>
        </div>
      </div>

      <div className="rounded-md border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted text-muted-foreground border-b border-border">
              <tr>
                <th className="px-6 py-3 font-medium">ID</th>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Mobile</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Joined</th>
                <th className="px-6 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">Loading...</td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">No students found.</td>
                </tr>
              ) : (
                data.map((student) => (
                  <tr key={student.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4">{student.studentId}</td>
                    <td className="px-6 py-4 font-medium">{student.fullName}</td>
                    <td className="px-6 py-4">{student.mobileNumber}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{formatDate(student.createdAt.toISOString())}</td>
                    <td className="px-6 py-4">
                      <button className="text-teal hover:underline text-sm font-medium">Edit</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
