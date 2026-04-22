import C from '../lib/colors';

export default function SectionTitle({ children, subtitle }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 36 }}>
      <h2 style={{
        fontSize: 'clamp(22px, 4vw, 32px)',
        fontWeight: 750,
        color: C.dark,
        marginBottom: subtitle ? 10 : 0,
        lineHeight: 1.2,
      }}>
        {children}
      </h2>
      {subtitle && (
        <p style={{ fontSize: 15, color: C.tl, maxWidth: 560, margin: '0 auto' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
