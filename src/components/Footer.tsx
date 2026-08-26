import { personal } from '../data/resume';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__copy">
          <span className="footer__prompt">~/</span>
          {personal.name.toLowerCase().replace(' ', '')}
        </span>
        <span className="footer__built">
          Built with React + Vite
        </span>
      </div>
    </footer>
  );
}
