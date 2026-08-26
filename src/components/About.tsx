import { about, personal } from '../data/resume';
import AnimateIn from './AnimateIn';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <AnimateIn>
          <p className="section-label">about me</p>
          <h2 className="section-title">Who I Am</h2>
        </AnimateIn>
        <div className="about__grid">
          <AnimateIn delay={100}>
            <div className="about__text">
              <p>{about}</p>
              <div className="about__meta">
                <div className="about__meta-item">
                  <span className="about__meta-label">location</span>
                  <span className="about__meta-value">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {personal.location}
                  </span>
                </div>
                <div className="about__meta-item">
                  <span className="about__meta-label">focus</span>
                  <span className="about__meta-value">Cloud &amp; DevOps</span>
                </div>
                <div className="about__meta-item">
                  <span className="about__meta-label">devops</span>
                  <span className="about__meta-value">Feb 2025 – Present</span>
                </div>
                <div className="about__meta-item">
                  <span className="about__meta-label">dev</span>
                  <span className="about__meta-value">Nov 2023 – Feb 2025</span>
                </div>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn delay={200}>
            <div className="about__terminal">
              <div className="about__terminal-header">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
                <span className="about__terminal-title">profile.json</span>
              </div>
              <pre className="about__terminal-body">{`{
  "name": "${personal.name}",
  "role": "DevOps & Cloud Engineer",
  "background": "Software Development",
  "location": "${personal.location}",
  "education": "BComputing (Hons) — Magna Cum Laude",
  "focus": [
    "Cloud Infrastructure",
    "IaC & Automation",
    "Kubernetes"
  ]
}`}</pre>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
