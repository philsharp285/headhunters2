import Link from 'next/link';
import Layout from '../../components/Layout';
import BackBtn from '../../components/BackBtn';
import CallbackBanner from '../../components/CallbackBanner';
import Card from '../../components/Card';
import RelatedLinks from '../../components/RelatedLinks';
import C from '../../lib/colors';
import SECTORS from '../../data/sectors';

export async function getStaticPaths() {
  return {
    paths: SECTORS.map(s => ({ params: { slug: s.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const sector = SECTORS.find(s => s.id === params.slug) || null;
  return { props: { sector } };
}

const ORG = {
  '@type': 'Organization',
  '@id': 'https://headhunters.co.uk/#org',
  name: 'headhunters.co.uk',
  url: 'https://headhunters.co.uk',
  description: "The UK's leading authority on executive search and headhunting — guides, tools, and resources for businesses making senior hires.",
  sameAs: ['https://elliotmarsh.com', 'https://executiveheadhunters.co.uk'],
};

function buildSchema(sector) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ORG,
      {
        '@type': 'WebPage',
        '@id': `https://headhunters.co.uk/sectors/${sector.id}/`,
        name: `Executive Search: ${sector.name}`,
        url: `https://headhunters.co.uk/sectors/${sector.id}/`,
        publisher: { '@id': 'https://headhunters.co.uk/#org' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://headhunters.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Sectors', item: 'https://headhunters.co.uk/sectors/' },
          { '@type': 'ListItem', position: 3, name: sector.name, item: `https://headhunters.co.uk/sectors/${sector.id}/` },
        ],
      },
    ],
  };
}

export default function SectorPage({ sector }) {
  if (!sector) return null;

  const introParas = sector.intro.split('\n\n').filter(Boolean);

  return (
    <Layout
      title={`Executive Search: ${sector.name}`}
      description={`Specialist executive search in ${sector.name} — ${sector.desc}. Retained headhunting for director-level and C-suite appointments.`}
      canonical={`https://headhunters.co.uk/sectors/${sector.id}/`}
      schema={buildSchema(sector)}
    >
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '36px 24px 0' }}>
        <BackBtn href="/sectors/" label="All Sectors" />
      </div>

      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`, padding: '48px 24px 44px', marginTop: 24 }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ fontSize: 32 }}>{sector.icon}</span>
            <span style={{
              background: `${C.gold}22`, border: `1px solid ${C.gold}50`,
              color: C.gold, fontSize: 11, fontWeight: 700,
              letterSpacing: '0.07em', textTransform: 'uppercase',
              padding: '4px 10px', borderRadius: 20,
            }}>
              Sector Expertise
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 12 }}>
            Executive Search: {sector.name}
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{sector.desc}</p>
        </div>
      </div>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '44px 24px' }}>

        <div style={{ marginBottom: 44 }}>
          {introParas.map((para, i) => (
            <p key={i} style={{ fontSize: 15, lineHeight: 1.75, color: C.tx, marginBottom: 16 }}>{para}</p>
          ))}
        </div>

        <Card style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: C.dark, marginBottom: 16, paddingBottom: 10, borderBottom: `2px solid ${C.gold}`, display: 'inline-block' }}>
            Key Roles We Place
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
            {sector.roles.map(role => (
              <div key={role} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.gold, flexShrink: 0 }} />
                <span style={{ fontSize: 13.5, color: C.tx, fontWeight: 500 }}>{role}</span>
              </div>
            ))}
          </div>
        </Card>

        <div style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(17px, 3vw, 21px)', fontWeight: 750, color: C.dark, marginBottom: 14, paddingBottom: 10, borderBottom: `2px solid ${C.gold}`, display: 'inline-block' }}>
            Search Challenges in This Sector
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: C.tx }}>{sector.challenges}</p>
        </div>

        <div style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(17px, 3vw, 21px)', fontWeight: 750, color: C.dark, marginBottom: 14, paddingBottom: 10, borderBottom: `2px solid ${C.gold}`, display: 'inline-block' }}>
            Why Use Executive Search?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: C.tx }}>{sector.whySearch}</p>
        </div>

        <div style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(17px, 3vw, 21px)', fontWeight: 750, color: C.dark, marginBottom: 14, paddingBottom: 10, borderBottom: `2px solid ${C.gold}`, display: 'inline-block' }}>
            Fees
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: C.tx }}>{sector.fees}</p>
        </div>

        <RelatedLinks links={[
          { label: 'How Much Does a Headhunter Cost?', href: '/guides/headhunter-costs/' },
          { label: 'The Executive Search Process: Step by Step', href: '/guides/executive-search-process/' },
          { label: 'How to Choose a Headhunter', href: '/guides/how-to-choose-a-headhunter/' },
          { label: 'All Executive Search Guides', href: '/guides/' },
          { label: 'Hire a CEO', href: '/hire/ceo-headhunters/' },
          { label: 'Hire a CFO', href: '/hire/cfo-headhunters/' },
          { label: 'Hire a CTO', href: '/hire/cto-headhunters/' },
        ]} heading="Useful Resources" />

        <div style={{
          background: `linear-gradient(135deg, ${C.accent} 0%, ${C.navy} 100%)`,
          borderRadius: 12, padding: '32px 28px', textAlign: 'center', marginBottom: 20,
        }}>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
            Commission a search in {sector.name}
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
