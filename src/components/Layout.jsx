import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import C from '../lib/colors';

const NAV_LINKS = [
  { label: 'Guides', href: '/guides/' },
  { label: 'Comparisons', href: '/comparisons/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Sectors', href: '/sectors/' },
  { label: 'Locations', href: '/locations/' },
  { label: 'Resources', href: '/resources/' },
];

const FOOTER_EXTRA_LINKS = [
  { label: 'Glossary', href: '/glossary/' },
  { label: 'Statistics', href: '/statistics/' },
];

const HOW_TO_HIRE_LINKS = [
  { label: 'How to Hire a CEO', href: '/hire/ceo-headhunters/' },
  { label: 'How to Hire a Managing Director', href: '/hire/managing-director-headhunters/' },
  { label: 'How to Hire a CFO', href: '/hire/cfo-headhunters/' },
  { label: 'How to Hire a CTO', href: '/hire/cto-headhunters/' },
  { label: 'How to Hire a COO', href: '/hire/coo-headhunters/' },
  { label: 'How to Hire a CMO', href: '/hire/cmo-headhunters/' },
  { label: 'How to Hire a CRO', href: '/hire/cro-headhunters/' },
  { label: 'NED & Board Chair', href: '/hire/ned-headhunters/' },
  { label: 'PE-Backed Companies', href: '/hire/pe-backed-company-headhunters/' },
  { label: 'Confidential Search', href: '/hire/confidential-executive-search/' },
];

const CTA_LINKS = [
  { label: 'Do I Need a Headhunter?', href: '/quiz/' },
  { label: 'Fee Estimator', href: '/estimator/' },
  { label: 'Brief a Headhunter', href: '/brief/' },
];

const ALL_MOBILE_LINKS = [
  { label: 'Home', href: '/' },
  ...NAV_LINKS,
  { label: '— How to Hire —', href: null, divider: true },
  ...HOW_TO_HIRE_LINKS,
  { label: '— Tools —', href: null, divider: true },
  ...CTA_LINKS,
  { label: '— More —', href: null, divider: true },
  ...FOOTER_EXTRA_LINKS,
];

