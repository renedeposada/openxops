# Open xOps — Copilot Instructions

This file consolidates the Product Requirements Document (PRD) and wireframe
specifications for the Open xOps website. GitHub Copilot and other agents
should reference this document as the source of truth when generating,
modifying, or refactoring code at the repository root.

The implemented website lives at the repository root (so GitHub Pages can
serve it directly) and follows the technology constraints, design system, and
page specifications below exactly:

```text
index.html
tools.html
learning.html
about.html

css/
  styles.css

js/
  main.js

assets/
  images/
  icons/
  logos/
```

---

# Part 1: Product Requirements Document (PRD)

## 1. Project Overview

### Product Name

Open xOps Website

### Vision

Open xOps creates practical tools and open ideas that help individuals and professionals solve real-world problems, make better decisions, and build valuable skills.

The platform serves as a central hub for discovering tools, learning resources, courses, guides, and future community offerings.

### Objective

Build a lightweight, responsive website that serves as the public-facing home of Open xOps, showcasing available tools, educational content, and the company's mission.

### Target Audience

- Professionals seeking practical decision-making tools
- Individuals interested in personal growth and financial planning
- Software engineers and technical professionals
- Technology leaders and managers
- Lifelong learners pursuing new skills
- Students and career changers

---

## 2. Technical Stack & File Structure

### Technology Constraints

- HTML5
- CSS3 (Vanilla)
- JavaScript (ES6+ Vanilla)
- No frameworks
- No build tools
- No npm dependencies
- GitHub Pages compatible

### Desired File Hierarchy

```text
/
├── index.html
├── tools.html
├── learning.html
├── about.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── main.js
│
└── assets/
    ├── images/
    ├── icons/
    └── logos/
```

---

## 3. Brand Positioning

### Brand Promise

Practical tools and learning resources designed to create real-world impact.

### Mission

Help people solve meaningful problems through accessible tools, actionable knowledge, and open ideas.

### Key Themes

- Open knowledge
- Open ideas
- Practical problem solving
- Accessibility
- Simplicity
- Independence
- Real-world outcomes

### Messaging Principles

- Clear and approachable
- Professional but human
- Vendor-neutral
- Educational
- Practical
- Action-oriented

---

## 4. Global Site Navigation & Layout

### Header

#### Logo / Brand Name

```text
Open xOps
```

#### Navigation

- Home
- Tools
- Learning
- About

#### Features

- Active navigation state
- Sticky header
- Mobile hamburger menu
- Smooth scrolling experience
- Responsive navigation drawer

### Footer

Include:

- Open xOps mission statement
- Copyright notice
- GitHub link
- LinkedIn link
- Contact link/email
- "Open Tools & Ideas for Real-World Impact"

---

## 5. Page Specifications

### Page 1: Home (`index.html`)

#### Hero Section

##### Headline

```text
Open Tools & Ideas
```

##### Subtitle

```text
Open xOps creates tools and educational resources that help people make better decisions, solve real-world problems, and build valuable skills.
```

##### Call-to-Action Buttons

- Explore Tools
- Explore Learning

---

#### Mission Section

Display three feature cards:

##### Solve Real Problems

Build practical tools that address everyday challenges.

##### Explore Open Ideas

Provide educational content, guides, and courses designed for growth.

##### Share Open Knowledge

Make expertise accessible, understandable, and actionable.

---

#### Featured Tools Section

Highlight Open xOps applications.

Each card includes:

- Tool Name
- Description
- Status Badge
- Learn More button

Initial Example:

##### WealthMap

Category:

```text
Personal Finance
```

Description:

```text
A retirement readiness platform that helps users understand where they are today and what actions they can take to improve their future financial outcomes.
```

Status:

```text
Active Development
```

The page should support future tools without requiring design changes.

---

#### Featured Learning Section

Highlight educational content such as:

- Guides
- Articles
- Courses
- Workshops
- Learning Paths

Each item should include:

- Title
- Description
- Category
- Read More button

---

#### Call-to-Action Banner

Text:

```text
Explore tools and learning resources designed to help you grow.
```

Button:

```text
Get Started
```

---

### Page 2: Tools (`tools.html`)

#### Header Section

##### Title

```text
Tools
```

##### Description

```text
Explore practical applications created by Open xOps to solve real-world challenges.
```

