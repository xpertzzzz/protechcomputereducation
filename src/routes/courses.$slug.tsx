import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { EmptyState } from "@/components/site/pieces";
import { Reveal } from "@/components/site/motion";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { useCourseBySlug } from "@/lib/data";

export const Route = createFileRoute("/courses/$slug")({
  head: ({ params }) => {
    const readable = params.slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return {
      meta: [
        { title: `${readable} — Protech Computer Education` },
        {
          name: "description",
          content: `${readable} course at Protech Computer Education, Khordha: syllabus, level, duration, technologies and practical projects.`,
        },
        { property: "og:title", content: `${readable} — Protech Computer Education` },
        {
          property: "og:description",
          content: `Course details, syllabus and projects for ${readable}.`,
        },
        {
          rel: "canonical",
          href: `https://protech-computer-education.lovable.app/courses/${params.slug}`,
        },
      ],
    };
  },
  component: CourseDetail,
});

function List({ title, items }: { title: string; items: string[] }) {
  if (!items?.length) return null;
  return (
    <div className="border-t border-border py-10">
      <h2 className="eyebrow">{title}</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item, i) => (
          <li key={item} className="flex items-baseline gap-3 border-b border-border pb-3">
            <span className="font-mono text-[0.65rem] text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CourseDetail() {
  const { slug } = Route.useParams();
  const { data: course, isLoading, isError } = useCourseBySlug(slug);

  if (isLoading) {
    return (
      <SiteShell>
        <div className="shell pt-12 pb-32">
          <div className="h-10 w-2/3 animate-pulse bg-surface" />
          <div className="mt-6 h-40 animate-pulse bg-surface" />
        </div>
      </SiteShell>
    );
  }

  if (isError || !course) {
    return (
      <SiteShell>
        <div className="shell pt-12 pb-32">
          <EmptyState
            title="This course isn't available"
            body="It may have been renamed or unpublished. Browse the catalogue to see everything currently offered."
            action={
              <Link
                to="/courses"
                className="inline-flex items-center border border-foreground bg-foreground px-5 py-3 text-sm text-primary-foreground"
              >
                Back to courses
              </Link>
            }
          />
        </div>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 grid-field opacity-50" aria-hidden />
        <div className="shell relative pt-8 pb-12 sm:pt-12 sm:pb-16">
          <Link
            to="/courses"
            className="group inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            All courses
          </Link>
          <Reveal>
            <span className="eyebrow mt-8 block">{course.category}</span>
            <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
              {course.name}
            </h1>
            {course.short_description && (
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {course.short_description}
              </p>
            )}
          </Reveal>

          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            {[
              ["Level", course.level],
              ["Track", course.category],
              ["Technologies", String(course.technologies.length || "—")],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-2 text-sm font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="shell grid gap-16 py-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-24">
        <div>
          {course.image_url && (
            <div className="mb-12 overflow-hidden bg-surface-2">
              <img
                src={course.image_url}
                alt={course.name}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
          )}

          {course.full_description && (
            <div className="border-t border-border py-10">
              <h2 className="eyebrow">Overview</h2>
              <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
                {course.full_description}
              </p>
            </div>
          )}

          <List title="What you'll learn — syllabus" items={course.syllabus} />
          <List title="Practical projects" items={course.projects} />
          <List title="Prerequisites" items={course.prerequisites} />

          {course.technologies.length > 0 && (
            <div className="border-t border-border py-10">
              <h2 className="eyebrow">Technologies</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {course.technologies.map((t) => (
                  <span key={t} className="border border-border px-3 py-1.5 font-mono text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {course.audience && (
            <div className="border-y border-border py-10">
              <h2 className="eyebrow">Who this course is for</h2>
              <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
                {course.audience}
              </p>
            </div>
          )}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="border border-border bg-card p-7">
            <span className="eyebrow">Admissions</span>
            <h2 className="mt-4 font-display text-2xl tracking-tight">
              Enquire About This Course
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Your enquiry is saved with the institute first, then WhatsApp opens with the details
              filled in.
            </p>
            <div className="mt-8">
              <EnquiryForm presetCourse={course} compact />
            </div>
          </div>
        </aside>
      </div>
    </SiteShell>
  );
}
