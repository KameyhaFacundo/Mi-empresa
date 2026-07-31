const items = [
  'Sistemas de gestión',
  'Punto de venta',
  'Integraciones',
  'Automatización',
  'Consultoría',
  'Soporte continuo',
];

function Track() {
  return (
    <div className="marquee-half" aria-hidden="true">
      {items.map((item) => (
        <span className="marquee-item" key={item}>
          {item}
          <span className="marquee-star">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <Track />
        <Track />
      </div>
    </div>
  );
}
