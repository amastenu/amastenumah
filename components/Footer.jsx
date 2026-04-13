import Image from "next/image";
import Link from "next/link";
import { site } from "../content/global";

const SOCIAL_KEYS = ["linkedin", "x", "instagram", "tiktok"];

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
              {SOCIAL_KEYS.map((id) => (
                <li key={id}>
                  <a
                    href={site.social[id]}
                    className="group inline-flex flex-col gap-0.5 text-gray-400 transition-colors duration-400 ease-premium hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="link-gradient-underline inline-block w-fit pb-0.5 font-semibold">{site.footer.socialLabels[id]}</span>
                    <span className="text-[13px] font-normal normal-case tracking-normal text-gray-500 transition-colors duration-400 ease-premium group-hover:text-brand-light/75">
                      {site.socialHandles[id]}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex flex-col gap-0.5 text-gray-400 transition-colors duration-400 ease-premium hover:text-white"
                >
                  <span className="link-gradient-underline inline-block w-fit pb-0.5 font-semibold">Email</span>
                  <span className="text-[13px] font-normal normal-case tracking-normal text-gray-500 transition-colors duration-400 ease-premium group-hover:text-brand-light/75">
                    {site.email}
                  </span>
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
                    className="link-gradient-underline group inline-flex pb-1 font-ui text-[15px] text-gray-400 transition-colors duration-400 ease-premium hover:text-white"
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
