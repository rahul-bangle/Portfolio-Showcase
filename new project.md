SiteBot — Universal AI Layer for the Web

A typical competitor teardown opens 8+ tabs. By the time you've read everything, you've lost the thread. Standard AI tools are context-blind—they only see what you manually copy-paste. SiteBot maps the semantic DNA of any live webpage, giving the LLM a pair of eyes inside your browser.

April 2026 · Shipped

---

KEY OUTCOME
70+ Chunks to 1 Summary
Instant synthesis of technical documentation and long-form articles in seconds.

---

The Problem
Context-switching friction is the silent killer of productivity. Existing RAG tools capture raw text but lose Live UI Context (pricing tiers, CTAs, structural hierarchy). Without structural awareness, AI insights remain surface-level, missing the nuance of how a page is actually organized.

What I Built
A Chrome Extension (MV3) that extracts a Semantic Map of any live DOM. Instead of just scraping text, it preserves element roles and metadata for the LLM.
- Engine: Integrated Gemini 1.5 Flash for high-speed streaming responses.
- Testing: Benchmarked across 3-4 complex technical documentation sites to ensure extraction fidelity.

Key Decisions
- Shadow DOM Isolation: Injected the sidebar using Shadow DOM to ensure zero CSS leakage from the host site. Result: 100% UI stability across all tested platforms.
- Intent-First RAG: Implemented an "Intent Expansion" layer where the AI refines the user's raw query before searching the local chunk database, significantly improving response relevance.
- Dynamic Content Handling: Leveraged MutationObservers to capture context in modern SPAs where content loads asynchronously after the initial page paint.

What I Learned
- Pragmatic Prioritization: Scope creep is real even in solo projects—I cut Chrome Nano offline support mid-build to ship faster. This constraint forced a cleaner, more modular architecture that is easier to maintain.
- Performance Constraints: Chrome’s storage.local limits required the implementation of a custom LRU Cache to prune old site data and keep the extension lightweight.
- Fidelity > Volume: Structural metadata (element roles like 'button' or 'header') is more valuable for AI accuracy than sheer volume of raw text.

---