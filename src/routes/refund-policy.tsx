import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero, Prose } from "@/components/site/pieces";
import { FALLBACK_SETTINGS } from "@/lib/brand";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Protech Computer Education" },
      {
        name: "description",
        content:
          "How fee refunds and cancellations are handled at Protech Computer Education, Bolgarh, Khordha.",
      },
      { property: "og:title", content: "Refund Policy — Protech Computer Education" },
      { property: "og:description", content: "Fee refund and cancellation terms." },
      { rel: "canonical", href: "https://protech-computer-education.lovable.app/refund-policy" },
    ],
  }),
  component: RefundPolicy,
});

function RefundPolicy() {
  const s = FALLBACK_SETTINGS;
  return (
    <SiteShell>
      <PageHero eyebrow="Legal" title="Refund Policy" lead="How cancellations and fee refunds are handled." />
      <Prose>
        <h2>Requesting a refund</h2>
        <p>
          Refund requests must be made in writing or in person at the institute, stating the student
          name, course and reason. Requests made only over WhatsApp or phone should be followed by a
          written confirmation so that they can be recorded.
        </p>

        <h2>How requests are assessed</h2>
        <ul>
          <li>The date the request is received relative to the batch start date.</li>
          <li>Sessions already attended and study material already issued.</li>
          <li>Any registration or admission component of the fee, which is non-refundable.</li>
        </ul>

        <h2>If the institute cancels a batch</h2>
        <p>
          If the institute cancels a batch before it begins and cannot offer you a suitable
          alternative batch, the fee paid for that course is refunded in full.
        </p>

        <h2>Processing</h2>
        <p>
          Approved refunds are paid back through the same method used for payment wherever possible,
          and the refund is recorded against the student's payment history.
        </p>

        <h2>Discussing your situation</h2>
        <p>
          Circumstances differ. If you need to withdraw, speak to us early — options such as moving
          to a later batch or pausing your course may be available. Contact {s.institute_name},{" "}
          {s.address_line}, {s.city}, {s.state} — {s.pincode}, phone {s.phone_primary}
          {s.phone_secondary ? ` or ${s.phone_secondary}` : ""}.
        </p>
      </Prose>
    </SiteShell>
  );
}
