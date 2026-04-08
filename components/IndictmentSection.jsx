"use client";

import { useEffect, useRef, useState } from "react";
import MediaLogos from "./MediaLogos";
import Reveal from "./Reveal";
import { home } from "../content/home";

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightText(text, keywords) {
  if (!keywords?.length) return text;
  const sorted = [...keywords].sort((a, b) => b.length - a.length).map(escapeRegExp);
  const matcher = new RegExp(`(${sorted.join("|")})`, "gi");
  const parts = text.split(matcher);

  return parts.map((part, index) => {
    const isMatch = keywords.some((keyword) => keyword.toLowerCase() === part.toLowerCase());
    return isMatch ? (
      <span key={`${part}-${index}`} className="text-brand-red">
        {part}
      </span>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    );
  });
}

export default function IndictmentSection() {
  const sectionRef = useRef(null);
  const [parallaxY, setParallaxY] = useState(0);
  const keywordSet = home.indictment.highlightWords ?? [];

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const updateParallax = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (vh - rect.top) / (vh + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      setParallaxY((clamped - 0.5) * 22);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        updateParallax();
      });
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="indictment"
      ref={sectionRef}
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-brand-dark to-black transition-all duration-400 ease-premium"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0), radial-gradient(circle at 3px 3px, rgba(255,255,255,0.2) 1px, transparent 0)",
          backgroundSize: "4px 4px, 6px 6px",
          mixBlendMode: "soft-light",
        }}
      />

      <div
        className="relative mx-auto max-w-6xl space-y-6 px-6 py-24 md:space-y-7 md:py-32"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <div className="mx-auto max-w-3xl border-l border-brand-red/80 pl-7 md:pl-10">
          <div className="space-y-12 md:space-y-14">
            {home.indictment.lines.map((line, i) => (
              <Reveal key={`indictment-line-${i}`} delayMs={i * 140}>
                <p className="font-display text-[clamp(2.25rem,5vw,4.75rem)] uppercase leading-[1.2] tracking-wide text-white">
                  {typeof line === "string" ? (
                    highlightText(line, keywordSet)
                  ) : (
                    <>
                      {highlightText(line.before, keywordSet)}
                      <span className="text-brand-red">{line.accent}</span>
                      {highlightText(line.after ?? "", keywordSet)}
                    </>
                  )}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delayMs={home.indictment.lines.length * 140 + 120}>
            <p className="mt-12 border-t border-white/10 pt-9 font-body text-lg font-semibold leading-relaxed tracking-wide text-brand-red md:text-xl">
              {highlightText(home.indictment.redLine, keywordSet)}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl space-y-10 px-6 py-24 md:py-32">
          <Reveal delayMs={80}>
            <MediaLogos />
          </Reveal>
          <Reveal delayMs={160}>
            <div className="mx-auto max-w-2xl pt-10 md:pt-12">
              <div className="mx-auto h-px w-24 bg-brand-red/70" aria-hidden />
              <p className="mt-6 text-center font-ui text-[0.92rem] font-bold uppercase tracking-[0.28em] text-brand-light/90 md:text-base">
                {home.statBar}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
