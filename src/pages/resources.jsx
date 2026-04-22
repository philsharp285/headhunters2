import Link from 'next/link';
import Layout from '../components/Layout';
import C from '../lib/colors';

const RESOURCES = [
  {
    icon: '📋',
    title: 'Executive Search Brief Template',
    description: 'A structured template for briefing a retained search firm — covering role specification, candidate profile, organisational context, compensation parameters, and process design. Used by FTSE 250 HR directors and PE operating partners.',
    tag: 'Template',
  },
  {
    icon: '✅',
    title: 'Headhunter Selection Scorecard',
    description: 'A weighted scorecard for evaluating retained search firms — assessing sector expertise, off-limits exposure, consultant seniority, reference quality, and process rigour. Designed for boards and HRDs commissioning searches.',
    tag: 'Scorecard',
  },
  {
    icon: '📊',
    title: 'UK Senior Salary Report 2026',
    description: 'Current base salary, bonus, and total compensation benchmarks for C-suite and director-level roles across 12 UK sectors. Sourced from live search market data and updated quarterly. Covers London and major regional markets.',
    tag: 'Research',
  },
  {
    icon: '🎯',
    title: 'Interview Assessment Framework',
    description: 'A structured competency-based interview framework for senior executive assessment — covering leadership capability, strategic thinking, commercial judgment, and cultural fit. Includes scoring rubrics and example questions for each competency.',
    tag: 'Framework',
  },
  {
    icon: '🚀',
    title: 'Executive Onboarding Checklist',
    description: 'A 90-day onboarding checklist for newly appointed C-suite and director-level executives — covering stakeholder mapping, early wins identification, team assessment, and the key decisions that should and should not be made in the first 90 days.',
    tag: 'Checklist',
  },
  {
    icon: '🧮',
    title: 'Cost of a Bad Hire Calculator',
    description: 'An interactive calculator that estimates the total cost of a failed senior appointment — combining direct costs (fees, severance, re-search), productivity losses, management time, and cultural damage. Built on the research from our analysis of 200+ appointment failures.',
    tag: 'Calculator',
  },
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
      '@id': 'https://headhunters.co.uk/resources/',
      name: 'Executive Search Resources',
      description: 'Free templates, frameworks, and data for organisations hiring at senior level.',
      url: 'https://headhunters.co.uk/resources/',
      publisher: { '@id': 'https://headhunters.co.uk/#org' },
    },
  ],
};

export async function getStaticProps() {
  return { props: {} };
}

export default function ResourcesPage() {
  return (
    <Layout
      title="Executive Search Resources"
      description="Free templates, frameworks, and data for organisations hiring at senior level — brief templates, assessment frameworks, salary benchmarks, and onboarding checklists."
      canonical="https://headhunters.co.uk/resources/"
      schema={SCHEMA}
    >
      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`, padding: '56px 24px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.gold, marginBottom: 14 }}>Free Resources</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>
            Executive Hiring Resources
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
            Templates, frameworks, and data to help organisations hire better at senior level. All resources are available at no charge.
          </p>
        </div>
      </div>

      <section style={{ padding: '56px 24px', maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 22 }}>
          {RESOURCES.map((resource, i) => (
            <div key={i} style={{
              background: C.card,
              border: `1px solid ${C.bd}`,
              borderRadius: 12,
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14 }}>
                <span style={{
                  fontSize: 28,
                  width: 52,
                  height: 52,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `${C.accent}12`,
                  borderRadius: 10,
                  flexShrink: 0,
                }}>{resource.icon}</span>
                <div>
                  <span style={{
                    display: 'inline-block',
                    background: `${C.gold}18`, color: `${C.gold}`,
                    border: `1px solid ${C.gold}40`,
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase',
                    padding: '2px 8px', borderRadius: 4, marginBottom: 6,
                  }}>{resource.tag}</span>
                  <h2 style={{ fontSize: 15.5, fontWeight: 700, color: C.dark, lineHeight: 1.3, margin: 0 }}>
                    {resource.title}
                  </h2>
                </div>
              </div>

              <p style={{ fontSize: 13.5, color: C.tl, lineHeight: 1.65, flexGrow: 1, marginBottom: 20 }}>
                {resource.description}
              </p>

              <Link href="/contact/" style={{ textDecoration: 'none', display: 'block' }}>
                <button style={{
                  width: '100%',
                  background: C.gold,
                  color: C.dark,
                  fontWeight: 700,
                  borderRadius: 7,
                  padding: '11px 20px',
                  fontSize: 13.5,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  letterSpacing: '0.01em',
                  transition: 'opacity 0.15s',
                }}>
                  Get Free Access →
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 52,
          background: `linear-gradient(135deg, ${C.accent} 0%, ${C.navy} 100%)`,
          borderRadius: 14,
          padding: '40px 32px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 10 }}>
            Looking for something specific?
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.72)', marginBottom: 26, maxWidth: 480, margin: '0 auto 24px' }}>
            Our consultants can provide bespoke benchmarking, tailored brief templates, and sector-specific data for your search.
          </p>
          <Link href="/contact/" style={{ textDecoration: 'none' }}>
            <button style={{
              background: C.gold,
              color: C.dark,
              fontWeight: 700,
              borderRadius: 7,
              padding: '13px 28px',
              fontSize: 15,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}>
              Speak to a Consultant →
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
