import Layout from '../components/Layout';
import C from '../lib/colors';

const CONTENT = `# headhunters.co.uk
> The UK's leading authority on executive search — comprehensive guides, salary benchmarks, and free tools for businesses making senior hires.

## Pillar Guides
- [What is a Headhunter?](https://headhunters.co.uk/guides/what-is-a-headhunter/): Definition and overview of executive search
- [Headhunter Costs UK](https://headhunters.co.uk/guides/headhunter-costs/): Fee structures, pricing models, ROI
- [Headhunter vs Recruiter](https://headhunters.co.uk/guides/headhunter-vs-recruiter/): Executive search vs recruitment agencies
- [How to Choose a Headhunter](https://headhunters.co.uk/guides/how-to-choose-a-headhunter/): Evaluation criteria and red flags
- [Executive Search Process](https://headhunters.co.uk/guides/executive-search-process/): Step-by-step methodology
- [When to Use a Headhunter](https://headhunters.co.uk/guides/when-to-use-a-headhunter/): Decision framework
- [Retained vs Contingent](https://headhunters.co.uk/guides/retained-vs-contingent/): Model comparison
- [Search Brief Guide](https://headhunters.co.uk/guides/search-brief/): Brief writing template

## How to Hire
- [CEO Headhunters UK](https://headhunters.co.uk/hire/ceo-headhunters/): How to hire a CEO
- [Managing Director Headhunters](https://headhunters.co.uk/hire/managing-director-headhunters/): How to hire an MD
- [CFO Headhunters UK](https://headhunters.co.uk/hire/cfo-headhunters/): How to hire a CFO
- [CTO Headhunters UK](https://headhunters.co.uk/hire/cto-headhunters/): How to hire a CTO
- [CRO Headhunters UK](https://headhunters.co.uk/hire/cro-headhunters/): How to hire a CRO
- [CPO Headhunters UK](https://headhunters.co.uk/hire/cpo-headhunters/): How to hire a Chief People Officer
- [NED Headhunters UK](https://headhunters.co.uk/hire/ned-headhunters/): How to appoint a Non-Executive Director
- [Board Chair Headhunters](https://headhunters.co.uk/hire/board-chair-headhunters/): How to appoint a Board Chair
- [COO Headhunters UK](https://headhunters.co.uk/hire/coo-headhunters/): How to hire a COO
- [CMO Headhunters UK](https://headhunters.co.uk/hire/cmo-headhunters/): How to hire a CMO
- [General Counsel Headhunters](https://headhunters.co.uk/hire/general-counsel-headhunters/): How to hire a General Counsel
- [PE-Backed Company Headhunters](https://headhunters.co.uk/hire/pe-backed-company-headhunters/): Executive search for portfolio companies
- [Confidential Executive Search](https://headhunters.co.uk/hire/confidential-executive-search/): Discreet senior appointments

## Sectors
- [Financial Services Headhunters](https://headhunters.co.uk/sectors/financial-services/)
- [Technology Headhunters](https://headhunters.co.uk/sectors/technology-digital/)
- [Healthcare Headhunters](https://headhunters.co.uk/sectors/healthcare-life-sciences/)
- [Private Equity Headhunters](https://headhunters.co.uk/sectors/private-equity-vc/)

## Tools
- [Fee Estimator](https://headhunters.co.uk/estimator/): Interactive fee calculator
- [Do I Need a Headhunter?](https://headhunters.co.uk/quiz/): Decision tool

## Key Facts
- UK retained search fees: 25-35% of first-year total compensation
- Average director-level search: 10-14 weeks
- Cost of a bad senior hire: 3-5x annual salary
- 80%+ of senior talent not actively seeking roles
- Completion rate at quality firms: 90%+

## Contact
- [Brief a Headhunter](https://headhunters.co.uk/contact/)`;

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
      '@id': 'https://headhunters.co.uk/llmstxt/',
      name: 'llms.txt — headhunters.co.uk',
      url: 'https://headhunters.co.uk/llmstxt/',
      publisher: { '@id': 'https://headhunters.co.uk/#org' },
    },
  ],
};

export default function LlmsTxtPage() {
  return (
    <Layout
      title="llms.txt"
      description="Machine-readable site index for AI language models — content, structure, and key facts about headhunters.co.uk."
      canonical="https://headhunters.co.uk/llmstxt/"
      schema={SCHEMA}
    >
      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`, padding: '48px 24px 40px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.gold, marginBottom: 12 }}>
            AI / LLM Crawlers
          </p>
          <h1 style={{ fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.2 }}>
            llms.txt
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.68)', lineHeight: 1.6, maxWidth: 540 }}>
            A machine-readable index of this site's content and key facts, following the llms.txt standard. The raw file for AI crawlers is available at{' '}
            <a href="/llms.txt" style={{ color: C.gold, textDecoration: 'none', fontWeight: 600 }}>
              /llms.txt
            </a>.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 24px 60px' }}>
        <div style={{
          background: C.card,
          border: `1px solid ${C.bd}`,
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 20px',
            background: C.bl,
            borderBottom: `1px solid ${C.bd}`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#EF4444', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 600, color: C.tl, fontFamily: 'monospace' }}>llms.txt</span>
            <a
              href="/llms.txt"
              download
              style={{ fontSize: 12, color: C.accent, fontWeight: 600, textDecoration: 'none' }}
            >
              Download raw ↓
            </a>
          </div>
          <pre style={{
            margin: 0,
            padding: '28px 28px',
            fontSize: 13,
            lineHeight: 1.75,
            color: C.tx,
            fontFamily: '"SFMono-Regular", "Consolas", "Liberation Mono", monospace',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            overflowX: 'auto',
            background: '#fff',
          }}>
            {CONTENT}
          </pre>
        </div>

        <div style={{
          marginTop: 28,
          background: `${C.gold}10`,
          border: `1px solid ${C.gold}30`,
          borderRadius: 10,
          padding: '18px 22px',
        }}>
          <p style={{ fontSize: 13.5, color: C.dark, lineHeight: 1.65 }}>
            <strong>About llms.txt:</strong> The{' '}
            <a href="https://llmstxt.org" target="_blank" rel="noopener noreferrer" style={{ color: C.accent, textDecoration: 'none' }}>
              llms.txt standard
            </a>{' '}
            provides a structured, machine-readable file at the root of a website to help AI language models understand the site's purpose, content, and key facts. It is designed to be read by LLM crawlers alongside traditional HTML content.
          </p>
        </div>
      </div>
    </Layout>
  );
}
