import Reveal from './Reveal';

const stats = [
  { num: '2+', label: 'Años de experiencia' },
  { num: '5+', label: 'Sistemas entregados' },
  { num: '3', label: 'Rubros distintos' },
  { num: '100%', label: 'Proyectos en producción' },
];

export default function Nosotros() {
  return (
    <section id="nosotros">
      <div className="nosotros-grid">
        <Reveal className="nosotros-copy">
          <span className="section-tag">// Quiénes somos</span>
          <h2>
            Software <em>a medida</em>, no en serie.
          </h2>
          <p>
            Somos un equipo chico que trabaja de cerca con cada cliente. Entendemos primero
            cómo funciona tu negocio y recién después escribimos código — por eso cada
            sistema que entregamos está en producción, usándose todos los días.
          </p>
        </Reveal>
        <Reveal as="div" className="nosotros-stats" stagger>
          {stats.map((s) => (
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
