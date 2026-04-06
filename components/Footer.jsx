import Image from "next/image";
import Link from "next/link";
import { site } from "../content/global";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-brand-dark to-black py-24 text-brand-light transition-all duration-400 ease-premium">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20 lg:grid-cols-3">
          <div>
            <Image
              width={site.logo.width}
              height={site.logo.height}
              src={site.logo.src}
              className="h-12 w-auto"
              alt={site.logo.alt}
              sizes="160px"
              unoptimized
              style={{ maxWidth: "100%" }}
            />
            <p className="mt-4 font-body text-[17px] leading-relaxed text-brand-light/90">{site.tagline}</p>
          </div>
          <div>
            <h2 className="font-ui text-[12px] font-bold uppercase tracking-wider text-white">{site.footer.followHeading}</h2>
            <ul className="mt-4 space-y-4 font-ui text-[15px]">
              <li>
                <a
                  href={site.social.linkedin}
                  className="text-gray-400 transition-all duration-400 ease-premium hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.footer.socialLabels.linkedin}
                </a>
              </li>
              <li>
                <a
                  href={site.social.twitter}
                  className="text-gray-400 transition-all duration-400 ease-premium hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.footer.socialLabels.twitter}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-gray-400 transition-all duration-400 ease-premium hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-ui text-[12px] font-bold uppercase tracking-wider text-white">{site.footer.pagesHeading}</h2>
            <ul className="mt-4 space-y-4 font-ui text-[15px]">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 transition-all duration-400 ease-premium hover:text-white">
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
