import Reveal from './Reveal';

export default function Servicios({ t }) {
  return (
    <section id="servicios">
      <Reveal className="section-head">
        <span className="section-tag">{t.tag}</span>
        <h2>{t.title}</h2>
        <p>{t.paragraph}</p>
      </Reveal>
      <Reveal as="div" className="service-rows" stagger>
        {t.items.map((s) => (
          <div className="service-row" key={s.num}>
            <span className="service-row__num mono">{s.num}</span>
            <h3 className="service-row__title">{s.title}</h3>
            <p className="service-row__text">{s.text}</p>
            <div className="service-row__stack">
              {s.stack.map((tech) => (
                <span className="badge" key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
