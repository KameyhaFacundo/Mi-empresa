import { lazy, Suspense, useEffect, useRef } from 'react';
import Magnetic from './Magnetic';
import TechIcon from './TechIcon';
import { gsap, ScrollTrigger } from '../lib/gsapSetup';

const Hero3D = lazy(() => import('./Hero3D'));

export default function Hero({ theme, t }) {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const scrollProgress = useRef(0);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });

    return () => st.kill();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !contentRef.current) return;

    const targets = contentRef.current.children;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.15 }
      );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-canvas-wrap">
        <Suspense fallback={null}>
          <Hero3D scrollProgress={scrollProgress} theme={theme} />
        </Suspense>
      </div>
      <div className="hero-content" ref={contentRef}>
        <span className="eyebrow">{t.eyebrow}</span>
        <h1>
          {t.titleBefore}<em>{t.titleEm}</em>{t.titleAfter}
        </h1>
        <p>{t.paragraph}</p>
        <div className="hero-actions">
          <Magnetic>
            <a href="#contacto" className="btn-primary">{t.ctaPrimary}</a>
          </Magnetic>
          <Magnetic strength={12}>
            <a href="#proyectos" className="btn-ghost">{t.ctaGhost}</a>
          </Magnetic>
        </div>
        <div className="stack-badges">
          {t.badges.map((b) => (
            <span className="badge" key={b}><TechIcon label={b} />{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
