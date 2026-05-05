import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  User, 
  Briefcase, 
  MousePointer2, 
  Globe, 
  Mail, 
  FileText,
  Linkedin,
  Download,
  Bot,
  Zap,
  Cpu,
  Layers,
  Search,
  ArrowRight
} from 'lucide-react';
import avatar from './assets/avatar.png';
import mcTeamPanel from './assets/projects/mission-control/team-panel.png';
import { ComparisonCanvas } from './components/ComparisonCanvas';
import { ProjectCarousel } from './components/ProjectCarousel';
import { SideQuestCard } from './components/SideQuestCard';
import MyWorldCanvas from './components/MyWorldCanvas';
import { ContactWidget } from './components/ContactWidget';
import { ProjectPage } from './components/ProjectPage';
import nlHome from './assets/projects/nextleap/nextleap-1-home.png';
import nlVoice from './assets/projects/nextleap/nextleap-2-voice.png';
import nlResult from './assets/projects/nextleap/nextleap-3-result.png';
import hhScan from './assets/projects/nextleap/camera-scan.png';
import hhWave from './assets/projects/nextleap/waveforms.png';
import pmCopilotImg from './assets/projects/side-quests/pm-copilot.png';
import jobAutomatorImg from './assets/projects/side-quests/job-automator.png';
import './App.css';

