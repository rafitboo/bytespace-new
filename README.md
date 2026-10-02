
# ByteSpace — Online Learning Platform

A modern, responsive e-learning web platform built with Next.js (App Router), TypeScript, and Tailwind CSS. Built to match the Figma design specifications with pixel-accurate layouts, reusable UI components, and smooth interactivity.

- **Live Demo:** [bytespace-new-beryl.vercel.app](https://bytespace-new-beryl.vercel.app/)
- **Pull Request (#1):** [github.com/rafitboo/bytespace-new/pull/1](https://github.com/rafitboo/bytespace-new/pull/1)

---

## Features & Pages

- **Landing Page (`/`):**
  - Blueprint grid background with floating 3D decorative ornaments and custom SVG color filtering (`#D3F832` / `#1A56EE`).
  - Partner logo cloud.
  - Filterable course catalog preview with frosted glass metadata pills.
  - Learning paths category grid.
  - Showcase sections for professional growth and creator onboarding.
  - Creator CTA banner and community testimonials.

- **Course Catalog (`/courses`):**
  - Full 12-course catalog grid with category filter pills and search bar.
  - Level/category controls and pagination navigation.

- **Course Overview (`/courses/overview`):**
  - Interactive tab navigation: **About**, **Lessons**, and **Reviews**.
  - Video preview player stage and sticky enrollment sidebar card.
  - Syllabus outline with integrated lesson progress tracking indicator (55%).
  - Customer review summary with dynamic rating breakdown bars.

- **Creator Profile (`/creators`):**
  - Profile header with bio, follower stats, and interactive follow toggle.
  - Catalog of courses published by the creator.

- **Authentication (`/login`, `/signup`):**
  - Responsive split-layout authentication views with social sign-in options.

- **Custom 404 (`/not-found`):**
  - Styled error page with high-contrast gradient typography and return-to-home navigation.

- **Unified Navigation & Layout:**
  - Responsive `<Navbar />` with desktop links and a mobile drawer menu.
  - Persistent `<Footer />` with newsletter subscription and site links.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx              # Root HTML & body shell
│   ├── page.tsx                # Landing page
│   ├── not-found.tsx           # Custom 404 error page
│   ├── login/
│   │   └── page.tsx            # Sign in view
│   ├── signup/
│   │   └── page.tsx            # Sign up view
│   ├── courses/
│   │   ├── page.tsx            # Full courses catalog & pagination
│   │   └── overview/
│   │       └── page.tsx        # Course syllabus, tabs, and enrollment
│   └── creators/
│       └── page.tsx            # Creator profile & portfolio
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Responsive navbar with mobile drawer
│   │   └── Footer.tsx          # Shared site footer & newsletter
│   └── sections/
│       ├── Hero.tsx            # Blueprint hero with 3D elements
│       ├── LogoCloud.tsx       # Partner brand logos
│       ├── CourseCatalog.tsx   # Filterable course cards
│       ├── LearningPaths.tsx   # Category badges
│       ├── ShowcaseSections.tsx# Split showcase & stat metrics
│       ├── CreatorCTA.tsx      # Creator invitation banner
│       └── Testimonials.tsx    # Learner review cards
└── public/
    └── assets/                 # Images, 3D ornaments, and logos

```

---

## Getting Started

### Prerequisites

* Node.js 18.17 or higher
* npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone [https://github.com/rafitboo/bytespace-new.git](https://github.com/rafitboo/bytespace-new.git)
cd bytespace-new

```


2. Install dependencies:
```bash
npm install

```


3. Start the development server:
```bash
npm run dev

```


4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
npm run build
npm run start

```

---

## Branching & Review Workflow

* Active development was conducted on the [`feature/bytespace-platform`](https://www.google.com/search?q=https://github.com/rafitboo/bytespace-new/tree/feature/bytespace-platform) branch.
* Submitted via **[Pull Request #1](https://github.com/rafitboo/bytespace-new/pull/1)** into `main` to preserve code diffs, commit history, and CI/CD verification.
