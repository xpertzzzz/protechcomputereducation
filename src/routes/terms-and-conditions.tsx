import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero, Prose } from "@/components/site/pieces";
import { FALLBACK_SETTINGS } from "@/lib/brand";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Protech Computer Education" },
      {
        name: "description",
        content:
          "Terms and conditions for enrolment, course delivery and use of the Protech Computer Education website.",
      },
      { property: "og:title", content: "Terms & Conditions — Protech Computer Education" },
      { property: "og:description", content: "Terms for enrolment and use of this website." },
      {
        rel: "canonical",
        href: "https://protech-computer-education.lovable.app/terms-and-conditions",
      },
    ],
  }),
  component: Terms,
});

function Terms() {
  const s = FALLBACK_SETTINGS;
  return (
    <SiteShell>
      <PageHero
        title="Terms & Conditions"
        lead="The terms that apply to enrolment and to using this website."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Terms & Conditions' }]}
        bgImages={[
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505664159814-fb5e47895e68?q=80&w=2070&auto=format&fit=crop"
        ]}
      />
      <Prose>
        <h2>Enrolment</h2>
        <p>
          Admission to a course is confirmed only after the institute accepts the enrolment and the
          agreed fee arrangement is recorded. Seats in a batch are limited and are allotted in order
          of confirmed admissions.
        </p>

        <h2>Fees</h2>
        <ul>
          <li>Fees, instalment arrangements and due dates are agreed at the time of admission.</li>
          <li>Payment records are maintained by the institute and available on request.</li>
          <li>Continued attendance may depend on fees being up to date.</li>
        </ul>

        <h2>Course delivery</h2>
        <p>
          Course content, batch timings and schedules may be adjusted where required for teaching
          reasons. Where a change affects you, the institute will inform you in advance by phone,
          WhatsApp or in class.
        </p>

        <h2>Student conduct</h2>
        <p>
          Students are expected to use institute equipment responsibly, respect other learners and
          instructors, and follow the safety and usage rules explained on the premises. The institute
          may discontinue enrolment in cases of serious or repeated misconduct.
        </p>

        <h2>Website use and content</h2>
        <p>
          The name, logo, course descriptions and material on this website belong to the institute
          and may not be reproduced without permission. Course listings and details on this site are
          for information and may be updated at any time.
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
