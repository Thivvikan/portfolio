import React, { useState } from 'react'
import {
  FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaWhatsapp, FaExternalLinkAlt,
  FaCode, FaDatabase, FaTools, FaLayerGroup, FaServer, FaLaptopCode,
  FaJava, FaPython, FaPhp, FaJs, FaReact, FaLeaf, FaMicrosoft, FaBolt, FaDocker
} from 'react-icons/fa'

const projects = [
  {
    title: 'Brasserie Esta - Modern Restaurant Website',
    tech: 'WordPress | Elementor | PHP | CSS | SEO',
    desc: 'Fully functional, responsive restaurant website delivering a modern user experience. Highlights branding, menu presentation, and reservation flow. Features include an intuitive menu layout, clear call-to-actions, and optimized structure for SEO and performance.',
    impact: '🍽️ Launched professional digital presence causing increased customer engagement',
    link: 'https://brasserie-esta.com/'
  },
  {
    title: 'StarEvents - Online Event Ticketing System',
    tech: 'ASP.NET MVC | C# | MySQL',
    desc: 'Enterprise-grade event management platform featuring secure authentication, role-based access control (Admin/Organizer/Customer), real-time ticket validation with QR codes, and comprehensive event lifecycle management. Implemented MVC architecture with robust error handling and responsive UI.',
    impact: '🎫 Multi-role ticketing platform with secure workflows',
    link: 'https://github.com/Thivvikan/StarEvents.git'
  },
  {
    title: 'Zyroute - Advanced Bus Reservation System',
    tech: 'Java | PostgreSQL | React + Vite | PHP',
    desc: 'Full-stack transportation management system with real-time seat booking, dynamic route management, and transaction-safe database operations. Features include interactive seat selection, booking history, payment integration, and admin dashboard for fleet management.',
    impact: '🚌 Real-time booking with transaction-safe operations',
    link: 'https://github.com/Thivvikan/Zyroute.git'
  },
  {
    title: 'Sales Data Analysis CLI System',
    tech: 'Python | Pandas | NumPy | Matplotlib',
    desc: 'Automated business intelligence tool for sales data processing and visualization. Generates comprehensive reports, trend analysis, and interactive dashboards. Processes thousands of records with optimized data pipelines and exports actionable insights.',
    impact: '📊 Automated reporting with visual analytics',
    link: 'https://github.com/Thivvikan/Sampath-Food-city-Data-analysis-System.git'
  },
  {
    title: 'Bus Reservation System - CLI (Java)',
    tech: 'Java | File Handling',
    desc: 'Console-based reservation system demonstrating OOP principles and data persistence. Features intelligent seat allocation algorithms, automated waiting list management, and file-based storage handling hundreds of concurrent bookings with data integrity.',
    impact: '💺 Efficient seat allocation with persistent storage',
    link: 'https://github.com/Thivvikan/Bus-Reservation-System.git'
  },
  {
    title: 'RocketToMars - Unity AI Game',
    tech: 'Unity | C#',
    desc: 'Interactive 3D game featuring intelligent AI agents with Finite State Machine behavior, pathfinding algorithms, and progressive difficulty levels. Includes physics-based mechanics, puzzle-solving elements, and immersive space exploration gameplay.',
    impact: '🎮 Multi-level game with AI navigation systems',
    link: ''
  }
]

