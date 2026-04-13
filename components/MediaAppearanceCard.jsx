import Image from "next/image";
import { buildEmphasisParts } from "../lib/descriptionEmphasis";

/**
 * Media appearance — logo-forward card; `cardBlurb` is the tight “what you exposed” line.
 */
export default function MediaAppearanceCard({
  outlet,
  date,
  title,
  description,
  cardBlurb,
  emphasis,
  link,
  logo,
  viewLinkLabel,
  postDescriptionQuote,
}) {
  const viewText = viewLinkLabel.replace("→", "").trim();
  const parts = buildEmphasisParts(description, emphasis ?? []);
  const blurb = cardBlurb ?? null;

  return (
    <article
      className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[14px] border border-white/[0.05] bg-gradient-to-br from-[#2a2a2a] via-[#1e1e1e] to-[#141414] p-7 shadow-[0_16px_48px_-32px_rgba(0,0,0,0.9)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:border-white/[0.05] motion-reduce:hover:shadow-[0_16px_48px_-32px_rgba(0,0,0,0.9)] hover:-translate-y-1.5 hover:border-brand-red/30 hover:shadow-[0_20px_60px_-24px_rgba(255,59,59,0.15),0_24px_56px_-28px_rgba(0,0,0,0.92),0_0_0_1px_rgba(211,47,47,0.18)]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[14px] opacity-0 transition-opacity duration-300 ease-premium group-hover:opacity-100 motion-reduce:opacity-0">
        <span
          className="absolute inset-0 rounded-[14px] shadow-[inset_0_0_0_1px_rgba(211,47,47,0.14),inset_0_0_36px_-14px_rgba(255,59,59,0.06)]"
          aria-hidden
        />
      </div>

      <div className="relative flex min-h-[7.25rem] items-center justify-center rounded-[10px] border border-white/[0.06] bg-black/35 px-5 py-6 md:min-h-[7.75rem]">
        <Image
          src={logo}
          alt={outlet}
          width={320}
          height={112}
          className="max-h-[5.5rem] w-auto max-w-[min(100%,260px)] object-contain object-center opacity-[0.98] transition-opacity duration-300 ease-premium group-hover:opacity-100 md:max-h-[6rem]"
          loading="lazy"
          unoptimized
          style={{ maxWidth: "100%" }}
        />
      </div>

      <p className="relative mt-5 text-center font-ui text-[10px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-brand-light/42">
        <span className="text-brand-light/55">{outlet}</span>
        <span className="mx-2 text-brand-light/25" aria-hidden>
          ·
        </span>
        <span>{date}</span>
      </p>

      <h3 className="relative mt-3 text-center font-ui text-lg font-bold leading-snug tracking-tight text-white md:text-[1.2rem]">{title}</h3>

      {blurb ? (
        <p
          className="relative mt-4 line-clamp-2 min-h-0 flex-1 text-center font-body text-[15px] leading-[1.55] text-brand-light/[0.78] md:text-[16px] md:leading-[1.6]"
          title={description}
        >
          {blurb}
        </p>
      ) : (
        <p className="relative mt-4 line-clamp-3 min-h-0 flex-1 text-center font-body text-[15px] leading-[1.68] text-brand-light/[0.76] md:text-[16px] md:leading-[1.72]">
          {parts.map((seg, i) =>
            seg.type === "em" ? (
              <strong key={i} className="font-semibold text-[#ff3b3b]">
                {seg.value}
              </strong>
            ) : (
              <span key={i}>{seg.value}</span>
            )
          )}
        </p>
      )}

      {postDescriptionQuote ? (
        <p className="relative mt-5 border-l-[3px] border-brand-red/40 pl-4 text-left font-body text-[14px] leading-[1.72] text-brand-light/85 md:text-[15px]">
          {postDescriptionQuote}
        </p>
      ) : null}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="link-gradient-underline group/link relative mx-auto mt-7 inline-flex w-fit items-center gap-1.5 pb-0.5 font-ui text-sm font-bold text-brand-red transition-colors duration-300 ease-premium hover:text-white"
      >
        <span>{viewText}</span>
        <span className="transition-transform duration-300 ease-premium group-hover/link:translate-x-1">→</span>
      </a>
    </article>
  );
}
