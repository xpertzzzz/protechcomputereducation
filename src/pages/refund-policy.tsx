
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero, Prose } from "@/components/site/pieces";
import { FALLBACK_SETTINGS } from "@/lib/brand";

function RefundPolicy() {
  const s = FALLBACK_SETTINGS;
  return (
    <SiteShell>
      <PageHero
        title="Refund Policy"
        lead="How cancellations and fee refunds are handled."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Refund Policy' }]}
        bgImages={[
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505664159814-fb5e47895e68?q=80&w=2070&auto=format&fit=crop"
        ]}
      />
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

export default RefundPolicy;
