import { useState, useEffect } from 'react';
import { Download, Mail, Phone, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  const titles = [
    "Security Analyst",
    "Digital Forensics Scholar",
    "Applied Cryptography Explorer",
    "Python Tool Developer"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause at end
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, titles, typingSpeed]);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Text & Actions */}
        <div className="hero-content">
          <div className="hero-tag">
            <span>ASRA FATHIMA</span>
          </div>

          <h1 className="hero-title">
            <span className="sakura-deco">🌸</span> Hi, I&apos;m <span className="highlight-name">ASRA</span> <span className="sakura-deco">🌸</span>
          </h1>

          <div className="hero-typewriter-wrapper">
            <span className="hero-typewriter-prefix">I&apos;m a </span>
            <span className="hero-typewriter-text">{currentText}</span>
            <span className="hero-cursor">|</span>
          </div>

          <p className="hero-description">
            Cybersecurity and Digital Forensics MCA student with hands-on experience in applied cryptography, 
            secure coding, and threat analysis, backed by a Cisco Cyber Ops certification. Comfortable across 
            Python-based security tooling, network fundamentals, and data analysis. Seeking entry-level roles 
            in Security Operations (SOC), Application Security, or GRC.
          </p>

          <div className="hero-actions-row">
            {/* Primary Download Resume CTA */}
            <a 
              href="/assets/asra-fathima-resume.pdf" 
              download="Asra_Fathima_Resume.pdf"
              className="btn-pink-pill hero-download-btn"
              title="Download Asra Fathima Resume PDF"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>

            {/* Social / Contact Links */}
            <div className="hero-socials">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn" 
                aria-label="GitHub Profile"
              >
                <GithubIcon size={19} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn" 
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={19} />
              </a>
              <a 
                href="mailto:GHASRA482@gmail.com" 
                className="social-icon-btn" 
                aria-label="Email Asra"
              >
                <Mail size={19} />
              </a>
              <a 
                href="tel:+919611942600" 
                className="social-icon-btn" 
                aria-label="Call Asra"
              >
                <Phone size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Character Portrait with Signature Magenta Neon Aura */}
        <div className="hero-image-col">
          <div className="hero-avatar-wrapper animate-float">
            {/* Ambient Background Aura */}
            <div className="hero-aura-backlight" />
            
            {/* Real Avatar */}
            <img 
              src="/assets/asra-avatar.png" 
              alt="Asra Fathima - Cybersecurity & Digital Forensics" 
              className="hero-avatar-img neon-avatar-glow"
            />

            {/* Floating Verified Security Badge */}
            <div className="hero-floating-badge">
              <div className="badge-icon-box">
                <ShieldCheck size={18} className="text-pink" />
              </div>
              <div className="badge-text-box">
                <span className="badge-title">Cisco Cyber Ops</span>
                <span className="badge-status">
                  <span className="status-dot" /> Certified & Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
