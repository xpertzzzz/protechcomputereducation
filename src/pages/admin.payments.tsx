
import { getPaymentsFn } from "@/server/admin";
import { useQuery } from "@tanstack/react-query";
import { formatINR, formatDate } from "@/lib/brand";
import { exportPaymentsFn } from "@/server/export";
import { useState } from "react";
import { Download } from "lucide-react";

function AdminPayments() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["admin", "payments"],
    queryFn: () => getPaymentsFn(),
  });
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      const base64 = await exportPaymentsFn();
      const a = document.createElement("a");
      a.href = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${base64}`;
      a.download = `payments_export_${new Date().toISOString().split("T")[0]}.xlsx`;
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
          <h1 className="text-3xl font-display font-medium tracking-tight">Payments</h1>
          <p className="text-muted-foreground mt-2">Manage student fees and transactions.</p>
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
            Record Payment
          </button>
        </div>
      </div>

      <div className="rounded-md border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted text-muted-foreground border-b border-border">
              <tr>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Student Name</th>
                <th className="px-6 py-3 font-medium">Course</th>
                <th className="px-6 py-3 font-medium">Amount</th>
                <th className="px-6 py-3 font-medium">Method</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">Loading...</td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">No payments found.</td>
                </tr>
              ) : (
                data.map((payment) => (
                  <tr key={payment.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-muted-foreground">{formatDate(payment.paymentDate.toISOString())}</td>
                    <td className="px-6 py-4 font-medium">{payment.studentName}</td>
                    <td className="px-6 py-4">{payment.courseName || "—"}</td>
                    <td className="px-6 py-4 font-medium">{formatINR(payment.amount)}</td>
                    <td className="px-6 py-4">{payment.paymentMethod || "—"}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        payment.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {payment.status}
                      </span>
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

export default AdminPayments;
