import Image from "next/image";
import Link from "next/link";
import MediaLogos from "../components/MediaLogos";
import Reveal from "../components/Reveal";
import SectionWrapper from "../components/SectionWrapper";
import TestimonialCard from "../components/TestimonialCard";
import VideoHero from "../components/VideoHero";
import { home } from "../content/home";

const btnKeynote =
  "inline-flex items-center justify-center rounded-full bg-brand-red px-8 py-4 font-ui text-base font-semibold uppercase tracking-[0.08em] text-white shadow-xl shadow-black/25 transition-all duration-400 ease-premium hover:scale-105 hover:bg-brand-red-dark hover:shadow-2xl hover:shadow-black/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red active:scale-95";

const btnFinalCta =
  "inline-flex items-center justify-center rounded-full bg-brand-red px-10 py-4 font-ui text-lg font-bold uppercase tracking-[0.08em] text-white shadow-cta-glow transition-all duration-400 ease-premium hover:scale-105 hover:bg-brand-red-dark hover:shadow-cta-glow-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red active:scale-95";

export default function Page() {
  return (
    <main id="content">
      <VideoHero />

      {/* Single dark band: indictment + media proof (brief §2–3) */}
      <section
        id="indictment"
        className="scroll-mt-24 bg-gradient-to-b from-brand-dark to-black transition-all duration-400 ease-premium"
      >
        <div className="mx-auto max-w-6xl space-y-6 px-6 py-24 md:space-y-7 md:py-32">
          <div className="space-y-8 md:space-y-10">
            {home.indictment.lines.map((line, i) => (
              <Reveal key={`indictment-line-${i}`} delayMs={i * 90}>
                <p className="mx-auto max-w-4xl font-display text-[clamp(1.75rem,3vw,2.65rem)] uppercase leading-[1.4] tracking-[0.02em] text-white">
                  {typeof line === "string" ? (
                    line
                  ) : (
                    <>
                      {line.before}
                      <span className="text-brand-red">{line.accent}</span>
                      {line.after ?? ""}
                    </>
                  )}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delayMs={home.indictment.lines.length * 90 + 80}>
            <p className="mx-auto max-w-4xl border-t border-white/10 pt-8 font-body text-base font-semibold leading-snug tracking-wide text-brand-red md:pt-9 md:text-lg">
              {home.indictment.redLine}
            </p>
          </Reveal>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl space-y-10 px-6 py-24 md:py-32">
            <Reveal delayMs={80}>
              <MediaLogos />
            </Reveal>
            <Reveal delayMs={160}>
              <div className="mx-auto max-w-xl border-t border-white/10 pt-10 md:pt-12">
                <p className="text-center font-ui text-[13px] font-semibold uppercase tracking-[0.22em] text-brand-light/75">{home.statBar}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionWrapper className="border-b border-black/5 bg-white">
        <Reveal>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl bg-brand-light shadow-2xl shadow-black/30 ring-1 ring-black/5 md:mx-0 md:max-w-none">
              <Image
                src={home.bio.photoFile}
                alt={home.bio.photoAlt}
                width={home.bio.photoWidth}
                height={home.bio.photoHeight}
                className="h-full w-full object-cover object-center transition-all duration-400 ease-premium hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                unoptimized
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div className="mx-auto w-full max-w-xl md:mx-0">
              <p className="font-ui text-xs font-bold uppercase tracking-[0.2em] text-brand-red">{home.bio.eyebrow}</p>
              <div className="mt-6 space-y-8">
                {home.bio.paragraphs.map((p) => (
                  <p key={p} className="font-body text-[18px] leading-loose text-gray-800 md:text-[20px]">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </SectionWrapper>

      <SectionWrapper className="!py-32 bg-gradient-to-b from-brand-charcoal to-brand-dark text-brand-light md:!py-32">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-r-2xl border-l-4 border-brand-red bg-black/10 py-8 pl-6 shadow-inner md:pl-10">
            <h2 className="font-display text-5xl uppercase leading-[1.05] tracking-wide text-white md:text-6xl">{home.keynote.title}</h2>
            <p className="mt-6 font-display text-[clamp(1.2rem,2.3vw,1.65rem)] uppercase tracking-wide text-brand-red">{home.keynote.subtitle}</p>
            <p className="mt-8 font-body text-lg leading-relaxed text-brand-light/80 md:text-xl">{home.keynote.description}</p>
            <div className="mt-10">
              <Link href={home.keynote.cta.href} className={btnKeynote}>
                {home.keynote.cta.label}
              </Link>
            </div>
          </div>
        </Reveal>
      </SectionWrapper>

      <SectionWrapper className="bg-brand-light">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.35rem)] uppercase tracking-wide text-brand-charcoal">{home.testimonialsHeading}</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-brand-red" aria-hidden />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {home.testimonials.map((t, i) => (
            <Reveal
              key={t.name + t.quote}
              delayMs={i * 70}
              className="odd:mt-6 odd:-rotate-[0.5deg] even:mt-0 even:rotate-[0.5deg]"
            >
              <TestimonialCard quote={t.quote} name={t.name} title={t.title} />
            </Reveal>
          ))}
        </div>
        <Reveal delayMs={120}>
          <div className="flex justify-center pt-16 md:pt-20">
            <Link href={home.finalCta.href} className={btnFinalCta}>
              {home.finalCta.label}
            </Link>
          </div>
        </Reveal>
      </SectionWrapper>
    </main>
  );
}
