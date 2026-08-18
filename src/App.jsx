import React, { useState, useRef, useEffect } from 'react';
import './index.css';

function App() {
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'ai', text: 'Hello! I am the AI Club assistant. How can I help you today?' }
  ]);
  const chatEndRef = useRef(null);

  // Auto-scroll chat to the bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleChat = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    const newMsgs = [...messages, { type: 'user', text: userText }];
    setMessages(newMsgs);
    setChatInput('');
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('API Key is missing');
      }

      // Prepare conversation history for the API
      const history = newMsgs.map(m => ({
        role: m.type === 'ai' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { 
            parts: { text: "You are a friendly, enthusiastic assistant for a university Artificial Intelligence student club. Keep answers concise (1-3 sentences max). Encourage students to join and learn." } 
          },
          contents: history
        })
      });

      const data = await response.json();
      
      if (data.error) {
         setMessages((prev) => [...prev, { type: 'ai', text: `Error: ${data.error.message}` }]);
      } else {
         const reply = data.candidates[0].content.parts[0].text;
         setMessages((prev) => [...prev, { type: 'ai', text: reply }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { type: 'ai', text: "Sorry, I'm having trouble connecting to my brain right now! Please try again later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div>
      <nav className="nav container">
        <div className="nav-logo">AI<span>Club</span></div>
        <div className="nav-links">
          <a href="#resources">Resources</a>
          <a href="#projects">Hall of Fame</a>
          <a href="#team">Meet the Team</a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero container">
          <div className="hero-content">
            <h1>Build the future<br />with Artificial Intelligence</h1>
            <p>Join our university's fastest-growing community of students dedicated to machine learning, deep learning, and AI innovation.</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="#projects" className="btn">View Our Work</a>
              <a href="https://chat.whatsapp.com/BZKdbrTS7mT7gB6RNeh9GM" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#25D366', color: '#fff' }}>
                Join WhatsApp Group
              </a>
            </div>
          </div>

          <div className="chat-mockup">
            <div className="chat-header">
              <div className="chat-dot"></div>
              Club AI Assistant
            </div>
            <div className="chat-body" style={{ overflowY: 'auto', maxHeight: '350px' }}>
              {messages.map((msg, i) => (
                <div key={i} className={`chat-msg ${msg.type === 'ai' ? 'chat-ai' : 'chat-user'}`}>
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="chat-msg chat-ai" style={{ fontStyle: 'italic', opacity: 0.7 }}>
                  Thinking...
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            <form className="chat-input" onSubmit={handleChat}>
              <input 
                type="text" 
                placeholder="Ask me anything..." 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                disabled={isTyping}
              />
              <button type="submit" disabled={isTyping}>Send</button>
            </form>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="section container">
          <h2 className="section-title">Resource Hub</h2>
          <p className="section-desc">Don't know where to start? We've curated the best free resources to get you up to speed in the world of AI.</p>
          <div className="grid">
            <div className="card">
              <h3>Fast.ai (Practical Deep Learning)</h3>
              <p>A highly practical course that gets you building state-of-the-art models immediately without needing heavy math.</p>
            </div>
            <div className="card">
              <h3>Hugging Face Course</h3>
              <p>Learn how to use modern NLP and Generative AI models using the famous Transformers library.</p>
            </div>
            <div className="card">
              <h3>Kaggle</h3>
              <p>The home of data science. Find free datasets, GPU computing, and competitions to test your skills.</p>
            </div>
          </div>
        </section>

        {/* Hall of Fame */}
        <section id="projects" className="section container">
          <h2 className="section-title">Hall of Fame</h2>
          <p className="section-desc">A showcase of the incredible projects built by our members during hackathons and workshops.</p>
          <div className="grid">
            <div className="card">
              <h3>Campus Parking Predictor</h3>
              <p>A computer vision model that analyzes live camera feeds to predict which parking lots have available spaces.</p>
            </div>
            <div className="card">
              <h3>StudyBot Discord Agent</h3>
              <p>An LLM-powered Discord bot that quizzes students on their lecture notes and summarizes long PDFs.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section container">
          <h2 className="section-title">Meet the Founders</h2>
          <p className="section-desc">The students behind the initiative.</p>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-avatar">👨‍💻</div>
              <h3>Abdullah</h3>
              <p>Co-Founder</p>
            </div>
            <div className="team-member">
              <div className="team-avatar">👩‍💻</div>
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
