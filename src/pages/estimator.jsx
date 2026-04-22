import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import C from '../lib/colors';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://headhunters.co.uk/#org',
      name: 'headhunters.co.uk',
      url: 'https://headhunters.co.uk',
      description: "The UK's leading authority on executive search and headhunting — guides, tools, and resources for businesses making senior hires.",
      sameAs: ['https://elliotmarsh.com', 'https://executiveheadhunters.co.uk'],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://headhunters.co.uk/estimator/',
      name: 'Executive Search Fee Estimator',
      url: 'https://headhunters.co.uk/estimator/',
      publisher: { '@id': 'https://headhunters.co.uk/#org' },
    },
  ],
};

const ROLES = [
  { label: 'CEO / MD', tier: 3 },
  { label: 'CFO / FD', tier: 3 },
  { label: 'COO / Operations Director', tier: 3 },
  { label: 'CTO / Technology Director', tier: 3 },
  { label: 'CMO / Marketing Director', tier: 3 },
  { label: 'CHRO / HR Director', tier: 3 },
  { label: 'CRO / Revenue Director', tier: 3 },
  { label: 'CPO / Product Director', tier: 3 },
  { label: 'Sales Director', tier: 2 },
  { label: 'Divisional / BU Director', tier: 2 },
  { label: 'Board NED', tier: 2 },
  { label: 'General Counsel', tier: 2 },
  { label: 'Other Senior Role', tier: 1 },
];

const SECTORS = [
  'Financial Services',
  'Technology & Digital',
  'Healthcare & Life Sciences',
  'Private Equity & VC',
  'Manufacturing & Engineering',
  'Consumer & Retail',
  'Professional Services',
  'Property & Construction',
  'Energy & Infrastructure',
  'Media & Communications',
  'Education & Public Sector',
  'Not-for-Profit',
];

const URGENCY = [
  { label: 'Critical — needed within 0–4 weeks', mult: 1.1, timeline: '8–10 weeks' },
  { label: 'Important — starting in 1–3 months', mult: 1.0, timeline: '10–14 weeks' },
  { label: 'Planning ahead — 3–6 months', mult: 0.95, timeline: '10–16 weeks' },
  { label: 'Exploratory — no fixed timeline', mult: 0.9, timeline: '12–18 weeks' },
];

const SCOPE = [
  { label: 'UK only', mult: 1.0 },
  { label: 'UK + Europe', mult: 1.08 },
  { label: 'International', mult: 1.15 },
  { label: 'Not sure yet', mult: 1.0 },
];

const TOTAL_STEPS = 7;

function fmt(n) {
  return '£' + Math.round(n / 1000) * 1000 >= 1000
    ? '£' + new Intl.NumberFormat('en-GB').format(Math.round(n / 1000) * 1000)
    : '£' + n;
}

function fmtSalary(n) {
  if (n >= 500000) return '£500,000+';
  return '£' + new Intl.NumberFormat('en-GB').format(n);
}

