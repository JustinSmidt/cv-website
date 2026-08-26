import { education } from '../data/resume';
import AnimateIn from './AnimateIn';
import Tilt from './Tilt';
import './Education.css';

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <AnimateIn>
          <p className="section-label">academic background</p>
          <h2 className="section-title">Education</h2>
        </AnimateIn>
        <div className="edu__list">
          {education.map((item, i) => (
            <AnimateIn key={i} delay={i * 100}>
              <Tilt>
                <div className="card edu__card">
                  <div className="edu__left">
                    <h3 className="edu__qual">{item.qualification}</h3>
                    <p className="edu__field">{item.field}</p>
                    <p className="edu__institution">{item.institution}</p>
                  </div>
                  <div className="edu__right">
                    <span className="edu__period">{item.period}</span>
                    {item.note && (
                      <span className="edu__note">{item.note}</span>
                    )}
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
