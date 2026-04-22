import Link from 'next/link';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import SectionTitle from '../../components/SectionTitle';
import CallbackBanner from '../../components/CallbackBanner';
import C from '../../lib/colors';
import HIRE_PAGES from '../../data/hire-pages';

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://headhunters.co.uk/#org',
      name: 'headhunters.co.uk',
      url: 'https://headhunters.co.uk',
      description: "The UK's leading authority on executive search and headhunting — guides, tools, and resources for businesses making senior hires.",
    },
    {
      '@type': 'WebPage',
      '@id': 'https://headhunters.co.uk/hire/',
      name: 'How to Hire Executive Roles — UK Guides',
      url: 'https://headhunters.co.uk/hire/',
      publisher: { '@id': 'https://headhunters.co.uk/#org' },
    },
  ],
};

export async function getStaticProps() {
  return { props: {} };
}

export default function HireIndex() {
  return (
    <Layout
      title="How to Hire Executive Roles — UK Headhunter Guides"
      description="Complete guides to hiring C-suite and board-level executives in the UK. Salary benchmarks, search fees, timelines, and what to look for in a headhunter."
      canonical="https://headhunters.co.uk/hire/"
      schema={SCHEMA}
    >
      <div style={{
        background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`,
        padding: '56px 24px 44px',
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            background: `${C.gold}22`,
            border: `1px solid ${C.gold}50`,
            color: C.gold,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            padding: '4px 10px',
            borderRadius: 20,
            marginBottom: 18,
          }}>
            Senior Hiring Guides
          </span>
          <h1 style={{
            fontSize: 'clamp(26px, 4vw, 42px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: 16,
            letterSpacing: '-0.3px',
          }}>
            How to Hire Executive Roles
          </h1>
          <p style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.68)',
            lineHeight: 1.65,
            maxWidth: 600,
          }}>
            Complete guides with salary benchmarks, search fees, timelines, and hiring strategies for every major C-suite and board-level appointment in the UK.
          </p>
        </div>
      </div>

      <section style={{ padding: '56px 24px 72px', maxWidth: 1160, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {HIRE_PAGES.map(page => (
            <Link key={page.slug} href={`/hire/${page.slug}/`} style={{ textDecoration: 'none' }}>
              <Card style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.15s, transform 0.15s',
                cursor: 'pointer',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14 }}>
                  <span style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}>{page.icon}</span>
                  <h2 style={{ fontSize: 15, fontWeight: 700, color: C.dark, lineHeight: 1.35 }}>
                    {page.title}
                  </h2>
                </div>
                <p style={{ fontSize: 13, color: C.tl, lineHeight: 1.6, marginBottom: 16, flex: 1 }}>
                  {page.intro.split('\n\n')[0].slice(0, 130)}…
                </p>
                <div style={{ borderTop: `1px solid ${C.bd}`, paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <span style={{ fontSize: 12, color: C.tx }}>
                    <strong style={{ color: C.dark }}>Salary:</strong> {page.salaryRange.split(' depending')[0]}
                  </span>
                  <span style={{ fontSize: 12, color: C.tx }}>
                    <strong style={{ color: C.dark }}>Timeline:</strong> {page.timeline.split(' from')[0]}
                  </span>
                </div>
                <span style={{ fontSize: 13, color: C.accent, fontWeight: 600, marginTop: 14 }}>
                  Read guide →
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <CallbackBanner />
    </Layout>
  );
}
