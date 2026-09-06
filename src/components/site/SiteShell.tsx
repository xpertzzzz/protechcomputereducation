import { Link, useRouterState } from "@tanstack/react-router";
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

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Protech Computer Education — home">
      <img
        src={LOGO_URL}
        alt="Protech Computer Education"
        width={160}
        height={52}
        className={cn(
          "h-9 w-auto transition-transform duration-500 group-hover:scale-[1.02]",
          compact && "h-8",
        )}
      />
    </Link>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="shell">
        <div
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 transition-all duration-500",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Wordmark compact={scrolled} />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "relative py-1 text-[0.8125rem] font-medium tracking-wide transition-colors",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 h-px w-full bg-teal"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/courses"
              className="group hidden items-center gap-2 border border-foreground bg-foreground px-5 py-2.5 text-[0.8125rem] font-medium text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground sm:inline-flex"
            >
              Explore Courses
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="shell py-6">
              <ul className="divide-y divide-border">
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      to={item.to}
                      className="flex items-center justify-between py-4 font-display text-2xl tracking-tight"
                    >
                      {item.label}
                      <span className="eyebrow">0{i + 1}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 flex items-center justify-center gap-2 bg-foreground px-5 py-3.5 text-sm font-medium text-primary-foreground"
              >
                Enquire Now <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
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
    <footer className="mt-32 border-t border-border bg-surface">
      <div className="shell py-16">
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
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
