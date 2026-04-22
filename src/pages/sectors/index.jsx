import Link from 'next/link';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import C from '../../lib/colors';
import SECTORS from '../../data/sectors';

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
      '@id': 'https://headhunters.co.uk/sectors/',
      name: 'Executive Search by Sector',
      url: 'https://headhunters.co.uk/sectors/',
      publisher: { '@id': 'https://headhunters.co.uk/#org' },
    },
  ],
};

export async function getStaticProps() {
  return { props: {} };
}

export default function SectorsIndex() {
  return (
    <Layout
      title="Executive Search by Sector"
      description="Specialist executive search and headhunting across every major UK sector — financial services, technology, healthcare, private equity, and more."
      canonical="https://headhunters.co.uk/sectors/"
      schema={SCHEMA}
    >
      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`, padding: '56px 24px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.gold, marginBottom: 14 }}>Sector Expertise</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>
            Executive Search by Sector
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
            Deep sector knowledge is the difference between a search firm that maps your entire talent market and one that searches its own database. We cover every major UK sector.
          </p>
        </div>
      </div>

      <section style={{ padding: '56px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 18 }}>
          {SECTORS.map(sector => (
            <Link key={sector.id} href={`/sectors/${sector.id}/`} style={{ textDecoration: 'none' }}>
              <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 26, lineHeight: 1, flexShrink: 0 }}>{sector.icon}</span>
                  <h2 style={{ fontSize: 15.5, fontWeight: 700, color: C.dark, lineHeight: 1.3, margin: 0 }}>{sector.name}</h2>
                </div>
                <p style={{ fontSize: 13, color: C.tl, lineHeight: 1.55, flexGrow: 1, marginBottom: 14 }}>{sector.desc}</p>
                <span style={{ fontSize: 13, color: C.accent, fontWeight: 600 }}>View sector →</span>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
