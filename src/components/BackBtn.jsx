import Link from 'next/link';
import C from '../lib/colors';

export default function BackBtn({ href, label }) {
  return (
    <Link
      href={href}
      style={{
        color: C.accent,
        textDecoration: 'none',
        fontSize: 14,
        fontWeight: 500,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
      }}
    >
      ← {label}
    </Link>
  );
}
