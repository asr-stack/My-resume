import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechTicker from './components/TechTicker';
import About from './components/About';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Floating Pill Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Tech Marquee Ticker */}
        <TechTicker />

        {/* About Section with Japanese Sensu Fan & Real Stats */}
        <About />

        {/* Certificates Section */}
        <Certificates />

        {/* Projects Section with Live Interactive Security Tools */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Professional Experience Section */}
        <Experience />

        {/* Education Section with Glowing Sakura Branch */}
        <Education />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
