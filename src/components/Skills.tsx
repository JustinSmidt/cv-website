import { skills } from '../data/resume';
import AnimateIn from './AnimateIn';
import Tilt from './Tilt';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <AnimateIn>
          <p className="section-label">tech stack</p>
          <h2 className="section-title">Skills</h2>
        </AnimateIn>
        <div className="skills__grid">
          {skills.map((group, i) => (
            <AnimateIn key={group.category} delay={i * 80}>
              <Tilt>
                <div className="card skills__card">
                  <h3 className="skills__category">{group.category}</h3>
                  <div className="skills__tags">
                    {group.items.map((item) => (
                      <span className="skills__tag" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