---

#### Search and Filter Section

Features:

- Search input
- Category dropdown filter

Categories should initially include:

- Personal Finance
- Productivity
- Career Development
- Technology
- Analytics
- Utilities

---

#### Tools Grid

Display reusable tool cards.

Each card contains:

- Tool Name
- Short Description
- Category Badge
- Status Badge
- Launch Tool button
- Learn More button

---

#### Featured Example Tool

##### WealthMap

Category:

```text
Personal Finance
```

Description:

```text
A retirement readiness platform that helps users understand where they are today and what actions they can take to improve their future financial outcomes.
```

Status:

```text
Active Development
```

---

### Page 3: Learning (`learning.html`)

#### Header Section

##### Title

```text
Learning Resources
```

##### Description

```text
Educational content designed to help individuals and professionals build valuable skills and stay current in a rapidly changing world.
```

---

#### Learning Categories

Display category cards for:

##### Personal Finance

Retirement, investing, taxes, and wealth-building concepts.

##### Technology

Engineering, cloud computing, AI, automation, platforms, and operations.

##### Leadership

Management, communication, influence, and career growth.

##### Professional Development

Certifications, learning paths, and lifelong learning.

---

#### Interactive Content Section

Implement accordion sections for:

- Courses
- Workshops
- Guides
- Articles
- Learning Paths

Each section expands to reveal:

- Brief summary
- Skill level
- Link to resource

The structure should support easy expansion over time.

---

### Page 4: About (`about.html`)

#### Company Story

Sample content:

```text
Open xOps was founded to create practical tools and open ideas that help people make informed decisions and build valuable skills. Our focus is on delivering accessible, high-value solutions that create measurable impact.
```

---

#### Core Principles

##### Practical First

Focus on real-world outcomes and measurable value.

##### Open Learning

Share knowledge broadly and make learning accessible.

##### Keep Improving

Improve tools, ideas, and user experiences through real feedback.

##### Community Driven

Build solutions with users and learners in mind.

---

#### Future Vision

Highlight future initiatives:

- New applications and digital tools
- Online courses
- In-person workshops
- Learning pathways
- Community programs
- AI-powered learning experiences

---

## 6. Design System & UI Specifications

### Visual Personality

The website should feel:

- Modern
- Trustworthy
- Minimal
- Professional
- Accessible
- Educational
- Growth-oriented

### Design Inspiration

- Stripe
- Linear
- Vercel
- GitHub Docs

---

### Color Palette

#### Primary Brand

```text
#2563EB
```

#### Accent

```text
#10B981
```

#### Background

```text
#F8FAFC
```

#### Dark Theme Background

```text
#0F172A
```

#### Primary Text

```text
#1E293B
```

#### Secondary Text

```text
#64748B
```

---

### Typography

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

---

### Layout Requirements

Use:

- CSS Grid
- CSS Flexbox
- Mobile-first design
- Reusable components

---

### Responsive Breakpoints

```text
Mobile: 375px+
Tablet: 768px+
Desktop: 1024px+
Wide Desktop: 1440px+
```

---

## 7. JavaScript Interactivity Checklist

### Global Features

- Mobile navigation drawer
- Active page highlighting
- Sticky navigation behavior
- Smooth scrolling

### Tools Page

- Live search filtering
- Category filtering
- Dynamic tool visibility

### Learning Page

- Expandable accordions
- Show/hide content sections

### Future-Ready Structure

Code should be organized to easily support:

- User accounts
- Newsletter subscriptions
- Content management systems
- Analytics
- Course platforms
- Community functionality

---

## 8. Content Strategy

### Tools

The platform should support showcasing:

- Web applications
- Calculators
- Planning tools
- Dashboards
- Utilities
- Future software products

### Learning Resources

The platform should support publishing:

- Articles
- Guides
- Documentation
- Workshops
- Online courses
- Learning paths
- Downloadable resources

### Growth Philosophy

The Open xOps website should remain flexible enough to expand into new industries, audiences, and problem domains without requiring a major redesign.

---

## 9. MVP Scope

### Must Have

- Home page
- Tools page
- Learning page
- About page
- Mobile responsive design
- Shared design system
- Tool search functionality
- Category filtering
- Learning accordions
- GitHub Pages deployment
- Accessible navigation

