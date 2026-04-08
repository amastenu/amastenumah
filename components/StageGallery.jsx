"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function StageGallery({ items, labels }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll("[data-gallery-card]");
    if (!cards.length) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, stagger: 0.09, ease: "power3.out", clearProps: "all" }
        );
        io.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(grid);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((prev) => ((prev ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") setActiveIndex((prev) => ((prev ?? 0) - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, items.length]);

  const current = activeIndex !== null ? items[activeIndex] : null;

  return (
    <>
      <div ref={gridRef} className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {items.map((still, i) => (
          <button
            key={still.src}
            type="button"
            data-gallery-card
            onClick={() => setActiveIndex(i)}
            className={`group relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5 text-left shadow-[0_16px_34px_-18px_rgba(0,0,0,0.58)] transition-all duration-300 ease-premium ${
              i === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <Image
              src={still.src}
              alt={still.alt}
              width={1200}
              height={800}
              className={`w-full object-cover transition-transform duration-300 ease-premium group-hover:scale-105 ${
                i === 0 ? "h-[20rem] md:h-[24rem] lg:h-[25rem]" : "h-[16rem] md:h-[17.5rem]"
              }`}
              loading="lazy"
              unoptimized
              style={{ maxWidth: "100%" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-black/0 opacity-0 transition-all duration-300 ease-premium group-hover:bg-black/40 group-hover:opacity-100" />
            <span className="absolute left-3 top-3 rounded-md bg-black/60 px-2 py-1 font-ui text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
              {still.tag || labels.defaultTag}
            </span>
            <span className="pointer-events-none absolute bottom-3 left-3 right-3 font-ui text-[11px] font-semibold uppercase tracking-[0.12em] text-white opacity-0 transition-opacity duration-300 ease-premium group-hover:opacity-100">
              {still.alt}
            </span>
          </button>
        ))}
      </div>

      {current ? (
        <div
          className="fixed inset-0 z-[130] flex items-center justify-center bg-black/90 px-4 py-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 rounded-full bg-black/55 p-2 text-white transition-colors duration-300 ease-premium hover:bg-black/80"
            aria-label={labels.closeLabel}
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => ((prev ?? 0) - 1 + items.length) % items.length);
            }}
            className="absolute left-4 rounded-full bg-black/55 p-2 text-white transition-colors duration-300 ease-premium hover:bg-black/80"
            aria-label={labels.prevLabel}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => ((prev ?? 0) + 1) % items.length);
            }}
            className="absolute right-4 rounded-full bg-black/55 p-2 text-white transition-colors duration-300 ease-premium hover:bg-black/80"
            aria-label={labels.nextLabel}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="max-h-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={current.src}
              alt={current.alt}
              width={1800}
              height={1200}
              className="max-h-[82vh] w-auto rounded-[14px] object-contain shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)]"
              unoptimized
            />
            <p className="mt-4 text-center font-ui text-[12px] uppercase tracking-[0.12em] text-white/88">{current.alt}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
