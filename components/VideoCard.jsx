import { Play } from "lucide-react";
import { work } from "../content/work";

/** Work page — links to YouTube (allowed on /work; not used in hero). */

export default function VideoCard({ title, description, youtubeId }) {
  const href = `https://www.youtube.com/watch?v=${youtubeId}`;
  const thumb = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border border-brand-charcoal/20 bg-brand-charcoal shadow-sm transition hover:border-brand-red/40"
    >
      <div className="relative aspect-video w-full bg-black">
        <img src={thumb} alt="" className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100" />
        <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/35">
          <Play className="h-14 w-14 text-white drop-shadow-md" fill="currentColor" aria-hidden />
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-[1.25rem] uppercase tracking-wide text-white">{title}</h3>
        <p className="mt-2 font-body text-[16px] leading-relaxed text-brand-light/90">{description}</p>
        <p className="mt-3 font-ui text-xs font-semibold uppercase tracking-wider text-brand-red">{work.watchOnYoutubeLabel}</p>
      </div>
    </a>
  );
}
