import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import C from '../lib/colors';

const QUESTIONS = [
  {
    q: 'What is the seniority of the role?',
    opts: [
      { label: 'C-Suite or Board level', score: 4 },
      { label: 'Director or VP level', score: 3 },
      { label: 'Senior Manager', score: 2 },
      { label: 'Mid-level Manager', score: 1 },
    ],
  },
  {
    q: 'How important is confidentiality for this search?',
    opts: [
      { label: 'Critical — incumbent in post or sensitive context', score: 4 },
      { label: 'Important — prefer a discreet process', score: 3 },
      { label: 'Minor — some discretion preferred', score: 2 },
      { label: 'Not important — open to advertising publicly', score: 0 },
    ],
  },
  {
    q: 'How available are the right candidates through standard channels?',
    opts: [
      { label: 'Mainly passive — best people are not looking', score: 4 },
      { label: 'Mixed — some active, some passive', score: 3 },
      { label: 'Largely active — candidates are searchable', score: 2 },
      { label: 'Broad active pool — plenty of applicants available', score: 1 },
    ],
  },
  {
    q: 'What has been your experience with other hiring channels?',
    opts: [
      { label: 'Failed — 3+ months without a suitable shortlist', score: 4 },
      { label: 'Mixed — some candidates but not the right calibre', score: 3 },
      { label: 'Limited experience — first time hiring at this level', score: 2 },
      { label: 'Good results — channels have worked well before', score: 1 },
    ],
  },
  {
    q: 'How critical is the strategic impact of this hire?',
    opts: [
      { label: 'Defines the trajectory of the organisation', score: 4 },
      { label: 'High — directly shapes division or function performance', score: 3 },
      { label: 'Moderate — important but contained impact', score: 2 },
      { label: 'Operational — one of many similar roles', score: 1 },
    ],
  },
];

const MAX_SCORE = QUESTIONS.length * 4;

