import ContactForm from "../../components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import { talk } from "../../content/talk";

export const metadata = {
  title: talk.seo.title,
  description: talk.seo.description,
};

export default function Page() {
  return (
    <main id="content" className="relative min-h-screen bg-gradient-to-b from-brand-dark via-brand-charcoal to-black pb-24 pt-28">
      <div className="noise-layer opacity-[0.05]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(211,47,47,0.14),transparent_55%)]" aria-hidden />
      <div className="mx-auto max-w-[560px] px-5 md:px-8">
        <Reveal>
          <h1 className="text-center font-display text-[clamp(2.6rem,5.4vw,4rem)] uppercase tracking-widest text-white">{talk.headline}</h1>
        </Reveal>
        <Reveal delayMs={100}>
          <p className="mx-auto mt-6 max-w-[38rem] text-center font-body text-[19px] leading-[1.8] text-brand-light/95">{talk.subheadline}</p>
        </Reveal>
        <Reveal delayMs={160}>
          <p className="mt-9 text-center font-ui text-[12px] font-bold uppercase tracking-[0.2em] text-brand-red">{talk.trustIndicators}</p>
        </Reveal>
        <Reveal delayMs={220}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-10">
            {talk.featuredLogos.map((logo) => {
              const logoImage = (
                <Image
                  src={logo.file}
                  alt={logo.name}
                  width={156}
                  height={58}
                  className="h-9 w-auto object-contain opacity-60 grayscale transition-all duration-300 ease-premium hover:opacity-100 hover:grayscale-0 md:h-10"
                  unoptimized
                />
              );

              return logo.href ? (
                <Link
                  key={logo.name}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${logo.name} feature`}
                  className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
                >
                  {logoImage}
                </Link>
              ) : (
                <div key={logo.name}>{logoImage}</div>
              );
            })}
          </div>
        </Reveal>
        <Reveal delayMs={260}>
          <p className="mt-4 text-center">
            <Link
              href={talk.featuredLinkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui text-[12px] font-semibold uppercase tracking-[0.15em] text-brand-red transition-colors duration-300 ease-premium hover:underline hover:underline-offset-4 hover:text-[#f25a5a]"
            >
              {talk.featuredLinkLabel}
            </Link>
          </p>
        </Reveal>
        <Reveal delayMs={290}>
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-center font-ui text-[10px] font-bold uppercase tracking-[0.22em] text-brand-light/55">{talk.moreCoverageHeading}</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
              {talk.moreCoverageLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui text-[11px] font-semibold uppercase tracking-[0.11em] text-brand-light/72 transition-colors duration-300 ease-premium hover:text-brand-red hover:underline hover:underline-offset-4"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delayMs={320}>
          <div className="mt-14 rounded-[14px] border border-white/[0.1] bg-[#1a1a1a]/85 p-6 shadow-[0_28px_64px_-28px_rgba(0,0,0,0.85)] backdrop-blur-md md:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
