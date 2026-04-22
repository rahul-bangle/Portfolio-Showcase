import { motion } from 'framer-motion';
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
  MessageSquareMore,
  Zap
} from 'lucide-react';
import avatar from './assets/avatar.png';
import mcTaskBoard from './assets/projects/mission-control/task-board.png';
import mcStrategyTimeline from './assets/projects/mission-control/strategy-timeline.png';
import mcTeamPanel from './assets/projects/mission-control/team-panel.png';
import { ComparisonCanvas } from './components/ComparisonCanvas';
import { PhoneMockup } from './components/PhoneMockup';
import { ProjectCarousel } from './components/ProjectCarousel';
import { Annotation } from './components/Annotation';
import { SideQuestCard } from './components/SideQuestCard';
import MyWorldCanvas from './components/MyWorldCanvas';
import { ContactWidget } from './components/ContactWidget';
import nlHome from './assets/projects/nextleap/nextleap-1-home.png';
import nlVoice from './assets/projects/nextleap/nextleap-2-voice.png';
import nlResult from './assets/projects/nextleap/nextleap-3-result.png';
import hhScan from './assets/projects/nextleap/camera-scan.png';
import hhWave from './assets/projects/nextleap/waveforms.png';
import pmCopilotImg from './assets/projects/side-quests/pm-copilot.png';
import sbiAssistantImg from './assets/projects/side-quests/sbi-assistant.png';
import jobAutomatorImg from './assets/projects/side-quests/job-automator.png';
import './App.css';

