import { useState, useEffect } from 'react';
import { personal } from '../data/resume';
import './Navbar.css';

interface Props {
  onTerminal: () => void;
  active: string;
}

export default function Navbar({ onTerminal, active }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo">
        <span className="navbar__prompt">~</span>
        <span className="navbar__name">{personal.name.split(' ')[0].toLowerCase()}</span>
        <span className="navbar__cursor" />
      </div>
      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {['about', 'education', 'experience', 'skills', 'contact'].map((s) => (
          <li key={s}>
            <a
              href={`#${s}`}
              className={`navbar__link ${active === s ? 'navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="navbar__link-num">./</span>{s}
            </a>
          </li>
        ))}
      </ul>
      <div className="navbar__actions">
        <button className="navbar__terminal-btn" onClick={onTerminal} title="Open terminal (`)">
          <span className="navbar__terminal-icon">&gt;_</span>
        </button>
        <button
          className={`navbar__menu-toggle ${menuOpen ? 'navbar__menu-toggle--open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
