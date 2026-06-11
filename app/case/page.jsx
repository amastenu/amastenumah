'use client';
import { useState } from 'react';

export default function CasePage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', whatTheyDid: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch('/api/case', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main style={{ background: '#111111', minHeight: '100vh', color: '#fff', fontFamily: "'Crimson Text', Georgia, serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Courier+Prime:wght@400;700&display=swap');`}</style>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 28px 120px' }}>

        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#D32F2F', marginBottom: '16px' }}>
            The Customer Court
          </div>
          <div style={{ fontSize: '64px', color: '#D32F2F', display: 'inline-block', transform: 'rotate(-12deg)', marginBottom: '16px' }}>⚖</div>
          <h1 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 'clamp(56px, 10vw, 96px)', lineHeight: '0.92', letterSpacing: '0.02em', margin: '0 0 24px', color: '#fff' }}>
            STATE YOUR CASE
          </h1>
          <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: '14px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D32F2F', marginBottom: '20px' }}>
            No jurisdiction. No mercy. Just the truth on the record.
          </p>
          <p style={{ fontSize: '20px', lineHeight: '1.6', color: '#CFCABF', maxWidth: '580px' }}>
            Every week on the show, we try one company for crimes against the customer. Submit your evidence below. The worst offenders go to trial.
          </p>
        </div>

        {submitted ? (
          <div style={{ borderLeft: '4px solid #D32F2F', paddingLeft: '24px', margin: '48px 0' }}>
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '32px', color: '#fff', marginBottom: '12px' }}>YOUR CASE HAS BEEN FILED.</p>
            <p style={{ fontSize: '20px', color: '#CFCABF', fontStyle: 'italic' }}>We cannot guarantee justice. We can guarantee it will be heard.</p>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', padding: '40px', borderRadius: '2px' }}>

              {[
                { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Your name' },
                { label: 'Your Email', name: 'email', type: 'email', placeholder: 'Your email' },
                { label: 'The Company on Trial', name: 'company', type: 'text', placeholder: 'Who did this to you?' },
              ].map((field) => (
                <div key={field.name} style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontFamily: "'Courier Prime', monospace", fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9b958a', marginBottom: '8px' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handle}
                    required
                    style={{ width: '100%', background: '#111', border: '1px solid #333', color: '#fff', padding: '14px 16px', fontSize: '18px', fontFamily: "'Crimson Text', serif", outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
              ))}

              <div style={{ marginBottom: '32px' }}>
                <label style={{ display: 'block', fontFamily: "'Courier Prime', monospace", fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9b958a', marginBottom: '8px' }}>
                  What They Did
                </label>
                <textarea
                  name="whatTheyDid"
                  placeholder="Describe the crime. Be specific. Dates, names, what you were told, what actually happened."
                  value={form.whatTheyDid}
                  onChange={handle}
                  required
                  rows={6}
                  style={{ width: '100%', background: '#111', border: '1px solid #333', color: '#fff', padding: '14px 16px', fontSize: '18px', fontFamily: "'Crimson Text', serif", outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{ width: '100%', background: '#D32F2F', color: '#fff', border: 'none', padding: '18px', fontFamily: "'Bebas Neue', sans-serif", fontSize: '22px', letterSpacing: '0.08em', cursor: 'pointer' }}
              >
                {loading ? 'FILING...' : 'SUBMIT YOUR EVIDENCE'}
              </button>
            </div>

            <p style={{ marginTop: '20px', fontFamily: "'Courier Prime', monospace", fontSize: '13px', color: '#666', textAlign: 'center' }}>
              Can't type it out? Email the details plus any screenshots or recordings to{' '}
              <a href="mailto:amas@amastenumah.com" style={{ color: '#D32F2F' }}>amas@amastenumah.com</a>
            </p>
          </form>
        )}
      </div>
    </main>
  );
}
