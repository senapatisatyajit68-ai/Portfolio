import React from 'react';
import * as Icons from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  // Helper to render the corresponding Lucide React icon by name
  const renderIcon = (iconName: string) => {
    // Fallback if icon name doesn't match
    const IconComponent = (Icons as any)[iconName] || Icons.Code;
    return <IconComponent size={20} className="text-accent" />;
  };

  const categories = [
    { key: 'backend', label: 'Backend Engineering' },
    { key: 'frontend', label: 'Frontend & UI' },
    { key: 'database', label: 'Data & Storage' },
    { key: 'devops', label: 'DevOps & Services' }
  ];

  return (
    <section className="section" id="skills" style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Tech Capabilities</h2>
        
        <p style={{ 
          textAlign: 'center', 
          color: 'var(--text-secondary)', 
          maxWidth: '600px', 
          margin: '-1.5rem auto 3.5rem',
          fontSize: '1rem'
        }}>
          A curated ecosystem of software systems and web tools I leverage daily to architect and build robust end-to-end applications.
        </p>

        <div className="grid-2" style={{ gap: '2.5rem' }}>
          {categories.map((cat) => {
            const skillsInCat = skillsData.filter((s) => s.category === cat.key);
            
            return (
              <div 
                key={cat.key} 
                className="glass-panel"
                style={{
                  background: 'var(--bg-primary)',
                  textAlign: 'left',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 600, 
                  marginBottom: '1.5rem', 
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  borderBottom: '1px solid var(--border-color)',
                  paddingBottom: '0.6rem'
                }}>
                  <span style={{ 
                    width: '6px', 
                    height: '14px', 
                    background: 'var(--accent)', 
                    borderRadius: '2px',
                    display: 'inline-block' 
                  }}/>
                  {cat.label}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  {skillsInCat.map((skill) => (
                    <div 
                      key={skill.name}
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center' 
                      }}
                    >
                      {/* Name & Icon */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <div 
                          style={{ 
                            width: '36px', 
                            height: '36px', 
                            borderRadius: '8px', 
                            background: 'var(--bg-tertiary)', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            border: '1px solid var(--border-color)'
                          }}
                        >
                          {renderIcon(skill.iconName)}
                        </div>
                        <span style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                          {skill.name}
                        </span>
                      </div>

                      {/* Proficiency Indicator (5 blocks) */}
                      <div style={{ display: 'flex', gap: '4px' }}>
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            style={{
                              width: '12px',
                              height: '12px',
                              borderRadius: '3px',
                              background: i < skill.level ? 'var(--accent)' : 'var(--bg-tertiary)',
                              boxShadow: i < skill.level ? '0 0 5px var(--accent-glow)' : 'none',
                              opacity: i < skill.level ? 1 : 0.4,
                              transition: 'var(--transition-smooth)'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
