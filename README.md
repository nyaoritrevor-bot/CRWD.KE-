# CRWD — AI-Native Growth Platform

CRWD is both a premium AI-powered growth firm and a software platform
containing an AI business and marketing operating system. This repository
is being built phase-by-phase; see `docs/architecture.md` for the full
system design and `docs/development-plan.md` for the phase-by-phase build
order.

**Status: Phase 1 — repository, tooling, and foundational shell.**

## What exists right now

- A working Next.js (App Router) application in `apps/web` with
  TypeScript, Tailwind CSS v4, and a hand-rolled shadcn/ui-style component
  layer (`components.json`, `src/components/ui`).
- The CRWD design system tokens in `apps/web/src/app/globals.css` —
  dark foundation, charcoal surfaces, a single warm rust accent, and an
  editorial serif/mono type pairing.
- The public homepage (`/`) with all eight sections from the product
  spec, plus lightweight placeholder pages for `/services`, `/work`,
  `/ai`, `/about`, `/insights`, and `/contact` (full content lands in the
  site build-out phase).
- The base authenticated application shell (sidebar, top bar, org
  switcher, notifications, responsive mobile nav) mounted at
  `/dashboard`. It is presentational only — no auth, data, or AI wiring
  yet.
- A monorepo skeleton (`apps/worker`, `packages/ai`, `packages/database`,
  `packages/types`, `packages/ui`, `packages/config`) with clean
  boundaries for business logic, database access, AI orchestration, and
  background jobs to land in as later phases are implemented.
- ESLint, Prettier, and TypeScript strict mode configured across the
  workspace.

Nothing beyond the above is implemented yet: no auth, no database schema,
no AI orchestrator, no CRM/campaigns/content data. Those are scoped to
later phases and intentionally out of scope for Phase 1.

## Monorepo layout

```
apps/
  web/        Next.js app — public site + authenticated app shell
  worker/     Background worker entrypoint (automations, AI jobs — later phases)
packages/
  ai/         AI orchestrator, agents, tools, memory (Phase 9+)
  database/   Supabase client + typed queries (Phase 6+)
  types/      Shared domain types
  ui/         Cross-app design-system primitives
  config/     Shared runtime config helpers
docs/
  architecture.md       System architecture reference
  development-plan.md   Full phase-by-phase build order
```

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in values once Phase 4+ needs them
npm run dev
```

The app runs at `http://localhost:3000`. The public homepage is at `/`;
the application shell scaffold is at `/dashboard`.

Other useful scripts, run from the repo root:

```bash
npm run lint         # ESLint across apps/web
npm run typecheck     # TypeScript project-references check across workspaces
npm run build         # Production build of apps/web
npm run format        # Prettier write
npm run format:check  # Prettier check (CI)
```

## Conventions

- TypeScript strict mode; avoid `any`.
- Validate all external input with Zod (introduced as API routes land).
- Business logic stays out of React components — it belongs in
  `packages/*` or route handlers.
- Server-side authorization only; never trust client-side checks.
- Keep components small and composable.

See `docs/architecture.md` for the AI pipeline, permission model, risk
system, and database design that later phases build against.
