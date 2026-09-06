import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-lg">
        <span className="eyebrow">Error 404</span>
        <h1 className="mt-5 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
          This page doesn't exist.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The page you're looking for may have been moved or renamed. You can head back to the
          homepage or browse the course catalogue.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex items-center bg-foreground px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Go home
          </Link>
          <Link to="/courses" className="inline-flex items-center border border-border px-5 py-3 text-sm">
            Browse courses
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    // Error tracking could go here
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-lg">
        <span className="eyebrow">Something went wrong</span>
        <h1 className="mt-5 font-display text-3xl tracking-tight text-foreground">
          This page didn't load.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          We couldn't reach the information for this page. Please try again, or contact the institute
          directly on 7008414704.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center bg-foreground px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center border border-border px-5 py-3 text-sm">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Protech Computer Education — Bolgarh, Khordha" },
      {
        name: "description",
        content:
          "Protech Computer Education teaches programming, web technologies, databases and AI through structured learning and practical projects in Bolgarh, Khordha.",
      },
      { name: "author", content: "Protech Computer Education" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Protech Computer Education" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#FAFAF6" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}
