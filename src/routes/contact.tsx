import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/pieces";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Reveal } from "@/components/site/motion";
import { FALLBACK_SETTINGS, telHref, whatsappLink } from "@/lib/brand";
import { useSettings } from "@/lib/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Admissions — Protech Computer Education" },
      {
        name: "description",
        content:
          "Contact Protech Computer Education at Bolgarh Bus Stand, Khordha, Odisha 752065. Call 7008414704 or 7787840997, or send an admission enquiry.",
      },
      { property: "og:title", content: "Contact Protech Computer Education" },
      {
        property: "og:description",
        content: "Bolgarh Bus Stand, Khordha, Odisha 752065. Call 7008414704 or 7787840997.",
      },
      { rel: "canonical", href: "https://protech-computer-education.lovable.app/contact" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { data: settings } = useSettings();
  const s = settings ?? FALLBACK_SETTINGS;
  const phones = [s.phone_primary, s.phone_secondary].filter(Boolean) as string[];

  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Talk to the institute directly."
        lead="Send an enquiry and it is saved with us before WhatsApp opens — so nothing is lost, even if the chat is closed."
      />

      <section className="shell grid gap-16 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="space-y-10">
          <Reveal>
            <div className="border-t border-border pt-8">
              <span className="eyebrow flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" /> Address
              </span>
              <p className="mt-4 font-display text-2xl leading-snug tracking-tight">
                {s.address_line}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {s.city}, {s.state} — {s.pincode}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="border-t border-border pt-8">
              <span className="eyebrow flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" /> Phone
              </span>
              <ul className="mt-4 space-y-2">
                {phones.map((p) => (
                  <li key={p}>
                    <a
                      href={telHref(p)}
                      className="link-underline font-mono text-lg tracking-tight"
                    >
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
              {phones[0] && (
                <a
                  href={whatsappLink(
                    phones[0],
                    "Hello Protech Computer Education, I would like to know more about your courses.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center border border-teal px-4 py-2.5 text-xs text-teal transition-colors hover:bg-teal hover:text-primary-foreground"
                >
                  Message on WhatsApp
                </a>
              )}
            </div>
          </Reveal>

          {s.email && (
            <Reveal delay={0.1}>
              <div className="border-t border-border pt-8">
                <span className="eyebrow flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" /> Email
                </span>
                <a href={`mailto:${s.email}`} className="link-underline mt-4 inline-block text-sm">
                  {s.email}
                </a>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.15}>
            <div className="border-y border-border py-8">
              <span className="eyebrow flex items-center gap-2">
                <Clock className="h-3.5 w-3.5" /> Visiting
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Walk in at the Bolgarh Bus Stand campus, or call ahead to fix a time with an
                instructor. Batch timings are confirmed at the time of admission.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="border border-border bg-card p-7 sm:p-10">
          <span className="eyebrow">Admission enquiry</span>
          <h2 className="mt-4 font-display text-3xl tracking-tight">Send Your Details</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Fill this in and we'll save your enquiry, then open WhatsApp with your message ready to
            send.
          </p>
          <div className="mt-9">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