export default function Layout({ title, description, canonical, schema, ogType = 'website', children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);
  const dropdownRef = useRef(null);

  const fullTitle = title ? `${title} | headhunters.co.uk` : 'headhunters.co.uk';

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setHireOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
        <meta property="og:site_name" content="headhunters.co.uk" />
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={fullTitle} />
        {description && <meta property="og:description" content={description} />}
        {canonical && <meta property="og:url" content={canonical} />}
        <meta property="og:locale" content="en_GB" />
        <meta property="og:image" content="https://headhunters.co.uk/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        {description && <meta name="twitter:description" content={description} />}
        <meta name="twitter:image" content="https://headhunters.co.uk/og-image.png" />
        {canonical && <link rel="canonical" href={canonical} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1A1A2E" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
      </Head>

      <div style={{ fontFamily: "'Inter', sans-serif", background: C.bg, minHeight: '100vh' }}>
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 52,
          background: 'rgba(26,26,46,0.97)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          boxShadow: '0 1px 0 rgba(255,255,255,0.06)',
        }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 17, letterSpacing: '-0.3px' }}>headhunters</span>
            <span style={{ color: C.gold, fontWeight: 700, fontSize: 17 }}>.co.uk</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'nowrap' }}>
            <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: 'rgba(255,255,255,0.82)',
                    fontWeight: 400,
                    fontSize: 12.5,
                    textDecoration: 'none',
                    padding: '4px 7px',
                    borderRadius: 4,
                    whiteSpace: 'nowrap',
                    transition: 'color 0.15s',
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <div ref={dropdownRef} style={{ position: 'relative' }}>
                <button
                  onClick={() => setHireOpen(o => !o)}
                  style={{
                    color: hireOpen ? '#fff' : 'rgba(255,255,255,0.82)',
                    fontWeight: 400,
                    fontSize: 12.5,
                    background: 'none',
                    border: 'none',
                    padding: '4px 7px',
                    borderRadius: 4,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    fontFamily: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    transition: 'color 0.15s',
                  }}
                >
                  How to Hire
                  <span style={{ fontSize: 9, opacity: 0.7, display: 'inline-block', transition: 'transform 0.15s', transform: hireOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                </button>

                {hireOpen && (
                  <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 4px)',
                    left: 0,
                    background: 'rgba(22,33,62,0.99)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 8,
                    padding: '8px 0',
                    minWidth: 220,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                    zIndex: 200,
                  }}>
                    {HOW_TO_HIRE_LINKS.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setHireOpen(false)}
                        style={{
                          display: 'block',
                          color: 'rgba(255,255,255,0.82)',
                          fontSize: 13,
                          textDecoration: 'none',
                          padding: '8px 16px',
                          whiteSpace: 'nowrap',
                          transition: 'background 0.12s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {CTA_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: C.gold,
                    fontWeight: 600,
                    fontSize: 12.5,
                    textDecoration: 'none',
                    padding: '4px 7px',
                    borderRadius: 4,
                    whiteSpace: 'nowrap',
                    transition: 'color 0.15s',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(o => !o)}
              className="hamburger-btn"
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: 22,
                cursor: 'pointer',
                padding: '4px 6px',
                lineHeight: 1,
                display: 'none',
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div style={{
            position: 'fixed',
            top: 52,
            left: 0,
            right: 0,
            zIndex: 99,
            background: 'rgba(22,33,62,0.99)',
            padding: '8px 0 12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            maxHeight: 'calc(100vh - 52px)',
            overflowY: 'auto',
          }}>
            {ALL_MOBILE_LINKS.map((link, i) => {
              if (link.divider) {
                return (
                  <div key={i} style={{
                    padding: '8px 24px 4px',
                    fontSize: 10,
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.35)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    borderTop: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    marginTop: i > 0 ? 6 : 0,
                  }}>
                    {link.label.replace(/—/g, '').trim()}
                  </div>
                );
              }
              const isCta = CTA_LINKS.some(c => c.href === link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block',
                    color: isCta ? C.gold : 'rgba(255,255,255,0.88)',
                    fontWeight: isCta ? 600 : 400,
                    fontSize: 14,
                    textDecoration: 'none',
                    padding: '9px 24px',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}

        <div style={{ paddingTop: 52 }}>
          {children}
        </div>

        <footer style={{
          background: C.dark,
          color: 'rgba(255,255,255,0.7)',
          padding: '48px 24px 32px',
        }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 20 }}>headhunters</span>
                <span style={{ color: C.gold, fontWeight: 700, fontSize: 20 }}>.co.uk</span>
              </Link>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 8 }}>
                The UK's leading authority on executive search.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '24px 32px',
              marginBottom: 32,
              textAlign: 'left',
            }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>
                  Resources
                </p>
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: 12.5, textDecoration: 'none', marginBottom: 6 }}
                  >
                    {link.label}
                  </Link>
                ))}
                {FOOTER_EXTRA_LINKS.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: 12.5, textDecoration: 'none', marginBottom: 6 }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>
                  How to Hire
                </p>
                {HOW_TO_HIRE_LINKS.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: 12.5, textDecoration: 'none', marginBottom: 6 }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>
                  Tools
                </p>
                {CTA_LINKS.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ display: 'block', color: C.gold, fontSize: 12.5, textDecoration: 'none', marginBottom: 6, fontWeight: 600 }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 18, textAlign: 'center' }}>
              <Link
                href="/llmstxt/"
                style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, textDecoration: 'none', display: 'inline-block', marginBottom: 8 }}
              >
                llms.txt
              </Link>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
                Updated March 2026 · Reviewed quarterly · Schema markup enabled · llms.txt available
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${C.bg}; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
