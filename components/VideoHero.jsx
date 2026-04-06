"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { home } from "../content/home";

export default function VideoHero() {
  const { hero, accessibility } = home;
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-brand-dark opacity-0 animate-hero-shell motion-reduce:opacity-100 motion-reduce:animate-none">
      <div className="absolute inset-0 overflow-hidden">
        {!videoFailed ? (
          <video
            className="absolute inset-0 z-0 h-full w-full origin-center object-cover animate-hero-kenburns will-change-transform motion-reduce:animate-none"
            poster={hero.fallbackImage}
            playsInline
            muted
            loop
            autoPlay
            aria-label={accessibility.heroVideoLabel}
            onError={() => setVideoFailed(true)}
          >
            <source src={hero.videoFile} type="video/mp4" />
          </video>
        ) : (
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
        )}
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/50 to-black/70"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-black/20" aria-hidden />
      </div>

      <div className="relative z-[3] flex min-h-screen flex-col justify-end pb-24 pt-32 md:pb-36 md:pt-36">
        <div className="mx-auto w-full max-w-6xl px-6 pb-10">
          <div className="max-w-[min(100%,36rem)] text-left md:max-w-3xl">
            <div className="flex flex-col space-y-6">
              <h1
                className="font-display text-6xl font-normal uppercase leading-[0.95] tracking-[0.08em] text-white opacity-0 [text-shadow:0_2px_30px_rgba(0,0,0,0.5)] animate-fade-up md:text-7xl"
                style={{ animationDelay: "0ms" }}
              >
                {hero.headline}
              </h1>
              <p
                className="font-display text-3xl font-normal uppercase leading-tight tracking-[0.08em] text-brand-red opacity-0 [text-shadow:0_2px_30px_rgba(0,0,0,0.5)] animate-fade-up md:text-4xl"
                style={{ animationDelay: "150ms" }}
              >
                {hero.subheadline}
              </p>
              <p
                className="max-w-xl font-body text-lg leading-relaxed text-white/85 opacity-0 [text-shadow:0_2px_30px_rgba(0,0,0,0.5)] animate-fade-up md:text-xl md:leading-relaxed"
                style={{ animationDelay: "300ms" }}
              >
                {hero.subtext}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-8">
          <a
            href="#indictment"
            className="rounded-full p-3 text-white/90 opacity-0 animate-fade-in transition-all duration-400 ease-premium hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:opacity-100 motion-reduce:animate-none"
            style={{ animationDelay: "480ms" }}
            aria-label={accessibility.scrollToIndictmentLabel}
          >
            <span className="inline-flex animate-scroll-hint motion-reduce:animate-none">
              <ChevronDown className="h-10 w-10 animate-bounce motion-reduce:animate-none" strokeWidth={1.5} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
