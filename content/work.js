/**
 * The Work — developer brief `content/work.js`.
 * Extra keys: `seo`, section headings, `filters`, and link labels (brief page spec implies UI; template is abbreviated).
 */

export const work = {
  seo: {
    title: "The Work — Amas Tenumah",
    description: "Keynotes, media, and video library.",
  },

  headline: "The Work",
  intro:
    "Keynotes, media, and programs that expose how customer service is designed — and what leaders must do next.",

  sectionAppearancesTitle: "Media appearances",
  sectionVideosTitle: "Video library",
  filters: {
    all: "All",
    keynote: "Keynote",
    media: "Media",
    panel: "Panel",
  },
  emptyCategoryMessage: "No videos in this category yet.",
  viewLinkLabel: "View →",
  watchOnYoutubeLabel: "Watch on YouTube",

  appearances: [
    {
      outlet: "NPR",
      date: "2023",
      title: "Why customer service ratings are getting worse",
      description: "National coverage on the forces shaping modern service.",
      link: "https://www.npr.org/2023/03/15/1163733421/why-customer-service-ratings-are-getting-worse",
      logo: "/images/npr-logo.webp",
    },
    {
      outlet: "NBC News",
      date: "2023",
      title: "Consumer frustration grows as service becomes more automated",
      description: "Evening news segment on automation and accountability.",
      link: "https://www.nbcnews.com/nightly-news/video/consumer-frustration-grows-as-customer-service-becomes-more-automated-193128517587",
      logo: "/images/nbc-logo.webp",
    },
  ],

  videos: [
    {
      title: "Keynote highlight",
      description: "Designed to fail — the economics leaders avoid discussing.",
      youtubeId: "SqaHblCgkLc",
      category: "keynote",
    },
    {
      title: "Media segment",
      description: "Why the system rewards the wrong outcomes.",
      youtubeId: "SqaHblCgkLc",
      category: "media",
    },
    {
      title: "Panel — CX leadership",
      description: "A roundtable on incentives, scorecards, and what to measure next.",
      youtubeId: "SqaHblCgkLc",
      category: "panel",
    },
  ],
};
