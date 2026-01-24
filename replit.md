# DigiUCard - Digital Identity Platform

## Overview

DigiUCard is a digital identity and portfolio platform by WoMacroMax Publishing. It serves as a modern "link in bio" style application that showcases digital business cards, articles, splash pages, digital ads, and documents. The platform allows users to share their professional identity, portfolio work, and content through customizable digital cards.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with custom theme variables
- **UI Components**: shadcn/ui component library (New York style)
- **Animations**: Framer Motion for smooth transitions and scroll-based effects
- **Fonts**: Custom typography using Archivo, Clash Display, and Playfair Display

The frontend follows a component-based architecture with pages in `client/src/pages/` and reusable components in `client/src/components/`. The design uses a light theme with blue accents and modern rounded card aesthetics.

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **Build Tool**: Vite for frontend, esbuild for server bundling
- **API Pattern**: RESTful endpoints under `/api/` prefix

The server handles API routes for articles and showcased cards, with static file serving for the production build.

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts` contains table definitions
- **Tables**: 
  - `articles` - Stores splash page/article entries with slug, title, image, and URL
  - `showcased_cards` - Digital card showcase entries with type, description, and external URLs
- **Migrations**: Managed via `drizzle-kit push`

### Shared Code
The `shared/` directory contains code used by both frontend and backend:
- Database schema definitions with Drizzle
- Zod validation schemas generated from Drizzle tables
- TypeScript types inferred from schema

### Build Process
- Development: Vite dev server with HMR, Express API server via tsx
- Production: Vite builds frontend to `dist/public`, esbuild bundles server to `dist/index.cjs`
- Server dependencies are selectively bundled to optimize cold start times

## External Dependencies

### Database
- PostgreSQL database (required `DATABASE_URL` environment variable)
- Drizzle ORM for type-safe database queries
- `connect-pg-simple` for session storage capability

### Third-Party Services
- **Supabase Storage**: Images and assets hosted on Supabase CDN (`xrwnptogkhxeyamjcxhd.supabase.co`)
- **External Links**: Cards link to `digiucard.com` and related properties

### Key Libraries
- **UI**: Radix UI primitives, Lucide icons, class-variance-authority
- **Data Fetching**: TanStack React Query
- **Forms**: React Hook Form with Zod resolvers
- **Date Handling**: date-fns

### Development Tools
- Replit-specific plugins for dev banner, error overlay, and cartographer
- Custom Vite plugin for OpenGraph meta image injection