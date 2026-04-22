import Link from 'next/link';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import C from '../../lib/colors';
import LOCATIONS from '../../data/locations';

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
      '@id': 'https://headhunters.co.uk/locations/',
      name: 'Headhunters by UK Location',
      url: 'https://headhunters.co.uk/locations/',
      publisher: { '@id': 'https://headhunters.co.uk/#org' },
    },
  ],
};

export async function getStaticProps() {
  return { props: {} };
}

export default function LocationsIndex() {
  return (
    <Layout
      title="Headhunters by UK Location"
      description="Executive search and headhunting services across the UK — London, Manchester, Birmingham, Leeds, Edinburgh, Bristol, Cambridge, Glasgow, Cardiff, and Newcastle."
      canonical="https://headhunters.co.uk/locations/"
      schema={SCHEMA}
    >
      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`, padding: '56px 24px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.gold, marginBottom: 14 }}>UK Locations</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>
            Headhunters Across the UK
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
            Senior executive search conducted across all major UK cities. Local market knowledge, national candidate reach.
          </p>
        </div>
      </div>

      <section style={{ padding: '56px 24px', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 18 }}>
          {LOCATIONS.map(loc => (
            <Link key={loc.slug} href={`/locations/${loc.slug}/`} style={{ textDecoration: 'none' }}>
              <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontSize: 17, fontWeight: 700, color: C.dark, marginBottom: 8 }}>{loc.c}</h2>
                <p style={{ fontSize: 13, color: C.tl, lineHeight: 1.55, flexGrow: 1, marginBottom: 14 }}>
                  {loc.p.split('\n\n')[0].slice(0, 130)}…
                </p>
                <span style={{ fontSize: 13, color: C.accent, fontWeight: 600 }}>View location →</span>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
