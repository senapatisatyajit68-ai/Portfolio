import React, { useState } from 'react';
import { Menu, X, Code, ChevronUp } from 'lucide-react';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Terminal } from './terminal/Terminal';
import { Contact } from './sections/Contact';
import { ThemeCustomizer } from './components/ThemeCustomizer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navigation Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          background: 'var(--bg-glass)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-color)',
          zIndex: 100,
          transition: 'var(--transition-smooth)'
        }}
      >
        <div
          className="container"
          style={{
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Logo */}
          <div
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '1.25rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <span style={{ color: 'var(--accent)' }}>&lt;</span>
            <span style={{ color: 'var(--text-primary)' }}>Satyajit</span>
            <span style={{ color: 'var(--accent-secondary)' }}>.Dev</span>
            <span style={{ color: 'var(--accent)' }}> /&gt;</span>
          </div>

          {/* Desktop Nav links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2rem'
            }}
            className="desktop-nav"
          >
            <style>{`
              @media screen and (min-width: 769px) {
                .desktop-nav { display: flex !important; }
                .mobile-toggle { display: none !important; }
              }
            `}</style>
            
            <button onClick={() => handleScroll('hero')} style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = ''}>Home</button>
            <button onClick={() => handleScroll('skills')} style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = ''}>Skills</button>
            <button onClick={() => handleScroll('projects')} style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = ''}>Projects</button>
            <button onClick={() => handleScroll('experience')} style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = ''}>Experience</button>
            <button onClick={() => handleScroll('terminal-section')} style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = ''}>Terminal</button>
            <button onClick={() => handleScroll('contact')} style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = ''}>Contact</button>
            
            <div style={{ width: '1px', height: '20px', background: 'var(--border-color)' }}></div>
            
            {/* Theme switcher */}
            <ThemeCustomizer />
          </nav>

          {/* Mobile Nav Actions */}
          <div className="mobile-toggle" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ThemeCustomizer />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.2rem'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '70px',
              left: 0,
              right: 0,
              background: 'var(--bg-primary)',
              borderBottom: '1px solid var(--border-color)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              zIndex: 99
            }}
          >
            <button onClick={() => handleScroll('hero')} style={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600 }}>Home</button>
            <button onClick={() => handleScroll('skills')} style={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600 }}>Skills</button>
            <button onClick={() => handleScroll('projects')} style={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600 }}>Projects</button>
            <button onClick={() => handleScroll('experience')} style={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600 }}>Experience</button>
            <button onClick={() => handleScroll('terminal-section')} style={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600 }}>Terminal Console</button>
            <button onClick={() => handleScroll('contact')} style={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600 }}>Contact</button>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        
        {/* Terminal Interactive Section */}
        <section className="section" id="terminal-section" style={{ borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <h2 className="section-title">Developer Terminal</h2>
            
            <p style={{
              textAlign: 'center',
              color: 'var(--text-secondary)',
              maxWidth: '650px',
              margin: '-1.5rem auto 3rem',
              fontSize: '1rem'
            }}>
              Query my portfolio directly from the source. Open files, request stack summaries, and fetch connections using standard shell commands.
            </p>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <Terminal />
            </div>
          </div>
        </section>

        <Contact />
      </main>

      {/* Footer Branding */}
      <footer
        style={{
          borderTop: '1px solid var(--border-color)',
          background: 'var(--bg-secondary)',
          padding: '2.5rem 0',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            <Code size={16} className="text-accent" />
            <span>Clean Architecture / React TypeScript</span>
          </div>
          <p>© {new Date().getFullYear()} Satyajit Senapati. All rights reserved.</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Developed dynamically following enterprise-grade styling and structures.
          </p>
        </div>
      </footer>

      {/* Floating Scroll Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            background: 'var(--accent)',
            color: '#ffffff',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px var(--accent-glow)',
            zIndex: 90,
            border: 'none',
            transition: 'var(--transition-smooth)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <ChevronUp size={20} />
        </button>
      )}

    </div>
  );
}

export default App;
