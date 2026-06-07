# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Next.js on localhost:3000)
npm run build    # Production build (also runs TypeScript type checking)
npm run lint     # ESLint check
npm run start    # Start production server (requires build first)
```

There are no tests in this project.

## Architecture

This is a **Next.js 16 / React 19** portfolio site using the App Router, TypeScript, Tailwind CSS v4, Framer Motion, and Lucide React icons.

**Path alias:** `@/` maps to `src/` (configured in `tsconfig.json`).

### Key structure

- `src/app/` — App Router pages. `layout.tsx` wraps all pages with `Header` and `Footer`. `page.tsx` is the home page and is a `'use client'` component (required for Framer Motion).
- `src/components/` — All UI components. Components that use hooks or Framer Motion are `'use client'`.
- `src/data/projects.ts` — Single source of truth for all project data (`Project` type, `ProjectCategory` union, `projectsData` array). Add new projects here; `FeaturedProjects` auto-picks the first 3.
- `public/` — Static assets. Profile photo at `/Abdurrahman.jpg`; project images under `/images/`.

### Animation conventions

Framer Motion is used throughout. Common patterns:
- `containerVariants` + `itemVariants` for staggered list animations
- `whileInView` with `viewport={{ once: true }}` for scroll-triggered reveals
- `'use client'` is required on any component that imports from `framer-motion`

### Navigation

Nav links are defined in `Header.tsx` (`navLinks` array). Active link state uses `usePathname()`. The site links to `/projects`, `/about`, and `/contact` routes — these pages don't exist yet and need to be created under `src/app/`.

### Styling

Tailwind CSS v4 with `@tailwindcss/postcss`. Dark theme throughout (`bg-gray-950`, `text-gray-100`). Indigo/purple gradient is the primary accent (`from-indigo-400 to-purple-400`).
