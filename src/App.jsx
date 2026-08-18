import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { translations } from './translations';
import './index.css';

// A helper component to handle directional scroll animations
function AnimatedDiv({ children, delay = 0, scrollDir, className, style }) {
  const yOffset = scrollDir === 'down' ? 50 : -50;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "0px" }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: 'easeOut' }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [scrollDir, setScrollDir] = useState('down');
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('dark');

  // Apply Theme & Direction to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  // Scroll direction tracking
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDir && Math.abs(scrollY - lastScrollY) > 10) {
        setScrollDir(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    
    window.addEventListener('scroll', updateScrollDir);
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, [scrollDir]);

  const t = translations[lang];

  return (
    <div>
      <AnimatedDiv className="nav container" scrollDir={scrollDir}>
        <div className="nav-logo">AI<span>Club</span></div>
        <div className="nav-links">
          <a href="#departments">{t.nav.departments}</a>
          <a href="#events">{t.nav.events}</a>
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#team">{t.nav.team}</a>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.9rem', backgroundColor: 'transparent', border: '1px solid var(--border)', color: 'var(--text)' }}>
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="btn" style={{ padding: '0.4rem 0.8rem', fontSize: '1rem', backgroundColor: 'transparent', border: '1px solid var(--border)', color: 'var(--text)' }}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </AnimatedDiv>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <motion.div 
            className="hero-content container" 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h1>{t.hero.titleLine1}<br />{t.hero.titleLine2}</h1>
            <p>{t.hero.description}</p>
            <p style={{ color: 'var(--accent)', fontWeight: 600, marginTop: '1rem' }}>{t.hero.subtitle}</p>
          </motion.div>
        </section>

        {/* Stats Banner */}
        <section className="stats-banner">
          <AnimatedDiv className="container stats-grid" scrollDir={scrollDir}>
            <div className="stat-item">
              <h3>50+</h3>
              <p>{t.stats.members}</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>{t.stats.projects}</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>{t.stats.workshops}</p>
            </div>
            <div className="stat-item">
              <h3>3</h3>
              <p>{t.stats.hackathons}</p>
            </div>
          </AnimatedDiv>
        </section>

        {/* Departments Section */}
        <section id="departments" className="section container">
          <AnimatedDiv scrollDir={scrollDir}>
            <h2 className="section-title">{t.departments.title}</h2>
            <p className="section-desc">{t.departments.desc}</p>
          </AnimatedDiv>
          
          <div className="grid">
            <AnimatedDiv className="card" delay={100} scrollDir={scrollDir}>
              <h3>{t.departments.socialTitle}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>{t.departments.socialSub}</p>
              <p>{t.departments.socialDesc}</p>
            </AnimatedDiv>

            <AnimatedDiv className="card" delay={200} scrollDir={scrollDir}>
              <h3>{t.departments.eventsTitle}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>{t.departments.eventsSub}</p>
              <p>{t.departments.eventsDesc}</p>
            </AnimatedDiv>

            <AnimatedDiv className="card" delay={300} scrollDir={scrollDir}>
              <h3>{t.departments.sponsorTitle}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>{t.departments.sponsorSub}</p>
              <p>{t.departments.sponsorDesc}</p>
            </AnimatedDiv>

            <AnimatedDiv className="card" delay={400} scrollDir={scrollDir}>
              <h3>{t.departments.engTitle}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>{t.departments.engSub}</p>
              <p>{t.departments.engDesc}</p>
            </AnimatedDiv>

            <AnimatedDiv className="card" delay={500} scrollDir={scrollDir}>
              <h3>{t.departments.learnTitle}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>{t.departments.learnSub}</p>
              <p>{t.departments.learnDesc}</p>
            </AnimatedDiv>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="events" className="section container" style={{ backgroundColor: 'var(--surface-hover)', borderRadius: '24px', padding: '4rem 2rem' }}>
          <AnimatedDiv scrollDir={scrollDir}>
            <h2 className="section-title">{t.timeline.title}</h2>
            <p className="section-desc">{t.timeline.desc}</p>
          </AnimatedDiv>
          
          <div className="timeline">
            <AnimatedDiv className="timeline-item" scrollDir={scrollDir} delay={100}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">{t.timeline.upcoming} • {t.timeline.event1Date}</span>
                <h3>{t.timeline.event1Title}</h3>
                <p>{t.timeline.event1Desc}</p>
              </div>
            </AnimatedDiv>
            
            <AnimatedDiv className="timeline-item" scrollDir={scrollDir} delay={200}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">{t.timeline.past} • {t.timeline.event2Date}</span>
                <h3>{t.timeline.event2Title}</h3>
                <p>{t.timeline.event2Desc}</p>
              </div>
            </AnimatedDiv>

            <AnimatedDiv className="timeline-item" scrollDir={scrollDir} delay={300}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">{t.timeline.past} • {t.timeline.event3Date}</span>
                <h3>{t.timeline.event3Title}</h3>
                <p>{t.timeline.event3Desc}</p>
              </div>
            </AnimatedDiv>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="section container">
          <div className="gallery-grid">
            <motion.img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" alt="Students collaborating" className="gallery-img" 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} viewport={{ once: false }}
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" alt="Hackathon" className="gallery-img" 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} viewport={{ once: false }}
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80" alt="Tech setup" className="gallery-img" 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} viewport={{ once: false }}
            />
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section container">
          <AnimatedDiv scrollDir={scrollDir}>
            <h2 className="section-title">{t.team.title}</h2>
            <p className="section-desc">{t.team.desc}</p>
          </AnimatedDiv>
          <div className="team-grid">
            <AnimatedDiv className="team-member" delay={100} scrollDir={scrollDir}>
              <img src="https://ui-avatars.com/api/?name=Abdullah&background=f47c20&color=fff&size=256" alt="Abdullah" className="team-avatar" />
              <h3>Abdullah</h3>
              <p>{t.team.role}</p>
            </AnimatedDiv>
            <AnimatedDiv className="team-member" delay={200} scrollDir={scrollDir}>
              <img src="https://ui-avatars.com/api/?name=Co+Founder&background=f47c20&color=fff&size=256" alt="Co-Founder 2" className="team-avatar" />
              <h3>Co-Founder 2</h3>
              <p>{t.team.role}</p>
            </AnimatedDiv>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section container" style={{ textAlign: 'center', borderBottom: 'none', paddingBottom: '2rem' }}>
          <AnimatedDiv scrollDir={scrollDir}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{t.cta.title}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
              <a href="https://chat.whatsapp.com/BZKdbrTS7mT7gB6RNeh9GM" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#25D366', color: '#fff', fontSize: '1.1rem', padding: '1rem 2rem' }}>
                {t.cta.btn}
              </a>
              
              <div style={{ marginTop: '1rem' }}>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 600 }}>{t.cta.follow}</p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                  <a href="https://www.instagram.com/aiclub_yu/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/posts/ai-club-ayu_alyamamahabruniversity-aiabrclub-artificialintelligence-activity-7462952891910180864-Ew-k?utm_source=share&utm_medium=member_android&rcm=ACoAADtq1ncBvH7_kubs-94hIl3Zue1E08rBwPg" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </section>
      </main>

      <footer className="section container" style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
        <p>&copy; {new Date().getFullYear()} {t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
