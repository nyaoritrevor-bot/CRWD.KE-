# CRWD Architecture

This document is the reference architecture CRWD is built toward. It
reflects the target design from the product specification; sections
implemented so far are marked **(implemented)**, everything else is
**(planned — Phase N)**.

## 1. Monorepo **(implemented, skeleton)**

```
apps/web        Next.js app: public site + authenticated app shell
apps/worker      Background worker: automations, scheduled AI jobs, syncs
packages/ai       AI orchestrator, specialist agents, tools, memory
packages/database  Supabase client, typed queries, RLS-aware access layer
packages/types     Shared domain types (roles, risk levels, entities)
packages/ui        Cross-app design-system primitives
packages/config     Shared runtime configuration helpers
```

Boundaries: presentation (`apps/web` components/routes) never contains
business logic directly — that lives in `packages/*`. Database access is
isolated to `packages/database`. AI orchestration is isolated to
`packages/ai`. This keeps every layer extractable into a separate service
later without a rewrite.

## 2. Design system **(implemented)**

Dark, editorial, technology-forward. Tokens live in
`apps/web/src/app/globals.css`:

- **Base**: near-black background (`#0a0a0b`), charcoal surfaces
  (`#131316` / `#18181c`), hairline borders (`#232327` / `#333338`).
- **Type**: warm off-white foreground (`#f2f1ec`) with muted/faint steps
  for hierarchy.
- **Accent**: a single burnt-rust orange (`#cc5a28`), used sparingly.
- **Typefaces**: Geist Sans (UI/body) and Geist Mono (labels, data,
  eyebrows) via the local `geist` package (no external font fetch
  required), paired with an editorial serif system stack for display
  headlines.

## 3. Public website **(implemented: homepage + placeholders)**

Routes: `/`, `/services`, `/work`, `/ai`, `/about`, `/insights`,
`/contact`. The homepage carries all eight sections from the spec (hero,
positioning, services, AI capabilities, selected work, growth process, AI
Command Center preview, final CTA). Other routes are placeholders pending
the dedicated site build-out phase.

## 4. Authenticated application shell **(implemented: shell only)**

Mounted at `/dashboard` (`apps/web/src/app/dashboard/layout.tsx`):
sidebar with grouped navigation (Growth, System, Organization), top bar
with organization switcher, notifications, and user menu, and a
responsive slide-over nav on mobile. Presentational only — the org
switcher, notifications, and user identity are placeholder data pending
Phases 4–5 (auth, organizations, roles).

## 5. Database **(planned — Phase 6)**

PostgreSQL via Supabase. Every tenant-owned table carries
`organization_id`; Row Level Security enforces tenant isolation at the
database layer, never relying on frontend filtering alone. Planned
tables: `users`, `organizations`, `organization_members`,
`business_profiles`, `leads`, `campaigns`, `content_items`, `tasks`,
`ai_conversations`, `ai_messages`, `ai_memories`, `knowledge_documents`,
`knowledge_chunks`, `approvals`, `automations`, `integrations`,
`audit_logs`.

## 6. AI architecture **(planned — Phases 9–12)**

A CRWD Orchestrator routes each request to a specialist agent (Marketing,
Research, Content, Sales, Analytics, Operations) rather than using one
monolithic prompt. Pipeline:

```
message → auth → org context → permissions → memory retrieval
  → knowledge retrieval → intent classification → agent selection
  → tool selection → permission check → tool execution
  → result evaluation → response → optional memory storage → audit log
```

Memory is semantic (pgvector), scoped per organization, and selectively
written — not every conversation turn is persisted. Knowledge retrieval
chunks and embeds uploaded business documents for grounded answers.

## 7. Tools, permissions, risk, approvals **(planned — Phases 12, 14–17)**

Each tool declares its schema, required permissions, risk level, and
whether approval is required before it can run. Roles are `owner`,
`admin`, `manager`, `member`, `viewer`; AI actions always inherit the
acting user's permissions and are checked server-side. Risk levels are
`low` (auto-executable), `medium`/`high` (approval expected), and
`critical` (always requires explicit confirmation) — see
`packages/types/src/index.ts` for the shared `RiskLevel` type. No
high-risk action executes silently; approvals are recorded end to end
(`pending → approved/rejected → executed`) with an audit log entry.

## 8. Product surfaces **(planned — Phases 7–8, 13–19)**

Dashboard, AI Command Center, CRM, Campaigns, Content Studio, Analytics,
Automation engine (trigger → conditions → actions), and external
integrations — each scoped to its own phase in
`docs/development-plan.md`.

## 9. Security **(baseline in place, expands each phase)**

TypeScript strict mode and Zod validation are enforced from Phase 1
onward. Authentication, RLS, rate limiting, CSRF protection, encrypted
integration credentials, and audit logging are layered in as the phases
that need them land — no secrets or service-role keys are ever exposed
to the browser.
