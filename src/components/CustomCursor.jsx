import { useEffect, useRef } from 'react';

const HOVER_SELECTOR = 'a, button, .service-row, .badge, .showcase-panel';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const canHover = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reduceMotion) return;

    document.body.classList.add('has-custom-cursor');

    const handleMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const handleOver = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) {
        ringRef.current?.classList.add('hovering');
        dotRef.current?.classList.add('hovering');
      }
    };
    const handleOut = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) {
        ringRef.current?.classList.remove('hovering');
        dotRef.current?.classList.remove('hovering');
      }
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    let raf;
    const tick = () => {
      dotPos.current.x += (target.current.x - dotPos.current.x) * 0.5;
      dotPos.current.y += (target.current.y - dotPos.current.y) * 0.5;
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.14;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.14;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
