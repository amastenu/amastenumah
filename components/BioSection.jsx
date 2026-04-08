"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionWrapper from "./SectionWrapper";
import { home } from "../content/home";

export default function BioSection() {
  const imageRef = useRef(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const updateParallax = () => {
      const imageWrapper = imageRef.current;
      if (!imageWrapper) return;
      const rect = imageWrapper.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (vh - rect.top) / (vh + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      setParallaxY((clamped - 0.5) * 18);
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
    <SectionWrapper className="relative overflow-hidden border-b border-white/10 bg-brand-charcoal text-brand-light">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-16 lg:gap-20">
        <Reveal>
          <div ref={imageRef} className="group relative mx-auto w-full max-w-md md:-ml-6 md:max-w-none lg:-ml-8">
            <div
              className="relative overflow-hidden rounded-[12px] bg-brand-light shadow-[0_28px_52px_-24px_rgba(0,0,0,0.5)] ring-1 ring-black/10"
              style={{ transform: `translateY(${parallaxY}px)` }}
            >
              <Image
                src={home.bio.photoFile}
                alt={home.bio.photoAlt}
                width={home.bio.photoWidth}
                height={home.bio.photoHeight}
                className="h-auto w-full object-cover object-center transition-transform duration-400 ease-premium group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                unoptimized
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </Reveal>

        <div className="relative z-10 mx-auto w-full max-w-xl md:-mr-2 md:max-w-2xl">
          <Reveal>
            <p className="font-ui text-xs font-bold uppercase tracking-[0.2em] text-brand-red">{home.bio.eyebrow}</p>
          </Reveal>
          <div className="mt-7 space-y-8 md:space-y-9">
            {home.bio.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delayMs={index * 110}>
                {paragraph === "Bad customer service is not an accident. It's a business model." ? (
                  <p className="font-body text-[21px] font-semibold leading-[1.85] text-brand-red md:text-[23px]">
                    {paragraph}
                  </p>
                ) : (
                  <p className="font-body text-[20px] leading-[1.9] text-brand-light/92 md:text-[22px]">
                    {paragraph}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
