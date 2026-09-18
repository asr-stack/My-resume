import { useState } from 'react';
import { 
  KeyRound, 
  Binary, 
  BarChart3, 
  Check, 
  AlertTriangle, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Sparkles,
  RefreshCw
} from 'lucide-react';

export default function Projects() {
  // --- Interactive State for Project 1: Password Strength Checker ---
  const [testPassword, setTestPassword] = useState('CyberSec@2026');
  
  // Real-time evaluation based on Asra's project principles
  const checkNistCriteria = (pwd) => {
    const lengthCheck = pwd.length >= 10;
    const hasLower = /[a-z]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecial = /[^A-Za-z0-9]/.test(pwd);
    const hasRepeat = /(.)\1{2,}/.test(pwd); // 3+ identical sequential chars
    const hasSequence = /(123|234|345|456|567|678|789|abc|bcd|cde|def|password|admin)/i.test(pwd);

    let score = 0;
    if (lengthCheck) score += 30;
    if (hasLower && hasUpper) score += 20;
    if (hasNumber) score += 15;
    if (hasSpecial) score += 20;
    if (!hasRepeat) score += 10;
    if (!hasSequence) score += 15;

    score = Math.min(100, Math.max(10, score));

    return {
      score,
      lengthCheck,
      hasLowerUpper: hasLower && hasUpper,
      hasNumber,
      hasSpecial,
      hasRepeat,
      hasSequence,
      status: score >= 80 ? 'NIST Aligned (Strong)' : score >= 50 ? 'Moderate (Add Entropy)' : 'Weak / Predictable'
    };
  };

  const nistResults = checkNistCriteria(testPassword);

  // --- Interactive State for Project 2: XOR Cryptography Demo ---
  const [xorPlaintext, setXorPlaintext] = useState('ASRA');
  const [xorKey, setXorKey] = useState('K');

  const computeXor = (text, keyChar) => {
    if (!text || !keyChar) return { cipherHex: '', decrypted: '' };
    const k = keyChar.charCodeAt(0);
    const cipherCodes = [];
    const hexArr = [];
    for (let i = 0; i < text.length; i++) {
      const c = text.charCodeAt(i) ^ k;
      cipherCodes.push(c);
      hexArr.push('0x' + c.toString(16).toUpperCase().padStart(2, '0'));
    }
    // Decrypting again with the exact same key: (Plaintext ^ Key) ^ Key = Plaintext
    const decrypted = cipherCodes.map(code => String.fromCharCode(code ^ k)).join('');
    return { cipherHex: hexArr.join(' '), decrypted };
  };

  const xorResults = computeXor(xorPlaintext, xorKey);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <h2 className="heading-sakura">
            <span className="sakura-icon">🌸</span> Featured Projects <span className="sakura-icon">🌸</span>
          </h2>
          <p className="section-subtitle">Real security tooling, applied cryptography & analytics</p>
        </div>

        <div className="projects-grid">
          {/* Project 1: Password Strength & Policy Checker */}
          <div className="card-theme project-card">
            <div className="project-card-header">
              <div className="project-icon-box">
                <KeyRound size={22} className="text-pink" />
              </div>
              <div>
                <span className="project-cat">Defensive Tooling</span>
                <h3 className="project-title">Password Strength & Policy Checker</h3>
              </div>
            </div>

            <p className="project-desc">
              Built a Python validation engine that evaluates credential strength against NIST SP 800-63B 
              guidelines using regex-based pattern matching. Identifies repetitive sequence loops, keyboard walks, 
              and dictionary substrings to prevent credential compromise.
            </p>

            <div className="project-tags">
              <span className="tag-pill">Python</span>
              <span className="tag-pill">Regex</span>
              <span className="tag-pill">NIST SP 800-63B</span>
              <span className="tag-pill">Pattern Scoring</span>
            </div>

            {/* Interactive Live Micro-Tool */}
            <div className="project-interactive-box">
              <div className="interactive-label-row">
                <span className="interactive-title">
                  <Terminal size={14} className="text-pink" /> Live NIST Engine Sandbox:
                </span>
                <span className={`score-badge ${nistResults.score >= 80 ? 'score-high' : nistResults.score >= 50 ? 'score-mid' : 'score-low'}`}>
                  {nistResults.score}% — {nistResults.status}
                </span>
              </div>

              <div className="interactive-input-row">
                <input 
                  type="text" 
                  value={testPassword} 
                  onChange={(e) => setTestPassword(e.target.value)}
                  placeholder="Test a password pattern..."
                  className="interactive-input"
                  maxLength={32}
                />
              </div>

              {/* Entropy Bar */}
              <div className="entropy-bar-track">
                <div 
                  className="entropy-bar-fill" 
                  style={{ 
                    width: `${nistResults.score}%`,
                    background: nistResults.score >= 80 ? '#34d399' : nistResults.score >= 50 ? '#fbbf24' : '#f43f5e'
                  }}
                />
              </div>

              {/* Policy Checks Matrix */}
              <div className="policy-matrix">
                <div className={`policy-item ${nistResults.lengthCheck ? 'valid' : 'invalid'}`}>
                  {nistResults.lengthCheck ? <Check size={12} /> : <AlertTriangle size={12} />} 10+ Characters
                </div>
                <div className={`policy-item ${nistResults.hasLowerUpper ? 'valid' : 'invalid'}`}>
                  {nistResults.hasLowerUpper ? <Check size={12} /> : <AlertTriangle size={12} />} Mixed Casing
                </div>
                <div className={`policy-item ${!nistResults.hasRepeat ? 'valid' : 'invalid'}`}>
                  {!nistResults.hasRepeat ? <Check size={12} /> : <AlertTriangle size={12} />} No 3+ Char Repeats
                </div>
                <div className={`policy-item ${!nistResults.hasSequence ? 'valid' : 'invalid'}`}>
                  {!nistResults.hasSequence ? <Check size={12} /> : <AlertTriangle size={12} />} No Sequential Substrings
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: XOR-Based Image Encryption Tool */}
          <div className="card-theme project-card">
            <div className="project-card-header">
              <div className="project-icon-box">
                <Binary size={22} className="text-pink" />
              </div>
              <div>
                <span className="project-cat">Applied Cryptography</span>
                <h3 className="project-title">XOR-Based Image Encryption Tool</h3>
              </div>
            </div>

            <p className="project-desc">
              Engineered symmetric cryptographic byte transformations using NumPy and PIL. Demonstrates 
              foundational cryptographic concepts: bitwise XOR reversibility, mathematical key-space requirements, 
              and the critical security risk of key-reuse across multiple pixel blocks.
            </p>

            <div className="project-tags">
              <span className="tag-pill">Python</span>
              <span className="tag-pill">NumPy</span>
              <span className="tag-pill">PIL</span>
              <span className="tag-pill">Symmetric Bitwise</span>
              <span className="tag-pill">Key-Reuse Analysis</span>
            </div>

            {/* Interactive Live XOR Cryptographic Visualizer */}
            <div className="project-interactive-box">
              <div className="interactive-label-row">
                <span className="interactive-title">
                  <Cpu size={14} className="text-pink" /> Live Bitwise XOR Interactive Simulator:
                </span>
                <span className="score-badge score-high">
                  <RefreshCw size={11} className="inline mr-1" /> Reversible Ciphers
                </span>
              </div>

              <div className="xor-inputs-grid">
                <div className="xor-field">
                  <label className="xor-label">Plaintext Input:</label>
                  <input 
                    type="text" 
                    value={xorPlaintext}
                    onChange={(e) => setXorPlaintext(e.target.value.slice(0, 8))}
                    className="interactive-input"
                  />
                </div>
                <div className="xor-field">
                  <label className="xor-label">1-Byte Secret Key:</label>
                  <input 
                    type="text" 
                    value={xorKey}
                    onChange={(e) => setXorKey(e.target.value.slice(0, 1) || 'K')}
                    className="interactive-input xor-key-input"
                  />
                </div>
              </div>

              <div className="xor-visual-results">
                <div className="xor-res-row">
                  <span className="xor-res-tag">Ciphertext (Hex):</span>
                  <code className="xor-hex-output">{xorResults.cipherHex || '0x00'}</code>
                </div>
                <div className="xor-res-row">
                  <span className="xor-res-tag">Decrypted Output:</span>
                  <code className="xor-decrypted-output">{xorResults.decrypted || '...'}</code>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Student Seating Preference Analysis */}
          <div className="card-theme project-card project-card-span">
            <div className="project-card-header">
              <div className="project-icon-box">
                <BarChart3 size={22} className="text-pink" />
              </div>
              <div>
                <span className="project-cat">Statistical Behavioral Modeling</span>
                <h3 className="project-title">Student Seating Preference & Academic Analytics</h3>
              </div>
            </div>

            <p className="project-desc">
              Conducted statistical correlation modeling between spatial classroom positioning (front-row, 
              center, back-row clusters) and student test performance metrics. Executed multi-variable data 
              cleansing, outlier detection, and regression analysis across empirical datasets using Pandas and Scikit-learn.
            </p>

            <div className="project-tags">
              <span className="tag-pill">Python</span>
              <span className="tag-pill">Pandas</span>
              <span className="tag-pill">Matplotlib</span>
              <span className="tag-pill">Scikit-learn</span>
              <span className="tag-pill">Hypothesis Testing</span>
            </div>

            {/* Statistical Highlights Grid */}
            <div className="analytics-preview-grid">
              <div className="stat-insight-card">
                <span className="insight-metric">Correlation Analysis</span>
                <span className="insight-val">Pearson r = 0.68</span>
                <p className="insight-sub">Statistically significant engagement gradient from front to rear rows.</p>
              </div>
              <div className="stat-insight-card">
                <span className="insight-metric">Dataset Normalization</span>
                <span className="insight-val">100% Outliers Handled</span>
                <p className="insight-sub">Handled missing values and normalized spatial coordinates via MinMax scaling.</p>
              </div>
              <div className="stat-insight-card">
                <span className="insight-metric">Behavioral Modeling</span>
                <span className="insight-val">K-Means Clustering</span>
                <p className="insight-sub">Segmented cohort patterns into 3 distinct performance & attentiveness personas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
