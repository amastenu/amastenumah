/**
 * Let's Talk — developer brief `content/talk.js`.
 * `seo`, `successTitle`, `successBody`, `errorMessage`, `submittingLabel` satisfy page spec (thank-you / errors) while keeping all copy in content.
 * `eventTypeLabel` / `eventTypePlaceholder`: accessible select (brief `formFields` lists `eventTypes` only).
 */

export const talk = {
  seo: {
    title: "Let's Talk — Amas Tenumah",
    description: "Reach out about keynotes, media, and programs.",
  },

  headline: "Let's Talk",
  subheadline: "Customer service isn't broken. It's working exactly as designed. Let's redesign what your audience rewards.",
  trustIndicators: "Featured on CBC, NPR, NBC, The Atlantic",
  featuredLogos: [
    { name: "CBC", file: "/images/cbc-logo.svg", href: "https://www.youtube.com/watch?v=CGrdMdCD18w" },
    { name: "NPR", file: "/images/npr-logo.webp", href: "https://www.npr.org/2023/03/15/1163733421/why-customer-service-ratings-are-getting-worse" },
    {
      name: "NBC",
      file: "/images/nbc-logo.webp",
      href: "https://www.nbcnews.com/nightly-news/video/consumer-frustration-grows-as-customer-service-becomes-more-automated-193128517587",
    },
    {
      name: "The Atlantic",
      file: "/images/The-Atlantic.png",
      href: "https://www.theatlantic.com/ideas/archive/2025/06/customer-service-sludge/683340/?gift=izJy9NoJOvuZ18zh7vlZDYDAzI9opU7tSxLTLYn2ntk&utm_source=copy-link&utm_medium=social&utm_campaign=share",
    },
  ],
  featuredLinkLabel: "Watch latest feature on CBC \u2192",
  featuredLinkHref: "https://www.youtube.com/watch?v=CGrdMdCD18w",
  moreCoverageHeading: "More Coverage",
  moreCoverageLinks: [
    { label: "CBC Article", href: "https://www.cbc.ca/news/marketplace/rogers-telus-bell-telecom-customer-service-9.7131890" },
    { label: "FOX", href: "https://www.fox5dc.com/video/fmc-2023mgu745sdu9ts" },
    { label: "Morning Blend Vegas", href: "https://www.youtube.com/watch?v=8kz20mUGLqw" },
    { label: "Fortune", href: "https://fortune.com/2024/02/02/bad-customer-service-breaking-trust/" },
    { label: "Fox Business", href: "https://www.foxbusiness.com/lifestyle/fast-food-dining-rooms-thing-of-the-past" },
    { label: "Next Avenue", href: "https://www.nextavenue.org/refund-runaround/" },
    { label: "OPB", href: "https://www.opb.org/article/2024/08/13/sick-of-customer-service-bots-and-subscription-headaches-there-s-a-plan-for-that/" },
    { label: "YourTango", href: "https://www.yourtango.com/self/elder-millennial-complains-lack-good-customer-service" },
    {
      label: "Mercury News",
      href: "https://www.mercurynews.com/2024/02/15/whos-behind-these-mysterious-deliveries-woodside-man-showered-with-products-he-didnt-order/",
    },
    {
      label: "Silicon Valley",
      href: "https://www.siliconvalley.com/2024/02/15/getting-packages-you-didnt-order-from-amazon-or-elsewhere-heres-how-to-deal-with-e-commerce-scams/",
    },
    { label: "Yahoo Finance", href: "https://finance.yahoo.com/news/customer-repair-trust-brand-instead-151637624.html" },
    { label: "NPR (Interview)", href: "https://www.npr.org/2023/03/15/1163723617/customer-service-satisfaction-survey-freakout-shortage-2022" },
    { label: "No Jitter", href: "https://www.nojitter.com/ai-automation/generative-ai-contact-center-today-and-tomorrow" },
    { label: "Teleflora (Archive)", href: "https://youtu.be/i7_noeLFNjY?si=AcHaf4L0bpy7Qzdn" },
  ],

  formFields: {
    namePlaceholder: "Your name",
    orgPlaceholder: "Your organization",
    eventTypeLabel: "Event type",
    eventTypePlaceholder: "Choose your event type",
    eventTypes: ["Conference", "Association Meeting", "Corporate Event", "Other"],
    messagePlaceholder: "Tell me about your event",
    submitLabel: "START THE CONVERSATION",
  },
  reassuranceText: "No sales pitch. Just clarity.",
  responseTimeText: "Typical response within 24–48 hours.",

  submissionEmail: "amas@amastenumah.com",

  successTitle: "Thank you!",
  successBody: "We'll get back to you shortly.",
  errorMessage: "Something went wrong. Please try again or email us directly.",
  submittingLabel: "Sending…",
};
