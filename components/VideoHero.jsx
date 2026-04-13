"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { home } from "../content/home";

const textShadowReadability = "0 2px 20px rgba(0,0,0,0.6)";

export default function VideoHero() {
  const { hero, accessibility } = home;
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [heroScrollOpacity, setHeroScrollOpacity] = useState(1);
  const poster = hero.posterImage ?? hero.fallbackImage;

  const headlineLines = useMemo(() => {
    const words = hero.headline.trim().split(/\s+/);
    if (words.length < 4) return [hero.headline];
    const midpoint = Math.ceil(words.length / 2);
    return [words.slice(0, midpoint).join(" "), words.slice(midpoint).join(" ")];
  }, [hero.headline]);
  const headlineRevealMs = headlineLines.length * 120 + 220;

  const videoSources = useMemo(() => {
    const narrow = hero.videoFileNarrow;
    const webm = hero.videoFileWebm;
    const mp4 = hero.videoFile;
    const items = [];
    if (narrow) {
      items.push({ key: "mp4-narrow", src: narrow, type: "video/mp4", media: "(max-width: 768px)" });
    }
    if (webm) {
      items.push({
        key: "webm",
        src: webm,
        type: "video/webm",
        media: narrow ? "(min-width: 769px)" : undefined,
      });
    }
    items.push({ key: "mp4-default", src: mp4, type: "video/mp4", media: undefined });
    return items;
  }, [hero.videoFile, hero.videoFileNarrow, hero.videoFileWebm]);

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

  const tryAutoplay = useCallback((el) => {
    if (!el || videoFailed) return;
    el.defaultMuted = true;
    el.muted = true;
    el.playsInline = true;
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", "");
    void el.play().catch(() => {});
  }, [videoFailed]);

  /** Cached videos often fire `loadeddata` / `canplay` before React binds props — sync from `readyState` and use native listeners. */
  const syncVideoLayer = useCallback(
    (el) => {
      if (!el || videoFailed) return;
      if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        setVideoReady(true);
      }
      tryAutoplay(el);
    },
    [videoFailed, tryAutoplay]
  );

  useLayoutEffect(() => {
    syncVideoLayer(videoRef.current);
  }, [syncVideoLayer]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || videoFailed) return;

    syncVideoLayer(el);
    const raf = requestAnimationFrame(() => syncVideoLayer(el));

    const onVis = () => {
      if (document.visibilityState === "visible") syncVideoLayer(el);
    };
    document.addEventListener("visibilitychange", onVis);

    const onBuffered = () => syncVideoLayer(el);
    el.addEventListener("loadeddata", onBuffered);
    el.addEventListener("canplay", onBuffered);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVis);
      el.removeEventListener("loadeddata", onBuffered);
      el.removeEventListener("canplay", onBuffered);
    };
  }, [videoFailed, syncVideoLayer]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-brand-dark opacity-0 animate-hero-shell motion-reduce:opacity-100 motion-reduce:animate-none">
      <div className="absolute inset-0 min-h-[100vh] w-full overflow-hidden">
        {videoFailed ? (
          <div className="absolute inset-0 z-0 min-h-[100vh]">
            <Image
              src={hero.fallbackImage}
              alt=""
              fill
              priority
              unoptimized
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ) : (
          <>
            {!videoReady ? (
              <div className="absolute inset-0 z-0 min-h-[100vh]">
                <Image
                  src={poster}
                  alt=""
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
            ) : null}
            <div
              className={`absolute inset-0 z-0 min-h-[100vh] w-full transition-opacity duration-700 ease-premium ${
                videoReady ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <div className="relative min-h-[100vh] h-full w-full overflow-hidden motion-reduce:animate-none animate-hero-bg-drift">
                <video
                  ref={videoRef}
                  className="absolute inset-0 z-0 h-full min-h-[100vh] w-full object-cover brightness-[0.78] contrast-[1.06] will-change-transform"
                  poster={poster}
                  preload="auto"
                  playsInline
                  muted
                  loop
                  autoPlay
                  aria-label={accessibility.heroVideoLabel}
                  onLoadedMetadata={(e) => tryAutoplay(e.currentTarget)}
                  onLoadedData={(e) => syncVideoLayer(e.currentTarget)}
                  onCanPlay={(e) => syncVideoLayer(e.currentTarget)}
                  onError={() => setVideoFailed(true)}
                >
                  {videoSources.map(({ key, src, type, media }) => (
                    <source key={key} src={src} type={type} {...(media ? { media } : {})} />
                  ))}
                </video>
              </div>
            </div>
          </>
        )}

        {/* Subtle radial red glow — center weight */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] min-h-[100vh] bg-[radial-gradient(ellipse_at_50%_42%,rgba(211,47,47,0.14)_0%,transparent_52%)]"
          aria-hidden
        />

        {/* Top lighter → bottom deep black */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] min-h-[100vh] bg-gradient-to-b from-white/[0.06] via-transparent to-black/[0.92]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] min-h-[100vh] bg-gradient-to-t from-black/[0.88] via-black/[0.45] to-transparent"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 z-[1] min-h-[100vh] bg-black/10" aria-hidden />

        <div className="noise-layer noise-layer--hero-base z-[2] min-h-[100vh]" aria-hidden />
        <div className="noise-layer--hero-fine z-[2] min-h-[100vh]" aria-hidden />
      </div>

      <div
        className="relative z-[3] flex min-h-screen flex-col justify-end pb-24 pt-32 md:pb-36 md:pt-36"
        style={{ opacity: heroScrollOpacity }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 pb-10">
          <div className="max-w-[min(100%,36rem)] text-left md:max-w-3xl">
            <div className="flex flex-col space-y-6">
              <h1 className="relative z-10 font-display text-6xl font-semibold uppercase leading-[0.92] tracking-widest text-white md:text-8xl">
                {headlineLines.map((line, index) => (
                  <span
                    key={`${line}-${index}`}
                    className="block opacity-0 animate-fade-up motion-reduce:opacity-100 motion-reduce:animate-none"
                    style={{
                      animationDelay: `${index * 120}ms`,
                      textShadow: textShadowReadability,
                    }}
                  >
                    <span
                      className="inline-block motion-reduce:animate-none animate-hero-headline-glitch"
                      style={{
                        animationDelay: `${index * 120}ms`,
                        textShadow: textShadowReadability,
                      }}
                    >
                      {line}
                    </span>
                  </span>
                ))}
              </h1>
              <p
                className="video-hero-subheadline font-display text-3xl font-normal uppercase leading-tight tracking-widest text-brand-red md:text-4xl"
                style={{
                  textShadow: textShadowReadability,
                  animation:
                    "fade-up 0.8s ease-out 200ms forwards, red-flicker 6.5s ease-in-out 1150ms infinite",
                }}
              >
                {hero.subheadline}
              </p>
              <p
                className="max-w-xl font-body text-lg leading-relaxed text-white opacity-0 animate-fade-up md:text-xl md:leading-relaxed"
                style={{
                  textShadow: textShadowReadability,
                  animationDelay: `${headlineRevealMs + 320}ms`,
                }}
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
