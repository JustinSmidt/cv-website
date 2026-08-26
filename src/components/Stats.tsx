import { useEffect, useState, useRef } from 'react';
import AnimateIn from './AnimateIn';
import './Stats.css';

const STATS = [
  { value: 20, suffix: '+', label: 'Microservices deployed' },
  { value: 3, suffix: '', label: 'Cloud environments built' },
  { value: 2, suffix: '', label: 'Cloud platforms' },
  { value: 2, suffix: '+', label: 'Years in tech' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const steps = 40;
          const interval = duration / steps;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            setCount(Math.round((target * step) / steps));
            if (step >= steps) clearInterval(timer);
          }, interval);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stats__number">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {STATS.map((s, i) => (
            <AnimateIn key={s.label} delay={i * 100}>
              <div className="stats__item">
                <Counter target={s.value} suffix={s.suffix} />
                <span className="stats__label">{s.label}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
