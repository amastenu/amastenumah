import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import StageGallery from "../../components/StageGallery";
import VideoCard from "../../components/VideoCard";
import { work } from "../../content/work";

const FILTER_IDS = Object.keys(work.filters);

export const metadata = {
  title: work.seo.title,
  description: work.seo.description,
};

function filterVideos(category) {
  if (category === "all" || !category) return work.videos;
  return work.videos.filter((v) => v.category === category);
}

export default function Page({ searchParams }) {
  const raw = searchParams?.category;
  const category = typeof raw === "string" && FILTER_IDS.includes(raw) ? raw : "all";
  const videos = filterVideos(category);

  return (
    <main
      id="content"
      className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_center,_#1A1A1A_0%,_#232323_52%,_#2C2C2C_100%)] pb-28 pt-32 md:pb-32"
    >
      <div className="noise-layer opacity-[0.06]" aria-hidden />
      <div className="relative mx-auto max-w-[1140px] px-5 text-center md:px-8">
        <div className="pointer-events-none absolute left-1/2 top-4 h-44 w-44 -translate-x-1/2 rounded-full bg-brand-red/18 blur-3xl md:h-56 md:w-56" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-6 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-red/8 blur-[72px] md:h-80 md:w-80" aria-hidden />
        <Reveal>
          <h1 className="relative opacity-0 animate-fade-in font-display text-[clamp(3.1rem,8vw,5.6rem)] uppercase leading-[0.95] tracking-widest text-white">
            {work.headline}
          </h1>
        </Reveal>
        <Reveal delayMs={120}>
          <p className="mx-auto mt-8 max-w-[760px] font-body text-[19px] leading-[1.85] text-brand-light/95 md:text-[21px]">{work.intro}</p>
        </Reveal>
        <Reveal delayMs={210}>
          <div className="mx-auto mt-10 h-px w-28 bg-brand-red/75" aria-hidden />
        </Reveal>
      </div>

      <div className="mx-auto mt-24 max-w-[1140px] px-5 md:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.08] uppercase tracking-wide text-white">{work.sectionAppearancesTitle}</h2>
        </Reveal>
        <ul className="mt-12 space-y-9">
          {work.appearances.map((a, i) => (
            <Reveal key={a.link} delayMs={i * 90}>
              <li className="group flex flex-col gap-5 rounded-xl border border-white/15 border-l-2 border-l-brand-red/75 bg-gradient-to-br from-brand-charcoal/95 via-brand-charcoal/90 to-brand-red/10 p-7 shadow-[0_14px_30px_-18px_rgba(0,0,0,0.52)] transition-all duration-300 ease-premium hover:scale-[1.02] hover:border-brand-red/45 hover:border-l-brand-red hover:shadow-[0_18px_36px_-20px_rgba(211,47,47,0.16),0_18px_34px_-18px_rgba(0,0,0,0.62)] md:flex-row md:items-center md:gap-9 md:p-8">
                <div className="flex h-20 w-36 shrink-0 items-center justify-center rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                  <Image
                    src={a.logo}
                    alt={a.outlet}
                    width={120}
                    height={48}
                    className="max-h-11 w-auto object-contain opacity-90 transition-opacity duration-300 ease-premium group-hover:opacity-100"
                    unoptimized
                    style={{ maxWidth: "100%" }}
                  />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="font-ui text-xs font-bold uppercase tracking-[0.18em] text-brand-red">{a.date}</p>
                  <h3 className="mt-2 font-display text-[1.6rem] uppercase leading-[1.05] tracking-wide text-white">{a.title}</h3>
                  <p className="mt-3 font-body text-[17px] leading-relaxed text-white">{a.description}</p>
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link relative mt-4 inline-flex items-center gap-1 font-ui text-sm font-semibold text-brand-red transition-colors duration-300 ease-premium after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-red/80 after:transition-transform after:duration-300 after:ease-premium hover:text-white hover:after:scale-x-100"
                  >
                    <span>{work.viewLinkLabel.replace("→", "").trim()}</span>
                    <span className="transition-transform duration-300 ease-premium group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-24 max-w-[1140px] px-5 md:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.08] uppercase tracking-wide text-white">{work.sectionVideosTitle}</h2>
        </Reveal>
        <Reveal delayMs={80}>
          <div className="mt-8 -mx-1 flex flex-wrap gap-3 px-1 py-2">
          {FILTER_IDS.map((id) => (
            <Link
              key={id}
              href={id === "all" ? "/work" : `/work?category=${id}`}
              scroll={false}
              className={`rounded-full border px-5 py-2.5 font-ui text-[12px] font-bold uppercase tracking-[0.14em] shadow-[0_8px_20px_-14px_rgba(0,0,0,0.55)] transition-all duration-200 ease-premium active:scale-[0.98] ${
                category === id
                  ? "border-brand-red-dark bg-brand-red-dark text-white shadow-[0_10px_24px_-12px_rgba(183,28,28,0.55)] hover:scale-105 hover:bg-brand-red hover:shadow-[0_14px_30px_-14px_rgba(211,47,47,0.5)]"
                  : "border-white/20 bg-brand-charcoal/80 text-brand-light hover:scale-105 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_10px_24px_-14px_rgba(211,47,47,0.2),0_10px_24px_-14px_rgba(0,0,0,0.6)]"
              }`}
            >
              {work.filters[id]}
            </Link>
          ))}
          </div>
        </Reveal>
        <div className="mt-12 grid gap-9 md:grid-cols-2">
          {videos.length === 0 ? (
            <Reveal>
              <p className="font-body text-brand-light/70">{work.emptyCategoryMessage}</p>
            </Reveal>
          ) : (
            videos.map((v, i) => (
              <Reveal
                key={v.title + v.youtubeId + v.category}
                delayMs={i * 80}
                className={videos.length % 2 === 1 && i === videos.length - 1 ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[34rem]" : ""}
              >
                <VideoCard title={v.title} description={v.description} youtubeId={v.youtubeId} />
              </Reveal>
            ))
          )}
        </div>
      </div>

      <div id="conference-speeches" className="mx-auto mt-24 max-w-[1140px] px-5 md:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.08] uppercase tracking-wide text-white">{work.sectionConferenceTitle}</h2>
        </Reveal>
        <Reveal delayMs={80}>
          <p className="mt-6 max-w-[760px] font-body text-[18px] leading-[1.8] text-white md:text-[20px]">{work.sectionConferenceIntro}</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {work.conferenceVideos.map((item, i) => (
            <Reveal key={item.link} delayMs={120 + i * 80}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-white/15 border-l-2 border-l-brand-red/75 bg-gradient-to-br from-brand-charcoal/95 via-brand-charcoal/90 to-brand-red/10 p-6 shadow-[0_14px_30px_-18px_rgba(0,0,0,0.52)] transition-all duration-300 ease-premium hover:scale-[1.02] hover:border-brand-red/45 hover:border-l-brand-red"
              >
                <p className="font-ui text-xs font-bold uppercase tracking-[0.18em] text-brand-red">Watch</p>
                <h3 className="mt-2 font-display text-[1.5rem] uppercase leading-[1.08] tracking-wide text-white">{item.title}</h3>
                <p className="mt-3 font-body text-[16px] leading-relaxed text-white">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-ui text-sm font-semibold text-brand-red transition-colors duration-300 ease-premium group-hover:text-white">
                  <span>{work.watchOnYoutubeLabel}</span>
                  <span className="transition-transform duration-300 ease-premium group-hover:translate-x-1">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <StageGallery items={work.stageStills} labels={work.stageGallery} />
      </div>
    </main>
  );
}