export default function App() {
  return (
    <div className="site">
      <Header />
      <main className="content">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <div className="container-inner">
        <div className="header-content">
          {/* Left: Profile */}
          <Profile />

          {/* Center: Name, Subtitle & Navigation */}
          <div className="header-center">
            <div className="header-text">
              <h1>Thivvikan Premasri</h1>
              <p className="subtitle">Early-career Software Engineer - Backend & Full-Stack</p>
            </div>
            <nav className="nav">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          {/* Right: CTA Button */}
          <div className="header-actions">
            <a
              href="https://wa.me/94765893654?text=Hi%20Thivvikan,%20I'm%20interested%20in%20hiring%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hire"
            >
              <FaWhatsapp className="btn-icon" />
              <span style={{ position: 'relative', zIndex: 10 }}>Hire Me</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

function Profile() {
  const [imgIndex, setImgIndex] = useState(0)
  const initials = 'TP'
  // Updated paths - Add your photo to public folder as profile.jpg, profile.png, or profile.webp
  const sources = [
    '/profile.jpg',
    '/Thivvikan.png',
    '/profile.webp',
    '/src/assets/profile.svg'
  ]
  const src = sources[imgIndex] || sources[sources.length - 1]

  function handleImgError() {
    if (imgIndex < sources.length - 1) setImgIndex(i => i + 1)
  }

  const showFallback = imgIndex >= sources.length - 1
  return (
    <div className="profile">
      <div className="avatar-wrapper">
        {!showFallback ? (
          <img
            src={src}
            alt="Thivvikan Premasri - Software Engineer"
            className="avatar"
            onError={handleImgError}
          />
        ) : (
          <div className="avatar fallback">{initials}</div>
        )}
        <div className="avatar-status"></div>
      </div>
      <div className="profile-info">
        <div className="social-links">
          <a href="https://github.com/Thivvikan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/thivvikan-premasri-5a8a81317/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:thivvikanpremasri@gmail.com" aria-label="Email" title="Email">
            <FaEnvelope />
          </a>
          <a href="/Thivvikan Premasri-CV.pdf" download target="_blank" rel="noopener noreferrer" className="resume-link" aria-label="Download resume" title="Download Resume">
            <FaDownload />
          </a>
        </div>
        <div className="location muted">📍 Jaffna, Sri Lanka</div>
      </div>
    </div>
  )
}

function About() {
  const [imgIndex, setImgIndex] = useState(0)
  const initials = 'TP'
  // Photo sources - same as header profile
  const sources = [
    '/profile.jpg',
    '/Thivvikan.png',
    '/profile.webp',
    '/src/assets/profile.svg'
  ]
  const src = sources[imgIndex] || sources[sources.length - 1]

  function handleImgError() {
    if (imgIndex < sources.length - 1) setImgIndex(i => i + 1)
  }

  const showFallback = imgIndex >= sources.length - 1

  return (
    <section id="about" className="panel">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-photo-wrapper">
          <div className="about-photo-container">
            {!showFallback ? (
              <img
                src={src}
                alt="Thivvikan Premasri - Software Engineer"
                className="about-photo"
                onError={handleImgError}
              />
            ) : (
              <div className="about-photo fallback">{initials}</div>
            )}
          </div>
        </div>
        <div className="about-text">
          <p>
            I'm <strong>Thivvikan Premasri</strong>, a passionate early-career Software Engineer dedicated to crafting <strong>scalable backend systems</strong> and <strong>elegant full-stack solutions</strong>.
            With expertise in <strong>Java, Spring Boot, ASP.NET MVC, SQL, and React</strong>, I transform complex problems into clean, maintainable code that drives real business value.
          </p>
          <p>
            My journey combines <strong>hands-on development experience</strong> from internships, <strong>teaching expertise</strong> mentoring 100+ students, and a portfolio of production-ready projects.
            I thrive on architectural challenges, performance optimization, and implementing industry best practices including <strong>OOP, design patterns, and SOLID principles</strong>.
          </p>
        </div>
      </div>
      <div className="highlights" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: 'var(--border-radius)', border: '1px solid var(--glass-border)' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>5+</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Full-Stack Projects</div>
        </div>
        <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: 'var(--border-radius)', border: '1px solid var(--glass-border)' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>100+</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Students Mentored</div>
        </div>
        <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: 'var(--border-radius)', border: '1px solid var(--glass-border)' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>15+</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Bugs Fixed</div>
        </div>
      </div>
      <p style={{ marginTop: '2rem', padding: '1.25rem', background: 'rgba(139, 92, 246, 0.1)', borderLeft: '4px solid var(--accent-primary)', borderRadius: 'var(--border-radius)' }}>
        <strong>🎯 Currently seeking:</strong> Internships or entry-level software engineering opportunities where I can contribute to innovative projects,
        collaborate with talented teams, and continue growing as a professional developer.
      </p>

      <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <a
          href="/THIVVIKAN PREMASRI-Resume.pdf"
          download
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1.5rem',
            background: 'var(--accent-gradient)', // Primary style
            color: 'white',
            border: 'none',
            borderRadius: 'var(--border-radius)',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            boxShadow: '0 4px 12px var(--accent-glow)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 8px 20px var(--accent-glow-strong)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 12px var(--accent-glow)'
          }}
        >
          <FaDownload /> Download Resume
        </a>

        <a
          href="/Thivvikan Premasri-CV.pdf"
          download
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1.5rem',
            background: 'var(--glass-bg)', // Secondary style
            color: 'var(--text-primary)',
            border: '1px solid var(--glass-border)',
            borderRadius: 'var(--border-radius)',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            boxShadow: 'var(--shadow-sm)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.borderColor = 'var(--accent-primary)'
            e.currentTarget.style.boxShadow = '0 10px 30px -10px var(--accent-glow)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.borderColor = 'var(--glass-border)'
            e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
          }}
        >
          <FaDownload /> Download CV
        </a>
      </div>
    </section>
  )
}