### Nice to Have

- Dark mode
- Newsletter signup
- Contact form
- Featured articles section
- Tool usage analytics

### Future Enhancements

- User accounts
- Community platform
- Paid courses
- Certifications
- Membership subscriptions
- Personalized learning
- AI-powered assistants
- Learning dashboards

---

## 10. Definition of Done / Acceptance Criteria

### Functional Requirements

- All pages render correctly in modern browsers.
- Navigation works seamlessly across all pages.
- Search and filtering features function correctly.
- Learning accordions expand and collapse correctly.
- No broken links.
- No JavaScript console errors.

### Responsive Requirements

- Layout functions correctly from 375px to 1920px.
- Mobile navigation works on all supported devices.
- Content remains accessible and readable across screen sizes.

### Performance Requirements

- Page load time under 2 seconds on broadband connections.
- Lighthouse Performance score above 90.
- Lighthouse Accessibility score above 90.
- Lighthouse Best Practices score above 90.

### Business Objectives

- Clearly communicates the Open xOps mission.
- Establishes credibility and professionalism.
- Highlights both tools and learning resources.
- Supports future growth without major redesigns.
- Provides a scalable foundation for future products, courses, and community initiatives.

---

## 11. GitHub Copilot Agent Implementation Guidelines

### Purpose

This PRD serves as the primary source of truth for the Open xOps website.

GitHub Copilot Agent should reference this document when generating, modifying, or refactoring code.

The goal is to maintain consistency, scalability, and alignment with the Open xOps vision while enabling rapid iteration through prompt-driven development.

---

### Development Approach

Follow a modular implementation strategy.

#### Phase 1: Shared Design System

Generate:

```text
css/styles.css
```

Responsibilities:

- CSS variables
- Color palette
- Typography
- Layout utilities
- Header and footer styles
- Responsive grids
- Cards
- Buttons
- Forms
- Accordions
- Reusable sections

The design system should be reusable and page-agnostic whenever possible.

---

#### Phase 2: Core HTML Pages

Generate pages in this order:

1. Home — `index.html`
2. Tools — `tools.html`
3. Learning — `learning.html`
4. About — `about.html`

Requirements:

- Semantic HTML5
- Shared components
- Consistent spacing
- Accessibility-first design

---

#### Phase 3: JavaScript Functionality

Generate:

```text
js/main.js
```

Implement:

- Mobile menu toggle
- Active page highlighting
- Tool filtering
- Search functionality
- Accordion interactions
- Smooth scrolling

JavaScript should remain lightweight and framework-free.

---

### Reusability Requirements

Copilot should maximize reuse.

Examples:

- Shared cards
- Shared buttons
- Shared section headers
- Shared layouts
- Shared utility classes

Avoid duplicated code whenever possible.

---

### Accessibility Requirements

All generated code should follow accessibility best practices.

Requirements:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation support
- ARIA labels when appropriate
- Color contrast compliance
- Visible focus states

Target:

```text
Lighthouse Accessibility Score > 90
```

---

### Performance Requirements

Requirements:

- No frameworks
- No build tools
- No npm dependencies
- Lightweight JavaScript
- Minimal CSS duplication

Target:

```text
Lighthouse Performance Score > 90
```

---

### Content Expansion Strategy

The site should be easy to scale.

#### Adding a New Tool

Should only require:

- Adding a new card
- Adding metadata
- No redesign

#### Adding Learning Content

Should only require:

- Creating a new content entry
- Updating accordion data
- No structural changes

---

### Future Expansion Readiness

Code should support future additions without major refactoring.

Possible future features:

- Newsletter signup
- Blog platform
- User accounts
- Tool dashboards
- Course catalog
- Community resources
- AI-powered assistants

---

### Vibe Coding Workflow

#### Step 1

Review the PRD before generating any code.

#### Step 2

Generate `css/styles.css` first.

Focus on:

- Design system
- Responsive layouts
- Reusable components

Do not generate HTML or JavaScript yet.

#### Step 3

Generate `index.html`, `tools.html`, `learning.html`, `about.html` using the design system.

#### Step 4

Generate `js/main.js` with all shared interactive functionality.

#### Step 5

Refine the website iteratively through follow-up prompts while maintaining alignment with this PRD.

---

### Success Criteria for Copilot Agent

