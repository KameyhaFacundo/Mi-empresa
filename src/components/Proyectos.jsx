import { useState } from 'react';
import Reveal from './Reveal';

function IconArrow({ direction = 'right' }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ transform: direction === 'left' ? 'rotate(180deg)' : undefined }}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Proyectos({ t }) {
  const [index, setIndex] = useState(0);
  const total = t.items.length;
  const project = t.items[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section id="proyectos">
      <Reveal className="section-head">
        <span className="section-tag">{t.tag}</span>
        <h2>{t.title}</h2>
        <p>{t.paragraph}</p>
      </Reveal>

      <Reveal as="div" className="showcase-panel">
        <div className="showcase-panel__chrome">
          <button type="button" className="carousel-nav" onClick={prev} aria-label={t.prevLabel}>
            <IconArrow direction="left" />
          </button>
          <span className="showcase-panel__path mono">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <button type="button" className="carousel-nav" onClick={next} aria-label={t.nextLabel}>
            <IconArrow direction="right" />
          </button>
        </div>

        <div className="case-copy" key={index}>
          <div className="project-tags">
            {project.status === 'progress' && (
              <span className="badge badge--status">{t.inProgress}</span>
            )}
            {project.note && <span className="badge">{project.note}</span>}
          </div>
          <h3>{project.title}</h3>
          <p>{project.text}</p>
          <div className="project-stack">
            {project.stack.map((tech) => (
              <span className="badge" key={tech}>{tech}</span>
            ))}
          </div>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener" className="btn-ghost project-link">
              {t.viewSite} ↗
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}
