import ContactForm from "../../components/ContactForm";
import { talk } from "../../content/talk";

export const metadata = {
  title: talk.seo.title,
  description: talk.seo.description,
};

export default function Page() {
  return (
    <main id="content" className="min-h-screen bg-brand-light pb-24 pt-28">
      <div className="mx-auto max-w-[560px] px-5 md:px-8">
        <h1 className="text-center font-display text-[clamp(2rem,4vw,2.75rem)] uppercase tracking-wide text-brand-charcoal">{talk.headline}</h1>
        <p className="mt-4 text-center font-body text-[18px] leading-relaxed text-brand-charcoal">{talk.subheadline}</p>
        <div className="mt-12 rounded-xl border border-brand-charcoal/15 bg-white p-6 shadow-sm md:p-10">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
