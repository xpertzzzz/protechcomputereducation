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
      {/* Custom Image Hero with Breadcrumb */}
      <div className="relative pt-10 pb-16 border-b border-border">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        {/* Light theme overlay */}
        <div className="absolute inset-0 z-0 bg-background/80 backdrop-blur-sm" />
        
        <div className="shell relative z-10 flex flex-col items-center text-center">
          <div className="mb-5 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>›</span>
            <span className="text-foreground">Courses</span>
          </div>
          
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-7xl">
            Our Courses
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Structured programmes across website designing, website development, programming excellence and AI. Filter to find where you belong.
          </p>
        </div>
      </div>

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
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence initial={false}>
              {filtered.map((course, i) => (
                <motion.li
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.25) }}
                  className="flex"
                >
                  <div className="group flex flex-col justify-between w-full rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-cobalt/40">
                    <div>
                      <p className="eyebrow text-cobalt mb-3">{course.category}</p>
                      <Link to="/courses/$slug" params={{ slug: course.slug }}>
                        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-cobalt">
                          {course.name}
                        </h2>
                      </Link>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {course.short_description}
                      </p>
                    </div>
                    
                    <div className="mt-8 flex items-center gap-3">
                      <Link 
                        to="/contact" 
                        search={{ course: course.slug }} 
                        className="flex-1 text-center bg-cobalt text-primary-foreground text-sm font-semibold py-2.5 rounded shadow-sm hover:bg-cobalt/90 hover:shadow transition-all"
                      >
                        Enroll Now
                      </Link>
                      <Link 
                        to="/courses/$slug" 
                        params={{ slug: course.slug }}
                        className="p-2.5 rounded border border-border group-hover:border-cobalt/30 group-hover:bg-cobalt/5 transition-colors"
                        aria-label="View course details"
                      >
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-cobalt transition-colors" />
                      </Link>
                    </div>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </section>
    </SiteShell>
  );
}
