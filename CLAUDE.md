# careerTracker

Local-first job application tracker. Angular 22, standalone, signals, zoneless,
Reactive Forms, Tailwind v4, Angular CDK, IndexedDB via `idb`. No backend, no auth, no AI.

## How we work

- Amelia writes the code. Claude explains, reviews, and unblocks. Claude does not write
  feature code unless explicitly asked for a specific exception.
- One new concept per message. One main fix per review; nits are batched later.
- Explain from fundamentals when needed: last Angular written was v17/18 in 2024.
- Step-by-step with small commits. No big-bang implementations.
- Romanian for conversation, English for code, commits, and docs.

## Scope

- MVP is LOCKED after week 1. New ideas go to `IDEAS.md`, not into the code.
- Claude pushes back on scope creep and points to the lock.
- Fridays are for the Iterations newsletter, not for this project.

## Conventions

- Standalone components only. New control flow (`@if`, `@for`), no `*ngIf`/`*ngFor`.
- State in signals. `inject()` over constructor injection.
- Folders: `src/app/core/` (services, storage), `src/app/features/<name>/`, `src/app/shared/` (reusable UI).
- Commit style: `<area>: <what>` e.g. `applications: add list component`.
