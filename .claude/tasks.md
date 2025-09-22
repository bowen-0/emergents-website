# Emergents Website - Development Tasks

## Project Overview
Personal website for Bowen at Emergents, featuring portfolio projects and company branding.

## Completed Tasks ✅

### Phase 1: Foundation & Design System
- [x] Set up React + TypeScript + Tailwind project
- [x] Create Reflect.app-inspired design system
- [x] Implement glassmorphism effects and gradients
- [x] Configure color palette (purple/pink theme)

### Phase 2: Main Landing Page
- [x] Create single-page layout (no scrolling)
- [x] Implement CompactProfile component
- [x] Add Emergents logo integration
- [x] Create project cards for Systemic and Coachify
- [x] Design custom SVG icons for projects
- [x] Add social links (LinkedIn, Twitter, Email)
- [x] Optimize information architecture
- [x] Apply gradient highlights to key text

### Phase 3: Version Control
- [x] Initialize Git repository
- [x] Create initial commit with all work

## Current Focus 🎯

### Systemic Landing Page
**Status**: Planning Phase
**Priority**: High
**Goal**: Create dedicated landing page for Systemic Miro app with email waitlist

#### Requirements
- **Primary CTA**: Email registration for waitlist
- **Content**: Explain systems mapping capabilities
- **Features to Highlight**:
  - AI-powered prompt-to-map generation
  - Natural language map expansion
  - Auto-layout functionality
  - Executive summary generation
- **Design**: Maintain existing glassmorphism theme
- **Storage**: Initial implementation with localStorage

#### Planned Components
1. `SystemicLanding.tsx` - Main landing page
2. `EmailCapture.tsx` - Waitlist registration form
3. `SystemMapDemo.tsx` - Visual demonstration
4. Feature cards explaining capabilities

## Upcoming Tasks 📋

### Phase 4: Systemic Landing Page Implementation
- [ ] Create SystemicLanding component
- [ ] Build EmailCapture form with validation
- [ ] Design SystemMapDemo visualization
- [ ] Add feature cards section
- [ ] Implement navigation between pages
- [ ] Add success/error states for form
- [ ] Test responsive design

### Phase 5: Coachify Landing Page
- [ ] Create dedicated Coachify page
- [ ] Explain voice AI training features
- [ ] Add waitlist registration
- [ ] Create visual demonstrations

### Phase 6: Deployment Preparation
- [ ] Set up GitHub repository
- [ ] Configure Cloudflare Pages
- [ ] Add environment variables
- [ ] Set up custom domain
- [ ] Configure analytics

### Phase 7: Backend Integration (Future)
- [ ] Email collection API
- [ ] Database for waitlist storage
- [ ] Email notification system
- [ ] Admin dashboard for waitlist management

## Technical Decisions 📐

### Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS + custom glassmorphism
- **Animations**: Framer Motion
- **Routing**: TBD (React Router or conditional rendering)
- **State**: Local state + localStorage initially

### Design Patterns
- Component-based architecture
- Reusable UI components
- Consistent color system (dark theme)
- Mobile-first responsive design

### Color Palette
- Primary: `#030014` (dark background)
- Accent Purple: `#ba9cff`
- Accent Pink: `#e59cff`
- Glass effects with backdrop blur

## Notes 📝

### Key Design Decisions
- Single-page layout for main site (no scrolling)
- Compact profile with smaller image
- Projects displayed as horizontal cards
- Social links moved to bottom
- Gradient text for emphasis on key phrases

### Content Strategy
- Focus on simplicity and clarity
- Highlight AI application development
- Emphasize "changing how we work"
- Professional but approachable tone

### Systemic Messaging
- **Tagline**: "Systems Thinking Made Simple"
- **Value Prop**: Accessibility for beginners and experts
- **Key Features**: Create, Expand, Layout, Summarize
- **CTA**: "Join the Waitlist"

## Resources 🔗

### Project Files
- Main Page: `/src/OnePage.tsx`
- Profile: `/src/components/sections/CompactProfile.tsx`
- Projects: `/src/components/ui/CompactProjectCard.tsx`
- Icons: `/src/components/icons/`

### Assets
- Emergents Logo: `/public/emergents-logo.png`
- Profile Photo: `/public/profile.jpg`

### Dependencies
- React 18.2.0
- Framer Motion 11.0.3
- Tailwind CSS 3.4.1
- TypeScript 5.2.2

## Contact
**Developer**: Bowen @ Emergents
**Projects**: Systemic (Miro App), Coachify (Voice AI)

---
*Last Updated: Current Session*
*Version Control: Git (local repository)*