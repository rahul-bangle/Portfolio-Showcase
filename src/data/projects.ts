import mcTeamPanel from '../assets/projects/mission-control/team-panel.png';
import sitebotImg from '../assets/projects/sitebot/sitebot.png';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  status: string;
  tags: string[];
  role: string;
  problem: string;
  stack: string[];
  impact: string[];
  keyOutcome: {
    value: string;
    label: string;
    type: string;
  };
  sections: {
    title: string;
    content: string;
  }[];
  liveLink?: string;
  githubLink?: string;
  pdfLink?: string;
  embedLink?: string;
  images: string[];
  featuredImage?: string;
  nextProject?: {
    id: string;
    title: string;
  };
}

export const projects: ProjectData[] = [
  {
    id: "industrial-job-engine",
    title: "Industrial Job Engine V3: Sovereign Sourcing",
    subtitle: "Built a 100% free, high-yield job sourcing pipeline that bypasses 'ghost jobs' and aggregator bans by targeting ATS APIs directly.",
    date: "May 2026",
    status: "Shipped",
    tags: ["Python", "Automation", "AI", "Data Engineering"],
    role: "Solo Builder (PM + Architect)",
    problem: "The 'Easy Apply' lottery is broken. Ghost jobs and rate-limited aggregators like LinkedIn make high-volume, high-quality job searching impossible without paid APIs or Enterprise tools. Applying to 400 jobs manually yields almost zero results because the funnel is flooded.",
    stack: ["Python (Scrapling)", "Supabase", "Gemini 1.5 Flash", "FastAPI"],
    impact: [
      "Discovered & mapped 10,253 ATS API endpoints.",
      "Achieved 100% bypass of traditional aggregator rate limits.",
      "Syncs 130+ highly relevant 'Gold Leads' daily to Supabase.",
      "Eliminated $0 monthly infra cost via local AI proxy."
    ],
    keyOutcome: {
      value: "10,253",
      label: "Verified ATS API endpoints mapped & parsed",
      type: "SCALE"
    },
    sections: [
      {
        title: "The problem",
        content: "Modern job hunting for APM/PM roles is saturated with 'ghost jobs' and aggregator noise. Traditional platforms heavily rate-limit free users, and existing scrapers break constantly due to dynamic DOM changes. I needed a high-volume, zero-cost pipeline that guaranteed the roles were actively hiring."
      },
      {
        title: "What I built",
        content: "I engineered the 'Industrial Job Engine V3', a sovereign sourcing pipeline. Instead of scraping fragile HTML, I targeted the backend ATS APIs (Greenhouse, Lever, etc.) directly. Using Python and Scrapling for stealth, the engine pings over 10,000 company endpoints, filters specifically for Product Management roles, and syncs the cleaned data directly into a Supabase PostgreSQL database."
      },
      {
        title: "Key decisions",
        content: "1. API-First over DOM Scraping: I completely bypassed Cloudflare and CAPTCHAs by directly querying the ATS endpoints.\n2. Local AI Proxy over Paid LLMs: I routed all natural language filtering through a local Gemini CLI wrapper to keep infrastructure costs at $0.\n3. Anti-Keyword Filtering: Instead of searching for 'PM', I used strict exclusionary logic (rejecting 'Senior', 'Director', 'Lead') to ensure 100% relevance for APM/Junior PM roles."
      },
      {
        title: "What I learned",
        content: "I learned that data pipeline resilience is all about avoiding the frontend. By shifting to API discovery, the script's success rate jumped from 40% to 99%. I also learned the value of 'State Persistence' in background jobs, ensuring that if the 10,000+ queue drops connection, it picks up right where it left off."
      }
    ]
  },
  {
    id: "mission-control",
    title: "Mission Control: AI Operations Dashboard",
    subtitle: "Built a command center to manage AI agents, automate tasks, and track operations in real-time. Because spreadsheets weren't cutting it.",
    date: "April 2026",
    status: "Shipped",
    tags: ["Personal Project", "AI", "Dashboard"],
    role: "Solo Builder (PM + Eng)",
    problem: "No single place to see what my AI agents were doing, when, and whether it worked.",
    stack: ["React", "Supabase", "FastAPI", "Python"],
    impact: [
      "99% efficiency score tracked live",
      "Real-time sync with Supabase",
      "Automated cron scheduling"
    ],
    keyOutcome: {
      value: "99%",
      label: "Efficiency score tracked across 11 AI agents",
      type: "RESULT"
    },
    sections: [
      {
        title: "The problem",
        content: "Managing multiple AI agents across different tasks was becoming a logistical nightmare. Tracking success rates, execution times, and task statuses in manual spreadsheets was slow, prone to error, and lacked real-time visibility."
      },
      {
        title: "What I built",
        content: "I engineered a centralized command center that integrates a Kanban task board with automated agent assignment. The 'Strategy Timeline' feature acts as a sophisticated cron job scheduler, providing a weekly calendar view of all planned AI operations. The dashboard provides live telemetry for 11 distinct agents, calculating efficiency scores in real-time."
      },
      {
        title: "Key decisions",
        content: "Choosing Supabase for real-time synchronization was critical. I needed the dashboard to reflect agent actions the millisecond they happened without constant polling. I also decided to build a custom Python/FastAPI backend to handle the heavy lifting of agent orchestration while keeping the React frontend snappy."
      },
      {
        title: "What I learned",
        content: "Building for yourself is the ultimate test of PM-Eng alignment. I had to ruthlessly prioritize features that actually saved me time over 'cool' visualizations that looked good but provided little utility."
      }
    ],
    githubLink: "#",
    images: [mcTeamPanel],
    featuredImage: mcTeamPanel,
    nextProject: {
      id: "sprout",
      title: "Sprout: Onboarding UX Teardown"
    }
  },
  {
    id: "sprout",
    title: "Sprout: Onboarding UX Teardown",
    subtitle: "Unprompted product audit. I tore this down because the onboarding was actively hurting users.",
    date: "May 2026",
    status: "Audit",
    tags: ["Product Teardown", "UX", "Conversion"],
    role: "Self-initiated PM analysis",
    problem: "Sprout's 30-step onboarding flow had dark patterns, forced paywalls, and unnecessary friction that killed conversion.",
    stack: ["User Journey Mapping", "Figma", "Competitor Analysis"],
    impact: [
      "Identified 7 dark patterns",
      "Redesigned flow from 30 to 5 screens",
      "Reduced time-to-value from 20m to 2m"
    ],
    keyOutcome: {
      value: "30 to 5",
      label: "Screens reduced while increasing data quality",
      type: "RESULT"
    },
    sections: [
      {
        title: "The problem",
        content: "Sprout's onboarding was a masterclass in friction. By forcing users through 30 screens before they could see the product's value, they were essentially daring users to quit. The use of dark patterns and premature paywalls destroyed user trust before the first session even ended."
      },
      {
        title: "What I built",
        content: "I performed a full user journey audit, mapping every friction point and identifying 7 distinct dark patterns. I then prototyped a radical redesign that prioritized 'Time-to-Value'. By moving non-essential data collection to post-onboarding and implementing a freemium model, I showed how to earn user trust before asking for their wallet."
      },
      {
        title: "Key decisions",
        content: "The biggest decision was recommending the removal of the mandatory paywall. While it might hit short-term revenue, the long-term LTV and retention gains from a trust-based onboarding are far more valuable for a growing product like Sprout."
      }
    ],
    pdfLink: "https://drive.google.com/file/d/1xJNK3Y7Ldv0ISh_qslWwGEwMvZQ93Z9F/view",
    embedLink: "https://drive.google.com/file/d/1xJNK3Y7Ldv0ISh_qslWwGEwMvZQ93Z9F/preview",
    images: [],
    nextProject: {
      id: "chatgpt-voice",
      title: "ChatGPT Voice India"
    }
  },
  {
    id: "chatgpt-voice",
    title: "ChatGPT Voice India: Homework Helper",
    subtitle: "Identified a 50M+ user gap in ChatGPT's India strategy. Designed a voice-first feature for non-English medium parents in Tier 2/3 India.",
    date: "June 2026",
    status: "Completed",
    tags: ["PM Fellowship", "Voice AI", "Market Entry"],
    role: "PM Fellow",
    problem: "50M+ non-English medium parents in India want to help with homework but face a massive discoverability and language barrier with ChatGPT.",
    stack: ["User Research", "PRD", "Wireframing", "ICE Scoring"],
    impact: [
      "50-70M unlockable users identified",
      "83% discoverability gap confirmed"
    ],
    keyOutcome: {
      value: "50M+",
      label: "Potential users identified in Tier 2/3 markets",
      type: "MARKET GAP"
    },
    sections: [
      {
        title: "The problem",
        content: "While ChatGPT is powerful, its UI is heavily biased towards English-speaking, tech-savvy users. In India, millions of parents want to use AI to help their children with studies, but they find the current interface intimidating and difficult to navigate in their native tongue."
      },
      {
        title: "What I built",
        content: "I conducted research with 100+ users to validate the 83% discoverability gap. I then designed a 'Homework Helper' mode—a voice-first, localized experience that allows parents to ask questions in their regional language and receive simplified, educational explanations they can share with their kids."
      },
      {
        title: "Key decisions",
        content: "I prioritized a voice-first UI over a text-based one because it matches the natural communication patterns of our target demographic. I also implemented an ICE-scored roadmap to ensure we could launch an MVP that focused on the most common school subjects first."
      }
    ],
    images: [],
    nextProject: {
      id: "mission-control",
      title: "Mission Control"
    }
  },
  {
    id: "sitebot",
    title: "SiteBot: Universal AI Layer for the Web",
    subtitle: "Built a browser-native AI assistant that understands the semantic DNA of any live webpage. No more copy-pasting into a separate tab.",
    date: "April 2026",
    status: "Shipped",
    tags: ["Chrome Extension", "AI", "RAG"],
    role: "Solo Builder",
    problem: "Context-switching friction is the silent killer of productivity. Existing RAG tools capture raw text but lose Live UI Context.",
    stack: ["Chrome Extension (MV3)", "Gemini 1.5 Flash", "React", "TypeScript"],
    impact: [
      "Instant synthesis of 70+ content chunks",
      "Shadow DOM isolation for 100% stability",
      "Intent-First RAG for 40% better relevance"
    ],
    keyOutcome: {
      value: "70 to 1",
      label: "Chunks synthesized into one actionable summary",
      type: "EFFICIENCY"
    },
    sections: [
      {
        title: "The problem",
        content: "Context-switching friction is the silent killer of productivity. A typical competitor teardown opens 8+ tabs; by the time you've read everything, you've lost the thread. Standard AI tools are context-blind—they only see what you manually copy-paste. Existing RAG tools capture raw text but lose Live UI Context (pricing tiers, CTAs, structural hierarchy). Without structural awareness, AI insights remain surface-level."
      },
      {
        title: "What I built",
        content: "I engineered a Chrome Extension (MV3) that extracts a Semantic Map of any live DOM. Instead of just scraping text, it preserves element roles and metadata for the LLM. It uses Gemini 1.5 Flash for high-speed streaming responses and was benchmarked across complex technical documentation sites to ensure extraction fidelity."
      },
      {
        title: "Key decisions",
        content: "I implemented 'Shadow DOM Isolation' to ensure zero CSS leakage from host sites, resulting in 100% UI stability. I also built an 'Intent-First RAG' layer where the AI refines the user's raw query before searching the local chunk database. To handle modern SPAs, I leveraged MutationObservers to capture context that loads asynchronously after the initial page paint."
      },
      {
        title: "What I learned",
        content: "I learned the value of 'Fidelity > Volume'—structural metadata is often more valuable for AI accuracy than sheer volume of raw text. I also handled performance constraints by implementing a custom LRU Cache to prune old site data and keep the extension lightweight, staying within Chrome's storage.local limits."
      }
    ],
    images: [sitebotImg],
    featuredImage: sitebotImg,
    nextProject: {
      id: "mission-control",
      title: "Mission Control"
    }
  }
];
