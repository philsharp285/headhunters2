import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import CallbackBanner from '../components/CallbackBanner';
import C from '../lib/colors';
import HIRE_PAGES from '../data/hire-pages';
import ALL_GUIDES from '../data/guides';
import ALL_SECTORS from '../data/sectors';

const GUIDE_CARDS = ALL_GUIDES.slice(0, 8).map(g => ({ slug: g.slug, title: g.title, subtitle: g.subtitle }));

const SECTORS = ALL_SECTORS;

const SALARY_DATA = [
  { role: 'CEO', entry: '£100k', mid: '£220k', senior: '£500k+' },
  { role: 'CFO', entry: '£80k', mid: '£160k', senior: '£350k+' },
  { role: 'COO', entry: '£80k', mid: '£155k', senior: '£320k+' },
  { role: 'CTO', entry: '£85k', mid: '£160k', senior: '£340k+' },
  { role: 'CMO', entry: '£75k', mid: '£130k', senior: '£260k+' },
  { role: 'CPO', entry: '£75k', mid: '£125k', senior: '£230k+' },
  { role: 'CHRO', entry: '£75k', mid: '£120k', senior: '£220k+' },
  { role: 'CRO', entry: '£75k', mid: '£135k', senior: '£260k+' },
  { role: 'Sales Director', entry: '£70k', mid: '£110k', senior: '£200k+' },
  { role: 'MD', entry: '£80k', mid: '£150k', senior: '£320k+' },
  { role: 'Finance Director', entry: '£70k', mid: '£105k', senior: '£190k+' },
];

