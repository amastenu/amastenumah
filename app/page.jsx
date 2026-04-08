import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BioSection from "../components/BioSection";
import IndictmentSection from "../components/IndictmentSection";
import Reveal from "../components/Reveal";
import SectionWrapper from "../components/SectionWrapper";
import TestimonialCard from "../components/TestimonialCard";
import VideoHero from "../components/VideoHero";
import { home } from "../content/home";

const btnKeynote =
  "group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-red px-8 py-4 font-ui text-base font-semibold uppercase tracking-[0.08em] text-white shadow-cta-glow transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:scale-105 hover:bg-brand-red-dark hover:shadow-cta-glow-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red active:translate-y-px active:scale-[0.98]";

const btnFinalCta =
  "inline-flex items-center justify-center rounded-full bg-brand-red px-10 py-4 font-ui text-lg font-bold uppercase tracking-[0.08em] text-white shadow-cta-glow transition-all duration-400 ease-premium hover:scale-105 hover:bg-brand-red-dark hover:shadow-cta-glow-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red active:scale-95";

export default function Page() {
  const testimonialTilt = ["rotate-[1.7deg]", "-rotate-[2.1deg]", "rotate-[2deg]", "-rotate-[1.6deg]", "rotate-[1.4deg]"];

  return (
    <main id="content">
      <VideoHero />
      <IndictmentSection />
      <BioSection />

      <SectionWrapper className="relative !py-32 overflow-hidden bg-gradient-to-b from-brand-charcoal to-brand-dark text-brand-light md:!py-32">
        <div className="noise-layer" aria-hidden />
        <Reveal>
          <div className="group relative mx-auto max-w-4xl overflow-hidden rounded-r-2xl border-l-4 border-brand-red bg-gradient-to-br from-black/35 via-black/20 to-brand-red/10 py-8 pl-6 shadow-[0_30px_65px_-30px_rgba(0,0,0,0.65)] transition-all duration-300 ease-premium hover:scale-[1.02] hover:border-brand-red/90 hover:shadow-[0_36px_78px_-30px_rgba(211,47,47,0.28),0_28px_65px_-30px_rgba(0,0,0,0.72)] md:pl-10">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-400 ease-premium group-hover:opacity-100">
              <div className="absolute inset-0 border border-brand-red/40" />
            </div>
            <Reveal delayMs={40}>
              <h2 className="font-display text-6xl uppercase leading-[1.02] tracking-wide text-white md:text-7xl">{home.keynote.title}</h2>
            </Reveal>
            <Reveal delayMs={120}>
              <p className="mt-6 font-display text-[clamp(1.2rem,2.3vw,1.65rem)] uppercase tracking-wide text-brand-red">{home.keynote.subtitle}</p>
            </Reveal>
            <Reveal delayMs={190}>
              <p className="mt-8 max-w-3xl font-body text-lg leading-relaxed text-brand-light/95 md:text-xl">{home.keynote.description}</p>
            </Reveal>
            <Reveal delayMs={260}>
              <div className="mt-10">
                <Link href={home.keynote.cta.href} className={btnKeynote}>
                  {home.keynote.cta.label}
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-400 ease-premium group-hover:translate-x-0.5" strokeWidth={2} />
                </Link>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </SectionWrapper>

      <div className="h-20 bg-gradient-to-b from-brand-dark/95 via-brand-charcoal/35 to-brand-light" aria-hidden />

      <SectionWrapper className="relative bg-brand-light">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-[clamp(2.25rem,4.4vw,3.7rem)] uppercase leading-[1.06] tracking-wide text-brand-charcoal">{home.testimonialsHeading}</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-brand-red" aria-hidden />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {home.testimonials.map((t, i) => (
            <Reveal
              key={t.name + t.quote}
              delayMs={i * 120}
              className={i % 2 === 0 ? "md:mt-4" : ""}
            >
              <TestimonialCard quote={t.quote} name={t.name} title={t.title} rotationClass={testimonialTilt[i % testimonialTilt.length]} />
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
