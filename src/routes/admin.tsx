import { createFileRoute, redirect, Outlet, Link, useRouter } from "@tanstack/react-router";
import { checkAuthFn, logoutFn } from "@/server/functions";
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  CreditCard, 
  MessageSquare, 
  Image as ImageIcon, 
  MessageCircle, 
  Settings,
  LogOut
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin")({
  beforeLoad: async () => {
    const { isAuthenticated } = await checkAuthFn();
    if (!isAuthenticated) {
      throw redirect({ to: "/login" });
    }
    // Mock session for now
    return { session: { email: "admin", role: "Administrator" } };
  },
  component: AdminLayout,
});

function AdminLayout() {
  const { session } = Route.useRouteContext();
  const router = useRouter();

  const handleLogout = async () => {
    await logoutFn();
    toast.success("Logged out successfully");
    router.navigate({ to: "/login" });
  };

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Students", href: "/admin/students", icon: Users },
    { name: "Courses", href: "/admin/courses", icon: BookOpen },
    { name: "Payments", href: "/admin/payments", icon: CreditCard },
    { name: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
    { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
    { name: "Testimonials", href: "/admin/testimonials", icon: MessageCircle },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <span className="font-display font-medium">Protech Admin</span>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center px-3 py-2.5 text-sm font-medium rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors data-[status=active]:bg-foreground data-[status=active]:text-primary-foreground"
              >
                <Icon className="mr-3 h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center px-3 py-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3 font-medium text-xs">
              {session.email?.[0]?.toUpperCase() || 'A'}
            </div>
            <div className="flex-1 truncate">
              <p className="text-sm font-medium truncate">{session.email}</p>
              <p className="text-xs text-muted-foreground truncate">{session.role}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-3 py-2.5 text-sm font-medium rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
          >
            <LogOut className="mr-3 h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Mobile Header (Hidden on md) */}
        <header className="h-16 flex items-center px-4 border-b border-border bg-card md:hidden shrink-0">
          <span className="font-display font-medium">Protech Admin</span>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
