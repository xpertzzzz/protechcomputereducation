import { createFileRoute } from "@tanstack/react-router";
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

function GalleryPage() {
  const { data: images = [], isLoading, isError } = usePublicGallery();
  const [category, setCategory] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(images.map((i) => i.category))).sort(),
    [images],
  );
  const shown = category ? images.filter((i) => i.category === category) : images;

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
      <PageHero
        eyebrow="Gallery"
        title="The institute, as it is."
        lead="Photographs of classes, sessions and student work, published by the institute."
      />

      <section className="shell py-14">
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 border-b border-border pb-8">
            <button
              type="button"
              onClick={() => setCategory(null)}
              className={cn(
                "border px-4 py-2 text-xs transition-colors",
                !category
                  ? "border-foreground bg-foreground text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
              )}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={cn(
                  "border px-4 py-2 text-xs transition-colors",
                  category === c
                    ? "border-foreground bg-foreground text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <div className="mt-10">
          {isError ? (
            <EmptyState
              title="We couldn't load the gallery"
              body="Please refresh the page. If it keeps happening, contact the institute on 7008414704."
            />
          ) : isLoading ? (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="mb-4 animate-pulse bg-surface"
                  style={{ height: 180 + (i % 3) * 70 }}
                />
              ))}
            </div>
          ) : shown.length === 0 ? (
            <EmptyState
              title="No photographs published yet"
              body="Photographs uploaded by the institute will appear here. Nothing on this page is stock imagery."
            />
          ) : (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {shown.map((img, i) => (
                <motion.button
                  key={img.id}
                  type="button"
                  onClick={() => setLightbox(i)}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
                  className="group mb-4 block w-full break-inside-avoid overflow-hidden bg-surface-2 text-left"
                  aria-label={`Open ${img.title ?? "gallery image"}`}
                >
                  <img
                    src={img.image_url}
                    alt={img.title ?? "Protech Computer Education"}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                  {(img.title || img.category) && (
                    <div className="flex items-baseline justify-between gap-3 bg-background px-3 py-3">
                      <span className="truncate text-xs">{img.title ?? "Untitled"}</span>
                      <span className="eyebrow shrink-0">{img.category}</span>
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
              {active.description && (
                <p className="mt-2 max-w-2xl text-xs text-primary-foreground/70">
                  {active.description}
                </p>
              )}
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </SiteShell>
  );
}
