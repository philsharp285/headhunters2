import Link from 'next/link';
import Layout from '../../components/Layout';
import CallbackBanner from '../../components/CallbackBanner';
import Card from '../../components/Card';
import C from '../../lib/colors';
import HIRE_PAGES from '../../data/hire-pages';

export async function getStaticPaths() {
  return {
    paths: HIRE_PAGES.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = HIRE_PAGES.find(p => p.slug === params.slug) || null;
  return { props: { page } };
}

function buildSchema(page) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://headhunters.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'How to Hire', item: 'https://headhunters.co.uk/hire/' },
          { '@type': 'ListItem', position: 3, name: page.title, item: `https://headhunters.co.uk/hire/${page.slug}/` },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `https://headhunters.co.uk/hire/${page.slug}/`,
        name: page.title,
        url: `https://headhunters.co.uk/hire/${page.slug}/`,
        description: `${page.title} — salary benchmarks, search fees, timelines, and how to find the right headhunter in the UK.`,
        publisher: { '@id': 'https://headhunters.co.uk/#org' },
      },
    ],
  };
}

export default function HirePage({ page }) {
  if (!page) return null;
  const introParagraphs = page.intro.split('\n\n').filter(Boolean);

  return (
    <Layout
      title={page.title}
      description={`${page.title} — UK salary benchmarks, search fees, timelines, and how to find and appoint the right ${page.role}.`}
      canonical={`https://headhunters.co.uk/hire/${page.slug}/`}
      schema={buildSchema(page)}
    >
      <div style={{
        background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`,
        padding: '56px 24px 44px',
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <Link href="/hire/" style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: 13,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            marginBottom: 20,
            transition: 'color 0.15s',
          }}>
            ← How to Hire
          </Link>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
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
            marginLeft: 8,
          }}>
            <span style={{ fontSize: 16 }}>{page.icon}</span>
            Senior Hiring Guide
          </span>
          <h1 style={{
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: 16,
            letterSpacing: '-0.3px',
            maxWidth: 680,
          }}>
            {page.title}
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', maxWidth: 580 }}>
            UK salary benchmarks, search fees, timelines, and what to look for in a headhunter for this role.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '44px 24px' }}>

        <div style={{ marginBottom: 44 }}>
          {introParagraphs.map((para, i) => (
            <p key={i} style={{ fontSize: 15, lineHeight: 1.8, color: C.tx, marginBottom: 18 }}>{para}</p>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 14,
          marginBottom: 44,
        }}>
          {[
            { label: 'Salary Range', value: page.salaryRange, icon: '£' },
            { label: 'Search Fee', value: page.searchFee, icon: '%' },
            { label: 'Typical Timeline', value: page.timeline, icon: '⏱' },
          ].map(item => (
            <div key={item.label} style={{
              background: C.card,
              border: `1px solid ${C.bd}`,
              borderRadius: 10,
              padding: '20px',
              borderTop: `3px solid ${C.gold}`,
            }}>
              <p style={{
                fontSize: 11,
                fontWeight: 700,
                color: C.tl,
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                marginBottom: 10,
              }}>
                {item.label}
              </p>
              <p style={{ fontSize: 13.5, fontWeight: 600, color: C.dark, lineHeight: 1.5 }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <Card style={{ marginBottom: 44 }}>
          <h2 style={{
            fontSize: 17,
            fontWeight: 700,
            color: C.dark,
            marginBottom: 20,
            paddingBottom: 12,
            borderBottom: `2px solid ${C.gold}`,
            display: 'inline-block',
          }}>
            Key Considerations When Hiring a {page.role}
          </h2>
          <ol style={{ paddingLeft: 22, margin: 0 }}>
            {page.considerations.map((item, i) => (
              <li key={i} style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: C.tx }}>{item}</p>
              </li>
            ))}
          </ol>
        </Card>

        <div style={{ marginBottom: 44 }}>
          <h2 style={{
            fontSize: 'clamp(17px, 3vw, 21px)',
            fontWeight: 750,
            color: C.dark,
            marginBottom: 14,
            paddingBottom: 10,
            borderBottom: `2px solid ${C.gold}`,
            display: 'inline-block',
          }}>
            Why Use Executive Search for This Role?
          </h2>
          {page.whySearch.split('\n\n').filter(Boolean).map((para, i) => (
            <p key={i} style={{ fontSize: 14.5, lineHeight: 1.8, color: C.tx, marginBottom: 16 }}>{para}</p>
          ))}
        </div>

        {page.internalLinks && page.internalLinks.length > 0 && (
          <div style={{
            background: C.bl,
            border: `1px solid ${C.bd}`,
            borderRadius: 10,
            padding: '22px 24px',
            marginBottom: 44,
          }}>
            <p style={{
              fontSize: 11,
              fontWeight: 700,
              color: C.tl,
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              marginBottom: 14,
            }}>
              Related Guides
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {page.internalLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: C.accent,
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div style={{
          background: `linear-gradient(135deg, ${C.accent} 0%, ${C.navy} 100%)`,
          borderRadius: 12,
          padding: '36px 28px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 10 }}>
            Ready to hire a {page.role}?
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)', marginBottom: 28 }}>
            Speak to a specialist consultant about your search. Typical response within 2 hours on business days.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/brief/" style={{ textDecoration: 'none' }}>
              <button style={{
                background: C.gold,
                color: C.dark,
                fontWeight: 700,
                borderRadius: 6,
                padding: '12px 24px',
                fontSize: 14,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}>
                Brief a Headhunter →
              </button>
            </Link>
            <Link href="/estimator/" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'rgba(255,255,255,0.12)',
                color: '#fff',
                fontWeight: 600,
                borderRadius: 6,
                padding: '12px 24px',
                fontSize: 14,
                border: '1.5px solid rgba(255,255,255,0.3)',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}>
                Estimate Your Fee
              </button>
            </Link>
            <Link href="/quiz/" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'rgba(255,255,255,0.12)',
                color: '#fff',
                fontWeight: 600,
                borderRadius: 6,
                padding: '12px 24px',
                fontSize: 14,
                border: '1.5px solid rgba(255,255,255,0.3)',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}>
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