export default function EstimatorPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState(null);
  const [sector, setSector] = useState(null);
  const [salary, setSalary] = useState(180000);
  const [urgency, setUrgency] = useState(null);
  const [scope, setScope] = useState(null);

  function goBack() {
    setStep(s => Math.max(1, s - 1));
  }

  function selectRole(r) {
    setRole(r);
    setTimeout(() => setStep(2), 180);
  }

  function selectSector(s) {
    setSector(s);
    setTimeout(() => setStep(3), 180);
  }

  function selectUrgency(u) {
    setUrgency(u);
    setTimeout(() => setStep(5), 180);
  }

  function selectScope(s) {
    setScope(s);
    setTimeout(() => setStep(6), 180);
  }

  const progress = Math.round(((step - 1) / (TOTAL_STEPS - 1)) * 100);

  const baseRate = role ? (role.tier === 3 ? 0.30 : role.tier === 2 ? 0.28 : 0.25) : 0.28;
  const baseFee = salary * baseRate;
  const urgencyMult = urgency ? urgency.mult : 1.0;
  const scopeMult = scope ? scope.mult : 1.0;
  const midFee = baseFee * urgencyMult * scopeMult;
  const lowFee = midFee * 0.85;
  const highFee = midFee * 1.15;
  const badHire3x = salary * 3;
  const badHire5x = salary * 5;

  return (
    <Layout
      title="Executive Search Fee Estimator"
      description="Estimate the cost of a retained executive search in the UK — personalised to your role, sector, salary, and timeline. Instant result, no registration required."
      canonical="https://headhunters.co.uk/estimator/"
      schema={SCHEMA}
    >
      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`, padding: '48px 24px 44px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.gold, marginBottom: 12 }}>Fee Estimator</p>
          <h1 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.15 }}>
            How Much Will My Search Cost?
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.68)', lineHeight: 1.6 }}>
            7 steps · Instant estimate · No registration required
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 660, margin: '0 auto', padding: '40px 24px 60px' }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: 12, color: C.tl, fontWeight: 600 }}>
              {step < TOTAL_STEPS ? `Step ${step} of ${TOTAL_STEPS - 1}` : 'Your Estimate'}
            </span>
            <span style={{ fontSize: 12, color: C.tl, fontWeight: 600 }}>{progress}%</span>
          </div>
          <div style={{ height: 6, background: C.bl, borderRadius: 99, overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${C.gold}, ${C.accent})`,
              borderRadius: 99,
              transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1)',
            }} />
          </div>
        </div>

        {step === 1 && (
          <StepCard title="What role are you hiring for?">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {ROLES.map((r, i) => (
                <OptionBtn key={i} label={r.label} onClick={() => selectRole(r)} badge={r.tier === 3 ? 'C-Suite' : r.tier === 2 ? 'Director' : 'Senior'} />
              ))}
            </div>
          </StepCard>
        )}

        {step === 2 && (
          <StepCard title="Which sector?" onBack={goBack}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {SECTORS.map((s, i) => (
                <button
                  key={i}
                  onClick={() => selectSector(s)}
                  style={{
                    textAlign: 'left',
                    background: C.bl,
                    color: C.tx,
                    border: `1.5px solid ${C.bd}`,
                    borderRadius: 8,
                    padding: '11px 14px',
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    lineHeight: 1.35,
                    transition: 'background 0.12s, border-color 0.12s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${C.accent}10`; e.currentTarget.style.borderColor = C.accent; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.bl; e.currentTarget.style.borderColor = C.bd; }}
                >
                  {s}
                </button>
              ))}
            </div>
          </StepCard>
        )}

        {step === 3 && (
          <StepCard title="What is the base salary for this role?" onBack={goBack}>
            <div style={{ padding: '8px 0 24px' }}>
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <span style={{ fontSize: 40, fontWeight: 800, color: C.accent, letterSpacing: '-1px' }}>
                  {fmtSalary(salary)}
                </span>
                <p style={{ fontSize: 12, color: C.tl, marginTop: 4 }}>base salary per annum</p>
              </div>
              <input
                type="range"
                min={80000}
                max={500000}
                step={5000}
                value={salary}
                onChange={e => setSalary(Number(e.target.value))}
                style={{ width: '100%', accentColor: C.accent, cursor: 'pointer', height: 6 }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: C.tl, marginTop: 6 }}>
                <span>£80,000</span>
                <span>£500,000+</span>
              </div>
            </div>
            <button
              onClick={() => setStep(4)}
              style={{
                width: '100%',
                background: C.accent,
                color: '#fff',
                fontWeight: 700,
                borderRadius: 8,
                padding: '13px 20px',
                fontSize: 14,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Continue →
            </button>
          </StepCard>
        )}

        {step === 4 && (
          <StepCard title="How urgent is this search?" onBack={goBack}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {URGENCY.map((u, i) => (
                <button
                  key={i}
                  onClick={() => selectUrgency(u)}
                  style={{
                    textAlign: 'left',
                    background: C.bl,
                    color: C.tx,
                    border: `1.5px solid ${C.bd}`,
                    borderRadius: 9,
                    padding: '14px 18px',
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    lineHeight: 1.45,
                    transition: 'background 0.12s, border-color 0.12s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${C.accent}10`; e.currentTarget.style.borderColor = C.accent; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.bl; e.currentTarget.style.borderColor = C.bd; }}
                >
                  <span style={{ display: 'block', marginBottom: 2 }}>{u.label}</span>
                  <span style={{ fontSize: 12, color: C.tl }}>Estimated timeline: {u.timeline}</span>
                </button>
              ))}
            </div>
          </StepCard>
        )}

        {step === 5 && (
          <StepCard title="What is the geographic scope?" onBack={goBack}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SCOPE.map((s, i) => (
                <OptionBtn key={i} label={s.label} onClick={() => selectScope(s)} />
              ))}
            </div>
          </StepCard>
        )}

        {step === 6 && (
          <StepCard title="Confirm your details" onBack={goBack}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
              {[
                { label: 'Role', value: role?.label },
                { label: 'Sector', value: sector },
                { label: 'Base Salary', value: fmtSalary(salary) },
                { label: 'Urgency', value: urgency?.label },
                { label: 'Scope', value: scope?.label },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  padding: '12px 16px',
                  background: C.bl,
                  borderRadius: 8,
                  gap: 12,
                }}>
                  <span style={{ fontSize: 13, color: C.tl, fontWeight: 600, flexShrink: 0 }}>{item.label}</span>
                  <span style={{ fontSize: 13, color: C.dark, fontWeight: 600, textAlign: 'right' }}>{item.value}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setStep(7)}
              style={{
                width: '100%',
                background: C.gold,
                color: C.dark,
                fontWeight: 700,
                borderRadius: 8,
                padding: '14px 20px',
                fontSize: 15,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              See My Estimate →
            </button>
          </StepCard>
        )}

        {step === 7 && (
          <div>
            <div style={{
              background: C.card,
              border: `1px solid ${C.bd}`,
              borderRadius: 14,
              overflow: 'hidden',
              boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
              marginBottom: 16,
            }}>
              <div style={{
                background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`,
                padding: '28px 28px 24px',
                textAlign: 'center',
              }}>
                <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.gold, marginBottom: 10 }}>
                  Estimated Search Fee
                </p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>
                  {role?.label} · {sector} · {fmtSalary(salary)}
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 42, fontWeight: 800, color: C.gold, letterSpacing: '-1px' }}>
                    {fmt(midFee)}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                  Range: {fmt(lowFee)} – {fmt(highFee)}
                </p>
              </div>

              <div style={{ padding: '22px 28px', borderBottom: `1px solid ${C.bd}` }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[
                    { label: 'Base rate applied', value: `${(baseRate * 100).toFixed(0)}% of salary` },
                    { label: 'Timeline estimate', value: urgency?.timeline || '—' },
                    { label: 'Geographic scope', value: scope?.label || '—' },
                    { label: 'Typical guarantee', value: '6–12 months' },
                  ].map(item => (
                    <div key={item.label} style={{ padding: '12px 14px', background: C.bl, borderRadius: 8 }}>
                      <p style={{ fontSize: 11, color: C.tl, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{item.label}</p>
                      <p style={{ fontSize: 13.5, color: C.dark, fontWeight: 600, margin: 0 }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ padding: '22px 28px' }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: C.tl, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 14 }}>
                  Compare: Cost of a Bad Hire
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
                  <div style={{ padding: '14px 16px', background: `${C.red}08`, border: `1px solid ${C.red}25`, borderRadius: 8 }}>
                    <p style={{ fontSize: 11, color: C.red, fontWeight: 700, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>3× Salary</p>
                    <p style={{ fontSize: 17, fontWeight: 800, color: C.red, margin: 0 }}>{fmt(badHire3x)}</p>
                  </div>
                  <div style={{ padding: '14px 16px', background: `${C.red}08`, border: `1px solid ${C.red}25`, borderRadius: 8 }}>
                    <p style={{ fontSize: 11, color: C.red, fontWeight: 700, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>5× Salary</p>
                    <p style={{ fontSize: 17, fontWeight: 800, color: C.red, margin: 0 }}>{fmt(badHire5x)}</p>
                  </div>
                </div>
                <p style={{ fontSize: 12.5, color: C.tl, lineHeight: 1.6 }}>
                  A quality search fee is a fraction of the cost of replacing an appointment that fails. The ROI case is consistent.
                </p>
              </div>
            </div>

            <div style={{
              background: `linear-gradient(135deg, ${C.accent} 0%, ${C.navy} 100%)`,
              borderRadius: 12,
              padding: '28px 24px',
              textAlign: 'center',
              marginBottom: 14,
            }}>
              <p style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Ready to start your search?</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.68)', marginBottom: 20 }}>
                Brief a specialist consultant. Typical response within 2 hours.
              </p>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/brief/" style={{ textDecoration: 'none' }}>
                  <button style={{ background: C.gold, color: C.dark, fontWeight: 700, borderRadius: 7, padding: '11px 22px', fontSize: 14, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                    Brief a Headhunter →
                  </button>
                </Link>
              </div>
            </div>

            <button
              onClick={() => { setStep(1); setRole(null); setSector(null); setSalary(180000); setUrgency(null); setScope(null); }}
              style={{ width: '100%', background: 'none', color: C.tl, fontWeight: 600, borderRadius: 8, padding: '11px', fontSize: 13.5, border: `1.5px solid ${C.bd}`, cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Start Over
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

function StepCard({ title, onBack, children }) {
  return (
    <div>
      <div style={{
        background: C.card,
        border: `1px solid ${C.bd}`,
        borderRadius: 14,
        padding: '28px 24px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
        marginBottom: 16,
      }}>
        <p style={{ fontSize: 18, fontWeight: 700, color: C.dark, lineHeight: 1.3, marginBottom: 20 }}>
          {title}
        </p>
        {children}
      </div>
      {onBack && (
        <button
          onClick={onBack}
          style={{ background: 'none', border: 'none', color: C.tl, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', padding: '4px 0', display: 'flex', alignItems: 'center', gap: 4 }}
        >
          ← Back
        </button>
      )}
    </div>
  );
}

function OptionBtn({ label, onClick, badge }) {
  return (
    <button
      onClick={onClick}
      style={{
        textAlign: 'left',
        background: C.bl,
        color: C.tx,
        border: `1.5px solid ${C.bd}`,
        borderRadius: 9,
        padding: '13px 18px',
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer',
        fontFamily: 'inherit',
        lineHeight: 1.45,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'background 0.12s, border-color 0.12s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = `${C.accent}10`; e.currentTarget.style.borderColor = C.accent; }}
      onMouseLeave={e => { e.currentTarget.style.background = C.bl; e.currentTarget.style.borderColor = C.bd; }}
    >
      <span>{label}</span>
      {badge && (
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
          background: `${C.gold}20`, color: C.gold, border: `1px solid ${C.gold}40`,
          padding: '2px 7px', borderRadius: 4, flexShrink: 0, marginLeft: 10,
        }}>{badge}</span>
      )}
    </button>
  );
}