const FAQS = [
  {
    q: 'What is the difference between a headhunter and a recruiter?',
    a: 'A headhunter (executive search consultant) proactively identifies and approaches passive candidates who are not actively looking for a new role. A recruiter typically works from a database of active job-seekers. Headhunters operate on a retained basis and focus exclusively on senior appointments, usually Director level and above.',
  },
  {
    q: 'How much does a headhunter charge in the UK?',
    a: 'Most UK executive search firms charge between 25% and 35% of the first-year base salary. Retained searches typically involve three staged payments: on engagement, at shortlist, and on placement. For roles above £150k, fees commonly fall in the 28%–33% range.',
  },
  {
    q: 'How long does an executive search take?',
    a: 'A typical UK executive search takes 10–16 weeks from briefing to offer acceptance. The search phase (weeks 1–6) involves mapping, outreach and longlisting. Shortlisting and interviews occupy weeks 6–12. Offer, negotiation and notice periods add 4–12 weeks before the candidate starts.',
  },
  {
    q: 'Do headhunters guarantee placements?',
    a: 'Most retained executive search firms offer a rebate or free repeat search guarantee, typically valid for 6–12 months if the placed candidate leaves voluntarily or is dismissed for performance reasons. Terms vary considerably, so it is worth confirming the guarantee in the engagement letter.',
  },
  {
    q: 'When should I use a headhunter instead of a recruitment agency?',
    a: 'Use a headhunter when the role is confidential, strategically critical, or unlikely to attract strong applicants through job boards. Executive search is particularly valuable for board-level, C-suite and senior functional leadership positions where the best candidates are rarely active in the market.',
  },
  {
    q: 'What is retained executive search?',
    a: 'Retained search is a model where the client pays a portion of the fee upfront to secure exclusive commitment from the search firm. It signals seriousness, enables deeper market mapping, and aligns incentives toward finding the best candidate rather than the fastest placement.',
  },
];

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
      '@type': 'WebSite',
      '@id': 'https://headhunters.co.uk/#website',
      url: 'https://headhunters.co.uk',
      name: 'headhunters.co.uk',
      publisher: { '@id': 'https://headhunters.co.uk/#org' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://headhunters.co.uk/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderBottom: `1px solid ${C.bd}`,
      overflow: 'hidden',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          padding: '16px 0',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
          fontFamily: 'inherit',
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: C.dark }}>{q}</span>
        <span style={{
          fontSize: 20,
          color: C.accent,
          flexShrink: 0,
          lineHeight: 1,
          transform: open ? 'rotate(45deg)' : 'none',
          transition: 'transform 0.2s',
        }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: 14, lineHeight: 1.75, color: C.tx, paddingBottom: 16, paddingRight: 28 }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="The UK's Authority on Executive Search"
      description="headhunters.co.uk is the UK's leading resource for executive search, headhunting guides, salary benchmarks, fee calculators and sector expertise."
      canonical="https://headhunters.co.uk/"
      schema={SCHEMA}
    >
      {/* Hero */}
      <section style={{
        background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 50%, ${C.accent} 100%)`,
        padding: '80px 24px 72px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block',
            background: `${C.gold}22`,
            border: `1px solid ${C.gold}60`,
            color: C.gold,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '5px 14px',
            borderRadius: 20,
            marginBottom: 22,
          }}>
            UK's Leading Executive Search Resource
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 52px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.12,
            marginBottom: 20,
            letterSpacing: '-0.5px',
          }}>
            The UK's Authority on{' '}
            <span style={{ color: C.gold }}>Executive Search</span>
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'rgba(255,255,255,0.78)',
            marginBottom: 36,
            lineHeight: 1.6,
            maxWidth: 580,
            margin: '0 auto 36px',
          }}>
            Guides, salary benchmarks, fee calculators and expert resources to help UK organisations find and appoint exceptional senior leaders.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/estimator/" style={{ textDecoration: 'none' }}>
              <button style={{
                background: C.gold, color: C.dark, fontWeight: 700,
                borderRadius: 6, padding: '13px 26px', fontSize: 15,
                border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              }}>
                Get a Fee Estimate →
              </button>
            </Link>
            <Link href="/quiz/" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'rgba(255,255,255,0.12)', color: '#fff', fontWeight: 600,
                borderRadius: 6, padding: '13px 26px', fontSize: 15,
                border: '1.5px solid rgba(255,255,255,0.3)', cursor: 'pointer', fontFamily: 'inherit',
              }}>
                Do I Need a Headhunter?
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gold callback strip */}
      <div style={{
        background: C.gold,
        padding: '16px 24px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        flexWrap: 'wrap',
      }}>
        <span style={{ fontWeight: 700, fontSize: 15, color: C.dark }}>
          Ready to start your search?
        </span>
        <Link href="/contact/" style={{ textDecoration: 'none' }}>
          <button style={{
            background: C.dark, color: '#fff', fontWeight: 700,
            borderRadius: 6, padding: '9px 20px', fontSize: 14,
            border: 'none', cursor: 'pointer', fontFamily: 'inherit',
          }}>
            Request a Callback — 2 hour response →
          </button>
        </Link>
      </div>

      {/* Knowledge Hub */}
      <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <SectionTitle subtitle="Authoritative guides written for HR Directors, CEOs and Chairs navigating senior hiring.">
          Knowledge Hub
        </SectionTitle>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 18,
        }}>
          {GUIDE_CARDS.map(g => (
            <Link key={g.slug} href={`/guides/${g.slug}/`} style={{ textDecoration: 'none' }}>
              <Card style={{ height: '100%', transition: 'box-shadow 0.15s, transform 0.15s' }}
                onClick={undefined}>
                <p style={{ fontSize: 12, color: C.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
                  Guide
                </p>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: C.dark, marginBottom: 8, lineHeight: 1.35 }}>
                  {g.title}
                </h3>
                <p style={{ fontSize: 13, color: C.tl, lineHeight: 1.55 }}>{g.subtitle}</p>
                <p style={{ fontSize: 13, color: C.accent, fontWeight: 600, marginTop: 14 }}>Read guide →</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <CallbackBanner />

      {/* Free Tools */}
      <section style={{ padding: '64px 24px', background: C.bl }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionTitle subtitle="Free interactive tools to support your executive hiring decisions.">
            Free Tools
          </SectionTitle>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {[
              {
                href: '/estimator/',
                icon: '£',
                title: 'Fee Estimator',
                desc: 'Calculate the likely retained search fee for your role based on salary, sector and seniority.',
                cta: 'Estimate my fee →',
              },
              {
                href: '/quiz/',
                icon: '?',
                title: 'Do I Need a Headhunter?',
                desc: 'Answer 6 questions to find out whether your hire warrants retained executive search or a different approach.',
                cta: 'Take the quiz →',
              },
              {
                href: '/brief/',
                icon: '✎',
                title: 'Brief a Headhunter',
                desc: 'Submit your search brief directly. A specialist consultant will respond within 2 hours on business days.',
                cta: 'Submit a brief →',
              },
            ].map(tool => (
              <Link key={tool.href} href={tool.href} style={{ textDecoration: 'none' }}>
                <Card style={{ height: '100%' }}>
                  <div style={{
                    width: 40, height: 40, background: C.accent, borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: 800, fontSize: 18, marginBottom: 14,
                  }}>
                    {tool.icon}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.dark, marginBottom: 8 }}>{tool.title}</h3>
                  <p style={{ fontSize: 13.5, color: C.tl, lineHeight: 1.6, marginBottom: 16 }}>{tool.desc}</p>
                  <span style={{ fontSize: 13.5, color: C.accent, fontWeight: 600 }}>{tool.cta}</span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Salary Benchmarks */}
      <section style={{ padding: '64px 24px', maxWidth: 900, margin: '0 auto' }}>
        <SectionTitle subtitle="UK base salary ranges for senior executive roles. Figures are indicative and vary by sector, organisation size and location.">
          Executive Salary Benchmarks
        </SectionTitle>
        <div style={{ overflowX: 'auto', borderRadius: 10, border: `1px solid ${C.bd}`, background: C.card }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ background: C.dark }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 13 }}>Role</th>
                <th style={{ padding: '12px 16px', textAlign: 'right', color: '#fff', fontWeight: 700, fontSize: 13 }}>Entry / Mid-Market</th>
                <th style={{ padding: '12px 16px', textAlign: 'right', color: '#fff', fontWeight: 700, fontSize: 13 }}>Mid-Senior</th>
                <th style={{ padding: '12px 16px', textAlign: 'right', color: '#fff', fontWeight: 700, fontSize: 13 }}>Senior / FTSE</th>
              </tr>
            </thead>
            <tbody>
              {SALARY_DATA.map((row, i) => (
                <tr key={row.role} style={{ background: i % 2 === 0 ? '#fff' : C.bl }}>
                  <td style={{ padding: '10px 16px', fontWeight: 600, color: C.dark, fontSize: 13.5 }}>{row.role}</td>
                  <td style={{ padding: '10px 16px', textAlign: 'right', color: C.tx, fontSize: 13.5 }}>{row.entry}</td>
                  <td style={{ padding: '10px 16px', textAlign: 'right', color: C.tx, fontSize: 13.5 }}>{row.mid}</td>
                  <td style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 600, color: C.ok, fontSize: 13.5 }}>{row.senior}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12, color: C.tl, marginTop: 12, textAlign: 'center' }}>
          Base salary only. Total remuneration including bonus, LTIP and benefits may be significantly higher.
        </p>
      </section>

      {/* Sectors */}
      <section style={{ padding: '64px 24px', background: C.bl }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionTitle subtitle="Explore executive search and headhunting expertise by industry sector across the UK.">
            Executive Search by Sector
          </SectionTitle>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 14,
          }}>
            {SECTORS.map(sector => (
              <Link
                key={sector.id}
                href={`/sectors/${sector.id}/`}
                style={{ textDecoration: 'none' }}
              >
                <Card style={{ padding: '20px 18px', height: '100%' }}>
                  <div style={{ fontSize: 28, lineHeight: 1, marginBottom: 10 }}>{sector.icon}</div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: C.dark, lineHeight: 1.3, marginBottom: 6 }}>{sector.name}</p>
                  <p style={{ fontSize: 12, color: C.tl, lineHeight: 1.5, marginBottom: 10 }}>{sector.desc}</p>
                  <p style={{ fontSize: 12, color: C.accent, fontWeight: 600 }}>Explore sector →</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Hire Executive Roles */}
      <section style={{ padding: '64px 24px', maxWidth: 1160, margin: '0 auto' }}>
        <SectionTitle subtitle="Complete guides with salary benchmarks, interview questions, and hiring strategies for every major C-suite and board-level role.">
          How to Hire Executive Roles
        </SectionTitle>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 18,
        }}>
          {HIRE_PAGES.map(page => (
            <Link key={page.slug} href={`/hire/${page.slug}/`} style={{ textDecoration: 'none' }}>
              <Card style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'box-shadow 0.15s, transform 0.15s',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 26, lineHeight: 1, flexShrink: 0 }}>{page.icon}</span>
                  <h3 style={{ fontSize: 14.5, fontWeight: 700, color: C.dark, lineHeight: 1.35 }}>
                    {page.title}
                  </h3>
                </div>
                <p style={{ fontSize: 12.5, color: C.tl, lineHeight: 1.6, marginBottom: 14, flex: 1 }}>
                  {page.intro.split('\n\n')[0].slice(0, 120)}…
                </p>
                <div style={{ borderTop: `1px solid ${C.bd}`, paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 11.5, color: C.tx }}>
                    <strong style={{ color: C.dark }}>Salary:</strong> {page.salaryRange.split(' depending')[0]}
                  </span>
                  <span style={{ fontSize: 11.5, color: C.tx }}>
                    <strong style={{ color: C.dark }}>Timeline:</strong> {page.timeline.split(' from')[0]}
                  </span>
                </div>
                <span style={{ fontSize: 12.5, color: C.accent, fontWeight: 600, marginTop: 12 }}>
                  Read guide →
                </span>
              </Card>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link href="/hire/" style={{ textDecoration: 'none' }}>
            <button style={{
              background: C.dark,
              color: '#fff',
              fontWeight: 600,
              borderRadius: 6,
              padding: '11px 24px',
              fontSize: 14,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}>
              View all hiring guides →
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '64px 24px', maxWidth: 760, margin: '0 auto' }}>
        <SectionTitle subtitle="Common questions about executive search and headhunting in the UK.">
          Frequently Asked Questions
        </SectionTitle>
        <div style={{ background: C.card, borderRadius: 10, border: `1px solid ${C.bd}`, padding: '8px 24px' }}>
          {FAQS.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      <CallbackBanner />
    </Layout>
  );
}
