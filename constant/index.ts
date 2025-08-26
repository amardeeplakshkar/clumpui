export const InstallationGuide = `
# Installation

## Getting Started with ClumpUI

Setting up ClumpUI is quick and frictionless. All components are built using **Tailwind CSS v4**, and many use a lightweight utility function called \`cn()\` to handle conditional class names.

### 1. Install Utilities

Before adding components, install the shared utilities required by most ClumpUI components:

\`\`\`bash
"https://clumpui.amardeep.space/r/utils.json"
\`\`\`

This includes the \`cn\` helper, Tailwind config hooks, and some base styles used across components.

---

### 2. Add Components Instantly

You can install any component with a single command using the ClumpUI CLI. For example, to install the **Particle Button** component:

\`\`\`bash
"https://clumpui.amardeep.space/r/particle-button"
\`\`\`

This will automatically include the required styles, icons, and supporting files — no manual setup required.

> 💡 Tip: While you can always copy code directly, we **strongly recommend using the CLI** to ensure everything is installed correctly and consistently.

---

### 3. Use It in Your Code

Once installed, you can use the component right away:

\`\`\`tsx
import ParticleButton from "@/components/clumpui/particle-button";

export default function Page() {
  return <ParticleButton />;
}
\`\`\`

---

### 4. Optional Dependencies

Some components rely on third-party libraries (like form validation or charting libraries). Any required extras will be clearly listed at the bottom of the component’s documentation page — just install them when needed.

---

### 5. Monorepo Support

Using a monorepo? No problem. The ClumpUI CLI supports workspace paths with the \`-c\` flag. For example:

\`\`\`bash
"https://clumpui.amardeep.space/r/card-05.json" -c ./apps/site
\`\`\`

---

Start exploring components at [clumpui.amardeep.space](https://clumpui.amardeep.space) and build faster with everything in one place.
`;


export const IntroductionContent = `
# Introduction

**ClumpUI** brings together the best of modern component libraries into one unified, accessible system — so you don't have to choose just one.

Instead of locking you into a single design language or style guide, ClumpUI offers a growing collection of components inspired by popular libraries like **shadcn/ui**, **Radix UI**, **Lucide**, and more — all ready to use, all in one place.

Think of it as a **hub** for production-ready components — curated, customizable, and developer-friendly.

> Browse it all at [clumpui.amardeep.space](https://clumpui.amardeep.space)

## One Place, Every Component

Tired of bouncing between design systems and trying to stitch together UI parts from different libraries? So were we.

ClumpUI solves this by:

- Aggregating UI patterns from multiple libraries
- Unifying styles using **Tailwind CSS v4**
- Offering components that are easy to drop into your project — no configuration headaches

Whether you’re building marketing sites, dashboards, SaaS tools, or admin panels, ClumpUI lets you stay productive and focused without wasting time rebuilding buttons, modals, tables, and more.

## Built for Speed and Flexibility

Every component in ClumpUI is:

- **Copy-paste or CLI installable**
- Designed with **accessibility and responsiveness** in mind
- Structured for easy override and extension
- Kept lightweight — no heavy theming layers or runtime complexity

## Our Vision

ClumpUI isn’t just another component library. It’s a **platform for convergence** — a place where the best ideas from UI development are combined, simplified, and served in a way that actually helps you build.

Whether you’re a solo dev or part of a team, ClumpUI is here to make sure you never start from scratch again.

> One place. Every component. Build better, faster.
`;
