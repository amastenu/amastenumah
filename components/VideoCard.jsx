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
      className="group block cursor-pointer overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br from-brand-charcoal via-brand-charcoal to-brand-red/10 shadow-[0_18px_34px_-20px_rgba(0,0,0,0.6)] transition-all duration-300 ease-premium will-change-transform hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-[0_26px_46px_-20px_rgba(211,47,47,0.22),0_22px_38px_-20px_rgba(0,0,0,0.7)]"
    >
      <div className="relative aspect-video w-full bg-black">
        <img src={thumb} alt="" className="h-full w-full object-cover opacity-90 transition-all duration-300 ease-premium group-hover:scale-105 group-hover:opacity-100" />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 to-transparent transition-all duration-300 ease-premium group-hover:from-black/65" aria-hidden />
        <span className="absolute inset-0 flex items-center justify-center bg-black/22 transition-all duration-300 ease-premium group-hover:bg-black/40">
          <Play
            className="h-14 w-14 text-white drop-shadow-md transition-all duration-300 ease-premium group-hover:scale-115 group-hover:drop-shadow-[0_0_18px_rgba(211,47,47,0.45)]"
            fill="currentColor"
            aria-hidden
          />
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-[1.35rem] uppercase tracking-wide text-white">{title}</h3>
        <p className="mt-3 font-body text-[17px] leading-relaxed text-white">{description}</p>
        <p className="mt-4 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">{work.watchOnYoutubeLabel}</p>
      </div>
    </a>
  );
}
