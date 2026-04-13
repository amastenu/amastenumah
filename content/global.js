/**
 * Site name, nav, footer, social — developer brief `content/global.js`.
 * `logo` and `footer` are required for Nav/Footer (folder brief: nav + footer + social).
 * `metadata` mirrors brief `app/layout.jsx` SEO block so copy is AI-editable.
 */

export const site = {
  name: "Amas Tenumah",
  tagline: "Customer service isn't broken. It's working exactly as designed.",
  email: "amas@amastenumah.com",
  social: {
    linkedin: "https://www.linkedin.com/in/amastenumah/",
    x: "https://x.com/amastenumah",
    instagram: "https://www.instagram.com/amastenumah/",
    tiktok: "https://www.tiktok.com/@amastenumah0",
  },
  /** Shown under each platform name in the footer (The Work and every page). */
  socialHandles: {
    linkedin: "/in/amastenumah",
    x: "@amastenumah",
    instagram: "@amastenumah",
    tiktok: "@amastenumah0",
  },
  nav: [
    { label: "The Work", href: "/work" },
    { label: "HOLD", href: "/hold" },
    { label: "Let's Talk", href: "/talk" },
  ],
  loader: {
    wordmark: {
      lead: "A",
      left: "MAS",
      right: "TENUMAH",
    },
    subtitle: "Customer service authority",
  },

  metadata: {
    title: "Amas Tenumah",
    description:
      "Customer service isn't broken. It's working exactly as designed. Amas Tenumah is the keynote speaker and author who explains why.",
    openGraph: {
      title: "Amas Tenumah",
      description: "Customer service isn't broken. It's working exactly as designed.",
      images: ["/og-image.jpg"],
      url: "https://amastenumah.com",
    },
    twitter: {
      card: "summary_large_image",
      images: ["/og-image.jpg"],
    },
  },

  logo: {
    src: "/images/header-logo.svg",
    alt: "Amas Tenumah",
    width: 160,
    height: 56,
  },
  footer: {
    logo: {
      src: "/images/footer-logo.svg",
      alt: "Amas Tenumah",
      width: 160,
      height: 56,
    },
    copyright: "© Amas Tenumah",
    followHeading: "Follow",
    pagesHeading: "Pages",
    socialLabels: {
      linkedin: "LinkedIn",
      x: "X",
      instagram: "Instagram",
      tiktok: "TikTok",
    },
  },
  accessibility: {
    skipToContent: "Skip to content",
    menuNavLabel: "Primary navigation",
    menuToggle: "Open menu",
    menuClose: "Close menu",
  },
};
