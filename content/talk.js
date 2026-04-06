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
  subheadline: "One sentence about who this is for.",

  formFields: {
    namePlaceholder: "Your name",
    orgPlaceholder: "Your organization",
    eventTypeLabel: "Event type",
    eventTypePlaceholder: "Select one",
    eventTypes: ["Conference", "Association Meeting", "Corporate Event", "Other"],
    messagePlaceholder: "Tell me about your event",
    submitLabel: "Send It",
  },

  submissionEmail: "amas@amastenumah.com",

  successTitle: "Thank you!",
  successBody: "We'll get back to you shortly.",
  errorMessage: "Something went wrong. Please try again or email us directly.",
  submittingLabel: "Sending…",
};
