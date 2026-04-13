import { Play } from "lucide-react";
import Image from "next/image";
import { work } from "../content/work";

/**
 * Work page — 16:9 thumb, optional featured span, category badge.
 */

export default function VideoCard({
  title,
  description,
  youtubeId,
  externalUrl,
  thumbnailSrc,
  category,
  featured = false,
}) {
  const isYoutube = Boolean(youtubeId && !externalUrl);
  const href = isYoutube ? `https://www.youtube.com/watch?v=${youtubeId}` : externalUrl;
  const thumb = isYoutube ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : thumbnailSrc;
  const ctaText = isYoutube ? `${work.watchOnYoutubeLabel} →` : `${work.watchExternalVideoLabel} →`;

  const badgeLabel =
    category && work.filters[category] != null ? String(work.filters[category]).toUpperCase() : "";

  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex h-full flex-col overflow-hidden rounded-[14px] border border-white/[0.08] bg-gradient-to-b from-[#242424] to-[#141414] shadow-[0_18px_44px_-30px_rgba(0,0,0,0.88)] transition-[transform,box-shadow,border-color,filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:border-brand-red/35 hover:shadow-[0_28px_56px_-28px_rgba(0,0,0,0.92),0_0_0_1px_rgba(211,47,47,0.12)] hover:brightness-[1.06] motion-reduce:hover:scale-100 motion-reduce:hover:brightness-100 ${featured ? "ring-1 ring-white/[0.07]" : ""}`}
    >
      <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-black">
        {isYoutube ? (
          <img
            src={thumb}
            alt=""
            loading={featured ? "eager" : "lazy"}
            className="h-full w-full object-cover transition-[transform,filter] duration-500 ease-premium group-hover:scale-[1.03] group-hover:brightness-105"
          />
        ) : (
          <Image
            src={thumb}
            alt=""
            width={1280}
            height={720}
            loading={featured ? "eager" : "lazy"}
            className="h-full w-full object-cover transition-[transform,filter] duration-500 ease-premium group-hover:scale-[1.03] group-hover:brightness-105"
            unoptimized
            style={{ maxWidth: "100%" }}
          />
        )}

        {badgeLabel ? (
          <span className="absolute left-3 top-3 z-[2] rounded-md border border-white/12 bg-black/70 px-2.5 py-1 font-ui text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur-sm">
            {badgeLabel}
          </span>
        ) : null}

        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/[0.92] via-black/[0.4] via-45% to-transparent transition-opacity duration-300"
          aria-hidden
        />

        <div className="absolute inset-0 z-[2] flex items-center justify-center">
          <span
            className={`flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-full bg-black/50 text-white shadow-[0_12px_40px_-12px_rgba(0,0,0,0.85)] ring-1 ring-white/25 backdrop-blur-md transition-transform duration-300 ease-premium motion-reduce:animate-none group-hover:scale-110 group-hover:ring-brand-red/45 ${featured ? "animate-play-pulse-soft md:h-[5.25rem] md:w-[5.25rem]" : ""}`}
          >
            <Play
              className={`ml-1 drop-shadow-md ${featured ? "h-11 w-11" : "h-9 w-9"}`}
              fill="currentColor"
              aria-hidden
            />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-7 pb-7 pt-6">
        <h3 className="font-ui text-lg font-bold leading-snug tracking-tight text-white md:text-[1.125rem]">{title}</h3>
        <p
          className="mt-2.5 line-clamp-2 min-h-0 font-body text-[15px] leading-relaxed text-brand-light/[0.72] md:text-[16px]"
          title={description}
        >
          {description}
        </p>
        <p className="mt-auto border-t border-white/[0.06] pt-4 font-ui text-[13px] font-bold uppercase tracking-[0.12em] text-brand-red transition-colors duration-300 ease-premium group-hover:text-white">
          {ctaText}
        </p>
      </div>
    </a>
  );
}
