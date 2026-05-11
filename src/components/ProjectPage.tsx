import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  FileText, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { projects } from '../data/projects';
import './ProjectPage.css';

export const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="error-page">
        <h1>Project not found</h1>
        <Link to="/" className="back-link">Return to Home</Link>
      </div>
    );
  }

  return (
    <motion.div 
      className="project-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="project-page-header">
        <Link to="/" className="back-to-work">
          <ArrowLeft size={20} /> Back to work
        </Link>
        
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <h1 className="project-page-title">{project.title}</h1>
        <p className="project-page-subtitle">{project.subtitle}</p>
        
        <div className="project-meta-line">
          <span className="date">{project.date}</span>
          <span className="dot">•</span>
          <span className="status">{project.status}</span>
        </div>

        <div className="project-actions">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="action-btn primary">
              Try live app <ExternalLink size={20} />
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="action-btn secondary">
              View on GitHub <Github size={20} />
            </a>
          )}
          {project.pdfLink && (
            <a href={project.pdfLink} target="_blank" rel="noopener noreferrer" className="action-btn secondary">
              View Case Study <FileText size={20} />
            </a>
          )}
        </div>
      </header>

      <section className="key-outcome-section">
        <span className="outcome-label">KEY OUTCOME</span>
        <h2 className="outcome-value">{project.keyOutcome.value}</h2>
        <p className="outcome-desc">{project.keyOutcome.label}</p>
      </section>

      <main className="project-page-content">
        <div className="content-grid">
          {project.sections.map((section, index) => (
            <section key={index} className="content-section">
              <h2 className="section-title">{section.title}</h2>
              <div className="section-body">
                {section.content.split('\n').map((para, i) => (para ? <p key={i}>{para}</p> : <br key={i} />))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {project.featuredImage && (
        <section className="featured-image-container">
          <div className="featured-image-wrapper">
            <img src={project.featuredImage} alt={project.title} />
          </div>
        </section>
      )}

      {project.embedLink && (
        <section className="full-document-section">
          <div className="doc-header">
            <span className="doc-label">FULL DOCUMENT</span>
            <a href={project.pdfLink} target="_blank" rel="noopener noreferrer" className="open-tab">
              Open in new tab <ExternalLink size={18} />
            </a>
          </div>
          <div className="embed-container">
            <iframe 
              src={project.embedLink} 
              width="100%" 
              height="800" 
              allow="autoplay" 
              title={`${project.title} Document`}
              className="doc-iframe"
            ></iframe>
          </div>
        </section>
      )}

      <section className="impact-section-wrapper">
        <div className="section-title" style={{ marginBottom: '4rem', color: '#fff' }}>IMPACT & RESULTS</div>
        <ul className="impact-list">
          {project.impact.map((item, i) => (
            <li key={i}>
              <CheckCircle2 size={32} className="impact-icon" />
              <div className="impact-text" style={{ fontSize: '1.4rem', fontWeight: '500' }}>{item}</div>
            </li>
          ))}
        </ul>
      </section>

      {project.nextProject && (
        <footer className="project-page-footer">
          <Link to={`/project/${project.nextProject.id}`} className="next-project-card">
            <div className="next-label">NEXT PROJECT</div>
            <h3 className="next-title">
              {project.nextProject.title} <ArrowRight size={80} strokeWidth={3} />
            </h3>
          </Link>
          
          <div className="footer-bottom">
            <span className="built-with">Built with intent · 2026</span>
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/bangle-rahul-b33a71236/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="mailto:bangleahul1@gmail.com">Email</a>
            </div>
          </div>
        </footer>
      )}
    </motion.div>
  );
};
