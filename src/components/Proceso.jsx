import Reveal from './Reveal';

const steps = [
  {
    num: '01',
    title: 'Relevamiento',
    text: 'Entendemos tu proceso de negocio antes de escribir una línea de código.',
    time: '3-5 días',
  },
  {
    num: '02',
    title: 'Propuesta técnica',
    text: 'Alcance detallado, stack, cronograma con hitos y condiciones claras.',
    time: '2-3 días',
  },
  {
    num: '03',
    title: 'Desarrollo iterativo',
    text: 'Sprints cortos con demos frecuentes para que veas avances reales.',
    time: 'Según alcance',
  },
  {
    num: '04',
    title: 'Entrega y soporte',
    text: 'Puesta en producción, capacitación del equipo y acompañamiento continuo.',
    time: 'Continuo',
  },
];

export default function Proceso() {
  return (
    <section id="proceso">
      <Reveal className="section-head">
        <span className="section-tag">// Cómo trabajamos</span>
        <h2>Proceso claro, sin sorpresas</h2>
        <p>Sabés en qué etapa está tu proyecto en todo momento.</p>
      </Reveal>
      <Reveal as="div" className="process-steps" stagger>
        {steps.map((s) => (
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
