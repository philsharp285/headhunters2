import C from '../lib/colors';

export default function Card({ children, onClick, style = {} }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: C.card,
        border: `1px solid ${C.bd}`,
        borderRadius: 10,
        padding: '20px 18px',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
