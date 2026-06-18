# Implementation & Architecture Plan

### 1. Technology Stack
- **Frontend**: Next.js (App Router) or React (Vite).
- **Styling**: Tailwind CSS (for layout and utility styling).
- **Animations**: Framer Motion (for smooth, bug-free scroll reveals and layout transitions) or native Tailwind `transition` / `animate` utilities.
- **Icons**: Lucide React.

### 2. Design System & Visuals
*   **Primary Colors**: 
    *   Background: `#18181b` (Zinc-900) to `#000000`.
    *   Accent: `#EAB308` (Yellow-500) or custom hex matching `logo.png`.
    *   Text: `#FAFAFA` for headings, `#A1A1AA` for secondary text.
*   **Typography**: Bold, blocky, uppercase fonts for headings (e.g., Anton, Impact, or a heavyweight Roboto) to match the "ULTIMATE" logo.

### 3. Execution Phases
**Phase 1: Foundation & Hero Animation**
- Scaffold Next.js + Tailwind.
- Install Framer Motion (`npm i framer-motion`).
- Build the Hero section using `gym photo.jpg` with a dark overlay. Add a slow, subtle zoom effect to the background image and a staggered fade-in for the "ULTIMATE" headline.

**Phase 2: Interactive Components**
- Build the `PricingCard` component based on `membership pricing.png`. Add hover effects: `hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] duration-300 transition-all`.
- Build the `CoachGrid` based on `coach.png`. Implement an interaction where hovering over a coach's card reveals their Instagram handle via an animated slide-up overlay.

**Phase 3: Scroll Animations & Polish**
- Wrap major sections (Pricing, Team, Footer/Address) in Framer Motion `<motion.div>` tags with `whileInView` props so they fade and slide up smoothly as the user scrolls down the page.
- Ensure all mobile interactions rely on tap rather than hover.