Implementation is considered successful when:

- The website reflects the Open xOps brand and mission.
- The website clearly communicates both tools and learning opportunities.
- Components are reusable and maintainable.
- The codebase remains lightweight and framework-free.
- New tools and resources can be added easily.
- Future enhancements can be implemented without major architectural changes.
- The website is suitable for deployment on GitHub Pages.

---

# Part 2: Wireframes

## Global Site Shell Wireframe

### Purpose

This layout applies to every page in the Open xOps site and defines the shared header, footer, and navigation structure.

```text
┌────────────────────────────────────────────────────────────────────┐
│ [Open xOps]    Home   Tools   Learning   About     [Get Started] │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│                         PAGE CONTENT HERE                          │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│ Mission statement / tagline                                       │
│ Copyright © 2026 Open xOps   GitHub   LinkedIn   Contact          │
│ Open Tools & Ideas for Real-World Impact                         │
└────────────────────────────────────────────────────────────────────┘
```

### Shared behaviors

- Sticky header
- Active page highlight in navigation
- Responsive mobile drawer menu
- Consistent footer across all pages
- Smooth scrolling between sections

### Notes

This element should remain reusable and page-agnostic so the site feels cohesive as pages are added.

---

## Home Page Wireframe

### Purpose

This page acts as the primary landing page and marketing interface for Open xOps.

```text
┌────────────────────────────────────────────────────────────────────┐
│ [Open xOps] Home Tools Learning About       [Get Started]         │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│                         OPEN TOOLS & IDEAS                       │
│ Open xOps creates tools and educational resources...             │
│                                                                    │
│        [Explore Tools]                  [Explore Learning]        │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│                  OUR MISSION / WHAT WE DO                        │
│                                                                    │
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐             │
│ │ Solve Real    │ │ Learn         │ │ Share Open    │
│ │ Problems      │ │ Ideas         │ │ Knowledge     │
│ │               │ │               │ │               │
│ │ practical     │ │ educational   │ │ accessible    │
│ │ tools...      │ │ content...    │ │ knowledge...  │
│ └───────────────┘ └───────────────┘ └───────────────┘             │
├────────────────────────────────────────────────────────────────────┤
│                   FEATURED TOOLS                                  │
│                                                                    │
│ ┌─────────────────────┐  ┌─────────────────────┐  ┌──────────────┐ │
│ │ WealthMap           │  │ Tool Name 2         │  │ Tool Name 3   │ │
│ │ Personal Finance    │  │ Category            │  │ Category      │ │
│ │ Active Development  │  │                    │  │               │ │
│ │ Desc...             │  │ Desc...             │  │ Desc...       │ │
│ │ [Learn More]        │  │ [Learn More]        │  │ [Learn More] │ │
│ └─────────────────────┘  └─────────────────────┘  └──────────────┘ │
├────────────────────────────────────────────────────────────────────┤
│                   FEATURED LEARNING                               │
│                                                                    │
│ ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐     │
│ │ Guide Title     │  │ Article Title   │  │ Course Title    │     │
│ │ Category        │  │ Category        │  │ Category        │     │
│ │ Summary...      │  │ Summary...      │  │ Summary...      │     │
│ │ [Read More]     │  │ [Read More]     │  │ [Read More]     │     │
│ └─────────────────┘  └─────────────────┘  └─────────────────┘     │
├────────────────────────────────────────────────────────────────────┤
│            EXPLORE TOOLS AND LEARNING RESOURCES...               │
│                              [Get Started]                       │
├────────────────────────────────────────────────────────────────────┤
│ Footer content...                                                 │
└────────────────────────────────────────────────────────────────────┘
```

### Sections

- Hero / headline
- Mission statement
- Featured tools
- Featured learning content
- CTA banner

### Notes

This page should feel clear, modern, and conversion-focused while staying aligned with the Open xOps mission and brand tone.

---

## Tools Page Wireframe

### Purpose

This page shows the catalog of Open xOps tools and supports search and category filtering.

