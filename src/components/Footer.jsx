import TechIcon from './TechIcon';

export default function Footer({ t }) {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="logo">Kamex Solutions</span>
          <p>{t.brandText}</p>
          <div className="stack-badges">
            <span className="badge"><TechIcon label="React" />React</span>
            <span className="badge"><TechIcon label="Laravel" />Laravel</span>
            <span className="badge"><TechIcon label="MySQL" />MySQL</span>
          </div>
        </div>

        <div className="footer-col">
          <span className="footer-col__title mono">{t.servicesTitle}</span>
          <ul>
            {t.services.map((s) => (
              <li key={s}><a href="#servicios">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <span className="footer-col__title mono">{t.companyTitle}</span>
          <ul>
            {t.company.map((item) => (
              <li key={item.href}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <span className="footer-col__title mono">{t.contactTitle}</span>
          <ul>
            <li><a href="mailto:kamexsolutions@gmail.com">kamexsolutions@gmail.com</a></li>
            <li><a href="https://wa.me/5493815069332" target="_blank" rel="noopener">WhatsApp</a></li>
            <li><span>{t.location}</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Kamex Solutions · {t.rights}</span>
      </div>
    </footer>
  );
}
