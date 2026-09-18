import { 
  Shield, 
  Terminal, 
  Lock, 
  Network, 
  Database, 
  Cpu, 
  Binary, 
  FileCode,
  Search,
  CheckCircle2
} from 'lucide-react';

export default function TechTicker() {
  const techItems = [
    { name: "Python", icon: <Terminal size={18} color="#38bdf8" /> },
    { name: "Cisco Cyber Ops", icon: <Shield size={18} color="#ff2a7a" /> },
    { name: "Applied Cryptography (XOR)", icon: <Lock size={18} color="#f472b6" /> },
    { name: "Network Security Fundamentals", icon: <Network size={18} color="#34d399" /> },
    { name: "NIST-Aligned Password Policies", icon: <CheckCircle2 size={18} color="#fbbf24" /> },
    { name: "Threat Analysis & SOC", icon: <Search size={18} color="#f43f5e" /> },
    { name: "Pandas & Scikit-learn", icon: <Cpu size={18} color="#a78bfa" /> },
    { name: "SQL & MongoDB", icon: <Database size={18} color="#38bdf8" /> },
    { name: "Digital Forensics & Malware Logic", icon: <Binary size={18} color="#ec4899" /> },
    { name: "Secure Coding Principles", icon: <FileCode size={18} color="#10b981" /> },
  ];

  return (
    <div className="tech-ticker-bar">
      <div className="ticker-track">
        {/* Repeating items for infinite smooth marquee */}
        {[...techItems, ...techItems].map((item, idx) => (
          <div key={idx} className="ticker-item">
            <span className="ticker-icon">{item.icon}</span>
            <span className="ticker-name">{item.name}</span>
            <span className="ticker-divider">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
