import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { EmptyState, PageHero } from "@/components/site/pieces";
import { usePublicGallery } from "@/lib/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Protech Computer Education" },
      {
        name: "description",
        content:
          "Photographs from Protech Computer Education in Bolgarh, Khordha — classrooms, sessions, projects and institute life.",
      },
      { property: "og:title", content: "Gallery — Protech Computer Education" },
      { property: "og:description", content: "Photographs from inside the institute." },
      { rel: "canonical", href: "https://protech-computer-education.lovable.app/gallery" },
    ],
  }),
  component: GalleryPage,
});

const LOCAL_IMAGES = [
  { id: 'l1', image_url: '/images/1.jpeg', category: 'Classroom', title: 'Computer Lab' },
  { id: 'l2', image_url: '/images/2.jpeg', category: 'Events', title: 'Certificate Distribution' },
  { id: 'l3', image_url: '/images/3.jpeg', category: 'Events', title: 'Group Photo' },
  { id: 'l4', image_url: '/images/4.jpeg', category: 'Classroom', title: 'Practical Session' },
  { id: 'l5', image_url: '/images/5.jpeg', category: 'Campus', title: 'Institute Entrance' },
  { id: 'l6', image_url: '/images/6.png', category: 'Others', title: 'Student Work' },
  { id: 'l7', image_url: '/images/7.jpeg', category: 'Campus', title: 'Campus View' },
];

function GalleryPage() {
  const { data: dbImages = [], isLoading, isError } = usePublicGallery();
  const [category, setCategory] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const sourceImages = dbImages.length > 0 ? dbImages : LOCAL_IMAGES;

  const categories = useMemo(
    () => Array.from(new Set(sourceImages.map((i) => i.category))).filter(Boolean).sort(),
    [sourceImages],
  );
  const shown = category ? sourceImages.filter((i) => i.category === category) : sourceImages;

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: number) =>
      setLightbox((cur) => (cur === null ? null : (cur + dir + shown.length) % shown.length)),
    [shown.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, step]);

  const active = lightbox === null ? null : shown[lightbox];

  return (
    <SiteShell>
      {/* Custom Image Hero */}
      <div className="relative pt-10 pb-16 border-b border-border">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 z-0 bg-background/80 backdrop-blur-sm" />
        
        <div className="shell relative z-10 flex flex-col items-center text-center">
          <div className="mb-5 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>›</span>
            <span className="text-foreground">Gallery</span>
          </div>
          
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-7xl">
            Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Moments from our campus, classrooms, student work, and institute events.
          </p>
          
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/80 backdrop-blur px-5 py-2 text-xs font-medium shadow-sm">
            <span className="text-teal font-bold">✓</span>
            Verified
            <span className="text-muted-foreground mx-1">|</span>
            Government Recognized
            <span className="text-muted-foreground mx-1">|</span>
            ISO Certified
          </div>
        </div>
      </div>

      <section className="shell py-14">
        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-3 pb-8">
            <button
              type="button"
              onClick={() => setCategory(null)}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-semibold transition-all shadow-sm border",
                !category
                  ? "border-cobalt bg-cobalt text-white shadow-md"
                  : "border-border bg-card text-foreground hover:border-cobalt/30 hover:text-cobalt",
              )}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c as string}
                type="button"
                onClick={() => setCategory(c as string)}
                className={cn(
                  "rounded-full px-6 py-2.5 text-sm font-semibold transition-all shadow-sm border",
                  category === c
                    ? "border-cobalt bg-cobalt text-white shadow-md"
                    : "border-border bg-card text-foreground hover:border-cobalt/30 hover:text-cobalt",
                )}
              >
                {c as string}
              </button>
            ))}
          </div>
        )}

        <div className="mt-8">
          {isError ? (
            <EmptyState
              title="We couldn't load the gallery"
              body="Please refresh the page. If it keeps happening, contact the institute on 7008414704."
            />
          ) : isLoading && dbImages.length === 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="mb-6 animate-pulse rounded-3xl bg-surface-2 aspect-[4/3]"
                />
              ))}
            </div>
          ) : shown.length === 0 ? (
            <EmptyState
              title="No photographs published yet"
              body="Photographs uploaded by the institute will appear here. Nothing on this page is stock imagery."
            />
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((img, i) => (
                <motion.button
                  key={img.id}
                  type="button"
                  onClick={() => setLightbox(i)}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
                  className="group relative block w-full overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm text-left transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] hover:border-cobalt/40 hover:-translate-y-1 aspect-[4/3]"
                  aria-label={`Open ${img.title ?? "gallery image"}`}
                >
                  <img
                    src={img.image_url}
                    alt={img.title ?? "Protech Computer Education"}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {(img.title || img.category) && (
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-1 bg-background/95 px-5 py-4 border-t border-border/50 backdrop-blur-sm translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="font-semibold text-sm text-foreground">{img.title ?? "Untitled"}</span>
                      {img.category && (
                        <span className="text-[0.65rem] font-bold text-cobalt uppercase tracking-wider">{img.category}</span>
                      )}
                    </div>
                  )}
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.title ?? "Gallery image"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-foreground/95 p-4"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center border border-primary-foreground/30 text-primary-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            {shown.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  className="absolute left-4 inline-flex h-11 w-11 items-center justify-center border border-primary-foreground/30 text-primary-foreground"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  className="absolute right-4 inline-flex h-11 w-11 items-center justify-center border border-primary-foreground/30 text-primary-foreground"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}
            <motion.figure
              key={active.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="max-h-[85vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.image_url}
                alt={active.title ?? "Protech Computer Education"}
                className="max-h-[75vh] w-auto object-contain"
              />
              <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-3 text-primary-foreground">
                <span className="text-sm">{active.title ?? "Untitled"}</span>
                <span className="eyebrow !text-primary-foreground/60">
                  {lightbox! + 1} / {shown.length}
                </span>
              </figcaption>
              {(active as any).description && (
                <p className="mt-2 max-w-2xl text-xs text-primary-foreground/70">
                  {(active as any).description}
                </p>
              )}
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </SiteShell>
  );
}
