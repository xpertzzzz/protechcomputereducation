import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero, Prose } from "@/components/site/pieces";
import { FALLBACK_SETTINGS } from "@/lib/brand";

export const Route = createFileRoute("/student-policy")({
  head: () => ({
    meta: [
      { title: "Student Policy — Protech Computer Education" },
      {
        name: "description",
        content:
          "Attendance, lab use, conduct and record-keeping expectations for students at Protech Computer Education.",
      },
      { property: "og:title", content: "Student Policy — Protech Computer Education" },
      { property: "og:description", content: "Attendance, lab use and conduct expectations." },
      { rel: "canonical", href: "https://protech-computer-education.lovable.app/student-policy" },
    ],
  }),
  component: StudentPolicy,
});

function StudentPolicy() {
  const s = FALLBACK_SETTINGS;
  return (
    <SiteShell>
      <PageHero
        title="Student Policy"
        lead="What we expect from students, and what students can expect from us."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Student Policy' }]}
        bgImages={[
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505664159814-fb5e47895e68?q=80&w=2070&auto=format&fit=crop"
        ]}
      />
      <Prose>
        <h2>Attendance</h2>
        <p>
          Regular attendance matters most in practical subjects, where each session builds on the
          last. If you must miss a class, inform your instructor in advance so that catch-up work can
          be arranged.
        </p>

        <h2>Practice and lab use</h2>
        <ul>
          <li>Handle computers, peripherals and networking equipment carefully.</li>
          <li>Do not install unapproved software or change system configuration on lab machines.</li>
          <li>Save your work in your own folder; the institute is not responsible for unsaved work.</li>
          <li>Food and drink are not permitted at the workstations.</li>
        </ul>

        <h2>Project work</h2>
        <p>
          Project submissions should be your own work. Learning from references and documentation is
          encouraged; presenting someone else's project as your own is not.
        </p>

        <h2>Conduct</h2>
        <p>
          Treat fellow students, instructors and staff with respect. Harassment, damage to property
          or disruption of classes may lead to enrolment being discontinued.
        </p>

        <h2>Records</h2>
        <p>
          The institute maintains enrolment, course and fee records for each student. You may request
          a copy of your own record at any time.
        </p>

        <h2>What you can expect from us</h2>
        <p>
          Clear teaching, practical work on real tools, timely information about schedule changes and
          a fair hearing if something goes wrong. Speak to an instructor or contact{" "}
          {s.institute_name} on {s.phone_primary}
          {s.phone_secondary ? ` or ${s.phone_secondary}` : ""}.
        </p>
      </Prose>
    </SiteShell>
  );
}