function App() {
  return (
    <main>
      <nav className="navbar">
        <a href="#hero" className="nav-logo-link">
          <div className="nav-logo">RB</div>
        </a>
        <div className="nav-links">
          <a href="#about" className="nav-item active"><User size={16} /> About</a>
          <a href="#projects" className="nav-item"><Briefcase size={16} /> Projects</a>
          <a href="#approach" className="nav-item"><MousePointer2 size={16} /> My Approach</a>
          <a href="#world" className="nav-item"><Globe size={16} /> My World</a>
        </div>
        <div className="nav-divider"></div>
        <div className="nav-socials">
          <a href="https://www.linkedin.com/in/bangle-rahul-b33a71236/" target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={18} /></a>
          <a href="#" className="social-link"><Mail size={18} /></a>
          <a href="#" className="social-link"><FileText size={18} /></a>
        </div>
      </nav>

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
            I don't design products. I decide which ones <span className="highlight">deserve to exist</span> — then make sure users actually love them.
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
            I obsess over the <span className="highlight-box">"why"</span> before the <span className="highlight-box">"what"</span> — whether that's an <span className="highlight-box">AI agent</span> deciding user flows, an <span className="highlight-box">automation</span> killing manual grunt work, or a feature that quietly makes someone's day <span className="highlight-box">10x easier</span>.
            <br /><br />
            I'm always finding the <span className="highlight-box">balance</span> between what <span className="highlight-box">users need</span>, what the <span className="highlight-box">business wants</span>, and what <span className="highlight-box">engineering</span> will <span className="highlight-box">realistically build</span> — then making sure all three <span className="highlight-box">actually agree</span>
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
          className="project-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="project-header">
            <span className="project-tag">Personal Project</span>
            <span className="project-status shipped">Shipped</span>
          </div>
          <h3 className="project-title">Mission Control — AI Operations Dashboard</h3>
          <p className="project-subtitle">Built a command center to manage AI agents, automate tasks, and track operations in real-time. Because spreadsheets weren't cutting it.</p>
          
          <div className="project-meta">
            <div className="meta-column">
              <div className="meta-section">
                <span className="meta-label">ROLE</span>
                <span className="meta-content">Solo — PM + Builder</span>
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
                <span className="meta-label">WHAT I BUILT</span>
                <ul className="project-features">
                  <li>Kanban task board with AI agent assignment</li>
                  <li>Strategy Timeline — cron job scheduler with weekly calendar view</li>
                  <li>Team panel — 11 AI agents tracked live with 99% efficiency score</li>
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
        </motion.div>

        <motion.div 
          className="project-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="project-header">
            <span className="project-tag">Product Teardown</span>
            <span className="project-status audit">Unprompted Audit</span>
          </div>
          <h3 className="project-title">Sprout — Onboarding UX Teardown</h3>
          <p className="project-subtitle">Unprompted product audit — I tore this down because the onboarding was actively hurting users.</p>
          
          <div className="project-meta">
            <div className="meta-column">
              <div className="meta-section">
                <span className="meta-label">ROLE</span>
                <span className="meta-content">Self-initiated PM analysis. Full user journey mapping.</span>
              </div>
              <div className="meta-section">
                <span className="meta-label">PROBLEM</span>
                <span className="meta-content">Sprout's 30-step onboarding flow had dark patterns, forced paywalls, and unnecessary friction that killed conversion.</span>
              </div>
            </div>
            <div className="meta-column">
              <div className="meta-section">
                <span className="meta-label">IMPACT</span>
                <ul className="project-features">
                  <li>Identified 7 dark patterns across 30-screen flow</li>
                  <li><span className="impact-highlight">Redesigned onboarding</span> from 30 screens to 5</li>
                  <li><span className="impact-highlight">Reduced time-to-value</span> from 20 min to under 2 min</li>
                  <li><span className="impact-highlight">Proposed freemium model</span> to earn paywall trust</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="annotation-anchor">
            <ComparisonCanvas />
            <Annotation 
              text="31 screens reduced to 8" 
              direction="right"
              arrowType="curly"
              className="anno-sprout-audit"
            />
          </div>
          
          <div className="project-detail-label">Final Prototype</div>
          <div className="annotation-anchor">
            <PhoneMockup />
            <Annotation 
              text="High-fidelity prototype" 
              direction="left"
              arrowType="simple"
              className="anno-sprout-proto"
            />
          </div>

        </motion.div>

        <motion.div 
          className="project-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="project-header">
            <span className="project-tag">PM Fellowship</span>
            <span className="project-status shipped">Completed</span>
          </div>
          <h3 className="project-title">ChatGPT Voice India — Homework Helper</h3>
          <p className="project-subtitle">Identified a 50M+ user gap in ChatGPT's India strategy. Designed a voice-first feature for non-English medium parents in Tier 2/3 India.</p>
          
          <div className="project-meta">
            <div className="meta-column">
              <div className="meta-section">
                <span className="meta-label">ROLE</span>
                <span className="meta-content">PM Fellow — research, PRD, wireframes, experiment design.</span>
              </div>
              <div className="meta-section">
                <span className="meta-label">IMPACT</span>
                <ul className="project-features">
                  <li><span className="impact-highlight">50-70M unlockable users</span> identified</li>
                  <li><span className="impact-highlight">83% discoverability gap</span> confirmed via research</li>
                </ul>
              </div>
            </div>
            <div className="meta-column">
              <div className="meta-section">
                <span className="meta-label">DELIVERABLES</span>
                <ul className="project-features">
                  <li>Survey research (n=100)</li>
                  <li>Full PRD with north star metrics</li>
                  <li>Wireframes — 12 annotations, 4 screens</li>
                  <li>ICE-scored prioritization</li>
                  <li>A/B experiment plan with rollback criteria</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="carousel-wrapper" style={{ position: 'relative' }}>
            <ProjectCarousel images={[nlHome, nlVoice, nlResult, hhScan, hhWave]} />
            <Annotation 
              text="83% discoverability gap confirmed via research" 
              direction="up"
              arrowType="loop"
              className="annotation-nextleap-gap"
              style={{ bottom: '-60px', right: '10%' }}
            />
          </div>
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
            category="AI-Enhanced Product Workflows"
            description="The intelligent partner built specifically for product management workflows. Save 10+ hours weekly with specialized AI agents."
            image={pmCopilotImg}
          />
          <SideQuestCard 
            index={1}
            icon={Zap}
            title="Job Automator"
            category="Application Ops Dashboard"
            description="A trusted-source PM job pipeline with bulk import, review-first routing, and final approval stages for high-volume applications."
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
                4 years of ops + sales taught me one thing — users don't care about features. They care about outcomes.
              </p>
              <div className="approach-cta">
                <a href="mailto:bangleahul1@gmail.com" className="btn-secondary">
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
                description: "I never jump to solutions. First I ask — is this the right problem? For whom? Why now?"
              },
              {
                title: "Survive Ambiguity",
                highlight: "Ambiguity",
                description: "I break messy, undefined problems into actionable steps and ship something real."
              },
              {
                title: "Ship Fast, Learn Faster",
                highlight: "Ship Fast",
                description: "Ugly prototypes beat perfect ideas stuck in docs. Test → learn → iterate. Repeat."
              },
              {
                title: "Every question needs a user benefit",
                highlight: "user benefit",
                description: "If a feature can't answer \"what does the user get?\" — it doesn't ship."
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

      <MyWorldCanvas />
      <ContactWidget />

    </main>
  );
}

export default App;
