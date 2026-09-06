import { createFileRoute } from "@tanstack/react-router";
import { getDashboardStatsFn } from "@/server/admin";
import { useQuery } from "@tanstack/react-query";
import { Users, BookOpen, MessageSquare, CreditCard } from "lucide-react";
import { formatINR } from "@/lib/brand";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["admin", "dashboard", "stats"],
    queryFn: () => getDashboardStatsFn(),
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-medium tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome to the Protech Computer Education administration panel.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Students" 
          value={isLoading ? "..." : stats?.totalStudents} 
          icon={<Users className="h-4 w-4 text-muted-foreground" />} 
        />
        <StatCard 
          title="Active Courses" 
          value={isLoading ? "..." : stats?.totalCourses} 
          icon={<BookOpen className="h-4 w-4 text-muted-foreground" />} 
        />
        <StatCard 
          title="New Enquiries" 
          value={isLoading ? "..." : stats?.newEnquiries} 
          icon={<MessageSquare className="h-4 w-4 text-muted-foreground" />} 
        />
        <StatCard 
          title="Total Revenue" 
          value={isLoading ? "..." : formatINR(stats?.totalRevenue)} 
          icon={<CreditCard className="h-4 w-4 text-muted-foreground" />} 
        />
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string; value: React.ReactNode; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-sm font-medium">{title}</h3>
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </div>
  );
}
