import { createFileRoute, Link } from "@tanstack/react-router";
import { getDashboardStatsFn } from "@/server/admin";
import { useQuery } from "@tanstack/react-query";
import { Users, BookOpen, MessageSquare, CreditCard, ArrowUpRight, TrendingUp, PlusCircle, Settings, LayoutDashboard } from "lucide-react";
import { formatINR } from "@/lib/brand";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["admin", "dashboard", "stats"],
    queryFn: () => getDashboardStatsFn(),
  });

  const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      
      {/* Premium Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cobalt to-teal p-8 text-white shadow-lg">
        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 mb-4 text-xs font-medium backdrop-blur-md">
              <LayoutDashboard className="h-3.5 w-3.5" /> 
              <span>{currentDate}</span>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Welcome back, Admin!
            </h1>
            <p className="mt-2 max-w-xl text-white/80">
              Here's what's happening at Protech Computer Education today. Review your latest enrollments, courses, and revenue.
            </p>
          </div>
          <div className="shrink-0 flex gap-3">
            <Link 
              to="/admin/courses" 
              className="inline-flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/30"
            >
              <PlusCircle className="h-4 w-4" /> Add Course
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Students" 
          value={isLoading ? "..." : stats?.totalStudents} 
          icon={<Users className="h-5 w-5 text-blue-500" />} 
          trend="+12% this month"
          trendUp={true}
          bgClass="bg-blue-50"
        />
        <StatCard 
          title="Active Courses" 
          value={isLoading ? "..." : stats?.totalCourses} 
          icon={<BookOpen className="h-5 w-5 text-indigo-500" />} 
          trend="3 new added"
          trendUp={true}
          bgClass="bg-indigo-50"
        />
        <StatCard 
          title="New Enquiries" 
          value={isLoading ? "..." : stats?.newEnquiries} 
          icon={<MessageSquare className="h-5 w-5 text-amber-500" />} 
          trend="Requires attention"
          trendUp={false}
          bgClass="bg-amber-50"
        />
        <StatCard 
          title="Total Revenue" 
          value={isLoading ? "..." : formatINR(stats?.totalRevenue)} 
          icon={<CreditCard className="h-5 w-5 text-emerald-500" />} 
          trend="+8% from last month"
          trendUp={true}
          bgClass="bg-emerald-50"
        />
      </div>

      {/* Quick Actions & Recent Activity Layout */}
      <div className="grid gap-6 md:grid-cols-3">
        
        {/* Quick Links */}
        <div className="md:col-span-1 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
            <h3 className="font-display text-lg font-bold">Quick Actions</h3>
            <div className="mt-4 flex flex-col gap-2">
              <QuickActionLink to="/admin/students" icon={<Users className="h-4 w-4" />} label="Manage Students" />
              <QuickActionLink to="/admin/enquiries" icon={<MessageSquare className="h-4 w-4" />} label="View Enquiries" />
              <QuickActionLink to="/admin/payments" icon={<CreditCard className="h-4 w-4" />} label="Record Payment" />
              <QuickActionLink to="/admin/settings" icon={<Settings className="h-4 w-4" />} label="System Settings" />
            </div>
          </div>
        </div>

        {/* Placeholder for future charts / activity */}
        <div className="md:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] flex flex-col justify-center items-center min-h-[300px] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-2 opacity-50" />
          <div className="relative z-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cobalt/10">
              <TrendingUp className="h-8 w-8 text-cobalt" />
            </div>
            <h3 className="font-display text-xl font-bold">Growth Analytics</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
              Detailed charts and student enrollment trends will appear here as more data is collected.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

function StatCard({ title, value, icon, trend, trendUp, bgClass }: { title: string; value: React.ReactNode; icon: React.ReactNode; trend: string; trendUp: boolean; bgClass: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-xl hover:border-cobalt/30">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-muted-foreground">{title}</h3>
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${bgClass}`}>
          {icon}
        </div>
      </div>
      <div className="mt-4">
        <div className="text-3xl font-display font-bold text-foreground">{value}</div>
        <div className="mt-2 flex items-center gap-1.5 text-xs">
          <span className={trendUp ? "text-emerald-600 font-medium" : "text-amber-600 font-medium"}>
            {trend}
          </span>
        </div>
      </div>
    </div>
  );
}

function QuickActionLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      to={to} 
      className="group flex items-center justify-between rounded-xl p-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface group-hover:bg-card border border-transparent group-hover:border-border transition-colors">
          {icon}
        </div>
        {label}
      </div>
      <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}