function Skills() {
  const categories = [
    {
      title: 'Languages',
      icon: <FaCode />,
      skills: [
        { name: 'Java', icon: <FaJava /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'C#', icon: <FaCode /> }, // Generic code icon
        { name: 'PHP', icon: <FaPhp /> },
        { name: 'JavaScript', icon: <FaJs /> }
      ]
    },
    {
      title: 'Frameworks',
      icon: <FaLayerGroup />,
      skills: [
        { name: 'Spring Boot', icon: <FaLeaf /> },
        { name: 'ASP.NET MVC', icon: <FaMicrosoft /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <FaReact /> },
        { name: 'Vite', icon: <FaBolt /> }
      ]
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      skills: [
        { name: 'MySQL', icon: <FaDatabase /> },
        { name: 'PostgreSQL', icon: <FaDatabase /> },
        { name: 'SQL Server', icon: <FaDatabase /> }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <FaTools />,
      skills: [
        { name: 'IntelliJ', icon: <FaLaptopCode /> },
        { name: 'Visual Studio', icon: <FaMicrosoft /> },
        { name: 'Postman', icon: <FaServer /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Figma', icon: <FaTools /> }, // Generic
        { name: 'Netlify', icon: <FaServer /> }
      ]
    }
  ]

  return (
    <section id="skills" className="panel">
      <h2>Technical Skills</h2>
      <div className="skill-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="skill-category-title">
              <span className="skill-icon">{cat.icon}</span>
              {cat.title}
            </h3>
            <div className="skill-items">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skill-tag">
                  <span className="skill-tag-icon">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="panel">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="item">
          <h3>Java Developer Intern - Lanka Designs</h3>
          <span className="muted">Nov 2024 - May 2025 | Jaffna, Sri Lanka</span>
          <ul>
            <li>Built backend modules using Java and OOP principles.</li>
            <li>Implemented MySQL CRUD operations, reducing data errors.</li>
            <li>Debugged 15+ defects and improved system stability.</li>
            <li>Collaborated on GitHub using PRs and code reviews.</li>
          </ul>
        </div>
        <div className="item">
          <h3>IT Instructor (Part-Time) - ESOFT Metro Campus</h3>
          <span className="muted">Feb 2025 - Jan 2026 | Jaffna, Sri Lanka</span>
          <ul>
            <li>Taught Java, Python, C#, OOP, and DSA to 100+ students.</li>
            <li>Conducted coding labs and mentored mini-projects.</li>
            <li>Helped students understand Big-O, recursion, and algorithms.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const techSet = Array.from(new Set(projects.flatMap(p => p.tech.split('|').map(t => t.trim()))))

  const filtered = projects.filter(p => {
    const text = (p.title + ' ' + p.desc + ' ' + p.tech).toLowerCase()
    return text.includes(query.toLowerCase())
  })

  return (
    <section id="projects" className="panel">
      <h2>Projects</h2>
      <div className="projects-controls">
        <input
          className="search"
          placeholder="Search projects by name, tech or description..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          aria-label="Search projects"
        />
        <div className="tech-filter">
          {techSet.map(t => (
            <button key={t} className="tag" onClick={() => setQuery(t)}>{t}</button>
          ))}
        </div>
      </div>
      <div className="projects-grid">
        {filtered.map((p) => (
          <article key={p.title} className="card project-card" onClick={() => setSelected(p)}>
            <h3>{p.title}</h3>
            <p className="muted techline">{p.tech}</p>
            {p.impact && <p style={{ color: 'var(--accent-secondary)', fontWeight: '600', fontSize: '0.9rem', marginTop: '0.5rem' }}>{p.impact}</p>}
            <p>{p.desc}</p>
            <div className="badges">
              {p.tech.split('|').map(part => (
                <span key={part} className="badge">{part.trim()}</span>
              ))}
            </div>
            {p.link ? (
              <p>
                <a href={p.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <span>{p.link.includes('github.com') ? 'View on GitHub' : 'View Live Project'}</span>
                  <span style={{ fontSize: '1.2rem' }}>→</span>
                </a>
              </p>
            ) : (
              <p className="muted">Private Repository</p>
            )}
          </article>
        ))}
      </div>

      {selected && (
        <div className="modal" role="dialog" aria-modal="true" onClick={() => setSelected(null)}>
          <div className="modal-panel" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>Close</button>
            <h3>{selected.title}</h3>
            <p className="muted">{selected.tech}</p>
            {selected.impact && <p style={{ color: 'var(--accent-secondary)', fontWeight: '600', marginTop: '0.5rem' }}>{selected.impact}</p>}
            <p>{selected.desc}</p>
            {selected.link && (
              <p>
                <a href={selected.link} target="_blank" rel="noopener noreferrer">
                  {selected.link.includes('github.com') ? 'Open repository' : 'Open Live Site'}
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="panel">
      <h2>Education</h2>
      <div className="edu-list">
        <div>
          <h3>BEng (Hons) Software Engineering</h3>
          <span className="muted">London Metropolitan University - Feb 2025 - Feb 2026 (Expected)</span>
        </div>
        <div>
          <h3>Higher National Diploma in Software Engineering</h3>
          <span className="muted">ESOFT Metro Campus - Jul 2023 - Feb 2025</span>
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  const certs = [
    { name: 'Meta - Introduction to Back-End Development', link: 'https://coursera.org/share/6e709ff6644b71b78e1ce2b93250c098' },
    { name: 'IBM - Python 101 for Data Science', link: 'https://courses.yl-ptech.skillsnetwork.site/certificates/204e159aade34d71ae41c51944154e3a' },
    { name: 'IBM - Data Analysis with Python', link: 'https://courses.yl-ptech.skillsnetwork.site/certificates/b683241669544757bf22346d18510877' },
    { name: 'Sololearn - Introduction to Java', link: 'https://www.sololearn.com/certificates/CC-FNOKG39W' },
    { name: 'HackerRank - Java (Basic)', link: 'https://www.hackerrank.com/certificates/iframe/f2586b4ef187' }
  ]
  return (
    <section id="certifications" className="panel">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certs.map((c, i) => (
          <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className="cert-card">
            <div className="cert-icon">📜</div>
            <div className="cert-info">
              <span className="cert-name">{c.name}</span>
              <span className="cert-view">View Certificate <FaExternalLinkAlt size={12} /></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    // EmailJS REST API (frontend only). Replace the placeholders below with your EmailJS values.
    // service_id: your EmailJS service ID
    // template_id: your EmailJS template ID
    // user_id (public key): your EmailJS public key
    const service_id = 'YOUR_SERVICE_ID'
    const template_id = 'YOUR_TEMPLATE_ID'
    const user_id = 'YOUR_PUBLIC_KEY'

    const payload = {
      service_id,
      template_id,
      user_id,
      template_params: {
        from_name: name,
        from_email: email,
        message
      }
    }

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (res.ok) {
        setStatus('sent')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        const text = await res.text()
        setStatus('error')
        console.error('EmailJS error', text)
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="panel">
      <h2>Contact</h2>
      <p>If you'd like to reach out, send a message using the form below. This uses EmailJS (frontend). Add your EmailJS service/template/user IDs in the source to enable sending.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input required value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Email
          <input required type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Message
          <textarea required value={message} onChange={e => setMessage(e.target.value)} rows={6} />
        </label>
        <div className="form-actions">
          <button type="submit" disabled={status === 'sending'}>Send message</button>
          <a className="muted" href="mailto:thivvikanpremasri@gmail.com">Or email directly</a>
        </div>
        {status === 'sending' && <p className="muted">Sending...</p>}
        {status === 'sent' && <p style={{ color: 'limegreen' }}>Message sent - thank you!</p>}
        {status === 'error' && <p style={{ color: '#ff7b7b' }}>Failed to send. Check console and EmailJS configuration.</p>}
      </form>

      {/* <p>Email: <a href="mailto:thivvikanpremasri@gmail.com">thivvikanpremasri@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/thivvikan-premasri-5a8a81317/" target="_blank" rel="noopener noreferrer">linkedin.com/in/thivvikan-premasri-5a8a81317</a></p>
      <p>GitHub: <a href="https://github.com/Thivvikan" target="_blank" rel="noopener noreferrer">github.com/Thivvikan</a></p>
      <p>Portfolio: <a href="https://thivvikanpremasri.com" target="_blank" rel="noopener noreferrer">thivvikanpremasri.com</a></p> */}
    </section>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container-inner">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <h3 className="footer-logo">Thivvikan Premasri</h3>
            <p className="footer-tagline">Software Engineer specializing in backend development and full-stack solutions</p>
            <div className="footer-social">
              <a href="https://github.com/Thivvikan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/thivvikan-premasri-5a8a81317/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:thivvikanpremasri@gmail.com" aria-label="Email" title="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#certifications">Certifications</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="footer-section">
            <h4>Technologies</h4>
            <ul className="footer-links">
              <li>Java & Spring Boot</li>
              <li>ASP.NET MVC & C#</li>
              <li>React & JavaScript</li>
              <li>MySQL & PostgreSQL</li>
              <li>REST APIs & Git</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <ul className="footer-links footer-contact">
              <li>
                <FaEnvelope className="footer-icon" />
                <a href="mailto:thivvikanpremasri@gmail.com">thivvikanpremasri@gmail.com</a>
              </li>
              <li>
                <span className="footer-icon">📍</span>
                <span>Jaffna, Sri Lanka</span>
              </li>
              <li>
                <FaDownload className="footer-icon" />
                <a href="/resume.pdf" download>Download Resume</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {currentYear} Thivvikan Premasri. All rights reserved.</p>
            <p className="footer-built">Built React + Vite</p>
          </div>
          <div className="footer-status">
            <span className="status-indicator"></span>
            <span>Available for opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
