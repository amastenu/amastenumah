/**
 * Home page (/) — developer brief `content/home.js`.
 * `fallbackImage` is required by page spec §1 (not repeated in brief snippet).
 * `bio` photo keys are required by page spec §4 (brief snippet shows paragraphs only).
 */

export const home = {
  hero: {
    videoFile: "/videos/hero-reel.mp4",
    fallbackImage: "/images/hero-fallback.jpg",
    headline: "CUSTOMER SERVICE ISN'T BROKEN.",
    subheadline: "IT'S WORKING EXACTLY AS DESIGNED.",
    subtext: "The question is: designed for whom?",
  },

  accessibility: {
    heroVideoLabel: "Hero reel",
    scrollToIndictmentLabel: "Scroll to content",
  },

  indictment: {
    /**
     * Each entry: plain string OR { before, accent, after? } — accent renders in brand-red.
     */
    lines: [
      "Your CFO isn't sabotaging your customer service.",
      { before: "He's optimizing it — ", accent: "for the wrong outcome", after: "" },
      "And he has 30 years of data telling him he's right.",
    ],
    highlightWords: ["CFO", "customer service", "30 years of data", "wrong outcome"],
    redLine: "This is the insight every customer service consultant is afraid to say.",
  },

  /* Logos: flat files under /public/images/ — paths must match these filenames */
  mediaLogos: [
    { name: "CBC", file: "/images/cbc-logo.svg", href: "https://www.youtube.com/watch?v=CGrdMdCD18w" },
    { name: "NPR", file: "/images/npr-logo.webp", href: "https://www.npr.org/2023/03/15/1163733421/why-customer-service-ratings-are-getting-worse" },
    {
      name: "NBC News",
      file: "/images/nbc-logo.webp",
      href: "https://www.nbcnews.com/nightly-news/video/consumer-frustration-grows-as-customer-service-becomes-more-automated-193128517587",
    },
    {
      name: "The Atlantic",
      file: "/images/The-Atlantic.png",
      href: "https://www.theatlantic.com/ideas/archive/2025/06/customer-service-sludge/683340/?gift=izJy9NoJOvuZ18zh7vlZDYDAzI9opU7tSxLTLYn2ntk&utm_source=copy-link&utm_medium=social&utm_campaign=share",
    },
    { name: "Fox", file: "/images/fox.webp", href: "https://www.fox5dc.com/video/fmc-2023mgu745sdu9ts" },
    { name: "Fox Business", file: "/images/fox-business-logo.webp", href: "https://www.foxbusiness.com/lifestyle/fast-food-dining-rooms-thing-of-the-past" },
    { name: "Next Avenue", file: "/images/next-avenue-logo.webp", href: "https://www.nextavenue.org/refund-runaround/" },
  ],

  statBar: "25 years inside the machine. 4 books. One thesis.",

  testimonialsHeading: "Testimonials",

  bio: {
    eyebrow: "THE CONFESSION",
    paragraphs: [
      "I started as a service worker. Became a service executive. Then a consultant hired by the companies I used to criticize.",
      "I built the phone systems designed to keep you from talking to a human. I know what the brief said. It wasn't \"help the customer.\" It was \"reduce handle time.\"",
      "I've spent 25 years watching this industry lie to itself. Four books. Hundreds of stages. Dozens of countries. And one conclusion that hasn't changed:",
      "Bad customer service is not an accident. It's a business model.",
      "My name is Amas Tenumah. I'm the person you call when you're ready to stop pretending.",
    ],
    photoFile: "/images/amas-about-sch-pic.webp",
    photoWidth: 560,
    photoHeight: 640,
    photoAlt: "Amas Tenumah",
  },

  keynote: {
    title: "The Keynote",
    subtitle: "Designed to Fail: The True Economics of Customer Service",
    description:
      "A high-impact program for leaders who are tired of cosmetic fixes. Truth, story, and next-week actions your audience can use.",
    cta: { label: "Book This Talk", href: "/talk" },
  },

  testimonials: [
    {
      quote:
        "An inspiring speaker and hands-on consultant, Amas Tenumah knows how to empower and engage his audience. He brings a refreshing point of view to the table at every engagement. Highly recommended!",
      name: "Scott Robins",
      title: "Partner, Heidrick & Struggles",
    },
    {
      quote: "Amas' presentation really changed our trajectory, our ROI was 10X",
      name: "Jason Trout",
      title: "CEO, BoldRamp",
    },
    {
      quote: "He shows up to events with crazy ideas that challenge us to think in new and creative ways.",
      name: "David Hadabos",
      title: "CEO, CCNG",
    },
  ],

  finalCta: {
    label: "Let's Talk",
    href: "/talk",
  },
};
