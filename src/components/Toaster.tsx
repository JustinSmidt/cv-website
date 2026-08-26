import { useEffect, useState } from 'react';
import './Toaster.css';

interface Toast {
  id: number;
  message: string;
  exiting: boolean;
}

export default function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      const id = Date.now();
      setToasts((t) => [...t, { id, message: e.detail, exiting: false }]);
      setTimeout(() => {
        setToasts((t) => t.map((x) => x.id === id ? { ...x, exiting: true } : x));
      }, 2400);
      setTimeout(() => {
        setToasts((t) => t.filter((x) => x.id !== id));
      }, 2800);
    };
    window.addEventListener('app:toast', handler as EventListener);
    return () => window.removeEventListener('app:toast', handler as EventListener);
  }, []);

  return (
    <div className="toaster">
      {toasts.map((t) => (
        <div key={t.id} className={`toast ${t.exiting ? 'toast--exit' : ''}`}>
          <span className="toast__dot" />
          {t.message}
        </div>
      ))}
    </div>
  );
}
