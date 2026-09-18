import { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CERTIFICATES', href: '#certificates' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-fixed-container">
      {/* Floating Pill Navbar */}
      <nav className={`nav-pill ${scrolled ? 'nav-pill-scrolled' : ''}`}>
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')} 
          className="nav-brand"
        >
          ASRA
        </a>

        {/* Desktop Links */}
        <div className="nav-desktop-links">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="nav-actions">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="nav-cta-btn"
          >
            Hire Me
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <span className="nav-brand">ASRA</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-close-btn"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <div className="mobile-links-list">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`mobile-link-item ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mobile-cta-btn"
              >
                <Send size={16} /> Hire Me / Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
