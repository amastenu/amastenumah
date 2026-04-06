"use client";

import { useState } from "react";
import { talk } from "../content/talk";

const inputClass =
  "w-full rounded-lg border border-brand-charcoal/20 bg-white px-3 py-2.5 font-body text-[17px] text-brand-charcoal placeholder:text-brand-charcoal/50 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red";

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
      <div>
        <label className="sr-only" htmlFor="name">
          {formFields.namePlaceholder}
        </label>
        <input className={inputClass} id="name" name="name" type="text" autoComplete="name" placeholder={formFields.namePlaceholder} required />
      </div>
      <div>
        <label className="sr-only" htmlFor="org">
          {formFields.orgPlaceholder}
        </label>
        <input className={inputClass} id="org" name="org" type="text" autoComplete="organization" placeholder={formFields.orgPlaceholder} required />
      </div>
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

      {error ? <p className="font-ui text-sm text-brand-red">{error}</p> : null}

      <div className="pt-1">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-brand-red px-8 py-3 font-ui text-[13px] font-bold uppercase tracking-[0.08em] text-white shadow-sm transition hover:opacity-90 disabled:opacity-60"
        >
          {status === "submitting" ? talk.submittingLabel : formFields.submitLabel}
        </button>
      </div>
    </form>
  );
}
