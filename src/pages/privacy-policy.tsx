
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero, Prose } from "@/components/site/pieces";
import { FALLBACK_SETTINGS } from "@/lib/brand";

function PrivacyPolicy() {
  const s = FALLBACK_SETTINGS;
  return (
    <SiteShell>
      <PageHero
        title="Privacy Policy"
        lead="How we handle the information you share with the institute."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Privacy Policy' }]}
        bgImages={[
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505664159814-fb5e47895e68?q=80&w=2070&auto=format&fit=crop"
        ]}
      />
      <Prose>
        <h2>Information we collect</h2>
        <p>
          When you submit an enquiry or enrol, we collect the details you provide: your name, phone
          number, email address (if given), the course you are interested in and your message. For
          enrolled students we additionally record enrolment details, course records and fee payment
          records.
        </p>

        <h2>Why we collect it</h2>
        <ul>
          <li>To respond to your enquiry by phone, WhatsApp or email.</li>
          <li>To maintain admission, attendance-related and fee records.</li>
          <li>To share batch timings, schedule changes and course-related updates.</li>
        </ul>

        <h2>WhatsApp enquiries</h2>
        <p>
          When you use the enquiry form, your details are saved with the institute first and a
          WhatsApp message is then prepared for you to send. Sending the message is your choice; the
          conversation itself takes place on WhatsApp and is governed by WhatsApp's own terms and
          privacy policy.
        </p>

        <h2>Sharing</h2>
        <p>
          We do not sell or rent your personal information. Information is accessible only to
          authorised institute staff, and to the service providers that host our website and
          database, strictly for operating this service.
        </p>

        <h2>Photographs</h2>
        <p>
          Photographs published in the gallery are uploaded by the institute. If you appear in a
          photograph and would like it removed, contact us and we will remove it.
        </p>

        <h2>Retention and your choices</h2>
        <p>
          Enquiry and student records are retained for as long as needed for administration and
          record-keeping. You may ask us to correct or delete your information by contacting the
          institute.
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

export default PrivacyPolicy;
