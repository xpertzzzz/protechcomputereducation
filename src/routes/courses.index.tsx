import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { EmptyState, PageHero } from "@/components/site/pieces";
import { COURSE_CATEGORIES, COURSE_LEVELS } from "@/lib/brand";
import { usePublicCourses } from "@/lib/data";
import { cn } from "@/lib/utils";

type Search = { category?: string | undefined; level?: string | undefined; tech?: string | undefined };

export const Route = createFileRoute("/courses/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    ...(typeof search["category"] === "string" ? { category: search["category"] as string } : {}),
    ...(typeof search["level"] === "string" ? { level: search["level"] as string } : {}),
    ...(typeof search["tech"] === "string" ? { tech: search["tech"] as string } : {}),
  }),
  head: () => ({
    meta: [
      { title: "Courses — Protech Computer Education" },
      {
        name: "description",
        content:
          "Browse programming, web design, web development and AI courses at Protech Computer Education. Filter by track, level and technology.",
      },
      { property: "og:title", content: "Courses at Protech Computer Education" },
      {
        property: "og:description",
        content: "Website designing, development, programming excellence and AI courses.",
      },
      { rel: "canonical", href: "https://protech-computer-education.lovable.app/courses" },
    ],
  }),
  component: CoursesPage,
});

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "border px-4 py-2 text-xs tracking-wide transition-colors",
        active
          ? "border-foreground bg-foreground text-primary-foreground"
          : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

function CoursesPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/courses/" });
  const { data: courses = [], isLoading, isError } = usePublicCourses();

  const technologies = useMemo(() => {
    const set = new Set<string>();
    courses.forEach((c) => c.technologies.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [courses]);

  const filtered = courses.filter(
    (c) =>
      (!search.category || c.category === search.category) &&
      (!search.level || c.level === search.level) &&
      (!search.tech || c.technologies.includes(search.tech)),
  );

  const set = (patch: Search) =>
    navigate({ search: ((prev: Search) => ({ ...prev, ...patch })) as never, replace: true });

  const activeCount = [search.category, search.level, search.tech].filter(Boolean).length;

  return (
    <SiteShell>
      <PageHero
        eyebrow="Catalogue"
        title="Every course, in order of how it's learned."
        lead="Structured programmes across website designing, website development, programming excellence and AI. Filter to find where you belong."
      />

      <section className="shell py-14">
        <div className="space-y-6 border-b border-border pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="eyebrow mr-2 w-16">Track</span>
            <Chip active={!search.category} onClick={() => set({ category: undefined })}>
              All
            </Chip>
            {COURSE_CATEGORIES.map((c) => (
              <Chip key={c} active={search.category === c} onClick={() => set({ category: c })}>
                {c}
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="eyebrow mr-2 w-16">Level</span>
            <Chip active={!search.level} onClick={() => set({ level: undefined })}>
              All
            </Chip>
            {COURSE_LEVELS.map((l) => (
              <Chip key={l} active={search.level === l} onClick={() => set({ level: l })}>
                {l}
              </Chip>
            ))}
          </div>
          {technologies.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow mr-2 w-16">Tech</span>
              <Chip active={!search.tech} onClick={() => set({ tech: undefined })}>
                All
              </Chip>
              {technologies.map((t) => (
                <Chip key={t} active={search.tech === t} onClick={() => set({ tech: t })}>
                  {t}
                </Chip>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-baseline justify-between py-6">
          <p className="eyebrow">
            {isLoading ? "Loading" : `${filtered.length} course${filtered.length === 1 ? "" : "s"}`}
          </p>
          {activeCount > 0 && (
            <button
              type="button"
              onClick={() => set({ category: undefined, level: undefined, tech: undefined })}
              className="link-underline text-xs text-muted-foreground hover:text-foreground"
            >
              Clear filters
            </button>
          )}
        </div>

        {isError ? (
          <EmptyState
            title="We couldn't load the catalogue"
            body="Something went wrong reaching the course list. Please refresh, or call the institute on 7008414704."
          />
        ) : isLoading ? (
          <div className="space-y-px">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="h-28 animate-pulse bg-surface" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No courses match these filters"
            body="Try clearing a filter, or browse the full catalogue to see everything currently offered."
          />
        ) : (
          <ul className="border-t border-border">
            <AnimatePresence initial={false}>
              {filtered.map((course, i) => (
                <motion.li
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.25) }}
                >
                  <Link
                    to="/courses/$slug"
                    params={{ slug: course.slug }}
                    className="group grid gap-4 border-b border-border py-8 transition-colors hover:bg-surface md:grid-cols-[3rem_1.1fr_1.4fr_auto] md:items-center md:gap-8 md:px-4"
                  >
                    <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h2 className="font-display text-2xl tracking-tight transition-transform duration-500 md:group-hover:translate-x-1">
                        {course.name}
                      </h2>
                      <p className="eyebrow mt-2">{course.category}</p>
                    </div>
                    <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                      {course.short_description}
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-xs font-medium">{course.level}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{course.duration ?? "—"}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                    </div>
                  </Link>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </section>
    </SiteShell>
  );
}
