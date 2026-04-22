import Link from 'next/link';
import Layout from '../../components/Layout';
import BackBtn from '../../components/BackBtn';
import CallbackBanner from '../../components/CallbackBanner';
import RenderBody from '../../components/RenderBody';
import RelatedLinks from '../../components/RelatedLinks';
import C from '../../lib/colors';
import GUIDES from '../../data/guides';

export async function getStaticPaths() {
  return {
    paths: GUIDES.map(g => ({ params: { slug: g.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const idx = GUIDES.findIndex(g => g.slug === params.slug);
  const guide = GUIDES[idx] || null;
  const prevGuide = idx > 0 ? { slug: GUIDES[idx - 1].slug, title: GUIDES[idx - 1].title } : null;
  const nextGuide = idx < GUIDES.length - 1 ? { slug: GUIDES[idx + 1].slug, title: GUIDES[idx + 1].title } : null;

  return { props: { guide, prevGuide, nextGuide } };
}

function buildSchema(guide) {
  const org = {
    '@type': 'Organization',
    '@id': 'https://headhunters.co.uk/#org',
    name: 'headhunters.co.uk',
    url: 'https://headhunters.co.uk',
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.title,
        description: guide.subtitle,
        datePublished: '2026-03-06',
        dateModified: '2026-03-06',
        author: org,
        publisher: org,
        url: `https://headhunters.co.uk/guides/${guide.slug}/`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://headhunters.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://headhunters.co.uk/guides/' },
          { '@type': 'ListItem', position: 3, name: guide.title, item: `https://headhunters.co.uk/guides/${guide.slug}/` },
        ],
      },
    ],
  };
}

export default function GuidePage({ guide, prevGuide, nextGuide }) {
  if (!guide) return null;

  return (
    <Layout
      title={guide.title}
      description={guide.subtitle}
      canonical={`https://headhunters.co.uk/guides/${guide.slug}/`}
      ogType="article"
      schema={buildSchema(guide)}
    >
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '36px 24px 0' }}>
        <BackBtn href="/guides/" label="All Guides" />
      </div>

      <div style={{
        background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`,
        padding: '48px 24px 44px',
        marginTop: 24,
      }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18, flexWrap: 'wrap' }}>
            <span style={{
              background: `${C.gold}22`,
              border: `1px solid ${C.gold}50`,
              color: C.gold,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: 20,
            }}>
              {guide.tag}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>{guide.time}</span>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>·</span>
            <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>Updated {guide.updated}</span>
          </div>
          <h1 style={{
            fontSize: 'clamp(24px, 4vw, 38px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: 16,
            letterSpacing: '-0.3px',
          }}>
            {guide.title}
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, maxWidth: 640 }}>
            {guide.subtitle}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 780, margin: '0 auto', padding: '40px 24px' }}>
        <div style={{
          background: C.bl,
          border: `1px solid ${C.bd}`,
          borderRadius: 10,
          padding: '20px 22px',
          marginBottom: 44,
        }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: C.tl, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12 }}>
            Table of Contents
          </p>
          <ol style={{ paddingLeft: 18, margin: 0 }}>
            {guide.sections.map((s, i) => (
              <li key={i} style={{ marginBottom: 6 }}>
                <a
                  href={`#section-${i}`}
                  style={{ color: C.accent, fontSize: 14, textDecoration: 'none', fontWeight: 500 }}
                >
                  {s.h}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {guide.sections.map((section, i) => (
          <div key={i} id={`section-${i}`} style={{ marginBottom: 44, scrollMarginTop: 72 }}>
            <h2 style={{
              fontSize: 'clamp(18px, 3vw, 23px)',
              fontWeight: 750,
              color: C.dark,
              marginBottom: 16,
              lineHeight: 1.25,
              paddingBottom: 12,
              borderBottom: `2px solid ${C.gold}`,
              display: 'inline-block',
            }}>
              {section.h}
            </h2>
            <RenderBody text={section.b} />
          </div>
        ))}

        <RelatedLinks links={guide.relatedLinks} />

        <div style={{
          background: `linear-gradient(135deg, ${C.accent} 0%, ${C.navy} 100%)`,
          borderRadius: 12,
          padding: '32px 28px',
          textAlign: 'center',
          marginBottom: 44,
        }}>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
            Ready to start your executive search?
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)', marginBottom: 24 }}>
            Speak to a specialist consultant. Typical response within 2 hours.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact/" style={{ textDecoration: 'none' }}>
              <button style={{
                background: C.gold, color: C.dark, fontWeight: 700,
                borderRadius: 6, padding: '11px 22px', fontSize: 14,
                border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              }}>
                Request a Callback →
              </button>
            </Link>
            <Link href="/estimator/" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'rgba(255,255,255,0.12)', color: '#fff', fontWeight: 600,
                borderRadius: 6, padding: '11px 22px', fontSize: 14,
                border: '1.5px solid rgba(255,255,255,0.3)', cursor: 'pointer', fontFamily: 'inherit',
              }}>
                Estimate Your Fee
              </button>
            </Link>
          </div>
        </div>

        <nav style={{
          display: 'grid',
          gridTemplateColumns: prevGuide && nextGuide ? '1fr 1fr' : '1fr',
          gap: 14,
          borderTop: `1px solid ${C.bd}`,
          paddingTop: 28,
        }}>
          {prevGuide && (
            <Link href={`/guides/${prevGuide.slug}/`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: C.card,
                border: `1px solid ${C.bd}`,
                borderRadius: 8,
                padding: '14px 16px',
                transition: 'border-color 0.15s',
              }}>
                <p style={{ fontSize: 11, color: C.tl, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                  ← Previous
                </p>
                <p style={{ fontSize: 13.5, fontWeight: 600, color: C.accent }}>{prevGuide.title}</p>
              </div>
            </Link>
          )}
          {nextGuide && (
            <Link href={`/guides/${nextGuide.slug}/`} style={{ textDecoration: 'none', gridColumn: prevGuide ? 'auto' : '1' }}>
              <div style={{
                background: C.card,
                border: `1px solid ${C.bd}`,
                borderRadius: 8,
                padding: '14px 16px',
                textAlign: 'right',
                transition: 'border-color 0.15s',
              }}>
                <p style={{ fontSize: 11, color: C.tl, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                  Next →
                </p>
                <p style={{ fontSize: 13.5, fontWeight: 600, color: C.accent }}>{nextGuide.title}</p>
              </div>
            </Link>
          )}
        </nav>
      </div>

      <CallbackBanner />
    </Layout>
  );
}
