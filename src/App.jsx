import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div>
      <nav className="nav container" data-aos="fade-down">
        <div className="nav-logo">AI<span>Club</span></div>
        <div className="nav-links">
          <a href="#departments">Departments</a>
          <a href="#gallery">Gallery</a>
          <a href="#team">Meet the Team</a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content container" data-aos="zoom-in" data-aos-duration="1200">
            <h1>Build the future<br />with Artificial Intelligence</h1>
            <p>Join our university's fastest-growing community of students dedicated to machine learning, deep learning, and AI innovation.</p>
            <p style={{ color: 'var(--accent)', fontWeight: 600, marginTop: '1rem' }}>Empowering the next generation of tech leaders.</p>
          </div>
        </section>

        {/* Departments Section */}
        <section id="departments" className="section container">
          <h2 className="section-title" data-aos="fade-up">Our Departments</h2>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="100">We have specialized groups for every interest. Find your fit and join the conversation in our WhatsApp community!</p>
          <div className="grid">
            
            <div className="card" data-aos="fade-up" data-aos-delay="100">
              <h3>📱 Social Media Department</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>قسم الإعلام الرقمي</p>
              <p>Manage our public presence, design content, and spread the word about our amazing club.</p>
            </div>

            <div className="card" data-aos="fade-up" data-aos-delay="200">
              <h3>🎉 Events & Activities Department</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>قسم الفعاليات والأنشطة</p>
              <p>Organize hackathons, tech talks, and social gatherings to bring the AI community together.</p>
            </div>

            <div className="card" data-aos="fade-up" data-aos-delay="300">
              <h3>🤝 Sponsorship & Partnership Department</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>قسم الشراكات والرعاية</p>
              <p>Connect with tech companies and sponsors to fund our events and provide professional opportunities.</p>
            </div>

            <div className="card" data-aos="fade-up" data-aos-delay="400">
              <h3>⚙️ AI Engineering Department</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>قسم هندسة الذكاء الاصطناعي</p>
              <p>Build, train, and deploy real-world AI models. Collaborate on technical projects and codebases.</p>
            </div>

            <div className="card" data-aos="fade-up" data-aos-delay="500">
              <h3>📚 Learning & Workshops Department</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>قسم التعلم وورش العمل</p>
              <p>Design and teach beginner to advanced AI courses and workshops to upskill our members.</p>
            </div>

          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="section container">
          <div className="gallery-grid">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" alt="Students collaborating" className="gallery-img" data-aos="zoom-in" data-aos-delay="100" />
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" alt="Hackathon" className="gallery-img" data-aos="zoom-in" data-aos-delay="200" />
            <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80" alt="Tech setup" className="gallery-img" data-aos="zoom-in" data-aos-delay="300" />
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section container">
          <h2 className="section-title" data-aos="fade-right">Meet the Founders</h2>
          <p className="section-desc" data-aos="fade-right" data-aos-delay="100">The students behind the initiative.</p>
          <div className="team-grid">
            <div className="team-member" data-aos="fade-up" data-aos-delay="200">
              <img src="https://ui-avatars.com/api/?name=Abdullah&background=f47c20&color=fff&size=256" alt="Abdullah" className="team-avatar" />
              <h3>Abdullah</h3>
              <p>Co-Founder</p>
            </div>
            <div className="team-member" data-aos="fade-up" data-aos-delay="300">
              <img src="https://ui-avatars.com/api/?name=Co+Founder&background=f47c20&color=fff&size=256" alt="Co-Founder 2" className="team-avatar" />
              <h3>Co-Founder 2</h3>
              <p>Co-Founder</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section container" style={{ textAlign: 'center', borderBottom: 'none', paddingBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }} data-aos="fade-up">Ready to shape the future?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }} data-aos="fade-up" data-aos-delay="100">
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
        </section>
      </main>

      <footer className="section container" style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
        <p>&copy; {new Date().getFullYear()} University AI Club. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
