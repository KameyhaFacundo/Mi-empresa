import { lazy, Suspense, useEffect, useRef } from 'react';
import Magnetic from './Magnetic';
import { gsap, ScrollTrigger } from '../lib/gsapSetup';

const Hero3D = lazy(() => import('./Hero3D'));

export default function Hero({ theme }) {
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
        <span className="eyebrow">Desarrollo a medida · Sin plantillas</span>
        <h1>
          Tu negocio no funciona
          <br />
          como <em>cualquier</em> sistema.
        </h1>
        <p>
          Armamos software de gestión, POS y facturación pensado para cómo trabajás vos
          — no al revés. Sin adaptar tu operación a un sistema genérico.
        </p>
        <div className="hero-actions">
          <Magnetic>
            <a href="#contacto" className="btn-primary">Contame tu caso</a>
          </Magnetic>
          <Magnetic strength={12}>
            <a href="#caso" className="btn-ghost">Ver un sistema real</a>
          </Magnetic>
        </div>
        <div className="stack-badges">
          <span className="badge">React</span>
          <span className="badge">Laravel</span>
          <span className="badge">MySQL</span>
          <span className="badge">Integraciones a medida</span>
        </div>
      </div>
    </section>
  );
}
