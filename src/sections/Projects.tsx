import React, { useState } from 'react';
import { ExternalLink, X, Database, ShieldAlert, Cpu, GitBranch, ArrowRight, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from '../components/SocialIcons';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = ''; // Release background scroll
  };

  return (
    <section className="section" id="projects" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2 className="section-title">Projects Showcase</h2>

        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          maxWidth: '650px',
          margin: '-1.5rem auto 3rem',
          fontSize: '1rem'
        }}>
          Explore technical case studies of applications I have built, ranging from containerized backend microservices to clean architecture APIs and responsive React boards.
        </p>

        {/* Filter Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.6rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {(['all', 'backend', 'frontend', 'fullstack'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                textTransform: 'capitalize',
                background: activeFilter === filter ? 'var(--accent)' : 'var(--bg-secondary)',
                color: activeFilter === filter ? '#ffffff' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: activeFilter === filter ? 'var(--accent)' : 'var(--border-color)',
                transition: 'var(--transition-smooth)',
                boxShadow: activeFilter === filter ? '0 4px 12px var(--accent-glow)' : 'none'
              }}
              onMouseOver={(e) => {
                if (activeFilter !== filter) {
                  e.currentTarget.style.borderColor = 'var(--text-muted)';
                }
              }}
              onMouseOut={(e) => {
                if (activeFilter !== filter) {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }
              }}
            >
              {filter === 'fullstack' ? 'Full Stack' : filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-2" style={{ gap: '2rem' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'left',
                padding: '2.2rem',
                height: '100%',
                cursor: 'pointer'
              }}
              onClick={() => openModal(project)}
            >
              <div>
                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                  {project.tags.slice(0, 4).map(tag => (
                    <span key={tag} className="tech-chip">{tag}</span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="tech-chip" style={{ opacity: 0.7 }}>+{project.tags.length - 4} more</span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                
                <h4 style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--accent)', marginBottom: '1rem' }}>
                  {project.subtitle}
                </h4>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineBreak: 'strict' }}>
                  {project.description}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Category: <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{project.category}</span>
                </span>
                
                <button
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    cursor: 'pointer'
                  }}
                >
                  <span>Details</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Overlay Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1.5rem'
          }}
          onClick={closeModal}
        >
          <div
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '850px',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-color)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-lg)',
              cursor: 'default',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()} // Stop click closing modal
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1.2rem',
                right: '1.2rem',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '0.3rem',
                borderRadius: '50%',
                background: 'var(--bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition-fast)'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.8rem' }}>
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="tech-chip" style={{ background: 'var(--bg-tertiary)' }}>{tag}</span>
                ))}
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {selectedProject.title}
              </h3>
              <p style={{ color: 'var(--accent)', fontWeight: 500, fontSize: '1.05rem' }}>
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Modal Content Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left' }}>
              
              {/* Problem & Solution */}
              <div className="grid-2" style={{ gap: '1.5rem' }}>
                <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.8rem', fontSize: '1.05rem' }}>
                    <ShieldAlert size={18} style={{ color: '#ef4444' }} />
                    The Problem
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {selectedProject.details.problem}
                  </p>
                </div>

                <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.8rem', fontSize: '1.05rem' }}>
                    <Cpu size={18} style={{ color: 'var(--terminal-green)' }} />
                    The Solution
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {selectedProject.details.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Design */}
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>
                  <Layers size={18} className="text-accent" />
                  System Architecture Outline
                </h4>
                <div style={{ 
                  background: 'var(--bg-secondary)', 
                  padding: '1.2rem 1.5rem', 
                  borderRadius: '12px', 
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem'
                }}>
                  {selectedProject.details.architecture.map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                      <span style={{ 
                        background: 'var(--bg-tertiary)', 
                        color: 'var(--accent)', 
                        minWidth: '22px', 
                        height: '22px', 
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        border: '1px solid var(--border-color)',
                        marginTop: '2px'
                      }}>
                        {idx + 1}
                      </span>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', flex: 1 }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* APIs Endpoint Details (if backend/fullstack) */}
              {selectedProject.details.apis && (
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>
                    <GitBranch size={18} className="text-accent" />
                    Web API & Services Contracts
                  </h4>
                  <div style={{ 
                    background: 'var(--bg-secondary)', 
                    padding: '1.2rem 1.5rem', 
                    borderRadius: '12px', 
                    border: '1px solid var(--border-color)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}>
                    {selectedProject.details.apis.map((api, idx) => {
                      const parts = api.split(' - ');
                      const endpoint = parts[0];
                      const desc = parts[1];
                      const verb = endpoint.split(' ')[0];
                      const route = endpoint.split(' ')[1];
                      
                      const getVerbColor = (v: string) => {
                        if (v === 'GET') return '#10b981';
                        if (v === 'POST') return '#3b82f6';
                        if (v === 'PUT') return '#f59e0b';
                        if (v === 'DELETE') return '#ef4444';
                        return 'var(--text-muted)';
                      };

                      return (
                        <div key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                          <div>
                            <span style={{ color: getVerbColor(verb), fontWeight: 700, marginRight: '0.5rem' }}>{verb}</span>
                            <span style={{ color: 'var(--text-primary)' }}>{route}</span>
                          </div>
                          <span style={{ color: 'var(--text-muted)' }}>{desc}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Database Schema Models (if database details available) */}
              {selectedProject.details.databaseModel && (
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>
                    <Database size={18} className="text-accent" />
                    Relational Schema Mappings
                  </h4>
                  <ul style={{ 
                    background: 'var(--bg-secondary)', 
                    padding: '1.2rem 1.5rem', 
                    borderRadius: '12px', 
                    border: '1px solid var(--border-color)',
                    listStyleType: 'disc',
                    paddingLeft: '2.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem'
                  }}>
                    {selectedProject.details.databaseModel.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Footer Links */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub Repository</span>
                </a>
                
                {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demonstration</span>
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