const Home = () => {
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'approach', 'my-world'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Intersection observer logic remains for potential future use
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="hero" className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-title">
            I'm <span>Rahul.</span><br />
            Product Manager.
          </h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I don't design products. I decide which ones <span className="highlight">deserve to exist</span> and then make sure users actually love them.
          </motion.p>
        </motion.div>

        <motion.div 
          className="hero-avatar-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={avatar} alt="Rahul Avatar" className="hero-avatar" />
        </motion.div>
      </section>

      <section id="about" className="about-container">
        <div className="section-label">ABOUT ME</div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-text">
            I take <span className="highlight-box">messy</span>, <span className="highlight-box">ambiguous problems</span> and turn them into <span className="highlight-box">products that actually ship</span>. 
            <br /><br />
            I obsess over the <span className="highlight-box">"why"</span> before the <span className="highlight-box">"what"</span>: whether that's an <span className="highlight-box">AI agent</span> deciding user flows, an <span className="highlight-box">automation</span> killing manual grunt work, or a feature that quietly makes someone's day <span className="highlight-box">10x easier</span>.
            <br /><br />
            I'm always finding the <span className="highlight-box">balance</span> between what <span className="highlight-box">users need</span>, what the <span className="highlight-box">business wants</span>, and what <span className="highlight-box">engineering</span> will <span className="highlight-box">realistically build</span>. My job is making sure all three <span className="highlight-box">actually agree</span>.
          </div>

        </motion.div>

        <div className="doodle-left">
          <svg viewBox="0 0 100 100" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round">
            <path d="M10,50 Q30,10 50,50 T90,50" />
            <circle cx="90" cy="50" r="2" fill="#000" />
          </svg>
        </div>
        <div className="doodle-right">
          <svg viewBox="0 0 100 100" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round">
            <path d="M50,10 L50,90 M10,50 L90,50 M30,30 L70,70 M70,30 L30,70" />
            <circle cx="50" cy="50" r="10" />
          </svg>
        </div>
      </section>

      <section className="stack-section">
        <div className="stack-intro">
          <div className="section-label">The Engine</div>
          <h2 className="stack-title">My Agentic <span>PM Stack</span></h2>
        </div>

        <motion.div 
          className="stack-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <motion.div 
            className="stack-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
            }}
          >
            <div className="stack-icon-wrapper">
              <Search size={28} />
            </div>
            <h3>Discovery & Strategy</h3>
            <p>Identifying unarticulated needs and mapping "Jobs-to-be-Done" to turn ambiguous chaos into high-fidelity roadmaps.</p>
            <div className="stack-tools">
              <span className="tool-tag">Claude</span>
              <span className="tool-tag">Notion</span>
              <span className="tool-tag">JTBD Mapping</span>
              <span className="tool-tag">ICE-Scoring</span>
            </div>
          </motion.div>

          <motion.div 
            className="stack-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
            }}
          >
            <div className="stack-icon-wrapper">
              <Cpu size={28} />
            </div>
            <h3>Agentic Orchestration</h3>
            <p>Building autonomous, self-correcting systems and multi-agent workflows to eliminate operational friction and manual overhead.</p>
            <div className="stack-tools">
              <span className="tool-tag">n8n</span>
              <span className="tool-tag">OpenClaw</span>
              <span className="tool-tag">Multi-Agent Flows</span>
              <span className="tool-tag">Automation</span>
            </div>
          </motion.div>

          <motion.div 
            className="stack-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
            }}
          >
            <div className="stack-icon-wrapper">
              <Layers size={28} />
            </div>
            <h3>Technical Delivery</h3>
            <p>Bridging the gap between LLM capabilities and user value with scalable, agent-first infrastructure and API-driven logic.</p>
            <div className="stack-tools">
              <span className="tool-tag">AntiGravity</span>
              <span className="tool-tag">FastAPI</span>
              <span className="tool-tag">SQL</span>
              <span className="tool-tag">System Design</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="stats-cta-container">
        <div className="section-label">QUICK FACTS</div>
        
        <div className="facts-grid">
          <div className="fact-item">
            <div className="number">4+</div>
            <div className="label">Years of Experience</div>
          </div>
          <div className="fact-item">
            <div className="number">3</div>
            <div className="label">AI Products Shipped</div>
          </div>
          <div className="fact-item">
            <div className="number">500+</div>
            <div className="label">Insights Analyzed</div>
          </div>
        </div>

        <div className="cta-buttons">
          <a href="mailto:bangleahul1@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Rahul,%0A%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20role%20with%20our%20team!" className="btn-secondary">
            <Mail size={24} /> Let's Work Together
          </a>
          <a href="/Rahul_Bangle_APM_Resume_v4.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Download size={24} /> Download Resume
          </a>
        </div>
      </section>

      <section id="projects" className="projects-container">
        <h2 className="projects-title">projects <span>showcase</span></h2>
        
        <motion.div 
          className="project-card clickable"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Link to="/project/mission-control" className="project-card-link">
            <div className="project-header">
              <span className="project-tag">Personal Project</span>
              <span className="project-status shipped">Shipped</span>
            </div>
            <h3 className="project-title">Mission Control: AI Operations Dashboard</h3>
            <p className="project-subtitle">Built a command center to manage AI agents, automate tasks, and track operations in real-time. Because spreadsheets weren't cutting it.</p>
            
            <div className="project-meta">
              <div className="meta-column">
                <div className="meta-section">
                  <span className="meta-label">ROLE</span>
                  <span className="meta-content">Solo Builder (PM + Eng)</span>
                </div>
                <div className="meta-section">
                  <span className="meta-label">PROBLEM</span>
                  <span className="meta-content">No single place to see what my AI agents were doing, when, and whether it worked.</span>
                </div>
              </div>
              <div className="meta-column">
                <div className="meta-section">
                  <span className="meta-label">STACK</span>
                  <span className="meta-content">React · Supabase · FastAPI · Python</span>
                </div>
                <div className="meta-section">
                  <span className="meta-label">IMPACT</span>
                  <ul className="project-features">
                    <li>99% efficiency score tracked live</li>
                    <li>Real-time Supabase sync</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="project-screenshot-featured">
              <div className="project-screenshot-wrapper large">
                <img src={mcTeamPanel} alt="Mission Control Team Panel" />
              </div>
            </div>
            <div className="view-case-study">
              View Case Study <ArrowRight size={18} />
            </div>
          </Link>
        </motion.div>

        <motion.div 
          className="project-card clickable"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <Link to="/project/sprout" className="project-card-link">
            <div className="project-header">
              <span className="project-tag">Product Teardown</span>
              <span className="project-status audit">Unprompted Audit</span>
            </div>
            <h3 className="project-title">Sprout: Onboarding UX Teardown</h3>
            <p className="project-subtitle">Unprompted product audit. I tore this down because the onboarding was actively hurting users.</p>
            
            <div className="project-meta">
              <div className="meta-column">
                <div className="meta-section">
                  <span className="meta-label">ROLE</span>
                  <span className="meta-content">Self-initiated PM analysis</span>
                </div>
                <div className="meta-section">
                  <span className="meta-label">PROBLEM</span>
                  <span className="meta-content">Sprout's 30-step onboarding flow had dark patterns and unnecessary friction.</span>
                </div>
              </div>
              <div className="meta-column">
                <div className="meta-section">
                  <span className="meta-label">IMPACT</span>
                  <ul className="project-features">
                    <li>Identified 7 dark patterns</li>
                    <li><span className="impact-highlight">Redesigned flow</span> to 5 screens</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="annotation-anchor">
              <ComparisonCanvas />
            </div>
            <div className="view-case-study">
              View Case Study <ArrowRight size={18} />
            </div>
          </Link>
        </motion.div>

        <motion.div 
          className="project-card clickable"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <Link to="/project/chatgpt-voice" className="project-card-link">
            <div className="project-header">
              <span className="project-tag">PM Fellowship</span>
              <span className="project-status shipped">Completed</span>
            </div>
            <h3 className="project-title">ChatGPT Voice India: Homework Helper</h3>
            <p className="project-subtitle">Identified a 50M+ user gap in ChatGPT's India strategy. Designed a voice-first feature for non-English medium parents.</p>
            
            <div className="project-meta">
              <div className="meta-column">
                <div className="meta-section">
                  <span className="meta-label">ROLE</span>
                  <span className="meta-content">PM Fellow: research, PRD, wireframes.</span>
                </div>
                <div className="meta-section">
                  <span className="meta-label">IMPACT</span>
                  <ul className="project-features">
                    <li><span className="impact-highlight">50-70M unlockable users</span></li>
                    <li><span className="impact-highlight">83% discoverability gap</span></li>
                  </ul>
                </div>
              </div>
              <div className="meta-column">
                <div className="meta-section">
                  <span className="meta-label">DELIVERABLES</span>
                  <ul className="project-features">
                    <li>Full PRD & Wireframes</li>
                    <li>Experiment plan</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="carousel-wrapper" style={{ position: 'relative' }}>
              <ProjectCarousel images={[nlHome, nlVoice, nlResult, hhScan, hhWave]} />
            </div>
            <div className="view-case-study">
              View Case Study <ArrowRight size={18} />
            </div>
          </Link>
        </motion.div>

      </section>

      {/* Side Quests Section */}
      <section className="side-quests-section">
        <h2 className="side-quests-title">and a few other side quests</h2>
        <div className="side-quests-grid">
          <SideQuestCard 
            index={0}
            icon={Bot}
            title="PM Copilot"
            category="Operational Efficiency"
            ahaMoment="Too much time was going into rewriting docs instead of actually thinking about the product."
            metric="5-7 hrs/week saved"
            description="A modular agent system built to eliminate 'Cold-Start' friction. Features a PRD Drafting Agent that transforms raw ideas into structured, technical specs instantly."
            tags={["LLM Orchestration", "Prompt Eng", "Product Ops"]}
            image={pmCopilotImg}
          />
          <SideQuestCard 
            index={1}
            icon={Zap}
            title="Job Automator"
            category="Funnel Optimization"
            ahaMoment="Tracking applications manually was messy, repetitive, and I kept losing track of high-quality roles."
            metric="6-8 hrs/week saved"
            description="Engineered an automated ingestion engine with 'Match Scoring' to solve decision fatigue. Uses Review-First routing to prioritize high-intent roles based on relevance."
            tags={["Automation", "Scraping Logic", "React/Supabase"]}
            image={jobAutomatorImg}
          />
        </div>
      </section>
      
      {/* My Approach Section */}
      <section id="approach" className="approach-section">
        <div className="approach-container">
          <div className="approach-left">
            <div className="approach-sticky-content">
              <h2 className="approach-title">my<br /><span>approach</span></h2>
              <p className="approach-subtext">
                4 years of ops and sales taught me one thing: users don't care about features. They care about outcomes.
              </p>
              <div className="approach-cta">
                <a href="mailto:bangleahul1@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Rahul,%0A%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20role%20with%20our%20team!" className="btn-secondary">
                  <Mail size={20} /> Let's Work Together
                </a>
                <a href="/Rahul_Bangle_APM_Resume_v4.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <Download size={20} /> Download Resume
                </a>
              </div>
            </div>
          </div>
          
          <div className="approach-right">
            {[
              {
                title: "Start with the Why, not the What",
                highlight: "Why",
                description: "I never jump to solutions. First I ask: is this the right problem? For whom? Why now?"
              },
              {
                title: "Survive Ambiguity",
                highlight: "Ambiguity",
                description: "I break messy, undefined problems into actionable steps and ship something real."
              },
              {
                title: "Ship Fast, Learn Faster",
                highlight: "Ship Fast",
                description: "Ugly prototypes beat perfect ideas stuck in docs. Test, learn, and iterate."
              },
              {
                title: "Every question needs a user benefit",
                highlight: "user benefit",
                description: "If a feature can't answer \"what does the user get?\" it doesn't ship."
              },
              {
                title: "Decisions over opinions",
                highlight: "opinions",
                description: "I prioritize with data, defend with reasoning, and know when to kill a feature I personally love."
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                className="approach-card"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="approach-card-title">
                  {step.title.split(step.highlight).map((part, index, array) => (
                    <span key={index}>
                      {part}
                      {index < array.length - 1 && <span className="highlight-box">{step.highlight}</span>}
                    </span>
                  ))}
                </h3>
                <p className="approach-card-description">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="my-world">
        <MyWorldCanvas />
      </section>
      
      <ContactWidget />
    </>
  );
};

function App() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project/');

  return (
    <main>
      <nav className={`navbar ${isProjectPage ? 'project-nav' : ''}`}>
        <Link to="/" className="nav-logo-link">
          <div className="nav-logo">RB</div>
        </Link>
        {!isProjectPage && (
          <div className="nav-links">
            <a href="#about" className="nav-item"><User size={16} /> <span>About</span></a>
            <a href="#projects" className="nav-item"><Briefcase size={16} /> <span>Projects</span></a>
            <a href="#approach" className="nav-item"><MousePointer2 size={16} /> <span>My Approach</span></a>
            <a href="#my-world" className="nav-item"><Globe size={16} /> <span>My World</span></a>
          </div>
        )}
        <div className="nav-divider"></div>
        <div className="nav-socials">
          <a href="https://www.linkedin.com/in/bangle-rahul-b33a71236/" target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={18} /></a>
          <a href="#" className="social-link"><Mail size={18} /></a>
          <a href="#" className="social-link"><FileText size={18} /></a>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </AnimatePresence>

    </main>
  );
}

export default App;
