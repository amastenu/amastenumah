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
  sectionConferenceTitle: "Conference & Speeches",
  sectionConferenceIntro: "Watch featured talks and see stage stills from recent speaking engagements.",
  stageGallery: {
    defaultTag: "ON STAGE",
    closeLabel: "Close gallery",
    prevLabel: "Previous image",
    nextLabel: "Next image",
  },
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

  conferenceVideos: [
    {
      title: "Speaker reel",
      description: "Flagship reel for conferences, associations, and executive audiences.",
      link: "https://youtu.be/SqaHblCgkLc",
    },
    {
      title: "Five9",
      description: "Conference session segment on modern customer experience and trust.",
      link: "https://youtu.be/5uHQDhf_RZA?si=U0ygcXgnvSqSgmSp",
    },
  ],

  stageStills: [
    { src: "/images/Amas on fox tv still.png", alt: "Amas on stage at FOX TV segment", tag: "FOX TV" },
    { src: "/images/Amas on panel 22.png", alt: "Amas speaking on a conference panel", tag: "PANEL" },
    { src: "/images/Amas on panel 22(1).png", alt: "Amas on panel discussion stage", tag: "PANEL" },
    { src: "/images/Amas on panel 2022.png", alt: "Amas speaking at 2022 panel event", tag: "PANEL" },
    { src: "/images/Amas still on stage 2013.png", alt: "Amas delivering a keynote on stage", tag: "KEYNOTE" },
    { src: "/images/Amas still on stage pink blazer and white pants.png", alt: "Amas speaking on stage in pink blazer and white pants", tag: "ON STAGE" },
    { src: "/images/Amas still on stage pink blazer.png", alt: "Amas speaking on stage in pink blazer", tag: "ON STAGE" },
    { src: "/images/Amas still on stage white shirt and jeans.png", alt: "Amas speaking on stage in white shirt and jeans", tag: "KEYNOTE" },
    { src: "/images/Amas still on stage white shirt and jeans2.png", alt: "Amas speaking on stage in white shirt and jeans close-up", tag: "ON STAGE" },
    { src: "/images/CBC interview still.png", alt: "Amas during CBC interview", tag: "CBC INTERVIEW" },
    { src: "/images/CBC interview stills.png", alt: "Amas in CBC interview still frame", tag: "CBC INTERVIEW" },
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
