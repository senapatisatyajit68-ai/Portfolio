import React from 'react';
import { Calendar } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section className="section" id="experience" style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>

        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '-1.5rem auto 4rem',
          fontSize: '1rem'
        }}>
          A review of my full-stack career milestones, outlining core responsibilities, team structures, and system engineering results.
        </p>

        <div className="timeline">
          {experienceData.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            
            return (
              <div 
                key={exp.id}
                style={{
                  position: 'relative',
                  width: '50%',
                  padding: '1rem 2.5rem',
                  left: isLeft ? '0' : '50%',
                  textAlign: 'left',
                  boxSizing: 'border-box'
                }}
                className={`timeline-item-${isLeft ? 'left' : 'right'}`}
              >
                {/* Custom media queries are in CSS, but let's define absolute positions here as fallback */}
                <style>{`
                  .timeline-item-left { left: 0; }
                  .timeline-item-right { left: 50%; }
                  
                  .timeline-node {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: var(--bg-primary);
                    border: 3px solid var(--accent);
                    box-shadow: 0 0 10px var(--accent-glow);
                    top: 24px;
                    z-index: 10;
                  }
                  .timeline-node-left { right: -10px; }
                  .timeline-node-right { left: -10px; }
                  
                  @media screen and (max-width: 768px) {
                    .timeline-item-left, .timeline-item-right {
                      width: 100% !important;
                      left: 0 !important;
                      padding: 1rem 1rem 1.5rem 4rem !important;
                    }
                    .timeline-node-left, .timeline-node-right {
                      left: 21px !important;
                      right: auto !important;
                    }
                  }
                `}</style>

                {/* Timeline node circle */}
                <div className={`timeline-node ${isLeft ? 'timeline-node-left' : 'timeline-node-right'}`} />

                {/* Main Card (Glass panel) */}
                <div 
                  className="glass-panel"
                  style={{
                    background: 'var(--bg-primary)',
                    padding: '1.8rem',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  {/* Job Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                        {exp.role}
                      </h3>
                      <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem' }}>
                        {exp.company}
                      </p>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.4rem', 
                      fontSize: '0.8rem', 
                      color: 'var(--text-muted)',
                      background: 'var(--bg-tertiary)',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '20px',
                      border: '1px solid var(--border-color)'
                    }}>
                      <Calendar size={12} className="text-accent" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Achievements List */}
                  <ul style={{ 
                    listStyleType: 'none', 
                    paddingLeft: 0,
                    marginBottom: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem'
                  }}>
                    {exp.description.map((desc, i) => (
                      <li 
                        key={i} 
                        style={{ 
                          fontSize: '0.9rem', 
                          color: 'var(--text-secondary)',
                          lineHeight: '1.45',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem'
                        }}
                      >
                        <span style={{ color: 'var(--accent)', marginTop: '4px', fontSize: '1rem', lineHeight: '1' }}>▪</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills badges */}
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Key Skills Deployed
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {exp.skillsUsed.map(skill => (
                        <span key={skill} className="tech-chip" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
