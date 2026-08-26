import { useRef, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Tilt({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) scale(1.02)`;
  };

  const onLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: 'transform 0.15s ease', transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}
