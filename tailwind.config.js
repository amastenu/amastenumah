/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      transitionDuration: {
        400: "400ms",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        "card-lift":
          "0 20px 40px -10px rgb(0 0 0 / 0.2), 0 8px 16px -6px rgb(0 0 0 / 0.12)",
        "cta-glow": "0 8px 28px -6px rgb(0 0 0 / 0.22), 0 0 40px rgb(239 68 68 / 0.2)",
        "cta-glow-hover": "0 12px 36px -6px rgb(0 0 0 / 0.28), 0 0 52px rgb(239 68 68 / 0.3)",
      },
      colors: {
        "brand-red": "#D32F2F",
        "brand-red-dark": "#B71C1C",
        "brand-dark": "#1A1A1A",
        "brand-charcoal": "#2C2C2C",
        "brand-light": "#F5F5F5",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-crimson)", "serif"],
        ui: ["var(--font-montserrat)", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(1.5rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "word-reveal": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "headline-line-rise": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(0.35rem)" },
        },
        "hero-kenburns": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.1)" },
        },
        "hero-shell": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scroll-hint": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
        "scroll-bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "red-flicker": {
          "0%, 100%": { opacity: "1" },
          "25%": { opacity: "0.92" },
          "60%": { opacity: "0.98" },
        },
        "logo-marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "logo-fade-scale": {
          from: { opacity: "0", transform: "scale(0.92)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-up-slow": "fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "word-reveal": "word-reveal 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "headline-line-rise": "headline-line-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "float-soft": "float-soft 2.8s ease-in-out infinite",
        "hero-kenburns": "hero-kenburns 24s linear infinite alternate",
        "hero-shell": "hero-shell 1.15s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "scroll-hint": "scroll-hint 2.4s ease-in-out infinite",
        "scroll-bounce-soft": "scroll-bounce-soft 1.8s ease-in-out infinite",
        "red-flicker": "red-flicker 3.6s ease-in-out infinite",
        "logo-marquee": "logo-marquee 30s linear infinite",
        "logo-fade-scale": "logo-fade-scale 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};
