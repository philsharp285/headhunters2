import Link from 'next/link';
import Layout from '../../components/Layout';
import BackBtn from '../../components/BackBtn';
import CallbackBanner from '../../components/CallbackBanner';
import RenderBody from '../../components/RenderBody';
import RelatedLinks from '../../components/RelatedLinks';
import C from '../../lib/colors';
import BLOG_ARTICLES from '../../data/blog-articles';

export async function getStaticPaths() {
  return {
    paths: BLOG_ARTICLES.map(a => ({ params: { slug: a.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const idx = BLOG_ARTICLES.findIndex(a => a.slug === params.slug);
  const article = BLOG_ARTICLES[idx] || null;
  const prev = idx > 0 ? { slug: BLOG_ARTICLES[idx - 1].slug, title: BLOG_ARTICLES[idx - 1].title } : null;
  const next = idx < BLOG_ARTICLES.length - 1 ? { slug: BLOG_ARTICLES[idx + 1].slug, title: BLOG_ARTICLES[idx + 1].title } : null;
  return { props: { article, prev, next } };
}

function buildSchema(article) {
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
        headline: article.title,
        description: article.subtitle,
        datePublished: article.date,
        dateModified: article.date,
        author: org,
        publisher: org,
        url: `https://headhunters.co.uk/blog/${article.slug}/`,
        articleSection: article.tag,
        timeRequired: `PT${article.readTime.replace(' min', 'M')}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://headhunters.co.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://headhunters.co.uk/blog/' },
          { '@type': 'ListItem', position: 3, name: article.title, item: `https://headhunters.co.uk/blog/${article.slug}/` },
        ],
      },
    ],
  };
}

export default function BlogArticlePage({ article, prev, next }) {
  if (!article) return null;

  return (
    <Layout
      title={article.title}
      description={article.subtitle}
      canonical={`https://headhunters.co.uk/blog/${article.slug}/`}
      ogType="article"
      schema={buildSchema(article)}
    >
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '36px 24px 0' }}>
        <BackBtn href="/blog/" label="All Articles" />
      </div>

      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`, padding: '48px 24px 44px', marginTop: 24 }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18, flexWrap: 'wrap' }}>
            <span style={{
              background: `${C.gold}22`, border: `1px solid ${C.gold}50`,
              color: C.gold, fontSize: 11, fontWeight: 700,
              letterSpacing: '0.07em', textTransform: 'uppercase',
              padding: '4px 10px', borderRadius: 20,
            }}>{article.tag}</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{article.date}</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>· {article.readTime} read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 800, color: '#fff', lineHeight: 1.18, marginBottom: 16, letterSpacing: '-0.3px' }}>
            {article.title}
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.70)', lineHeight: 1.6, maxWidth: 620 }}>
            {article.subtitle}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '40px 24px' }}>

        <div style={{ background: C.bl, border: `1px solid ${C.bd}`, borderRadius: 10, padding: '20px 22px', marginBottom: 40 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: C.tl, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>
            In This Article
          </p>
          <ol style={{ paddingLeft: 18, margin: 0 }}>
            {article.sections.map((s, i) => (
              <li key={i} style={{ marginBottom: 5 }}>
                <a href={`#section-${i}`} style={{ color: C.accent, fontSize: 13.5, textDecoration: 'none', fontWeight: 500 }}>
                  {s.h}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div style={{ marginBottom: 40, paddingBottom: 28, borderBottom: `1px solid ${C.bd}` }}>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: C.tx }}>{article.intro}</p>
        </div>

        {article.sections.map((section, i) => (
          <div key={i} id={`section-${i}`} style={{ marginBottom: 44, scrollMarginTop: 72 }}>
            <h2 style={{
              fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 750, color: C.dark,
              marginBottom: 16, lineHeight: 1.25, paddingBottom: 10,
              borderBottom: `2px solid ${C.gold}`, display: 'inline-block',
            }}>
              {section.h}
            </h2>
            <RenderBody text={section.b} />
          </div>
        ))}

        <RelatedLinks links={article.relatedLinks} />

        <div style={{ background: `linear-gradient(135deg, ${C.accent} 0%, ${C.navy} 100%)`, borderRadius: 12, padding: '32px 28px', textAlign: 'center', marginBottom: 44 }}>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
            Ready to talk about your search?
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
                Estimate Your Fee
              </button>
            </Link>
          </div>
        </div>

        {(prev || next) && (
          <nav style={{ display: 'grid', gridTemplateColumns: prev && next ? '1fr 1fr' : '1fr', gap: 14, borderTop: `1px solid ${C.bd}`, paddingTop: 28 }}>
            {prev && (
              <Link href={`/blog/${prev.slug}/`} style={{ textDecoration: 'none' }}>
                <div style={{ background: C.card, border: `1px solid ${C.bd}`, borderRadius: 8, padding: '14px 16px' }}>
                  <p style={{ fontSize: 11, color: C.tl, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>← Previous</p>
                  <p style={{ fontSize: 13.5, fontWeight: 600, color: C.accent }}>{prev.title}</p>
                </div>
              </Link>
            )}
            {next && (
              <Link href={`/blog/${next.slug}/`} style={{ textDecoration: 'none' }}>
                <div style={{ background: C.card, border: `1px solid ${C.bd}`, borderRadius: 8, padding: '14px 16px', textAlign: 'right' }}>
                  <p style={{ fontSize: 11, color: C.tl, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Next →</p>
                  <p style={{ fontSize: 13.5, fontWeight: 600, color: C.accent }}>{next.title}</p>
                </div>
              </Link>
            )}
          </nav>
        )}
      </div>

      <CallbackBanner />
    </Layout>
  );
}
