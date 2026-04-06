import Image from "next/image";
import Link from "next/link";
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
    <main id="content" className="min-h-screen bg-brand-dark pb-20 pt-28">
      <div className="mx-auto max-w-[1140px] px-5 text-center md:px-8">
        <h1 className="font-display text-[clamp(2rem,4vw,3rem)] uppercase tracking-wide text-white">{work.headline}</h1>
        <p className="mx-auto mt-6 max-w-[720px] font-body text-[18px] leading-relaxed text-brand-light md:text-[19px]">{work.intro}</p>
      </div>

      <div className="mx-auto mt-16 max-w-[1140px] px-5 md:px-8">
        <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] uppercase tracking-wide text-white">{work.sectionAppearancesTitle}</h2>
        <ul className="mt-10 space-y-8">
          {work.appearances.map((a) => (
            <li key={a.link} className="flex flex-col gap-4 rounded-xl border border-white/10 bg-brand-charcoal/80 p-6 md:flex-row md:items-center md:gap-8">
              <div className="flex h-16 w-32 shrink-0 items-center justify-center rounded bg-white/5 p-2">
                <Image src={a.logo} alt={a.outlet} width={120} height={48} className="max-h-10 w-auto object-contain" unoptimized style={{ maxWidth: "100%" }} />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <p className="font-ui text-xs font-bold uppercase tracking-wider text-brand-red">{a.date}</p>
                <h3 className="mt-1 font-display text-[1.35rem] uppercase tracking-wide text-white">{a.title}</h3>
                <p className="mt-2 font-body text-[16px] text-brand-light/90">{a.description}</p>
                <a href={a.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-ui text-sm font-semibold text-brand-red hover:underline">
                  {work.viewLinkLabel}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-20 max-w-[1140px] px-5 md:px-8">
        <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] uppercase tracking-wide text-white">{work.sectionVideosTitle}</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {FILTER_IDS.map((id) => (
            <Link
              key={id}
              href={id === "all" ? "/work" : `/work?category=${id}`}
              scroll={false}
              className={`rounded-full px-4 py-2 font-ui text-[12px] font-bold uppercase tracking-wider transition ${
                category === id ? "bg-brand-red text-white" : "bg-brand-charcoal text-brand-light hover:bg-white/10"
              }`}
            >
              {work.filters[id]}
            </Link>
          ))}
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {videos.length === 0 ? (
            <p className="font-body text-brand-light/70">{work.emptyCategoryMessage}</p>
          ) : (
            videos.map((v) => (
              <VideoCard key={v.title + v.youtubeId + v.category} title={v.title} description={v.description} youtubeId={v.youtubeId} />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
