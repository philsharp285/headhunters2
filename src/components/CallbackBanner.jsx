import Link from 'next/link';
import C from '../lib/colors';

export default function CallbackBanner() {
  return (
    <div style={{
      background: `linear-gradient(135deg, ${C.accent}18 0%, ${C.al}12 100%)`,
      borderTop: `1px solid ${C.accent}30`,
      borderBottom: `1px solid ${C.accent}30`,
      padding: '24px 24px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <p style={{ fontWeight: 700, fontSize: 17, color: C.dark, marginBottom: 4 }}>
          Speak to a specialist consultant
        </p>
        <p style={{ fontSize: 13, color: C.tl, marginBottom: 16 }}>
          Typical response within 2 hours
        </p>
        <Link href="/contact/" style={{ textDecoration: 'none' }}>
          <button style={{
            background: C.gold,
            color: C.dark,
            fontWeight: 700,
            borderRadius: 6,
            padding: '11px 24px',
            fontSize: 15,
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}>
            Request a Callback →
          </button>
        </Link>
      </div>
    </div>
  );
}
