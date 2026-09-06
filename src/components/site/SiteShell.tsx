import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { LOGO_URL, whatsappLink } from "@/lib/brand";
import { useSettings } from "@/lib/data";
import { ScrollProgress } from "@/components/site/motion";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { settings } = useSettings();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] flex flex-col pointer-events-none">
        {/* Top Contact Bar */}
        <div className="pointer-events-auto hidden lg:flex items-center justify-between px-6 py-2.5 bg-cobalt text-primary-foreground text-[0.7rem] font-semibold tracking-wide shadow-md">
          <div className="flex items-center gap-6">
            <a href={`tel:${settings.phone_primary}`} className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Phone className="h-3 w-3" />
              {settings.phone_primary}
            </a>
            {settings.phone_secondary && (
              <a href={`tel:${settings.phone_secondary}`} className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
                <Phone className="h-3 w-3" />
                {settings.phone_secondary}
              </a>
            )}
            <a href={whatsappLink(settings.whatsapp_number, "Hello")} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[#25D366] hover:text-[#25D366]/80 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              WHATSAPP
            </a>
          </div>
          <div className="flex items-center gap-6 uppercase">
            <span>{settings.address_line}, {settings.city}, {settings.state} — {settings.pincode}</span>
            <Link to="/login" className="flex items-center gap-1.5 border border-primary-foreground/30 px-3 py-1 rounded hover:bg-primary-foreground hover:text-cobalt transition-colors">
              Login
            </Link>
          </div>
        </div>

        {/* Floating dock navbar */}
        <div className="flex justify-center px-4 pt-4 pb-2 transition-transform">
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "pointer-events-auto flex w-full max-w-5xl items-center gap-1 rounded-full border px-3 py-2 transition-all duration-500",
              scrolled
                ? "border-border/60 bg-background/95 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.18)] backdrop-blur-3xl"
                : "border-border/40 bg-background/80 shadow-[0_4px_24px_-6px_rgba(15,23,42,0.12)] backdrop-blur-xl",
            )}
          >
            {/* Logo + full name */}
            <Link
              to="/"
              className="group flex flex-1 items-center gap-2.5 rounded-full px-3 py-1.5 transition-colors hover:bg-surface lg:flex-none lg:mr-2"
              aria-label="Protech Computer Education — home"
            >
              <img
                src={LOGO_URL}
                alt="Protech Computer Education"
                width={120}
                height={40}
                className="h-7 w-auto flex-shrink-0"
              />
              <span className="font-display text-[0.82rem] font-semibold tracking-tight text-foreground">
                Protech Computer Education
              </span>
            </Link>

            {/* Divider */}
            <span className="hidden h-5 w-px bg-border lg:block" aria-hidden />

            {/* Nav links */}
            <nav className="hidden items-center lg:flex" aria-label="Primary">
              {NAV.map((item) => {
                const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "relative rounded-full px-3.5 py-1.5 text-[0.8rem] font-medium tracking-wide transition-all duration-200",
                      active
                        ? "bg-foreground text-primary-foreground"
                        : "text-muted-foreground hover:bg-surface hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Divider */}
            <span className="hidden h-5 w-px bg-border lg:block" aria-hidden />

            {/* CTA */}
            <Link
              to="/courses"
              className="hidden rounded-full bg-teal px-4 py-1.5 text-[0.8rem] font-semibold text-white shadow-sm transition-all hover:brightness-110 lg:inline-flex"
            >
              Enroll Now
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-foreground hover:bg-surface lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </motion.div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[88px] z-[90] overflow-hidden rounded-2xl border border-border bg-background/95 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="p-5">
              <ul className="divide-y divide-border">
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.045 }}
                  >
                    <Link
                      to={item.to}
                      className="flex items-center justify-between py-3.5 font-display text-xl tracking-tight"
                    >
                      {item.label}
                      <span className="eyebrow">0{i + 1}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3.5 text-sm font-medium text-primary-foreground"
              >
                Enquire Now <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  const { settings } = useSettings();
  const socials = [
    ["Facebook", settings.facebook_url],
    ["Instagram", settings.instagram_url],
    ["YouTube", settings.youtube_url],
    ["LinkedIn", settings.linkedin_url],
  ].filter(([, url]) => Boolean(url)) as [string, string][];

  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="shell py-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <img src={LOGO_URL} alt={settings.institute_name} className="h-10 w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{settings.tagline}</p>
            <p className="mt-6 text-sm leading-relaxed text-foreground">
              {settings.address_line}
              <br />
              {settings.city}, {settings.state} — {settings.pincode}
            </p>
            <div className="mt-4 flex flex-col gap-1 font-mono text-sm">
              <a href={`tel:${settings.phone_primary}`} className="link-underline w-fit">
                {settings.phone_primary}
              </a>
              {settings.phone_secondary && (
               <a href={`tel:${settings.phone_secondary}`} className="link-underline w-fit">
                  {settings.phone_secondary}
                </a>
              )}
              {settings.email && (
                <a href={`mailto:${settings.email}`} className="link-underline w-fit">
                  {settings.email}
                </a>
              )}
            </div>
          </div>

          <FooterCol
            title="Navigate"
            links={NAV.map((n) => ({ label: n.label, to: n.to }))}
          />
          <FooterCol
            title="Courses"
            links={[
              { label: "Website Designing", to: "/courses", search: { category: "Website Designing" } },
              { label: "Website Development", to: "/courses", search: { category: "Website Development" } },
              { label: "Programming Excellence", to: "/courses", search: { category: "Programming Excellence" } },
              { label: "AI & Emerging Technology", to: "/courses", search: { category: "AI & Emerging Technology" } },
            ]}
          />
          <FooterCol
            title="Information"
            links={[
              { label: "Privacy Policy", to: "/privacy-policy" },
              { label: "Terms & Conditions", to: "/terms-and-conditions" },
              { label: "Refund Policy", to: "/refund-policy" },
              { label: "Disclaimer", to: "/disclaimer" },
              { label: "Student Policy", to: "/student-policy" },
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {settings.institute_name.replace(/^PROTECH/i, "Protech")}. All
            rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-xs">
            {socials.map(([label, url]) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline text-muted-foreground hover:text-foreground"
              >
                {label}
              </a>
            ))}
            <a
              href={whatsappLink(settings.whatsapp_number, "Hello Protech Computer Education,")}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline text-muted-foreground hover:text-foreground"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string; search?: Record<string, string> }[];
}) {
  return (
    <div>
      <h3 className="eyebrow">{title}</h3>
      <ul className="mt-5 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              search={l.search as never}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FloatingCall() {
  const { settings } = useSettings();
  return (
    <a
      href={whatsappLink(
        settings.whatsapp_number,
        "Hello Protech Computer Education, I would like to know more about your courses.",
      )}
      target="_blank"
      rel="noreferrer noopener"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 border border-foreground bg-foreground px-4 py-3 text-xs font-medium tracking-wide text-primary-foreground shadow-[0_10px_30px_-14px_rgba(15,23,42,0.6)] transition-transform duration-300 hover:-translate-y-0.5 sm:bottom-8 sm:right-8"
    >
      <Phone className="h-3.5 w-3.5" />
      Talk to Protech
    </a>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Header />
      <motion.main
        key={pathname}
        {...(reduced
          ? {}
          : {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
            })}
        className="flex-1 pt-[88px] lg:pt-[116px]"
      >
        {children}
      </motion.main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
