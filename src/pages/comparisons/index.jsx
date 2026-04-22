import Link from 'next/link';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import C from '../../lib/colors';
import COMPARISONS from '../../data/comparisons';

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
      '@id': 'https://headhunters.co.uk/comparisons/',
      name: 'Executive Search Comparisons',
      url: 'https://headhunters.co.uk/comparisons/',
      publisher: { '@id': 'https://headhunters.co.uk/#org' },
    },
  ],
};

export async function getStaticProps() {
  return { props: {} };
}

export default function ComparisonsIndex() {
  return (
    <Layout
      title="Executive Search Comparisons"
      description="Clear, honest comparisons of executive search, LinkedIn Recruiter, RPO, internal talent acquisition, and contingent recruitment — to help you make the right hiring decision."
      canonical="https://headhunters.co.uk/comparisons/"
      schema={SCHEMA}
    >
      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`, padding: '56px 24px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.gold, marginBottom: 14 }}>Comparisons</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>
            Executive Search vs The Alternatives
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
            Honest comparisons to help you choose the right hiring approach for your most important appointments.
          </p>
        </div>
      </div>

      <section style={{ padding: '56px 24px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {COMPARISONS.map(comp => (
            <Link key={comp.slug} href={`/comparisons/${comp.slug}/`} style={{ textDecoration: 'none' }}>
              <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  display: 'inline-block',
                  background: `${C.accent}15`, color: C.accent,
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
                  padding: '3px 8px', borderRadius: 4, marginBottom: 10,
                }}>
                  Comparison
                </span>
                <h2 style={{ fontSize: 16, fontWeight: 700, color: C.dark, marginBottom: 8, lineHeight: 1.3 }}>
                  {comp.title}
                </h2>
                <p style={{ fontSize: 13.5, color: C.tl, lineHeight: 1.6, flexGrow: 1, marginBottom: 16 }}>
                  {comp.subtitle}
                </p>
                <span style={{ fontSize: 13, color: C.accent, fontWeight: 600 }}>Read comparison →</span>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
