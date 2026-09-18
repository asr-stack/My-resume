import { ShieldAlert, TerminalSquare, Award, BookOpen } from 'lucide-react';

export default function About() {
  const stats = [
    { value: "10.0", label: "MCA CGPA", sub: "Sapthagiri NPS Univ", icon: <Award size={18} className="text-pink" /> },
    { value: "8.78", label: "BCA CGPA", sub: "St. Claret College", icon: <BookOpen size={18} className="text-pink" /> },
    { value: "3+", label: "Security Projects", sub: "Crypto & Python Tools", icon: <TerminalSquare size={18} className="text-pink" /> },
    { value: "3", label: "Certifications", sub: "Cisco & Data Science", icon: <ShieldAlert size={18} className="text-pink" /> },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Intro & Stats */}
          <div className="about-left-col">
            <span className="section-subtitle-left">GET TO KNOW ME</span>
            <h2 className="about-heading">
              <span className="sakura-icon">🌸</span> About <span className="text-pink">Me</span> <span className="sakura-icon">🌸</span>
            </h2>
            <p className="about-bio">
              I am an MCA scholar specializing in Cybersecurity and Digital Forensics with hands-on 
              experience across applied cryptography, threat analysis, and secure coding. Backed by a 
              Cisco Cyber Ops certification, I blend analytical curiosity with defensive rigor to build 
              real-world security tooling, analyze network anomalies, and transform data into actionable insights.
            </p>

            {/* 2x2 Stats Grid matching reference */}
            <div className="about-stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="about-stat-card">
                  <div className="stat-header">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-icon-wrapper">{stat.icon}</span>
                  </div>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-sub">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column: Traditional Japanese Sensu Folding Fan */}
          <div className="about-center-col">
            <div className="sensu-fan-container animate-float">
              {/* Radial neon glow behind fan */}
              <div className="fan-neon-glow" />
              <img 
                src="/assets/japanese-fan.png" 
                alt="Japanese Sakura Folding Fan" 
                className="sensu-fan-img neon-floral-glow"
              />
            </div>
          </div>

          {/* Right Column: Philosophy & Mission Cards */}
          <div className="about-right-col">
            {/* Philosophy Card */}
            <div className="card-theme philosophy-card">
              <div className="philosophy-header">
                <h3 className="philosophy-title">My Philosophy</h3>
              </div>
              <p className="philosophy-text">
                Security is never an afterthought; it is an architectural foundation. I believe in 
                approaching systems with proactive analytical skepticism—dissecting cryptographic primitives, 
                testing boundary conditions, and enforcing NIST-aligned defensive practices to make resilience 
                the default standard.
              </p>
            </div>

            {/* Mission Card */}
            <div className="card-theme mission-card">
              <div className="philosophy-header">
                <h3 className="philosophy-title">The Mission</h3>
              </div>
              <p className="philosophy-text">
                To contribute actively within a fast-paced Security Operations Center (SOC), Application 
                Security team, or GRC framework. Dedicated to uncovering hidden anomalies, automating 
                threat detection routines, and mitigating vulnerabilities before adversaries can exploit them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
