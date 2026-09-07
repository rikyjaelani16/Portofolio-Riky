import { useEffect, useRef } from 'react';

export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.style.setProperty('--reveal-delay', `${delay}ms`);
        node.classList.add('is-revealed');
        observer.unobserve(node);
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null);

  const handlePointerMove = (event) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
    node.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`);
  };

  return (
    <div ref={ref} className={`spotlight-card ${className}`} onPointerMove={handlePointerMove}>
      {children}
    </div>
  );
}

export function MagneticLink({ children, className = '', ...props }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    const node = ref.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
    node.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return <a ref={ref} className={`magnetic-link ${className}`} onPointerMove={handleMove} onPointerLeave={reset} {...props}>{children}</a>;
}
