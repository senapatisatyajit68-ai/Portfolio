import React from 'react';
import { ArrowRight, Terminal as TermIcon } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section" id="hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <div 
          className="grid-2" 
          style={{ 
            alignItems: 'center',
            gap: '3rem'
          }}
        >
          {/* Hero Left Content */}
          <div style={{ textAlign: 'left' }}>
            <div 
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: '30px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                marginBottom: '1.5rem',
                fontSize: '0.85rem',
                fontWeight: 500
              }}
            >
              <span 
                style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  background: 'var(--terminal-green)',
                  boxShadow: '0 0 8px var(--terminal-green)',
                  display: 'inline-block'
                }} 
              />
              <span style={{ color: 'var(--text-secondary)' }}>Available for Projects & Full-Time Roles</span>
            </div>

            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem', textAlign: 'left' }}>
              Hi, I am <br />
              <span className="text-gradient">Satyajit Senapati</span>
            </h1>

            <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '1.5rem', textAlign: 'left' }}>
              Full-Stack Developer | C# .NET & React
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '540px' }}>
              I design enterprise backends using clean software architecture in ASP.NET Core & Entity Framework, and construct highly responsive, intuitive frontends in React & TypeScript.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button 
                onClick={() => handleScroll('contact')}
                className="btn-primary"
              >
                <span>Hire Me</span>
                <ArrowRight size={18} />
              </button>
              
              <button 
                onClick={() => handleScroll('terminal-section')}
                className="btn-secondary"
              >
                <TermIcon size={18} />
                <span>Launch CLI Console</span>
              </button>
            </div>
          </div>

          {/* Hero Right Visuals */}
          <div style={{ position: 'relative' }}>
            {/* Background Glow */}
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '300px',
                background: 'var(--accent-glow)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                zIndex: 0,
                opacity: 0.6
              }}
            />

            {/* Premium Code / Info Card (Glassmorphism) */}
            <div 
              className="glass-panel float-animation"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '2.2rem',
                border: '1px solid var(--border-color)',
                textAlign: 'left',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                maxWidth: '480px',
                margin: '0 auto',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              {/* Window Tabs Bar */}
              <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.8rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                <span style={{ marginLeft: '1rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>DeveloperProfile.cs</span>
              </div>

              {/* Pseudo Code Block */}
              <div>
                <p><span style={{ color: 'var(--accent)' }}>using</span> System.Collections.Generic;</p>
                <p><span style={{ color: 'var(--accent)' }}>using</span> React.Typescript;</p>
                <br />
                <p><span style={{ color: 'var(--accent)' }}>public class</span> <span style={{ color: 'var(--accent-secondary)' }}>SatyajitSenapati</span> : <span style={{ color: 'var(--accent-secondary)' }}>FullStackDeveloper</span></p>
                <p style={{ paddingLeft: '1rem' }}>{"{"}</p>
                
                <p style={{ paddingLeft: '2rem' }}>
                  <span style={{ color: 'var(--accent)' }}>public string</span> Role = <span style={{ color: 'var(--text-secondary)' }}>"C# .NET & React Engineer"</span>;
                </p>
                
                <p style={{ paddingLeft: '2rem' }}>
                  <span style={{ color: 'var(--accent)' }}>public string[]</span> CoreStack = <span style={{ color: 'var(--accent)' }}>new</span>[] 
                </p>
                <p style={{ paddingLeft: '3rem' }}>
                  {"{ "}
                  <span style={{ color: 'var(--text-secondary)' }}>"ASP.NET Core"</span>, 
                  <span style={{ color: 'var(--text-secondary)' }}>"Entity Framework"</span>, 
                  <span style={{ color: 'var(--text-secondary)' }}>"SQL Server"</span>, 
                  <span style={{ color: 'var(--text-secondary)' }}>"React"</span>, 
                  <span style={{ color: 'var(--text-secondary)' }}>"TypeScript"</span> 
                  {" };"}
                </p>

                <p style={{ paddingLeft: '2rem' }}>
                  <span style={{ color: 'var(--accent)' }}>public bool</span> CoffeeFueled = <span style={{ color: 'var(--accent)' }}>true</span>;
                </p>
                
                <p style={{ paddingLeft: '2rem' }}>
                  <span style={{ color: 'var(--accent)' }}>public int</span> ExperienceYears = <span style={{ color: 'var(--accent)' }}>DateTime</span>.Now.Year - <span style={{ color: 'var(--accent)' }}>2022</span>;
                </p>
                
                <p style={{ paddingLeft: '2rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  // Running clean architecture tests...
                </p>
                <p style={{ paddingLeft: '2rem' }}>
                  <span style={{ color: 'var(--accent)' }}>public bool</span> Status = <span style={{ color: 'var(--text-secondary)' }}>"Ready to construct scalable apps"</span>;
                </p>
                
                <p style={{ paddingLeft: '1rem' }}>{"}"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
