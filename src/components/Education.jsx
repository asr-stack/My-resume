import { Calendar, Award, GraduationCap } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Sapthagiri NPS University",
      period: "2025 – Present",
      grade: "CGPA: 10.0 / 10.0",
      gradeType: "Academic Excellence",
      focus: "Cybersecurity & Digital Forensics specialization, Advanced Cryptography, Network Security, Secure Systems Architecture."
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "St. Claret College",
      period: "2022 – 2025",
      grade: "CGPA: 8.78 / 10.0",
      gradeType: "Distinction",
      focus: "Core Computer Science, Database Management, Python/Java Programming, Web Development, Algorithm Design."
    },
    {
      degree: "Class 12th, CBSE",
      institution: "Central Board of Secondary Education",
      period: "2022",
      grade: "Percentage: 82.5%",
      gradeType: "First Class",
      focus: "Senior Secondary with strong foundation in Mathematics, Computer Science, and Science fundamentals."
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="education-grid">
          {/* Left Column: Vertical Blooming Sakura Branch Graphic */}
          <div className="education-left-col">
            <div className="sakura-branch-wrapper animate-float">
              <div className="sakura-neon-glow" />
              <img 
                src="/assets/sakura-branch.png" 
                alt="Glowing Cherry Blossom Branch" 
                className="sakura-branch-img neon-floral-glow"
              />
            </div>
          </div>

          {/* Right Column: Title & Stacked Education Cards */}
          <div className="education-right-col">
            <div className="education-header">
              <h2 className="heading-sakura">
                <span className="sakura-icon">🌸</span> Education <span className="sakura-icon">🌸</span>
              </h2>
              <p className="section-subtitle education-sub">My academic journey</p>
            </div>

            <div className="education-cards-stack">
              {educationList.map((item, idx) => (
                <div key={idx} className="card-theme edu-card">
                  <div className="edu-card-top">
                    <div className="edu-title-group">
                      <div className="edu-icon-badge">
                        <GraduationCap size={20} className="text-pink" />
                      </div>
                      <div>
                        <h3 className="edu-degree">{item.degree}</h3>
                        <p className="edu-institution">{item.institution}</p>
                      </div>
                    </div>
                  </div>

                  <p className="edu-focus">{item.focus}</p>

                  <div className="edu-meta-row">
                    <div className="edu-meta-item">
                      <Calendar size={15} className="edu-meta-icon" />
                      <span>{item.period}</span>
                    </div>
                    <div className="edu-meta-item edu-grade-highlight">
                      <Award size={15} className="edu-meta-icon text-pink" />
                      <span>{item.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
