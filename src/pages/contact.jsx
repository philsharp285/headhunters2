import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import C from '../lib/colors';

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
      '@id': 'https://headhunters.co.uk/contact/',
      name: 'Brief a Headhunter',
      url: 'https://headhunters.co.uk/contact/',
      publisher: { '@id': 'https://headhunters.co.uk/#org' },
    },
  ],
};

const SALARY_OPTIONS = [
  'Under £100,000',
  '£100,000 – £150,000',
  '£150,000 – £200,000',
  '£200,000 – £300,000',
  '£300,000 – £500,000',
  '£500,000+',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    salary: '',
    message: '',
    callback: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: null }));
  }

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address';
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Layout
        title="Brief Received — headhunters.co.uk"
        description="Your brief has been received. A specialist consultant will be in touch within 2 hours."
      >
        <div style={{ minHeight: 'calc(100vh - 52px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
          <div style={{
            maxWidth: 480,
            width: '100%',
            background: C.card,
            border: `1px solid ${C.bd}`,
            borderRadius: 16,
            padding: '44px 36px',
            textAlign: 'center',
            boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
          }}>
            <div style={{
              width: 72, height: 72,
              borderRadius: '50%',
              background: `${C.ok}14`,
              border: `2px solid ${C.ok}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
              fontSize: 32,
            }}>
              ✅
            </div>
            <h1 style={{ fontSize: 24, fontWeight: 800, color: C.dark, marginBottom: 12, lineHeight: 1.2 }}>
              Brief Received
            </h1>
            <p style={{ fontSize: 15, color: C.tx, lineHeight: 1.7, marginBottom: 10 }}>
              Thank you, <strong>{form.name.split(' ')[0]}</strong>. A specialist consultant will review your brief and be in touch within 2 hours.
            </p>
            <div style={{
              background: `${C.gold}12`,
              border: `1px solid ${C.gold}40`,
              borderRadius: 8,
              padding: '12px 16px',
              marginBottom: 28,
            }}>
              <p style={{ fontSize: 13, color: C.dark, margin: 0, lineHeight: 1.6 }}>
                Monday–Friday, 8am–7pm. All enquiries are handled in strict confidence.
              </p>
            </div>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <button style={{
                background: C.accent,
                color: '#fff',
                fontWeight: 700,
                borderRadius: 8,
                padding: '12px 24px',
                fontSize: 14,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}>
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title="Brief a Headhunter — headhunters.co.uk"
      description="Send a brief to a specialist executive search consultant. Confidential, no obligation, typical response within 2 hours."
      canonical="https://headhunters.co.uk/contact/"
      schema={SCHEMA}
    >
      <div style={{ background: `linear-gradient(135deg, ${C.dark} 0%, ${C.navy} 100%)`, padding: '48px 24px 44px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: `${C.gold}20`,
            border: `1px solid ${C.gold}50`,
            borderRadius: 99,
            padding: '7px 16px',
            marginBottom: 18,
          }}>
            <span style={{ fontSize: 14 }}>⚡</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.gold }}>Typical response within 2 hours</span>
          </div>
          <h1 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.15 }}>
            Brief a Headhunter
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.68)', lineHeight: 1.6 }}>
            Monday–Friday, 8am–7pm · Strictly confidential · No obligation
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '44px 24px 60px' }}>
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Field label="Your Name *" error={errors.name}>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Sarah Thompson"
                  style={inputStyle(errors.name)}
                />
              </Field>
              <Field label="Email Address *" error={errors.email}>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="sarah@company.com"
                  style={inputStyle(errors.email)}
                />
              </Field>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Field label="Company">
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Acme Ltd"
                  style={inputStyle()}
                />
              </Field>
              <Field label="Role You Are Hiring For">
                <input
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  placeholder="e.g. Chief Financial Officer"
                  style={inputStyle()}
                />
              </Field>
            </div>

            <Field label="Approximate Salary">
              <select
                name="salary"
                value={form.salary}
                onChange={handleChange}
                style={{ ...inputStyle(), color: form.salary ? C.dark : C.tl }}
              >
                <option value="" disabled>Select a range…</option>
                {SALARY_OPTIONS.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </Field>

            <Field label="Tell Us About the Role">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Any context about the organisation, the brief, or the challenges you're facing is helpful. All information is treated in strict confidence."
                rows={5}
                style={{ ...inputStyle(), resize: 'vertical', lineHeight: 1.6 }}
              />
            </Field>

            <label style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              cursor: 'pointer',
              padding: '14px 16px',
              background: form.callback ? `${C.gold}10` : C.bl,
              border: `1.5px solid ${form.callback ? C.gold : C.bd}`,
              borderRadius: 9,
              transition: 'background 0.15s, border-color 0.15s',
            }}>
              <input
                type="checkbox"
                name="callback"
                checked={form.callback}
                onChange={handleChange}
                style={{ marginTop: 2, accentColor: C.gold, width: 16, height: 16, flexShrink: 0, cursor: 'pointer' }}
              />
              <span style={{ fontSize: 14, color: C.tx, lineHeight: 1.5 }}>
                <strong>Please call me back within 2 hours</strong>
                <span style={{ display: 'block', fontSize: 12.5, color: C.tl, marginTop: 2 }}>
                  A consultant will call the contact number associated with your email, or you can add a number in the message field.
                </span>
              </span>
            </label>

            <button
              type="submit"
              style={{
                background: C.gold,
                color: C.dark,
                fontWeight: 700,
                borderRadius: 9,
                padding: '15px 28px',
                fontSize: 16,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                letterSpacing: '0.01em',
                transition: 'opacity 0.15s, transform 0.12s',
                marginTop: 4,
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
            >
              Submit Brief →
            </button>

            <p style={{ fontSize: 12, color: C.tl, textAlign: 'center', lineHeight: 1.6 }}>
              By submitting this form you agree to us contacting you regarding your enquiry. All information is handled in strict confidence and never shared with third parties.
            </p>
          </div>
        </form>

        <div style={{ marginTop: 44, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
          {[
            { icon: '⚡', heading: '2-hour response', note: 'Mon–Fri, 8am–7pm' },
            { icon: '🔒', heading: 'Strictly confidential', note: 'Never shared with third parties' },
            { icon: '💬', heading: 'No obligation', note: 'Exploratory conversations welcome' },
          ].map(item => (
            <div key={item.heading} style={{
              background: C.card,
              border: `1px solid ${C.bd}`,
              borderRadius: 10,
              padding: '18px 16px',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: 22, marginBottom: 8 }}>{item.icon}</p>
              <p style={{ fontSize: 13.5, fontWeight: 700, color: C.dark, marginBottom: 4 }}>{item.heading}</p>
              <p style={{ fontSize: 12, color: C.tl }}>{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

function Field({ label, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 13, fontWeight: 600, color: C.dark }}>{label}</label>
      {children}
      {error && <p style={{ fontSize: 12, color: C.red, margin: 0 }}>{error}</p>}
    </div>
  );
}

function inputStyle(error) {
  return {
    width: '100%',
    padding: '11px 14px',
    borderRadius: 8,
    border: `1.5px solid ${error ? C.red : C.bd}`,
    fontSize: 14,
    fontFamily: 'inherit',
    color: C.dark,
    background: '#fff',
    outline: 'none',
    transition: 'border-color 0.15s',
    boxSizing: 'border-box',
  };
}
