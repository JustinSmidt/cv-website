import { useEffect, useState } from 'react';
import { personal } from '../data/resume';
import './Hero.css';

const TYPED_STRINGS = [
  'DevOps & Cloud Engineer',
  'Infrastructure as Code',
  'CI/CD Pipeline Builder',
  'Cloud Automation Engineer',
];

const LOG_LINES = [
  '[pipeline] Triggering build #247 on main...',
  '[git]      Cloning repository @ abc1f3d',
  '[docker]   Building image api:latest',
  '[docker]   Step 1/8 : FROM node:18-alpine',
  '[docker]   Step 3/8 : RUN npm ci --production',
  '[docker]   Step 8/8 : CMD ["node", "dist/index.js"]',
  '[docker]   Successfully built image in 1m 12s',
  '[helm]     Packaging chart api v2.4.1',
  '[helm]     Pushing chart to registry...',
  '[helm]     Release "api" upgraded successfully',
  '[kubectl]  Applying manifests to aks-prod-cluster',
  '[kubectl]  deployment.apps/api configured',
  '[kubectl]  Waiting for rollout... 3/3 replicas ready',
  '[kubectl]  Rollout complete ✓',
  '[ingress]  Route /api → api-svc:3000 active',
  '[nginx]    Upstream api 10.0.1.5:3000 status: up',
  '[terraform] Refreshing state... azurerm_aks.prod',
  '[terraform] Plan: 0 to add, 1 to change, 0 to destroy',
  '[terraform] Apply complete! 1 changed.',
  '[redis]    Connected to cache.internal:6379',
  '[rabbitmq] Consumer registered on queue: payments',
  '[health]   GET /health → 200 OK (18ms)',
  '[monitor]  All 20 services healthy ✓',
  '[pipeline] Smoke tests passed ✓',
  '[pipeline] Build #247 deployed to prod in 3m 42s ✓',
  '[pipeline] Triggering build #248 on main...',
  '[git]      Cloning repository @ d94c2e1',
  '[docker]   Building image worker:latest',
  '[docker]   Step 1/6 : FROM python:3.11-slim',
  '[docker]   Step 6/6 : CMD ["python", "worker.py"]',
  '[docker]   Successfully built image in 0m 58s',
  '[helm]     Release "worker" upgraded successfully',
  '[kubectl]  deployment.apps/worker configured',
  '[kubectl]  Rollout complete ✓',
  '[pipeline] Build #248 deployed to prod in 2m 19s ✓',
];

const DOUBLED = [...LOG_LINES, ...LOG_LINES];

interface Props {
  onTerminal: () => void;
}

export default function Hero({ onTerminal }: Props) {
  const [displayed, setDisplayed] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPED_STRINGS[stringIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setStringIndex((i) => (i + 1) % TYPED_STRINGS.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, stringIndex]);

  return (
    <section className="hero">
      <div className="hero__grid-bg" />

      <div className="hero__deploy-log" aria-hidden="true">
        <div className="hero__deploy-log-inner">
          {DOUBLED.map((line, i) => (
            <div key={i} className="hero__deploy-line">
              <span className={`hero__deploy-tag hero__deploy-tag--${line.split(']')[0].slice(1).trim().toLowerCase().split(' ')[0]}`}>
                {line.split(']')[0] + ']'}
              </span>
              {line.split(']').slice(1).join(']')}
            </div>
          ))}
        </div>
      </div>

      <div className="container hero__content">
        <p className="hero__greeting">
          <span className="hero__prompt">$ </span>whoami
        </p>
        <h1 className="hero__name">{personal.name}</h1>
        <div className="hero__typed-wrapper">
          <span className="hero__typed">{displayed}</span>
          <span className="hero__typed-cursor">|</span>
        </div>
        <p className="hero__tagline">{personal.tagline}</p>
        <div className="hero__actions">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href={`${import.meta.env.BASE_URL}cv.pdf`} download="Justin Smidt - CV.pdf" className="btn btn--secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
        </div>
        <div className="hero__bottom">
          <button className="terminal-hint" onClick={onTerminal}>
            <kbd>`</kbd> open terminal
          </button>
          <div className="hero__scroll-hint">
            <span>scroll</span>
            <div className="hero__scroll-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
