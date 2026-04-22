import { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import C from '../lib/colors';
import GLOSSARY from '../data/glossary';

const SORTED = [...GLOSSARY].sort((a, b) => a.t.localeCompare(b.t));

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
      '@id': 'https://headhunters.co.uk/glossary/',
      name: 'Executive Search Glossary',
      description: 'A comprehensive glossary of executive search, headhunting, and senior talent market terminology — defined clearly for hiring organisations.',
      url: 'https://headhunters.co.uk/glossary/',
      publisher: { '@id': 'https://headhunters.co.uk/#org' },
    },
  ],
};

export async function getStaticProps() {
  return { props: {} };
}

export default function GlossaryPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return SORTED;
    const q = query.toLowerCase();
    return SORTED.filter(item =>
      item.t.toLowerCase().includes(q) || item.d.toLowerCase().includes(q)
    );
  }, [query]);

  const letters = useMemo(() => {
    return [...new Set(filtered.map(item => item.t[0].toUpperCase()))].sort();
  }, [filtered]);

  return (
    <Layout
      title="Executive Search Glossary"
      description="A comprehensive glossary of executive search, headhunting, and senior talent market terminology — 38 terms defined clearly for hiring organisations and candidates."
      canonical="https://headhunters.co.uk/glossary/"
      schema={SCHEMA}
    >
      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`, padding: '56px 24px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.gold, marginBottom: 14 }}>Terminology</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>
            Executive Search Glossary
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, marginBottom: 28 }}>
            {GLOSSARY.length} terms defined — from Retained Search to 360-Degree Referencing.
          </p>
          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            <input
              type="text"
              placeholder="Search terms and definitions…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '13px 18px',
                borderRadius: 8,
                border: 'none',
                fontSize: 15,
                fontFamily: 'inherit',
                background: '#fff',
                color: C.dark,
                outline: 'none',
                boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
              }}
            />
          </div>
        </div>
      </div>

      <section style={{ padding: '44px 24px 60px', maxWidth: 860, margin: '0 auto' }}>
        {query.trim() === '' && (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {letters.map(letter => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                style={{
                  display: 'inline-block',
                  width: 32, height: 32,
                  lineHeight: '32px',
                  textAlign: 'center',
                  borderRadius: 6,
                  background: C.card,
                  border: `1px solid ${C.bd}`,
                  color: C.accent,
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                {letter}
              </a>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: C.tl, fontSize: 15, padding: '40px 0' }}>
            No terms found for "{query}"
          </p>
        )}

        {query.trim()
          ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {filtered.map((item, i) => (
                <GlossaryTerm key={item.t} item={item} last={i === filtered.length - 1} />
              ))}
            </div>
          )
          : letters.map(letter => {
            const items = filtered.filter(item => item.t[0].toUpperCase() === letter);
            return (
              <div key={letter} id={`letter-${letter}`} style={{ marginBottom: 40, scrollMarginTop: 72 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span style={{
                    fontSize: 18, fontWeight: 800, color: C.dark,
                    background: `${C.gold}20`, border: `1px solid ${C.gold}50`,
                    width: 36, height: 36, borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>{letter}</span>
                  <div style={{ height: 1, background: C.bd, flexGrow: 1 }} />
                </div>
                <div style={{ background: C.card, border: `1px solid ${C.bd}`, borderRadius: 10, overflow: 'hidden' }}>
                  {items.map((item, i) => (
                    <GlossaryTerm key={item.t} item={item} last={i === items.length - 1} />
                  ))}
                </div>
              </div>
            );
          })
        }
      </section>
    </Layout>
  );
}

function GlossaryTerm({ item, last }) {
  return (
    <div style={{
      padding: '18px 22px',
      borderBottom: last ? 'none' : `1px solid ${C.bd}`,
      background: C.card,
    }}>
      <p style={{ fontSize: 14.5, fontWeight: 700, color: C.dark, marginBottom: 6, letterSpacing: '-0.1px' }}>
        {item.t}
      </p>
      <p style={{ fontSize: 13.5, lineHeight: 1.7, color: C.tx, margin: 0 }}>
        {item.d}
      </p>
    </div>
  );
}
