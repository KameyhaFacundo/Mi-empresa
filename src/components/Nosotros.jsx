import Reveal from './Reveal';

export default function Nosotros({ t }) {
  return (
    <section id="nosotros">
      <div className="nosotros-grid">
        <Reveal className="nosotros-copy">
          <span className="section-tag">{t.tag}</span>
          <h2>
            {t.titleBefore}<em>{t.titleEm}</em>{t.titleAfter}
          </h2>
          <p>{t.paragraph}</p>
        </Reveal>
        <Reveal as="div" className="nosotros-stats" stagger>
          {t.stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
