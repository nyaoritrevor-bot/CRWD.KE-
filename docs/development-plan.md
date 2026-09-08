# CRWD Development Plan

Build order, held to strictly. Each phase inspects the current repo,
implements only what that phase scopes, runs typecheck/lint/tests, fixes
errors, and reports what changed plus the exact next step. No phase
begins until explicitly instructed.

| Phase | Scope | Status |
|---|---|---|
| 1 | Initialize repository and tooling | ✅ this delivery |
| 2 | Build design system | Partially covered by Phase 1's foundation; formalize as its own pass |
| 3 | Build public CRWD website | Homepage done; remaining routes pending |
| 4 | Implement Supabase authentication | Not started |
| 5 | Implement organizations and roles | Not started |
| 6 | Implement database schema and RLS | Not started |
| 7 | Build dashboard | Shell only; real modules pending |
| 8 | Build AI Command Center | Not started |
| 9 | Implement conversations and memory | Not started |
| 10 | Implement knowledge base | Not started |
| 11 | Implement specialist agents | Not started |
| 12 | Implement tools | Not started |
| 13 | Implement CRM | Not started |
| 14 | Implement campaigns | Not started |
| 15 | Implement content studio | Not started |
| 16 | Implement analytics | Not started |
| 17 | Implement approvals | Not started |
| 18 | Implement automations | Not started |
| 19 | Implement external integrations | Not started |
| 20 | Testing, security review, production deployment | Not started |

## Working agreement per phase

1. Inspect the current repository.
2. Understand existing code before touching it.
3. Identify dependencies on prior phases.
4. Implement only what's required for that phase.
5. Run typecheck/lint/tests.
6. Fix errors.
7. Explain what changed.
8. State the exact next step.

Never overwrite working functionality unnecessarily. Never invent
existing files or assume an API exists. Where a decision has multiple
reasonable implementations, take the simplest production-ready option
and document the decision.
