import Image from "next/image";
import Link from "next/link";
import { home } from "../content/home";

/**
 * Credibility strip — data from home.mediaLogos only.
 */
export default function MediaLogos() {
  const marqueeLogos = [...home.mediaLogos, ...home.mediaLogos];

  return (
    <div className="border-t border-white/5 py-12 pt-8">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent md:w-28" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent md:w-28" aria-hidden />
        <div className="flex w-max animate-logo-marquee items-center gap-14 pr-14 will-change-transform motion-reduce:animate-none md:gap-20 md:pr-20">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-[4.75rem] w-[10rem] shrink-0 items-center justify-center md:h-20 md:w-48"
            >
              {logo.href ? (
                <Link
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${logo.name} feature`}
                  className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <Image
                    src={logo.file}
                    alt={logo.name}
                    width={176}
                    height={72}
                    loading="lazy"
                    className="max-h-[3.2rem] w-auto animate-logo-fade-scale object-contain opacity-0 grayscale transition-all duration-400 ease-premium hover:scale-105 hover:opacity-100 hover:grayscale-0 motion-reduce:opacity-100 motion-reduce:animate-none md:max-h-14"
                    sizes="176px"
                    unoptimized
                    style={{ maxWidth: "100%", animationDelay: `${(index % home.mediaLogos.length) * 90}ms` }}
                  />
                </Link>
              ) : (
                <Image
                  src={logo.file}
                  alt={logo.name}
                  width={176}
                  height={72}
                  loading="lazy"
                  className="max-h-[3.2rem] w-auto animate-logo-fade-scale object-contain opacity-0 grayscale transition-all duration-400 ease-premium hover:scale-105 hover:opacity-100 hover:grayscale-0 motion-reduce:opacity-100 motion-reduce:animate-none md:max-h-14"
                  sizes="176px"
                  unoptimized
                  style={{ maxWidth: "100%", animationDelay: `${(index % home.mediaLogos.length) * 90}ms` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
