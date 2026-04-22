import Layout from '../components/Layout';
import C from '../lib/colors';

const STATS = [
  { num: '25–35%', label: 'Retained search fee range', note: 'As a percentage of base salary; standard across the UK market for director-level appointments and above.' },
  { num: '30%', label: 'Most common fee benchmark', note: 'The modal retained search fee for C-suite and senior director appointments in the UK in 2026.' },
  { num: '10–14 wks', label: 'Average search duration', note: 'Briefing to accepted offer for director-level searches; C-suite and board appointments typically take 16–20 weeks.' },
  { num: '80%+', label: 'Passive candidate market', note: 'The proportion of the best senior candidates who are not actively seeking new employment at any given time.' },
  { num: '3–5×', label: 'Cost of a bad hire', note: 'Conservative multiplier of annual base salary; for C-suite appointments the true cost frequently exceeds 10× when all indirect costs are included.' },
  { num: '90%+', label: 'Completion rate', note: 'Retained search completion rate at leading firms; far higher than contingent, which often produces no successful shortlist.' },
  { num: '£30k–£40k', label: 'Minimum retained fee', note: "Typical minimum professional fee at reputable retained search firms, regardless of the candidate's salary level." },
  { num: '6–12 mths', label: 'Guarantee period', note: 'Standard guarantee period in retained executive search: the firm re-conducts the search at no additional fee if the candidate leaves within this period.' },
  { num: '100–300', label: 'Candidates mapped per search', note: 'The typical size of the initial market map in a thorough retained search, before longlist qualification reduces this to 12–20 names.' },
  { num: '3–6', label: 'Shortlisted candidates', note: 'The typical number of candidates presented on a final shortlist after full assessment; quality over quantity is the hallmark of good executive search.' },
  { num: '16–20 wks', label: 'CEO / board search duration', note: 'Average timeline from briefing to accepted offer for CEO, Chair, and board-level appointments in the UK market.' },
  { num: '75–85%', label: 'Senior talent passive at any time', note: 'Research-consistent estimate of the proportion of senior executives who are not actively considering a new role at any given moment — the core reason executive search exists.' },
];

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
      '@id': 'https://headhunters.co.uk/statistics/',
      name: 'UK Executive Search Statistics 2026',
      description: 'Key data points on the UK executive search market — fees, timelines, completion rates, passive candidate rates, and cost of a bad hire benchmarks.',
      url: 'https://headhunters.co.uk/statistics/',
      publisher: { '@id': 'https://headhunters.co.uk/#org' },
    },
  ],
};

export async function getStaticProps() {
  return { props: {} };
}

export default function StatisticsPage() {
  return (
    <Layout
      title="UK Executive Search Statistics 2026"
      description="Key data points on the UK executive search market — fees, timelines, completion rates, passive candidate rates, and cost of a bad hire benchmarks."
      canonical="https://headhunters.co.uk/statistics/"
      schema={SCHEMA}
    >
      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`, padding: '56px 24px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.gold, marginBottom: 14 }}>Market Data</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>
            UK Executive Search Statistics 2026
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
            Key benchmarks, fee data, and market indicators for senior hiring in the UK — updated for the 2026 market environment.
          </p>
        </div>
      </div>

      <section style={{ padding: '56px 24px', maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 18 }}>
          {STATS.map((stat, i) => (
            <div key={i} style={{
              background: C.card,
              border: `1px solid ${C.bd}`,
              borderRadius: 12,
              padding: '26px 22px',
              borderTop: `3px solid ${C.gold}`,
              display: 'flex',
              flexDirection: 'column',
            }}>
              <p style={{
                fontSize: 'clamp(26px, 4vw, 38px)',
                fontWeight: 800,
                color: C.accent,
                letterSpacing: '-0.5px',
                lineHeight: 1.1,
                marginBottom: 8,
                fontVariantNumeric: 'tabular-nums',
              }}>
                {stat.num}
              </p>
              <p style={{ fontSize: 14, fontWeight: 700, color: C.dark, marginBottom: 10, lineHeight: 1.3 }}>
                {stat.label}
              </p>
              <p style={{ fontSize: 12.5, color: C.tl, lineHeight: 1.6, flexGrow: 1 }}>
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 56,
          background: C.card,
          border: `1px solid ${C.bd}`,
          borderRadius: 12,
          padding: '32px 28px',
        }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: C.dark, marginBottom: 16 }}>About These Figures</h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: C.tx, marginBottom: 12 }}>
            These benchmarks are drawn from market practice data, published research from AESC and leading search firms, and direct market observation. They represent typical ranges and modal figures rather than guaranteed outcomes — individual search fees, timelines, and completion rates vary by firm, sector, seniority, and market conditions.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: C.tx }}>
            Fee percentages apply to base salary unless otherwise stated. Timelines are measured from receipt of a complete brief to candidate acceptance; notice periods (typically 3–6 months) are additional to these figures. All data reflects the UK retained executive search market as observed in 2025–2026.
          </p>
        </div>
      </section>
    </Layout>
  );
}
