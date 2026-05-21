import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TermIcon, RefreshCw } from 'lucide-react';
import { skillsData, projectsData, experienceData } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'systeminfo',
      output: (
        <div style={{ color: 'var(--text-secondary)' }}>
          <p style={{ color: 'var(--terminal-green)', fontWeight: 'bold' }}>Welcome to Satyajit's Developer Console v1.0.0</p>
          <p>Type <span style={{ color: 'var(--accent)' }}>help</span> to see a list of available commands and query the database.</p>
          <p style={{ margin: '0.5rem 0' }}>---------------------------------------------------------</p>
        </div>
      )
    }
  ]);
  
  const [isMaximized, setIsMaximized] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <div style={{ paddingLeft: '0.5rem' }}>
            <p style={{ color: 'var(--accent)', fontWeight: 'bold', marginBottom: '0.2rem' }}>Available Commands:</p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.25rem' }}>
              <li><span style={{ color: 'var(--terminal-green)' }}>about</span> - Profile info</li>
              <li><span style={{ color: 'var(--terminal-green)' }}>skills</span> - Backend & frontend stack</li>
              <li><span style={{ color: 'var(--terminal-green)' }}>projects</span> - Showcase of applications</li>
              <li><span style={{ color: 'var(--terminal-green)' }}>experience</span> - Career history</li>
              <li><span style={{ color: 'var(--terminal-green)' }}>contact</span> - Social networks</li>
              <li><span style={{ color: 'var(--terminal-green)' }}>clear</span> - Flush the terminal logs</li>
            </ul>
          </div>
        );
        break;
      case 'about':
        output = (
          <div style={{ paddingLeft: '0.5rem' }}>
            <p><span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Name:</span> Satyajit Senapati</p>
            <p><span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Role:</span> Full-Stack Developer (.NET & React)</p>
            <p><span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Summary:</span> I engineer enterprise-scale backend architectures in C# / .NET Core, linked with fluid, interactive frontend components in React and TypeScript.</p>
          </div>
        );
        break;
      case 'skills':
        output = (
          <div style={{ paddingLeft: '0.5rem' }}>
            <p style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Backend Technologies:</p>
            <p style={{ color: 'var(--text-secondary)' }}>
              {skillsData.filter(s => s.category === 'backend').map(s => s.name).join(', ')}
            </p>
            <p style={{ color: 'var(--accent)', fontWeight: 'bold', marginTop: '0.5rem' }}>Frontend Technologies:</p>
            <p style={{ color: 'var(--text-secondary)' }}>
              {skillsData.filter(s => s.category === 'frontend').map(s => s.name).join(', ')}
            </p>
            <p style={{ color: 'var(--accent)', fontWeight: 'bold', marginTop: '0.5rem' }}>Databases & DevOps:</p>
            <p style={{ color: 'var(--text-secondary)' }}>
              {skillsData.filter(s => ['database', 'devops'].includes(s.category)).map(s => s.name).join(', ')}
            </p>
          </div>
        );
        break;
      case 'projects':
        output = (
          <div style={{ paddingLeft: '0.5rem' }}>
            <p style={{ color: 'var(--accent)', fontWeight: 'bold', marginBottom: '0.2rem' }}>Core Projects Catalog:</p>
            {projectsData.map(p => (
              <div key={p.id} style={{ marginBottom: '0.5rem' }}>
                <p style={{ color: 'var(--terminal-green)', fontWeight: 'bold' }}>&gt; {p.title}</p>
                <p style={{ fontSize: '0.85rem' }}>{p.description}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Stack: {p.tags.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;
      case 'experience':
        output = (
          <div style={{ paddingLeft: '0.5rem' }}>
            {experienceData.map(exp => (
              <div key={exp.id} style={{ marginBottom: '0.5rem' }}>
                <p style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{exp.role} @ {exp.company}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{exp.period}</p>
                <ul style={{ paddingLeft: '1rem', listStyleType: 'square' }}>
                  {exp.description.map((desc, i) => (
                    <li key={i} style={{ fontSize: '0.85rem' }}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
        break;
      case 'contact':
        output = (
          <div style={{ paddingLeft: '0.5rem' }}>
            <p>📧 Email: <a href="mailto:satyajit.senapati@example.com" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>satyajit.senapati@example.com</a></p>
            <p>🐙 GitHub: <a href="https://github.com/satyajit-senapati" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>github.com/satyajit-senapati</a></p>
            <p>🔗 LinkedIn: <a href="https://linkedin.com/in/satyajit-senapati" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>linkedin.com/in/satyajit-senapati</a></p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        output = (
          <p style={{ color: 'red' }}>
            Command "{cmd}" not recognized. Type <span style={{ color: 'var(--accent)', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => setInput('help')}>help</span> for valid commands.
          </p>
        );
    }

    setHistory(prev => [...prev, { command: input, output }]);
    setInput('');
  };

  const handleResetTerminal = () => {
    setHistory([
      {
        command: 'systeminfo',
        output: (
          <div style={{ color: 'var(--text-secondary)' }}>
            <p style={{ color: 'var(--terminal-green)', fontWeight: 'bold' }}>Welcome to Satyajit's Developer Console v1.0.0</p>
            <p>Type <span style={{ color: 'var(--accent)' }}>help</span> to see a list of available commands and query the database.</p>
            <p style={{ margin: '0.5rem 0' }}>---------------------------------------------------------</p>
          </div>
        )
      }
    ]);
    setInput('');
  };

  return (
    <div 
      className={`glass-panel`} 
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.9rem',
        padding: 0,
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-lg)',
        height: isMaximized ? '75vh' : '450px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      onClick={focusInput}
    >
      {/* Terminal Title Bar */}
      <div 
        style={{
          background: 'var(--bg-tertiary)',
          padding: '0.6rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--border-color)',
          userSelect: 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <TermIcon size={16} className="text-accent" />
          <span style={{ fontWeight: 500, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>satyajit@terminal:~ (react-ts-dev)</span>
        </div>
        
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
          <button 
            onClick={(e) => { e.stopPropagation(); handleResetTerminal(); }}
            title="Reset Terminal Log"
            style={{ color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <RefreshCw size={14} />
          </button>
          <div style={{ width: '1px', height: '14px', background: 'var(--border-color)' }}></div>
          
          {/* OS-Style Window Buttons */}
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <span 
              onClick={(e) => { e.stopPropagation(); }} 
              style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', cursor: 'pointer', display: 'inline-block' }}
            ></span>
            <span 
              onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }} 
              style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', cursor: 'pointer', display: 'inline-block' }}
              title="Toggle Size"
            ></span>
            <span 
              style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}
            ></span>
          </div>
        </div>
      </div>

      {/* Terminal Log Console */}
      <div 
        style={{
          flex: 1,
          padding: '1.2rem',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          textAlign: 'left'
        }}
      >
        {history.map((item, idx) => (
          <div key={idx}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.3rem' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>satyajit@portfolio:~$</span>
              <span style={{ color: 'var(--text-primary)' }}>{item.command}</span>
            </div>
            {item.output && (
              <div style={{ color: 'var(--text-secondary)', paddingLeft: '0.5rem' }}>
                {item.output}
              </div>
            )}
          </div>
        ))}
        
        {/* Active Input Line */}
        <form onSubmit={handleCommand} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', width: '100%' }}>
          <span style={{ color: 'var(--accent)', fontWeight: 600, whiteSpace: 'nowrap' }}>satyajit@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              caretColor: 'var(--accent)'
            }}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        </form>
        <div ref={terminalEndRef} />
      </div>
      
      {/* Help bar at bottom */}
      <div 
        style={{
          background: 'var(--bg-secondary)',
          padding: '0.4rem 1rem',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <span>Type 'help' to start</span>
        <span>Escaped CLI Hub</span>
      </div>
    </div>
  );
};
