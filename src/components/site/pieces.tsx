import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/motion";

export function SectionHead({
  index,
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "split";
}) {
  return (
    <Reveal className={cn("grid gap-6", align === "split" && "lg:grid-cols-[1fr_1fr] lg:gap-16")}>
      <div>
        <div className="flex items-center gap-4">
          {index && <span className="eyebrow">{index}</span>}
          <span className="eyebrow">{eyebrow}</span>
          <span className="rule-line hidden flex-1 sm:block" />
        </div>
        <h2 className="mt-6 max-w-2xl font-display text-3xl leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.9rem]">
          {title}
        </h2>
      </div>
      {lead && (
        <div className="max-w-xl self-end text-[0.95rem] leading-relaxed text-muted-foreground">
          {lead}
        </div>
      )}
    </Reveal>
  );
}

export function ArrowLink({
  to,
  children,
  className,
  search,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  search?: Record<string, string>;
}) {
  return (
    <Link
      to={to}
      search={search as never}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-medium text-foreground",
        className,
      )}
    >
      <span className="link-underline">{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border border-dashed border-border bg-surface px-8 py-12 text-center">
      <div className="pointer-events-none absolute inset-0 grid-field opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-md">
        <span className="eyebrow">Nothing here yet</span>
        <h3 className="mt-4 font-display text-xl tracking-tight">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
        {action && <div className="mt-6 flex justify-center">{action}</div>}
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-field opacity-50" aria-hidden />
      <div className="shell relative pt-8 pb-16 sm:pt-12 sm:pb-24">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lead}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="shell py-12 sm:py-16">
      <div className="max-w-3xl space-y-8 text-[0.95rem] leading-relaxed text-muted-foreground [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-xl [&_h2]:tracking-tight [&_h2]:text-foreground [&_li]:mb-2 [&_p]:mt-3 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
