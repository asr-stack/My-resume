import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('GHASRA482@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+919611942600');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      // Optional mailto link launch
      const mailtoLink = `mailto:GHASRA482@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Asra,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
      window.location.href = mailtoLink;
    }, 800);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <h2 className="heading-sakura">
            <span className="sakura-icon">🌸</span> Get In Touch <span className="sakura-icon">🌸</span>
          </h2>
          <p className="section-subtitle">Open for SOC Analyst, AppSec, and Security Engineering Opportunities</p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            <h3 className="contact-col-title">Let&apos;s Connect</h3>
            <p className="contact-col-desc">
              Whether you are looking to expand your security operations team, discuss vulnerability 
              research, or evaluate my cryptography projects, my inbox is always open.
            </p>

            <div className="contact-cards-list">
              {/* Email Card with 1-Click Copy */}
              <div className="card-theme contact-info-card">
                <div className="contact-card-icon-box">
                  <Mail size={20} className="text-pink" />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Email Address</span>
                  <a href="mailto:GHASRA482@gmail.com" className="contact-card-val">
                    GHASRA482@gmail.com
                  </a>
                </div>
                <button 
                  onClick={handleCopyEmail} 
                  className="contact-copy-btn" 
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card with 1-Click Copy */}
              <div className="card-theme contact-info-card">
                <div className="contact-card-icon-box">
                  <Phone size={20} className="text-pink" />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Direct Phone</span>
                  <a href="tel:+919611942600" className="contact-card-val">
                    +91 9611942600
                  </a>
                </div>
                <button 
                  onClick={handleCopyPhone} 
                  className="contact-copy-btn" 
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="card-theme contact-info-card">
                <div className="contact-card-icon-box">
                  <MapPin size={20} className="text-pink" />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Location</span>
                  <span className="contact-card-val">Bangalore, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Social Connection Pills */}
            <div className="contact-socials-row">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-pink-pill btn-pill-small contact-social-pill"
              >
                <LinkedinIcon size={16} /> LinkedIn Profile
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-pink-pill btn-pill-small contact-social-pill"
              >
                <GithubIcon size={16} /> GitHub Repos
              </a>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="contact-form-col">
            <div className="card-theme contact-form-card">
              <h3 className="form-card-title">Send a Direct Message</h3>
              <p className="form-card-sub">Responses delivered directly to GHASRA482@gmail.com</p>

              {submitted ? (
                <div className="form-success-box">
                  <Check size={36} className="text-emerald" />
                  <h4>Message Prepared!</h4>
                  <p>Launching your mail client with Asra&apos;s direct address pre-filled...</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-pink-pill btn-pill-small mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Jane Doe"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="jane@company.com"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject / Role Opportunity</label>
                    <input 
                      type="text" 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="e.g. SOC Analyst / Security Engineering"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Hi Asra, I came across your portfolio and would like to connect regarding..."
                      className="form-input form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn-pink-pill form-submit-btn">
                    <Send size={16} /> Send Direct Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
