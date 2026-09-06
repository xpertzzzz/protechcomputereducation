import { useNavigate, Link, } from "react-router-dom";
import { useState } from "react";
import { loginFn } from "@/server/functions";
import { toast } from "sonner";
import { Loader2, Users, GraduationCap, Award, User, Lock, Eye, EyeOff, ArrowLeft, LogIn } from "lucide-react";
import { LOGO_URL } from "@/lib/brand";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { username, password } })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Invalid credentials");
      
      toast.success("Logged in successfully");
      navigate("/admin");
    } catch (err: any) {
      toast.error(err.message || "Invalid credentials");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface p-4 sm:p-6 lg:p-8">
      <div className="flex w-full max-w-[1000px] overflow-hidden rounded-[2rem] bg-card shadow-2xl">
        
        {/* Left Side: Gradient Info Panel */}
        <div className="hidden w-[45%] flex-col justify-between bg-gradient-to-br from-cobalt to-teal p-10 text-white lg:flex relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
              <Lock className="h-3.5 w-3.5" /> ADMIN ACCESS
            </div>
            
            <h1 className="mt-12 font-display text-4xl font-bold leading-[1.1] tracking-tight">
              Welcome to <br /> Admin Portal
            </h1>
            
            <p className="mt-6 text-sm leading-relaxed text-white/80">
              Manage students, courses, certificates, and all educational operations from your centralized dashboard.
            </p>
            
            <div className="mt-12 flex flex-col gap-5">
              <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-md border border-white/10 transition-colors hover:bg-white/20">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Student Management</h3>
                  <p className="text-xs text-white/70 mt-0.5">Admissions, records & progress tracking</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-md border border-white/10 transition-colors hover:bg-white/20">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Course Administration</h3>
                  <p className="text-xs text-white/70 mt-0.5">Manage courses & curriculum</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex w-full flex-col justify-center bg-card p-8 sm:p-12 lg:w-[55%] lg:p-16">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-10 text-center flex flex-col items-center">
              <img src={LOGO_URL} alt="Protech Logo" className="h-10 mb-8" />
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground w-full text-left">Sign In</h2>
              <p className="mt-2 text-sm text-muted-foreground w-full text-left">Enter your credentials to access the dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground" htmlFor="username">Username</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                    <User className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <input
                    id="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full rounded-xl border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-cobalt focus:ring-1 focus:ring-cobalt"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground" htmlFor="password">Password</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-xl border border-border bg-surface py-2.5 pl-10 pr-10 text-sm text-foreground outline-none transition-colors focus:border-cobalt focus:ring-1 focus:ring-cobalt"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center pt-1">
                <input
                  id="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-border text-cobalt focus:ring-cobalt bg-surface"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-muted-foreground">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                disabled={pending}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-cobalt py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-cobalt/90 disabled:opacity-50"
              >
                {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : (
                  <>
                    <LogIn className="h-4 w-4" /> SIGN IN
                  </>
                )}
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-card px-2 uppercase text-muted-foreground font-semibold">Or</span>
                </div>
              </div>

              <Link
                to="/"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-transparent py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Website
              </Link>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
}
