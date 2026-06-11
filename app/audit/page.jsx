export default function AuditPage() {
  return (
    <main style={{ background: '#fff', color: '#111111', fontFamily: "'Crimson Text', Georgia, serif", fontSize: '20px', lineHeight: '1.55' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Courier+Prime:wght@400;700&display=swap');
        .audit-wrap { max-width: 880px; margin: 0 auto; padding: 0 28px; }
        .audit-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
        .audit-probes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 56px; }
        .audit-tiers { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; background: #fff; margin-top: 38px; border: 2px solid #fff; }
        .audit-bandscale { display: flex; max-width: 560px; margin: 30px auto 0; border: 1px solid #E2DFDA; }
        .audit-eyebrow { font-family: 'Courier Prime', monospace; font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase; color: #D32F2F; margin-bottom: 16px; }
        .audit-h2 { font-family: 'Bebas Neue', Impact, sans-serif; font-size: clamp(44px, 7vw, 76px); line-height: 0.95; letter-spacing: 0.02em; margin: 0 0 28px; }
        .audit-lede { font-size: 22px; line-height: 1.55; color: #2a2a2a; margin: 0 0 20px; }
        .audit-cta { display: inline-block; background: #111111; color: #fff; padding: 18px 32px; font-family: 'Bebas Neue', sans-serif; font-size: 22px; letter-spacing: 0.08em; text-decoration: none; border: 2px solid #111111; }
        .audit-cta-red { background: #fff; color: #D32F2F; border: 2px solid #fff; }
        @media(max-width:760px) {
          .audit-cols { grid-template-columns: 1fr; gap: 32px; }
          .audit-probes { grid-template-columns: 1fr; }
          .audit-tiers { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <header style={{ padding: '96px 0 56px', borderBottom: '3px solid #111111' }}>
        <div className="audit-wrap" style={{ textAlign: 'center' }}>
          <div className="audit-eyebrow">The Friction Audit</div>
          <h1 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 'clamp(64px, 11vw, 132px)', lineHeight: '0.9', letterSpacing: '0.01em', margin: '0 0 28px', color: '#111111' }}>
            There are rats in your <span style={{ color: '#D32F2F' }}>house.</span>
          </h1>
          <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: '14px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#111111', marginBottom: '20px' }}>
            You can smell them. You can't find them. We find them.
          </p>
          <p style={{ fontSize: '22px', lineHeight: '1.6', color: '#2a2a2a', maxWidth: '640px', margin: '0 auto' }}>
            A diagnostic for companies who suspect their customer experience is rotting from the inside — and want to know exactly where, exactly how bad, and exactly what to do.
          </p>
        </div>
      </header>

      {/* ACT I — Your house today */}
      <section style={{ padding: '96px 0', background: '#fff' }}>
        <div className="audit-wrap">
          <div className="audit-eyebrow" style={{ textAlign: 'center' }}>Act I — The Diagnosis</div>
          <h2 className="audit-h2" style={{ textAlign: 'center' }}>YOUR HOUSE TODAY</h2>

          <div className="audit-cols" style={{ marginTop: '56px' }}>
            <div>
              <svg viewBox="0 0 400 380" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }} aria-label="A house with sludge in the foundation and rats">
                <rect x="0" y="0" width="400" height="380" fill="#fff" />
                {/* roof */}
                <polygon points="60,170 200,60 340,170" fill="none" stroke="#111111" strokeWidth="3" />
                {/* body */}
                <rect x="80" y="170" width="240" height="160" fill="none" stroke="#111111" strokeWidth="3" />
                {/* door */}
                <rect x="180" y="240" width="44" height="90" fill="none" stroke="#111111" strokeWidth="3" />
                <circle cx="216" cy="285" r="2" fill="#111111" />
                {/* windows */}
                <rect x="105" y="195" width="50" height="40" fill="none" stroke="#111111" strokeWidth="3" />
                <line x1="130" y1="195" x2="130" y2="235" stroke="#111111" strokeWidth="2" />
                <line x1="105" y1="215" x2="155" y2="215" stroke="#111111" strokeWidth="2" />
                <rect x="245" y="195" width="50" height="40" fill="none" stroke="#111111" strokeWidth="3" />
                <line x1="270" y1="195" x2="270" y2="235" stroke="#111111" strokeWidth="2" />
                <line x1="245" y1="215" x2="295" y2="215" stroke="#111111" strokeWidth="2" />
                {/* sludge in foundation */}
                <path d="M80 330 Q 100 305, 130 320 T 200 318 T 270 322 T 320 330 L 320 360 L 80 360 Z" fill="#D32F2F" opacity="0.85" />
                <path d="M80 340 Q 120 320, 160 335 T 240 335 T 320 340 L 320 360 L 80 360 Z" fill="#111111" opacity="0.85" />
                {/* rats */}
                <g transform="translate(120,300)">
                  <ellipse cx="0" cy="0" rx="14" ry="7" fill="#111111" />
                  <circle cx="13" cy="-2" r="5" fill="#111111" />
                  <circle cx="15" cy="-4" r="1.2" fill="#fff" />
                  <path d="M -13 2 Q -22 6, -28 0" stroke="#111111" strokeWidth="2" fill="none" />
                </g>
                <g transform="translate(260,310)">
                  <ellipse cx="0" cy="0" rx="12" ry="6" fill="#111111" />
                  <circle cx="11" cy="-2" r="4.5" fill="#111111" />
                  <circle cx="13" cy="-3" r="1" fill="#fff" />
                  <path d="M -11 2 Q -19 5, -24 0" stroke="#111111" strokeWidth="2" fill="none" />
                </g>
                {/* labels */}
                <text x="200" y="120" textAnchor="middle" fontFamily="Courier Prime, monospace" fontSize="11" fill="#111111" letterSpacing="2">SURFACE</text>
                <text x="200" y="260" textAnchor="middle" fontFamily="Courier Prime, monospace" fontSize="11" fill="#111111" letterSpacing="2">STRUCTURAL</text>
                <text x="200" y="352" textAnchor="middle" fontFamily="Courier Prime, monospace" fontSize="11" fill="#fff" letterSpacing="2">CULTURAL</text>
              </svg>
            </div>

            <div>
              <p className="audit-lede">
                From the curb, the house looks fine. The paint is fresh. The lights are on. The brand deck is gorgeous.
              </p>
              <p className="audit-lede">
                But the customer keeps complaining about the smell. Renewals are softening. NPS is drifting. The team has theories. Nobody has proof.
              </p>
              <p className="audit-lede">
                We inspect three layers: the <strong style={{ color: '#111111' }}>Surface</strong> — what the customer touches; the <strong style={{ color: '#111111' }}>Structural</strong> — the policies, scripts, and systems behind it; and the <strong style={{ color: '#111111' }}>Cultural</strong> — what your people actually believe about the customer when no one is watching.
              </p>
              <p className="audit-lede">
                The rats are almost never on the surface. That is the point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACT II — We follow the sludge down */}
      <section style={{ background: '#111111', color: '#fff', padding: '96px 0' }}>
        <div className="audit-wrap">
          <div className="audit-eyebrow" style={{ textAlign: 'center' }}>Act II — The Investigation</div>
          <h2 className="audit-h2" style={{ textAlign: 'center', color: '#fff' }}>
            WE FOLLOW THE <span style={{ color: '#D32F2F' }}>SLUDGE</span> DOWN
          </h2>
          <p style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto', color: '#CFCABF', fontSize: '20px' }}>
            Three probes. Mystery-shopper journeys, policy and script forensics, and frontline interviews. Each layer scored on a 0–100 engineered scale, with severity called by name.
          </p>

          <div className="audit-probes">
            {[
              {
                tag: 'Probe 01',
                title: 'Surface',
                severity: 'Severity: Moderate',
                score: 68,
                blurb: 'We become the customer. Web, phone, chat, email, in-person. We log every friction, every dead end, every contradiction between what you promise and what you actually deliver.',
              },
              {
                tag: 'Probe 02',
                title: 'Structural',
                severity: 'Severity: Severe',
                score: 41,
                blurb: 'We read the policies, the call scripts, the escalation rules, the refund matrix, the CRM workflows. We find the places where the design of the system forces your people to fail the customer.',
              },
              {
                tag: 'Probe 03',
                title: 'Cultural',
                severity: 'Severity: Critical',
                score: 29,
                blurb: 'We talk to your frontline. Off the record. We learn what they actually believe about the customer, about leadership, about whether anyone upstairs would back them if they did the right thing.',
              },
            ].map((p) => (
              <div key={p.tag} style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', padding: '32px' }}>
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#D32F2F', marginBottom: '12px' }}>
                  {p.tag}
                </div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', lineHeight: '1', color: '#fff', marginBottom: '6px' }}>
                  {p.title.toUpperCase()}
                </div>
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D32F2F', marginBottom: '20px' }}>
                  {p.severity}
                </div>
                <p style={{ fontSize: '17px', lineHeight: '1.55', color: '#CFCABF', margin: '0 0 24px' }}>{p.blurb}</p>

                <div style={{ height: '8px', background: '#2a2a2a', position: 'relative', marginBottom: '10px' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: `${p.score}%`, background: '#D32F2F' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Courier Prime', monospace", fontSize: '11px', letterSpacing: '0.14em', color: '#9b958a' }}>
                  <span>SCORE</span>
                  <span style={{ color: '#fff' }}>{p.score} / 100</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPOSITE SCORE */}
      <section style={{ background: '#F5F2EC', padding: '96px 0', borderTop: '3px solid #111111', borderBottom: '3px solid #111111' }}>
        <div className="audit-wrap" style={{ textAlign: 'center' }}>
          <div className="audit-eyebrow">Composite Score</div>
          <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#111111', marginBottom: '24px' }}>
            The Friction Index — one number, three layers, no rounding.
          </p>
          <div style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 'clamp(180px, 28vw, 320px)', color: '#D32F2F', lineHeight: '0.85', letterSpacing: '0.01em' }}>
            74
          </div>
          <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: '13px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#111111', marginTop: '8px' }}>
            Sample report. Your number will be different.
          </p>

          <div className="audit-bandscale">
            {[
              { label: 'CRITICAL', range: '0–39', color: '#D32F2F' },
              { label: 'SEVERE', range: '40–59', color: '#E58A2C' },
              { label: 'MODERATE', range: '60–74', color: '#C9A227' },
              { label: 'STABLE', range: '75–89', color: '#6B8E23' },
              { label: 'CLEAN', range: '90–100', color: '#2E7D32' },
            ].map((b) => (
              <div key={b.label} style={{ flex: 1, padding: '14px 6px', textAlign: 'center', background: '#fff', borderLeft: '1px solid #E2DFDA' }}>
                <div style={{ width: '14px', height: '14px', background: b.color, margin: '0 auto 8px', borderRadius: '50%' }} />
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: '10px', letterSpacing: '0.16em', color: '#111111' }}>{b.label}</div>
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: '10px', color: '#666', marginTop: '2px' }}>{b.range}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACT III — The house, rat-proofed */}
      <section style={{ padding: '96px 0', background: '#fff' }}>
        <div className="audit-wrap">
          <div className="audit-eyebrow" style={{ textAlign: 'center' }}>Act III — The Prescription</div>
          <h2 className="audit-h2" style={{ textAlign: 'center' }}>THE HOUSE, RAT-PROOFED</h2>

          <div className="audit-cols" style={{ marginTop: '56px' }}>
            <div>
              <p className="audit-lede">
                You don't get a 90-page PDF. You get a verdict, a map, and a sequence.
              </p>
              <p className="audit-lede">
                <strong style={{ color: '#111111' }}>The verdict:</strong> your Friction Index, the severity of each layer, and the three rats most expensive to keep feeding.
              </p>
              <p className="audit-lede">
                <strong style={{ color: '#111111' }}>The map:</strong> every probe finding traced to the specific policy, script, system, or belief that caused it. No vague "improve the experience." Named, located, and ranked.
              </p>
              <p className="audit-lede">
                <strong style={{ color: '#111111' }}>The sequence:</strong> what to fix in the first 30 days, the first 90, and the first year. In that order, because order matters.
              </p>
              <p className="audit-lede">
                You can hand this to an internal team. You can hand it to a board. You can hand it to us.
              </p>
            </div>

            <div>
              <svg viewBox="0 0 400 380" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }} aria-label="A clean house, rat-proofed">
                <rect x="0" y="0" width="400" height="380" fill="#fff" />
                <polygon points="60,170 200,60 340,170" fill="none" stroke="#111111" strokeWidth="3" />
                <rect x="80" y="170" width="240" height="160" fill="none" stroke="#111111" strokeWidth="3" />
                <rect x="180" y="240" width="44" height="90" fill="none" stroke="#111111" strokeWidth="3" />
                <circle cx="216" cy="285" r="2" fill="#111111" />
                <rect x="105" y="195" width="50" height="40" fill="none" stroke="#111111" strokeWidth="3" />
                <line x1="130" y1="195" x2="130" y2="235" stroke="#111111" strokeWidth="2" />
                <line x1="105" y1="215" x2="155" y2="215" stroke="#111111" strokeWidth="2" />
                <rect x="245" y="195" width="50" height="40" fill="none" stroke="#111111" strokeWidth="3" />
                <line x1="270" y1="195" x2="270" y2="235" stroke="#111111" strokeWidth="2" />
                <line x1="245" y1="215" x2="295" y2="215" stroke="#111111" strokeWidth="2" />
                {/* clean foundation */}
                <rect x="80" y="328" width="240" height="2" fill="#111111" />
                {/* seal stamp */}
                <g transform="translate(330,310)">
                  <circle cx="0" cy="0" r="28" fill="none" stroke="#D32F2F" strokeWidth="2" />
                  <circle cx="0" cy="0" r="22" fill="none" stroke="#D32F2F" strokeWidth="1" />
                  <text x="0" y="-3" textAnchor="middle" fontFamily="Bebas Neue, sans-serif" fontSize="12" fill="#D32F2F">SEALED</text>
                  <text x="0" y="9" textAnchor="middle" fontFamily="Courier Prime, monospace" fontSize="6" fill="#D32F2F" letterSpacing="1">NO RATS</text>
                </g>
                {/* sun */}
                <circle cx="60" cy="60" r="18" fill="none" stroke="#D32F2F" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* RED CLOSE */}
      <section style={{ background: '#D32F2F', color: '#fff', padding: '96px 0 120px' }}>
        <div className="audit-wrap" style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#fff', marginBottom: '16px', opacity: 0.85 }}>
            The Guarantee
          </div>
          <h2 className="audit-h2" style={{ color: '#fff' }}>
            IF WE DON'T FIND THE RATS, YOU DON'T PAY.
          </h2>
          <p style={{ fontSize: '22px', lineHeight: '1.55', color: '#fff', maxWidth: '640px', margin: '0 auto 16px', opacity: 0.95 }}>
            Specific findings. Named layers. A sequenced prescription. If the report doesn't tell you something you didn't already know — and didn't already have evidence for — the engagement is free.
          </p>
          <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: '13px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#fff', opacity: 0.85, margin: '0 0 12px' }}>
            We have never invoked this clause. We expect we never will.
          </p>

          <div className="audit-tiers">
            {[
              {
                name: 'The Audit',
                price: '$15K',
                cadence: 'One-time',
                bullets: [
                  'Three-probe diagnostic',
                  'Friction Index + per-layer scoring',
                  'Findings traced to root cause',
                  '30 / 90 / 365-day sequence',
                  'One readout with leadership',
                ],
              },
              {
                name: 'Audit + Vision',
                price: '$25K',
                cadence: 'One-time',
                featured: true,
                bullets: [
                  'Everything in The Audit',
                  'A written customer doctrine — what your company believes about the customer, in plain English',
                  'A first-year transformation roadmap',
                  'Two readouts: leadership and board / exec team',
                ],
              },
              {
                name: 'Standing Audit',
                price: 'From $5K/mo',
                cadence: 'Retainer',
                bullets: [
                  'Quarterly re-probe of all three layers',
                  'Trending Friction Index',
                  'Drift alerts when a layer slips a band',
                  'Direct line for executive questions',
                ],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: tier.featured ? '#111111' : '#fff',
                  color: tier.featured ? '#fff' : '#111111',
                  padding: '36px 28px',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#D32F2F', marginBottom: '10px' }}>
                  {tier.cadence}
                </div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '38px', lineHeight: '1', marginBottom: '8px' }}>
                  {tier.name.toUpperCase()}
                </div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '52px', lineHeight: '1', color: tier.featured ? '#fff' : '#D32F2F', marginBottom: '20px' }}>
                  {tier.price}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 8px', flex: 1 }}>
                  {tier.bullets.map((b) => (
                    <li key={b} style={{ fontSize: '16px', lineHeight: '1.5', padding: '8px 0', borderTop: `1px solid ${tier.featured ? '#2a2a2a' : '#E2DFDA'}` }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '56px' }}>
            <a
              href="/talk"
              className="audit-cta audit-cta-red"
              style={{ background: '#fff', color: '#D32F2F', border: '2px solid #fff', display: 'inline-block', padding: '20px 40px', fontFamily: "'Bebas Neue', sans-serif", fontSize: '26px', letterSpacing: '0.1em', textDecoration: 'none' }}
            >
              BOOK THE AUDIT
            </a>
            <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', opacity: 0.85, marginTop: '20px' }}>
              A short conversation. No deck. No pitch. We decide together whether your house has rats.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
