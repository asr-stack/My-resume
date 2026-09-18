import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-bar">
      <div className="container footer-container">
        <div className="footer-brand-col">
          <div className="footer-logo">
            <span className="sakura-deco">🌸</span> ASRA FATHIMA <span className="sakura-deco">🌸</span>
          </div>
          <p className="footer-tagline">
            Cybersecurity & Digital Forensics | Cisco Cyber Ops Certified
          </p>
        </div>

        <div className="footer-copy-col">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Asra Fathima. Built with precision & defensive rigor.
          </p>
        </div>

        <div className="footer-action-col">
          <button 
            onClick={scrollToTop} 
            className="btn-pink-pill btn-pill-small back-to-top-btn"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp size={16} /> Top
          </button>
        </div>
      </div>
    </footer>
  );
}
