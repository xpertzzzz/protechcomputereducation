import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { EmptyState, PageHero } from "@/components/site/pieces";
import { Reveal } from "@/components/site/motion";
import { usePublicTestimonials } from "@/lib/data";
import { formatDate } from "@/lib/brand";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Protech Computer Education" },
      {
        name: "description",
        content:
          "Experiences shared by students of Protech Computer Education, Bolgarh, Khordha. Published by the institute, never invented.",
      },
      { property: "og:title", content: "Student testimonials — Protech Computer Education" },
      { property: "og:description", content: "What students say about learning at Protech." },
      { rel: "canonical", href: "https://protech-computer-education.lovable.app/testimonials" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const { data: items = [], isLoading, isError } = usePublicTestimonials();

  return (
    <SiteShell>
      <PageHero
        eyebrow="Testimonials"
        title="Student experiences, in their own words."
        lead="Every testimonial on this page is published by the institute from a real student. Nothing here is written on their behalf."
      />

      <section className="shell py-16">
        {isError ? (
          <EmptyState
            title="We couldn't load testimonials"
            body="Please refresh the page, or call the institute on 7008414704."
          />
        ) : isLoading ? (
          <div className="space-y-px">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-40 animate-pulse bg-surface" />
            ))}
          </div>
        ) : items.length === 0 ? (
          <EmptyState
            title="No testimonials published yet"
            body="As students complete their courses and share their experience, their words will be published here."
            action={
              <Link
                to="/courses"
                className="inline-flex items-center border border-foreground bg-foreground px-5 py-3 text-sm text-primary-foreground"
              >
                Explore courses
              </Link>
            }
          />
        ) : (
          <div className="border-t border-border">
            {items.map((t, i) => (
              <Reveal key={t.id} delay={(i % 4) * 0.06}>
                <figure className="grid gap-6 border-b border-border py-12 md:grid-cols-[16rem_1fr] md:gap-16">
                  <figcaption className="flex items-start gap-4">
                    {t.photo_url ? (
                      <img
                        src={t.photo_url}
                        alt={t.student_name}
                        loading="lazy"
                        className="h-14 w-14 shrink-0 rounded-full object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-surface-2 font-display text-lg"
                      >
                        {t.student_name.charAt(0)}
                      </span>
                    )}
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{t.student_name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{t.course_name ?? "Student"}</p>
                      <div className="mt-2 flex gap-0.5" aria-label={`${t.rating} out of 5`}>
                        {Array.from({ length: t.rating }).map((_, s) => (
                          <Star key={s} className="h-3 w-3 fill-teal text-teal" />
                        ))}
                      </div>
                      <p className="mt-2 font-mono text-[0.65rem] text-muted-foreground">
                        {formatDate(t.given_on)}
                      </p>
                    </div>
                  </figcaption>
                  <blockquote className="font-display text-xl leading-[1.45] tracking-tight sm:text-2xl">
                    “{t.content}”
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </SiteShell>
  );
}
