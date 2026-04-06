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
    linkedin: "https://linkedin.com/in/amas-tenumah",
    twitter: "https://twitter.com/amastenumah",
  },
  nav: [
    { label: "The Work", href: "/work" },
    { label: "HOLD", href: "/hold" },
    { label: "Let's Talk", href: "/talk" },
  ],

  metadata: {
    title: "Amas Tenumah — Customer Service Authority",
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
    src: "/images/amas-logo.webp",
    alt: "Amas Tenumah",
    width: 160,
    height: 56,
  },
  footer: {
    copyright: "© Amas Tenumah",
    followHeading: "Follow",
    pagesHeading: "Pages",
    socialLabels: {
      linkedin: "LinkedIn",
      twitter: "X (Twitter)",
    },
  },
  accessibility: {
    skipToContent: "Skip to content",
    menuNavLabel: "Primary navigation",
    menuToggle: "Open menu",
    menuClose: "Close menu",
  },
};
