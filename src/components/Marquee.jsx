function Track({ items }) {
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

export default function Marquee({ t }) {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <Track items={t} />
        <Track items={t} />
      </div>
    </div>
  );
}
