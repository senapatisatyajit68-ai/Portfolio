import React, { useState } from 'react';
import { Calendar, Building, ChevronRight, Terminal, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeExp = experienceData[activeTab];

  // Helper to map bullet descriptions to structured impact cards
  const getImpactTitle = (text: string): string => {
    if (text.toLowerCase().includes('architect') || text.toLowerCase().includes('clean architecture')) {
      return 'System Architecture';
    }
    if (text.toLowerCase().includes('react') || text.toLowerCase().includes('frontend') || text.toLowerCase().includes('layout')) {
      return 'Frontend Engineering';
    }
    if (text.toLowerCase().includes('sql') || text.toLowerCase().includes('database') || text.toLowerCase().includes('query')) {
      return 'Database & Performance';
    }
    if (text.toLowerCase().includes('ci/cd') || text.toLowerCase().includes('docker') || text.toLowerCase().includes('pipelines')) {
      return 'DevOps & Automation';
    }
    if (text.toLowerCase().includes('signalr') || text.toLowerCase().includes('real-time') || text.toLowerCase().includes('notifications')) {
      return 'Real-time Systems';
    }
    return 'Core Contribution';
  };

  const getImpactEmoji = (title: string): string => {
    switch (title) {
      case 'System Architecture': return '🏗️';
      case 'Frontend Engineering': return '💻';
      case 'Database & Performance': return '⚡';
      case 'DevOps & Automation': return '🔄';
      case 'Real-time Systems': return '🔌';
      default: return '🚀';
    }
  };

  return (
    <section className="section" id="experience" style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>

        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          maxWidth: '650px',
          margin: '-1.5rem auto 4rem',
          fontSize: '1.05rem',
          lineHeight: '1.6'
        }}>
          An interactive record of my software engineering career, showcasing architectural influence, frontend details, and database tuning.
        </p>

        {/* Tabbed Experience Box */}
        <div 
          className="glass-panel"
          style={{
            background: 'var(--bg-primary)',
            padding: '2.5rem',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            gap: '3rem',
            maxWidth: '1050px',
            margin: '0 auto',
            textAlign: 'left'
          }}
          className="experience-container"
        >
          <style>{`
            .experience-container {
              display: flex;
              flex-direction: row;
              gap: 3rem;
            }
            .company-tabs {
              display: flex;
              flex-direction: column;
              gap: 0.6rem;
              min-width: 240px;
              border-right: 2px solid var(--border-color);
              padding-right: 1.5rem;
            }
            .company-tab-btn {
              display: flex;
              align-items: center;
              justifyContent: space-between;
              padding: 1rem 1.2rem;
              border-radius: 12px;
              cursor: pointer;
              font-weight: 600;
              font-size: 0.95rem;
              text-align: left;
              transition: var(--transition-smooth);
              color: var(--text-secondary);
              border: 1px solid transparent;
            }
            .company-tab-btn.active {
              background: var(--bg-tertiary);
              color: var(--accent);
              border-color: var(--border-color);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 10px var(--accent-glow);
            }
            .company-tab-btn:hover:not(.active) {
              background: rgba(255, 255, 255, 0.03);
              color: var(--text-primary);
              transform: translateX(3px);
            }
            .impact-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 1.5rem;
              margin-top: 1.5rem;
            }
            .impact-card {
              background: var(--bg-tertiary);
              border: 1px solid var(--border-color);
              border-radius: 12px;
              padding: 1.2rem;
              transition: var(--transition-smooth);
            }
            .impact-card:hover {
              transform: translateY(-2px);
              border-color: var(--accent);
              box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2), 0 0 8px var(--accent-glow);
            }
            
            @media screen and (max-width: 900px) {
              .experience-container {
                flex-direction: column;
                gap: 2rem;
                padding: 1.5rem !important;
              }
              .company-tabs {
                flex-direction: row;
                width: 100%;
                border-right: none;
                border-bottom: 2px solid var(--border-color);
                padding-right: 0;
                padding-bottom: 1rem;
                overflow-x: auto;
                gap: 0.8rem;
              }
              .company-tab-btn {
                white-space: nowrap;
                padding: 0.8rem 1.2rem;
              }
              .company-tab-btn:hover:not(.active) {
                transform: none;
              }
              .impact-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>

          {/* Left Column: Company Selector Tabs */}
          <div className="company-tabs">
            {experienceData.map((exp, idx) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(idx)}
                className={`company-tab-btn ${activeTab === idx ? 'active' : ''}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Building size={16} />
                  <span>{exp.company}</span>
                </div>
                <ChevronRight size={14} className="tab-arrow" style={{ opacity: activeTab === idx ? 1 : 0, transition: 'var(--transition-fast)' }} />
              </button>
            ))}
          </div>

          {/* Right Column: Experience Details Panel */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Header info */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.8rem' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {activeExp.role}
                </h3>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  fontSize: '0.85rem', 
                  fontWeight: 600,
                  color: 'var(--accent)',
                  background: 'var(--accent-glow)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '30px',
                  border: '1px solid var(--accent)'
                }}>
                  <Calendar size={14} />
                  <span>{activeExp.period}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '1.05rem', fontWeight: 500 }}>
                <Building size={18} className="text-accent" />
                <span>{activeExp.company}</span>
              </div>
            </div>

            {/* Impact Grid (Converts plain bullets into premium action cards) */}
            <div>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                Key Impact Areas
              </p>
              
              <div className="impact-grid">
                {activeExp.description.map((bullet, idx) => {
                  const cardTitle = getImpactTitle(bullet);
                  const emoji = getImpactEmoji(cardTitle);
                  
                  return (
                    <div key={idx} className="impact-card">
                      <h4 style={{ 
                        fontSize: '0.95rem', 
                        fontWeight: 700, 
                        color: 'var(--text-primary)', 
                        marginBottom: '0.6rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span>{emoji}</span>
                        {cardTitle}
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                        {bullet}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Skills deployed in this role */}
            <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
              <h5 style={{ 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                color: 'var(--text-muted)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em', 
                marginBottom: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <Sparkles size={12} className="text-accent" />
                Technologies Deployed
              </h5>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {activeExp.skillsUsed.map((skill) => (
                  <span 
                    key={skill} 
                    className="tech-chip" 
                    style={{ 
                      fontSize: '0.78rem', 
                      padding: '0.3rem 0.8rem',
                      background: 'var(--bg-tertiary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
