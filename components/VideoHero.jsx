"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { home } from "../content/home";

export default function VideoHero() {
  const { hero, accessibility } = home;
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [heroScrollOpacity, setHeroScrollOpacity] = useState(1);
  const headlineLines = useMemo(() => {
    const words = hero.headline.trim().split(/\s+/);
    if (words.length < 4) return [hero.headline];
    const midpoint = Math.ceil(words.length / 2);
    return [words.slice(0, midpoint).join(" "), words.slice(midpoint).join(" ")];
  }, [hero.headline]);
  const headlineRevealMs = headlineLines.length * 120 + 220;

  useEffect(() => {
    if (typeof window === "undefined") return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY || 0;
        const fade = 1 - Math.min(0.15, y / 1400);
        setHeroScrollOpacity(fade);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || videoFailed) return;
    const tryPlay = async () => {
      try {
        await el.play();
      } catch {
        // Some browsers may block autoplay until user interaction.
      }
    };
    void tryPlay();
  }, [videoFailed]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-brand-dark opacity-0 animate-hero-shell motion-reduce:opacity-100 motion-reduce:animate-none">
      <div className="absolute inset-0 overflow-hidden">
        {!videoReady || videoFailed ? (
          <div className="absolute inset-0 z-0">
            <Image
              src={hero.fallbackImage}
              alt=""
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
              priority
              unoptimized
              style={{ maxWidth: "100%" }}
            />
          </div>
        ) : null}
        {!videoFailed ? (
          <video
            ref={videoRef}
            className={`absolute inset-0 z-0 h-full w-full origin-center object-cover brightness-[0.74] contrast-110 transition-opacity duration-700 ease-premium will-change-transform motion-reduce:animate-none ${
              videoReady ? "animate-hero-kenburns opacity-[0.62]" : "opacity-0"
            }`}
            poster={hero.fallbackImage}
            preload="auto"
            playsInline
            muted
            loop
            autoPlay
            aria-label={accessibility.heroVideoLabel}
            onLoadedData={() => {
              setVideoReady(true);
              videoRef.current?.play().catch(() => {});
            }}
            onCanPlay={() => {
              setVideoReady(true);
              videoRef.current?.play().catch(() => {});
            }}
            onError={() => setVideoFailed(true)}
          >
            <source src={hero.videoFile} type="video/mp4" />
          </video>
        ) : null}
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/58 via-black/34 to-transparent"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-black/8" aria-hidden />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-brand-red/4" aria-hidden />
        <div className="noise-layer z-[2]" aria-hidden />
      </div>

      <div className="relative z-[3] flex min-h-screen flex-col justify-end pb-24 pt-32 md:pb-36 md:pt-36" style={{ opacity: heroScrollOpacity }}>
        <div className="mx-auto w-full max-w-6xl px-6 pb-10">
          <div className="max-w-[min(100%,36rem)] text-left md:max-w-3xl">
            <div className="flex flex-col space-y-6">
              <h1
                className="relative z-10 font-display text-6xl font-semibold uppercase leading-[0.92] tracking-widest text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.62)] md:text-8xl"
              >
                {headlineLines.map((line, index) => (
                  <span
                    key={`${line}-${index}`}
                    className="block opacity-0 animate-fade-up motion-reduce:opacity-100 motion-reduce:animate-none"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    {line}
                  </span>
                ))}
              </h1>
              <p
                className="font-display text-3xl font-normal uppercase leading-tight tracking-widest text-brand-red opacity-0 [text-shadow:0_2px_30px_rgba(0,0,0,0.5)] motion-reduce:opacity-100 motion-reduce:animate-none md:text-4xl"
                style={{ animation: "fade-up 0.8s ease-out 200ms forwards, red-flicker 3.6s ease-in-out 1150ms infinite" }}
              >
                {hero.subheadline}
              </p>
              <p
                className="max-w-xl font-body text-lg leading-relaxed text-white opacity-0 [text-shadow:0_2px_30px_rgba(0,0,0,0.5)] animate-fade-up md:text-xl md:leading-relaxed"
                style={{ animationDelay: `${headlineRevealMs + 320}ms` }}
              >
                {hero.subtext}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-8">
          <a
            href="#indictment"
            className="rounded-full p-3 text-white/90 opacity-0 animate-fade-in transition-all duration-400 ease-premium hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-95 motion-reduce:opacity-100 motion-reduce:animate-none"
            style={{ animationDelay: "480ms" }}
            aria-label={accessibility.scrollToIndictmentLabel}
          >
            <span
              className="inline-flex motion-reduce:animate-none"
              style={{ animation: "scroll-hint 2.4s ease-in-out infinite, scroll-bounce-soft 1.8s ease-in-out infinite" }}
            >
              <ChevronDown className="h-10 w-10 motion-reduce:animate-none" strokeWidth={1.5} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
