import Link from 'next/link';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import SectionTitle from '../../components/SectionTitle';
import CallbackBanner from '../../components/CallbackBanner';
import C from '../../lib/colors';
import GUIDES from '../../data/guides';

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
      '@id': 'https://headhunters.co.uk/guides/',
      name: 'Executive Search Guides',
      url: 'https://headhunters.co.uk/guides/',
      publisher: { '@id': 'https://headhunters.co.uk/#org' },
    },
  ],
};

export async function getStaticProps() {
  return { props: {} };
}

export default function GuidesIndex() {
  return (
    <Layout
      title="Executive Search Guides"
      description="Comprehensive guides on headhunting, executive search fees, processes, and how to make better senior hires. Written for UK hiring organisations."
      canonical="https://headhunters.co.uk/guides/"
      schema={SCHEMA}
    >
      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`, padding: '56px 24px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.gold, marginBottom: 14 }}>Knowledge Hub</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>
            Executive Search Guides
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
            Authoritative guides on headhunting, search fees, process, and decision-making — written for UK CEOs, Chairs, and HR Directors.
          </p>
        </div>
      </div>

      <section style={{ padding: '56px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {GUIDES.map(guide => (
            <Link key={guide.slug} href={`/guides/${guide.slug}/`} style={{ textDecoration: 'none' }}>
              <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.15s' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14 }}>
                  <span style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}>{guide.icon}</span>
                  <div>
                    <span style={{
                      display: 'inline-block',
                      background: `${C.accent}15`,
                      color: C.accent,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '3px 8px',
                      borderRadius: 4,
                      marginBottom: 6,
                    }}>
                      {guide.tag}
                    </span>
                    <h2 style={{ fontSize: 15.5, fontWeight: 700, color: C.dark, lineHeight: 1.3, margin: 0 }}>
                      {guide.title}
                    </h2>
                  </div>
                </div>
                <p style={{ fontSize: 13.5, color: C.tl, lineHeight: 1.6, flexGrow: 1, marginBottom: 16 }}>
                  {guide.subtitle}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: C.tl }}>{guide.time}</span>
                  <span style={{ fontSize: 13, color: C.accent, fontWeight: 600 }}>Read guide →</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <CallbackBanner />
    </Layout>
  );
}
