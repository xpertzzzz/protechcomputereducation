import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero, Prose } from "@/components/site/pieces";
import { FALLBACK_SETTINGS } from "@/lib/brand";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Protech Computer Education" },
      {
        name: "description",
        content:
          "Disclaimer covering course information, outcomes and third-party references on the Protech Computer Education website.",
      },
      { property: "og:title", content: "Disclaimer — Protech Computer Education" },
      { property: "og:description", content: "Scope and limits of information on this website." },
      { rel: "canonical", href: "https://protech-computer-education.lovable.app/disclaimer" },
    ],
  }),
  component: Disclaimer,
});

function Disclaimer() {
  const s = FALLBACK_SETTINGS;
  return (
    <SiteShell>
      <PageHero eyebrow="Legal" title="Disclaimer" lead="What the information on this website does and does not promise." />
      <Prose>
        <h2>Course information</h2>
        <p>
          Course descriptions, syllabus points, durations and levels on this website are provided for
          guidance. They may be revised as technologies and teaching plans change. For the current
          details of any course, please confirm with the institute directly.
        </p>

        <h2>Learning outcomes</h2>
        <p>
          Progress depends on each student's attendance, practice and effort. The institute does not
          guarantee any specific result, certification outcome, employment, placement or income from
          completing a course.
        </p>

        <h2>Third-party names and technologies</h2>
        <p>
          Programming languages, frameworks, tools and platform names referred to on this site belong
          to their respective owners and are named only to describe what is taught. Their mention
          does not imply any affiliation, endorsement or partnership.
        </p>

        <h2>External links</h2>
        <p>
          Where this site links to external websites or opens WhatsApp, those services are operated by
          others and their content and policies are outside our control.
        </p>

        <h2>Contact</h2>
        <p>
          {s.institute_name}, {s.address_line}, {s.city}, {s.state} — {s.pincode}. Phone{" "}
          {s.phone_primary}
          {s.phone_secondary ? ` or ${s.phone_secondary}` : ""}.
        </p>
      </Prose>
    </SiteShell>
  );
}
