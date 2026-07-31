import Reveal from './Reveal';

const modules = [
  { label: 'inventario', status: 'activo' },
  { label: 'ventas / facturación', status: 'activo' },
  { label: 'gestión de crédito', status: 'activo' },
  { label: 'etiquetas de precio', status: 'activo' },
];

export default function CasoReal() {
  return (
    <section id="caso">
      <Reveal className="section-head">
        <span className="section-tag">// Un caso real</span>
        <h2>Así se ve un sistema hecho a medida</h2>
      </Reveal>

      <Reveal as="div" className="showcase-panel">
        <div className="showcase-panel__chrome">
          <span className="showcase-panel__dot" />
          <span className="showcase-panel__dot" />
          <span className="showcase-panel__dot" />
          <span className="showcase-panel__path mono">front-comercial — panel de control</span>
        </div>

        <div className="showcase-panel__body">
          <div className="case-copy">
            <span className="badge case-industry">Retail · Comercio minorista</span>
            <h3>Un sistema comercial completo, construido desde cero</h3>
            <p>
              Inventario, órdenes de venta, facturación y gestión de crédito en una sola
              plataforma — con impresión de etiquetas de precio y cobranza integrada a
              una financiera externa.
            </p>
            <div className="case-stats">
              <div className="case-stat">
                <div className="num">4</div>
                <div className="label">módulos integrados</div>
              </div>
              <div className="case-stat">
                <div className="num">1</div>
                <div className="label">plataforma, cero parches</div>
              </div>
            </div>
          </div>
          <div className="case-visual">
            {modules.map((m) => (
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
