import { useState, useEffect } from 'react'
import { Mail, Phone, Linkedin, ExternalLink, Award, BookOpen, GraduationCap, Microscope, Calendar } from 'lucide-react'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="logo">Deniz Adigüzel</a>
          <ul className="nav-links">
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('education')}>Education</a></li>
            <li><a onClick={() => scrollToSection('research')}>Research</a></li>
            <li><a onClick={() => scrollToSection('talks')}>Talks</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Deniz Adigüzel</h1>
            <p className="hero-subtitle">Physicist & Researcher</p>
            <p className="hero-description">
              M.Sc. Physics student at University of Heidelberg, currently writing my master's thesis at the Max Planck Institute for Nuclear Physics (MPIK).
              Specializing in Quantum Optics, X-ray Quantum Dynamics, and Mathematical Physics.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('contact')} className="btn btn-primary">Get in Touch</button>
              <button onClick={() => scrollToSection('research')} className="btn btn-secondary">View Research</button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              I am a third-semester physics Master's student at the University of Heidelberg, currently writing my
              master's thesis at the Max Planck Institute for Nuclear Physics (MPIK). I completed an Erasmus exchange
              at the University of Copenhagen from August 2024 to July 2025.
            </p>
            <p>
              My research interests lie at the intersection of quantum optics and X-ray physics, with a particular
              focus on understanding quantum dynamics in extreme regimes. I have hands-on experience in both
              theoretical and experimental physics, from numerical simulations of light propagation through
              Mössbauer nuclei to experimental work on microwave-resonator integrated quantum photonics.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming & Tools</h3>
              <ul>
                <li>Python</li>
                <li>Julia</li>
                <li>LaTeX</li>
                <li>Linux</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Languages</h3>
              <ul>
                <li>Turkish (Native)</li>
                <li>English (Proficient)</li>
                <li>German (Proficient)</li>
                <li>Spanish (Beginner)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">2023 – Present</span>
                <h3>M.Sc. in Physics</h3>
                <h4>University of Heidelberg, Germany</h4>
                <ul>
                  <li>Currently writing master's thesis at Max Planck Institute for Nuclear Physics (MPIK)</li>
                  <li>Completed Erasmus exchange at University of Copenhagen (Aug 2024 - July 2025)</li>
                  <li><strong>Relevant coursework:</strong> Theoretical Quantum Optics, Advanced Quantum Theory, Scientific Computing, Condensed Matter Theory, Experimental X-ray Physics, Quantum Field Theory</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">2020 – 2024</span>
                <h3>B.Sc. in Physics</h3>
                <h4>University of Heidelberg, Germany</h4>
                <p><strong>Grade:</strong> 2.2</p>
                <p><strong>Thesis:</strong> Effects of non-linear excitation on the propagation of light through
                   ensembles of nuclear two-level systems (Grade: 1.1)</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">2015 – 2020</span>
                <h3>Abitur (German High School Certificate)</h3>
                <h4>Deutsche Schule Istanbul, Turkey</h4>
                <p><strong>Grade:</strong> 2.2</p>
                <p>Specialization in physics, mathematics, and biology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="section">
        <div className="container">
          <h2 className="section-title">Research Experience</h2>

          <div className="research-item">
            <div className="research-header">
              <div>
                <h3>Master's Thesis</h3>
                <h4>Max Planck Institute for Nuclear Physics (MPIK), Heidelberg, Germany</h4>
              </div>
              <span className="research-date">Aug 2025 – Present</span>
            </div>
            <p>Currently conducting research for master's thesis in X-ray quantum optics.</p>
          </div>

          <div className="research-item">
            <div className="research-header">
              <div>
                <h3>Research Internship</h3>
                <h4>Niels Bohr Institute, Copenhagen, Denmark</h4>
              </div>
              <span className="research-date">Aug 2024 – July 2025</span>
            </div>
            <p className="research-grade">Grade: 1.0</p>
            <p className="research-title"><strong>Analyzing Properties in Microwave-Resonator Integrated Quantum Photonics</strong></p>
            <ul>
              <li>Conducted experimental research on the impact of microwave resonators on photonic circuits</li>
              <li>Focused on propagation loss and the Franz-Keldysh effect</li>
              <li>Gained hands-on experience in laboratory settings, including design and assembling of optical circuits</li>
            </ul>
          </div>

          <div className="research-item">
            <div className="research-header">
              <div>
                <h3>Bachelor Internship</h3>
                <h4>Max Planck Institute for Nuclear Physics, Heidelberg, Germany</h4>
              </div>
              <span className="research-date">Oct 2023 – Feb 2024</span>
            </div>
            <p className="research-title"><strong>Numerical Approach to X-ray Propagation through Mössbauer Nuclei
                for Applications in X-ray Quantum Optics</strong></p>
            <ul>
              <li>Conducted research on quantum dynamics in the X-ray regime under Prof. Jörg Evers</li>
              <li>Solved the optical Maxwell-Bloch equations to model light propagation through Mössbauer nuclei</li>
              <li>Utilized the Method of Lines to numerically solve Maxwell-Bloch PDEs</li>
              <li>Performed analytical calculations to complement numerical models</li>
            </ul>
          </div>

          <div className="grants-section">
            <h3>Grants & Scholarships</h3>
            <div className="grants-grid">
              <div className="grant-item">
                <span className="grant-year">2024</span>
                <p>Erasmus Exchange to University of Copenhagen</p>
              </div>
              <div className="grant-item">
                <span className="grant-year">2024</span>
                <p>Heidelberg University grant for participation in summer school "Quantum Information and Many Body Dynamics"</p>
              </div>
              <div className="grant-item">
                <span className="grant-year">2024</span>
                <p>WE-Heraeus-Förderprogramm for participation in SAMOP24</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="talks" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Talks & Conference Participation</h2>

          <div className="talks-grid">
            <div className="talk-item">
              <span className="talk-type">Conference</span>
              <h3>Quantum Ideas Factory</h3>
              <p className="talk-location">Jena, Germany | Feb 20-23, 2025</p>
              <p>Worked on pulse shaping and optimal control for quantum sensors based on atom interferometry.
                 Derived wave functions for two-level systems in three-pulse atom interferometry setups.</p>
            </div>

            <div className="talk-item">
              <span className="talk-type">Talk</span>
              <h3>Effects of Non-linear Excitation on Light Propagation</h3>
              <p className="talk-location">Max Planck Theory Division Seminar, Heidelberg | Jun 18, 2024</p>
              <p>Presented results from bachelor's thesis on light propagation through nuclear ensembles.</p>
            </div>

            <div className="talk-item">
              <span className="talk-type">Summer School</span>
              <h3>Quantum Information and Many-Body Theory</h3>
              <p className="talk-location">Copenhagen, Denmark | Jun 24-28, 2024</p>
              <p>Topics included quantum encryption protocols, hermitian/non-hermitian dissipative systems,
                 and mathematical physics.</p>
            </div>

            <div className="talk-item">
              <span className="talk-type">Hackathon</span>
              <h3>ETH Quantum Hackathon</h3>
              <p className="talk-location">Zürich, Switzerland | May 3-5, 2024</p>
              <p>Worked on adiabatic quantum computing and generating cost Hamiltonians for process management problems.</p>
            </div>

            <div className="talk-item">
              <span className="talk-type">Talk</span>
              <h3>Modern Detectors for Neutron Detection</h3>
              <p className="talk-location">Bachelor Seminar, Heidelberg | May 26, 2023</p>
              <p>Introduced concepts including CRSN (Cosmic Ray Neutron Scattering) and Neutron Tomography.</p>
            </div>

            <div className="talk-item">
              <span className="talk-type">Poster</span>
              <h3>DPG SAMOP 2024</h3>
              <p className="talk-location">Freiburg, Germany | Mar 12, 2024</p>
              <p>Presented poster on results and methods from Max Planck Institute internship.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-content">
            <p className="contact-intro">
              I'm always interested in discussing research opportunities, collaborations,
              or questions about quantum optics and X-ray physics.
            </p>
            <div className="contact-grid">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <h3>Email</h3>
                <a href="mailto:deniz.adiguezel@mpi-hd.mpg.de">deniz.adiguezel@mpi-hd.mpg.de</a>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <h3>Phone</h3>
                <a href="tel:+4917352539">+49 173 525 3932</a>
              </div>
              <div className="contact-item">
                <Linkedin className="contact-icon" />
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/deniz-adig%C3%BCzel-2ba005210" target="_blank" rel="noopener">View Profile</a>
              </div>
              <div className="contact-item">
                <GraduationCap className="contact-icon" />
                <h3>Location</h3>
                <p>Heidelberg, Germany</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Deniz Adigüzel. All rights reserved.</p>
          <div className="footer-links">
            <a href="mailto:deniz.adiguezel@mpi-hd.mpg.de">Email</a>
            <a href="https://www.linkedin.com/in/deniz-adig%C3%BCzel-2ba005210" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
