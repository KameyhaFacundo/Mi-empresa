import Reveal from './Reveal';

export default function CasoReal({ t }) {
  return (
    <section id="caso">
      <Reveal className="section-head">
        <span className="section-tag">{t.tag}</span>
        <h2>{t.title}</h2>
      </Reveal>

      <Reveal as="div" className="showcase-panel">
        <div className="showcase-panel__chrome">
          <span className="showcase-panel__dot" />
          <span className="showcase-panel__dot" />
          <span className="showcase-panel__dot" />
          <span className="showcase-panel__path mono">{t.chromePath}</span>
        </div>

        <div className="showcase-panel__body">
          <div className="case-copy">
            <span className="badge case-industry">{t.industry}</span>
            <h3>{t.caseTitle}</h3>
            <p>{t.paragraph}</p>
            <div className="case-stats">
              {t.stats.map((s) => (
                <div className="case-stat" key={s.label}>
                  <div className="num">{s.num}</div>
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="case-visual">
            {t.modules.map((m) => (
              <div className="row" key={m.label}>
                <span>{m.label}</span>
                <span>{m.status}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
