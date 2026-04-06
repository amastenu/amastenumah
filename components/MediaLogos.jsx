import Image from "next/image";
import { home } from "../content/home";

/**
 * Credibility strip — data from home.mediaLogos only.
 */
export default function MediaLogos() {
  return (
    <div className="border-t border-white/5 py-12 pt-8">
      <div className="-mx-6 flex snap-x snap-mandatory items-center justify-start gap-12 overflow-x-auto px-6 md:mx-0 md:snap-none md:flex-wrap md:justify-center md:gap-16 md:overflow-visible">
        {home.mediaLogos.map((logo) => (
          <div
            key={logo.name}
            className="flex h-[4.5rem] w-[9rem] shrink-0 snap-center items-center justify-center md:h-20 md:w-44"
          >
            <Image
              src={logo.file}
              alt={logo.name}
              width={160}
              height={64}
              loading="lazy"
              className="max-h-[3rem] w-auto object-contain opacity-40 grayscale transition-all duration-400 ease-premium hover:-translate-y-1 hover:scale-110 hover:opacity-100 hover:grayscale-0 md:max-h-14"
              sizes="160px"
              unoptimized
              style={{ maxWidth: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
