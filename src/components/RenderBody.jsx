import Link from 'next/link';
import C from '../lib/colors';

function parseLine(line) {
  const parts = [];
  // Combined regex: bold **text** or link [[text|/href/]]
  const regex = /\*\*(.+?)\*\*|\[\[(.+?)\|(.+?)\]\]/g;
  let last = 0;
  let match;
  while ((match = regex.exec(line)) !== null) {
    if (match.index > last) parts.push(line.slice(last, match.index));
    if (match[1] !== undefined) {
      parts.push(<strong key={match.index}>{match[1]}</strong>);
    } else {
      parts.push(
        <Link
          key={match.index}
          href={match[3]}
          style={{ color: C.accent, fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 2 }}
        >
          {match[2]}
        </Link>
      );
    }
    last = match.index + match[0].length;
  }
  if (last < line.length) parts.push(line.slice(last));
  return parts;
}

function isTableRow(line) {
  return line.trim().startsWith('|');
}

function parseTable(lines) {
  const rows = lines.map(l =>
    l.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim())
  );
  const header = rows[0];
  const body = rows.filter((_, i) => i !== 0 && !rows[i].every(c => /^[-:]+$/.test(c)));

  return (
    <div style={{ overflowX: 'auto', margin: '16px 0' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr>
            {header.map((h, i) => (
              <th key={i} style={{
                background: C.dark,
                color: '#fff',
                padding: '8px 12px',
                textAlign: 'left',
                fontWeight: 600,
                fontSize: 13,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? '#fff' : C.bl }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: '7px 12px',
                  borderBottom: `1px solid ${C.bd}`,
                  fontSize: 13,
                  color: C.tx,
                }}>{parseLine(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function RenderBody({ text }) {
  if (!text) return null;

  const blocks = text.split(/\n\n+/);
  const elements = [];

  let i = 0;
  while (i < blocks.length) {
    const block = blocks[i];
    const blockLines = block.split('\n');

    if (blockLines.some(isTableRow)) {
      elements.push(<div key={i}>{parseTable(blockLines)}</div>);
    } else {
      elements.push(
        <p key={i} style={{ fontSize: 14, lineHeight: 1.75, color: C.tx, marginBottom: 14 }}>
          {parseLine(block)}
        </p>
      );
    }
    i++;
  }

  return <div>{elements}</div>;
}
