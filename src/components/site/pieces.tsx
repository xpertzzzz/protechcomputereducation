import { Link } from "react-router-dom";
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
  search?: string;
}) {
  const fullTo = search ? `${to}?${search}` : to;
  return (
    <Link
      to={fullTo}
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

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  bgImages,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  breadcrumbs?: { label: string; path?: string }[];
  bgImages?: string[];
  children?: ReactNode;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!bgImages || bgImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bgImages.length);
    }, 1500); // 1.5 seconds is slightly less aggressive than 1s, but feels like 1s
    return () => clearInterval(interval);
  }, [bgImages]);

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface/50 to-background pt-10 pb-16">
      {/* Background Images Layer */}
      {bgImages && bgImages.length > 0 && (
        <div className="absolute inset-0 z-0 opacity-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url("${bgImages[currentImageIndex]}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
              }}
            />
          </AnimatePresence>
        </div>
      )}
      
      {!bgImages && (
        <div className="pointer-events-none absolute inset-0 grid-field opacity-40" aria-hidden />
      )}
      <div className="absolute inset-0 z-0 bg-background/80 backdrop-blur-sm" />
      
      <div className="shell relative z-10 flex flex-col items-center text-center">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-5 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {idx > 0 && <span>›</span>}
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-foreground transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}

        {eyebrow && !breadcrumbs && (
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/80 backdrop-blur px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground shadow-sm">
            {eyebrow}
          </span>
        )}

        <Reveal>
          <h1 className="max-w-4xl font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl lg:text-7xl">
            {title}
          </h1>
          {lead && (
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
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
