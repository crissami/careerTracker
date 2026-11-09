# Ideas

Parked ideas that are outside the current phase of the roadmap in the README. New
ideas go here instead of into the code. An idea moves into a phase only when it is
decided, not when it is written down.

## Salary with currency and period

`salaryMin` / `salaryMax` are bare numbers, so they cannot say what the number
means. Real ads mix units: Worldly listed 45k–75k USD per year, Smart Apartment
listed 4000–4500 USD per month. Today the monthly one has to be converted to a
yearly equivalent by hand and explained in the notes, which is a lie waiting to be
misread.

Would need a currency field, a period field (`year` / `month`), and a decision
about whether the list normalizes for sorting and comparison.

Cheapest to decide when the PostgreSQL schema is designed in Phase 2. After that it
needs a migration.

Found while importing real applications on 2026-09-24.

## A richer source field

`source` is `linkedin | direct | referral | other`, which collapses things worth
telling apart: applying on a company site, emailing a person directly, an internal
referral, a recruiter reaching out first. Four buckets were not enough for a real
set of sixteen applications.

Same timing as the salary fields: decide it with the Phase 2 schema.

## Interview timeline

Phase 2 shows interviews as a plain list under an application. A timeline view
would read better once there are several rounds per application.

Parked on 2026-09-21.

## Fill the form from a pasted job ad

Paste the text of a job ad and the server extracts company, role, tech stack,
seniority, work type, location and salary into the form, for review before saving.
It would run on the server, so the API key never reaches the browser.

Not decided. It changes the project's "no AI" scope, so it stays here until there
is a decision.

Parked on 2026-11-09.
