import C from '../lib/colors';

export default function Btn({ children, onClick, variant = 'primary', small = false, style = {} }) {
  const variants = {
    primary: { background: C.accent, color: '#fff', border: 'none' },
    gold: { background: C.gold, color: C.dark, border: 'none' },
    outline: { background: 'transparent', color: C.accent, border: `1.5px solid ${C.accent}` },
  };

  const v = variants[variant] || variants.primary;

  return (
    <button
      onClick={onClick}
      style={{
        ...v,
        fontWeight: 600,
        borderRadius: 6,
        padding: small ? '7px 14px' : '11px 22px',
        fontSize: small ? 13 : 15,
        cursor: 'pointer',
        fontFamily: 'inherit',
        transition: 'opacity 0.15s',
        ...style,
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
    >
      {children}
    </button>
  );
}
