import { useState } from 'react';
import Reveal from './Reveal';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.552 4.101 1.518 5.828L0 24l6.335-1.489A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.031 21.75a9.71 9.71 0 01-4.945-1.355l-.355-.21-3.68.973.98-3.59-.231-.368a9.73 9.73 0 01-1.5-5.2c0-5.385 4.383-9.768 9.768-9.768s9.768 4.383 9.768 9.768-4.383 9.75-9.805 9.75zm5.35-7.312c-.293-.147-1.734-.856-2.003-.954-.269-.098-.465-.147-.66.147-.196.293-.758.954-.929 1.15-.171.196-.343.22-.635.073-.293-.147-1.238-.456-2.358-1.455-.872-.777-1.461-1.737-1.632-2.03-.171-.293-.018-.451.129-.598.132-.132.293-.343.44-.514.147-.171.196-.293.293-.489.098-.196.049-.367-.024-.514-.073-.147-.66-1.59-.904-2.178-.238-.573-.48-.495-.66-.504-.171-.008-.367-.01-.563-.01s-.514.073-.783.367c-.269.293-1.026 1.003-1.026 2.445s1.05 2.837 1.196 3.033c.147.196 2.066 3.156 5.007 4.427.699.302 1.245.482 1.671.617.702.223 1.341.192 1.847.117.563-.084 1.734-.709 1.979-1.394.244-.685.244-1.272.171-1.394-.073-.122-.269-.196-.563-.343z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M4 12l6 6L20 6" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.79 24 17.29 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.37 4.25 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { icon: <IconGithub />, href: 'https://github.com/KameyhaFacundo', label: 'GitHub' },
  { icon: <IconLinkedin />, href: 'https://www.linkedin.com/in/facundo-kameyha/', label: 'LinkedIn' },
];

export default function Contacto({ t }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const f = t.form;

  const CONTACT_ITEMS = [
    {
      icon: <IconMail />,
      label: t.emailLabel,
      value: 'kamexsolutions@gmail.com',
      href: 'mailto:kamexsolutions@gmail.com',
    },
    {
      icon: <IconPin />,
      label: t.locationLabel,
      value: t.locationValue,
    },
    {
      icon: <IconClock />,
      label: t.responseLabel,
      value: t.responseValue,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const nombre = data.get('nombre')?.trim();
    const email = data.get('email')?.trim();
    const mensaje = data.get('mensaje')?.trim();

    if (!nombre || !email || !mensaje) {
      setError(f.errorRequired);
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError(f.errorEmail);
      return;
    }

    // TODO: conectar acá el envío real (Formspree, EmailJS o un endpoint propio)
    setError('');
    setSent(true);
    e.target.reset();
  };

  return (
    <section id="contacto">
      <div className="contact-grid">
        <Reveal>
          <div className="cta">
            <span className="section-tag">{t.tag}</span>
            <h2>
              {t.titleBefore}<em>{t.titleEm}</em>{t.titleAfter}
            </h2>
            <p>{t.paragraph}</p>
          </div>

          <div className="contact-info">
            {CONTACT_ITEMS.map((item) => (
              <div className="contact-info__item" key={item.label}>
                <span className="contact-info__icon">{item.icon}</span>
                <div>
                  <span className="contact-info__label">{item.label}</span>
                  {item.href ? (
                    <a className="contact-info__value" href={item.href}>{item.value}</a>
                  ) : (
                    <span className="contact-info__value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-social">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener"
                aria-label={item.label}
                title={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div>
                  <label htmlFor="nombre">{f.nameLabel}</label>
                  <input type="text" id="nombre" name="nombre" required />
                </div>
                <div>
                  <label htmlFor="email">{f.emailLabel}</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div>
                <label htmlFor="empresa">{f.companyLabel}</label>
                <input type="text" id="empresa" name="empresa" />
              </div>
              <div>
                <label htmlFor="servicio">{f.serviceLabel}</label>
                <select id="servicio" name="servicio" defaultValue="">
                  <option value="" disabled>{f.servicePlaceholder}</option>
                  {f.serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="mensaje">{f.messageLabel}</label>
                <textarea id="mensaje" name="mensaje" required />
              </div>

              {error && <p className="form-error">{error}</p>}

              <button type="submit" className="submit-btn">{f.submit}</button>

              {sent && (
                <p className="form-success">
                  <span className="form-success__icon"><IconCheck /></span>
                  {f.success}
                </p>
              )}

              <div className="or-divider">{f.orDivider}</div>

              <a
                href="https://wa.me/5493815069332"
                target="_blank"
                rel="noopener"
                className="whatsapp-link"
              >
                <IconWhatsapp />
                {f.whatsapp}
              </a>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
