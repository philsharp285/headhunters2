import Link from 'next/link';
import Layout from '../../components/Layout';
import BackBtn from '../../components/BackBtn';
import CallbackBanner from '../../components/CallbackBanner';
import Card from '../../components/Card';
import RelatedLinks from '../../components/RelatedLinks';
import C from '../../lib/colors';
import LOCATIONS from '../../data/locations';

export async function getStaticPaths() {
  return {
    paths: LOCATIONS.map(l => ({ params: { slug: l.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const location = LOCATIONS.find(l => l.slug === params.slug) || null;
  return { props: { location } };
}

const ORG = {
  '@type': 'Organization',
  '@id': 'https://headhunters.co.uk/#org',
  name: 'headhunters.co.uk',
  url: 'https://headhunters.co.uk',
  description: "The UK's leading authority on executive search and headhunting — guides, tools, and resources for businesses making senior hires.",
  sameAs: ['https://elliotmarsh.com', 'https://executiveheadhunters.co.uk'],
};

function buildSchema(location) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ORG,
      {
        '@type': 'WebPage',
        '@id': `https://headhunters.co.uk/locations/${location.slug}/`,
        name: `Headhunters in ${location.c}`,
        url: `https://headhunters.co.uk/locations/${location.slug}/`,
        publisher: { '@id': 'https://headhunters.co.uk/#org' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://headhunters.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://headhunters.co.uk/locations/' },
          { '@type': 'ListItem', position: 3, name: location.c, item: `https://headhunters.co.uk/locations/${location.slug}/` },
        ],
      },
    ],
  };
}

export default function LocationPage({ location }) {
  if (!location) return null;

  const paragraphs = location.p.split('\n\n').filter(Boolean);
  const roles = location.roles.split(', ');

  return (
    <Layout
      title={`Headhunters in ${location.c}`}
      description={`Executive search and headhunting in ${location.c}. Retained senior appointments across all major sectors. Local market knowledge, national reach.`}
      canonical={`https://headhunters.co.uk/locations/${location.slug}/`}
      schema={buildSchema(location)}
    >
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '36px 24px 0' }}>
        <BackBtn href="/locations/" label="All Locations" />
      </div>

      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`, padding: '48px 24px 44px', marginTop: 24 }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            background: `${C.gold}22`, border: `1px solid ${C.gold}50`,
            color: C.gold, fontSize: 11, fontWeight: 700,
            letterSpacing: '0.07em', textTransform: 'uppercase',
            padding: '4px 10px', borderRadius: 20, marginBottom: 16,
          }}>
            UK Locations
          </span>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 12 }}>
            Headhunters in {location.c}
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)' }}>
            Retained executive search for senior appointments in {location.c} and the surrounding region.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '44px 24px' }}>

        <div style={{ marginBottom: 44 }}>
          {paragraphs.map((para, i) => (
            <p key={i} style={{ fontSize: 15, lineHeight: 1.75, color: C.tx, marginBottom: 16 }}>{para}</p>
          ))}
        </div>

        <Card style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: C.dark, marginBottom: 16, paddingBottom: 10, borderBottom: `2px solid ${C.gold}`, display: 'inline-block' }}>
            Commonly Recruited Roles in {location.c}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 8 }}>
            {roles.map(role => (
              <div key={role} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.gold, flexShrink: 0 }} />
                <span style={{ fontSize: 13.5, color: C.tx, fontWeight: 500 }}>{role.trim()}</span>
              </div>
            ))}
          </div>
        </Card>

        <RelatedLinks links={[
          { label: 'What is a Headhunter?', href: '/guides/what-is-a-headhunter/' },
          { label: 'The Executive Search Process: Step by Step', href: '/guides/executive-search-process/' },
          { label: 'How Much Does a Headhunter Cost?', href: '/guides/headhunter-costs/' },
          { label: 'All UK Locations', href: '/locations/' },
          { label: 'Executive Search by Sector', href: '/sectors/' },
        ]} heading="Related Guides" />

        <div style={{
          background: `linear-gradient(135deg, ${C.accent} 0%, ${C.navy} 100%)`,
          borderRadius: 12, padding: '32px 28px', textAlign: 'center', marginBottom: 20,
        }}>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
            Start a search in {location.c}
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)', marginBottom: 24 }}>
            Speak to a specialist consultant. Typical response within 2 hours.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/brief/" style={{ textDecoration: 'none' }}>
              <button style={{ background: C.gold, color: C.dark, fontWeight: 700, borderRadius: 6, padding: '11px 22px', fontSize: 14, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                Brief a Headhunter →
              </button>
            </Link>
            <Link href="/estimator/" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontWeight: 600, borderRadius: 6, padding: '11px 22px', fontSize: 14, border: '1.5px solid rgba(255,255,255,0.3)', cursor: 'pointer', fontFamily: 'inherit' }}>
                Get a Fee Estimate
              </button>
            </Link>
            <Link href="/quiz/" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontWeight: 600, borderRadius: 6, padding: '11px 22px', fontSize: 14, border: '1.5px solid rgba(255,255,255,0.3)', cursor: 'pointer', fontFamily: 'inherit' }}>
                Do I Need a Headhunter?
              </button>
            </Link>
          </div>
        </div>
      </div>

      <CallbackBanner />
    </Layout>
  );
}
