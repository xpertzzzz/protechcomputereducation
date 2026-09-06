import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { db } from "@/db";
import { enquiries } from "@/db/schema";
import { desc } from "drizzle-orm";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "@/lib/brand";

export const getEnquiriesFn = createServerFn({ method: "GET" }).handler(async () => {
  return await db.select().from(enquiries).orderBy(desc(enquiries.createdAt));
});

export const Route = createFileRoute("/admin/enquiries")({
  component: AdminEnquiries,
});

function AdminEnquiries() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["admin", "enquiries"],
    queryFn: () => getEnquiriesFn(),
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-medium tracking-tight">Enquiries</h1>
          <p className="text-muted-foreground mt-2">Manage incoming student enquiries.</p>
        </div>
      </div>

      <div className="rounded-md border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted text-muted-foreground border-b border-border">
              <tr>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Mobile</th>
                <th className="px-6 py-3 font-medium">Course Interested</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Date</th>
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
                  <td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">No enquiries found.</td>
                </tr>
              ) : (
                data.map((enq) => (
                  <tr key={enq.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{enq.name}</td>
                    <td className="px-6 py-4">{enq.mobileNumber}</td>
                    <td className="px-6 py-4">{enq.courseInterestedIn || "—"}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        enq.status === 'New' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {enq.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{formatDate(enq.createdAt.toISOString())}</td>
                    <td className="px-6 py-4">
                      <button className="text-teal hover:underline text-sm font-medium">View</button>
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
