import Link from 'next/link';
import Layout from '../../components/Layout';
import CallbackBanner from '../../components/CallbackBanner';
import Card from '../../components/Card';
import C from '../../lib/colors';
import INTENT_PAGES from '../../data/intent-pages';

export async function getStaticPaths() {
  return {
    paths: INTENT_PAGES.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = INTENT_PAGES.find(p => p.slug === params.slug) || null;
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
          { '@type': 'ListItem', position: 2, name: page.title, item: `https://headhunters.co.uk/intent/${page.slug}/` },
        ],
      },
    ],
  };
}

export default function IntentPage({ page }) {
  if (!page) return null;
  const introParagraphs = page.intro.split('\n\n').filter(Boolean);

  return (
    <Layout
      title={page.title}
      description={`${page.title} — a practical guide to ${page.role} executive search in the UK, covering salary ranges, search fees, timelines, and how to find the right headhunter.`}
      canonical={`https://headhunters.co.uk/intent/${page.slug}/`}
      schema={buildSchema(page)}
    >
      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`, padding: '56px 24px 44px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            background: `${C.gold}22`, border: `1px solid ${C.gold}50`,
            color: C.gold, fontSize: 11, fontWeight: 700,
            letterSpacing: '0.07em', textTransform: 'uppercase',
            padding: '4px 10px', borderRadius: 20, marginBottom: 18,
          }}>
            Senior Hiring Guide
          </span>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 16, letterSpacing: '-0.3px', maxWidth: 680 }}>
            {page.title}
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', maxWidth: 580 }}>
            A practical guide to {page.role} executive search in the UK — salary benchmarks, search fees, timelines, and what to look for in a search firm.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '44px 24px' }}>

        <div style={{ marginBottom: 44 }}>
          {introParagraphs.map((para, i) => (
            <p key={i} style={{ fontSize: 15, lineHeight: 1.8, color: C.tx, marginBottom: 16 }}>{para}</p>
          ))}
        </div>

        <Card style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: C.dark, marginBottom: 18, paddingBottom: 10, borderBottom: `2px solid ${C.gold}`, display: 'inline-block' }}>
            Key Considerations When Hiring a {page.role}
          </h2>
          <ol style={{ paddingLeft: 20, margin: 0 }}>
            {page.considerations.map((item, i) => (
              <li key={i} style={{ marginBottom: 14 }}>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: C.tx }}>{item}</p>
              </li>
            ))}
          </ol>
        </Card>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 44 }}>
          {[
            { label: 'Salary Range', value: page.salaryRange, icon: '£' },
            { label: 'Search Fee', value: page.searchFee, icon: '%' },
            { label: 'Typical Timeline', value: page.timeline, icon: '⏱' },
          ].map(item => (
            <div key={item.label} style={{
              background: C.card, border: `1px solid ${C.bd}`, borderRadius: 10,
              padding: '20px 20px', borderTop: `3px solid ${C.gold}`,
            }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: C.tl, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>
                {item.label}
              </p>
              <p style={{ fontSize: 13.5, fontWeight: 600, color: C.dark, lineHeight: 1.5 }}>{item.value}</p>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 'clamp(17px, 3vw, 21px)', fontWeight: 750, color: C.dark, marginBottom: 14, paddingBottom: 10, borderBottom: `2px solid ${C.gold}`, display: 'inline-block' }}>
            Why Use Executive Search for This Role?
          </h2>
          {page.whySearch.split('\n\n').filter(Boolean).map((para, i) => (
            <p key={i} style={{ fontSize: 14.5, lineHeight: 1.8, color: C.tx, marginBottom: 14 }}>{para}</p>
          ))}
        </div>

        {page.responsibilities && page.responsibilities.length > 0 && (
          <Card style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: C.dark, marginBottom: 16, paddingBottom: 10, borderBottom: `2px solid ${C.gold}`, display: 'inline-block' }}>
              Key Responsibilities
            </h2>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              {page.responsibilities.map((item, i) => (
                <li key={i} style={{ marginBottom: 10 }}>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: C.tx }}>{item}</p>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {page.keyQualities && page.keyQualities.length > 0 && (
          <div style={{ marginBottom: 44 }}>
            <h2 style={{ fontSize: 'clamp(17px, 3vw, 21px)', fontWeight: 750, color: C.dark, marginBottom: 18, paddingBottom: 10, borderBottom: `2px solid ${C.gold}`, display: 'inline-block' }}>
              Key Qualities to Look For
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 14 }}>
              {page.keyQualities.map((quality, i) => {
                const colonIdx = quality.indexOf(':');
                const label = colonIdx > -1 ? quality.slice(0, colonIdx) : quality;
                const detail = colonIdx > -1 ? quality.slice(colonIdx + 1).trim() : '';
                return (
                  <div key={i} style={{
                    background: C.card,
                    border: `1px solid ${C.bd}`,
                    borderRadius: 8,
                    padding: '16px 18px',
                    borderLeft: `3px solid ${C.gold}`,
                  }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: C.dark, marginBottom: detail ? 6 : 0 }}>{label}</p>
                    {detail && <p style={{ fontSize: 13, color: C.tl, lineHeight: 1.6 }}>{detail}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {page.interviewQuestions && page.interviewQuestions.length > 0 && (
          <Card style={{ marginBottom: 44 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: C.dark, marginBottom: 18, paddingBottom: 10, borderBottom: `2px solid ${C.gold}`, display: 'inline-block' }}>
              Interview Questions to Ask
            </h2>
            <ol style={{ paddingLeft: 20, margin: 0 }}>
              {page.interviewQuestions.map((q, i) => (
                <li key={i} style={{ marginBottom: 14 }}>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: C.tx, fontStyle: 'italic' }}>{q}</p>
                </li>
              ))}
            </ol>
          </Card>
        )}

        {page.hiringGuide && page.hiringGuide.length > 0 && (
          <div style={{ marginBottom: 44 }}>
            <h2 style={{ fontSize: 'clamp(17px, 3vw, 21px)', fontWeight: 750, color: C.dark, marginBottom: 18, paddingBottom: 10, borderBottom: `2px solid ${C.gold}`, display: 'inline-block' }}>
              Step-by-Step Hiring Guide
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {page.hiringGuide.map((item, i) => (
                <div key={i} style={{
                  background: C.card,
                  border: `1px solid ${C.bd}`,
                  borderRadius: 8,
                  padding: '18px 20px',
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: C.gold,
                    color: C.dark,
                    fontSize: 12,
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 2,
                  }}>
                    {i + 1}
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: C.dark, marginBottom: 6 }}>{item.step}</p>
                    <p style={{ fontSize: 13.5, lineHeight: 1.7, color: C.tl }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{
          background: `linear-gradient(135deg, ${C.accent} 0%, ${C.navy} 100%)`,
          borderRadius: 12, padding: '32px 28px', textAlign: 'center',
        }}>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
            Ready to hire a {page.role}?
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)', marginBottom: 24 }}>
            Speak to a specialist consultant about your search. Typical response within 2 hours.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/brief/" style={{ textDecoration: 'none' }}>
              <button style={{ background: C.gold, color: C.dark, fontWeight: 700, borderRadius: 6, padding: '11px 22px', fontSize: 14, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                Brief a Headhunter →
              </button>
            </Link>
            <Link href="/estimator/" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontWeight: 600, borderRadius: 6, padding: '11px 22px', fontSize: 14, border: '1.5px solid rgba(255,255,255,0.3)', cursor: 'pointer', fontFamily: 'inherit' }}>
                Estimate Your Fee
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
