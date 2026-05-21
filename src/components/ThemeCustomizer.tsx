import React, { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';

export type ThemeType = 'default' | 'vs-blue' | 'cyberpunk' | 'light';

interface ThemeOption {
  id: ThemeType;
  name: string;
  dotColor: string;
  borderColor: string;
}

export const ThemeCustomizer: React.FC = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const saved = localStorage.getItem('satyajit-portfolio-theme') as ThemeType;
    return saved || 'default';
  });
  const [isOpen, setIsOpen] = useState(false);

  const themes: ThemeOption[] = [
    { id: 'default', name: 'VS Code Dark', dotColor: '#1e1e1e', borderColor: '#569cd6' },
    { id: 'vs-blue', name: 'VS Classic Blue', dotColor: '#1e293b', borderColor: '#f59e0b' },
    { id: 'cyberpunk', name: 'Cyberpunk Slate', dotColor: '#0d0d13', borderColor: '#ff007f' },
    { id: 'light', name: 'Minimalist Light', dotColor: '#ffffff', borderColor: '#4f46e5' }
  ];

  useEffect(() => {
    // Remove previous theme classes
    const bodyClass = document.body.classList;
    bodyClass.remove('theme-vs-blue', 'theme-cyberpunk', 'theme-light');
    
    if (theme !== 'default') {
      bodyClass.add(`theme-${theme}`);
    }
    
    localStorage.setItem('satyajit-portfolio-theme', theme);
  }, [theme]);

  const selectTheme = (themeId: ThemeType) => {
    setTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          border: '1px solid var(--border-color)',
          background: 'var(--bg-secondary)',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          fontSize: '0.85rem',
          fontWeight: 500,
          transition: 'var(--transition-smooth)'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = 'var(--accent)';
          e.currentTarget.style.boxShadow = '0 0 10px var(--accent-glow)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-color)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <Palette size={16} className="text-accent" />
        <span className="theme-label-text">
          {themes.find(t => t.id === theme)?.name || 'Theme'}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Overlay to close popover */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 998
            }}
          />
          
          {/* Theme Dropdown Panel */}
          <div
            style={{
              position: 'absolute',
              top: '120%',
              right: 0,
              width: '180px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '0.6rem',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.3rem'
            }}
          >
            <p style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--text-muted)',
              padding: '0.2rem 0.4rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Select IDE Theme
            </p>
            {themes.map((opt) => (
              <button
                key={opt.id}
                onClick={() => selectTheme(opt.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '0.45rem 0.6rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  background: theme === opt.id ? 'var(--bg-tertiary)' : 'transparent',
                  color: theme === opt.id ? 'var(--accent)' : 'var(--text-primary)',
                  textAlign: 'left',
                  transition: 'var(--transition-fast)'
                }}
                onMouseOver={(e) => {
                  if (theme !== opt.id) {
                    e.currentTarget.style.background = 'var(--bg-tertiary)';
                  }
                }}
                onMouseOut={(e) => {
                  if (theme !== opt.id) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: opt.dotColor,
                      border: `1.5px solid ${opt.borderColor}`,
                      display: 'inline-block'
                    }}
                  />
                  <span>{opt.name}</span>
                </div>
                {theme === opt.id && <Check size={14} style={{ color: 'var(--accent)' }} />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
