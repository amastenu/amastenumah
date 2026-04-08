import Image from "next/image";
import Link from "next/link";
import { site } from "../content/global";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-brand-dark to-black py-28 text-brand-light opacity-0 animate-fade-in transition-all duration-400 ease-premium">
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/70 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-2 md:gap-24 lg:grid-cols-3">
          <div>
            <Image
              width={site.footer.logo.width}
              height={site.footer.logo.height}
              src={site.footer.logo.src}
              className="h-14 w-auto"
              alt={site.footer.logo.alt}
              sizes="160px"
              unoptimized
              style={{ maxWidth: "100%" }}
            />
            <p className="mt-4 font-body text-[17px] leading-relaxed text-brand-light/90">{site.tagline}</p>
          </div>
          <div>
            <h2 className="font-ui text-[12px] font-bold uppercase tracking-[0.18em] text-white">{site.footer.followHeading}</h2>
            <ul className="mt-5 space-y-4 font-ui text-[15px]">
              <li>
                <a
                  href={site.social.linkedin}
                  className="group relative inline-flex text-gray-400 transition-all duration-400 ease-premium hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-red/80 after:transition-transform after:duration-400 after:ease-premium hover:after:scale-x-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.footer.socialLabels.linkedin}
                </a>
              </li>
              <li>
                <a
                  href={site.social.x}
                  className="group relative inline-flex text-gray-400 transition-all duration-400 ease-premium hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-red/80 after:transition-transform after:duration-400 after:ease-premium hover:after:scale-x-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.footer.socialLabels.x}
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  className="group relative inline-flex text-gray-400 transition-all duration-400 ease-premium hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-red/80 after:transition-transform after:duration-400 after:ease-premium hover:after:scale-x-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.footer.socialLabels.instagram}
                </a>
              </li>
              <li>
                <a
                  href={site.social.tiktok}
                  className="group relative inline-flex text-gray-400 transition-all duration-400 ease-premium hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-red/80 after:transition-transform after:duration-400 after:ease-premium hover:after:scale-x-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.footer.socialLabels.tiktok}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group relative inline-flex text-gray-400 transition-all duration-400 ease-premium hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-red/80 after:transition-transform after:duration-400 after:ease-premium hover:after:scale-x-100"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-ui text-[12px] font-bold uppercase tracking-[0.18em] text-white">{site.footer.pagesHeading}</h2>
            <ul className="mt-5 space-y-4 font-ui text-[15px]">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative inline-flex text-gray-400 transition-all duration-400 ease-premium hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-red/80 after:transition-transform after:duration-400 after:ease-premium hover:after:scale-x-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center font-ui text-sm text-brand-light/70">{site.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