function getResult(pct) {
  if (pct >= 70) return {
    label: 'Strong Case for Retained Search',
    color: C.accent,
    advice: 'Your search profile strongly aligns with the scenarios where retained executive search delivers the best outcome. The combination of seniority, confidentiality, passive candidate market, and strategic importance means that a full-market approach — with dedicated consultant resource, structured assessment, and genuine passive candidate reach — is the appropriate tool. The cost of getting this appointment wrong will significantly exceed the cost of a quality search.',
  };
  if (pct >= 40) return {
    label: 'Worth Exploring',
    color: C.gold,
    advice: 'Your search has some characteristics that would benefit from retained search, but there may be elements — seniority, active candidate availability, or timeline — that make a hybrid or targeted approach appropriate. It is worth speaking to a specialist consultant to understand what a search would involve and whether the profile justifies the investment. Many organisations in this range find that a brief initial conversation clarifies their options quickly.',
  };
  return {
    label: 'You May Not Need One Yet',
    color: C.ok,
    advice: 'Based on your answers, this search may be well-served by internal hiring capability, a senior recruitment agency, or a direct advertising approach. Retained executive search is most powerful for senior, confidential, passive-market appointments where the cost of failure is high. If your requirements change — or if standard channels fail to produce the right shortlist — retained search remains an option worth revisiting.',
  };
}

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
      '@id': 'https://headhunters.co.uk/quiz/',
      name: 'Do I Need a Headhunter? Quiz',
      url: 'https://headhunters.co.uk/quiz/',
      publisher: { '@id': 'https://headhunters.co.uk/#org' },
    },
  ],
};

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);

  const totalScore = answers.reduce((s, a) => s + a, 0);
  const pct = Math.round((totalScore / MAX_SCORE) * 100);
  const result = getResult(pct);

  function handleSelect(score) {
    setSelected(score);
    setTimeout(() => {
      const newAnswers = [...answers, score];
      setAnswers(newAnswers);
      setSelected(null);
      if (current + 1 >= QUESTIONS.length) {
        setDone(true);
      } else {
        setCurrent(c => c + 1);
      }
    }, 180);
  }

  function handleBack() {
    if (current === 0) return;
    setCurrent(c => c - 1);
    setAnswers(a => a.slice(0, -1));
    setSelected(null);
  }

  function handleRetake() {
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setDone(false);
  }

  const progress = done ? 100 : Math.round((current / QUESTIONS.length) * 100);

  return (
    <Layout
      title="Do I Need a Headhunter? Quiz"
      description="Answer 5 quick questions to find out whether retained executive search is the right approach for your senior hire."
      canonical="https://headhunters.co.uk/quiz/"
      schema={SCHEMA}
    >
      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`, padding: '48px 24px 44px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.gold, marginBottom: 12 }}>Quick Assessment</p>
          <h1 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.15 }}>
            Do I Need a Headhunter?
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.68)', lineHeight: 1.6 }}>
            5 questions · 2 minutes · Instant result
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 620, margin: '0 auto', padding: '40px 24px 60px' }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: 12, color: C.tl, fontWeight: 600 }}>
              {done ? 'Complete' : `Question ${current + 1} of ${QUESTIONS.length}`}
            </span>
            <span style={{ fontSize: 12, color: C.tl, fontWeight: 600 }}>{progress}%</span>
          </div>
          <div style={{ height: 6, background: C.bl, borderRadius: 99, overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${C.accent}, ${C.al})`,
              borderRadius: 99,
              transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1)',
            }} />
          </div>
        </div>

        {!done ? (
          <div>
            <div style={{
              background: C.card,
              border: `1px solid ${C.bd}`,
              borderRadius: 14,
              padding: '32px 28px',
              marginBottom: 20,
              boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
            }}>
              <p style={{ fontSize: 19, fontWeight: 700, color: C.dark, lineHeight: 1.35, marginBottom: 28 }}>
                {QUESTIONS[current].q}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {QUESTIONS[current].opts.map((opt, i) => {
                  const isSelected = selected === opt.score && answers.length === current;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(opt.score)}
                      disabled={selected !== null}
                      style={{
                        textAlign: 'left',
                        background: isSelected ? C.accent : C.bl,
                        color: isSelected ? '#fff' : C.tx,
                        border: `1.5px solid ${isSelected ? C.accent : C.bd}`,
                        borderRadius: 9,
                        padding: '14px 18px',
                        fontSize: 14,
                        fontWeight: isSelected ? 600 : 400,
                        cursor: selected !== null ? 'default' : 'pointer',
                        fontFamily: 'inherit',
                        lineHeight: 1.45,
                        transition: 'background 0.15s, color 0.15s, border-color 0.15s, transform 0.12s',
                        transform: isSelected ? 'scale(1.01)' : 'scale(1)',
                      }}
                      onMouseEnter={e => { if (selected === null) { e.currentTarget.style.background = `${C.accent}12`; e.currentTarget.style.borderColor = C.accent; } }}
                      onMouseLeave={e => { if (selected === null) { e.currentTarget.style.background = C.bl; e.currentTarget.style.borderColor = C.bd; } }}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {current > 0 && (
              <button
                onClick={handleBack}
                style={{
                  background: 'none',
                  border: 'none',
                  color: C.tl,
                  fontSize: 13,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  padding: '4px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                ← Back
              </button>
            )}
          </div>
        ) : (
          <div>
            <div style={{
              background: C.card,
              border: `1px solid ${C.bd}`,
              borderRadius: 14,
              padding: '36px 28px',
              boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
              textAlign: 'center',
              marginBottom: 20,
            }}>
              <div style={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                border: `4px solid ${result.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                background: `${result.color}10`,
              }}>
                <span style={{ fontSize: 30, fontWeight: 800, color: result.color }}>{pct}%</span>
              </div>

              <h2 style={{ fontSize: 22, fontWeight: 800, color: result.color, marginBottom: 14, lineHeight: 1.2 }}>
                {result.label}
              </h2>

              <p style={{ fontSize: 14.5, lineHeight: 1.75, color: C.tx, marginBottom: 22, textAlign: 'left' }}>
                {result.advice}
              </p>

              <div style={{
                background: `${C.gold}14`,
                border: `1px solid ${C.gold}40`,
                borderRadius: 8,
                padding: '12px 18px',
                marginBottom: 26,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
                <span style={{ fontSize: 16 }}>⚡</span>
                <p style={{ fontSize: 13.5, color: C.dark, fontWeight: 600, margin: 0, textAlign: 'left' }}>
                  Speak to a specialist — typical response within 2 hours
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Link href="/estimator/" style={{ textDecoration: 'none' }}>
                  <button style={{
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
                  }}>
                    Get a Fee Estimate →
                  </button>
                </Link>
                <Link href="/brief/" style={{ textDecoration: 'none' }}>
                  <button style={{
                    width: '100%',
                    background: C.gold,
                    color: C.dark,
                    fontWeight: 700,
                    borderRadius: 8,
                    padding: '13px 20px',
                    fontSize: 14,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}>
                    Brief a Headhunter →
                  </button>
                </Link>
                <button
                  onClick={handleRetake}
                  style={{
                    width: '100%',
                    background: 'none',
                    color: C.tl,
                    fontWeight: 600,
                    borderRadius: 8,
                    padding: '12px 20px',
                    fontSize: 14,
                    border: `1.5px solid ${C.bd}`,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
