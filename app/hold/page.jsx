import Image from "next/image";
import { hold } from "../../content/hold";

export const metadata = {
  title: hold.seo.title,
  description: hold.seo.description,
};

export default function Page() {
  const descriptionParagraphs = hold.description.split("\n\n").filter(Boolean);

  return (
    <main id="content" className="min-h-screen bg-brand-dark pb-24 pt-28">
      <div className="mx-auto max-w-[1140px] px-5 text-center md:px-8">
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase tracking-wide text-white">{hold.headline}</h1>
        <p className="mt-4 font-body text-[20px] text-brand-light md:text-[22px]">{hold.subheadline}</p>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1140px] flex-col items-center gap-12 px-5 md:mt-20 md:flex-row md:items-start md:gap-16 md:px-8">
        <div className="w-full max-w-[420px] shrink-0">
          <Image
            src={hold.coverImage}
            width={838}
            height={1024}
            alt={hold.coverAlt}
            className="w-full rounded-lg object-contain shadow-2xl"
            sizes="(max-width: 768px) 100vw, 420px"
            priority
            unoptimized
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="min-w-0 flex-1 text-left">
          {descriptionParagraphs.map((p) => (
            <p key={p} className="font-body text-[18px] leading-relaxed text-brand-light md:text-[19px]">
              {p}
            </p>
          ))}
          <p className="mt-10 font-display text-[clamp(1.35rem,3vw,1.85rem)] uppercase leading-snug tracking-wide text-brand-red">{hold.thesis}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {hold.buyLinks.map((b) => (
              <a
                key={b.href}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-red px-8 py-3 font-ui text-[13px] font-bold uppercase tracking-[0.08em] text-white shadow-sm transition hover:opacity-90"
              >
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[1140px] space-y-12 px-5 md:px-8">
        {hold.pullQuotes.map((q) => (
          <blockquote
            key={q}
            className="border-l-4 border-brand-red py-2 pl-8 font-display text-[clamp(1.5rem,3.5vw,2.25rem)] uppercase leading-tight tracking-wide text-white"
          >
            {q}
          </blockquote>
        ))}
      </div>
    </main>
  );
}