```text
┌────────────────────────────────────────────────────────────────────┐
│ [Open xOps] Home Tools Learning About        [Get Started]        │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│                            TOOLS                                  │
│ Explore practical applications created by Open xOps...            │
│                                                                    │
│ ┌────────────────────┐ ┌──────────────────────────────────────┐ │
│ │ Search: __________ │ │ Category: [All ▼]                    │ │
│ └────────────────────┘ └──────────────────────────────────────┘ │
│                                                                    │
│ ┌───────────────────────────────────────────────────────────────┐ │
│ │ WealthMap                                                    │ │
│ │ Personal Finance            Active Development               │ │
│ │ Retirement readiness platform...                              │ │
│ │ [Launch Tool] [Learn More]                                    │ │
│ └───────────────────────────────────────────────────────────────┘ │
│                                                                    │
│ ┌───────────────────────────────────────────────────────────────┐ │
│ │ Tool Card 2                                                  │ │
│ │ Productivity                In Planning                       │ │
│ │ ...                                                          │ │
│ │ [Launch Tool] [Learn More]                                    │ │
│ └───────────────────────────────────────────────────────────────┘ │
│                                                                    │
│ ┌───────────────────────────────────────────────────────────────┐ │
│ │ Tool Card 3                                                  │ │
│ │ Career Development          Active                           │ │
│ │ ...                                                          │ │
│ │ [Launch Tool] [Learn More]                                    │ │
│ └───────────────────────────────────────────────────────────────┘ │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Page elements

- Page title and intro text
- Search field
- Category dropdown filter
- Tool cards with status, metadata, and actions
- Future support for more tools without redesign

### Interactions

- Live filtering by search input
- Category-based filtering
- Card visibility updates after each filter change

---

## Learning Page Wireframe

### Purpose

This page presents educational content and supports accordion-based browsing by category and type.

```text
┌────────────────────────────────────────────────────────────────────┐
│ [Open xOps] Home Tools Learning About      [Get Started]          │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│                   LEARNING RESOURCES                               │
│ Educational content designed to help individuals...               │
│                                                                    │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ │
│ │ Personal     │ │ Technology   │ │ Leadership   │ │ Professional │ │
│ │ Finance      │ │              │ │              │ │ Development  │ │
│ │             │ │              │ │              │ │              │ │
│ │ Retirement,  │ │ Cloud, AI,   │ │ Management, │ │ Certs,      │ │
│ │ investing... │ │ automation...│ │ communication│ │ learning     │ │
│ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘ │
│                                                                    │
│ Accordion sections:                                               │
│ + Courses                                                          │
│   Summary | Skill level | View resource                            │
│ + Workshops                                                        │
│ + Guides                                                           │
│ + Articles                                                         │
│ + Learning Paths                                                   │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Page elements

- Intro header and description
- Learning category cards
- Accordion sections for multiple types of content
- Resource summary and skill level detail

### Interactions

- Expand/collapse accordion sections
- Show and hide content details on demand
- Easy addition of new learning modules over time

---

## About Page Wireframe

### Purpose

This page communicates the Open xOps mission, principles, and long-term vision.

```text
┌────────────────────────────────────────────────────────────────────┐
│ [Open xOps] Home Tools Learning About        [Get Started]        │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│                            ABOUT                                   │
│                                                                    │
│ Open xOps was founded to create practical tools and educational   │
│ resources that help people make informed decisions...              │
│                                                                    │
├────────────────────────────────────────────────────────────────────┤
│                     CORE PRINCIPLES                                │
│                                                                    │
│ ┌─────────────────────┐ ┌─────────────────────┐                  │
│ │ Practical First     │ │ Open Learning       │                  │
│ │ Focus on outcomes   │ │ Accessible knowledge│                  │
│ └─────────────────────┘ └─────────────────────┘                  │
│                                                                    │
│ ┌─────────────────────┐ ┌─────────────────────┐                  │
│ │ Keep Improving      │ │ Community Driven    │                  │
│ │ Better tools...     │ │ Build with users... │                  │
│ └─────────────────────┘ └─────────────────────┘                  │
├────────────────────────────────────────────────────────────────────┤
│                     FUTURE VISION                                 │
│                                                                    │
│ - New applications and digital tools                              │
│ - Online courses                                                   │
│ - In-person workshops                                              │
│ - Learning pathways                                                │
│ - Community programs                                               │
│ - AI-powered learning experiences                                  │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Sections

- Company story
- Core principles
- Future initiative roadmap

### Notes

This page should reinforce trust, mission, and long-term educational impact without feeling overly corporate.
