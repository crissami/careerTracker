# careerTracker

Job application tracker, being turned from a local-first Angular app into a
full-stack one.

- **Today:** Angular 22, standalone, signals, zoneless, Reactive Forms, Tailwind v4,
  Angular CDK, IndexedDB via `idb`. No tests and no backend yet.
- **Direction (decided 2026-11-09):** full-stack. NestJS and PostgreSQL, Docker
  Compose for local development, session auth with an HttpOnly cookie and CSRF
  protection. The app stops being local-first once the backend lands.
- **Not decided:** any AI feature. Park AI ideas in `IDEAS.md` until Amelia decides.

## Why this project matters

This is the portfolio project for Amelia's job search: a full-stack role with
Angular as the strength. Interviewers will read this repo. Work that shows judgment
(tests, error handling, explained trade-offs) counts more than feature count.

## How we work

- Amelia writes the code. Claude explains, reviews, and unblocks. Claude does not
  write feature code unless Amelia explicitly asks for a specific exception.
- At least 2 hours a week of code written by hand, without AI.
- One new concept per message. One main fix per review; nits are batched later.
- When Amelia reports what she did, Claude checks it in the code and says honestly
  what is good and what is not.
- Ask Amelia to explain trade-offs out loud: why this option, what can go wrong,
  how to measure it. This is interview practice.
- Explain from fundamentals when needed. Last Angular written was v17/18 in 2024.
  Amelia has not written unit tests before, so testing starts from zero. NestJS is
  new; follow the order of the official docs.
- Step-by-step with small commits. No big-bang implementations.
- Romanian for conversation, English for code, commits, and docs.

## Scope

- The scope is the current phase in the README roadmap. Anything outside it goes
  to `IDEAS.md`, not into the code.
- Claude pushes back on scope creep and points to the current phase.
- Phase 1 order: Vitest setup, tests on the storage service, error handling and one
  shared database connection, then `resource()` for loading data.
- Fridays are for the Iterations newsletter, not for this project.

## Rules that protect data and the repo

- Do not bump the IndexedDB version (1) in Phase 1. Schema changes wait for the
  backend.
- Tests never touch the real browser database.
- Run `git status` before every commit. Never commit `dist/`, archives (`*.zip`)
  or `__MACOSX/`.
- From Phase 2: secrets live in `.env` files that are never committed, and are
  never baked into Docker images.

## Conventions

- Standalone components only. New control flow (`@if`, `@for`), no `*ngIf`/`*ngFor`.
- State in signals. `inject()` over constructor injection.
- Async data in new code: `resource()` (later `httpResource()`), not `ngOnInit`
  with manually set signals.
- Tests: `*.spec.ts` next to the file they test. Test the public contract of a
  service (what goes in, what comes out, what it throws), not the library under it.
- Folders: `src/app/core/` (services, storage), `src/app/features/<name>/`,
  `src/app/shared/` (reusable UI). The backend layout is decided at the start of
  Phase 2.
- Commit style: `<area>: <what>`, e.g. `applications: add list component`,
  `test: set up vitest`.
