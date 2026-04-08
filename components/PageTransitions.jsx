"use client";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { site } from "../content/global";

export default function PageTransitions({ children }) {
  const loaderRef = useRef(null);
  const [loaderActive, setLoaderActive] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setLoaderActive(false);
      return;
    }

    setLoaderActive(true);
    const tl = gsap.timeline({
      onComplete: () => {
        setLoaderActive(false);
      },
    });

    tl.set(loaderRef.current, { autoAlpha: 1 })
      .fromTo(
        ".loader-wordmark",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.08 }
      )
      .fromTo(".loader-sub", { opacity: 0 }, { opacity: 0.85, duration: 0.45, ease: "power2.out" }, "-=0.2")
      .to(loaderRef.current, { autoAlpha: 0, duration: 0.6, ease: "power2.inOut", delay: 1.4 });
  }, []);

  return (
    <>
      <div ref={loaderRef} className="pointer-events-none fixed inset-0 z-[120] grid place-items-center bg-brand-dark opacity-0">
        <div className="text-center">
          <p className="font-display text-[clamp(2.1rem,5vw,3.4rem)] uppercase tracking-[0.08em] text-white">
            <span className="loader-wordmark text-brand-red">{site.loader.wordmark.lead}</span>
            <span className="loader-wordmark">{site.loader.wordmark.left}</span>
            <span className="loader-wordmark mx-3 inline-block h-8 w-px bg-brand-red align-middle" aria-hidden />
            <span className="loader-wordmark">{site.loader.wordmark.right}</span>
          </p>
          <p className="loader-sub mt-4 font-ui text-[11px] uppercase tracking-[0.2em] text-brand-light/80">{site.loader.subtitle}</p>
        </div>
      </div>
      <div className={loaderActive ? "opacity-0" : "opacity-100 transition-opacity duration-300 ease-premium"}>{children}</div>
    </>
  );
}
