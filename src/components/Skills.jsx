import { 
  ShieldCheck, 
  Code2, 
  LineChart, 
  Database, 
  Wrench 
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Security & Networking",
      icon: <ShieldCheck size={22} className="text-pink" />,
      skills: [
        "Applied Cryptography (symmetric/XOR)",
        "Password Security & NIST-Aligned Policy",
        "Threat Analysis Fundamentals",
        "Network Fundamentals (Cisco Cyber Ops)",
        "Secure Coding Principles"
      ]
    },
    {
      title: "Programming",
      icon: <Code2 size={22} className="text-pink" />,
      skills: [
        "Python",
        "Java",
        "SQL",
        "NoSQL",
        "HTML",
        "CSS",
        "Regex Pattern Matching"
      ]
    },
    {
      title: "Data & Analysis",
      icon: <LineChart size={22} className="text-pink" />,
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Scikit-learn",
        "Power BI",
        "Tableau"
      ]
    },
    {
      title: "Databases",
      icon: <Database size={22} className="text-pink" />,
      skills: [
        "MySQL",
        "MongoDB",
        "Redis",
        "Cassandra",
        "Neo4j"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={22} className="text-pink" />,
      skills: [
        "Git & Version Control",
        "VS Code",
        "IntelliJ IDEA",
        "Jupyter Notebook",
        "Spyder",
        "DBeaver",
        "MySQL Workbench"
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <h2 className="heading-sakura">
            <span className="sakura-icon">🌸</span> Technical Skills <span className="sakura-icon">🌸</span>
          </h2>
          <p className="section-subtitle">Verified technical competencies & tools</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="card-theme skill-category-card">
              <div className="skill-cat-header">
                <div className="skill-cat-icon">
                  {cat.icon}
                </div>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>

              <div className="skill-tags-wrapper">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tag-pill skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
