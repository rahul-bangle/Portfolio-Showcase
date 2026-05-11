import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import './AllProjects.css';

export const AllProjects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="all-projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="all-projects-header">
        <Link to="/" className="back-to-home">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        <h1 className="all-projects-title">All <span>Projects</span></h1>
        <p className="all-projects-subtitle">
          A collection of products, audits, and experiments I've built or led.
        </p>
      </header>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="project-list-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={`/project/${project.id}`} className="project-list-link">
              <div className="project-list-info">
                <div className="project-list-meta">
                  <span className="project-list-date">{project.date}</span>
                  <span className="project-list-tag">{project.tags[0]}</span>
                </div>
                <h3 className="project-list-title">{project.title}</h3>
                <p className="project-list-desc">{project.subtitle}</p>
              </div>
              <div className="project-list-action">
                View Case Study <ArrowRight size={20} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <footer className="all-projects-footer">
        <p>Built with intent · 2026</p>
      </footer>
    </motion.div>
  );
};
