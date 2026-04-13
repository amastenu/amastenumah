"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { site } from "../content/global";

export default function Nav() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(pathname !== "/");
  const [solidBar, setSolidBar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolidBar(y > 32);
      if (pathname !== "/") {
        setVisible(true);
        return;
      }
      setVisible(y > 48);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const toggle = useCallback(() => setMenuOpen((o) => !o), []);

  const linkClass = (href) => {
    const active = pathname === href || pathname.startsWith(`${href}/`);
    return [
      "group relative inline-flex font-ui text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-400 ease-premium after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-brand-red after:to-[#ff7a7a] after:transition-transform after:duration-400 after:ease-premium hover:after:scale-x-100",
      active ? "text-brand-red after:scale-x-100" : "text-brand-charcoal hover:text-brand-red",
    ].join(" ");
  };

  const barSurface = solidBar
    ? "border-brand-charcoal/10 bg-white/95 shadow-md backdrop-blur-md"
    : "border-brand-charcoal/10 bg-white/80 shadow-sm backdrop-blur-md";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b font-ui transition-all duration-400 ease-premium ${barSurface} ${
        visible ? "translate-y-0" : "pointer-events-none -translate-y-full"
      }`}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-brand-red focus:px-4 focus:py-2 focus:text-white"
      >
        {site.accessibility.skipToContent}
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-5">
        <Link
          href="/"
          className="group shrink-0 font-display text-[clamp(1.65rem,4.2vw,2.35rem)] uppercase leading-none tracking-[0.14em] text-brand-charcoal transition-transform duration-400 ease-premium hover:scale-[1.02]"
        >
          <span className="text-brand-red">A</span>
          <span>MAS</span>
          <span className="mx-1.5 inline-block h-[0.78em] w-px translate-y-[0.06em] bg-brand-red align-middle opacity-90" aria-hidden />
          <span>TENUMAH</span>
          <span className="sr-only"> — {site.logo.alt}</span>
        </Link>

        <nav aria-label={site.accessibility.menuNavLabel} className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-brand-charcoal transition-colors duration-400 ease-premium lg:hidden"
          aria-label={menuOpen ? site.accessibility.menuClose : site.accessibility.menuToggle}
          aria-expanded={menuOpen}
          onClick={toggle}
        >
          {menuOpen ? <X className="h-6 w-6" strokeWidth={2} aria-hidden /> : <Menu className="h-6 w-6" strokeWidth={2} aria-hidden />}
        </button>
      </div>

      <div
        className={`border-t border-brand-charcoal/10 font-ui backdrop-blur-md lg:hidden ${solidBar ? "bg-white/95" : "bg-white/85"} ${menuOpen ? "block" : "hidden"}`}
      >
        <nav aria-label={site.accessibility.menuNavLabel} className="mx-auto flex max-w-6xl flex-col px-6 py-4">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b border-brand-charcoal/10 py-3 ${linkClass(item.href)}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
