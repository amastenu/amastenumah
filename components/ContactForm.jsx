"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { talk } from "../content/talk";

const inputClass =
  "w-full rounded-xl border border-brand-charcoal/20 bg-brand-light/55 px-4 py-3 font-body text-[17px] text-brand-charcoal placeholder:text-brand-charcoal/50 transition-all duration-300 ease-premium focus:border-brand-red focus:bg-white focus:shadow-[0_0_0_4px_rgba(211,47,47,0.12)] focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:placeholder:text-brand-charcoal/35";

export default function ContactForm() {
  const { formFields } = talk;
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setStatus("submitting");
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const payload = {
      name: fd.get("name"),
      org: fd.get("org"),
      eventType: fd.get("eventType"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Request failed");
      }
      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("idle");
      setError(talk.errorMessage);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-brand-charcoal/15 bg-white p-8 text-center shadow-sm">
        <p className="font-ui text-lg font-semibold text-brand-charcoal">{talk.successTitle}</p>
        <p className="mt-2 font-body text-[16px] text-brand-charcoal/80">{talk.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Reveal delayMs={0}>
        <div>
        <label className="sr-only" htmlFor="name">
          {formFields.namePlaceholder}
        </label>
        <input className={inputClass} id="name" name="name" type="text" autoComplete="name" placeholder={formFields.namePlaceholder} required />
        </div>
      </Reveal>
      <Reveal delayMs={80}>
        <div>
        <label className="sr-only" htmlFor="org">
          {formFields.orgPlaceholder}
        </label>
        <input className={inputClass} id="org" name="org" type="text" autoComplete="organization" placeholder={formFields.orgPlaceholder} required />
        </div>
      </Reveal>
      <Reveal delayMs={140}>
        <div>
        <label className="sr-only" htmlFor="eventType">
          {formFields.eventTypeLabel}
        </label>
        <select
          className={`${inputClass} appearance-none bg-white`}
          id="eventType"
          name="eventType"
          aria-label={formFields.eventTypeLabel}
          defaultValue=""
          required
        >
          <option value="" disabled>
            {formFields.eventTypePlaceholder}
          </option>
          {formFields.eventTypes.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        </div>
      </Reveal>
      <Reveal delayMs={200}>
        <div>
        <label className="sr-only" htmlFor="message">
          {formFields.messagePlaceholder}
        </label>
        <textarea
          className={`${inputClass} min-h-[140px] resize-y`}
          id="message"
          name="message"
          rows={5}
          placeholder={formFields.messagePlaceholder}
          required
        />
        </div>
      </Reveal>

      {error ? <p className="font-ui text-sm text-brand-red">{error}</p> : null}

      <Reveal delayMs={300}>
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full bg-brand-red px-8 py-3 font-ui text-[13px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.35)] transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-brand-red-dark hover:shadow-[0_14px_32px_-14px_rgba(211,47,47,0.48)] active:translate-y-0 active:scale-[0.98] disabled:opacity-60"
          >
            {status === "submitting" ? talk.submittingLabel : `${formFields.submitLabel} \u2192`}
          </button>
          <p className="mt-5 font-ui text-[12px] font-medium uppercase tracking-[0.15em] text-brand-charcoal/58">{talk.reassuranceText}</p>
          <p className="mt-2 font-ui text-[11px] font-semibold uppercase tracking-[0.13em] text-brand-charcoal/48">{talk.responseTimeText}</p>
        </div>
      </Reveal>
    </form>
  );
}
