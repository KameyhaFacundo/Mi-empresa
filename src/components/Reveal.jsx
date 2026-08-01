import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsapSetup';

export default function Reveal({
  children,
  stagger = false,
  as: Tag = 'div',
  className = '',
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const targets = stagger ? el.children : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: stagger ? 0.1 : 0,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [stagger]);

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}
