"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { talk } from "../content/talk";

const inputClass =
  "w-full rounded-[10px] border border-white/10 bg-white/[0.05] px-4 py-3.5 font-body text-[17px] text-brand-light placeholder:text-brand-light/45 transition-all duration-300 ease-premium focus:border-[#ff3b3b] focus:bg-white/[0.08] focus:shadow-[0_0_0_2px_rgba(255,59,59,0.2)] focus:outline-none focus:placeholder:text-brand-light/35";

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
      <div className="rounded-[12px] border border-white/12 bg-white/[0.06] p-8 text-center shadow-[0_16px_48px_-24px_rgba(0,0,0,0.5)]">
        <p className="font-ui text-lg font-semibold text-white">{talk.successTitle}</p>
        <p className="mt-2 font-body text-[16px] text-brand-light/80">{talk.successBody}</p>
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
          <input
            className={inputClass}
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={formFields.namePlaceholder}
            required
          />
        </div>
      </Reveal>
      <Reveal delayMs={80}>
        <div>
          <label className="sr-only" htmlFor="org">
            {formFields.orgPlaceholder}
          </label>
          <input
            className={inputClass}
            id="org"
            name="org"
            type="text"
            autoComplete="organization"
            placeholder={formFields.orgPlaceholder}
            required
          />
        </div>
      </Reveal>
      <Reveal delayMs={140}>
        <div>
          <label className="sr-only" htmlFor="eventType">
            {formFields.eventTypeLabel}
          </label>
          <select
            className={`${inputClass} appearance-none bg-white/[0.05]`}
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
              <option key={opt} value={opt} className="bg-brand-charcoal text-brand-light">
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

      {error ? <p className="font-ui text-sm text-[#ff6b6b]">{error}</p> : null}

      <Reveal delayMs={300}>
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full bg-brand-red px-8 py-3.5 font-ui text-[13px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_10px_28px_-12px_rgba(211,47,47,0.45)] transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-brand-red-dark hover:shadow-[0_14px_36px_-12px_rgba(255,59,59,0.45),0_10px_30px_rgba(239,68,68,0.2)] active:translate-y-0 active:scale-[0.98] disabled:opacity-60"
          >
            {status === "submitting" ? talk.submittingLabel : `${formFields.submitLabel} \u2192`}
          </button>
          <p className="mt-5 font-ui text-[12px] font-medium uppercase tracking-[0.15em] text-brand-light/55">{talk.reassuranceText}</p>
          <p className="mt-2 font-ui text-[11px] font-semibold uppercase tracking-[0.13em] text-brand-light/45">{talk.responseTimeText}</p>
        </div>
      </Reveal>
    </form>
  );
}
