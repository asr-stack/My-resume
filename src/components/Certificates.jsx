import { useState } from 'react';
import { ExternalLink, CheckCircle, X, ShieldCheck, FileBadge } from 'lucide-react';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: "cisco-cyberops",
      title: "Cisco Cyber Ops Certification",
      year: "2025",
      issuer: "Cisco",
      tags: ["Cybersecurity", "Networking", "Threat Analysis"],
      description: "Comprehensive professional certification validating foundational SOC analyst capabilities, network security monitoring, incident response protocols, cryptographic implementation, and endpoint threat intelligence.",
      skillsAcquired: [
        "Network attack methods & evasion techniques",
        "Security monitoring with Wireshark & SIEM principles",
        "Host-based forensics & process analysis",
        "Access control & NIST incident response framework"
      ],
      verifiedStatus: "Credential Verified & Active"
    },
    {
      id: "python-essentials",
      title: "Python Essentials 2",
      year: "2026",
      issuer: "Cisco Networking Academy",
      tags: ["Python", "OOP", "Logic Building"],
      description: "Advanced Python engineering credentials covering object-oriented architecture, exception handling, custom modules, file I/O operations, closures, generators, and algorithm development.",
      skillsAcquired: [
        "Object-Oriented Programming (OOP) paradigms",
        "Generators, iterators & custom decorators",
        "Data persistence, serialization & byte streams",
        "Modular package design & defensive error recovery"
      ],
      verifiedStatus: "Credential Verified & Active"
    },
    {
      id: "data-science",
      title: "Data Science Certification",
      year: "2022 – 2025",
      issuer: "Humalitix Solutions Pvt Ltd",
      tags: ["Data Analysis", "Machine Learning", "Data Visualization"],
      description: "In-depth industrial data science training program focusing on exploratory data analysis (EDA), predictive regression/classification modeling, feature engineering, and statistical visualization pipelines.",
      skillsAcquired: [
        "Pandas, NumPy & Matplotlib data pipelines",
        "Supervised & unsupervised machine learning with Scikit-learn",
        "Data cleaning, normalization & hypothesis testing",
        "Interactive dashboard storytelling (Tableau & Power BI)"
      ],
      verifiedStatus: "Completed & Certified"
    }
  ];

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <h2 className="heading-sakura">
            <span className="sakura-icon">🌸</span> Certificates <span className="sakura-icon">🌸</span>
          </h2>
          <p className="section-subtitle">Professional achievements & certifications</p>
        </div>

        {/* 3 Cards Grid matching reference */}
        <div className="certs-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="card-theme cert-card">
              {/* Top Row: Title & Year in Pink */}
              <div className="cert-header">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-year">{cert.year}</span>
              </div>

              {/* Issuer */}
              <p className="cert-issuer">{cert.issuer}</p>

              {/* Tags in dark plum pills */}
              <div className="cert-tags-row">
                {cert.tags.map((tag, idx) => (
                  <span key={idx} className="tag-pill">{tag}</span>
                ))}
              </div>

              {/* Footer: View Certificate Action */}
              <button 
                onClick={() => setSelectedCert(cert)}
                className="cert-view-btn"
                aria-label={`View details for ${cert.title}`}
              >
                <FileBadge size={16} />
                <span>View Certificate</span>
              </button>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
            <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setSelectedCert(null)}
                className="cert-modal-close"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="cert-modal-badge-row">
                <div className="cert-modal-icon-box">
                  <ShieldCheck size={28} className="text-pink" />
                </div>
                <div>
                  <span className="cert-modal-issuer">{selectedCert.issuer}</span>
                  <h3 className="cert-modal-title">{selectedCert.title}</h3>
                  <span className="cert-year-modal">{selectedCert.year}</span>
                </div>
              </div>

              <p className="cert-modal-desc">{selectedCert.description}</p>

              <div className="cert-modal-skills">
                <h4 className="cert-skills-heading">Verified Core Competencies:</h4>
                <ul className="cert-skills-list">
                  {selectedCert.skillsAcquired.map((skill, idx) => (
                    <li key={idx} className="cert-skill-item">
                      <CheckCircle size={15} className="text-pink" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cert-modal-footer">
                <span className="cert-status-tag">
                  <span className="status-dot" /> {selectedCert.verifiedStatus}
                </span>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="btn-pink-pill btn-pill-small"
                >
                  Close View
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
