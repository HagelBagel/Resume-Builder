# Building a Modern Resume with Vue.js: A Developer's Approach to Personal Branding

As developers, we often find ourselves caught between two worlds: the technical complexity we love working with and the need to present ourselves clearly to non-technical recruiters and hiring managers. That's exactly the challenge I tackled when building this Vue.js Resume Builder – a responsive web application that showcases both technical skills and professional experience in a clean, accessible format.

## What It Does

This isn't your typical drag-and-drop resume builder. Instead, it's a single-page Vue.js application that renders professional resume and cover letter content in a mobile-first, responsive design. The app features a floating action button (FAB) navigation system that allows users to toggle between viewing different sections – resume and cover letter – with smooth animations powered by Vue's transition components.

The architecture leverages Vuex for state management, storing all resume data in a centralized store with proper getters for safe data access. Components are built following Vue 3's Composition API patterns, with a focus on reusability and maintainability. The styling uses Tailwind CSS with custom responsive breakpoints, ensuring the content looks polished on everything from mobile devices to large desktop screens.

## Technical Highlights

The project uses Tailwind's utility-first approach with responsive prefixes (`sm:`, `md:`, `lg:`) instead of custom CSS media queries. Components follow Vue patterns with separation between base components (`BaseToggle`, `BaseFab`) and content components (`ExperienceCard`, `EducationCard`). The sticky header resizes on scroll, and deployment is automated through a Node.js script that builds with Vite and uploads to the web server.

## The Developer Experience

Building this taught me quite a bit about balancing developer experience with end-user needs. The modular component architecture makes it easy to add new sections or modify existing ones, while the Vuex store pattern ensures data consistency across the application. The responsive design system scales naturally from mobile to desktop without sacrificing readability or functionality.

## Beyond Personal Use

While designed initially as a personal resume showcase, the structure makes it easily adaptable for other developers. The data is cleanly separated in store modules, making it straightforward to swap out content or even build a multi-user version.

This project demonstrates how modern frontend frameworks can be used for more than just complex web applications – sometimes the most effective solutions are the ones that solve simple problems really well.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to server
npm run deploy
```

## Tech Stack

- Vue.js 3
- Vuex
- Tailwind CSS
- Vite
- Node.js (deployment)
