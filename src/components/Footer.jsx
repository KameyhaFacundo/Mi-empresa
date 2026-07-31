const SERVICIOS = [
  'Sistemas de gestión',
  'Punto de venta (POS)',
  'Integraciones a medida',
  'Automatización de procesos',
  'Consultoría tecnológica',
  'Soporte y mantenimiento',
];

const EMPRESA = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Un caso real', href: '#caso' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="logo">Kamex Soluciones</span>
          <p>
            Software a medida, sin plantillas, para negocios que necesitan sistemas
            sólidos y gente que responda.
          </p>
          <div className="stack-badges">
            <span className="badge">React</span>
            <span className="badge">Laravel</span>
            <span className="badge">MySQL</span>
          </div>
        </div>

        <div className="footer-col">
          <span className="footer-col__title mono">Servicios</span>
          <ul>
            {SERVICIOS.map((s) => (
              <li key={s}><a href="#servicios">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <span className="footer-col__title mono">Empresa</span>
          <ul>
            {EMPRESA.map((item) => (
              <li key={item.href}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <span className="footer-col__title mono">Contacto</span>
          <ul>
            <li><a href="mailto:kamexsolutions@gmail.com">kamexsolutions@gmail.com</a></li>
            <li><a href="https://wa.me/5493815069332" target="_blank" rel="noopener">WhatsApp</a></li>
            <li><span>Tucumán, Argentina</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Kamex Soluciones · Todos los derechos reservados.</span>
        <span className="mono">Hecho a medida, no en serie.</span>
      </div>
    </footer>
  );
}
