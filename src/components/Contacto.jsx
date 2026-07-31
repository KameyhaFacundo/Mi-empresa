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

const CONTACT_ITEMS = [
  {
    icon: <IconMail />,
    label: 'Email',
    value: 'kamexsolutions@gmail.com',
    href: 'mailto:kamexsolutions@gmail.com',
  },
  {
    icon: <IconPin />,
    label: 'Ubicación',
    value: 'Argentina',
  },
  {
    icon: <IconClock />,
    label: 'Tiempo de respuesta',
    value: 'Menos de 48 horas',
  },
];

export default function Contacto() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const nombre = data.get('nombre')?.trim();
    const email = data.get('email')?.trim();
    const mensaje = data.get('mensaje')?.trim();

    if (!nombre || !email || !mensaje) {
      setError('Completá los campos obligatorios.');
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError('Ingresá un email válido.');
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
            <span className="section-tag">// Empecemos</span>
            <h2>
              Contame qué necesita <em>tu</em> negocio
            </h2>
            <p>Escribinos y te respondemos con una evaluación inicial de tu proyecto.</p>
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
        </Reveal>

        <Reveal>
          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div>
                  <label htmlFor="nombre">Nombre y apellido *</label>
                  <input type="text" id="nombre" name="nombre" required />
                </div>
                <div>
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div>
                <label htmlFor="empresa">Empresa</label>
                <input type="text" id="empresa" name="empresa" />
              </div>
              <div>
                <label htmlFor="servicio">¿Qué necesitás?</label>
                <select id="servicio" name="servicio" defaultValue="">
                  <option value="" disabled>Seleccioná un servicio</option>
                  <option>Desarrollo de software a medida</option>
                  <option>Punto de venta (POS)</option>
                  <option>Integraciones a medida</option>
                  <option>Automatización de procesos</option>
                  <option>Consultoría tecnológica</option>
                  <option>Soporte y mantenimiento</option>
                  <option>Otro / No sé bien todavía</option>
                </select>
              </div>
              <div>
                <label htmlFor="mensaje">Contanos tu proyecto *</label>
                <textarea id="mensaje" name="mensaje" required />
              </div>

              {error && <p className="form-error">{error}</p>}

              <button type="submit" className="submit-btn">Enviar mensaje</button>

              {sent && (
                <p className="form-success">
                  <span className="form-success__icon"><IconCheck /></span>
                  ¡Gracias! Recibimos tu mensaje y te vamos a contactar a la brevedad.
                </p>
              )}

              <div className="or-divider">o escribinos directo</div>

              <a
                href="https://wa.me/5493815069332"
                target="_blank"
                rel="noopener"
                className="whatsapp-link"
              >
                <IconWhatsapp />
                Escribir por WhatsApp
              </a>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
