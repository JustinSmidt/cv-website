import { experience } from '../data/resume';
import AnimateIn from './AnimateIn';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <AnimateIn>
          <p className="section-label">career</p>
          <h2 className="section-title">Experience</h2>
        </AnimateIn>
        <div className="timeline">
          {experience.map((job, i) => (
            <AnimateIn key={i} delay={i * 120}>
              <div className="timeline__item">
                <div className="timeline__marker">
                  <div className="timeline__dot" />
                  {i < experience.length - 1 && <div className="timeline__line" />}
                </div>
                <div className="card timeline__card">
                  <div className="timeline__header">
                    <div>
                      <h3 className="timeline__role">{job.role}</h3>
                      <p className="timeline__company">{job.company}</p>
                      {job.client && (
                        <p className="timeline__client">↳ contracted to {job.client}</p>
                      )}
                    </div>
                    <div className="timeline__period">
                      <span className="timeline__dates">{job.period}</span>
                    </div>
                  </div>

                  {job.bullets.length > 0 && (
                    <ul className="timeline__bullets">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="timeline__bullet">
                          <span className="timeline__bullet-icon">▹</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {job.projects && job.projects.length > 0 && (
                    <div className="timeline__projects">
                      {job.projects.map((proj, k) => (
                        <div className="timeline__project" key={k}>
                          <div className="timeline__project-header">
                            <span className="timeline__project-name">{proj.name}</span>
                            <span className="timeline__project-tag">{proj.tag}</span>
                          </div>
                          <ul className="timeline__bullets">
                            {proj.bullets.map((b, j) => (
                              <li key={j} className="timeline__bullet">
                                <span className="timeline__bullet-icon">▹</span>
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
