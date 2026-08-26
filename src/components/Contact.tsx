import { personal } from '../data/resume';
import AnimateIn from './AnimateIn';
import { showToast } from '../utils/toast';
import './Contact.css';

export default function Contact() {
  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personal.email).then(() => {
      showToast('Email copied to clipboard');
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <AnimateIn>
          <p className="section-label">get in touch</p>
          <h2 className="section-title">Contact</h2>
        </AnimateIn>
        <AnimateIn delay={100}>
          <div className="contact__wrapper">
            <p className="contact__intro">
              Whether you're a recruiter, a future colleague, or someone who just wants to talk shop —
              feel free to reach out. I'm always open to a good conversation.
            </p>
            <div className="contact__email-group">
              <a href={`mailto:${personal.email}`} className="contact__email btn btn--primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Say Hello
              </a>
              <button className="contact__copy btn btn--ghost" onClick={copyEmail}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>
                Copy email
              </button>
            </div>
            <div className="contact__links">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
