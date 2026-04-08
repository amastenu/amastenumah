import { Quote } from "lucide-react";

/** Quote card — props only; data supplied by parent from content. */

export default function TestimonialCard({ quote, name, title, rotationClass = "" }) {
  return (
    <blockquote
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-brand-charcoal p-8 shadow-lg shadow-black/25 transition-all duration-400 ease-premium will-change-transform hover:-translate-y-[8px] hover:border-white/20 hover:shadow-[0_24px_52px_-20px_rgba(211,47,47,0.22),0_22px_40px_-18px_rgba(0,0,0,0.5)] md:p-9 ${rotationClass}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-brand-red/[0.07] opacity-80 transition-opacity duration-400 ease-premium group-hover:opacity-100" aria-hidden />
      <Quote className="pointer-events-none absolute -right-2 top-2 h-24 w-24 text-white/10 transition-colors duration-400 ease-premium group-hover:text-white/15" strokeWidth={1.4} aria-hidden />
      <p className="relative z-[1] flex-1 font-body text-lg italic leading-relaxed text-brand-light/95 md:text-[1.14rem]">&ldquo;{quote}&rdquo;</p>
      <div className="mt-8 border-t border-white/15 pt-6">
        <footer className="font-ui text-lg font-extrabold text-white">{name}</footer>
        <p className="mt-2 font-ui text-sm text-brand-light/60">{title}</p>
      </div>
    </blockquote>
  );
}
