import C from '../lib/colors';

export default function GoldBtn({ children, onClick, small = false, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: C.gold,
        color: C.dark,
        fontWeight: 700,
        borderRadius: 6,
        padding: small ? '7px 14px' : '11px 22px',
        fontSize: small ? 13 : 15,
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
        transition: 'opacity 0.15s',
        ...style,
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
    >
      {children}
    </button>
  );
}
