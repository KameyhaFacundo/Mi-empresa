import { useState } from 'react';
import Reveal from './Reveal';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
            <span className="section-tag" style={{ display: 'block' }}>// Empecemos</span>
            <h2>
              Contame qué necesita <em>tu</em> negocio
            </h2>
            <p>Escribinos y te respondemos con una evaluación inicial de tu proyecto.</p>
          </div>
          <div className="contact-info">
            <div className="row"><span>Email</span><a href="mailto:kamexsolutions@gmail.com">kamexsolutions@gmail.com</a></div>
            <div className="row"><span>Ubicación</span><span>Argentina</span></div>
            <div className="row"><span>Tiempo de respuesta</span><span>Menos de 48 horas</span></div>
          </div>
        </Reveal>

        <Reveal>
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
              Escribir por WhatsApp
            </a>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
