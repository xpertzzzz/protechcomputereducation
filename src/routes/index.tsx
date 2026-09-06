import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { ArrowLink, EmptyState, SectionHead } from "@/components/site/pieces";
import { Counter, Reveal, WordReveal } from "@/components/site/motion";
import { AI_TRACK, COURSE_CATEGORIES, COURSE_HIGHLIGHTS } from "@/lib/brand";
import { usePublicCourses, usePublicGallery, usePublicTestimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Protech Computer Education — Programming & Web Technology Institute" },
      {
        name: "description",
        content:
          "Learn programming, web development, databases, cyber security and AI at Protech Computer Education, Bolgarh Bus Stand, Khordha, Odisha. Structured courses with practical projects.",
      },
      { property: "og:title", content: "Protech Computer Education" },
      {
        property: "og:description",
        content: "Bringing programming and web technologies for you — Bolgarh, Khordha, Odisha.",
      },
      { rel: "canonical", href: "https://protech-computer-education.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Protech Computer Education",
          slogan: "Bringing programming and web technologies for you",
          telephone: ["+917008414704", "+917787840997"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bolgarh Bus Stand",
            addressLocality: "Khordha",
            addressRegion: "Odisha",
            postalCode: "752065",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 70]);

  return (
    <section ref={ref} className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-field opacity-60" aria-hidden />
      <div className="shell relative grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20 lg:py-32">
        <div>
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <span className="eyebrow">Bolgarh · Khordha · Odisha</span>
            <span className="rule-line hidden max-w-40 flex-1 sm:block" />
          </motion.div>

          <h1 className="mt-8 font-display text-[2.6rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.6rem]">
            <WordReveal text="Build the skills" />
            <br />
            <WordReveal text="behind the" />{" "}
            <span className="brand-gradient-text">
              <WordReveal text="technology." />
            </span>
          </h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Learn programming, web development, databases, cyber security, AI and emerging
            technologies through structured learning and practical projects.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/courses"
              className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground"
            >
              Explore Courses
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:border-foreground"
            >
              Talk to Protech
            </Link>
          </motion.div>
        </div>

        <motion.div style={{ y }} className="relative">
          <CodePanel />
        </motion.div>
      </div>

      <div className="shell relative border-t border-border">
        <dl className="grid grid-cols-2 divide-border sm:grid-cols-4 sm:divide-x">
          {[
            ["Course tracks", 4],
            ["Structured courses", 17],
            ["Highlight subjects", COURSE_HIGHLIGHTS.length],
            ["Levels of study", 3],
          ].map(([label, value], i) => (
            <Reveal key={label as string} delay={i * 0.07} className="py-8 sm:px-8 sm:first:pl-0">
              <dt className="eyebrow">{label}</dt>
              <dd className="mt-2 font-display text-3xl tracking-tight">
                <Counter to={value as number} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

function CodePanel() {
  const lines = [
    { k: "const", v: "protech", op: " = {" },
    { k: "  focus", v: "'practical technology skills'", op: "," },
    { k: "  tracks", v: "['design', 'development', 'programming', 'ai']", op: "," },
    { k: "  method", v: "'learn → practice → build → grow'", op: "," },
    { k: "  place", v: "'Bolgarh, Khordha'", op: "," },
  ];
  return (
    <div className="relative border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <span className="eyebrow">protech.config</span>
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-teal" />
          <span className="h-2 w-2 rounded-full bg-cobalt" />
          <span className="h-2 w-2 rounded-full bg-hairline" />
        </div>
      </div>
      <div className="overflow-x-auto p-5 font-mono text-[0.72rem] leading-7 sm:text-xs">
        {lines.map((l, i) => (
          <motion.div
            key={l.k}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + i * 0.12, duration: 0.5 }}
            className="whitespace-nowrap"
          >
            <span className="text-cobalt">{l.k}</span>
            <span className="text-muted-foreground"> {l.k === "const" ? "" : ":"} </span>
            <span className="text-teal">{l.v}</span>
            <span className="text-muted-foreground">{l.op}</span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-muted-foreground"
        >
          {"}"}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.1 }}
            className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 bg-teal"
          />
        </motion.div>
      </div>
    </div>
  );
}

function Positioning() {
  const items = [
    {
      t: "Practical learning",
      d: "Every concept is taught alongside the work it enables — typing code, debugging it, and running it.",
    },
    {
      t: "Programming foundations",
      d: "C, C++, Java, Python and R are taught as a progression, not as isolated syllabi.",
    },
    {
      t: "Web technologies",
      d: "From semantic markup and layout through PHP, MySQL and JavaScript on the server and client.",
    },
    {
      t: "Project-based work",
      d: "Courses conclude with builds you can show — applications, dashboards, analyses and tools.",
    },
    {
      t: "Emerging technology",
      d: "AI concepts, machine learning, data science and NLP taught with grounded, honest expectations.",
    },
  ];
  return (
    <section className="shell py-24 sm:py-32">
      <SectionHead
        index="01"
        eyebrow="The institute"
        title={
          <>
            A technology institute built around{" "}
            <span className="text-muted-foreground">what students actually do</span> once they leave
            the classroom.
          </>
        }
        lead="Protech Computer Education teaches the technologies that run modern software: the markup and styling of the web, the languages behind applications, the databases underneath them, and the emerging tools shaping the next decade."
        align="split"
      />

      <div className="mt-16 border-t border-border">
        {items.map((item, i) => (
          <Reveal key={item.t} delay={i * 0.05}>
            <div className="group grid gap-3 border-b border-border py-7 transition-colors hover:bg-surface md:grid-cols-[6rem_1fr_1.2fr] md:items-baseline md:gap-8 md:px-4">
              <span className="eyebrow">0{i + 1}</span>
              <h3 className="font-display text-xl tracking-tight transition-transform duration-500 md:group-hover:translate-x-1">
                {item.t}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CourseExplorer() {
  const { data: courses = [], isLoading } = usePublicCourses();
  const [active, setActive] = useState<string>(COURSE_CATEGORIES[0]);
  const inCategory = courses.filter((c) => c.category === active);

  return (
    <section className="border-y border-border bg-surface">
      <div className="shell py-24 sm:py-32">
        <SectionHead
          index="02"
          eyebrow="Curriculum"
          title="Four tracks. One progression."
          lead="Choose a track to see the courses inside it. Each course runs from fundamentals to a project you build yourself."
          align="split"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col">
            {COURSE_CATEGORIES.map((cat, i) => {
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  type="button"
                  onMouseEnter={() => setActive(cat)}
                  onFocus={() => setActive(cat)}
                  onClick={() => setActive(cat)}
                  aria-pressed={isActive}
                  className={cn(
                    "group relative border-t border-border py-6 text-left transition-colors last:border-b",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="eyebrow">0{i + 1}</span>
                    <span
                      className={cn(
                        "font-display text-2xl tracking-tight transition-transform duration-500 sm:text-3xl",
                        isActive && "translate-x-1",
                      )}
                    >
                      {cat}
                    </span>
                  </div>
                  {isActive && (
                    <motion.span
                      layoutId="track-bar"
                      className="absolute inset-y-0 -left-4 w-px bg-teal"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="min-h-[18rem]">
            {isLoading ? (
              <div className="space-y-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-16 animate-pulse bg-surface-2" />
                ))}
              </div>
            ) : inCategory.length === 0 ? (
              <EmptyState
                title="No courses published in this track yet"
                body="Courses added from the institute's admin area appear here immediately."
              />
            ) : (
              <motion.ul key={active} className="divide-y divide-border border-y border-border">
                {inCategory.map((course, i) => (
                  <motion.li
                    key={course.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.45 }}
                  >
                    <Link
                      to="/courses/$slug"
                      params={{ slug: course.slug }}
                      className="group flex items-center justify-between gap-6 py-5"
                    >
                      <div className="min-w-0">
                        <h3 className="truncate font-display text-lg tracking-tight">
                          {course.name}
                        </h3>
                        <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                          {course.short_description}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-4">
                        <span className="eyebrow hidden sm:block">{course.level}</span>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
            <div className="mt-8">
              <ArrowLink to="/courses">See the full catalogue</ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="shell py-24 sm:py-32">
      <SectionHead
        index="03"
        eyebrow="Courses Highlights"
        title="The subjects that sit underneath every technology career."
        lead="Studied alongside the main tracks, these subjects give the theoretical grounding that makes practical work make sense."
        align="split"
      />
      <div className="mt-14 columns-1 gap-x-12 sm:columns-2 lg:columns-3">
        {COURSE_HIGHLIGHTS.map((item, i) => (
          <Reveal key={item} delay={(i % 6) * 0.04} className="break-inside-avoid">
            <div className="group flex items-baseline gap-4 border-b border-border py-4">
              <span className="font-mono text-[0.65rem] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.95rem] transition-transform duration-500 group-hover:translate-x-1">
                {item}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AISection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-foreground text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.25) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />
      <div className="shell relative py-24 sm:py-32">
        <Reveal>
          <span className="eyebrow !text-primary-foreground/60">04 — The future is here</span>
          <h2 className="mt-6 max-w-3xl font-display text-3xl leading-[1.06] tracking-tight sm:text-5xl">
            AI &amp; Emerging Technology
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/70">
            Taught as engineering, not spectacle: how these systems represent data, how they learn,
            what they can be trusted with, and how to build something real with them.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-5">
          {AI_TRACK.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06}>
              <div className="group h-full bg-foreground p-7 transition-colors hover:bg-primary-foreground/5">
                <span className="font-mono text-[0.65rem] text-teal">0{i + 1}</span>
                <h3 className="mt-6 font-display text-lg leading-tight tracking-tight">
                  {item.name}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-primary-foreground/60">
                  {item.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12">
          <Link
            to="/courses"
            search={{ category: "AI & Emerging Technology" } as never}
            className="group inline-flex items-center gap-2 border border-primary-foreground/30 px-6 py-3.5 text-sm transition-colors hover:border-teal hover:text-teal"
          >
            Explore the AI track
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function GalleryStrip() {
  const { data: images = [] } = usePublicGallery();
  if (images.length === 0) return null;
  return (
    <section className="shell py-24 sm:py-32">
      <SectionHead index="05" eyebrow="Gallery" title="Inside the institute." />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {images.slice(0, 8).map((img, i) => (
          <Reveal key={img.id} delay={i * 0.05}>
            <div className="group relative aspect-4/3 overflow-hidden bg-surface-2">
              <img
                src={img.image_url}
                alt={img.title ?? "Protech Computer Education"}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10">
        <ArrowLink to="/gallery">View the full gallery</ArrowLink>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { data: items = [], isLoading } = usePublicTestimonials();
  const [index, setIndex] = useState(0);
  const current = items[index];

  return (
    <section className="border-t border-border bg-surface">
      <div className="shell py-24 sm:py-32">
        <SectionHead index="06" eyebrow="In their words" title="Student experiences." />
        <div className="mt-14">
          {isLoading ? (
            <div className="h-40 animate-pulse bg-surface-2" />
          ) : items.length === 0 || !current ? (
            <EmptyState
              title="No student testimonials published yet"
              body="When students share their experience with the institute, their words will appear here — never anything invented on their behalf."
            />
          ) : (
            <div>
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl font-display text-2xl leading-[1.35] tracking-tight sm:text-3xl"
              >
                “{current.content}”
              </motion.blockquote>
              <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6">
                <div className="flex items-center gap-4">
                  {current.photo_url && (
                    <img
                      src={current.photo_url}
                      alt={current.student_name}
                      className="h-11 w-11 rounded-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <p className="text-sm font-medium">{current.student_name}</p>
                    <p className="text-xs text-muted-foreground">{current.course_name ?? "Student"}</p>
                  </div>
                  <div className="flex gap-0.5" aria-label={`${current.rating} out of 5`}>
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-teal text-teal" />
                    ))}
                  </div>
                </div>
                {items.length > 1 && (
                  <div className="flex items-center gap-2">
                    {items.map((t, i) => (
                      <button
                        key={t.id}
                        type="button"
                        aria-label={`Show testimonial ${i + 1}`}
                        onClick={() => setIndex(i)}
                        className={cn(
                          "h-px w-8 transition-colors",
                          i === index ? "bg-foreground" : "bg-border hover:bg-muted-foreground",
                        )}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="shell py-24 sm:py-32">
      <Reveal>
        <div className="grid gap-10 border-y border-border py-16 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <h2 className="max-w-2xl font-display text-3xl leading-[1.08] tracking-tight sm:text-5xl">
            Start where you are. Leave with something you built.
          </h2>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground"
            >
              Explore Courses
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm transition-colors hover:border-foreground"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <Positioning />
      <CourseExplorer />
      <Highlights />
      <AISection />
      <GalleryStrip />
      <TestimonialsSection />
      <ClosingCTA />
    </SiteShell>
  );
}
