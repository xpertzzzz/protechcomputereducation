import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { loginFn } from "@/server/functions";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    try {
      await loginFn({ data: { username, password } });
      toast.success("Logged in successfully");
      navigate({ to: "/admin" });
    } catch (err: any) {
      toast.error(err.message || "Invalid credentials");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="text-center">
          <h1 className="font-display text-2xl tracking-tight text-foreground">Admin Login</h1>
          <p className="mt-2 text-sm text-muted-foreground">Sign in to manage Protech Computer Education</p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div>
            <label className="eyebrow block" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-cobalt"
              placeholder="admin"
            />
          </div>

          <div>
            <label className="eyebrow block" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-teal"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full inline-flex justify-center items-center gap-2 bg-cobalt px-4 py-3 text-sm font-medium text-primary-foreground rounded shadow-sm transition-colors hover:bg-cobalt/90 disabled:opacity-50"
          >
            {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
