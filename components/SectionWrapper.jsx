/** Full-bleed section backgrounds; inner content max-w-6xl + horizontal padding. */

export default function SectionWrapper({ id, children, className = "", innerClassName = "", decoration = null }) {
  return (
    <section id={id} className={`relative py-28 transition-all duration-400 ease-premium md:py-32 ${className}`}>
      {decoration}
      <div className={`relative z-[1] mx-auto max-w-6xl space-y-10 px-6 ${innerClassName}`}>{children}</div>
    </section>
  );
}
