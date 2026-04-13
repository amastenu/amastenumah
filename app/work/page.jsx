import Link from "next/link";
import MediaAppearanceCard from "../../components/MediaAppearanceCard";
import Reveal from "../../components/Reveal";
import StageGallery from "../../components/StageGallery";
import VideoCard from "../../components/VideoCard";
import { site } from "../../content/global";
import { work } from "../../content/work";

const SOCIAL_ORDER = ["linkedin", "x", "instagram", "tiktok"];

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
        <ul className="mt-12 grid list-none grid-cols-1 gap-7 p-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {work.appearances.map((a, i) => (
            <li key={a.link} className="flex min-w-0">
              <Reveal delayMs={i * 70} className="h-full w-full">
                <MediaAppearanceCard
                  outlet={a.outlet}
                  date={a.date}
                  title={a.title}
                  description={a.description}
                  cardBlurb={a.cardBlurb}
                  emphasis={a.emphasis ?? []}
                  link={a.link}
                  logo={a.logo}
                  viewLinkLabel={work.viewLinkLabel}
                  postDescriptionQuote={a.postDescriptionQuote}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-24 max-w-[1140px] px-5 md:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.08] uppercase tracking-wide text-white">{work.sectionVideosTitle}</h2>
        </Reveal>
        <Reveal delayMs={80}>
          <div className="mt-10 flex flex-wrap gap-3 md:mt-12 md:gap-4">
            {FILTER_IDS.map((id) => {
              const active = category === id;
              return (
                <Link
                  key={id}
                  href={id === "all" ? "/work" : `/work?category=${id}`}
                  scroll={false}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full border px-6 py-3 font-ui text-[12px] font-bold uppercase tracking-[0.14em] transition-all duration-200 ease-premium active:scale-[0.98] ${
                    active
                      ? "border-brand-red bg-brand-red-dark text-white shadow-[0_0_0_2px_rgba(26,26,26,1),0_0_0_4px_rgba(211,47,47,0.45),0_12px_28px_-10px_rgba(183,28,28,0.55)] hover:border-brand-red hover:bg-brand-red"
                      : "border-white/18 bg-brand-charcoal/70 text-brand-light/95 shadow-[0_8px_20px_-14px_rgba(0,0,0,0.5)] hover:border-white/28 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {work.filters[id]}
                </Link>
              );
            })}
          </div>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
          {videos.length === 0 ? (
            <Reveal>
              <p className="font-body text-brand-light/70">{work.emptyCategoryMessage}</p>
            </Reveal>
          ) : (
            videos.map((v, i) => (
              <Reveal
                key={`${v.title}-${v.youtubeId ?? v.externalUrl ?? "x"}-${v.category}`}
                delayMs={i * 80}
                className={`flex min-h-0 min-w-0 ${i === 0 ? "md:col-span-2" : ""}`}
              >
                <div className="w-full">
                  <VideoCard
                    title={v.title}
                    description={v.description}
                    youtubeId={v.youtubeId}
                    externalUrl={v.externalUrl}
                    thumbnailSrc={v.thumbnailSrc}
                    category={v.category}
                    featured={i === 0}
                  />
                </div>
              </Reveal>
            ))
          )}
        </div>
      </div>

      <div id="the-stages" className="relative mx-auto mt-28 max-w-[1140px] px-5 md:mt-32 md:px-8">
        <div
          className="pointer-events-none absolute inset-0 -mx-4 rounded-[14px] bg-gradient-to-b from-brand-red/[0.06] via-transparent to-black/20 md:-mx-8"
          aria-hidden
        />
        <div className="section-noise-soft pointer-events-none absolute inset-0 -mx-4 rounded-[14px] opacity-40 md:-mx-8" aria-hidden />
        <div className="relative">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.08] uppercase tracking-wide text-white">
              {work.sectionConferenceTitle}
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-8 max-w-[42rem] font-body text-[18px] leading-[1.85] text-brand-light/90 md:text-[20px]">
              {work.sectionConferenceIntro}
            </p>
          </Reveal>
          <div className="relative mt-20 md:mt-24">
            <StageGallery items={work.stageStills} labels={work.stageGallery} />
          </div>
        </div>
      </div>

      <section
        className="mx-auto mt-24 max-w-[1140px] border-t border-white/10 px-5 pb-6 pt-14 md:mt-28 md:px-8"
        aria-labelledby="work-connect-heading"
      >
        <h2
          id="work-connect-heading"
          className="text-center font-ui text-[11px] font-bold uppercase tracking-[0.22em] text-brand-light/50"
        >
          Connect
        </h2>
        <ul className="mt-8 flex list-none flex-wrap justify-center gap-x-10 gap-y-5 p-0 text-center md:gap-x-14">
          {SOCIAL_ORDER.map((id) => (
            <li key={id}>
              <a
                href={site.social[id]}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col items-center gap-1.5 font-ui text-[14px] text-brand-light/80 transition-colors duration-300 ease-premium hover:text-white"
              >
                <span className="font-semibold tracking-wide">{site.footer.socialLabels[id]}</span>
                <span className="text-[13px] font-normal normal-case tracking-normal text-brand-light/45 group-hover:text-brand-light/70">
                  {site.socialHandles[id]}
                </span>
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex flex-col items-center gap-1.5 font-ui text-[14px] text-brand-light/80 transition-colors duration-300 ease-premium hover:text-white"
            >
              <span className="font-semibold tracking-wide">Email</span>
              <span className="text-[13px] font-normal normal-case tracking-normal text-brand-light/45 group-hover:text-brand-light/70">
                {site.email}
              </span>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
