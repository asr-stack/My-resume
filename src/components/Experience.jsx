import { Briefcase, Calendar, CheckCircle, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Platform Engineering Intern",
      company: "St. Claret College",
      location: "Bangalore, India",
      period: "Feb 2025 – Apr 2025",
      type: "Internship",
      project: "Claret Pulse — Digital Fest Platform",
      responsibilities: [
        "Architected and deployed 'Claret Pulse', a dedicated digital event-management web platform for campus-wide college fests.",
        "Digitized the entire student registration lifecycle, completely replacing manual paperwork and administrative overhead.",
        "Handled sensitive participant registration records end-to-end, enforcing data integrity and role-based access.",
        "Collaborated closely within an agile team on user feedback gathering and iterative feature enhancements."
      ],
      skills: ["Full-Stack Architecture", "Data Management", "Secure Registration", "Agile Collaboration"]
    },
    {
      role: "Software & Data Intern",
      company: "Karunadu Technologies",
      location: "Bangalore, India",
      period: "Sep 2022 – Oct 2022",
      type: "Internship",
      project: "Python Web & ML Foundation",
      responsibilities: [
        "Completed rigorous industrial training in front-end web engineering paired with Python backend services.",
        "Built responsive interactive web applications integrating core user experience standards.",
        "Implemented basic exploratory data science workflows and applied machine learning logic modules.",
        "Acquired practical experience in defensive coding standards and debugging tools."
      ],
      skills: ["Python", "Front-End UI", "Data Science Foundations", "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <h2 className="heading-sakura">
            <span className="sakura-icon">🌸</span> Professional Experience <span className="sakura-icon">🌸</span>
          </h2>
          <p className="section-subtitle">Real-world internships & platforms delivered</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-timeline-item">
              {/* Timeline Marker */}
              <div className="exp-marker">
                <div className="exp-marker-dot" />
                <div className="exp-marker-line" />
              </div>

              {/* Experience Card */}
              <div className="card-theme exp-card">
                <div className="exp-card-header">
                  <div>
                    <div className="exp-role-row">
                      <h3 className="exp-role">{exp.role}</h3>
                      <span className="exp-type-badge">{exp.type}</span>
                    </div>
                    <p className="exp-company text-pink">{exp.company}</p>
                  </div>

                  <div className="exp-meta-group">
                    <span className="exp-meta-item">
                      <Calendar size={14} className="text-pink" /> {exp.period}
                    </span>
                    <span className="exp-meta-item">
                      <MapPin size={14} className="text-pink" /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="exp-project-highlight">
                  <Briefcase size={15} className="text-pink" />
                  <span>Key Project: <strong>{exp.project}</strong></span>
                </div>

                <ul className="exp-bullet-list">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="exp-bullet-item">
                      <CheckCircle size={15} className="bullet-icon text-pink" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="exp-skills-row">
                  {exp.skills.map((s, sIdx) => (
                    <span key={sIdx} className="tag-pill">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
