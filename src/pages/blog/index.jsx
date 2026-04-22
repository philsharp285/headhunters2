import Link from 'next/link';
import Layout from '../../components/Layout';
import C from '../../lib/colors';
import BLOG_ARTICLES from '../../data/blog-articles';

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
      '@id': 'https://headhunters.co.uk/blog/',
      name: 'Executive Search Insights & Analysis',
      url: 'https://headhunters.co.uk/blog/',
      publisher: { '@id': 'https://headhunters.co.uk/#org' },
    },
  ],
};

export async function getStaticProps() {
  return { props: {} };
}

export default function BlogIndex() {
  return (
    <Layout
      title="Executive Search Insights & Analysis"
      description="In-depth articles on executive search, senior hiring, CEO succession, PE portfolio hiring, and the UK senior talent market — from practitioners with genuine sector experience."
      canonical="https://headhunters.co.uk/blog/"
      schema={SCHEMA}
    >
      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`, padding: '56px 24px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.gold, marginBottom: 14 }}>Insights & Analysis</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>
            Executive Search Insights
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
            Honest, detailed analysis of the UK senior talent market — costs, timing, candidate behaviour, and what the data actually says.
          </p>
        </div>
      </div>

      <section style={{ padding: '56px 24px', maxWidth: 960, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 22 }}>
          {BLOG_ARTICLES.map(article => (
            <Link key={article.slug} href={`/blog/${article.slug}/`} style={{ textDecoration: 'none' }}>
              <article style={{
                background: C.card,
                border: `1px solid ${C.bd}`,
                borderRadius: 10,
                padding: '24px 22px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.18s, transform 0.18s',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.10)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{
                    background: `${C.accent}15`, color: C.accent,
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
                    padding: '3px 8px', borderRadius: 4,
                  }}>{article.tag}</span>
                  <span style={{ fontSize: 12, color: C.tl }}>{article.date}</span>
                  <span style={{ fontSize: 12, color: C.tl }}>· {article.readTime} read</span>
                </div>
                <h2 style={{ fontSize: 16.5, fontWeight: 700, color: C.dark, marginBottom: 10, lineHeight: 1.35, letterSpacing: '-0.2px' }}>
                  {article.title}
                </h2>
                <p style={{ fontSize: 13.5, color: C.tl, lineHeight: 1.6, flexGrow: 1, marginBottom: 16 }}>
                  {article.subtitle}
                </p>
                <span style={{ fontSize: 13, color: C.accent, fontWeight: 600 }}>Read article →</span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
