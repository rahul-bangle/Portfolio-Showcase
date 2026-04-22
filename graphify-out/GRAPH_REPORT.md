# Graph Report - .  (2026-04-22)

## Corpus Check
- 29 files · ~259,804 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 30 nodes · 24 edges · 10 communities detected
- Extraction: 54% EXTRACTED · 46% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Core Portfolio Content|Core Portfolio Content]]
- [[_COMMUNITY_Project Showcase Pages|Project Showcase Pages]]
- [[_COMMUNITY_Creative Visual Components|Creative Visual Components]]
- [[_COMMUNITY_Landing Page Design System|Landing Page Design System]]
- [[_COMMUNITY_My World Canvas|My World Canvas]]
- [[_COMMUNITY_React App Entry|React App Entry]]
- [[_COMMUNITY_Build Configuration|Build Configuration]]
- [[_COMMUNITY_Approach Section|Approach Section]]
- [[_COMMUNITY_Linting Config|Linting Config]]
- [[_COMMUNITY_Vite Build Config|Vite Build Config]]

## God Nodes (most connected - your core abstractions)
1. `Landing Page Reference Design` - 4 edges
2. `About Section Reference Design` - 3 edges
3. `Product Manager Portfolio Concept` - 3 edges
4. `Hero Section with Avatar` - 3 edges
5. `About Me Section` - 3 edges
6. `My World Draggable Canvas` - 2 edges
7. `Projects Showcase Page` - 2 edges
8. `Project Detail Cards` - 2 edges
9. `Project Comparison Layout` - 2 edges
10. `Creative Component Interactive Cards` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Landing Page Reference Design` --references--> `Hero Section with Avatar`  [EXTRACTED]
  ref_images/landing page 1.PNG → src/App.tsx
- `About Section Reference Design` --references--> `About Me Section`  [EXTRACTED]
  ref_images/about section.PNG → src/App.tsx
- `Product Manager Portfolio Concept` --rationale_for--> `Hero Section with Avatar`  [EXTRACTED]
  MASTER_CONTEXT.md → src/App.tsx
- `Product Manager Portfolio Concept` --rationale_for--> `About Me Section`  [EXTRACTED]
  MASTER_CONTEXT.md → src/App.tsx
- `Landing Page Reference Design` --semantically_similar_to--> `Projects Showcase Page`  [INFERRED] [semantically similar]
  ref_images/landing page 1.PNG → ref_images/projectpage1.PNG

## Hyperedges (group relationships)
- **Portfolio Page Sections** — ref_landing_page, ref_about_section, ref_projectpage1, ref_approach1, ref_myworld_canvas [EXTRACTED 0.95]
- **Creative Visual Components** — ref_creative1, ref_creative2, ref_creative3, ref_creative4 [EXTRACTED 0.90]
- **Design System Patterns** — design_system_navbar, design_highlight_keywords, design_hand_drawn_doodles, ref_avatar_character [INFERRED 0.80]

## Communities

### Community 0 - "Core Portfolio Content"
Cohesion: 0.33
Nodes (7): About Me Section, Hand-Drawn Doodle Illustrations, Framer Motion Animations, Hero Section with Avatar, Master Context Conversation Log, Product Manager Portfolio Concept, About Section Reference Design

### Community 1 - "Project Showcase Pages"
Cohesion: 0.5
Nodes (4): Projects Showcase Page, Project Detail Cards, Project Comparison Layout, Project Visual Gallery

### Community 2 - "Creative Visual Components"
Cohesion: 0.5
Nodes (4): Creative Component Bento Grid, Creative Component Interactive Cards, Creative Component Visual Strips, Creative Component Media Collage

### Community 3 - "Landing Page Design System"
Cohesion: 0.5
Nodes (4): Blue Highlighted Keywords Pattern, Floating Pill Navbar Pattern, 3D Avatar Character, Landing Page Reference Design

### Community 4 - "My World Canvas"
Cohesion: 0.67
Nodes (3): My World Canvas Variant 2, My World Canvas Variant 3, My World Draggable Canvas

### Community 5 - "React App Entry"
Cohesion: 1.0
Nodes (0): 

### Community 6 - "Build Configuration"
Cohesion: 1.0
Nodes (2): HTML Entry Point, React TypeScript Vite Setup

### Community 7 - "Approach Section"
Cohesion: 1.0
Nodes (2): My Approach Scroll Section, My Approach Steps Detail

### Community 8 - "Linting Config"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Vite Build Config"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **12 isolated node(s):** `HTML Entry Point`, `Master Context Conversation Log`, `React TypeScript Vite Setup`, `My World Canvas Variant 2`, `My World Canvas Variant 3` (+7 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `React App Entry`** (2 nodes): `App.tsx`, `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Build Configuration`** (2 nodes): `HTML Entry Point`, `React TypeScript Vite Setup`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Approach Section`** (2 nodes): `My Approach Scroll Section`, `My Approach Steps Detail`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Linting Config`** (1 nodes): `eslint.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Build Config`** (1 nodes): `vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Landing Page Reference Design` connect `Landing Page Design System` to `Core Portfolio Content`, `Project Showcase Pages`?**
  _High betweenness centrality (0.133) - this node is a cross-community bridge._
- **Why does `Projects Showcase Page` connect `Project Showcase Pages` to `Landing Page Design System`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Why does `Hero Section with Avatar` connect `Core Portfolio Content` to `Landing Page Design System`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **What connects `HTML Entry Point`, `Master Context Conversation Log`, `React TypeScript Vite Setup` to the rest of the system?**
  _12 weakly-connected nodes found - possible documentation gaps or missing edges._