import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './index.css';

// A helper component to handle directional scroll animations
function AnimatedDiv({ children, delay = 0, scrollDir, className, style }) {
  // If scrolling down, elements come from bottom (+50px). If scrolling up, they come from top (-50px)
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

  return (
    <div>
      <AnimatedDiv className="nav container" scrollDir={scrollDir}>
        <div className="nav-logo">AI<span>Club</span></div>
        <div className="nav-links">
          <a href="#departments">Departments</a>
          <a href="#gallery">Gallery</a>
          <a href="#team">Meet the Team</a>
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
            <h1>Build the future<br />with Artificial Intelligence</h1>
            <p>Join our university's fastest-growing community of students dedicated to machine learning, deep learning, and AI innovation.</p>
            <p style={{ color: 'var(--accent)', fontWeight: 600, marginTop: '1rem' }}>Empowering the next generation of tech leaders.</p>
          </motion.div>
        </section>

        {/* Departments Section */}
        <section id="departments" className="section container">
          <AnimatedDiv scrollDir={scrollDir}>
            <h2 className="section-title">Our Departments</h2>
            <p className="section-desc">We have specialized groups for every interest. Find your fit and join the conversation in our WhatsApp community!</p>
          </AnimatedDiv>
          
          <div className="grid">
            <AnimatedDiv className="card" delay={100} scrollDir={scrollDir}>
              <h3>📱 Social Media Department</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>قسم الإعلام الرقمي</p>
              <p>Manage our public presence, design content, and spread the word about our amazing club.</p>
            </AnimatedDiv>

            <AnimatedDiv className="card" delay={200} scrollDir={scrollDir}>
              <h3>🎉 Events & Activities Department</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>قسم الفعاليات والأنشطة</p>
              <p>Organize hackathons, tech talks, and social gatherings to bring the AI community together.</p>
            </AnimatedDiv>

            <AnimatedDiv className="card" delay={300} scrollDir={scrollDir}>
              <h3>🤝 Sponsorship & Partnership Department</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>قسم الشراكات والرعاية</p>
              <p>Connect with tech companies and sponsors to fund our events and provide professional opportunities.</p>
            </AnimatedDiv>

            <AnimatedDiv className="card" delay={400} scrollDir={scrollDir}>
              <h3>⚙️ AI Engineering Department</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>قسم هندسة الذكاء الاصطناعي</p>
              <p>Build, train, and deploy real-world AI models. Collaborate on technical projects and codebases.</p>
            </AnimatedDiv>

            <AnimatedDiv className="card" delay={500} scrollDir={scrollDir}>
              <h3>📚 Learning & Workshops Department</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>قسم التعلم وورش العمل</p>
              <p>Design and teach beginner to advanced AI courses and workshops to upskill our members.</p>
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
            <h2 className="section-title">Meet the Founders</h2>
            <p className="section-desc">The students behind the initiative.</p>
          </AnimatedDiv>
          <div className="team-grid">
            <AnimatedDiv className="team-member" delay={100} scrollDir={scrollDir}>
              <img src="https://ui-avatars.com/api/?name=Abdullah&background=f47c20&color=fff&size=256" alt="Abdullah" className="team-avatar" />
              <h3>Abdullah</h3>
              <p>Co-Founder</p>
            </AnimatedDiv>
            <AnimatedDiv className="team-member" delay={200} scrollDir={scrollDir}>
              <img src="https://ui-avatars.com/api/?name=Co+Founder&background=f47c20&color=fff&size=256" alt="Co-Founder 2" className="team-avatar" />
              <h3>Co-Founder 2</h3>
              <p>Co-Founder</p>
            </AnimatedDiv>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section container" style={{ textAlign: 'center', borderBottom: 'none', paddingBottom: '2rem' }}>
          <AnimatedDiv scrollDir={scrollDir}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ready to shape the future?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
              <a href="https://chat.whatsapp.com/BZKdbrTS7mT7gB6RNeh9GM" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#25D366', color: '#fff', fontSize: '1.1rem', padding: '1rem 2rem' }}>
                Join our WhatsApp Group
              </a>
              
              <div style={{ marginTop: '1rem' }}>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 600 }}>Follow Us</p>
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
        <p>&copy; {new Date().getFullYear()} University AI Club. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
