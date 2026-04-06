/** Quote card — props only; data supplied by parent from content. */

export default function TestimonialCard({ quote, name, title }) {
  return (
    <blockquote className="flex h-full flex-col rounded-xl border border-white/10 bg-brand-charcoal p-6 shadow-lg shadow-black/25 transition-all duration-400 ease-premium hover:-translate-y-2 hover:border-white/10 hover:shadow-card-lift">
      <p className="flex-1 font-body text-lg italic leading-relaxed text-brand-light/95">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-7 border-t border-white/10 pt-6 font-ui text-base font-bold text-white">{name}</footer>
      <p className="mt-2 font-ui text-sm text-brand-light/55">{title}</p>
    </blockquote>
  );
}
