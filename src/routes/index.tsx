import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Star, Terminal, Cpu, Globe, Code2, Database, Zap, Shield, BrainCircuit } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { ArrowLink, EmptyState, SectionHead } from "@/components/site/pieces";
import { Counter, Reveal, WordReveal } from "@/components/site/motion";
import { AI_TRACK, COURSE_CATEGORIES, COURSE_HIGHLIGHTS } from "@/lib/brand";
import { usePublicCourses, usePublicGallery, usePublicTestimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Protech Computer Education — Bringing Programming & Web Technologies for You" },
      {
        name: "description",
        content:
          "Protech Computer Education — Bringing programming and web technologies for you. Learn web design, web development, programming, AI and emerging technologies at Bolgarh Bus Stand, Khordha, Odisha.",
      },
      { property: "og:title", content: "Protech Computer Education — Bringing Programming & Web Technologies for You" },
      {
        property: "og:description",
        content: "Bringing programming and web technologies for you. Structured courses in web design, development, programming and AI — Bolgarh, Khordha, Odisha.",
      },
      { name: "keywords", content: "Protech Computer Education, programming courses Bolgarh, web development Khordha, computer courses Odisha, coding institute Bolgarh" },
      { rel: "canonical", href: "https://protechcomputereducation.in/" },
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
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 60]);

  return (
    <section ref={ref} className="relative overflow-hidden border-b border-border">
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0 grid-field opacity-60" aria-hidden />
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.126 178) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="shell relative grid gap-14 pt-12 pb-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12 lg:pt-20 lg:pb-20">
        {/* Left: Text content */}
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

          <h1 className="mt-6 font-display text-[2.8rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            <WordReveal text="Protech" />{" "}
            <WordReveal text="Computer" />{" "}
            <span className="brand-gradient-text">
              <WordReveal text="Education" />
            </span>
          </h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-foreground/80 sm:text-xl"
          >
            Bringing programming and web technologies for you.
          </motion.p>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.7 }}
            className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            Learn web design, web development, programming, databases, cyber security and AI
            through structured courses and practical projects.
          </motion.p>

          {/* Tech stack badges */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {["HTML/CSS", "JavaScript", "Python", "C/C++", "Java", "PHP", "MySQL", "React", "AI/ML"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={reduced ? false : { opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.06, duration: 0.4 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-mono text-[0.7rem] text-foreground/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.7 }}
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

        {/* Right: Animated tech visual */}
        <motion.div style={{ y }} className="relative hidden lg:block">
          <TechVisual />
        </motion.div>
      </div>

      {/* Stats strip */}
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

function TechVisual() {
  const reduced = useReducedMotion();

  const tracks = [
    { icon: Globe,        label: "Web Design",      color: "text-teal",   bg: "bg-teal/10",   skills: ["HTML", "CSS", "Figma"] },
    { icon: Code2,        label: "Web Development", color: "text-cobalt", bg: "bg-cobalt/10", skills: ["JS", "PHP", "MySQL"] },
    { icon: Terminal,     label: "Programming",     color: "text-teal",   bg: "bg-teal/10",   skills: ["C", "C++", "Java", "Python"] },
    { icon: BrainCircuit, label: "AI & ML",         color: "text-cobalt", bg: "bg-cobalt/10", skills: ["TensorFlow", "NLP", "Data"] },
  ];

  return (
    <div className="relative">
      {/* Floating ambient orb */}
      <motion.div
        animate={reduced ? {} : { y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 h-32 w-32 rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.183 262 / 0.15) 0%, transparent 70%)" }}
        aria-hidden
      />

      {/* Track cards grid */}
      <div className="grid grid-cols-2 gap-3">
        {tracks.map(({ icon: Icon, label, color, bg, skills }, i) => (
          <motion.div
            key={label}
            initial={reduced ? false : { opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.05 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduced ? {} : { y: -3, scale: 1.02 }}
            className="group cursor-default rounded-xl border border-border bg-card p-3.5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className={cn("mb-2 inline-flex rounded-lg p-2", bg)}>
              <Icon className={cn("h-4 w-4", color)} />
            </div>
            <p className="font-display text-[0.82rem] font-semibold tracking-tight text-foreground">{label}</p>
            <p className="mt-1 font-mono text-[0.65rem] text-muted-foreground">{skills.join(" · ")}</p>
          </motion.div>
        ))}
      </div>

      {/* Floating metrics badge */}
      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        animate-float
        className="absolute -bottom-4 -left-6 flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 shadow-lg"
      >
        <Zap className="h-3.5 w-3.5 text-teal" />
        <span className="font-mono text-[0.68rem] font-medium text-foreground">17 courses · 4 tracks</span>
      </motion.div>
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
    <section className="shell py-12 sm:py-16">
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
      <div className="shell py-12 sm:py-16">
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
    <section className="shell py-12 sm:py-16">
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
      <div className="shell relative py-12 sm:py-16">
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

const LOCAL_IMAGES = [
  { id: 'l1', image_url: '/images/1.jpeg', category: 'Classroom', title: 'Computer Lab' },
  { id: 'l2', image_url: '/images/2.jpeg', category: 'Events', title: 'Certificate Distribution' },
  { id: 'l3', image_url: '/images/3.jpeg', category: 'Events', title: 'Group Photo' },
  { id: 'l4', image_url: '/images/4.jpeg', category: 'Classroom', title: 'Practical Session' },
  { id: 'l5', image_url: '/images/5.jpeg', category: 'Campus', title: 'Institute Entrance' },
  { id: 'l6', image_url: '/images/6.png', category: 'Others', title: 'Student Work' },
  { id: 'l7', image_url: '/images/7.jpeg', category: 'Campus', title: 'Campus View' },
];

function GalleryStrip() {
  const { data: dbImages = [] } = usePublicGallery();
  
  const images = dbImages.length > 0 ? dbImages : LOCAL_IMAGES;
  if (images.length === 0) return null;
  
  return (
    <section className="shell py-12 sm:py-16">
      <SectionHead index="05" eyebrow="Gallery" title="Inside the institute." />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {images.slice(0, 8).map((img, i) => (
          <Reveal key={img.id} delay={i * 0.05}>
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-cobalt/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
              <img
                src={img.image_url}
                alt={img.title ?? "Protech Computer Education"}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {(img.title || img.category) && (
                <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-1 border-t border-border/50 bg-background/95 px-5 py-4 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-full">
                  <span className="text-sm font-semibold text-foreground">{img.title ?? "Untitled"}</span>
                  {img.category && (
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider text-cobalt">{img.category}</span>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          to="/gallery"
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-sm font-semibold transition-all hover:border-cobalt hover:text-cobalt shadow-sm hover:shadow-md hover:-translate-y-0.5"
        >
          See full gallery
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { data: items = [], isLoading } = usePublicTestimonials();

  return (
    <section className="border-t border-border bg-surface">
      <div className="shell py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHead index="06" eyebrow="In their words" title="Student experiences." />
          <Link
            to="/testimonials"
            className="group hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-cobalt"
          >
            See all testimonials
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        
        <div className="mt-14">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-64 animate-pulse rounded-3xl bg-surface-2" />
              ))}
            </div>
          ) : items.length === 0 ? (
            <EmptyState
              title="No student testimonials published yet"
              body="When students share their experience with the institute, their words will appear here — never anything invented on their behalf."
            />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.slice(0, 3).map((t, i) => (
                  <Reveal key={t.id} delay={(i % 3) * 0.08} className="h-full">
                    <div className="group relative flex h-full flex-col justify-between rounded-3xl bg-card p-8 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.05)] border border-border/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-cobalt/20">
                      {/* Animated hover line */}
                      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cobalt to-teal origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-20" />
                      
                      {/* Watermark Quote */}
                      <div className="absolute top-4 right-6 text-border/40 font-serif text-8xl leading-none select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-cobalt/10">
                        "
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex gap-1 mb-6 text-[#F59E0B]">
                          {Array.from({ length: t.rating }).map((_, s) => (
                            <Star key={s} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <p className="text-[0.95rem] text-foreground/80 leading-relaxed italic font-medium line-clamp-5">
                          "{t.content}"
                        </p>
                      </div>

                      <div className="mt-8 flex items-center gap-4 pt-6">
                        {t.photo_url ? (
                          <img
                            src={t.photo_url}
                            alt={t.student_name}
                            loading="lazy"
                            className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-background border border-border/50"
                          />
                        ) : (
                          <div
                            aria-hidden
                            className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cobalt/10 font-display text-lg font-bold text-cobalt ring-2 ring-background border border-cobalt/20"
                          >
                            {t.student_name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-foreground">{t.student_name}</p>
                          <p className="mt-0.5 truncate text-[0.65rem] font-bold text-cobalt uppercase tracking-wider">
                            {t.course_name ?? "Student Review"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-10 sm:hidden">
                <Link
                  to="/testimonials"
                  className="group inline-flex items-center justify-center w-full gap-2 border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-foreground hover:bg-surface"
                >
                  See all testimonials
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="shell py-12 sm:py-16">
      <Reveal>
        <div className="grid gap-10 border-y border-border py-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <h2 className="max-w-2xl font-display text-3xl leading-[1.08] tracking-tight sm:text-5xl">
            Ready to build your career? Join Protech Computer Education today.
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
