import React from 'react';
import './index.css';

function App() {
  return (
    <div>
      <nav className="nav container">
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
          <div className="hero-content container">
            <h1>Build the future<br />with Artificial Intelligence</h1>
            <p>Join our university's fastest-growing community of students dedicated to machine learning, deep learning, and AI innovation.</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'center' }}>
              <a href="https://chat.whatsapp.com/BZKdbrTS7mT7gB6RNeh9GM" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#25D366', color: '#fff' }}>
                Join WhatsApp Group
              </a>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section id="departments" className="section container">
          <h2 className="section-title">Our Departments</h2>
          <p className="section-desc">We have specialized groups for every interest. Find your fit and join the conversation in our WhatsApp community!</p>
          <div className="grid">
            
            <div className="card">
              <h3>📱 Social Media Department</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>قسم الإعلام الرقمي</p>
              <p>Manage our public presence, design content, and spread the word about our amazing club.</p>
            </div>

            <div className="card">
              <h3>🎉 Events & Activities Department</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>قسم الفعاليات والأنشطة</p>
              <p>Organize hackathons, tech talks, and social gatherings to bring the AI community together.</p>
            </div>

            <div className="card">
              <h3>🤝 Sponsorship & Partnership Department</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>قسم الشراكات والرعاية</p>
              <p>Connect with tech companies and sponsors to fund our events and provide professional opportunities.</p>
            </div>

            <div className="card">
              <h3>⚙️ AI Engineering Department</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>قسم هندسة الذكاء الاصطناعي</p>
              <p>Build, train, and deploy real-world AI models. Collaborate on technical projects and codebases.</p>
            </div>

            <div className="card">
              <h3>📚 Learning & Workshops Department</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 'bold' }}>قسم التعلم وورش العمل</p>
              <p>Design and teach beginner to advanced AI courses and workshops to upskill our members.</p>
            </div>

          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="section container">
          <h2 className="section-title">Event Gallery</h2>
          <p className="section-desc">A glimpse into our hackathons, workshops, and community meetups.</p>
          <div className="gallery-grid">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" alt="Students collaborating" className="gallery-img" />
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" alt="Hackathon" className="gallery-img" />
            <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80" alt="Tech setup" className="gallery-img" />
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section container">
          <h2 className="section-title">Meet the Founders</h2>
          <p className="section-desc">The students behind the initiative.</p>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://ui-avatars.com/api/?name=Abdullah&background=00d2ff&color=fff&size=256" alt="Abdullah" className="team-avatar" />
              <h3>Abdullah</h3>
              <p>Co-Founder</p>
            </div>
            <div className="team-member">
              <img src="https://ui-avatars.com/api/?name=Co+Founder&background=00d2ff&color=fff&size=256" alt="Co-Founder 2" className="team-avatar" />
              <h3>Co-Founder 2</h3>
              <p>Co-Founder</p>
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
