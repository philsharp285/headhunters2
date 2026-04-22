import Link from 'next/link';
import C from '../lib/colors';

export default function RelatedLinks({ links, heading = 'Related Reading' }) {
  if (!links || links.length === 0) return null;
  return (
    <div style={{
      background: C.bl,
      border: `1px solid ${C.bd}`,
      borderLeft: `4px solid ${C.gold}`,
      borderRadius: 10,
      padding: '20px 24px',
      marginBottom: 44,
    }}>
      <p style={{
        fontSize: 11,
        fontWeight: 700,
        color: C.tl,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: 14,
      }}>
        {heading}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: C.accent,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 8,
              lineHeight: 1.4,
            }}
          >
            <span style={{ flexShrink: 0, marginTop: 1 }}>→</span>
            <span style={{ borderBottom: `1px solid transparent`, transition: 'border-color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = C.accent}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
