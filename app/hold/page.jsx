import Image from "next/image";
import Reveal from "../../components/Reveal";
import { hold } from "../../content/hold";

export const metadata = {
  title: hold.seo.title,
  description: hold.seo.description,
};

export default function Page() {
  const descriptionParagraphs = hold.description.split("\n\n").filter(Boolean);

  return (
    <main
      id="content"
      className="relative min-h-screen overflow-visible bg-[radial-gradient(circle_at_50%_16%,_#2A2A2A_0%,_#1F1F1F_42%,_#1A1A1A_100%)] pb-28 pt-32"
    >
      <div className="noise-layer opacity-[0.05]" aria-hidden />
      <div className="mx-auto max-w-[1140px] px-5 text-center md:px-8">
        <div className="pointer-events-none absolute left-1/2 top-8 h-44 w-44 -translate-x-1/2 rounded-full bg-brand-red/18 blur-3xl md:h-56 md:w-56" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-red/8 blur-[78px]" aria-hidden />
        <Reveal>
          <h1 className="font-display text-[clamp(4.2rem,14vw,8.4rem)] uppercase tracking-widest leading-[0.9] text-white [text-shadow:0_6px_26px_rgba(0,0,0,0.42)]">
            {hold.headline}
          </h1>
        </Reveal>
        <Reveal delayMs={120}>
          <p className="mx-auto mt-6 max-w-[760px] font-body text-[20px] leading-relaxed text-brand-light md:text-[22px]">{hold.subheadline}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1140px] flex-col items-center gap-12 px-5 md:mt-24 md:flex-row md:items-start md:gap-16 md:px-8">
        <Reveal>
          <div className="w-full max-w-[420px] shrink-0">
            <Image
              src={hold.coverImage}
              width={838}
              height={1024}
              alt={hold.coverAlt}
              className="w-full rounded-lg object-contain shadow-[0_34px_62px_-30px_rgba(0,0,0,0.8)] transition-all duration-300 ease-premium hover:-translate-y-[6px] hover:scale-[1.02] hover:shadow-[0_38px_72px_-30px_rgba(211,47,47,0.22),0_36px_68px_-30px_rgba(0,0,0,0.86)]"
              sizes="(max-width: 768px) 100vw, 420px"
              priority
              unoptimized
              style={{ maxWidth: "100%" }}
            />
          </div>
        </Reveal>
        <div className="min-w-0 flex-1 text-left">
          <div className="mx-auto max-w-[40rem] md:mx-0">
            {descriptionParagraphs.map((p, i) => (
              <Reveal key={p} delayMs={i * 100}>
                <p className={`font-body text-[20px] leading-[1.9] text-brand-light/95 md:text-[20px] ${i > 0 ? "mt-8" : ""}`}>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delayMs={220}>
            <p className="mt-20 max-w-[32rem] whitespace-normal break-words font-display text-[clamp(2rem,4.2vw,3rem)] uppercase leading-[1.3] tracking-[0.05em] text-brand-red [text-shadow:0_8px_24px_rgba(0,0,0,0.35)]">
              {hold.thesis}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-[1140px] space-y-16 px-5 md:px-8">
        {hold.pullQuotes.map((q, i) => (
          <Reveal key={q} delayMs={i * 120}>
            <blockquote className="border-l-[5px] border-brand-red py-3 pl-9 font-body text-[clamp(1.2rem,2.8vw,1.65rem)] font-medium leading-[1.45] text-white/95 md:text-[clamp(1.25rem,2.4vw,1.5rem)] md:leading-[1.5]">
              {q}
            </blockquote>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-[1140px] px-5 md:mt-28 md:px-8">
        <Reveal>
          <h2 className="text-center font-display text-[clamp(1.5rem,3.2vw,2.25rem)] uppercase tracking-[0.12em] text-brand-light/90">
            {hold.pressQuotesHeading}
          </h2>
        </Reveal>
        <ul className="mx-auto mt-12 max-w-[52rem] list-none space-y-10 p-0 text-left">
          {hold.pressQuotes.map((item, i) => (
            <li key={i}>
              <Reveal delayMs={i * 80}>
                <blockquote className="border-l-[4px] border-brand-red/55 py-1 pl-6 md:pl-8">
                  <p className="font-body text-[17px] leading-[1.75] text-white/95 md:text-[18px] md:leading-[1.8]">{item.quote}</p>
                  <p className="mt-3 font-ui text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-light/55">{item.attribution}</p>
                </blockquote>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal delayMs={120}>
          <blockquote className="mx-auto mt-14 max-w-[52rem] border-t border-white/[0.08] pt-12 text-center">
            <p className="mx-auto max-w-[48rem] font-body text-[17px] leading-[1.75] text-brand-light/90 md:text-[18px] md:leading-[1.82]">
              {hold.credibilityQuote.quote}
            </p>
            <p className="mt-4 font-ui text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-light/50">{hold.credibilityQuote.attribution}</p>
          </blockquote>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-[1140px] px-5 md:mt-20 md:px-8">
        <Reveal delayMs={80}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            {hold.buyLinks.map((b) => (
              <a
                key={b.href}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-red px-8 py-3 font-ui text-[13px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_10px_24px_-14px_rgba(0,0,0,0.6)] transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-brand-red-dark hover:shadow-[0_10px_30px_rgba(239,68,68,0.25)] active:translate-y-0 active:scale-[0.98]"
              >
                {b.label}
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delayMs={160}>
          <div className="mx-auto mt-8 max-w-lg text-center">
            <a
              href={`mailto:${hold.signedCopy.email}`}
              className="font-body text-[15px] leading-relaxed text-brand-light/75 underline decoration-brand-light/30 underline-offset-[5px] transition-colors duration-300 ease-premium hover:text-white hover:decoration-white/50"
            >
              {hold.signedCopy.line}
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
