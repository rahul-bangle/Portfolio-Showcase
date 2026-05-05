import mcTeamPanel from '../assets/projects/mission-control/team-panel.png';

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
  }
];
