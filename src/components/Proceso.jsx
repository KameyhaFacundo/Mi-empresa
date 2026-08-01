import Reveal from './Reveal';

export default function Proceso({ t }) {
  return (
    <section id="proceso">
      <Reveal className="section-head">
        <span className="section-tag">{t.tag}</span>
        <h2>{t.title}</h2>
        <p>{t.paragraph}</p>
      </Reveal>
      <Reveal as="div" className="process-steps" stagger>
        {t.steps.map((s) => (
          <div className="process-step" key={s.num}>
            <span className="step-num">{s.num}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <span className="time">{s.time}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
